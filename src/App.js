import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import Post from './Component/Post/Post';
import Comment from './Component/Comment/Comment';
import NotFound from './Component/NotFound/NotFound';
import PostDetails from './Component/PostDetails/PostDetails';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div >

      <Router>
        <Switch>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/posts/:postId">
            <PostDetails></PostDetails>
          </Route>
          <Route path="/comments/:commentId">
            <Comment></Comment>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
