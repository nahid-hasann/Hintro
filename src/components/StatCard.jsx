import React from 'react';

const StatCard = ({ icon: Icon, label, value, iconBg, iconColor }) => {
  return (
    <div 
      className="bg-white flex items-center transition-all duration-200"
      style={{ 
        width: 'var(--card-width)',
        height: 'var(--card-height)',
        borderRadius: 'var(--card-radius)',
        border: 'var(--card-border) solid rgba(0, 0, 0, 0.2)',
        padding: '16px 8px',
        gap: 'var(--card-gap)'
      }}
    >
      {/* Icon Container (50x50 on Desktop) */}
      <div 
        className="flex items-center justify-center shrink-0"
        style={{ 
          width: 'var(--stat-icon-bg-size)',
          height: 'var(--stat-icon-bg-size)',
          backgroundColor: iconBg,
          borderRadius: 'var(--stat-icon-bg-radius)',
          marginLeft: 'var(--stat-icon-left)',
          display: 'flex'
        }}
      >
        <Icon 
          strokeWidth={2.5}
          style={{ 
            width: 'var(--stat-icon-size)', 
            height: 'var(--stat-icon-size)',
            color: iconColor 
          }} 
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center overflow-hidden">
        <p 
          className="font-medium truncate mb-1"
          style={{ 
            fontSize: 'var(--stat-label-size)',
            fontWeight: 500,
            lineHeight: '100%',
            letterSpacing: 'var(--stat-label-spacing)',
            color: 'rgba(0, 0, 0, 0.8)',
            fontFamily: 'Inter'
          }}
        >
          {label}
        </p>
        <p 
          className="font-bold truncate"
          style={{ 
            fontSize: 'var(--stat-value-size)',
            fontWeight: 700,
            lineHeight: '100%',
            letterSpacing: '0.3px',
            color: 'rgba(0, 0, 0, 0.8)',
            fontFamily: 'Inter'
          }}
        >
          {value}
        </p>
      </div>

    </div>
  );
};

export default StatCard;
