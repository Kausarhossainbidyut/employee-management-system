const NewTask = ({ data, employeeId, taskIndex }) => {
  const acceptTask = () => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];

    const employee = employees.find((emp) => emp.id === employeeId);

    if (!employee) return;

    employee.tasks[taskIndex] = {
      ...employee.tasks[taskIndex],
      active: true,
      newTask: false,
      completed: false,
      failed: false,
    };

    employee.taskNumbers.newTask--;
    employee.taskNumbers.active++;

    localStorage.setItem("employees", JSON.stringify(employees));

    window.location.reload();
  };

  return (
    <div className="shrink-0 w-80 h-[390px] rounded-3xl bg-[#111827] border border-slate-700 p-6 flex flex-col shadow-xl hover:border-amber-400/60 hover:shadow-amber-500/20 hover:-translate-y-2 transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide">
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
        <button
          onClick={acceptTask}
          className="w-full rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 py-3 font-semibold text-white shadow-lg hover:scale-[1.02] hover:shadow-orange-500/40 transition-all"
        >
          Accept Task →
        </button>
      </div>
    </div>
  );
};

export default NewTask;