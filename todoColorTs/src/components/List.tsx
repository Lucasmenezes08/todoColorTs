import React, { useState } from "react";

interface NewTaskItem{
    id: number
    task:string;
}



export default function List (){
    const [task , setTask] = useState('');
    const [TaskItem , setNewTaskitem] = useState<NewTaskItem[]>([])


    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    }

    const addTask = (event:React.FormEvent) => {
        event.preventDefault();
        const newTaskObject:NewTaskItem = {
            id: Date.now(),
            task: task,
        }

        setNewTaskitem((t) => [...t , newTaskObject]);
        setTask('');
    }

    const deleteTask = (taskId:number) => {
        const filterTask = TaskItem.filter(task => task.id !== taskId);
        setNewTaskitem(filterTask);
    }   


    return (
        <section>
            <form onSubmit={addTask}>
                <input type="text" onChange={handleChange} value={task}/>
                <button type="submit">Adicionar</button>
            </form>
            
            <ol>
                {TaskItem.map(task => (
                    <li key={task.id}>
                        {task.task}
                        <button onClick={() => deleteTask(task.id)}>Deletar</button>
                    </li>
                ))}
            </ol>
        </section>
    )
}