import React from "react";
import startCase from 'lodash/startCase';
import { hashHistory } from 'react-router'

export default class PaperRow extends React.Component {
    constructor(props) {
        super(props);
    }

    _onClick(key) {
        const path = `/paper/${key}`
        hashHistory.push(path)
    }

    render() {
        const paper = this.props.item;
        return (
            <tr onClick={this._onClick.bind(this, paper.key)}>
                <td>{startCase(paper.mill)}</td>
                <td>{paper.title}</td>
                <td>{paper.basis_weight.map((item)=>{return item + "\n"})}</td>
                <td>{paper.brightness}</td>
                <td>{paper.coating}</td>
                <td>colors go here</td>
                <td>{paper.category}</td>
                <td>{paper.dye_pigment}</td>
            </tr>
        )

    }

}