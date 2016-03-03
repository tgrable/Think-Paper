import React from "react";
import ColorRow from './ColorRow';

export default class CategoryKey extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table className="table table-condensed borderless">
                <thead>
                    <tr>
                        <th>
                            Category Key
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Text</td>
                        <td>Untreated B&W Text</td>
                        <td><ColorRow count={1}/></td>
                    </tr>
                    <tr>
                        <td>Text Plus</td>
                        <td>Untreated B&W 2/c, Light 4/c</td>
                        <td><ColorRow count={2}/></td>
                    </tr>
                    <tr>
                        <td>Production</td>
                        <td>Treated 2/c, 4c</td>
                        <td><ColorRow count={3}/></td>
                    </tr>
                    <tr>
                        <td>Production Plus</td>
                        <td>Treated High Quality 4/c</td>
                        <td><ColorRow count={4}/></td>
                    </tr>
                    <tr>
                        <td>Premium</td>
                        <td>Coated Premium Quality 4/c</td>
                        <td><ColorRow count={5}/></td>
                    </tr>
                </tbody>
            </table>
        )
    }

}