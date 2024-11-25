'use client';
import Link from 'next/link';
import './Navbar.css';
import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(null);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
    return (
        <>
        <header className='header'>
            <nav className= 'navbar_containt' >
                <div onClick={toggleMenu} className={`menu-icon ${menuOpen ? 'active' : ''}`}>
                {
                    menuOpen ? <button><FaTimes className='bars_3' /></button>
                    : <button><FaBars className='bars_3' /></button>
                }
                </div>
                <div className="logo_icon"><Link href={'/'} className="logo"><i>Solai<span style={{ color: "#2680EE" }}>m</span>an</i></Link></div>
                <ul className={`navbar_unorder ${menuOpen ? "open" : ""}`}>
                    <li><Link onClick={toggleMenu} href={'/home'} className='border_style'>Home</Link></li>
                    <li><Link onClick={toggleMenu} href={'/aboute'} className='border_style'>Aboute Me</Link></li>
                    <li><Link onClick={toggleMenu} href={'/contact'} className='border_style'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    </>
    );
};

export default Navbar;