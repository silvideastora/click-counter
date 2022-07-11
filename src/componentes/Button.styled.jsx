import styled, {css} from 'styled-components';

export const Button = styled.button`
width: 200px;
height: 60px;
font-family: 'Roboto', sans serif;
font-weight: bold;
color: crimson;
font-size: 26px;
border: 2px solid crimson;
border-radius: 15px;
margin: 5px;
cursor:pointer;
 &:hover {
     background-color: tomato;
     color: white;
 }
${props =>
props.primary &&
css`
background: crimson;
color: black;
&:hover {
    background-color: black;
    color: white;
}
`};

`;