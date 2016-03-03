import React from "react";

export default class ColorRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const colors = [];

        for (let i = 0; i < this.props.count; i++){
            let img = 'color';
            if (i == 0) {
                img = 'bw';
            }
            colors.push(
                <li key={'color'+i} className={img}></li>
            )
        }

        return (
            <ul className="colors">{colors}</ul>
        )
    }

}