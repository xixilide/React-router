import React, { PropTypes } from 'react';
import { Router, Route, hashHistory, Link , IndexRoute} from 'react-router';
import App from './App';
import About from './about/about';
import Work from './work/work.js';
import Home from './home/home.js';
import Contact from './contact/contact.js';

class Routers extends React.Component {
  render () {
    return(
      <div>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={Home} />
          <Route path="about" component={About} />
          <Route path="work" component={Work} />
          <Route path="contact" component={Contact} />
       </Route>
     </Router>
   </div>
    )
  }
}

export default Routers;
