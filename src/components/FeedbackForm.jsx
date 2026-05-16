import React, { useState } from 'react';
import { Send } from 'lucide-react';

const FeedbackForm = ({ onFeedbackSaved }) => {
  const [feedback, setFeedback] = useState('');
  const [category, setCategory] = useState('General');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    setIsSubmitting(true);

    const newFeedback = {
      id: Date.now(),
      text: feedback,
      category,
      date: new Date().toISOString(),
    };

    // Save to localStorage
    const existingFeedback = JSON.parse(localStorage.getItem('hintro_feedback') || '[]');
    localStorage.setItem('hintro_feedback', JSON.stringify([newFeedback, ...existingFeedback]));

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFeedback('');
      if (onFeedbackSaved) onFeedbackSaved();
      
      setTimeout(() => setSuccess(false), 3000);
    }, 800);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us your feedback</h2>
      <p className="text-slate-500 mb-8">We'd love to hear your thoughts on how we can improve Hintro.</p>

      {success && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl text-sm font-medium">
          Thank you! Your feedback has been saved successfully.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Category</label>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-700"
          >
            <option>General</option>
            <option>Bug Report</option>
            <option>Feature Request</option>
            <option>UI/UX Design</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Your Message</label>
          <textarea 
            rows="5"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Tell us what's on your mind..."
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-700 resize-none"
            required
          ></textarea>
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-black text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <>
              <Send size={18} />
              Submit Feedback
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
