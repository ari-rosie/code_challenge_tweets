require("dotenv").config();

const Twit = require("twit");

const T = new Twit({
  consumer_key: process.env.TWITTER_KEY,
  consumer_secret: process.env.TWITTER_SECRET_KEY,
  app_only_auth: true,
});

const handleGetTweets = async (req, res) => {
  const user = req.params.id;

  await T.get(
    "statuses/user_timeline",
    { screen_name: user, count: 5 },
    function (err, data, response) {
      res.status(200).json({ status: 200, data: data });
    }
  );
};

module.exports = { handleGetTweets };
