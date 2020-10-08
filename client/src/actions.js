export const setUser = (user) => ({
  type: "SET-USER",
  user: user,
});

export const addStreamTweet = (tweet) => ({
  type: "ADD-STREAM-TWEET",
  tweet: tweet,
});

export const clearContent = () => ({
  type: "CLEAR-CONTENT",
});
