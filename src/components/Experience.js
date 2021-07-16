 



// App.js
import React from 'react';
 
import Tabs, { TabPane } from "rc-tabs";
import { experience } from "../data";
import Slide from 'react-reveal/Slide';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

export default function Experience() {
  
    return(
      <section id="experience">
        <p className="py-16 "></p>
 <div className=" w-full overflow-x-hidden">
 <Slide left  duration={2000}>          
 <h1 className="md:text-6xl text-4xl text-gray-700 font-medium text-center title-font  mb-16  ">
       Where I’ve Worked
      </h1> </Slide> 
      
          <div class="md:block hidden"> 
          <Slide cascade left delay={400} duration={1500}>  
          <Tabs defaultActiveKey="1" className="w-3/4 mx-auto" animated="true" tabBarGutter="20" tabBarPosition="left">
          {experience.map((experience) => (  <TabPane className="flex-1" tab={experience.company} key={experience.key}>
          <Fade duration={500}> <div className="w-full text-gray-700 px-16 py-4"> 
         <h3 className="font-medium  text-xl">{experience.role} at <a className="text-red-400 hover:underline transition ease-in-out duration-500" href={experience.link}> {experience.company} </a></h3>
         <p class="text-sm">{experience.duration}</p>
         <ul className="pointerlist pt-4 pl-5">
         {experience.tasks.map(x => <li className="text-gray-700 py-2" key={x.task}>{x.task}</li>)}      
         </ul>        
          </div> </Fade>
        </TabPane>
        ))}
      </Tabs>
      </Slide> 
      </div>  


      <div className="block md:hidden"> 

      {experience.map((experience) => ( 

<Slide left cascade duration={2000}>  
      <div className="w-full text-gray-700 p-4"> 
         <h3 className="font-medium  text-xl">{experience.role} at <a className="text-red-400 hover:underline transition ease-in-out duration-500"href={experience.link}> {experience.company} </a></h3>
         <p class="text-sm">{experience.duration}</p>
         <ul className="pointerlist pt-4 pl-5">
         {experience.tasks.map(x => <li className="text-gray-700 py-2" key={x.task}>{x.task}</li>)}      
         </ul>        
          </div> 
</Slide>

        ))}


      </div>
    
      </div>
      </section>
  );

  
}

