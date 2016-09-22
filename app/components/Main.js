// Include React 
var React = require('react');


// Helper Function
var helpers = require('./utils/helpers');
// This is the main component. 
var Main = React.createClass({
  render: function(){
    

    return(

      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h3>Hello, This is Main.js file connecting to app</h3>
          </div>
        </div>
      </div>
    )

  }
});

module.exports = Main;
