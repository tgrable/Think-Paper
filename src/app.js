/**
 * Created by jpilcher on 2/26/2016.
 */

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Main from "./components/Main";
import Mills from "./components/Mills";
import Mill from "./components/Mill";
import Papers from "./components/Papers";
import Paper from "./components/Paper";

import DataSource from "./sources/DataSource";

require('./sass/app.scss');


DataSource.fetchData(() => {
    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Mills}/>
                <Route path="/papers" component={Papers}/>
                <Route path="/mill/:key" component={Mill}/>
                <Route path="/paper/:key" component={Paper}/>
            </Route>
        </Router>,
        document.getElementById('app')
    );
})
