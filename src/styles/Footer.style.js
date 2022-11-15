import styled, { css } from "styled-components";

export const FootSection = styled.div`
display: flex;
flex-direction: column;
border: 1px solid;
align-items: center;
@media (max-width:768px) {
    width: auto;
}
`;
export const Box1 = styled.div`
${props=> props.contacts && css`
      & p{
         color: #2F3331;
         font-weight: bold;
         padding: 0 3.2em;
      }
   `}
   width: fit-content;
   display: inline-flex;
   text-align: center;
   box-sizing  :border-box ;
   @media (max-width:768px) {
    width: auto;
    padding: 0 10%;
    ${props=> props.contacts && css`
      & p{
         color: #2F3331;
         font-weight: bold;
         padding: 0;
      }
   `}
}
   
`;
export const Text = styled.p`
   font-size:3em;
   padding: 0 0.7em;
   @media (max-width:768px) {
    width: auto;
    padding:0 2%;
}
`;

export const Tesitmonial = styled.img`
   height: 100%;
   width: 100%;
`;