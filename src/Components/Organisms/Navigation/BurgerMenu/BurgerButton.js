import React from "react";
import { bool, func } from "prop-types";
import styled from "styled-components";

const StyledBar = styled.span`
  width: 2rem;
  height: 0.25rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
`;

const StyledBurgerButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  ${StyledBar} {
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const BurgerButton = ({ open, setOpen, ...props }) => {
  return (
    <StyledBurgerButton
      aria-label="Menü"
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <StyledBar />
      <StyledBar />
      <StyledBar />
    </StyledBurgerButton>
  );
};

BurgerButton.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default BurgerButton;
