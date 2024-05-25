import React from "react";
import "../Header/Header.css";
import logo from "../../images/LogoKasa.png";
import { Link } from "react-router-dom";


export const Header = ({Connexion, Ajouter})=>{
    const n = "/"+Ajouter
    return(
        <div>
            <header className="header">
                 <img className="imgheader" src={logo} alt="" />
                <nav>
                 <ul className="headermenu">
                    <li className="menueli"> <Link  to = "/">{Connexion}</Link> </li>
                    <li className="menueli"> <Link  to ={n}>{Ajouter} </Link></li>
                 </ul>
                </nav>
            </header>
        </div>
    )
}
