import React from "react";
import connectToStores from 'alt-utils/lib/connectToStores';

import map from 'lodash/map';

import PaperStore from '../stores/PaperStore';
import PaperActions from "../actions/PaperActions";
import Dropdown from './Dropdown';

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'default',
            coating: 'default'
        }
    }

    static getStores(props) {
        return [PaperStore]
    }

    static getPropsFromStores(props) {
        return PaperStore.getState()
    }

    _reset() {
        this.props.reset();
        this.setState({
            category: 'default'
        });
    }

    _onFilter(event) {
        this.props.doFilter(event.target.value, event.target.id);
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    _buildOption(filter) {
        return map(filter, (item)=> {
            return {value: item, label: item}
        });
    }

    render() {
        console.log(this.state.category);
        return (
            <div>
                <Dropdown options={this._buildOption(this.props.filters.category)}
                          onChange={this._onFilter.bind(this)}
                          hasDefault={true}
                          value={this.state.category}
                          id="category"
                          defaultText="All"
                          label="Capablility"/>

                <Dropdown options={this._buildOption(this.props.filters.coating)}
                          onChange={this._onFilter.bind(this)}
                          hasDefault={true}
                          value={this.state.coating}
                          id="coating"
                          defaultText="All"
                          label="Coatings"/>

                <Dropdown options={this._buildOption(this.props.filters.dye_pigment)}
                          onChange={this._onFilter.bind(this)}
                          hasDefault={true}
                          value={this.state.dye_pigment}
                          id="dye_pigment"
                          defaultText="All"
                          label="Inkset"/>

                <button onClick={this._reset.bind(this)}>Reset</button>
            </div>
        )

    }

}

export default connectToStores(Filters);