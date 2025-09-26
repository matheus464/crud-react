import { useState } from "react";

function AddTask(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    

    return (
    <div className=" space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
        <input
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
            type="text" 
            placeholder="Digite o título da tarefa" 
            className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md">
        </input>
        <input
            value={description}
            onChange={(e) => setDescription(e.target.value)} 
            type="text" 
            placeholder="Digite a descrição da tarefa" 
            className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md">
        </input>
        <button 
            className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
            onClick={() => {
                if (!title || !description){
                    alert("Por favor, preencha todos os campos");
                    return;
                }
                    props.onAddTask(title, description)
                }
            }
        >
            Adicionar
        </button>
    </div>
    );
}

export default AddTask;