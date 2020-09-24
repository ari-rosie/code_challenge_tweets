import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Tweet from "./Tweet";

const TweetContent = () => {
  const { user, content } = useSelector((state) => state.userReducer);

  return (
    <Wrapper>
      {user ? (
        <>
          <div>
            {content.map((tweet) => {
              return <Tweet key={tweet.id} data={tweet} />;
            })}
          </div>
        </>
      ) : (
        <h2>Pick a prez!</h2>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 40px auto 0 auto;

  img {
    border-radius: 50%;
  }

  h2 {
    text-align: center;
    padding-right: 30px;
    font-weight: 700;
    font-size: 2em;
  }
`;

export default TweetContent;
