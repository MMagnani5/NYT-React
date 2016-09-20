// Inclue the React library
var React = require('react');

// Include the Router
var Router = require('react-router');
var Route = Router.Route;
//  Include the IndexRoute (catch-all route)
var IndexRoute  = Router.IndexRoute;

var Main = require('../components/Main.js');



module.exports = (
    <Route path='/' component={Main}>

    </Route>
);