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
    className={`w-full flex items-center justify-between cursor-pointer transition-all duration-200 group
      ${active ? 'bg-[#edf0ff] text-[#6687ff] rounded-[16px]' : 'text-[#202224] hover:bg-slate-50 hover:text-slate-900 rounded-[16px]'}
      py-3 px-2
    `}
  >
    <div className="flex items-center gap-3">
      {/* Icon - Pixel Perfect 18x18 */}
      <div className="flex items-center justify-center shrink-0">
        <Icon 
          size={18}
          className={active ? 'text-[#6687ff]' : 'text-[#202224] group-hover:text-slate-600'} 
          style={{ width: 'var(--sidebar-icon-size)', height: 'var(--sidebar-icon-size)' }}
        />
      </div>
      
      {/* Label - Pixel Perfect Typography */}
      <span 
        className="font-medium whitespace-nowrap" 
        style={{ 
          fontSize: 'var(--sidebar-text-size)',
          fontWeight: 500,
          fontFamily: 'Inter',
          lineHeight: '100%'
        }}
      >
        {label}
      </span>
    </div>

    {/* Information Icon - Desktop only */}
    {hasInfo && (
      <Info 
        className="text-[#202224] md:block hidden shrink-0" 
        size={14}
      />
    )}
  </button>
);

const Sidebar = ({ activeTab, setActiveTab, onClose, subscription }) => {
  const usage = subscription?.usage?.kb_files || { used: 0, limit: 100, percentage: 0 };

  return (
    <aside className="w-64 h-screen border-r border-slate-100 bg-white flex flex-col shrink-0 overflow-hidden">
      {/* Sidebar Header */}
      <div className="h-16 flex items-center px-6 border-b border-slate-100 justify-between shrink-0">
        <h1 className="text-[24px] font-medium text-black md:block hidden" style={{ letterSpacing: '0.3px', fontFamily: 'Inter' }}>Hintro</h1>
        <button 
          onClick={onClose}
          className="p-2 -ml-2 text-slate-500 hover:bg-slate-50 rounded-lg md:hidden"
        >
          <X size={20} />
        </button>
      </div>

      {/* Menu Area */}
      <div className="flex-1 py-6 px-4 space-y-1 overflow-hidden">
        <SidebarItem 
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
        
        <SidebarItem 
          icon={History} 
          label="Feedback History" 
          active={activeTab === 'feedback-history'} 
          onClick={() => setActiveTab('feedback-history')} 
        />
      </div>

      {/* Footer Area */}
      <div className="p-4 border-t border-slate-100 space-y-4 shrink-0">
        <div className="space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2 text-[#202224] hover:bg-slate-50 rounded-[16px] transition-all duration-200 group">
            <div className="flex items-center justify-center shrink-0">
              <Download size={18} className="text-[#202224] group-hover:text-slate-600" style={{ width: 'var(--sidebar-icon-size)', height: 'var(--sidebar-icon-size)' }} />
            </div>
            <span className="font-medium whitespace-nowrap" style={{ fontSize: 'var(--sidebar-text-size)', fontWeight: 500, fontFamily: 'Inter' }}>
              Download Desktop App
            </span>
          </button>
          
          <SidebarItem 
            icon={Gift} 
            label="Feedback" 
            active={activeTab === 'feedback'} 
            onClick={() => setActiveTab('feedback')} 
          />
        </div>

        {/* User Info Section */}
        <div className="flex items-center gap-3 py-3 px-3 mb-2 bg-slate-50/50 rounded-2xl border border-slate-100/50">
          <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-200 border border-white shadow-sm shrink-0">
            <img 
              src={`https://i.pravatar.cc/100?u=${subscription?.user?.firstName || 'user'}`} 
              alt="avatar" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden">
            <p className="text-[12px] font-bold text-slate-800 truncate">
              {subscription?.user?.firstName} {subscription?.user?.lastName}
            </p>
            <p className="text-[10px] text-slate-500 truncate font-medium">
              {subscription?.user?.email}
            </p>
          </div>
        </div>

        <div className="bg-slate-50/80 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-slate-700">{usage.used} of {usage.limit} <span className="font-medium text-slate-500">kb files used</span></p>
          </div>
          <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-slate-400 transition-all duration-500" 
              style={{ width: `${usage.percentage}%` }}
            ></div>
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
