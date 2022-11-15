
import styled from "styled-components";

export const Row2 = styled.div`
display: flex;
justify-content:space-between;
flex-wrap: wrap;
@media (max-width:768px) {
flex-direction: column;
width: 100%;
}
`;

export const Row3 = styled.div`
display: block;
padding-right: 10%;
justify-content:space-around;
`;

export const LeftContainer = styled.div`
display: flex;
width: 48%;
flex-direction: column;
@media (max-width:768px) {
width: 100%;

}
`;
// export const RightContainer = styled.div`
// display: flex;
// width: 48%;
// flex-direction: column;
// `;
export const LImage = styled.img`
height: 50%;
width: 100%;

`;



