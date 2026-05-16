import React from 'react';
import { Wifi, Battery } from 'lucide-react';

const StatusBar = () => {
  return (
    <div className="md:hidden w-full bg-white flex items-center justify-between px-6 py-4 shrink-0">
      <div className="text-sm font-semibold text-black">9:41</div>
      <div className="flex items-center gap-1.5">
        <div className="flex items-end gap-[1.5px] h-3 mb-[2px]">
          <div className="w-[3px] h-[30%] bg-black rounded-[0.5px]"></div>
          <div className="w-[3px] h-[50%] bg-black rounded-[0.5px]"></div>
          <div className="w-[3px] h-[75%] bg-black rounded-[0.5px]"></div>
          <div className="w-[3px] h-[100%] bg-black rounded-[0.5px]"></div>
        </div>
        <Wifi size={14} color="black" strokeWidth={2.5} />
        <div className="relative ml-0.5">
          <div className="w-5 h-2.5 border border-black/40 rounded-[2px] p-[1px]">
            <div className="w-full h-full bg-black rounded-[0.5px]"></div>
          </div>
          <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-[1.5px] h-1.5 bg-black/40 rounded-r-full"></div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
