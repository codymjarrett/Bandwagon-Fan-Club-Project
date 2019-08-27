import styled from "styled-components";

export const Header = styled.h1`
  font-family: ${props => props.theme.$SourceSansPro};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Exit = styled.button`
  display: block;
  font-size: 2rem;
  cursor: pointer;
  background: transparent;
  border: none;
  font-weight: 600;
  transition: all .3s ease; 

  &:hover {
    color: ${props => props.theme.$BFCPrimaryOrange};
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const FormInput = styled.input`
  height: 3rem;
  border-radius: 10px;
  width: 100%;
  border: 1px solid black;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-family: ${props => props.theme.$SourceSansPro};
`;

export const FormSubmitButton = styled.input`
  height: 3rem;
  border-radius: 10px;
  width: 100%;
  border: 1px solid black;
  margin-bottom: 1rem;
  background: ${props => props.theme.$BFCPrimaryOrange};
  font-family: ${props => props.theme.$SourceSansPro};
  color: ${props => props.theme.$White};
  font-size: 1.1rem;
  cursor: pointer;
  transition: all .3s ease; 

  &:hover {
    background: ${props => props.theme.$AuraNavy};
  }
`;

export const FormLabel = styled.label`
  display: block;
  padding: 1rem 0;
  font-family: ${props => props.theme.$SourceSansPro};
  font-size: 1.1rem;
`;