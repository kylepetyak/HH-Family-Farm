'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui';

interface BrandInquiryFormProps {
  formId?: string;
  className?: string;
}

const partnershipTypes = [
  { value: '', label: 'Select partnership type...' },
  { value: 'sponsored-reels', label: 'Sponsored Instagram Reels' },
  { value: 'feed-posts', label: 'Feed Posts & Carousels' },
  { value: 'stories', label: 'Instagram Stories' },
  { value: 'blog-review', label: 'Blog Feature & Review' },
  { value: 'video-content', label: 'Long-form Video Content' },
  { value: 'ambassador', label: 'Brand Ambassador Program' },
  { value: 'multiple', label: 'Multiple Content Types' },
  { value: 'other', label: 'Other' },
];

const budgetRanges = [
  { value: '', label: 'Select budget range...' },
  { value: 'under-500', label: 'Under $500' },
  { value: '500-1000', label: '$500 - $1,000' },
  { value: '1000-2500', label: '$1,000 - $2,500' },
  { value: '2500-5000', label: '$2,500 - $5,000' },
  { value: '5000-10000', label: '$5,000 - $10,000' },
  { value: 'over-10000', label: 'Over $10,000' },
  { value: 'negotiable', label: 'Let\'s Discuss' },
];

export function BrandInquiryForm({
  formId = 'brand-inquiry-form',
  className = '',
}: BrandInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    partnershipType: '',
    budget: '',
    message: '',
    source: 'website', // Hidden field for source tracking
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
      setStatusMessage(
        "Thank you for your interest in partnering! I'm excited to review your inquiry and will be in touch within 2-3 business days."
      );
      setFormData({
        name: '',
        email: '',
        company: '',
        website: '',
        partnershipType: '',
        budget: '',
        message: '',
        source: 'website',
      });
    } catch {
      setStatus('error');
      setStatusMessage('Something went wrong. Please try again or email me directly.');
    }
  };

  return (
    <div
      id={formId}
      data-ghl-form="brand-inquiry"
      className={className}
    >
      {/*
        GHL Integration Instructions:
        Replace this form with your GoHighLevel embed code.
        Example: <script src="https://link.msgsndr.com/js/form_embed.js"></script>
        <iframe src="YOUR_GHL_FORM_URL" ...></iframe>

        Hidden field for source tracking: source=website
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
          <h3 className="text-xl font-serif text-charcoal-900 mb-2">Inquiry Received!</h3>
          <p className="text-charcoal-600">{statusMessage}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Hidden field for source tracking */}
          <input type="hidden" name="source" value={formData.source} />

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
                placeholder="you@company.com"
                required
                className="form-input"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor={`${formId}-company`} className="form-label">
                Company / Brand <span className="text-terracotta-500">*</span>
              </label>
              <input
                type="text"
                id={`${formId}-company`}
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Awesome Brand Co."
                required
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor={`${formId}-website`} className="form-label">
                Website
              </label>
              <input
                type="url"
                id={`${formId}-website`}
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://yourcompany.com"
                className="form-input"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor={`${formId}-partnershipType`} className="form-label">
                Partnership Type <span className="text-terracotta-500">*</span>
              </label>
              <select
                id={`${formId}-partnershipType`}
                name="partnershipType"
                value={formData.partnershipType}
                onChange={handleChange}
                required
                className="form-select"
              >
                {partnershipTypes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor={`${formId}-budget`} className="form-label">
                Budget Range <span className="text-terracotta-500">*</span>
              </label>
              <select
                id={`${formId}-budget`}
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="form-select"
              >
                {budgetRanges.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor={`${formId}-message`} className="form-label">
              Tell me about your campaign <span className="text-terracotta-500">*</span>
            </label>
            <textarea
              id={`${formId}-message`}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share details about your brand, campaign goals, timeline, and how you envision us working together..."
              required
              rows={6}
              className="form-textarea"
            />
          </div>

          <Button type="submit" isLoading={status === 'loading'} className="w-full sm:w-auto">
            Submit Inquiry
          </Button>

          {status === 'error' && (
            <p className="text-red-600 text-sm">{statusMessage}</p>
          )}
        </form>
      )}
    </div>
  );
}
