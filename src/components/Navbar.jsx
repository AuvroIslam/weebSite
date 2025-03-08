import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./navbar.css";
import { AuthContext } from '../provider/AuthProvider'; 
import momo from '../assets/momo.jpg';

const Navbar = () => {
    const { user,logout } = useContext(AuthContext);
    const navlinks = [
        <NavLink to="/" className="px-2 mx-1 py-2  rounded-xl hover:border-2 hover:border-[#66D2CE] text-[#2DAA9E]" key="home">Home</NavLink>,
        <NavLink to="/top-manga" className="px-2 mx-1 py-2 rounded-xl hover:border-2 hover:border-[#66D2CE] text-[#2DAA9E]" key="top-manga">Top Manga</NavLink>,
        <NavLink to="/top-anime" className="px-2 mx-1 py-2 rounded-xl hover:border-2 hover:border-[#66D2CE] text-[#2DAA9E]" key="top-anime">Top Anime</NavLink>
    ];

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex="0" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-[#2DAA9E]">MomoMetSushi</a>
                    <img src={momo} alt="" className='w-12'/>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user && <button className='btn rounded-xl border-2 border-[#66D2CE] text-[#2DAA9E] hover:text-black hover:bg-[#66D2CE]' onClick={logout}>log out</button>}
                    {!user && <button className='btn rounded-xl border-2 border-[#66D2CE] text-[#2DAA9E] hover:text-black hover:bg-[#66D2CE]'><Link to="/login">log in</Link></button>}
                    {user && <p className='text-[#2DAA9E] underline underline-[#2DAA9E] ml-4'>
                        Welcome {user.displayName || 'User'}</p>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;