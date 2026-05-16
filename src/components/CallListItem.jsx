import React from 'react';
import { MoreVertical } from 'lucide-react';

const CallListItem = ({ call }) => {
  // Format time (e.g., 11:00 am)
  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toLowerCase();
  };

  // Generate a distinct color based on the first letter
  const getAvatarColor = (char) => {
    const colors = [
      '#8a38f5', // purple
      '#e6584e', // red
      '#4c9da6', // teal
      '#499955', // green
      '#e68a4e', // orange
      '#d94e8a', // pink
      '#4e5de6', // blue
      '#a69d4c', // olive
    ];
    if (!char) return colors[0];
    const charCode = char.charCodeAt(0);
    return colors[charCode % colors.length];
  };

  const clientName = call.client || 'Design Call';
  const initial = clientName.charAt(0).toUpperCase();
  const avatarBgColor = getAvatarColor(initial);

  return (
    <div className="flex items-center justify-between py-4 group hover:bg-slate-50/50 px-4 rounded-xl transition-colors">
      <div className="flex items-center gap-4">
        {/* Avatar Icon */}
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-normal"
          style={{ backgroundColor: avatarBgColor }}
        >
          {initial}
        </div>
        
        {/* Call Info */}
        <div>
          <h4 className="text-sm font-bold text-slate-900">{clientName}</h4>
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
        <button className="p-1.5 text-black hover:text-slate-600 rounded-lg transition-all">
          <MoreVertical size={18} />
        </button>
      </div>
    </div>
  );
};

export default CallListItem;
