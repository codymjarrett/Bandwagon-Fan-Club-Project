import styled from "styled-components";

export const IconContainer = styled.div``;

export const IconBackground = styled.div`
  background: ${props => props.theme.$BFCTertiaryOrange};
  border-radius: 100%;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  transition: all .3s ease; 


  &:hover {
    background: linear-gradient(
      45deg,
      ${props => props.theme.$AuraLightOrange},
      ${props => props.theme.$AuraRaspberry},
      ${props => props.theme.$AuraYellow}
    );
  }
`;

export const SVG = styled.svg`
  width: 3rem;
  height: 3rem;
  fill: ${props => props.theme.$BFCPrimaryOrange};

  ${IconBackground}:hover & {
    fill: ${props => props.theme.$White};
  }
`;