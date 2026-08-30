import React from 'react';

export const CoprotMockup = ({ className = "w-full h-full" }) => (
  <div className={`relative overflow-hidden bg-slate-900 rounded-lg p-3 border border-slate-700/60 shadow-inner flex flex-col justify-between select-none ${className}`}>
    {/* Browser topbar */}
    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
      <div className="flex space-x-1.5">
        <div className="w-2 h-2 rounded-full bg-rose-500/80"></div>
        <div className="w-2 h-2 rounded-full bg-amber-500/80"></div>
        <div className="w-2 h-2 rounded-full bg-emerald-500/80"></div>
      </div>
      <div className="text-[10px] text-slate-400 font-mono tracking-wide bg-slate-800/80 px-2 py-0.5 rounded">
        coprot-api.v1 / dsa-tracker
      </div>
      <div className="w-8"></div>
    </div>

    {/* Mockup Dashboard content */}
    <div className="grid grid-cols-12 gap-2 my-2 items-center">
      {/* Mini Sidebar */}
      <div className="col-span-3 space-y-1.5 py-1">
        <div className="h-2 w-full bg-blue-500/40 rounded"></div>
        <div className="h-1.5 w-4/5 bg-slate-700 rounded"></div>
        <div className="h-1.5 w-3/4 bg-slate-700 rounded"></div>
        <div className="h-1.5 w-2/3 bg-slate-700 rounded"></div>
      </div>

      {/* Main content with cards & charts */}
      <div className="col-span-9 space-y-2">
        <div className="grid grid-cols-3 gap-1.5">
          <div className="bg-slate-800/90 p-1.5 rounded border border-slate-700/50">
            <div className="text-[9px] text-slate-400">Solved</div>
            <div className="text-xs font-bold text-blue-400">184</div>
          </div>
          <div className="bg-slate-800/90 p-1.5 rounded border border-slate-700/50">
            <div className="text-[9px] text-slate-400">FastAPI</div>
            <div className="text-xs font-bold text-emerald-400">200 OK</div>
          </div>
          <div className="bg-slate-800/90 p-1.5 rounded border border-slate-700/50">
            <div className="text-[9px] text-slate-400">MySQL</div>
            <div className="text-xs font-bold text-purple-400">Synced</div>
          </div>
        </div>

        {/* Mini progress bars */}
        <div className="space-y-1 bg-slate-800/50 p-1.5 rounded border border-slate-800">
          <div className="flex justify-between text-[9px] text-slate-300">
            <span>Dynamic Programming</span>
            <span className="text-blue-400">82%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 w-[82%] rounded-full"></div>
          </div>
          
          <div className="flex justify-between text-[9px] text-slate-300">
            <span>Trees & Graphs</span>
            <span className="text-emerald-400">75%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-[75%] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom status */}
    <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800/80">
      <span className="flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        Multi-User Auth Active
      </span>
      <span className="font-mono text-blue-400">JWT + MySQL</span>
    </div>
  </div>
);

export const ChatbotMockup = ({ className = "w-full h-full" }) => (
  <div className={`relative overflow-hidden bg-gradient-to-br from-emerald-950/80 via-slate-900 to-slate-900 rounded-lg p-3 border border-emerald-800/40 shadow-inner flex flex-col justify-center items-center select-none ${className}`}>
    {/* Robot Icon Graphic */}
    <div className="w-16 h-16 rounded-2xl bg-emerald-900/50 border border-emerald-500/40 flex flex-col items-center justify-center relative shadow-lg shadow-emerald-950/50 mb-2">
      {/* Robot Antennas */}
      <div className="absolute -top-2 flex gap-3">
        <div className="w-1 h-2 bg-emerald-400 rounded-full"></div>
        <div className="w-1 h-2 bg-emerald-400 rounded-full"></div>
      </div>
      {/* Eyes */}
      <div className="flex gap-3 mb-1">
        <div className="w-3 h-3 rounded-full bg-emerald-400 flex items-center justify-center animate-pulse">
          <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
        </div>
        <div className="w-3 h-3 rounded-full bg-emerald-400 flex items-center justify-center animate-pulse">
          <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
        </div>
      </div>
      {/* Smile */}
      <div className="w-6 h-1 bg-emerald-300 rounded-full"></div>
    </div>
    <div className="text-xs font-semibold text-emerald-300">NLP Query Engine</div>
    <div className="text-[10px] text-slate-400 text-center mt-1">Intent Recognition • Context Memory</div>
  </div>
);

export const DashboardMockup = ({ className = "w-full h-full" }) => (
  <div className={`relative overflow-hidden bg-gradient-to-br from-purple-950/70 via-slate-900 to-slate-900 rounded-lg p-3 border border-purple-800/40 shadow-inner flex flex-col justify-center items-center select-none ${className}`}>
    {/* Bar chart graphic */}
    <div className="w-full flex items-end justify-center gap-2.5 h-16 mb-2 px-4">
      <div className="w-4 bg-purple-500/40 rounded-t h-8"></div>
      <div className="w-4 bg-purple-500/70 rounded-t h-12"></div>
      <div className="w-4 bg-purple-400 rounded-t h-16 shadow-md shadow-purple-500/30"></div>
      <div className="w-4 bg-purple-500/80 rounded-t h-10"></div>
      <div className="w-4 bg-purple-500/50 rounded-t h-14"></div>
    </div>
    <div className="text-xs font-semibold text-purple-300">Data Analytics & Insights</div>
    <div className="text-[10px] text-slate-400 text-center mt-1">Pandas • NumPy • Matplotlib • EDA</div>
  </div>
);
