import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({data}) => {
    console.log(data);
    
    return (
        <div>
            <div className="p-10 bg-[#1c1c1c] h-screen">
                <Header data={data}/>
                <TaskListNumbers data={data}/>
                <TaskList data={data}/>
            </div>
        </div>
    );
};

export default EmployeeDashboard;