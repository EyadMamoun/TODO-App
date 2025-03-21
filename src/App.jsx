import './App.css';
import TaskDetails from './Components/TaskDetails/TaskDetails';
import Home from './Components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import TaskContextProvider from './Components/Context/TaskContext';
import UpdateTask from './Components/UpdateTask/UpdateTask';

const myRouter = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'addTask',
        element: <TaskDetails />
      },
      {
        path: 'updateTask',
        element: <UpdateTask/>
      },
    ]
  }
])

function App() {
  return <>

    <TaskContextProvider>
      <RouterProvider router={myRouter} />
    </TaskContextProvider>
  </>
}

export default App;
