import React from "react";

export default class PaperRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let paper = this.props.item;
        return (
            <tr>
                <td>{paper.title}</td>
                <td>{paper.brightness}</td>
            </tr>
        )

    }

}