const TaskListNumbers = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
      {/* New Task */}
      <div className="bg-[#1E293B] border-l-4 border-amber-500 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
        <h2 className="text-4xl font-bold text-white">
          {data.taskNumbers.newTask}
        </h2>
        <p className="mt-2 text-slate-400 text-lg font-medium">
          New Tasks
        </p>
      </div>

      {/* Accepted */}
      <div className="bg-[#1E293B] border-l-4 border-sky-500 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
        <h2 className="text-4xl font-bold text-white">
          {data.taskNumbers.active}
        </h2>
        <p className="mt-2 text-slate-400 text-lg font-medium">
          Accepted Tasks
        </p>
      </div>

      {/* Completed */}
      <div className="bg-[#1E293B] border-l-4 border-emerald-500 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
        <h2 className="text-4xl font-bold text-white">
          {data.taskNumbers.completed}
        </h2>
        <p className="mt-2 text-slate-400 text-lg font-medium">
          Completed Tasks
        </p>
      </div>

      {/* Failed */}
      <div className="bg-[#1E293B] border-l-4 border-rose-500 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
        <h2 className="text-4xl font-bold text-white">
          {data.taskNumbers.failed}
        </h2>
        <p className="mt-2 text-slate-400 text-lg font-medium">
          Failed Tasks
        </p>
      </div>
    </div>
  );
};

export default TaskListNumbers;