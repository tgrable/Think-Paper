import React from "react";
/*import connectToStores from 'alt-utils/lib/connectToStores';*/
import PaperActions from '../actions/PaperActions';

import PaperRow from './PaperRow';

export default class PaperTable extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        let rows = this.props.papers.map((paper) => {
           return <PaperRow key={paper.key} item={paper} />
        });
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Brightness</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        )

    }

}