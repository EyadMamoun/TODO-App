import React, { createContext, useEffect, useState } from 'react'

export const TaskContext = createContext("");

export default function TaskContextProvider({children}) {

    const [tasks, setTasks] = useState([]);
    const [indexToUpdate, setIndexToUpdate] = useState(0);

    useEffect(() => {
      
      const value = localStorage.getItem('prevTasks');
      if(value != null)
      {
        setTasks(JSON.parse(localStorage.getItem('prevTasks')));
      }
    },[])

  return (
    <TaskContext.Provider value={{tasks, setTasks, indexToUpdate, setIndexToUpdate}}>
        {children}
    </TaskContext.Provider>
  )
}
