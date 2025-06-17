"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Users, Check, CalendarPlus, CheckCircle } from 'lucide-react';

interface MeetingDetails {
  date: Date | null;
  time: string;
  meetingType: string;
  meetingTypeTitle: string;
}

interface BookingConfirmationProps {
  meetingDetails: MeetingDetails;
  submitMessage: string;
  onResetBooking: () => void;
}

export default function BookingConfirmation({
  meetingDetails,
  submitMessage,
  onResetBooking
}: BookingConfirmationProps) {
  const { date, time, meetingTypeTitle } = meetingDetails;

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.6 
        }}
        className="flex justify-center mb-8"
      >
        <div className="relative">
          <div className="w-24 h-24 mx-auto rounded-full bg-green-500/20 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          
          {/* Animated success rings */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: [0, 0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-4 border-green-500/30"
          />
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.5, opacity: [0, 0.3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            className="absolute inset-0 rounded-full border-4 border-green-500/20"
          />
        </div>
      </motion.div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-center text-white mb-2">Booking Confirmed!</h3>
        <p className="text-center text-gray-300 mb-8">
          {submitMessage}
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 mb-8 border border-gray-700 shadow-xl"
      >
        <div className="relative overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-cyan-600/10 rounded-full blur-2xl"></div>
          
          <h4 className="text-lg font-medium text-white mb-4 relative">Meeting Details</h4>
          
          <div className="space-y-4 relative">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
              className="flex items-center gap-4 p-3 bg-gray-800/60 rounded-lg border border-gray-700"
            >
              <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400">
                <CalendarIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Date</div>
                <div className="text-white font-medium">
                  {date?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.3 }}
              className="flex items-center gap-4 p-3 bg-gray-800/60 rounded-lg border border-gray-700"
            >
              <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Time</div>
                <div className="text-white font-medium">
                  {time}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.3 }}
              className="flex items-center gap-4 p-3 bg-gray-800/60 rounded-lg border border-gray-700"
            >
              <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Meeting Type</div>
                <div className="text-white font-medium">
                  {meetingTypeTitle}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="flex justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onResetBooking}
          className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg hover:from-violet-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 flex items-center gap-2"
        >
          <CalendarPlus className="w-5 h-5" />
          Schedule Another Meeting
        </motion.button>
      </motion.div>
    </div>
  );
} 