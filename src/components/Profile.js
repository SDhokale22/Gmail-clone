import React from 'react'
import Avatar from 'react-avatar'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux';
import { setOpen, setUser } from '../redux/appSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { FaSignOutAlt } from "react-icons/fa";

const Profile = ({email}) => {
    const open = useSelector(store=>store.app.open);
    const dispatch = useDispatch();
    const {user} = useSelector(store=>store.app);

    const signOutHandler = (e) => {
        e.preventDefault();
        signOut(auth).then(() => {
            dispatch(setUser(null));
        }).catch((err) => {
            console.log(err);
        })
    }

  return (
    <div className= {`${open ? 'block' : 'hidden'}bg-black text-white rounded-lg h-[45vh] w-[45vh]`}>
        <div className='flex items-center justify-between '>
            <p className='p-3 font-medium'>sonadhokale22@gmail.com</p>
            <div onClick={() => dispatch(setOpen(false))}  className='flex p-4 rounded-full text-white cursor-pointer'>
                <RxCross2 />
            </div>
        </div>
        <div className='items-center justify-center text-center mt-4 '>
            <Avatar src={user?.photoURL} size='60' round={true} />
        </div>
        <div className='items-center justify-center text-center mt-4 '>
            <h1 className='text-xl'>Hi,Sonali</h1>
        </div>
        <div className='items-center justify-center text-center mt-4 '>
           <button className='rounded-full w-fit bg-[#0B57D0] text-white px-2 py-2 '>Manage Your Google Account</button>
        </div> 
        <div className='items-center justify-center text-center mt-4 '>
           <p>Privacy Policy . Term Of Service</p>
        </div> 
        <div className='flex items-center justify-center text-center mt-5'>
            <button onClick={signOutHandler} className='flex p-2 bg-gray-800 text-white font-medium rounded-lg gap-1'>
                <FaSignOutAlt className='text-white font-bold mt-1 gap-1'/>
                SIGN OUT
            </button>
        </div>
       
        
    </div>
  )
}

export default Profile