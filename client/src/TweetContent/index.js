import React from "react";
import { useSelector } from "react-redux";

const TweetContent = () => {
  const { user } = useSelector((state) => state.userReducer);
  return <>{user ? <h2>{user}</h2> : <h2>Pick a prez!</h2>}</>;
};

export default TweetContent;
