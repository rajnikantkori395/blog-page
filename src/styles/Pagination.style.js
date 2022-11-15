import styled from "styled-components";

export const Section = styled.section`
display: flex;
justify-content: center;
/* border: 1px solid; */
`;
export const Row4 = styled.section`
display: flex;
justify-content: flex-end;
/* border: 1px solid; */
`;

export const Button = styled.button`
border: 1px solid black;
border-radius: 50%;
padding: 7px;
margin: 7px;
/* color: grey; */
background: none;

`;
export const NavButton2 = styled.button`
cursor: pointer;
color: #045d51;
border: 2px solid #0a9e88;
border-radius: 3pt;
margin: 0.5em 1em;
padding: 0.8em 1em;
font-size: 13pt;
@media (max-width:768px) {
height: auto;
width: auto;
padding: 1.5% 3.5%;
font-size: 10pt;
}
`;