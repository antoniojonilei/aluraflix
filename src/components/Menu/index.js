import "./Menu.css"
import React from "react";
import Logo from "../../assets/img/Logo.png"
// import ButtonLink from "./ButtonLink";
import Button from "../Button";


const Menu = () => {
    return(
        <nav className="menu">
            <a href="/">
                <img className="logo" src={Logo} alt="Aluraflix logo" />
            </a>            

            <Button as="a" className="button-link" href="/">
                Novo video
            </Button>  
                     
        </nav>
    )
}

export default Menu