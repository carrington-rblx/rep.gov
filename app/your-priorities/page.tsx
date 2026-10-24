'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const topics = [
  'Economy',
  'Foreign Affairs',
  'Agriculture',
  'Energy',
  'Infrastructure',
  'Defense',
];

export default function YourPrioritiesPage() {
  const [submitted, setSubmitted] = useState(false);
  const [trackingCode, setTrackingCode] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const code = 'WP-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    setTrackingCode(code);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="pt-28 pb-20 min-h-screen bg-canvas flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-xl p-10 max-w-lg w-full text-center border border-border">
          <CheckCircle2 className="w-16 h-16 text-yea mx-auto mb-4" />
          <h1 className="text-2xl font-black text-navy mb-2">Priority Received</h1>
          <p className="text-muted mb-6">
            Thank you for sharing your priorities with Representative Winters.
          </p>
          <div className="bg-cream rounded-2xl p-6 mb-6">
            <p className="text-xs font-bold text-muted uppercase tracking-widest mb-1">
              Tracking Code
            </p>
            <p className="text-2xl font-black text-navy tracking-wider">{trackingCode}</p>
          </div>
          <p className="text-sm text-muted">
            This submission is for roleplay purposes only. A printable summary has been generated.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 min-h-screen bg-canvas">
      <div className="container-main max-w-2xl">
        <h1 className="section-title mb-2">Your Priorities</h1>
        <p className="text-muted text-lg mb-10">
          Tell Representative Winters what matters most to you. Your input helps shape our legislative focus.
        </p>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl border border-border p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-navy mb-1.5">Roblox Username</label>
              <input
                required
                name="roblox"
                type="text"
                className="w-full px-4 py-3 rounded-xl border-2 border-border focus:outline-none focus:ring-4 focus:ring-accent-yellow/40 focus:border-accent-orange"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-navy mb-1.5">Discord Username</label>
              <input
                required
                name="discord"
                type="text"
                className="w-full px-4 py-3 rounded-xl border-2 border-border focus:outline-none focus:ring-4 focus:ring-accent-yellow/40 focus:border-accent-orange"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-navy mb-1.5">Constituent Full Name</label>
            <input
              required
              name="name"
              type="text"
              className="w-full px-4 py-3 rounded-xl border-2 border-border focus:outline-none focus:ring-4 focus:ring-accent-yellow/40 focus:border-accent-orange"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-navy mb-1.5">State & District</label>
            <input
              required
              name="district"
              type="text"
              placeholder="e.g. Utah 3rd District"
              className="w-full px-4 py-3 rounded-xl border-2 border-border focus:outline-none focus:ring-4 focus:ring-accent-yellow/40 focus:border-accent-orange"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-navy mb-1.5">Topic of Priority</label>
            <select
              required
              name="topic"
              className="w-full px-4 py-3 rounded-xl border-2 border-border focus:outline-none focus:ring-4 focus:ring-accent-yellow/40 focus:border-accent-orange bg-white"
            >
              <option value="">Select a topic...</option>
              {topics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-navy mb-1.5">
              Priority Statement & Guidance
            </label>
            <textarea
              required
              name="statement"
              rows={6}
              className="w-full px-4 py-3 rounded-xl border-2 border-border focus:outline-none focus:ring-4 focus:ring-accent-yellow/40 focus:border-accent-orange resize-y"
              placeholder="Share your thoughts, concerns, or recommendations..."
            />
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              required
              type="checkbox"
              className="mt-1 w-5 h-5 rounded border-2 border-border text-accent-orange focus:ring-accent-yellow"
            />
            <span className="text-sm text-navy">
              I confirm this priority submission is for roleplay purposes.
            </span>
          </label>

          <button type="submit" className="btn-accent w-full py-3.5 text-sm">
            SUBMIT YOUR PRIORITIES
          </button>
        </form>
      </div>
    </div>
  );
}
