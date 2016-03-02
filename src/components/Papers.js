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
            <div className="">
                <div>something about papers</div>
                <PaperTable location={this.props.location} papers={this.props.viewData}/>
            </div>
        )
    }
});

export default connectToStores(Paper);