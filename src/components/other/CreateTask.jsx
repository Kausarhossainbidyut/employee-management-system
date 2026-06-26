import { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const [task, setTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    const data = JSON.parse(localStorage.getItem("employees"));

    let found = false;

    data.forEach((elem) => {
      if (assignTo.toLowerCase() === elem.firstName.toLowerCase()) {
        found = true;

        elem.tasks.push(newTask);

        elem.taskNumbers.newTask += 1;
        elem.taskNumbers.active += 1;
      }
    });

    if (!found) {
      alert("Wrong Employee Name");
      return;
    }

    localStorage.setItem("employees", JSON.stringify(data));

    setTask(newTask);

    console.log(newTask);

    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setTaskDescription("");
  };

  return (
    <div className="mt-8 bg-[#1c1c1c] rounded-2xl p-6 md:p-8 border border-zinc-800 shadow-lg">
      <form
        onSubmit={submitHandler}
        className="flex flex-col lg:flex-row gap-8"
      >
        {/* Left Side */}
        <div className="w-full lg:w-1/2 space-y-5">
          <div>
            <label className="block text-sm text-zinc-400 mb-2">
              Task Title
            </label>

            <input
              required
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="Make a UI Design"
              className="w-full bg-transparent border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-2">Due Date</label>

            <input
              required
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
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
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              placeholder="Employee Name"
              className="w-full bg-transparent border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-2">Category</label>

            <input
              required
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Write task details here..."
            className="w-full bg-transparent border border-zinc-700 rounded-lg px-4 py-3 outline-none resize-none focus:border-emerald-500 transition-all"
          />

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
