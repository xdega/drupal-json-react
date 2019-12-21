import React from 'react';
// compontents
import Posts from "./components/posts/PostList"
import Cats from "./components/cats/CatList"
import Home from "./components/Home"
import Header from "./components/Header"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function main() {
  // These should be refactored to environment variables and moved to their components?
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
            <Posts />
          </Route>
          <Route exact path="/cats">
            <Cats />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
