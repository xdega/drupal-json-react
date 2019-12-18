import React from 'react';
import PostList from "./components/PostList"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {
    return (
        <div className="m-8">Welcome!</div>
    )
}

function Posts() {
    const POST_URL = 'http://drupal.docker.localhost:8000/jsonapi/node/article?sort=-created,title&include=field_tags';
    
    return (
        <div className="m-8">
            <PostList
                url={POST_URL}
            />
        </div>
    )
}

// Begin routing here
export default function main() {
  return (
    <Router>
      <div>
        {/* Header Here */}
        {/* Refactor to Nav Component */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
        {/* Content Area */}
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
