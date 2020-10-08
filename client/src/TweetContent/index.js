import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Tweet from "./Tweet";

const TweetContent = () => {
  const { user, content } = useSelector((state) => state.userReducer);
  useEffect(() => {
    console.log(content);
  }, [content]);

  return (
    <Wrapper>
      {content && content.length > 0 ? (
        <>
          <div>
            {content.map((tweet) => {
              if (tweet.in_reply_to_screen_name === user)
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
