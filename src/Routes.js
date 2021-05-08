import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import SignUp from "./components/SignUp/SignUp"
import GamePage from './components/GamePage/GamePage';
import HomePage from './components/HomePage/HomePage';
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={HomePage}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/game" component={GamePage}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;