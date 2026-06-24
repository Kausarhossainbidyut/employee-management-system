import { useState } from "react";
import Login from "./components/Auth/Login";

import AdminDashboard from "./components/Dashboard/AdminDashboard";

import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
const App = () => {
  const [user, setUser]=useState(null)
  const handleLogin =(email, password) =>{
    if(email === 'admin@ge.com' && password == '123'){
      setUser("admin")
      console.log(user);
      
    }else if((email === 'user@ge.com' && password == '123')){
      setUser("employee")
      console.log(user);
      
    }else{
      alert("Invalid Credentials")
    }
    
  }
  return (
    <>
    {!user?<Login handleLogin={handleLogin}/>:''}
    {user == 'admin' ?<AdminDashboard />:<EmployeeDashboard />}
      
    </>
  );
};

export default App;
