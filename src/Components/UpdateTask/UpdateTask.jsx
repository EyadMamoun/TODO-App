import React, { useContext, useState, useEffect } from 'react';
import { TaskContext } from '../Context/TaskContext';
import { useNavigate } from 'react-router-dom';

export default function UpdateTask() {
    const { tasks, setTasks, indexToUpdate } = useContext(TaskContext);
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");

    useEffect(() => {
        if (tasks[indexToUpdate]) {
            setTitle(tasks[indexToUpdate].title);
            setDescription(tasks[indexToUpdate].description);
            setDeadline(tasks[indexToUpdate].deadline);
        }
    }, [indexToUpdate, tasks]);

    function handleSubmit(e) {
        e.preventDefault();

        setTasks(prevTasks =>
            prevTasks.map((task, idx) =>
                idx === indexToUpdate ? { ...task, title, description, deadline } : task
            )
        );

        navigate('/');
    }

    return (
        <section style={{ backgroundColor: 'beige' }}>
            <div className='bg-success mb-5 d-flex align-items-center'>
                <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }} className='ms-4'>
                    <i className="fa-solid fa-arrow-left fs-2 text-white"></i>
                </div>
                <div className='ms-5'>
                    <h2 style={{ fontSize: "50px" }} className='text-white text-center py-5'>Update Task</h2>
                </div>
            </div>

            <div className="container">
                <form onSubmit={handleSubmit}>
                    <input
                        style={{ backgroundColor: 'beige', boxShadow: 'none' }}
                        placeholder='Title'
                        className='form-control form-control-lg my-5 border-0 border-bottom border-3 border-success'
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <textarea
                        style={{ backgroundColor: 'beige', boxShadow: 'none' }}
                        placeholder='Description'
                        className='form-control form-control-lg my-5 border-0 border-bottom border-3 border-success'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <label className='fs-5 ms-3 text-body-secondary' htmlFor="">Deadline</label>
                    <input
                        style={{ backgroundColor: 'beige', boxShadow: 'none' }}
                        className='form-control form-control-lg mb-5 border-0 border-bottom border-3 border-success'
                        type="date"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                    />

                    <button className='w-100 btn btn-outline-success border-2 py-2 fs-3 mb-5'>
                        UPDATE
                    </button>
                </form>
            </div>
        </section>
    );
}
