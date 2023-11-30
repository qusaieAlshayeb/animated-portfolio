import React from 'react'
import "./hero.scss"
import {motion} from "framer-motion"
import  {Typewriter} from 'react-simple-typewriter';
import DownloadPdf from '../DownloadFiles/DownloadPdf';

const TextVariants ={
     initial :{
        x:-500,
        opacity:0,
     },
     animate :{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
     },
     scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
     }
};
const SliderVariants ={
    initial :{
       x:0,
       
    },
    animate :{
       x:"-220%",
     
       transition:{
           repeat:Infinity,
           repeatType:"mirror",
           duration:20,
           
       },
    },
   
};
const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
          <motion.div className="textcontainer" variants={TextVariants} initial="initial" animate="animate">
            <motion.h2  variants={TextVariants}>Qusai  Alshayeb </motion.h2>
            <motion.h1  variants={TextVariants}>I'm 
            <span style={{fontSize:"72px"}}>
            
            
                 <Typewriter loop 
                       cursor 
                       cursorStyle="_"
                       typeSpeed={70}
                       deleteSpeed={50}
                       delaySpeed={1000}
                       words={[" Full stack developer" , " and" , " UI Designer"]}
                       />
            </span>
           
                    
                 
               </motion.h1>
            <motion.div  variants={TextVariants} className="buttons" >
                <motion.button  variants={TextVariants} >See my  works</motion.button>
                <motion.button  variants={TextVariants}>Contact Me</motion.button>
            </motion.div>
            <motion.img  variants={TextVariants} animate="scrollButton" src="/scroll.png" alt="" />
           </motion.div>
         
        </div>
        <motion.div className="slidingTextContainer" variants={SliderVariants} initial="initial" animate="animate">
            desing your web and your UI
        </motion.div>
       
        <div className="imagecontainer">
            <img src="/hero.png" alt="" />
        </div>
       
    </div>
  ) 
}

export default Hero