require("dotenv").config();

const Twit = require("twit");

const T = new Twit({
  consumer_key: "...",
  consumer_secret: "...",
  app_only_auth: true,
});

const handleGetTweets = async (user) => {
  console.log("gettweets");
};

module.exports = { handleGetTweets };
