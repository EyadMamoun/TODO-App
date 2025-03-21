import React, { useContext, useState } from 'react'
import { TaskContext } from '../Context/TaskContext'
import { useNavigate } from 'react-router-dom';
import TaskCSS from './Task.module.css'

export default function Task({ task, index }) {

    const { setTasks, setIndexToUpdate } = useContext(TaskContext);

    function deleteTask(id) {
        setTasks(prevTasks => prevTasks.filter((_, idx) => idx !== id));
    }

    const [check, setCheck] = useState(false)

    function checkTask() {
        setCheck(!check);
    }

    const navigate = useNavigate();

    function editTask() {
        setIndexToUpdate(index);
        navigate('/updateTask');
    }

    return <>

        <div className={check ? TaskCSS.done +" container border rounded-4 my-4 shadow text-white" : TaskCSS.undo + " container border rounded-4 my-4  shadow"}>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='py-4'>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p className='m-0'>Deadline: {task.deadline}</p>
                </div>

                <div className='d-flex flex-wrap flex-md-nowrap w-25'>
                    <i
                        onClick={editTask}
                        style={{ cursor: 'pointer' }}
                        className={TaskCSS.edit + " fa-regular fa-pen-to-square fs-2 m-3"}>
                    </i>

                    <i
                        onClick={() => deleteTask(index)}
                        style={{ cursor: 'pointer' }}
                        className={TaskCSS.trash + " fa-regular fa-trash-can fs-2 m-3"}>
                    </i>

                    {check ? <i
                        onClick={checkTask}
                        style={{ cursor: 'pointer' }}
                        className={TaskCSS.trash + " fa-regular fa-circle-xmark fs-2 m-3"}>
                    </i> : <i
                        onClick={checkTask}
                        style={{ cursor: 'pointer' }}
                        className={TaskCSS.check + " fa-regular fa-circle-check fs-2 m-3"}>
                    </i>}
                </div>
            </div>
        </div>
    </>
}
