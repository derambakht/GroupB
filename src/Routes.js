import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductList  from './ProductList';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Posts from './Posts';

const Routes = () => (
  <Switch>
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/about" component={About} />
    <Route exact path="/products" component={ProductList} />
    <Route exact path="/posts" component={Posts} />
    <Route exact path="/" component={Login} />
  </Switch>
);

export default Routes;
