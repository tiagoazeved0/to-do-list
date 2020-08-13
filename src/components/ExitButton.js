import React from "react";
import styled from "styled-components";

const Icon = styled.svg`
  fill: none;
  stroke: lightgray;
  opacity: 0.5;
  stroke-width: 2px;
  transition: transform .2s;
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 10px;
  ${Icon}:hover {
    transform: scale(1.3);
    stroke: black;
  }
`;

function ExitButton({ className, checked, ...props }) {
  return (
    <div onClick={props.onClick}>
      <CheckboxContainer>
        <StyledCheckbox>
          <Icon viewBox="0 0 24 24">
            <polyline points="18 6 6 18" />
            <polyline points="6 6 18 18" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
    </div>
  );
}

export default ExitButton;
