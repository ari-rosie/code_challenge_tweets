export const setUser = (user, data) => ({
  type: "SET-USER",
  user: user,
  data: data,
});

export const addStreamTweet = (tweet) => ({
  type: "ADD-STREAM-TWEET",
  tweet: tweet,
});
