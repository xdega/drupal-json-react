import React from "react";
import { withRouter } from "react-router-dom";
import Navigation from "./Navigation"

class Header extends React.Component {
    render() {
        return (
            <div className="md:flex items-end bg-gray-200 p-3">
                <h1 className="md:w-1/3 text-3xl uppercase font-black text-gray-800 inline-block">
                    The&nbsp;{ this.props.location.pathname.replace("/", "") || "home" }
                </h1>
                <Navigation />
            </div>
        );
    }
}

export default withRouter(Header);
