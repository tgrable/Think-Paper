import React from "react";

export default class Mill extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-3">
                <div className="grid-item">
                    <h3>{this.props.mill.title}</h3>
                </div>
            </div>
        );
    }

}