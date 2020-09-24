import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../actions";
import styled from "styled-components";

import UnstyledButton from "../UnstyledButton";
import { COLORS } from "../constants";

const Header = () => {
  const dispatch = useDispatch();

  const handleClick = async (user) => {
    try {
      const result = await fetch(`/tweets/${user}`);
      const content = await result.json();
      dispatch(setUser(user, content.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Nav>
      <img
        src={require("../img/Twitter Logos/Twitter Logos/Twitter_Logo_Blue/Twitter_Logo_Blue.png")}
      />
      <StyledBtn onClick={() => handleClick("realDonaldTrump")}>
        Donald Trump
      </StyledBtn>
      <StyledBtn onClick={() => handleClick("HillaryClinton")}>
        Hillary Clinton
      </StyledBtn>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.x_x_light_grey};

  img {
    width: 100px;
    position: absolute;
    left: 20px;
  }
`;

const StyledBtn = styled(UnstyledButton)`
  border: ${COLORS.blue} 2px solid;
  height: 50%;
  margin-right: 40px;
  border-radius: 20px;
  padding: 10px 20px;
  background-color: white;
  transition: all ease-in 0.5s;
  outline: none;

  &:hover {
    background-color: ${COLORS.xtra_light_grey};
    transform: scale(1.1);
  }
`;

export default Header;
