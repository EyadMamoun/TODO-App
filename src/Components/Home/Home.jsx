import React, { useContext, useEffect } from 'react'
import Task from '../Task/Task'
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../Context/TaskContext';

export default function Home() {

    const navigate = useNavigate();

    const { tasks } = useContext(TaskContext);

    return <>

        <section className='overflow-auto' style={{ backgroundColor: 'beige' }}>
            <div className="bg-success">
                <div className="container">
                    <div>
                        <h1 style={{ fontSize: "50px" }} className="pt-5 text-white">
                            <span className='me-3'>
                                <i className="fa-solid fa-list-check"></i>
                            </span>
                            TODO APP
                        </h1>
                        <p className='text-white pb-5'>Get It Done, One Task at a Time!</p>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-end'>
                <div
                    onClick={() => { navigate('/AddTask') }}
                    style={{ width: '45px', height: '45px', cursor: 'pointer' }}
                    className='d-flex align-items-center justify-content-center rounded-circle me-4 mt-2 bg-white shadow'>
                    <i className="fa-solid fa-plus fs-2 text-success"></i>
                </div>
            </div>

            <div className="container">

                {tasks.length !== 0 ? tasks.map((task, idx) => (
                    <Task task={task} index={idx} key={idx} />
                )) : <><h1 className='text-secondary text-center my-5 py-5'>No Tasks Yet</h1></>}
            </div>
        </section>
    </>
}
