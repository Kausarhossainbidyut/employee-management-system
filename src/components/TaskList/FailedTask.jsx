const FailedTask = ({ data }) => {
  return (
    <div className="shrink-0 w-80 h-[390px] rounded-3xl bg-[#111827] border border-slate-700 p-6 flex flex-col shadow-xl hover:border-rose-500/60 hover:shadow-rose-500/20 hover:-translate-y-2 transition-all duration-300">

      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold tracking-wide">
          {data.category}
        </span>

        <span className="text-xs text-slate-400">
          📅 {data.taskDate}
        </span>
      </div>

      {/* Title */}
      <h2 className="mt-6 text-2xl font-bold text-white leading-snug">
        {data.taskTitle}
      </h2>

      {/* Description */}
      <p className="mt-4 text-sm leading-7 text-slate-400 flex-1 overflow-y-auto">
        {data.taskDescription}
      </p>

      {/* Footer */}
      <div className="pt-5 border-t border-slate-700">
        <button className="w-full rounded-xl bg-gradient-to-r from-rose-500 to-red-600 py-3 font-semibold text-white shadow-lg cursor-default">
          ❌ Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;