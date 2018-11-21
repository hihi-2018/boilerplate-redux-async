import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import NewPosts from './NewPosts';
import NewPostList from './NewPostList'


const App = () => (
  <div className='app'>
    <ErrorMessage />
    <LoadSubreddit />
    <WaitIndicator />
    <SubredditList />
    <NewPosts />
    <NewPostList />
  </div>
)

export default App
