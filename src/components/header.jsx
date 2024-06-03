import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import gb from "../assets/GB.png";
import './header.css'
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { CiMenuBurger } from "react-icons/ci";

import { MdClose } from "react-icons/md";


const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  
  const toggleMenu = () =>{
    setOpenMenu((open) => !open)
  }
  const closeMenu = () => {
    setOpenMenu(false);
  };
 


  return (
    <div className="header">
      <div className="img-header">
        <Link to='/'>
        <img src={Logo} alt="" />
        </Link>
      </div>
      <div class={`list ${openMenu ? 'is-open' : ''}`}>
        <Link onClick={closeMenu} to='/aboutus' className="link"><span>Về chúng tôi</span></Link>
        <Link onClick={closeMenu} to='/services' className="link">Dịch Vụ Và Giải Pháp</Link>
        <Link onClick={closeMenu} to='/detail' className="link">Tư Vấn Doanh Nghiệp</Link>
        <Link onClick={closeMenu} className="link">Thuế</Link>
        <Link onClick={closeMenu} className="link">Cách ngành nghề</Link>
        <Link onClick={closeMenu} to='/contact' className="link">Liên hệ</Link>
        <MdClose  onClick={toggleMenu} size={30} className="close"/>
      </div>
      <div className="action">
        <CiSearch size={30} fontWeight='900'/>
        <img src={gb} alt="" />
      <CiMenuBurger onClick={toggleMenu} className="menu" size={30} color="white"/>
      </div>
      {openMenu && <div className="overlay is-visible" onClick={toggleMenu}></div>}
    </div>
    
  );
};

export default Header;
