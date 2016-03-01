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

    _onClick() {
       PaperActions.filterData('georgia-pacific--mill');
    },

    render() {
        /*let { query } = this.props.location;
        let data = [];
        if (Object.keys(query).length) {
            data = filter(this.props.viewData, (item) => {
                return item.mill == query.mill;
            });
        } else {
            data = this.props.viewData;
        }*/

        return (
            <div className="container">
                <div>something about papers</div>
                <div>area for filters</div>
                <button onClick={this._onClick}>Click me</button>
                <PaperTable location={this.props.location} papers={this.props.viewData} />
            </div>
        )
    }
});

export default connectToStores(Paper);