import Navbar from "./components/navbar/navbar";
import Test from "./Test";
import Who from "./components/Whous/Who";
import "./App.scss"
import Hero from "./components/hero/Hero";
import Cube from "./components/Cube";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Contact from "./components/Contact/Contact";
import Protofiilo from "./components/protoflio/Protofiilo";
import Cursor from "./components/cursor/Cursor";





const App = () => {
  return (
  
  
 <div> 
     <Cursor></Cursor>
  <section id="Homepage" > 
     <Navbar/>
      <Hero></Hero> 
     
   </section>

   <section id="About">
      <Who>
          <Cube></Cube>
        
      </Who>
     </section>
    
    
   <section id="Services"><Parallax type='Services' /></section>
 
   <section><Services /></section>

   
   <section id="Protfolio"><Parallax type='Protfolio' /></section>
   
  <Protofiilo></Protofiilo>

   <section id="Contact"><Contact></Contact></section>   

   

   
    
   
 </div> 
  
  
  );
};

export default App;
