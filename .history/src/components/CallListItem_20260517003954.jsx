import React from 'react';

const CallListItem = ({ call }) => {
  // Format time (e.g., 11:00 am)
  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toLowerCase();
  };

  return (
    <div className="flex items-center justify-between py-4 group hover:bg-slate-50/50 px-4 rounded-xl transition-colors">
      <div className="flex items-center gap-4">
        {/* Avatar Icon */}
        <div 
          className="relative rounded-[4px] bg-[#000000] flex items-center justify-center shrink-0"
          style={{
            width: 'var(--cli-avatar-size)',
            height: 'var(--cli-avatar-size)',
            opacity: 1
          }}
        >
          <span 
            className="absolute text-white"
            style={{
              width: 'var(--cli-avatar-text-w)',
              height: 'var(--cli-avatar-text-h)',
              top: 'var(--cli-avatar-text-top)',
              left: 'var(--cli-avatar-text-left)',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: 'var(--cli-avatar-text-size)',
              lineHeight: '100%',
              letterSpacing: '0.5px',
              textAlign: 'center'
            }}
          >
            {call.client?.[0] || 'K'}
          </span>
        </div>
        
        {/* Call Info */}
        <div className="flex flex-col justify-center">
          <h4 
            className="text-[#000000]"
            style={{
              width: 'var(--cli-title-w)',
              height: 'var(--cli-title-h)',
              fontFamily: 'Inter',
              fontWeight: 'var(--cli-title-weight)',
              fontSize: 'var(--cli-title-size)',
              lineHeight: '100%',
              letterSpacing: '0.5px',
              textAlign: 'left', // Set to left to align nicely, even though spec says center, standard lists are left aligned. Wait, user specified text-align: center. I will respect the user spec!
              textAlign: 'center'
            }}
          >
            {call.client || 'Design Call'}
          </h4>
          <div className="relative mt-1" style={{ height: 'var(--cli-img-size)' }}>
            {[1, 2, 3].map((i, index) => (
              <div 
                key={i} 
                className="absolute rounded-full border-2 border-white bg-slate-200 overflow-hidden"
                style={{
                  width: 'var(--cli-img-size)',
                  height: 'var(--cli-img-size)',
                  top: '0px',
                  left: `calc(${index} * var(--cli-img-left))`,
                  zIndex: 3 - index
                }}
              >
                <img src={`https://i.pravatar.cc/100?u=${call._id}${i}`} alt="user" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span 
          className="text-slate-800"
          style={{
            width: 'var(--cli-time-w)',
            height: 'var(--cli-time-h)',
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: 'var(--cli-time-size)',
            lineHeight: '100%',
            letterSpacing: '0.5px',
            textAlign: 'center'
          }}
        >
          {formatTime(call.started_at || call.startTime)}
        </span>
        <div className="flex flex-col items-center justify-center gap-[2px] p-2 hover:bg-slate-100 rounded-lg cursor-pointer">
          <div style={{ width: 'var(--cli-dot-w)', height: 'var(--cli-dot-w)', backgroundColor: '#94a3b8', borderRadius: '50%' }}></div>
          <div style={{ width: 'var(--cli-dot-w)', height: 'var(--cli-dot-w)', backgroundColor: '#94a3b8', borderRadius: '50%' }}></div>
          <div style={{ width: 'var(--cli-dot-w)', height: 'var(--cli-dot-w)', backgroundColor: '#94a3b8', borderRadius: '50%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default CallListItem;
