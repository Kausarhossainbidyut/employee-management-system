const AllTask = () => {
  return (
    <div className="bg-[#1c1c1c] mt-8 rounded-2xl p-6 border border-zinc-800">
      {/* Header */}
      <div className="grid grid-cols-3 bg-[#2a2a2a] px-5 py-4 rounded-xl font-semibold text-lg mb-4 sticky top-0">
        <h2>Employee</h2>
        <h2>Task</h2>
        <h2 className="text-right">Status</h2>
      </div>

      {/* Task List */}
      <div className="space-y-3 h-72 overflow-y-auto pr-2">

        <div className="flex justify-between items-center bg-rose-500 px-5 py-4 rounded-xl shadow-md hover:scale-[1.01] transition-all">
          <h2 className="font-medium text-lg">KHB</h2>
          <h3 className="font-medium">Make a UI Design</h3>
          <h4 className="bg-white/20 px-3 py-1 rounded-full text-sm">
            Pending
          </h4>
        </div>

        <div className="flex justify-between items-center bg-emerald-500 px-5 py-4 rounded-xl shadow-md hover:scale-[1.01] transition-all">
          <h2 className="font-medium text-lg">Rahim</h2>
          <h3 className="font-medium">Build Login System</h3>
          <h4 className="bg-white/20 px-3 py-1 rounded-full text-sm">
            Completed
          </h4>
        </div>

        <div className="flex justify-between items-center bg-sky-500 px-5 py-4 rounded-xl shadow-md hover:scale-[1.01] transition-all">
          <h2 className="font-medium text-lg">Karim</h2>
          <h3 className="font-medium">API Integration</h3>
          <h4 className="bg-white/20 px-3 py-1 rounded-full text-sm">
            In Progress
          </h4>
        </div>

        <div className="flex justify-between items-center bg-amber-500 px-5 py-4 rounded-xl shadow-md hover:scale-[1.01] transition-all">
          <h2 className="font-medium text-lg">Hasan</h2>
          <h3 className="font-medium">Testing Dashboard</h3>
          <h4 className="bg-black/20 px-3 py-1 rounded-full text-sm">
            Review
          </h4>
        </div>

        <div className="flex justify-between items-center bg-violet-500 px-5 py-4 rounded-xl shadow-md hover:scale-[1.01] transition-all">
          <h2 className="font-medium text-lg">Sakib</h2>
          <h3 className="font-medium">Database Design</h3>
          <h4 className="bg-white/20 px-3 py-1 rounded-full text-sm">
            Assigned
          </h4>
        </div>

        <div className="flex justify-between items-center bg-pink-500 px-5 py-4 rounded-xl shadow-md hover:scale-[1.01] transition-all">
          <h2 className="font-medium text-lg">Nayeem</h2>
          <h3 className="font-medium">Landing Page Design</h3>
          <h4 className="bg-white/20 px-3 py-1 rounded-full text-sm">
            Pending
          </h4>
        </div>

        <div className="flex justify-between items-center bg-cyan-500 px-5 py-4 rounded-xl shadow-md hover:scale-[1.01] transition-all">
          <h2 className="font-medium text-lg">Jahid</h2>
          <h3 className="font-medium">Fix Responsive Issues</h3>
          <h4 className="bg-white/20 px-3 py-1 rounded-full text-sm">
            Completed
          </h4>
        </div>

      </div>
    </div>
  );
};

export default AllTask;