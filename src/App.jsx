import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState } from "react";


function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Ler a documentação do React",
      isCompleted: false,
      delete: false
    },
    {
      id: 2,
      title: "Estudar JavaScript",
      description: "Ler a documentação do JavaScript",
      isCompleted: false,
      delete: false
    },
    {
      id: 3,
      title: "Estudar TypeScript",
      description: "Ler a documentação do TypeScript",
      isCompleted: false,
      delete: false
    }
  ]);

  function onTaskClick (taskId) {
    const newTasks = task.map((task) => {
      if (task.id === taskId) {
          return {...task, isCompleted: !task.isCompleted};
      }
      return task;
    });
    setTask(newTasks);
  }

  function onTaskDelete (taskId) {
    const newTasks = task.filter((task) => task.id !== taskId);
    setTask(newTasks);
  }

  function onAddTask (title, description) {
    const newTask = {
      id: task.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTask([...task, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
          </h1>
        <AddTask onAddTask={onAddTask}/>
        <Tasks tasks={task} onTaskClick={onTaskClick} onTaskDelete={onTaskDelete}/>
      </div>
    </div>
  );

}

export default App;