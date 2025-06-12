"use client";

import React from 'react';

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
  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-xl font-medium mb-4">Enter Your Details</h3>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-200">First Name</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={onInputChange}
              className={`w-full px-4 py-2 rounded-lg bg-gray-800/60 border ${errors.firstName ? 'border-red-500' : 'border-gray-600'} focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-gray-100 placeholder-gray-400`}
              placeholder="John"
            />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-200">Last Name</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={onInputChange}
              className={`w-full px-4 py-2 rounded-lg bg-gray-800/60 border ${errors.lastName ? 'border-red-500' : 'border-gray-600'} focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-gray-100 placeholder-gray-400`}
              placeholder="Doe"
            />
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={onInputChange}
              className={`w-full px-4 py-2 rounded-lg bg-gray-800/60 border ${errors.email ? 'border-red-500' : 'border-gray-600'} focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-gray-100 placeholder-gray-400`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-200">Phone Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={onInputChange}
              className={`w-full px-4 py-2 rounded-lg bg-gray-800/60 border ${errors.phone ? 'border-red-500' : 'border-gray-600'} focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-gray-100 placeholder-gray-400`}
              placeholder="+1 (555) 000-0000"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="block text-sm font-medium text-gray-200">Service</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={onInputChange}
            className={`w-full px-4 py-2 rounded-lg bg-gray-800/60 border ${errors.service ? 'border-red-500' : 'border-gray-600'} focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-gray-100`}
          >
            <option value="">Select a service</option>
            <option value="upwork-automation">Upwork Automation</option>
            <option value="linkedin-automation">LinkedIn Automation</option>
            <option value="b2b-consultation">B2B Consultation</option>
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-200">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={onInputChange}
            rows={4}
            className={`w-full px-4 py-2 rounded-lg bg-gray-800/60 border ${errors.message ? 'border-red-500' : 'border-gray-600'} focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-gray-100 placeholder-gray-400`}
            placeholder="Tell us about your needs..."
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        <div className="pt-4 flex justify-between items-center">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2 text-violet-400 hover:text-violet-300 focus:outline-none"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 disabled:opacity-50 transition-colors duration-200 text-lg font-medium shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? "Scheduling..." : "Schedule Meeting"}
          </button>
        </div>
      </form>
    </div>
  );
} 