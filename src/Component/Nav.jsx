import React from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';
// import Home from './Home';

const Nav = () => {

    const [navbar,setbar] = useState(false)
    // console.log(navbar)

    const Link=[
        {id:1,
        link:"home"
        },
        {id:2,
        link:"about"
        },
        {id:3,
        link:"experiance"
        },
        {id:4,
        link:"resume"
        },
        {id:5,
        link:"project"
        }
    ]
        
    

    return (
        <div>
            <div className='flex justify-between items-center w-full h-10 px-4  text-white bg-black fixed' >
                <div>
                    <p className='text-3xl text-white hover:cursor-pointer font-signature mx-2 mt-4'>Akash Singh  </p>
                </div>

                <div className=' hidden md:flex  '> 
                    {Link.map(({id,link})=>{
                        return(
                            <p  key={id} className=' px-2 capitalize hover:scale-105 duration-100 cursor-pointer text-gray-500 font-medium'>{link}</p>
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

                {Link.map(({id,link})=>{
                        return(
                            <p  key={id} className='px-6 cursor-pointer py-6 text-gray-400 text-4xl capitalize'>{link}</p>
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
