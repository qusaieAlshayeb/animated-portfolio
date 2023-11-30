import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import  {motion} from "framer-motion"



import Cube from "../Cube";
const TextVariants ={
  initial :{
     x:500,
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




const Section = styled(motion.div)`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;


`;

const Container =styled(motion.div)`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled(motion.div)`
  flex: 1;
  @media only screen and (max-width: 768px) {
     width: 30%;
     height: 30%;
     left:0;

     top: 0;
     position:flex-end;
     margin-top: auto;
   
    

`;

const Title = styled(motion.h1)`
     font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 56px;
  }
`;

const Right = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
   
    margin-right: 30%;
  }
`;


const WhatWeDo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled(motion.img)`
  height: 5px;
`;

const Subtitle = styled(motion.h2)`
  color: #da4ea2;
`;

const Desc = styled(motion.p)`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
   
    font-size: 20px;
  }
`;

const Button = styled(motion.button)`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Who = () => {
  return (
    <Section initial="initial" whileInView="animate">
      <Container  >
        <Left >
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right variants={TextVariants}>
          <Title variants={TextVariants}>Think outside the square space</Title>
          <WhatWeDo variants={TextVariants}>
            <Line src="./img/line.png" />
            <Subtitle variants={TextVariants}>who i'm</Subtitle>
          </WhatWeDo>
          <Desc  variants={TextVariants} >
      
            a creative designer and developer with a passion for the
            arts.
         
          
          </Desc>
          <Button  variants={TextVariants}><a target="_blank" href="qusaiecvats.pdf" download={"qusaiecvats.pdf"}>Hire Me</a></Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;