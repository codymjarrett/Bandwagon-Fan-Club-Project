import styled from "styled-components";

export const GainTriangle = styled.span`
display: block;
position: relative;
width: 2rem;
align-self: flex-start;

::before {
  content: "";
  border-left: 0.625rem solid transparent;
  border-bottom: 0.625rem solid ${props => props.theme.$Green};
  border-right: 0.625rem solid transparent;
  position: absolute;
  top: 50%;
  left: 0;
}
`;

export const LossTriangle = styled.span`
display: block;
position: relative;
width: 2rem;
align-self: flex-start;

::before {
  content: "";
  border-left: 0.625rem solid transparent;
  border-bottom: 0.625rem solid ${props => props.theme.$AuraRed};
  border-right: 0.625rem solid transparent;
  transform: rotate(180deg);
  position: absolute;
  top: 50%;
  left: 0;
}
`;