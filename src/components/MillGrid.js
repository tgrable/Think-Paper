/**
 * Created by jpilcher on 2/26/2016.
 */
import React from "react";
import chunk from "lodash/chunk";

import MillGridItem from "./MillGridItem";


export default class MillGrid extends React.Component {
    constructor(props) {
        super(props);
        console.log(this);
    }

    componentDidMount() {

    }

    render() {
        if (!this.props.mills.length) {
            return <span>loading</span>;
        }


        let mills = this.props.mills.map((item) => {
            return <MillGridItem key={item.key} mill={item}/>;
        });

        return (
            <div>
                <h1>Mills</h1>
                <div className="row">
                    {mills}
                </div>
            </div>
        )
    }

}