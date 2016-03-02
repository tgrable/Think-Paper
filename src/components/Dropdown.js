var React = require('react');

export default class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Dropdown';
    }

    render() {
        var options = this.props.options.map(function (item) {
            return (
                <option key={item.value} value={item.value}>{item.label}</option>
            );
        });

        if (this.props.hasDefault) {
            options.unshift(<option key="default" value="default">{this.props.defaultText}</option>);
        }

        return (
            <div>
                <label>{this.props.label}:</label>
                <select id={this.props.id} className="" defaultValue="default" value={this.props.value}
                        onChange={this.props.onChange}>
                    {options}
                </select>
            </div>
        );
    }
}