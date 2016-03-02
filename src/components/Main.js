import React from "react";
import {Link} from "react-router";

export default React.createClass({
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="nav nav-pills">
                            <li>
                                <Link to="/">Mills</Link>
                            </li>
                            <li>
                                <Link to="/papers">Papers</Link>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
})