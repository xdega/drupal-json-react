import React from 'react';
import PostList from "./components/posts/PostList"
import Header from "./components/Header"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function Home() {
    return (
        <div className="m-8">Welcome!</div>
    )
}

function Posts() {
    const POST_URL = 'http://drupal.docker.localhost:8000/jsonapi/node/article?sort=-created,title&include=field_tags';
    return (
        <div>
            <PostList url={POST_URL} />
        </div>
    )
}

// Begin routing here
export default function main() {
  return (
    <Router>
      <div className='m-8'>
        <Header />
        {/* Content Area. Refactor? */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
