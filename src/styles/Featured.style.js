import styled, { css } from 'styled-components';

export const Row1 = styled.div`
display:flex;

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