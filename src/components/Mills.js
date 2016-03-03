import React from "react";
import connectToStores from 'alt-utils/lib/connectToStores';

import MillStore from '../stores/MillStore';

import MillGrid from "./MillGrid";

const Mills = React.createClass({
    statics: {
        getStores(props) {
            return [MillStore]
        },
        getPropsFromStores(props) {
            return MillStore.getState()
        }
    },

    render() {
        return (
            <MillGrid mills={this.props.mills} />
        )
    }
});

export default connectToStores(Mills);