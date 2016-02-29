import React from "react";

import AltContainer from 'alt-container';

import MillStore from '../stores/MillStore';
import MillActions from "../actions/MillActions";

import MillGrid from "./MillGrid";

export default React.createClass({
    render() {
        return (
            <AltContainer store={MillStore} actions={MillActions}>
                <MillGrid />
            </AltContainer>
        )
    }
});