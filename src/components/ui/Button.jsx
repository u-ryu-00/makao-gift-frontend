import styled from 'styled-components';

const Button = styled.button`
  height: 5rem;
  width: 40rem;
  background: #22DAAB;
  margin: 5rem 0;
  color: #FFFFFF;
  cursor: pointer;

  &:hover{  
    color: #006148
  } 

  &:active {
    background: #008C68;
    color: #FFFFFF;
  }

  &:disabled {
    background: #CCCCCC;
    color: #FFFFFF;
    cursor: not-allowed;
  }
`;

export default Button;
