import React from "react";
import PaperStore from '../stores/PaperStore';

import PaperTable from './PaperTable';

export default React.createClass({

    render() {
        const {params} = this.props;
        const paper = PaperStore.getPaper(params.key);
        console.log(paper);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>
                            {paper.title}
                        </h2>
                        <p></p>
                    </div>
                </div>
            </div>

        )
    }
})

