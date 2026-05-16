import React from 'react';
import { MoreVertical } from 'lucide-react';

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
        <div className="w-[29px] h-[29px] rounded-lg bg-[#8a38f5] flex items-center justify-center text-[#000000] text-[12px] md:text-[14px] font-bold">
          {call.client?.[0] || 'K'}
        </div>
        
        {/* Call Info */}
        <div>
          <h4 className="text-[12px] md:text-[14px] font-bold text-[#000000]">{call.client || 'Design Call'}</h4>
          <div className="flex -space-x-2 mt-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-5 h-5 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                <img src={`https://i.pravatar.cc/100?u=${call._id}${i}`} alt="user" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <span className="text-sm font-medium text-slate-800">{formatTime(call.started_at || call.startTime)}</span>
        <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
          <MoreVertical size={18} />
        </button>
      </div>
    </div>
  );
};

export default CallListItem;
