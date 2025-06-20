"use client";

import React, { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Simple loading fallbacks
const LoadingFallback = ({ height = "h-96" }: { height?: string }) => (
  <div className={`${height} animate-pulse bg-gray-800/20 rounded-lg w-full`} />
);

// Dynamically import TextAnimate component with loading fallback
const TextAnimate = dynamic(
  () => import("@/components/magicui/text-animate").then(mod => mod.TextAnimate),
  { 
    loading: () => <LoadingFallback height="h-16" />,
    ssr: false // Only load on client to reduce initial load
  }
);

// Dynamically import Calendar UI components with loading fallbacks
const ProgressBar = dynamic(
  () => import("@/components/ui/Calendar/ProgressBar"),
  { loading: () => <LoadingFallback height="h-8" />, ssr: false }
);

// Only load the component needed for the current step
const CalendarSelector = dynamic(
  () => import("@/components/ui/Calendar/CalendarSelector"),
  { loading: () => <LoadingFallback />, ssr: false }
);

const MeetingTypeSelector = dynamic(
  () => import("@/components/ui/Calendar/MeetingTypeSelector"),
  { loading: () => <LoadingFallback />, ssr: false }
);

const BookingForm = dynamic(
  () => import("@/components/ui/Calendar/BookingForm"),
  { loading: () => <LoadingFallback />, ssr: false }
);

const BookingConfirmation = dynamic(
  () => import("@/components/ui/Calendar/BookingConfirmation"),
  { loading: () => <LoadingFallback />, ssr: false }
);

// Types
import { BookingData, FormErrors, MeetingType } from "@/components/ui/Calendar/types";
import { getMeetingTypes } from "@/lib/meetingTypes";

export default function CalendarPage() {
  // Main state
  const [step, setStep] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [meetingTypeTitle, setMeetingTypeTitle] = useState<string>("");
  
  // Form state
  const [bookingData, setBookingData] = useState<BookingData>({
    date: null,
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    meetingType: "30-minute-consultation",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Available meeting types
  const meetingTypes = getMeetingTypes();

  // Event handlers
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setBookingData(prev => ({ ...prev, date }));
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setBookingData(prev => ({ ...prev, time }));
    setStep(2);
  };

  const handleMeetingTypeSelect = (typeId: string) => {
    const selectedType = meetingTypes.find((mt: MeetingType) => mt.id === typeId);
    setBookingData(prev => ({ ...prev, meetingType: typeId }));
    if (selectedType) {
      setMeetingTypeTitle(selectedType.title);
    }
    setStep(3);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'service', 'message'] as const;
    
    requiredFields.forEach(field => {
      if (!bookingData[field]?.trim()) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')} is required`;
      }
    });
    
    if (bookingData.email && !/\S+@\S+\.\S+/.test(bookingData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch(
        "https://hook.eu2.make.com/6hy94yjeesgky8qptb0yrsntrnqess2y",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...bookingData,
            date: bookingData.date?.toISOString(),
            meetingType: meetingTypes.find((mt: MeetingType) => mt.id === bookingData.meetingType)?.title || bookingData.meetingType
          }),
        }
      );

      if (response.ok) {
        setSubmitMessage("Your meeting has been scheduled successfully! We'll send you a confirmation email shortly.");
        setStep(4);
      } else {
        setSubmitMessage("Something went wrong. Please try again later.");
      }
    } catch (error) {
      setSubmitMessage("Error: Unable to schedule meeting. Please try again.");
    }

    setIsSubmitting(false);
  };

  const resetBooking = () => {
    setStep(1);
    setSelectedDate(null);
    setSelectedTime("");
    setBookingData({
      date: null,
      time: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      meetingType: "30-minute-consultation",
      service: "",
      message: "",
    });
  };

  // Step components - Only render the component for the current step
  const renderCurrentStep = () => {
    switch (step) {
      case 1:
        return (
          <CalendarSelector 
            onDateSelect={handleDateSelect}
            onTimeSelect={handleTimeSelect}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
          />
        );
      case 2:
        return (
          <MeetingTypeSelector
            selectedType={bookingData.meetingType}
            onTypeSelect={handleMeetingTypeSelect}
          />
        );
      case 3:
        return (
          <BookingForm
            formData={bookingData}
            errors={errors}
            isSubmitting={isSubmitting}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            onBack={() => setStep(2)}
          />
        );
      case 4:
        return (
          <BookingConfirmation
            meetingDetails={{
              date: selectedDate,
              time: selectedTime,
              meetingType: bookingData.meetingType,
              meetingTypeTitle: meetingTypeTitle
            }}
            submitMessage={submitMessage}
            onResetBooking={resetBooking}
          />
        );
      default:
        return null;
    }
  };

  // Simplified animations with reduced motion preference
  const fadeIn = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  return (
    <div className="min-h-screen">
      {/* Reduced number of decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full filter blur-[120px] opacity-70"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/20 rounded-full filter blur-[120px] opacity-70"></div>
      
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 md:px-8 relative z-10">
        <motion.div
          {...fadeIn}
          className="text-center mb-12"
        >
          <TextAnimate 
            as="h1" 
            animate="fadeIn" 
            className="text-5xl md:text-6xl font-bold mb-4 text-white"
          >
            Book a Meeting
          </TextAnimate>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl text-center text-gray-300 mb-6 max-w-2xl mx-auto"
          >
            Schedule a consultation with our team to discuss how we can help automate your business processes and increase efficiency.
          </motion.p>
          
          <div className="h-1 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full mx-auto w-20" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative p-8 rounded-2xl backdrop-blur-lg max-w-3xl mx-auto"
        >
          {/* Glass card effect */}
          <div className="absolute inset-0 bg-white/5 rounded-2xl border border-white/10 shadow-xl z-0"></div>
          
          <div className="relative z-10">
            <ProgressBar currentStep={step} totalSteps={4} />
            
            <Suspense fallback={<LoadingFallback />}>
              <motion.div
                key={`step-${step}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-8"
              >
                {renderCurrentStep()}
              </motion.div>
            </Suspense>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
