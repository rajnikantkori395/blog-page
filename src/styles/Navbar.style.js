import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
display: flex;
height: ${(props)=>(props.extendNavbar? '100vh': '80px')};
width: 100%;
background-color: #033d35;
flex-direction: column;
`;
export const LeftContainer = styled.nav`
display: flex;
flex: 60%;
align-items: center;
padding-left: 5%; 
padding-right: 10%;
justify-content: space-between;
`;
export const RightContainer = styled.nav`
display: flex;
flex: 40%;
align-self: center;
flex-direction: row-reverse;
padding-right: 3%;
`;
export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;
export const NavbarLinkContainer = styled.div`
    display: flex;
`;
export const NavbarLink = styled(Link)`
color: white;
align-self: center;
font-size:15pt;
font-weight:100;
font-family:sans-serif, Arial, Helvetica;
text-decoration: none;
margin: 10px;
@media (max-width:700px){
    display: none;
    
}
`;
export const NavbarLinkExtended = styled(Link)`
color: white;
align-self: center;
font-size:15pt;
font-weight:100;
font-family:sans-serif, Arial, Helvetica;
text-decoration: none;
margin: 10px;
`;

export const Logo = styled.img`
    margin: 10px;
    max-width: 80px;
    height: auto;
`;
export const OpenLinkButtons = styled.button`
padding-right: -50%;
padding-top: 2%;
width: 70px;
height: 50px;
background: none;
border: none;
color:white;
font-size: 45px;
cursor: pointer;
@media (min-width:700px){
    display: none;
}
`;
export const Phone = styled.p`
font-size: 15pt ;
color: white;
margin-right: 10em;
@media (max-width:700px){
    display: none;
    
}
`;

export const NavbarExtendedContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
@media (min-width: 700px) {
    display: none;
}

`;
