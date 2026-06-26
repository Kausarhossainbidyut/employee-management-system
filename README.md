# EMS - Employee Management System

This is a React + Vite-based Employee Management System (EMS) project where separate dashboards are used for Admin and Employee roles.

## Project Purpose

This application is designed for task management and employee administration. Admin users can create tasks and assign them to employees, while employees can view, accept, and update the status of their assigned tasks.

## Key Features

- Admin login
- Employee login
- Create new tasks from the Admin dashboard
- Assign tasks to employees
- Display task counts on the Employee dashboard
- View tasks by status: New, Active, Completed, and Failed
- Allow employees to accept, complete, or mark tasks as failed
- Responsive user interface
- Data stored in browser localStorage

## Technologies Used

- React
- Vite
- Tailwind CSS
- React Context API
- localStorage

## Installation

To run the project locally, follow these steps:

```bash
npm install
npm run dev
```

Then open your browser at:

```bash
http://localhost:5173
```

## Demo Login Credentials

Admin:
- Email: khbidyut5@gmail.com
- Password: 123

Employee:
- Email: khbidyut31@gmail.com
- Password: 123

You can also try other employee accounts such as:
- karim@gmail.com
- sakib@gmail.com
- nadim@gmail.com
- jahid@gmail.com

## Project Structure

```bash
src/
  components/
    Auth/
    Dashboard/
    other/
    TaskList/
  context/
  pages/
  utils/
```

## Important Notes

- Data in this project is stored in browser localStorage, so clearing the browser data may remove saved information.
- This project is intended for demo and educational purposes.

## Build the Project

```bash
npm run build
```
