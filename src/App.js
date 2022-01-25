
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTaskForm'
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'Doctors Appointment',
        day:'Feb 5th at 2:30',
        reminder:true,
    },
    {
        id:2,
        text:'Scientist Meet',
        day:'Feb 6th at 3:30',
        reminder:true,
    },
    {
        id:3,
        text:'School Meeting',
        day:'Feb 7th at 4:30',
        reminder:false,
    },
])
const addTask=(task)=>{
  const id=Math.floor(Math.random()*1000+1)
  const newTask={id,...task}
  setTasks([...tasks,newTask])
}
const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=> task.id !== id))
}
const toggleReminder=(id)=>{
  setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
}
  return (
    <div className="container">
     <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'no tasks show'}
    </div>
  );
}

export default App;
