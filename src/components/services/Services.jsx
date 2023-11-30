import React from 'react'
import "./services.scss"
import {motion} from "framer-motion"

const variants ={
    initial:{
        x:-500 ,
        y:100,
        opacity :0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
};

const Services = () => {
  return (
    <motion.div className='services' variants={variants} initial="initial" whileInView="animate">
        <motion.div className="txtConatiner" variants={variants}>
            <p>I focus on helping your brand grow 
            <br/>
             and move forward</p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="./public/people.webp" alt="" />
                <h1><motion.b whileHover={{color:"orange"}}>Unique </motion.b> Ideas</h1>
            </div>
            <div className="title">
               
                <h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business</h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
                <h2>Banding</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
                <h2>Banding</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
                <h2>Banding</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
                <h2>Banding</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services