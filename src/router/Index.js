import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CountHook from "../content/ConutHook";
import ClassHook from "../content/CountClass";

function Index() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={CountHook}></Route>
                <Route path='/class' component={ClassHook}></Route>
            </Switch>
        </Router>
    )
}

export default Index;