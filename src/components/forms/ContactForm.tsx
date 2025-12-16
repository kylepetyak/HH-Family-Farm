'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui';

interface ContactFormProps {
  formId?: string;
  className?: string;
}

const subjectOptions = [
  { value: '', label: 'Select a topic...' },
  { value: 'general', label: 'General Inquiry' },
  { value: 'collaboration', label: 'Collaboration / Partnership' },
  { value: 'question', label: 'Question about Homesteading' },
  { value: 'media', label: 'Media / Press' },
  { value: 'other', label: 'Other' },
];

export function ContactForm({ formId = 'contact-form', className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate form submission - replace with actual GHL integration
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setStatusMessage("Thank you for reaching out! I'll get back to you within 48 hours.");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
      setStatusMessage('Something went wrong. Please try again or email us directly.');
    }
  };

  return (
    <div
      id={formId}
      data-ghl-form="contact"
      className={className}
    >
      {/*
        GHL Integration Instructions:
        Replace this form with your GoHighLevel embed code.
        Example: <script src="https://link.msgsndr.com/js/form_embed.js"></script>
        <iframe src="YOUR_GHL_FORM_URL" ...></iframe>
      */}
      {status === 'success' ? (
        <div className="bg-sage-50 border border-sage-200 rounded-lg p-8 text-center">
          <svg
            className="w-16 h-16 text-sage-600 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-xl font-serif text-charcoal-900 mb-2">Message Sent!</h3>
          <p className="text-charcoal-600">{statusMessage}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor={`${formId}-name`} className="form-label">
                Your Name <span className="text-terracotta-500">*</span>
              </label>
              <input
                type="text"
                id={`${formId}-name`}
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                required
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor={`${formId}-email`} className="form-label">
                Email Address <span className="text-terracotta-500">*</span>
              </label>
              <input
                type="email"
                id={`${formId}-email`}
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="form-input"
              />
            </div>
          </div>

          <div>
            <label htmlFor={`${formId}-subject`} className="form-label">
              Subject <span className="text-terracotta-500">*</span>
            </label>
            <select
              id={`${formId}-subject`}
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="form-select"
            >
              {subjectOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor={`${formId}-message`} className="form-label">
              Message <span className="text-terracotta-500">*</span>
            </label>
            <textarea
              id={`${formId}-message`}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me what's on your mind..."
              required
              rows={6}
              className="form-textarea"
            />
          </div>

          <Button type="submit" isLoading={status === 'loading'} className="w-full sm:w-auto">
            Send Message
          </Button>

          {status === 'error' && (
            <p className="text-red-600 text-sm">{statusMessage}</p>
          )}
        </form>
      )}
    </div>
  );
}
