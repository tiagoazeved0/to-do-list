import React from "react";
import styled from "styled-components";

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: green;
  opacity: 0.5;
  stroke-width: 2px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 22px;
  height: 22px;
  background: white;
  border-radius: 10px;
  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
  
`;
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

function Checkbox({ className, checked, ...props }) {
  return (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
}

export default Checkbox;
