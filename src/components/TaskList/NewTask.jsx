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
    <div className="shrink-0 w-80 h-[390px] bg-[#1E293B] border border-slate-700 rounded-2xl p-6 flex flex-col shadow-lg hover:border-amber-500/50 hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300">

      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
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

      {/* Button */}
      <button
        onClick={acceptTask}
        className="w-full rounded-xl bg-amber-500 hover:bg-amber-600 py-3 text-white font-semibold transition-all duration-300"
      >
        Accept Task
      </button>
    </div>
  );
};

export default NewTask;