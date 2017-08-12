import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Home from './components/Home';

const Routes = (props) => (
  <Router {...props}>
    <Route component={App}>
    	<Route path="/" component={Home}/>
    	<Route path="/about" component={About} />
    	<Route path="/resume" component={Resume} />
    	<Route path="/projects" component={Projects} />
    	<Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;