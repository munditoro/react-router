import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Roster from './Roster';
import Home from './Home';
import Schedule from './Schedule';

const Main = () => {
    return(
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/roster' component={Roster}/>
                <Route exact path='/schedule' component={Schedule}/>
            </Switch>
        </main>
    )
}

export default Main;