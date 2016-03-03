import React from "react";
import startCase from 'lodash/startCase';
import { hashHistory } from 'react-router'

import ColorRow from './ColorRow';

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
                <td className="color-col">{<ColorRow count={paper.color_capability}/>}</td>
                <td>{paper.category}</td>
                <td>{paper.dye_pigment}</td>
            </tr>
        )

    }

}