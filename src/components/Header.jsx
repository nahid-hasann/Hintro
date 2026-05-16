import React from 'react';
import { PlayCircle, ChevronDown, Menu } from 'lucide-react';

const Header = ({ profile, onMenuClick, onProfileClick }) => {
  return (
    <header className="h-16 border-b border-slate-100 bg-white flex items-center justify-between px-4 sm:px-8 shrink-0 relative">
      {/* Mobile Menu Icon (Left) */}
      <button 
        onClick={onMenuClick}
        className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg md:hidden z-10"
      >
        <Menu size={20} />
      </button>

      <div className="absolute inset-0 flex items-center justify-center md:static md:inset-auto md:flex pointer-events-none">
        <h2 className="font-medium text-black" 
          style={{ 
            fontSize: 'var(--title-size)', 
            lineHeight: '100%',
            letterSpacing: '0.3px',
            fontFamily: 'Inter',
            fontWeight: 500,
            textAlign: 'center'
          }}
        >
          Dashboard
        </h2>
      </div>
      
      {/* Desktop/Right Section */}
      <div className="flex items-center gap-2 sm:gap-6 z-10">
        {/* Watch Tutorial Button - Pixel Perfect */}
        <button 
          className="hidden sm:flex items-center justify-center transition-colors hover:bg-slate-50"
          style={{
            width: '136px',
            height: '32px',
            border: '1px solid #000000',
            borderRadius: '4px',
            padding: '6px 12px',
            gap: '13px',
            backgroundColor: 'transparent'
          }}
        >
          <div style={{ display: 'flex' }}>
            <PlayCircle size={20} color="#000000" style={{ borderRadius: '2px' }} />
          </div>
          <span 
            style={{ 
              fontFamily: 'Inter',
              fontSize: '12px',
              fontWeight: 400,
              lineHeight: '100%',
              color: '#000000',
              textAlign: 'left',
              whiteSpace: 'nowrap',
              letterSpacing: '-0.2px'
            }}
          >
            Watch Tutorial
          </span>
        </button>
        
        <button 
          onClick={onProfileClick}
          className="flex items-center gap-2 cursor-pointer group outline-none"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200 border border-slate-100">
            {profile?.avatarUrl ? (
              <img src={profile.avatarUrl} alt="Profile" className="w-full h-full object-cover" />
            ) : profile?.firstName ? (
              <img src={`https://i.pravatar.cc/100?u=${profile.firstName}`} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-indigo-100 text-indigo-600 text-xs font-bold">
                U
              </div>
            )}
          </div>
          <ChevronDown size={14} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
        </button>
      </div>
    </header>
  );
};

export default Header;
