import React from 'react';
import { Upload, Cpu, BarChart3 } from 'lucide-react';

const StepCard = ({ step, title, desc, icon: Icon, buttonText }) => (
  <div className="flex-1 bg-white border border-slate-100 rounded-[32px] p-8 flex flex-col items-center text-center shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Step {step}</span>
    <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center mb-6">
      <Icon size={24} />
    </div>
    <h4 className="text-sm font-bold text-slate-900 mb-2">{title}</h4>
    <p className="text-xs text-slate-400 leading-relaxed mb-8 px-4">{desc}</p>
    {buttonText && (
      <button className="px-6 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors">
        {buttonText}
      </button>
    )}
  </div>
);

const HowItWorks = () => {
  return (
    <div className="mt-12 mb-16">
      <h3 className="text-center text-slate-800 font-semibold mb-10">How it works</h3>
      <div className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto">
        <StepCard 
          step="1" 
          title="Upload Documents" 
          desc="Add files for Hintro to analyze during your meetings."
          icon={Upload}
        />
        <StepCard 
          step="2" 
          title="AI Analysis" 
          desc="Our AI processes your data to provide real-time insights."
          icon={Cpu}
        />
        <StepCard 
          step="3" 
          title="View Insights" 
          desc="Review notes and action items after the call."
          icon={BarChart3}
          buttonText="View Insights"
        />
      </div>
    </div>
  );
};

export default HowItWorks;
