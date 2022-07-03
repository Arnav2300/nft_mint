import React from 'react';
import {ImSearch} from 'react-icons/im';
import {BsHandbag,BsBell} from 'react-icons/bs';

export default function Dashboard(){
    return(
        <div className='h-screen p-5 ml-56 bg-bgc font-poppins'>
            {/* search bar */}
            <div className='pb-4 flex justify-between space-x-6'>
                <form action="" className='w-full max-w-md'>
                    <div className='relative flex items-center text-gray-500 hover:text-hovblu focus-within:text-hovblu'>
                        <ImSearch className='w-5 h-5 absolute ml-3 pointer-events-none' />
                        <input type="text" placeholder='Search' aria-label='Search' className='w-full pr-5 pl-10 py-2 rounded-2xl font-semibold placeholder-gray-500 text-black border-none ring-2 ring-gray-500 hover:ring-hovblu focus:ring-hovblu focus:ring-4' />
                    </div>
                </form>
                {/* connect button*/}
                <div className='relative flex-shrink-0'>
                    <div className='flex justify-between items-center space-x-6'>
                        <BsHandbag className='text-white w-11 h-11 hover:text-hovblu'/>
                        <BsBell className='text-white w-11 h-11 hover:text-hovblu'/>
                        <button className='w-full py-2 px-3 rounded-2xl border-none text-white transition-colors duration-1500 bg-green-600 focus:shadow-outline hover:bg-green-800'>Connect</button>
                    </div>
                </div>
            </div> 
            {/*cards*/}
            <div className='pt-4 flex justify-between space-x-6'>
                <div className='relative flex items-center bg-pink-200 rounded-xl md:w-full sm:w-56 h-36'>
                    js
                </div>
                
            </div>
            
        </div>
    );
}