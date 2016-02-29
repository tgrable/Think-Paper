/**
 * Created by jpilcher on 2/26/2016.
 */

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router'


import Main from "./components/Main";
import Mills from "./components/Mills";

require('./css/app.css');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Mills}/>
        </Route>
    </Router>,
    document.getElementById('app')
);


/*<AltContainer store={MillStore} actions={MillActions}>
 <MillGrid />
 */