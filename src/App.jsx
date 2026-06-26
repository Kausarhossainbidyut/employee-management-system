import { useContext, useEffect, useState } from "react";

import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);

      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (!authData) return;

    // Admin Login
    const admin = authData.admin.find(
      (admin) =>
        admin.email === email && admin.password === password
    );

    if (admin) {
      setUser("admin");
      setLoggedInUserData(admin);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "admin",
          data: admin,
        })
      );

      return;
    }

    // Employee Login
    const employee = authData.employees.find(
      (emp) =>
        emp.email === email && emp.password === password
    );

    if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "employee",
          data: employee,
        })
      );

      return;
    }

    alert("Invalid Credentials");
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && (
        <AdminDashboard data={loggedInUserData} changeUser={setUser} />
      )}

      {user === "employee" && (
        <EmployeeDashboard data={loggedInUserData} changeUser={setUser}/>
      )}
    </>
  );
};

export default App;