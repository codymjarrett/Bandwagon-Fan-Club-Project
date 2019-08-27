import styled from "styled-components";

export const Base = styled.div`
width: 21.9375rem;
height: 26.5625rem;
box-shadow: 0px 0.1875rem 1.125rem rgba(0, 0, 0, 0.25);
border-radius: .3125rem;
background-color: ${props => props.theme.$White};
position: relative;
transition: all .5s ease;
margin: 4rem 50%;
transform: translateX(-50%);
`;