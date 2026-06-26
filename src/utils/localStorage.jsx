const employees = [
  {
    id: 1,
    firstName: "Rahim",
    email: "khbidyut31@gmail.com",
    password: "123",

    taskNumbers: {
      active: 8,
      newTask: 5,
      completed: 4,
      failed: 3,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription:
          "Create a responsive homepage UI using React and Tailwind CSS.",
        taskDate: "2026-07-28",
        category: "Design",
      },
    ],
  },

  {
    id: 2,
    firstName: "Karim",
    email: "employee2@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [],
  },
];

const admin = [
  {
    id: 100,
    firstName: "Hasan",
    email: "admin@example.com",
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