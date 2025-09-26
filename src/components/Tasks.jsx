import { ChevronRightIcon, TrashIcon } from 'lucide-react';

function Tasks ({ tasks, onTaskClick, onTaskDelete }) {
    return (
            <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
                {tasks.map((task) => (
                    <li key={task.id} className="flex">
                        <button onClick={() => onTaskClick(task.id)} 
                        className={`bg-slate-400 text-left w-full text-white p-2 rounded-md gap-2 
                            ${task.isCompleted ? 'line-through' : ''}`}
                        >
                            {task.title}
                        </button>
                        <button className="bg-slate-400 text-white p-2 rounded-md gap-2 ml-2">
                            <ChevronRightIcon />
                        </button>
                        <button className="bg-slate-400 text-white p-2 rounded-md gap-2 ml-2">
                            <TrashIcon onClick={() => onTaskDelete(task.id)} />
                        </button>

                    </li>
                ))}
            </ul>
    );
}

export default Tasks;