const AcceptTask = ({ data }) => {
  return (
    <div className="shrink-0 w-80 h-[390px] rounded-2xl bg-[#1E293B] border border-slate-700 p-6 flex flex-col shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      {/* Header */}
      <div className="flex items-start justify-between">
        <span className="bg-cyan-500/20 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full border border-cyan-500/30">
          {data.category}
        </span>

        <div className="text-right">
          <p className="text-xs text-slate-400">Due Date</p>
          <p className="text-sm text-white font-medium">
            {data.taskDate}
          </p>
        </div>
      </div>

      {/* Title */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-white leading-snug">
          {data.taskTitle}
        </h2>
      </div>

      {/* Description */}
      <div className="mt-4 flex-1">
        <p className="text-sm text-slate-300 leading-7 overflow-y-auto h-full pr-1">
          {data.taskDescription}
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-700 my-5"></div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 rounded-xl bg-emerald-600 hover:bg-emerald-700 py-2.5 text-sm font-semibold text-white transition-all duration-300">
          ✓ Complete
        </button>

        <button className="flex-1 rounded-xl bg-rose-600 hover:bg-rose-700 py-2.5 text-sm font-semibold text-white transition-all duration-300">
          ✕ Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;