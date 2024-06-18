import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from 'react-redux';
import { setOpen, setSearchText } from '../../redux/appSlice';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import Profile from '../Profile';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [input, setInput] = useState("");
    const {user} = useSelector(store=>store.app);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchText(input));
        // eslint-disable-next-line
    }, [input]);

   

  return (
    <div className='flex items-center justify-between mx-3 h-16'>
        <div className='flex items-center gap-10'>
            <div className='flex items-center gap-2'>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <RxHamburgerMenu size={"20px"} />
                </div>
                <img className='w-14' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZKJsjbnKDB6PLFK4GU8jjv0zoIR4WB6AAIA&s' alt='gmail-logo' />
                <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
            </div>
        </div>
        <div className='md:block hidden w-[50%] mr-60'>
            <div className='flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full'> 
                <IoIosSearch size={"24px"} className='text-gray-700'/>
                <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className='rounded-full w-full bg-transparent outline-none px-1'
                placeholder='Search Mail'
                 />
            </div>
        </div>
        <div className='md:block hidden'>
            <div className='flex items-center gap-2'>
                <div className='p-3 rounded-full hover:bg-gray-400 cursor-pointer'>
                    <CiCircleQuestion size={"22px"} />
                </div>
                <div className='p-3 rounded-full hover:bg-gray-400 cursor-pointer'>
                    <IoSettingsOutline size={"22px"} />
                </div>
                <div className='p-3 rounded-full hover:bg-gray-400 cursor-pointer'>
                    <PiDotsNineBold size={"22px"} />
                </div>
                <div className='relative cursor-pointer'>
                    <Avatar onClick={() => setToggle(!toggle)} src={user?.photoURL} size='40' round={true} />
                    <AnimatePresence>
                        {
                            toggle && (
                                <motion.div
                                initial={{opacity:0, scale:0.8}}
                                animate={{opacity:1, scale:1}}
                                exit={{opacity:0, scale:0.8}} 
                                transition={{duration:0.1}}
                                className='absolute right-0 z-20 shadow-lg bg-black rounded-md'
                                >
                                    <Profile onClick={() => dispatch(setOpen(true))}  />
                                   
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar