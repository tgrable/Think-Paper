import React from "react";
import MillStore from '../stores/MillStore';
import PaperStore from '../stores/PaperStore';

import PaperTable from './PaperTable';

const Mill = React.createClass({
    render() {
        let {params} = this.props;
        let mill = MillStore.getMill(params.key);
        let papers = PaperStore.getPapers(params.key);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mill-logo">
                            <img src={mill.logo} alt=""/>
                        </div>
                        <h1>
                            {mill.title}
                        </h1>
                        <p><a href={mill.website}>Website</a></p>
                        <p>{mill.address}</p>
                        <p>{mill.description}</p>
                        <PaperTable papers={papers}/>
                    </div>
                </div>
            </div>

        )
    }
})

export default Mill;