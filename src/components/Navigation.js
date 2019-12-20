import React from "react";
import { NavLink } from "react-router-dom";

export default class Navigation extends React.Component {
    render() {
        return (
          <nav className="md:w-2/3 uppercase md:inline-block pb-2">
            <ul>
              <li className="md:inline-block">
                <NavLink exact={true} to="/" activeClassName="text-yellow-600 font-extrabold">Home</NavLink>
              </li>
              <li className="md:inline-block md:ml-4">
                <NavLink to="/posts" activeClassName="text-yellow-600 font-extrabold">Posts</NavLink>
              </li>
              <li className="md:inline-block md:ml-4">
                <NavLink to="/cats" activeClassName="text-yellow-600 font-extrabold">Cats</NavLink>
              </li>
            </ul>
          </nav>
        );
    }
}
