import React from "react";
import connectToStores from 'alt-utils/lib/connectToStores';

import PaperStore from '../stores/PaperStore';
import PaperActions from "../actions/PaperActions";
import filter from 'lodash/filter';
import PaperTable from './PaperTable';

const Paper = React.createClass({
    statics: {
        getStores(props) {
            return [PaperStore]
        },
        getPropsFromStores(props) {
            return PaperStore.getState()
        }
    },

    render() {
        return (
            <div className="">
                <h2>Papers</h2>
                <div>something about papers</div>
                <PaperTable location={this.props.location} papers={this.props.viewData}/>
            </div>
        )
    }
});

export default connectToStores(Paper);