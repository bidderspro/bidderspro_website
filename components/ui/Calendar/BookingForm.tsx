"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MessageSquare, ChevronLeft, Send, LayoutList } from 'lucide-react';

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

interface BookingFormProps {
  formData: BookingFormData;
  errors: FormErrors;
  isSubmitting: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
}

export default function BookingForm({
  formData,
  errors,
  isSubmitting,
  onInputChange,
  onSubmit,
  onBack
}: BookingFormProps) {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.3 } }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
          <span className="w-2 h-8 bg-violet-500 rounded-full mr-3"></span>
          Enter Your Details
        </h3>
        
        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/10 rounded-full blur-xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-blue-600/10 rounded-full blur-xl pointer-events-none"></div>
      </div>

      <motion.form 
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={onSubmit} 
        className="space-y-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div variants={item} className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-200">First Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={onInputChange}
                className={`w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800/60 border ${errors.firstName ? 'border-red-500' : 'border-gray-600'} focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-gray-100 placeholder-gray-400 shadow-sm transition-all duration-200`}
                placeholder="John"
              />
            </div>
            {errors.firstName && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-xs mt-1"
              >
                {errors.firstName}
              </motion.p>
            )}
          </motion.div>

          <motion.div variants={item} className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-200">Last Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={onInputChange}
                className={`w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800/60 border ${errors.lastName ? 'border-red-500' : 'border-gray-600'} focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-gray-100 placeholder-gray-400 shadow-sm transition-all duration-200`}
                placeholder="Doe"
              />
            </div>
            {errors.lastName && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-xs mt-1"
              >
                {errors.lastName}
              </motion.p>
            )}
          </motion.div>

          <motion.div variants={item} className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={onInputChange}
                className={`w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800/60 border ${errors.email ? 'border-red-500' : 'border-gray-600'} focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-gray-100 placeholder-gray-400 shadow-sm transition-all duration-200`}
                placeholder="john@example.com"
              />
            </div>
            {errors.email && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-xs mt-1"
              >
                {errors.email}
              </motion.p>
            )}
          </motion.div>

          <motion.div variants={item} className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-200">Phone Number</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={onInputChange}
                className={`w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800/60 border ${errors.phone ? 'border-red-500' : 'border-gray-600'} focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-gray-100 placeholder-gray-400 shadow-sm transition-all duration-200`}
                placeholder="+1 (555) 000-0000"
              />
            </div>
            {errors.phone && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-xs mt-1"
              >
                {errors.phone}
              </motion.p>
            )}
          </motion.div>
        </div>

        <motion.div variants={item} className="space-y-2">
          <label htmlFor="service" className="block text-sm font-medium text-gray-200">Service</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LayoutList className="h-5 w-5 text-gray-400" />
            </div>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={onInputChange}
              className={`w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800/60 border ${errors.service ? 'border-red-500' : 'border-gray-600'} focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-gray-100 appearance-none shadow-sm transition-all duration-200`}
            >
              <option value="">Select a service</option>
              <option value="upwork-automation">Upwork Automation</option>
              <option value="linkedin-automation">LinkedIn Automation</option>
              <option value="b2b-consultation">B2B Consultation</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          {errors.service && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs mt-1"
            >
              {errors.service}
            </motion.p>
          )}
        </motion.div>

        <motion.div variants={item} className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-200">Message</label>
          <div className="relative">
            <div className="absolute top-3 left-3 flex items-start pointer-events-none">
              <MessageSquare className="h-5 w-5 text-gray-400" />
            </div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={onInputChange}
              rows={4}
              className={`w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800/60 border ${errors.message ? 'border-red-500' : 'border-gray-600'} focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-gray-100 placeholder-gray-400 shadow-sm transition-all duration-200`}
              placeholder="Tell us about your needs..."
            />
          </div>
          {errors.message && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs mt-1"
            >
              {errors.message}
            </motion.p>
          )}
        </motion.div>

        <motion.div 
          variants={item}
          className="pt-5 flex justify-between items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={onBack}
            className="px-4 py-2 flex items-center gap-2 text-violet-400 hover:text-violet-300 focus:outline-none"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg hover:from-violet-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 transition-all duration-200 text-lg font-medium shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Scheduling...
              </>
            ) : (
              <>
                Schedule Meeting
                <Send className="h-5 w-5 ml-2" />
              </>
            )}
          </motion.button>
        </motion.div>
      </motion.form>
    </div>
  );
} 