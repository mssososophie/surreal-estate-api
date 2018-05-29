import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';
import NavigationBar from './components/NavBar';
import PropertyListings from './components/PropertyListings';
import './styles.scss';
import AddProperty from './components/AddListing/AddProperty';


render((
  <React.Fragment><NavigationBar />
    <Router>
      <div>
        <Route exact path="/" component={PropertyListings} />
        <Route path="/post-property" component={AddProperty} />
      </div>
    </Router>
  </React.Fragment>), document.getElementById('root'));
