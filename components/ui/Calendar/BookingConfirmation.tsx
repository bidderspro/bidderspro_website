"use client";

import React from 'react';
import { Calendar as CalendarIcon, Clock, Users, Check } from 'lucide-react';

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
    <div className="w-full max-w-md mx-auto text-center">
      <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-4">
        <Check className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="text-xl font-medium mb-2">Meeting Scheduled!</h3>
      <p className="text-gray-300 mb-6">
        {submitMessage}
      </p>
      
      <div className="bg-gray-800/60 rounded-lg p-6 mb-6">
        <div className="mb-4 flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-violet-500" />
          <span className="font-medium">
            {date?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </span>
        </div>
        <div className="mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-violet-500" />
          <span className="font-medium">{time}</span>
        </div>
        <div className="mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-violet-500" />
          <span className="font-medium">
            {meetingTypeTitle}
          </span>
        </div>
      </div>
      
      <button
        onClick={onResetBooking}
        className="px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-colors duration-200"
      >
        Schedule Another Meeting
      </button>
    </div>
  );
} 