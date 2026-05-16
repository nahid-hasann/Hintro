import React, { useState, useEffect } from 'react';
import { MessageSquare, Trash2, Calendar } from 'lucide-react';

const FeedbackHistory = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    loadFeedback();
  }, []);

  const loadFeedback = () => {
    const data = JSON.parse(localStorage.getItem('hintro_feedback') || '[]');
    setFeedbacks(data);
  };

  const deleteFeedback = (id) => {
    const updated = feedbacks.filter(item => item.id !== id);
    localStorage.setItem('hintro_feedback', JSON.stringify(updated));
    setFeedbacks(updated);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Feedback History</h2>
          <p className="text-slate-500">View and manage your previous feedback submissions.</p>
        </div>
      </div>

      {feedbacks.length === 0 ? (
        <div className="bg-white border border-slate-100 rounded-3xl p-20 flex flex-col items-center text-center shadow-sm">
          <div className="w-16 h-16 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mb-6">
            <MessageSquare size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">No Feedback Yet</h3>
          <p className="text-slate-500 max-w-xs">You haven't submitted any feedback yet. Your history will appear here once you do.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {feedbacks.map((item) => (
            <div key={item.id} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm group hover:border-indigo-100 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    item.category === 'Bug Report' ? 'bg-red-50 text-red-600' :
                    item.category === 'Feature Request' ? 'bg-blue-50 text-blue-600' :
                    'bg-slate-100 text-slate-600'
                  }`}>
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                    <Calendar size={14} />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
                <button 
                  onClick={() => deleteFeedback(item.id)}
                  className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                >
                  <Trash2 size={18} />
                </button>
              </div>
              <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{item.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeedbackHistory;
