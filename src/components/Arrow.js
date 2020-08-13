import React from "react";
import styled from "styled-components";

const Icon = styled.svg`
  fill: lightgray;
  opacity: 0.5;
  stroke-width: 2px;
  transition: transform .9s ease;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 10px;
  ${Icon}:hover {
    fill: black;
  }
`;

function Arrow() {
  return (
    <StyledCheckbox>
      <Icon viewBox="0 0 256 256">
        <polygon points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093" />
      </Icon>
    </StyledCheckbox>
  );
}

export default Arrow;
