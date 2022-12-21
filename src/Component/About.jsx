import React from 'react';

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className=' flex flex-col justify-center mx-auto w-full h-full p-4 max-w-screen-lg'>

                <div className='pb-8'>
                    <h3 className='text-4xl font-bold inline border-b-4 border-gray-500'>About</h3>
                </div>

              
                    <p className="text-xl mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Alias facere fugiat, accusantium atque illo similique earum aliquam quos 
                        eos animi odit ea vitae velit saepe? Ipsa impedit quo dolor est?</p>
                        <br/>
                    <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Alias facere fugiat, accusantium atque illo similique earum aliquam quos 
                        eos animi odit ea vitae velit saepe? Ipsa impedit quo dolor est?</p>
               
            </div>
        </div>
    );
}

export default About;
