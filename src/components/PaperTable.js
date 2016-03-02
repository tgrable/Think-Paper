import React from "react";

import filter from 'lodash/filter';
import remove from 'lodash/remove';
import forIn from 'lodash/forIn';
import includes from 'lodash/includes';

import PaperRow from './PaperRow';
import Filters from './Filters';

export default class PaperTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            papers: props.papers
        }

        this.filteringBy = {};
    }

    componentDidMount() {

    }

    _removeFilter(id) {
        this.filteringBy = remove(this.filteringBy, (item) => {
            return item === id;
        });
    }

    _doFilter(query, id) {
        this.filteringBy[id] = query;
        console.log(this.filteringBy);
        const papers = filter(this.props.papers, function(item) {
            let matches = [];

            forIn(this.filteringBy, function(value, key) {
                if (value !== 'default') {
                    matches.push(item[key] == value);
                }
            });

            return !includes(matches, false);
        }.bind(this));

        this.setState({
            papers: papers
        })

        /*const isDefault = query === 'default';

        switch (id) {
            case 'categories':
                if (isDefault) {
                    this._removeFilter(id);
                } else {
                    this.filteringBy.push(id);
                }
                break;
            case 'coatings'
        }


        if (isDefault) {
            const papers = filter(this.props.papers, (item) => {
                return item.category == query;
            });
            this.setState({
                papers: papers
            })
        } else {
            this.setState({
                papers: this.props.papers
            })
        }*/

    }

    _reset() {
        this.setState({
            papers: this.props.papers
        })
    }

    render() {
        let rows = this.state.papers.map((paper) => {
            return <PaperRow key={paper.key} item={paper}/>
        });
        return (
            <div>
                <Filters doFilter={this._doFilter.bind(this)} reset={this._reset.bind(this)} />
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Mill Name</th>
                        <th>Media Name</th>
                        <th>Basis Weight</th>
                        <th>Brightness</th>
                        <th>Coating</th>
                        <th>Color</th>
                        <th>Capability</th>
                        <th>Inkset</th>
                    </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>

        )

    }

}