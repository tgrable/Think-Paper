import React from "react";
import {Link} from "react-router";

export default class MillGridItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-xs-6 col-md-3">
                <Link to={ '/mill/'+this.props.mill.key}>
                    <div className="grid-item">
                        <h3>{this.props.mill.title}</h3>
                        <img src={this.props.mill.logo} alt=""/>
                    </div>
                </Link>
            </div>
        );
    }

}