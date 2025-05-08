"use client";
import React, { useState } from "react";

import { TextAnimate } from "../magicui/text-animate";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxQGWe-40Q4xgCtabLLBHa47dGYkM1lh1qvPhmgCc3nXFccpBhVVraPaMmskyOi3TUA6Q/exec",
        {
          method: "POST",
          body: new URLSearchParams(formData as any),
        }
      );

      if (response.ok) {
        setSubmitMessage("Thank you for your message! We'll be in touch soon.");
        setFormData({
          fullName: "",
          email: "",
          service: "",
          phone: "",
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
        <TextAnimate as={'h1'} animate='fadeIn'  className="mb-8 text-3xl font-bold uppercase text-gray-100 sm:text-4xl md:text-5xl text-center">
          Get in touch 
        </TextAnimate>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-200">Full Name</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-lg bg-gray-800/60 border border-gray-600 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-gray-100 placeholder-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-2 rounded-lg bg-gray-800/60 border border-gray-600 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-gray-100 placeholder-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="block text-sm font-medium text-gray-200">Service</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800/60 border border-gray-600 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-gray-100"
              >
                <option value="">Select a service</option>
                <option value="upwork-automation">Upwork Automation</option>
                <option value="profile-optimization">Profile Optimization</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-200">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-2 rounded-lg bg-gray-800/60 border border-gray-600 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-gray-100 placeholder-gray-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-200">How can we help you?</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Tell us about your needs..."
              className="w-full px-4 py-2 rounded-lg bg-gray-800/60 border border-gray-600 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-gray-100 placeholder-gray-400"
            />
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
          <div className="mt-6 text-center text-sm font-medium text-gray-200 bg-gray-800/40 p-4 rounded-lg">
            <p>{submitMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}
