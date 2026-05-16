import React from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  BookOpen, 
  MessageSquare, 
  Globe, 
  Info, 
  Download, 
  Gift,
  History,
  X
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active, onClick, hasInfo }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center justify-between px-4 py-2.5 cursor-pointer transition-colors group ${active ? 'bg-indigo-50 text-indigo-600 rounded-lg' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
  >
    <div className="flex items-center gap-3">
      <Icon size={18} className={active ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'} />
      <span className="text-sm font-medium">{label}</span>
    </div>
    {/* Hide Info icon on mobile */}
    {hasInfo && <Info size={16} className="text-slate-300 md:block hidden" />}
  </button>
);

const Sidebar = ({ activeTab, setActiveTab, onClose }) => {
  return (
    <aside className="w-64 h-screen border-r border-slate-100 bg-white flex flex-col shrink-0">
      {/* Sidebar Header with border aligned with main Header */}
      <div className="h-16 flex items-center px-6 border-b border-slate-100 justify-between">
        <h1 className="text-[24px] font-medium text-[#000000] md:block hidden">Hintro</h1>
        {/* Mobile Close Button */}
        <button 
          onClick={onClose}
          className="p-2 -ml-2 text-slate-500 hover:bg-slate-50 rounded-lg md:hidden"
        >
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        <SidebarItem 
        className="  "
          icon={LayoutDashboard} 
          label="Dashboard" 
          active={activeTab === 'dashboard'} 
          onClick={() => setActiveTab('dashboard')} 
        />
        <SidebarItem 
          icon={BarChart3} 
          label="Call Insights" 
          active={activeTab === 'insights'} 
          onClick={() => setActiveTab('insights')} 
        />
        <SidebarItem 
          icon={BookOpen} 
          label="Knowledge Base" 
          hasInfo 
          active={activeTab === 'kb'} 
          onClick={() => setActiveTab('kb')} 
        />
        <SidebarItem 
          icon={MessageSquare} 
          label="Prompts" 
          hasInfo 
          active={activeTab === 'prompts'} 
          onClick={() => setActiveTab('prompts')} 
        />
        <SidebarItem 
          icon={Globe} 
          label="Boxy Controls" 
          hasInfo 
          active={activeTab === 'boxy'} 
          onClick={() => setActiveTab('boxy')} 
        />
        
        {/* Feedback History moved to main list for better visibility */}
        <SidebarItem 
          icon={History} 
          label="Feedback History" 
          active={activeTab === 'feedback-history'} 
          onClick={() => setActiveTab('feedback-history')} 
        />
      </div>

      <div className="p-4 border-t border-slate-100 space-y-4">
        <div className="space-y-1">
          <button className="w-full flex items-center gap-3 px-2 py-2 text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
            <Download size={18} className="text-slate-400" />
            <span>Download Desktop App</span>
          </button>
          <button 
            onClick={() => setActiveTab('feedback')}
            className={`w-full flex items-center gap-3 px-2 py-2 transition-colors text-sm font-medium rounded-lg ${activeTab === 'feedback' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <Gift size={18} className={activeTab === 'feedback' ? 'text-indigo-600' : 'text-slate-400'} />
            <span>Feedback</span>
          </button>
        </div>

        <div className="bg-slate-50/80 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-slate-700">0 of 1000 <span className="font-medium text-slate-500">hours used</span></p>
          </div>
          <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div className="w-1/12 h-full bg-slate-400"></div>
          </div>
          <button className="w-full py-2 bg-slate-500 text-white rounded-lg text-xs font-bold hover:bg-slate-600 transition-colors shadow-sm">
            Upgrade
          </button>
        </div>

        <p className="text-[10px] text-center text-slate-400 font-medium">
          © 2025 Hintro. Made in India 🇮🇳
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
