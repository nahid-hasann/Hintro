import React from 'react';

const LogoutModal = ({ isOpen, onClose, onLogout }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"
        onClick={onClose}
      ></div>
      
      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-md rounded-[32px] p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
        <h2 className="text-[12px] font-bold text-slate-900 mb-6">Leaving already?</h2>
        
        <div className="border-t border-slate-100 pt-6 mb-10">
          <p className="text-slate-600 text-sm leading-relaxed font-medium">
            You can log back in anytime to continue your meetings with Hintro.
          </p>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={onClose}
            className="flex-1 py-3 px-6 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={onLogout}
            className="flex-1 py-3 px-6 bg-black text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
