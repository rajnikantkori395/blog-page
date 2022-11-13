import React, { useState } from 'react';
import { LeftContainer, Logo, NavbarContainer, NavbarExtendedContainer, NavbarInnerContainer, NavbarLink, NavbarLinkContainer, NavbarLinkExtended, OpenLinkButtons, Phone, RightContainer } from '../styles/Navbar.style';
import LogoImage from '../assets/logo.png';

export const Navbar = () => {
    const [extendNavbar, setExtendNumber] = useState(false);
    return (
        <>
            <NavbarContainer extendNavbar={extendNavbar} >
                <NavbarInnerContainer>
                    <LeftContainer>
                        <Logo src={LogoImage} />
                        <Phone>+91-9870301533</Phone>
                    </LeftContainer>
                    <RightContainer>
                        <NavbarLinkContainer>
                            <NavbarLink to="/">Diwali Sale</NavbarLink>
                            <NavbarLink to="/">International Trips</NavbarLink>
                            <NavbarLink to="/">Blogs</NavbarLink>
                            <NavbarLink to="/">About Us</NavbarLink>
                            <OpenLinkButtons onClick={() => {
                                setExtendNumber((curr) => !curr);
                            }} > {extendNavbar ? <> &#10005;</> : <> &#8801;</>}</OpenLinkButtons>
                        </NavbarLinkContainer>
                    </RightContainer>
                </NavbarInnerContainer>
                { extendNavbar &&
                    <NavbarExtendedContainer>
                        <NavbarLinkExtended to="/">Diwali Sale</NavbarLinkExtended>
                        <NavbarLinkExtended to="/">International Trips</NavbarLinkExtended>
                        <NavbarLinkExtended to="/">Blogs</NavbarLinkExtended>
                        <NavbarLinkExtended to="/">About Us</NavbarLinkExtended>
                    </NavbarExtendedContainer>
                }
            </NavbarContainer>
        </>
    )
}
