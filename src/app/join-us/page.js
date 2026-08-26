"use client";

import { useState } from "react";
import Link from "next/link";

export default function JoinPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    department: "ECE",
    year: "1st Year",
    interest: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "7666d21a-9f23-4885-bca7-b0a3af77d934", // <-- PASTE YOUR WEB3FORMS ACCESS KEY HERE
          subject: `New IEEE ComSoc Application: ${formData.fullName}`,
          from_name: "IEEE ComSoc Portal",
          name: formData.fullName,
          email: formData.email,
          department: formData.department,
          academic_year: formData.year,
          interest: formData.interest || "Not specified",
          message: formData.message || "No message provided",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({
          fullName: "",
          email: "",
          department: "ECE",
          year: "1st Year",
          interest: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Something went wrong.");
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, error: err.message });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
          Become Part of ComSoc
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
          Join the <span className="text-cyan-400">Next Generation</span> of Communication Innovators
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Whether you want to learn wireless technologies, participate in hackathons, or build leadership skills, our chapter is open to all passionate students.
        </p>
      </div>

      {/* Membership Levels / Guidance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Chapter Participation</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              Open to all university students! Attend our workshops, seminars, technical sessions, and open project showcases without any formal prerequisites.
            </p>
          </div>
          <div className="pt-4 border-t border-slate-800/80">
            <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
              Free & Open to All Students
            </span>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Official IEEE Membership</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              Get official membership with IEEE and IEEE Communications Society. Unlock access to IEEE Xplore digital library, conference discounts, and global networking.
            </p>
          </div>
          <div className="pt-4 border-t border-slate-800/80">
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-cyan-400 hover:underline font-semibold"
            >
              Learn about IEEE Student Membership →
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Application Form Section */}
      <div className="bg-slate-900/60 border border-cyan-500/30 rounded-2xl p-6 sm:p-12 max-w-4xl mx-auto shadow-xl mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Apply for Chapter Membership</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Fill out the form below to register your details. Our admin team will receive your application instantly and get back to you!
          </p>
        </div>

        {status.success ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold border border-emerald-500/20">
              ✓
            </div>
            <h2 className="text-2xl font-bold text-white">Application Received!</h2>
            <p className="text-slate-300 max-w-md mx-auto text-sm">
              Thank you for applying. Your details have been successfully emailed to our chapter leadership team. We will reach out to you shortly!
            </p>
            <button
              onClick={() => setStatus({ submitting: false, success: false, error: null })}
              className="mt-4 px-6 py-2 bg-cyan-400 hover:bg-cyan-300 text-[#001529] text-xs font-semibold uppercase tracking-wider rounded-lg transition-all"
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {status.error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg">
                {status.error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. student@university.edu"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Department */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Department <span className="text-red-400">*</span>
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  <option value="ECE">Electronics & Communication (ECE)</option>
                  <option value="CSE">Computer Science (CSE)</option>
                  <option value="EEE">Electrical & Electronics (EEE)</option>
                  <option value="IT">Information Technology (IT)</option>
                  <option value="Other">Other Engineering Branch</option>
                </select>
              </div>

              {/* Academic Year */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Academic Year <span className="text-red-400">*</span>
                </label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </select>
              </div>
            </div>

            {/* Areas of Interest */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Primary Area of Interest
              </label>
              <input
                type="text"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                placeholder="e.g. 5G Networks, IoT, Embedded Systems, Web Dev"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            {/* Message / Motivation */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Why do you want to join ComSoc?
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us briefly about your expectations or previous experience..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status.submitting}
              className="w-full py-3.5 bg-cyan-400 hover:bg-cyan-300 text-[#001529] text-xs font-semibold uppercase tracking-wider rounded-lg shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status.submitting ? "Sending Application..." : "Submit Membership Application"}
            </button>

          </form>
        )}
      </div>

      {/* Direct Contact / Connect Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-3">Other Ways to Connect</h2>
        <p className="text-slate-300 text-sm mb-8 max-w-xl mx-auto">
          Reach out directly to our team through any of the channels below to get added to our community group or ask questions.
        </p>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="mailto:comsoc-chapter@university.edu"
            className="flex flex-col items-center p-5 bg-slate-950 border border-slate-800 rounded-xl hover:border-cyan-500/50 hover:-translate-y-0.5 transition-all"
          >
            <span className="text-xl mb-1">✉️</span>
            <span className="text-sm font-semibold text-white">Email Us</span>
            <span className="text-xs text-slate-400 mt-1">Direct inquiries</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center p-5 bg-slate-950 border border-slate-800 rounded-xl hover:border-cyan-500/50 hover:-translate-y-0.5 transition-all"
          >
            <span className="text-xl mb-1">💼</span>
            <span className="text-sm font-semibold text-white">LinkedIn</span>
            <span className="text-xs text-slate-400 mt-1">Updates & networking</span>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center p-5 bg-slate-950 border border-slate-800 rounded-xl hover:border-cyan-500/50 hover:-translate-y-0.5 transition-all"
          >
            <span className="text-xl mb-1">📸</span>
            <span className="text-sm font-semibold text-white">Instagram</span>
            <span className="text-xs text-slate-400 mt-1">Event alerts</span>
          </a>
        </div>
      </div>

    </div>
  );
}