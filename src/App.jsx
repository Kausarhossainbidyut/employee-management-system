import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";

import AdminDashboard from "./components/Dashboard/AdminDashboard";

import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage } from "./utils/localStorage";
const App = () => {
  setLocalStorage()
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
  console.log(authData?.employees);
  console.log(authData?.admin);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(loggedInUser);
  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (
      authData &&
      authData?.admin?.find((e) => email == e.email && e.password == password)
    ) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData?.employees?.find(
        (e) => email == e.email && e.password == password,
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee)
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" }),
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : (user == "employee"? <EmployeeDashboard data={loggedInUserData}/>: null)}
    </>
  );
};

export default App;
