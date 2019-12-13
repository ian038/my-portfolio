import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landingpage';
import About from './aboutme';
import Contact from './contact';
import Resume from './resume';
import Work from './work';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/aboutme" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/work" component={Work} />
    </Switch> 
)

export default Main;