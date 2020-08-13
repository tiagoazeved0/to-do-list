import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: white;
  border: 1px solid transparent;
  border-radius: 3px;
  font-family: "Raleway", sans-serif;
  font-size: 0.8rem;
  outline: 0;
  transition: ease border 250ms;
  &:hover{
    border: 1px solid #d0d0d0;
  }
`;

function FilterButton(props) {
  return (
    <Button onClick={() => props.setFilter(props.name)}>
      <span>{props.name}</span>
    </Button>
  );
}

export default FilterButton;
