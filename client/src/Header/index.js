import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStreamTweet, setUser } from "../actions";
import styled from "styled-components";
import socketIOClient from "socket.io-client";

import UnstyledButton from "../UnstyledButton";
import { COLORS } from "../constants";

const Header = () => {
  const dispatch = useDispatch();
  const { user, content } = useSelector((state) => state.userReducer);

  const handleClick = async (screenName) => {
    dispatch(setUser(screenName, []));
    if (!user) {
      const socket = socketIOClient("http://localhost:3000");

      socket.on("connect", () => {
        console.log("socket connect");
        socket.on("tweets", (data) => {
          dispatch(addStreamTweet(data));
        });
      });
      socket.on("disconnect", () => {
        socket.off();
        socket.removeAllListeners("Tweets");
        console.log("socket disconnect");
      });
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
