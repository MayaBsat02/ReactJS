import React,{useState} from "react";
import { 
    NavbarContainer,
    LeftContainer,
    RightContainer ,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    NavbarLinkContainer,
    NavbarLink,
    Logo,
    OpenLinksButton,
    NavbarLinkExtended
} from "../styles/NavBar.style";
import LogoImg from '../assets/logo.png'

const NavBar=()=>{


    const[extendedNavbar,setExtendedNavbar]=useState(false)

    return(
        <NavbarContainer extendNavbar={extendedNavbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to='/'>Home</NavbarLink>
                        <NavbarLink to='/Register'>Register</NavbarLink>
                        <NavbarLink to='/Dashboard'>Dashboard</NavbarLink>
                        <OpenLinksButton onClick={()=>{
                            setExtendedNavbar((curr)=>!curr)
                        }}>
                            {extendedNavbar ? <>&#10005; </> : <>  &#8801;</>}
                        </OpenLinksButton>
                        
                    </NavbarLinkContainer>
                </LeftContainer>
                <RightContainer>
                <Logo src={LogoImg}/> 
                </RightContainer>
            </NavbarInnerContainer>
            {extendedNavbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended to='/'>Home</NavbarLinkExtended>
                    <NavbarLinkExtended to='/Register'>Register</NavbarLinkExtended>
                    <NavbarLinkExtended to='/Dashboard'>Dashboard</NavbarLinkExtended>
                </NavbarExtendedContainer>)}
        </NavbarContainer>
        
    )
}


export default NavBar