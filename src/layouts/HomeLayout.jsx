import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Search from '../components/Search';

const HomeLayout = () => {
    return (
        <div>
         
            <nav>
                <Navbar></Navbar>
               
            </nav>
        
           
            <Outlet ></Outlet>
            
            
            <footer></footer>
        </div>
    );
};

export default HomeLayout;