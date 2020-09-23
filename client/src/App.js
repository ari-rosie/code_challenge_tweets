import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import TweetContent from "./TweetContent";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Header />
          <TweetContent />
        </Route>
      </Router>
    </>
  );
}

export default App;
