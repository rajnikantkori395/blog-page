import styled from "styled-components";

export const Section2 = styled.div`
display: flex;
padding: 5%;
justify-content: space-evenly;
background-color: #045d51;
@media (max-width:768px) {
    flex-direction: column;
}
`;
export const Box = styled.div`
width: 20%;
@media (max-width:768px) {
    width: auto;
}
`;
export const BoxTitle = styled.h2`
color : white;
`;
export const BoxDesc = styled.p`
font-size: 12pt;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color:white;
`;
export const List = styled.ul`
    list-style: none;
`;