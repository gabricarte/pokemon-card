import styled from 'styled-components';

const Button = styled.button`
  color: black;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  outline: none;
  border-radius: 20px;
  border: none;
}

:hover {
  background: #c6e5b1;
}
`;

export default Button;