import React from "react";
import {Link} from "react-router";

export default React.createClass({
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="nav nav-pills">
                            <li className="active">
                                <Link to="/mills">Mills</Link>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        );
    }
})