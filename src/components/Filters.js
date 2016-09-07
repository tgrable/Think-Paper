import React from "react";
import connectToStores from 'alt-utils/lib/connectToStores';

import map from 'lodash/map';

import RadioGroup from 'react-radio-group';
import PaperStore from '../stores/PaperStore';
import PaperActions from "../actions/PaperActions";
import Dropdown from './Dropdown';
import ColorRow from './ColorRow';

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'default',
            dye_pigment: 'default',
            coating: 'default',
            color: 'default',
            basis_weight: 'default'
        }
    }

    static getStores(props) {
        return [PaperStore]
    }

    static getPropsFromStores(props) {
        return PaperStore.getState()
    }

    _reset() {
        this.refs.basis_weight.value = '';

        this.props.reset();
        this.setState({
            category: 'default',
            dye_pigment: 'default',
            coating: 'default',
            color: 'default',
            basis_weight: 'default'
        });
    }

    _onFilter(event) {
      this.props.doFilter(event.target.value, event.target.id);
      this.setState({
        [event.target.id]: event.target.value
      });
    }

    _onColorChange(value) {
        this.props.doFilter(value, 'color_capability');
        this.setState({
            color: value
        })
    }

    _buildOption(filter) {
      // console.log(filter);
      return map(filter, (item)=> {
        return {value: item, label: item}
      });
    }

    render() {
        // console.log(this.state.category);
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

                <label>Weight: </label>
                <input
                    type="text"
                    ref='basis_weight'
                    value={this.state.value}
                    onChange={this._onFilter.bind(this)}
                    id="basis_weight"
                    label="Weight" />

                <RadioGroup
                    name="colors"
                    selectedValue={this.state.color}
                    onChange={this._onColorChange.bind(this)}>
                    {Radio => (
                        <div>
                            <div className="radio">
                                <label>
                                    <Radio value="default"/> All
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <Radio value="1"/> <ColorRow count={1}/>
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <Radio value="2"/> <ColorRow count={2}/>
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <Radio value="3"/> <ColorRow count={3}/>
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <Radio value="4"/> <ColorRow count={4}/>
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <Radio value="5"/> <ColorRow count={5}/>
                                </label>
                            </div>
                        </div>
                    )}

                </RadioGroup>

                <button onClick={this._reset.bind(this)}>Reset</button>
            </div>
        )
    }
}

export default connectToStores(Filters);