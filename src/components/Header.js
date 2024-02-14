import React from 'react';
import menuData from '../json/menu';
import '../styles/header.scss';
import { FaBars, FaX, FaLinkedinIn, FaGithub } from "react-icons/fa6";

function Header({updateCheckBox}) {

    // const onMenuClick = (e, idx) => {
    //     const changeActive = 
    //     console.log('idx ', idx)
    // }
    
    return (
        <header id="header">
            <nav id="navbar" className='navbar nav-menu'>
                <MobileToggle updateCheckBox={updateCheckBox} />
                <ul>
                    {
                        Object.keys(menuData).map((key, idx) => {
                            const menuItem = menuData[key];
                            return ( <Item menu={menuItem.title} icon={menuItem.icon} id={menuItem.id} idx={idx}
                                key={idx}  />
                                //onMenuClick={onMenuClick} activeClass={idx === 0 ? 'active' : ''} onClick={(e) => onMenuClick(e, idx)} 
                            
                            );
                        })
                    }
                    <SocialMedia />
                </ul>                
            </nav>
        </header>
    )
}

function Item({menu, icon, activeClass, id, idx}) {
    return(
        <li className={activeClass}>
            <a href={`#${id}`} className={`navlink`} >
                <span className='icon-fa'>{icon}</span> 
                <span className='text'>{menu}</span></a>
        </li>
    )
}

function MobileToggle({updateCheckBox}) {
    return (
        <React.Fragment>
            <input type="checkbox" id="menuCheckbox" onChange={()=>updateCheckBox()}/>
            <label htmlFor="menuCheckbox" className="checkbtn">
                <span className="toggleMenu"><FaBars /></span>
                <span className="closeMenu"><FaX /></span>
            </label>
        </React.Fragment>
    )
}

function SocialMedia(){
    return(
        <aside className='bcr-socialmedia'>
            <a href='https://github.com/bboubacar?tab=repositories' target="_blank" rel="noreferrer">
                <FaGithub /></a>
            <a href='https://www.linkedin.com/in/boubacar-balde-b05b402ab/' target="_blank" rel="noreferrer">
                <FaLinkedinIn /></a>
        </aside>
    )
}

export default Header;