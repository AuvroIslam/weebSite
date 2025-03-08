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
        <div className='w-3/4 mx-auto my-10 '>
            <form action="" onSubmit={handleSubmit}>
            <div className="relative w-full">
            <input type="text" placeholder="Search here weeb" onChange={handleinputvalue} value={input}className="input rounded-4xl w-full focus:outline-none shadow-sm" />
             <button 
                    type="submit"
                    className=" absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition text-xs font-light">
                    search
                </button>
                
                </div>
            </form>
            
        </div>
    );
};

export default Search;