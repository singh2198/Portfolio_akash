import React from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';
// import Home from './Home';
import {Link} from "react-scroll"
 
const Nav = () => {

    const [navbar,setbar] = useState(false)
    // console.log(navbar)

    const Linkk=[
        {id:1,
        link:"home"
        },
        {id:2,
        link:"about"
        },
        {id:3,
        link:"project"
        },
        {id:4,
        link:"experiance"
        },
        {id:5,
        link:"contact"
        }
    ]
        
    

    return (
        <div>
            <div className='flex justify-between items-center w-full h-10 px-4  text-white bg-black fixed' >
                <div>
                    <p className='text-3xl text-white hover:cursor-pointer font-signature mx-2 mt-4'>Akash Singh  </p>
                </div>

                <div className=' hidden md:flex  '> 
                    {Linkk.map(({id,link})=>{
                        return(
                            <p  key={id} className=' px-2 capitalize hover:scale-105 duration-100 cursor-pointer text-gray-500 font-medium'>
                                
                                <Link 
                                // onClick={() => setbar(!navbar)}
                                to={link} 
                                smooth 
                                duration={500}>{link}</Link>
                            </p>
                            )
                        })}
                </div>



                 <div
                 onClick={()=>setbar(!navbar)}
                 className="pr-4 cursor-pointer  z-10 text-gray-400 md:hidden mt-3"
                 >
                    {navbar ? <FaTimes size={'30'} ></FaTimes>:<FaBars size={'30'}  ></FaBars>}
                
                </div> 


                { navbar && (
                <ul className='flex  flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-gray-400  bg-gradient-to-b from-black to-gray-800 '>

                {Linkk.map(({id,link})=>{
                        return(
                            <p  key={id} className='px-6 cursor-pointer py-6 text-gray-400 text-4xl capitalize'>
                                 <Link 
                                onClick={() => setbar(!navbar)}
                                to={link} 
                                smooth 
                                duration={500}>{link}</Link>
                            </p>
                            
                            )
                        })}
                </ul>

                )}

                


            </div>

            {/* <FaBars></FaBars> */}
            {/* <p className='font-semibold'>Helo</p> */}
            {/* <Home/> */}
        </div>
    );
}

export default Nav;
