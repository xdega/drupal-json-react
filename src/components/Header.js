import React from "react";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1 className="text-3xl uppercase font-black text-gray-800">
                    The { this.props.location.pathname.replace("/", "") || "home" }
                </h1>
            </div>
        );
    }
}

export default withRouter(Header);
