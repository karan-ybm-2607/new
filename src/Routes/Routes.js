import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BodyContent from '../Component/Body Content/BodyContent'
import AddPerson from '../Component/Add Person Form/AddPerson'
const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} component={BodyContent} />
                <Route path="/AddNewProfile" component={AddPerson} />
            </Switch>
        </Router>
    )
}

export default Routes
