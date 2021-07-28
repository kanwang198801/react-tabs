import React from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  align?: 'left' | 'right';
};

type ButtonStylesType = {
  align?: 'left' | 'right';
};

const StyledButtonContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: ${(props: ButtonStylesType) => (props.align === 'right' ? 'flex-end' : 'flex-start')}; ;
`;

const StyledButton = styled.button`
  padding: 7px 24.5px 7.5px 24.5px;
  background: #006dff;
  border: 2px solid #006dff;
  box-sizing: border-box;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  transition-duration: 0.6s;
  &:hover {
    background-color: #8e00ff;
    border: 2px solid #8e00ff;
  }
  &:focus {
    background-color: #8e00ff;
  }
`;

const Button: React.FC<Props> = ({ title, align = 'left' }) => {
  return (
    <StyledButtonContainer align={align}>
      <StyledButton>{title}</StyledButton>
    </StyledButtonContainer>
  );
};

export default Button;
