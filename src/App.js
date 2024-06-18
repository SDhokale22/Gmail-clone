import { useSelector } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Inbox from './components/Inbox';
import Login from './components/Login';
import Mail from './components/Mail';
import SendMail from './components/SendMail';
import Navbar from './components/shared/Navbar';
import {RouterProvider, createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />
      },
      {
        path: "/mail/:id",
        element: <Mail />
      },
    ]
  }
]);

function App() {
  const {user} = useSelector(store=>store.app);
  
  return (
    <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
    {
      !user ? (
        <Login />
      ) : (
        <>
        <Navbar />
        <RouterProvider router={router} />
        <div className='absolute w-[30%] bottom-0 right-20 z-10'>
          <SendMail />
        </div> 
        </>
      )
    }
      
    </div>
  );
}

export default App;
