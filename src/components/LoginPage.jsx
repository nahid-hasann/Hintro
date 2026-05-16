import React from 'react';
import { User, UserCheck, ShieldCheck } from 'lucide-react';

const LoginPage = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-[#FDFDFF] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white border border-slate-100 rounded-[40px] p-10 shadow-2xl shadow-indigo-500/5 text-center">
        <h1 className="text-3xl font-black text-slate-900 mb-2">Hintro</h1>
        <p className="text-slate-500 mb-10 font-medium">Welcome back! Please select an account to continue.</p>

        <div className="space-y-4">
          {/* User u1 Option */}
          <button 
            onClick={() => onLogin('u1')}
            className="w-full flex items-center gap-4 p-5 border border-slate-100 rounded-3xl hover:border-indigo-200 hover:bg-indigo-50/30 transition-all group text-left"
          >
            <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-indigo-500 transition-colors">
              <User size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-900">New User (u1)</h3>
              <p className="text-xs text-slate-400">Login to see the empty state dashboard.</p>
            </div>
          </button>

          {/* User u2 Option */}
          <button 
            onClick={() => onLogin('u2')}
            className="w-full flex items-center gap-4 p-5 border border-slate-100 rounded-3xl hover:border-indigo-200 hover:bg-indigo-50/30 transition-all group text-left"
          >
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-white transition-colors">
              <UserCheck size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-900">Active User (u2)</h3>
              <p className="text-xs text-slate-400">Login to see the dashboard with full data.</p>
            </div>
          </button>
        </div>

        <p className="mt-10 text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
          <ShieldCheck size={12} />
          Secure Enterprise Login
        </p>
      </div>
      
      <p className="mt-8 text-xs text-slate-400 font-medium italic">
        © 2025 Hintro. Made in India 🇮🇳
      </p>
    </div>
  );
};

export default LoginPage;
