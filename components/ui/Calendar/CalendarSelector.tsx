"use client";

import React, { useState, useEffect } from 'react';

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

export default function CalendarSelector({
  onDateSelect,
  onTimeSelect,
  selectedDate,
  selectedTime
}: CalendarSelectorProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);

  // Generate available time slots for the selected date
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

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    
    const daysInMonth = lastDayOfMonth.getDate();
    const startingDayIndex = firstDayOfMonth.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    const calendarDays = [];
    
    // Add empty days for the start of the month
    for (let i = 0; i < startingDayIndex; i++) {
      calendarDays.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      // Don't allow booking in the past
      const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
      calendarDays.push({ date, isPast });
    }
    
    return calendarDays;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const calendarDays = generateCalendarDays();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={handlePrevMonth}
          className="p-2 rounded-full hover:bg-violet-600/20 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        <h2 className="text-xl font-semibold">
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </h2>
        <button 
          onClick={handleNextMonth}
          className="p-2 rounded-full hover:bg-violet-600/20 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-300">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
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
          
          return (
            <button
              key={`day-${date.getDate()}`}
              className={`h-10 w-10 flex items-center justify-center rounded-full transition-colors duration-200 ${
                isSelected ? 'bg-violet-600 text-white' : 
                isToday ? 'border border-violet-500 text-violet-500' : 
                isPast ? 'text-gray-500 cursor-not-allowed' : 'hover:bg-violet-600/20'
              }`}
              onClick={() => !isPast && onDateSelect(date)}
              disabled={isPast}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
      
      {selectedDate && (
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3">
            Available times for {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map(slot => (
              <button
                key={slot.id}
                className={`p-2 rounded-lg text-center transition-colors duration-200 ${
                  selectedTime === slot.time ? 'bg-violet-600 text-white' :
                  slot.available ? 'bg-gray-800/60 hover:bg-violet-600/20' : 'bg-gray-800/30 text-gray-500 cursor-not-allowed'
                }`}
                onClick={() => slot.available && onTimeSelect(slot.time)}
                disabled={!slot.available}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 