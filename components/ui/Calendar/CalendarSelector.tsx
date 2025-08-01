"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface CalendarSelectorProps {
  onDateSelect: (date: Date) => void;
  onTimeSelect: (time: string) => void;
  selectedDate: Date | null;
  selectedTime: string;
}

// Check for reduced motion preference
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const onChange = () => setPrefersReducedMotion(mediaQuery.matches);
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', onChange);
      return () => mediaQuery.removeEventListener('change', onChange);
    } else {
      mediaQuery.addListener(onChange);
      return () => mediaQuery.removeListener(onChange);
    }
  }, []);
  
  return prefersReducedMotion;
};

export default function CalendarSelector({
  onDateSelect,
  onTimeSelect,
  selectedDate,
  selectedTime
}: CalendarSelectorProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [animationDirection, setAnimationDirection] = useState<'left' | 'right'>('right');
  const prefersReducedMotion = useReducedMotion();

  // Generate available time slots for the selected date - memoized to prevent unnecessary recalculations
  useEffect(() => {
    if (selectedDate) {
      // In a real app, these would come from an API based on availability
      const slots = [];
      // Generate slots from 9 AM to 5 PM
      for (let hour = 9; hour < 17; hour++) {
        for (let min = 0; min < 60; min += 30) {
          const timeString = `${hour.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`;
          slots.push({
            id: `time-${timeString}`,
            time: timeString,
            available: Math.random() > 0.3, // Random availability for demo purposes
          });
        }
      }
      setTimeSlots(slots);
    }
  }, [selectedDate]);

  // Memoize calendar days to prevent recalculation on each render
  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    
    const daysInMonth = lastDayOfMonth.getDate();
    const startingDayIndex = firstDayOfMonth.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    const days = [];
    
    // Add empty days for the start of the month
    for (let i = 0; i < startingDayIndex; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      // Don't allow booking in the past
      const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
      days.push({ date, isPast });
    }
    
    return days;
  }, [currentDate]);

  const handlePrevMonth = () => {
    setAnimationDirection('left');
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setAnimationDirection('right');
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Simplified animations for better performance
  const fadeAnimation = prefersReducedMotion ? {} : {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 }
  };

  const monthAnimation = prefersReducedMotion ? {} : {
    initial: { opacity: 0, y: animationDirection === 'right' ? 10 : -10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  return (
    <div className="w-full max-w-md mx-auto">
      {/* Calendar Header */}
      <div className="relative mb-6">
        <div className="flex items-center justify-between">
          <button 
            onClick={handlePrevMonth}
            className="p-3 rounded-full hover:bg-violet-600/20 transition-colors duration-200 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Previous month"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <motion.h2 
            key={`${currentDate.getMonth()}-${currentDate.getFullYear()}`}
            {...monthAnimation}
            className="text-2xl font-bold text-white"
          >
            {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
          </motion.h2>
          
          <button 
            onClick={handleNextMonth}
            className="p-3 rounded-full hover:bg-violet-600/20 transition-colors duration-200 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Next month"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        
        {/* Simplified decorative elements */}

      </div>
      
      {/* Days of Week Header */}
      <div className="grid grid-cols-7 gap-1 mb-3">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center text-sm font-medium text-violet-300 py-1">
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar Grid - Using CSS transitions instead of framer-motion for better performance */}
      <div className="grid grid-cols-7 gap-1.5 mb-6">
        {calendarDays.map((day, index) => {
          if (day === null) {
            return <div key={`empty-${index}`} className="h-10 w-10" />;
          }
          
          const { date, isPast } = day;
          const isSelected = selectedDate && 
                            date.getDate() === selectedDate.getDate() && 
                            date.getMonth() === selectedDate.getMonth() && 
                            date.getFullYear() === selectedDate.getFullYear();
          
          const isToday = date.toDateString() === new Date().toDateString();
          
          // Use CSS transitions instead of framer-motion for calendar days
          return (
            <button
              key={`day-${date.getDate()}`}
              className={`h-10 w-10 flex items-center justify-center rounded-full transition-all duration-200 ${
                isSelected ? 'bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/30' : 
                isToday ? 'border-2 border-violet-400 text-violet-400' : 
                isPast ? 'text-gray-500 cursor-not-allowed' : 'hover:bg-violet-600/20 text-white'
              }`}
              onClick={() => !isPast && onDateSelect(date)}
              disabled={isPast}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
      
      {/* Time Slots with optimized rendering */}
      {selectedDate && (
        <motion.div
          {...fadeAnimation}
          className="mt-8 bg-gray-800/30 backdrop-blur-sm p-5 rounded-xl border border-gray-700"
        >
          <h3 className="text-lg font-medium mb-4 text-white flex items-center">
            <span className="w-2 h-8 bg-violet-500 rounded-full mr-3"></span>
            Available times for {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </h3>
          
          {/* Optimize time slot rendering with CSS grid instead of individual animations */}
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((slot) => (
              <button
                key={slot.id}
                className={`p-2.5 rounded-lg text-center transition-all duration-200 flex items-center justify-center gap-2 ${
                  selectedTime === slot.time ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-600/30' :
                  slot.available ? 'bg-gray-800/60 hover:bg-violet-600/30 text-white' : 'bg-gray-800/30 text-gray-500 cursor-not-allowed'
                }`}
                onClick={() => slot.available && onTimeSelect(slot.time)}
                disabled={!slot.available}
              >
                <Clock className="w-3.5 h-3.5" />
                {slot.time}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
} 