import React from 'react';
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
  const CAT_URL = 'http://api.giphy.com/v1/gifs/search?api_key=aux6wtHbGzGUEkhXNUW0KapoFsIeoxY8&rating=g&q=cats';
  

  return (
    <Router>
      <div className='m-8'>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/posts">
            <Posts url={POST_URL} />
          </Route>
          <Route exact path="/cats">
            <Cats url={CAT_URL} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
