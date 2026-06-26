import { useState } from "react";

const AcceptTask = ({ data, employeeId, taskIndex }) => {
  const [isFinished, setIsFinished] = useState(false);

  const updateTask = (status) => {
    if (isFinished) return;

    const employees = JSON.parse(localStorage.getItem("employees")) || [];

    const employee = employees.find((emp) => emp.id === employeeId);

    if (!employee) return;

    const task = employee.tasks[taskIndex];

    // Already finished হলে আর কিছু করবে না
    if (task.completed || task.failed) {
      setIsFinished(true);
      return;
    }

    // Task Status Update
    task.active = false;
    task.newTask = false;
    task.completed = status === "completed";
    task.failed = status === "failed";

    // Counter Update
    employee.taskNumbers.active = Math.max(
      0,
      employee.taskNumbers.active - 1
    );

    if (status === "completed") {
      employee.taskNumbers.completed += 1;
    } else {
      employee.taskNumbers.failed += 1;
    }

    localStorage.setItem("employees", JSON.stringify(employees));

    setIsFinished(true);

    // Refresh UI
    window.location.reload();
  };

  return (
    <div className="shrink-0 w-80 h-[390px] rounded-2xl bg-[#1E293B] border border-slate-700 p-6 flex flex-col shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between">
        <span className="bg-cyan-500/20 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full border border-cyan-500/30">
          {data.category}
        </span>

        <div className="text-right">
          <p className="text-xs text-slate-400">Due Date</p>
          <p className="text-sm text-white font-medium">{data.taskDate}</p>
        </div>
      </div>

      {/* Title */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-white">
          {data.taskTitle}
        </h2>
      </div>

      {/* Description */}
      <div className="mt-4 flex-1">
        <p className="text-sm text-slate-300 leading-7 overflow-y-auto h-full pr-1">
          {data.taskDescription}
        </p>
      </div>

      <div className="border-t border-slate-700 my-5"></div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          disabled={isFinished}
          onClick={() => updateTask("completed")}
          className={`flex-1 rounded-xl py-2.5 text-sm font-semibold text-white transition ${
            isFinished
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-emerald-600 hover:bg-emerald-700"
          }`}
        >
          ✓ Complete
        </button>

        <button
          disabled={isFinished}
          onClick={() => updateTask("failed")}
          className={`flex-1 rounded-xl py-2.5 text-sm font-semibold text-white transition ${
            isFinished
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-rose-600 hover:bg-rose-700"
          }`}
        >
          ✕ Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;