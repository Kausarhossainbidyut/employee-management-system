const CompleteTask = ({ data }) => {
  return (
    <div className="shrink-0 w-80 h-[380px] bg-[#1E293B] border border-slate-700 rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold">
          {data.category}
        </span>

        <span className="text-sm text-slate-400">
          {data.taskDate}
        </span>
      </div>

      {/* Title */}
      <h2 className="mt-5 text-2xl font-bold text-white">
        {data.taskTitle}
      </h2>

      {/* Description */}
      <p className="mt-4 text-sm text-slate-300 leading-6 flex-1 overflow-y-auto">
        {data.taskDescription}
      </p>

      {/* Divider */}
      <div className="border-t border-slate-700 my-5"></div>

      {/* Status Button */}
      <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md">
        ✅ Completed
      </button>
    </div>
  );
};

export default CompleteTask;