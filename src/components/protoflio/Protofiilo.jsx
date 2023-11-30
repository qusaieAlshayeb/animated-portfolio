import React from 'react'
import "./protofiilo.scss"
import {motion ,useScroll,useSpring,useTransform} from "framer-motion"
import { useRef } from 'react'


const items = [
    {
      id: 1,
      title: "React Commerce",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXDE9FTmWlFLJ2sm37VqoXC2NQplFWaegnDRpI987ri9qMgjuWVJulH8SW3ycIP2KdL0&usqp=CAU",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
      id: 2,
      title: "React WebFrom",
      img: "https://assets-global.website-files.com/5f6cbc6dd9be9a190bd040a6/5f8debc44d4fe9234bc13736_rrr.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
      id: 3,
      title: "next.js e-Commerce",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC5Im-93vJVW2ORiGynt147ILOqoGuaJz-32R0FxASoMhwwYr6RfCJgDt_f9wW5Pe_DWw&usqp=CAU",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
      id: 4,
      title: "Three.js react website",
      img: "https://i.ytimg.com/vi/0fYi8SGA20k/sddefault.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
  ];
  
  const Single = ({ item }) => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  
    return (
      <section >
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>See Demo</button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
  
  const Protofiilo = () => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });
  
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });
  
    return (
      <div className="portfolio" ref={ref}>
        <div className="progress">
          <h1>Featured Works</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    );
  };
  
  export default Protofiilo;








