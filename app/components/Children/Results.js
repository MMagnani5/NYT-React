// Include React 
var React = require('react');

// Component creation
var Results = React.createClass({

  // Here we render the function
  render: function(){

    return(

     <div>{console.log("Results: ", this.props.articles)}
      </div>

    )
  }
});

// Export the component back for use in other files
module.exports = Results;