import styled from "styled-components";

export const Row5 = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const LoadButton = styled.button`
  background-color: #033d35;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  margin: 0.5em 1em;
  padding: 0.8em 6em;
  font-size: 13pt;
  @media (max-width:768px) {
  font-size: 13px;
  padding: 3px 7px;
  margin:0;
}
`;