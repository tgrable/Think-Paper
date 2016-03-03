import React from "react";

export default class PriceInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table className="table table-condensed borderless">
                <thead>
                    <tr>
                        <th>
                            Price Range Information
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>$</td>
                        <td>0 to 53 PER CWT.</td>
                    </tr>
                    <tr>
                        <td>$$</td>
                        <td>54 to 69 PER CWT</td>
                    </tr>
                    <tr>
                        <td>$$$</td>
                        <td>70 to 90 CWI</td>
                    </tr>
                    <tr>
                        <td>$$$$</td>
                        <td>90+ CWT</td>
                    </tr>
                </tbody>
            </table>
        )
    }

}