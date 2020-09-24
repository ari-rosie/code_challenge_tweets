import React from "react";
import moment from "moment";
import styled from "styled-components";

import { COLORS } from "../constants";

const Tweet = ({ data }) => {
  return (
    <Wrapper>
      <img src={data.user.profile_image_url} />
      <div>
        <User>
          <h3>{data.user.name}</h3>
          <span>
            @
            {data.user.screen_name +
              " | " +
              moment(data.created_at, "ddd MMM DD hh:mm:ss [escaped] YYYY")
                .subtract(4, "hours")
                .fromNow()}
          </span>
        </User>
        <p>{data.text}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 10px;

  span {
    color: ${COLORS.dark_grey};
    font-weight: 400;
  }

  h3 {
    font-weight: 700;
    margin-right: 10px;
  }

  img {
    margin: 2px 20px auto 20px;
  }
`;

const User = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export default Tweet;
