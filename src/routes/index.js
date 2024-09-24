import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../components/pages/home';
import About from '../components/pages/about';



const Routes = () => {


    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>


            {/* <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
            </Switch> */}
        </Router>
    );
};

export default Routes;
