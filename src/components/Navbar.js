import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-container">
                <span><NavLink exact className="link" activeClassName="navLink" to="/">Anasayfa</NavLink></span>
                <ul>
                   
                    <li className="dropDown">
                        <NavLink className="link" onClick={ (event) => event.preventDefault() } activeClassName="navLink" to="/">Kategoriler  <i className="fas fa-angle-down"></i></NavLink>
                        <div className="dropDownContent">
                            <NavLink className="link"  activeClassName="navLink" to="/kategori/ontoloji"><i className="fas fa-angle-right"></i> Ontoloji</NavLink>
                            <NavLink className="link"  activeClassName="navLink" to="/kategori/postmodernizm"><i className="fas fa-angle-right"></i> Posmodernizm</NavLink>
                        </div>
                    </li>
                   


                    <li><NavLink className="link"  activeClassName="navLink" to="/hakkimda">Hakkımda</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
