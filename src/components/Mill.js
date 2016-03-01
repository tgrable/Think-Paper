import React from "react";
import connectToStores from 'alt-utils/lib/connectToStores';
import MillStore from '../stores/MillStore';
import PaperStore from '../stores/PaperStore';
import MillActions from "../actions/MillActions";

import PaperTable from './PaperTable';

const Mill = React.createClass({
    statics: {
        getStores(props) {
            return [MillStore]
        },
        getPropsFromStores(props) {
            return MillStore.getState()
        }
    },


    render() {
        let {params} = this.props;
        let mill = MillStore.getMill(params.key);
        let papers = PaperStore.getPapers(params.key);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>
                            {mill.title}
                        </h2>
                        <p>{mill.description}</p>
                        <PaperTable papers={papers}/>
                    </div>
                </div>
            </div>

        )
    }
})

export default connectToStores(Mill);