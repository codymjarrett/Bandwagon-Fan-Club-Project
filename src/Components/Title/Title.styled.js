
import styled from "styled-components";

export const TitleWrapper = styled.div`
  text-align: center;
  padding: 1rem 5rem;
  font-size: 1.2rem;

`;

export const TitleText = styled.h2`
  font-family: ${props => props.theme.$SourceSansPro};
  font-weight: 600;
  color: ${props => props.theme.$BFCGrey};
`;
export const VisuallyHidden = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  margin: -1px;
  padding: 0;
  border: 0;
  width: 1px;
  height: 1px;
`;