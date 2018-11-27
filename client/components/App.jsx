import React from "react";

import ErrorMessage from "./ErrorMessage";
import LoadSubreddit from "./LoadSubreddit";
import SubredditList from "./SubredditList";
import WaitIndicator from "./WaitIndicator";
import NewPosts from "./NewPosts";
import NewPostList from "./NewPostList";
import Form from "./Form";

const App = () => (
  <div className="app">
    <ErrorMessage />
    <LoadSubreddit />
    <WaitIndicator />
    <SubredditList />
    <NewPosts />
    <NewPostList />
    <Form />
  </div>
);

export default App;
