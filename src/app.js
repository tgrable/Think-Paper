/**
 * Created by jpilcher on 2/26/2016.
 */

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import axios from 'axios';

import Main from "./components/Main";
import Mills from "./components/Mills";
import Mill from "./components/Mill";
import Papers from "./components/Papers";
import Paper from "./components/Paper";

import PaperActions from './actions/PaperActions';
import MillActions from './actions/MillActions';

require('./sass/app.scss');

axios.all([getMills(), getPapers()])
    .then(axios.spread((millRes, paperRes) => {
        PaperActions.updatePapers(paperRes);
        MillActions.updateMills(millRes);

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
    }));


function getMills() {
    return axios.get('http://dev-pressdemo.pantheon.io/data/api/mill');
}

function getPapers() {
    return axios.get('http://dev-pressdemo.pantheon.io/data/api/paper');
}


/*<AltContainer store={MillStore} actions={MillActions}>
 <MillGrid />
 */