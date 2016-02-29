/**
 * Created by jpilcher on 2/26/2016.
 */
import React from "react";
import chunk from "lodash/chunk";

import Mill from "./Mill";

export default class MillGrid extends React.Component {
    constructor(props) {
        super(props);
        console.log(this);
    }

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        if (!this.props.mills.length) {
            return <span>loading</span>;
        }

        let chunks = chunk(this.props.mills, 4);

        let rows = [];

        chunks.forEach((chunk) => {
            console.log(chunk);
        });

        let mills = this.props.mills.map((item) => {
            return <Mill key={item.key} mill={item}/>;
        });

        return (
            <div>
                {mills}
            </div>
        )
    }

}