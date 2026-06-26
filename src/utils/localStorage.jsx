const employees = [
  {
    id: 1,
    firstName: "KHB",
    email: "khbidyut31@gmail.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create a responsive homepage using React and Tailwind CSS.",
        taskDate: "2026-07-28",
        category: "Design",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Login UI",
        taskDescription: "Build a responsive login page with validation.",
        taskDate: "2026-07-30",
        category: "UI/UX",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Navbar Component",
        taskDescription: "Complete responsive navbar with dropdown menu.",
        taskDate: "2026-07-22",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Integration",
        taskDescription: "Stripe payment integration was not completed.",
        taskDate: "2026-07-18",
        category: "Backend",
      },
    ],
  },

  {
    id: 2,
    firstName: "Karim",
    email: "karim@gmail.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Development",
        taskDescription: "Develop REST API for employee management.",
        taskDate: "2026-07-29",
        category: "Backend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Dashboard Layout",
        taskDescription: "Create employee dashboard layout.",
        taskDate: "2026-07-31",
        category: "Frontend",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Notification System",
        taskDescription: "Implement toast notification.",
        taskDate: "2026-08-01",
        category: "React",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Sidebar Design",
        taskDescription: "Responsive admin sidebar completed.",
        taskDate: "2026-07-20",
        category: "Design",
      },
    ],
  },

  {
    id: 3,
    firstName: "Sakib",
    email: "sakib@gmail.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 2,
      completed: 2,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Profile Page",
        taskDescription: "Develop employee profile page.",
        taskDate: "2026-07-27",
        category: "Frontend",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Dark Mode",
        taskDescription: "Implement dark/light theme.",
        taskDate: "2026-07-29",
        category: "UI",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Search Feature",
        taskDescription: "Add employee search functionality.",
        taskDate: "2026-08-02",
        category: "React",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Footer Section",
        taskDescription: "Footer completed successfully.",
        taskDate: "2026-07-15",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Contact Form",
        taskDescription: "Validated contact form.",
        taskDate: "2026-07-16",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Firebase Auth",
        taskDescription: "Authentication implementation failed.",
        taskDate: "2026-07-18",
        category: "Backend",
      },
    ],
  },

  {
    id: 4,
    firstName: "Nadim",
    email: "nadim@gmail.com",
    password: "123",

    taskNumbers: {
      active: 0,
      newTask: 2,
      completed: 2,
      failed: 1,
    },

    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Email Template",
        taskDescription: "Create email verification template.",
        taskDate: "2026-08-01",
        category: "Design",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Blog Page",
        taskDescription: "Develop blog page UI.",
        taskDate: "2026-08-03",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Settings Page",
        taskDescription: "Settings page completed.",
        taskDate: "2026-07-17",
        category: "React",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Responsive Navbar",
        taskDescription: "Navbar completed.",
        taskDate: "2026-07-19",
        category: "UI",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "MongoDB Connection",
        taskDescription: "Database connection failed.",
        taskDate: "2026-07-21",
        category: "Backend",
      },
    ],
  },

  {
    id: 5,
    firstName: "Jahid",
    email: "jahid@gmail.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Redux Setup",
        taskDescription: "Configure Redux Toolkit.",
        taskDate: "2026-07-30",
        category: "React",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Admin Dashboard",
        taskDescription: "Create dashboard statistics section.",
        taskDate: "2026-08-02",
        category: "Frontend",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Image Upload",
        taskDescription: "Integrate ImageBB upload.",
        taskDate: "2026-08-03",
        category: "Backend",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Pagination",
        taskDescription: "Add pagination to task list.",
        taskDate: "2026-08-04",
        category: "React",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Loader Component",
        taskDescription: "Loading spinner completed.",
        taskDate: "2026-07-23",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "JWT Authentication",
        taskDescription: "JWT implementation failed.",
        taskDate: "2026-07-25",
        category: "Backend",
      },
    ],
  },
];

const admin = [
  {
    id: 100,
    firstName: "KHB",
    email: "khbidyut5@gmail.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }

  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || [];

  return { employees, admin };
};