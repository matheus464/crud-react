import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Ler a documentação do React",
      isCompleted: false
    },
    {
      id: 2,
      title: "Estudar JavaScript",
      description: "Ler a documentação do JavaScript",
      isCompleted: false
    },
    {
      id: 3,
      title: "Estudar TypeScript",
      description: "Ler a documentação do TypeScript",
      isCompleted: false
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

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
          </h1>
        <AddTask/>
        <Tasks tasks={task} onTaskClick={onTaskClick}/>
      </div>
    </div>
  );

}

export default App;