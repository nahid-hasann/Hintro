import React from 'react';
import { Calendar } from 'lucide-react';

const EmptyState = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center transition-all duration-200 w-full"
      style={{
        maxWidth: 'var(--empty-box-width)',
        height: 'var(--empty-box-height)',
        borderRadius: 'var(--empty-box-radius)',
        border: 'var(--empty-box-border)',
        gap: 'var(--empty-box-gap)',
        backgroundColor: 'transparent',
        margin: '0 auto'
      }}
    >
      {/* Icon Area */}
      <div 
        className="flex items-center justify-center"
        style={{
          width: 'var(--empty-icon-bg-width)',
          height: 'var(--empty-icon-bg-height)',
          backgroundColor: '#edf0ff',
          borderRadius: 'var(--empty-icon-radius)',
        }}
      >
        <Calendar 
          style={{
            width: 'var(--empty-icon-size-w)',
            height: 'var(--empty-icon-size-h)',
            color: '#6687ff'
          }}
          strokeWidth={1.5}
        />
      </div>

      {/* Text Area */}
      <div className="flex flex-col items-center text-center px-4">
        <h4 
          style={{
            fontFamily: 'Inter',
            fontSize: 'var(--empty-title-size)',
            fontWeight: 500,
            lineHeight: '100%',
            letterSpacing: '0.5px',
            color: '#000000',
            marginBottom: 'var(--text-mb)'
          }}
        >
          No recent calls
        </h4>
        <p 
          style={{
            fontFamily: 'Inter',
            fontSize: 'var(--empty-desc-size)',
            fontWeight: 400,
            lineHeight: '140%', /* Improved for readability */
            letterSpacing: '0.3px',
            color: 'rgba(0, 0, 0, 0.4)',
            maxWidth: 'var(--empty-desc-width)',
            width: '100%'
          }}
        >
          Connect your Google Calendar to see upcoming meetings, get reminders, and join calls directly from Hintro.
        </p>
      </div>

      {/* Start a Call Button (Inner) */}
      <button 
        className="flex items-center justify-center transition-colors hover:bg-black hover:text-white"
        style={{
          width: 'var(--empty-btn-width)',
          height: 'var(--empty-btn-height)',
          borderRadius: '4px',
          border: '0.5px solid #000000',
          backgroundColor: 'transparent',
          padding: '0 8px' /* Balanced horizontal padding */
        }}
      >
        <span 
          style={{
            fontFamily: 'Inter',
            fontSize: 'var(--empty-btn-text-size)',
            fontWeight: 'var(--empty-btn-weight)',
            lineHeight: '1',
            letterSpacing: 'var(--empty-btn-spacing)',
            color: 'inherit',
            whiteSpace: 'nowrap'
          }}
        >
          Start a call
        </span>
      </button>

    </div>
  );
};

export default EmptyState;
