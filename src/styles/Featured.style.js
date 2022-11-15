import styled, { css } from 'styled-components';

export const Row1 = styled.div`
display:flex;
justify-content:space-between;
color: #045d51;
`;

export const Heading = styled.h1`
  font-size: 25pt;
`;

export const FImage = styled.img`
height: 70vh ;
width: 100%;
@media (max-width:768px){
  height: 100%;
  width: 100%;
}

`;

export const FeatureTitle = styled.h2`
font-family:Arial, Helvetica, sans-serif;
`;
export const NavButton = styled.button`
${props => props.marginleft && css`
   margin-left: 1em;
  `}
background: transparent;
color: #045d51;
cursor: pointer;
border: 2px solid #0a9e88;
border-radius: 10pt;
padding: 0.2em 1em;
font-size: 13pt;
@media (max-width:768px) {
font-size: 13px;
margin:2px;
}
`;

export const Row = styled.div`
display: flex;
align-items: center;
flex: 1;
& h1{
    color: #045d51;
}
`;

export const Hr = styled.div`
display:inline-flex;
height: 1.59px;
width: 92%;
${props => props.marginleft && css`
margin-left:4%;
  `}
  ${props => props.marginright && css`
margin-right:4%;
  `}
background-color: #894850;
`;