import styled from "styled-components";

export const Container = styled.div`
margin: 0 10%;
min-height: 100vh;
/* border: 1px solid black; */
overflow-x: hidden;
@media (max-width:768px) {
 margin : 0 2%;

}
`;

export const Loading = styled.div`
display: flex;
justify-content: center;
align-items: center;
height:80vh;
color: #033d35;
`;

