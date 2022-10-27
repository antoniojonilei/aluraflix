import "./Menu.css"
import React from "react";
import { Link } from 'react-router-dom'
import Logo from "../../assets/img/Logo.png"
// import ButtonLink from "./ButtonLink";
import Button from "../Button";


const Menu = () => {
    return(
        <nav className="menu">
            <Link to="/">
                <img className="logo" src={Logo} alt="Aluraflix logo" />
            </Link>            

            <Button as={Link} className="button-link" to="/cadastro/video">
                Novo video
            </Button>  
                     
        </nav>
    )
}

export default Menu