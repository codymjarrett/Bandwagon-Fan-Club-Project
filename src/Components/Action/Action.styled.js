import styled from "styled-components";

export const ActionButtonWrapper = styled.button`
position: absolute;
right: 0;
top: -1.875rem;
transform: translateX(50%);
width: 5rem;
height: 5rem;
border-radius: 100%;
border: none;
background-color: ${props => props.theme.$AuraNavy};
box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
cursor: pointer;
transition: all .3s ease; 


&:hover {
  background: linear-gradient(
    to right,
    ${props => props.theme.$AuraNavy},
    ${props => props.theme.$AuraPurple}
  );
}
`;