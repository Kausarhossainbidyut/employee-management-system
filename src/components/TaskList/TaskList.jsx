import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({data}) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto overflow-y-hidden flex items-center gap-5 flex-nowrap w-full py-5 mt-10"
    >
      {data.tasks.map((elem)=>{
        if(elem.active){
          return <AcceptTask />
        }
        if(elem.newTask){
          return <NewTask />
        }
        if(elem.completed){
          return <CompleteTask />
        }
        if(elem.failed){
          return <FailedTask />
        }
      })}
      
    </div>
  );
};

export default TaskList;