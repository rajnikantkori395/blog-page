import styled, { css } from "styled-components";

export const Banner = styled.section`
    margin: 0 10%;
    border: 1px solid black;

`;
export const Row1 = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
/* border: 1px solid black; */
align-items: center;
justify-content: space-evenly;
margin-bottom: 3rem;
`;

export const Row = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-evenly;
padding: 0 10%;
background-color: #f2f7f6;
`;

export const SearchInput = styled.input`
    height: 2.5rem;
    display: flex;
    width: 20rem;
    padding: 0 1.25em;
    font-size: 14pt;
    outline: none;
    border-style:none;
    
    
`;
export const Button = styled.button`
 background: #045d51;
 border-style: none;
 height: 2.5em;
  border-radius: 3px;
  color: white;
  padding: 0.25em 2em;
  font-size: 13pt;
  cursor: pointer;
`;
export const SearchBar = styled.div`
margin-top: -1.5em;
display: flex;
width: fit-content;
border: 1px solid #088178;
border-radius: 4px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const NavButton = styled.button`
 ${props => props.primary && css`
    background: #0a9e88;
    color: white;
  `}
  ${props => props.outline && css`
    background: transparent;
    color: #045d51;
  `}
  cursor: pointer;
  border: 2px solid #0a9e88;
border-radius: 10pt;
margin: 0.5em 1em;
padding: 0.6em 2em;
font-size: 13pt;
`;

export const BannerImage = styled.img`
width: 100%;
min-height: 20em;
background-color: #132b2f;
`;