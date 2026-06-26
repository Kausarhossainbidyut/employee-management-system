const FailedTask = ({ data }) => {
  return (
    <div className="shrink-0 w-80 h-[390px] bg-[#1E293B] border border-slate-700 rounded-2xl p-6 flex flex-col shadow-lg hover:border-rose-500/50 hover:shadow-rose-500/10 hover:-translate-y-1 transition-all duration-300">

      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold">
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
      <p className="mt-4 flex-1 overflow-y-auto text-sm leading-7 text-slate-300">
        {data.taskDescription}
      </p>

      {/* Divider */}
      <div className="border-t border-slate-700 my-5"></div>

      {/* Status */}
      <button
        disabled
        className="w-full rounded-xl bg-rose-600 py-3 text-white font-semibold cursor-not-allowed opacity-90"
      >
        ❌ Failed
      </button>
    </div>
  );
};

export default FailedTask;