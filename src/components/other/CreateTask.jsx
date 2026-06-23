const CreateTask = () => {
  return (
    <div className="mt-8 bg-[#1c1c1c] rounded-2xl p-6 md:p-8 border border-zinc-800 shadow-lg">
      <form className="flex flex-col lg:flex-row gap-8">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 space-y-5">
          <div>
            <label className="block text-sm text-zinc-400 mb-2">
              Task Title
            </label>
            <input
              required
              type="text"
              placeholder="Make a UI Design"
              className="w-full bg-transparent border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-2">Due Date</label>
            <input
              required
              type="date"
              className="w-full bg-transparent border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-2">
              Assign To
            </label>
            <input
              required
              type="text"
              placeholder="Employee Name"
              className="w-full bg-transparent border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-2">Category</label>
            <input
              required
              type="text"
              placeholder="Design, Development, Testing..."
              className="w-full bg-transparent border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition-all"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2">
          <label className="block text-sm text-zinc-400 mb-2">
            Description
          </label>

          <textarea
            required
            rows="10"
            placeholder="Write task details here..."
            className="w-full bg-transparent border border-zinc-700 rounded-lg px-4 py-3 outline-none resize-none focus:border-emerald-500 transition-all"
          ></textarea>

          <button
            type="submit"
            className="w-full mt-5 bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 py-3 rounded-lg font-semibold text-white shadow-md"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
