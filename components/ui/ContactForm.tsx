"use client";
import React, { useState } from "react";

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
    <section className="px-6 py-20 sm:px-8 md:px-10 lg:px-16 xl:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-gray-200 sm:text-4xl md:text-5xl sm:mb-8 text-center">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-violet-500 text-gray-100"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-violet-500 text-gray-100"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-violet-500 text-gray-100"
            >
              <option value="">Select a service</option>
              <option value="upwork-automation">Upwork Automation</option>
              <option value="profile-optimization">Profile Optimization</option>
              <option value="consulting">Consulting</option>
              <option value="other">Other</option>
            </select>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-violet-500 text-gray-100"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Tell us about your needs..."
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-violet-500 text-gray-100"
          />

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 disabled:opacity-50 transition-colors duration-200"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {submitMessage && (
          <div className="mt-6 text-center text-sm text-gray-300">
            <p>{submitMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}
