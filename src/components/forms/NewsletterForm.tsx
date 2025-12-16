'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui';

interface NewsletterFormProps {
  formId?: string;
  variant?: 'default' | 'inline' | 'compact';
  className?: string;
}

export function NewsletterForm({
  formId = 'newsletter-form',
  variant = 'default',
  className = '',
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate form submission - replace with actual GHL integration
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setMessage("You're in! Check your inbox for a welcome email.");
      setEmail('');
      setFirstName('');
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  if (variant === 'inline') {
    return (
      <div
        id={formId}
        data-ghl-form="newsletter"
        className={className}
      >
        {/*
          GHL Integration Instructions:
          Replace this form with your GoHighLevel embed code.
          Example: <script src="https://link.msgsndr.com/js/form_embed.js"></script>
          <iframe src="YOUR_GHL_FORM_URL" ...></iframe>
        */}
        {status === 'success' ? (
          <div className="text-sage-600 font-medium">{message}</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="form-input flex-1"
              aria-label="Email address"
            />
            <Button type="submit" isLoading={status === 'loading'}>
              Subscribe
            </Button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-sm mt-2">{message}</p>
        )}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div
        id={formId}
        data-ghl-form="newsletter"
        className={className}
      >
        {status === 'success' ? (
          <div className="text-sage-600 font-medium text-center">{message}</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="form-input text-center"
              aria-label="Email address"
            />
            <Button type="submit" isLoading={status === 'loading'} className="w-full">
              Join the Homestead
            </Button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-sm mt-2 text-center">{message}</p>
        )}
      </div>
    );
  }

  return (
    <div
      id={formId}
      data-ghl-form="newsletter"
      className={className}
    >
      {/*
        GHL Integration Instructions:
        Replace this form with your GoHighLevel embed code.
        Example: <script src="https://link.msgsndr.com/js/form_embed.js"></script>
        <iframe src="YOUR_GHL_FORM_URL" ...></iframe>
      */}
      {status === 'success' ? (
        <div className="bg-sage-50 border border-sage-200 rounded-lg p-6 text-center">
          <svg
            className="w-12 h-12 text-sage-600 mx-auto mb-4"
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
          <p className="text-sage-700 font-medium">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor={`${formId}-firstName`} className="form-label">
              First Name
            </label>
            <input
              type="text"
              id={`${formId}-firstName`}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Your first name"
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="form-input"
            />
          </div>
          <Button type="submit" isLoading={status === 'loading'} className="w-full">
            Join the Homestead
          </Button>
          {status === 'error' && (
            <p className="text-red-600 text-sm">{message}</p>
          )}
        </form>
      )}
    </div>
  );
}
