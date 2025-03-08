import React from 'react';
import { useState } from 'react';


const Search = ({getDataFromSearchComponent}) => {
    const [input, setinput] = useState('');
    const handleinputvalue = (e) => {
        setinput(e.target.value);
        // console.log(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        getDataFromSearchComponent(input);
    }
    return (
        <div className='w-3/4 mx-auto mt-10 '>
            <form action="" onSubmit={handleSubmit}>
            <div className="relative w-full">
            <input type="text" placeholder="Search here weeb" onChange={handleinputvalue} value={input}className="input rounded-4xl w-full focus:outline-none focus:border-[#E3D2C3] focus:border-2  shadow-sm  drop-shadow-lg shadow-[#66D2CE] py-6 " />
             <button 
                    type="submit"
                    className=" absolute right-2 top-1/2 transform -translate-y-1/2 border-2 border-[#66D2CE] text-[#2DAA9E] hover:text-black hover:bg-[#66D2CE] px-4 py-2 rounded-full  transition text-xs font-semibold ">
                    search
                </button>
                
                </div>
            </form>
            
        </div>
    );
};

export default Search;