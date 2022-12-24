import React from 'react';
import algorithm_visulizer from "../assets/portfolio/algorithm_visulizer.jpg"
import monday from "../assets/portfolio/monday.jpg"
import navbar from "../assets/portfolio/navbar.jpg";
// import { Link } from "react-router-dom";
// import { Link, Navigate } from "react-router-dom";
// import { Link as ReachLink } from "@reach/router"




const Project = () => {

   
  
const projects=[
    {
        id:1,
        src:algorithm_visulizer,
        github:"https://github.com/singh2198/Algorithm_visualizer",
        nitlify:"https://heroic-pudding-0c0a14.netlify.app/"

    },
    {
        id:2,
        src:monday,
        github:"https://github.com/singh2198/prompt-toothbrush-9795/tree/day-2/monday",
        nitlify:"https://phenomenal-druid-f85e5a.netlify.app/"
        
    },
    {
        id:3,
        src:navbar,
        github:"",
        nitlify:"https://heroic-pudding-0c0a14.netlify.app/"
    },
    {
        id:4,
        src:navbar,
        github:"",
        nitlify:"https://heroic-pudding-0c0a14.netlify.app/"
    },
    {
        id:5,
        src:navbar,
        github:"",
        nitlify:"https://heroic-pudding-0c0a14.netlify.app/"
    },
    {
        id:6,
        src:navbar,
        github:"",
        nitlify:"https://heroic-pudding-0c0a14.netlify.app/"
    },

    
    

];


    



    return (
        <div name="project" className='bg-gradient-to-b from-black to-gray-800 w-full md:h-full text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                


                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Project</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0  md:mx-20 '>
                {projects.map(({id,src,github,nitlify})=>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                         <img src={src} 
                            alt=""
                          className='rounded-md duration-200 hover:scale-105'/>

                        <div className='flex items-center justify-center'>
                            <button
                            
                            className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            <a href={github} target="_blank" rel='noreferrer'>Code</a>
                            </button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            <a href={nitlify} target="_blank" rel='noreferrer'>Demo</a>
                            </button>
                        </div>
                    </div>
                ))}  

            </div>
           
        </div>
    );
}

export default Project;
