"use client";
import React, { useState } from "react";
import { TextAnimate } from "../magicui/text-animate";

interface FormData {
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

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch(
        "https://hook.eu2.make.com/y4465857i9pfwfthwtqgst7tlymsq9jz",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitMessage("Thank you for your message! We'll be in touch soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitMessage("Something went wrong. Please try again later.");
      }
    } catch (error) {
      setSubmitMessage("Error: Unable to submit. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <section className="px-4 py-16 sm:px-6 md:px-8 lg:px-12 xl:px-1">
      <div className="max-w-4xl mx-auto bg-gradient-to-br bg-violet-500/30 p-8 rounded-2xl shadow-xl backdrop-blur-md">
        <TextAnimate as={'h1'} animate='fadeIn' className="mb-8 text-3xl font-bold uppercase text-gray-100 sm:text-4xl md:text-5xl text-center">
          Get in Touch
        </TextAnimate>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-200">First Name</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg bg-gray-800/60 border ${errors.phone ? 'border-red-500' : 'border-gray-600'} focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-gray-100 placeholder-gray-400`}
                placeholder="+1 (555) 000-0000"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div className="space-y-2 md:col-span-2">
              <label htmlFor="service" className="block text-sm font-medium text-gray-200">Service</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg bg-gray-800/60 border ${errors.service ? 'border-red-500' : 'border-gray-600'} focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-gray-100`}
              >
                <option value="">Select a service</option>
                <option value="automation">Automation</option>
                <option value="linkedin-automation">LinkedIn Automation</option>
                <option value="b2b-consultation">B2B Consultation</option>
              </select>
              {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
            </div>

            <div className="space-y-2 md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-200">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-2 rounded-lg bg-gray-800/60 border ${errors.message ? 'border-red-500' : 'border-gray-600'} focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-gray-100 placeholder-gray-400`}
                placeholder="Tell us about your needs..."
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 disabled:opacity-50 transition-colors duration-200 text-lg font-medium shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {submitMessage && (
          <div className={`mt-6 text-center text-sm font-medium p-4 rounded-lg ${submitMessage.includes('Error') ? 'bg-red-500/20 text-red-100' : 'bg-green-500/20 text-green-100'}`}>
            <p>{submitMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}
