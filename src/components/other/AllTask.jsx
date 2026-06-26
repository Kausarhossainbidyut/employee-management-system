import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-[#1f1f1f] mt-8 rounded-2xl border border-zinc-800 p-4 sm:p-6 shadow-lg">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
        Employee Task Overview
      </h2>

      {/* Desktop & Tablet */}
      <div className="hidden md:block overflow-x-auto">
        <div className="min-w-[700px]">
          {/* Header */}
          <div className="grid grid-cols-5 items-center bg-zinc-800 text-zinc-300 px-6 py-4 rounded-xl font-semibold text-sm uppercase tracking-wide">
            <p>Employee</p>
            <p className="text-center">New</p>
            <p className="text-center">Active</p>
            <p className="text-center">Completed</p>
            <p className="text-center">Failed</p>
          </div>

          {/* Body */}
          <div className="mt-4 space-y-3 max-h-[420px] overflow-y-auto">
            {authData?.employees?.map((employee) => (
              <div
                key={employee.id}
                className="grid grid-cols-5 items-center bg-zinc-900 hover:bg-zinc-800 transition-all rounded-xl px-6 py-4 border border-zinc-800"
              >
                <div>
                  <h3 className="text-white font-semibold">
                    {employee.firstName}
                  </h3>
                  <p className="text-zinc-400 text-sm break-all">
                    {employee.email}
                  </p>
                </div>

                <div className="flex justify-center">
                  <span className="bg-sky-500/15 text-sky-400 px-4 py-1 rounded-full">
                    {employee.taskNumbers.newTask}
                  </span>
                </div>

                <div className="flex justify-center">
                  <span className="bg-amber-500/15 text-amber-400 px-4 py-1 rounded-full">
                    {employee.taskNumbers.active}
                  </span>
                </div>

                <div className="flex justify-center">
                  <span className="bg-emerald-500/15 text-emerald-400 px-4 py-1 rounded-full">
                    {employee.taskNumbers.completed}
                  </span>
                </div>

                <div className="flex justify-center">
                  <span className="bg-rose-500/15 text-rose-400 px-4 py-1 rounded-full">
                    {employee.taskNumbers.failed}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden space-y-4">
        {authData?.employees?.map((employee) => (
          <div
            key={employee.id}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-4"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white">
                {employee.firstName}
              </h3>

              <p className="text-zinc-400 text-sm break-all">
                {employee.email}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-zinc-800 rounded-lg p-3 text-center">
                <p className="text-xs text-zinc-400">New</p>
                <p className="text-sky-400 font-bold text-lg">
                  {employee.taskNumbers.newTask}
                </p>
              </div>

              <div className="bg-zinc-800 rounded-lg p-3 text-center">
                <p className="text-xs text-zinc-400">Active</p>
                <p className="text-amber-400 font-bold text-lg">
                  {employee.taskNumbers.active}
                </p>
              </div>

              <div className="bg-zinc-800 rounded-lg p-3 text-center">
                <p className="text-xs text-zinc-400">Completed</p>
                <p className="text-emerald-400 font-bold text-lg">
                  {employee.taskNumbers.completed}
                </p>
              </div>

              <div className="bg-zinc-800 rounded-lg p-3 text-center">
                <p className="text-xs text-zinc-400">Failed</p>
                <p className="text-rose-400 font-bold text-lg">
                  {employee.taskNumbers.failed}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;