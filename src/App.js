import React from 'react';
import PostList from "./components/posts/PostList"
import Home from "./components/Home"
import Header from "./components/Header"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Begin routing here
export default function main() {
  const POST_URL = 'http://drupal.docker.localhost:8000/jsonapi/node/article?sort=-created,title&include=field_tags';
  
  return (
    <Router>
      <div className='m-8'>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/posts">
            <PostList url={POST_URL} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
