import React from "react";
import PaperStore from '../stores/PaperStore';
import MillStore from '../stores/MillStore';

import PaperTable from './PaperTable';
import ColorRow from './ColorRow';
import CategoryKey from './CategoryKey';
import PriceInfo from './PriceInfo';

export default React.createClass({

    render() {
        const {params} = this.props;
        const paper = PaperStore.getPaper(params.key);
        const mill = MillStore.getMill(paper.mill);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>
                            {mill.title} - {paper.title}
                        </h2>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Region</th>
                                <th>Micr Capable</th>
                                <th>Price Range</th>
                                <th>White / Bright Range</th>
                                <th>Opacity Range</th>
                                <th>Caliper</th>
                                <th>Recycled %</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{paper.region}</td>
                                <td>{paper.micr_capable}</td>
                                <td>{paper.price_range}</td>
                                <td>{paper.brightness}</td>
                                <td>{paper.opacity_range}</td>
                                <td>{paper.caliper}</td>
                                <td>{paper.recycled_percentage}</td>
                            </tr>
                            </tbody>
                        </table>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Type</th>
                                <th>Type</th>
                                <th>Category</th>
                                <th>Color Capability</th>
                                <th>Weights Available</th>
                                <th>Boost Sample Available</th>
                                <th>House Paper</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{paper.type_one}</td>
                                <td>{paper.type_two}</td>
                                <td>{paper.category}</td>
                                <td>{<ColorRow count={paper.color_capability}/>}</td>
                                <td>{paper.weights_available}</td>
                                <td>{paper.boost_sample}</td>
                                <td>{paper.house_paper}</td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <CategoryKey />
                    </div>
                    <div className="col-md-5">
                        <PriceInfo />
                    </div>
                </div>
            </div>
        )
    }
})

