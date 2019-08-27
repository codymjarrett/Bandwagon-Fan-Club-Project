
import styled from "styled-components";

export const GrowthWrapper = styled.div`
  font-family: ${props => props.theme.$Futura};
  font-weight: bold;
  font-size: 1.1rem;
  margin: 1rem;
`;

export const GrowthElementsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const GrowthText = styled.span`
  color: ${props => props.gain ? "#24DA24" : "#EA1725" };
  display: block;
`;