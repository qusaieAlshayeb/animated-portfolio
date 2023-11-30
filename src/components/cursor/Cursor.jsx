import React, { useState } from 'react'
import "./cursor.scss"
import { useEffect } from 'react';
import {motion} from "framer-motion"
const Cursor = () => {
    const [position,setPosition]= useState({x:0,y:0});

    useEffect(()=>{
        const MouseMove = (e)=>{
          setPosition({x:e.clientX,y:e.clientY})
        }

        window.addEventListener("mousemove",MouseMove)
        return () =>{
            window.removeEventListener("mousemove",MouseMove)
        }
    },[] );
  
  return (
    <motion.div className='cursor' animate={{x:position.x+10 ,y:position.y+10}} ></motion.div>
  )
}

export default Cursor