// Include React 
var React = require('react');

// Component creation
var Saved = React.createClass({

    render: function(){

    return(
          <div className="row">

            <div className="col-lg-12">
              
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Saved Articles</h3>
                </div>
                <div className="panel-body">
                </div>
              </div>

            </div>

          </div>

      
    )
  }    
});
  // Export the component back for use in other files
module.exports = Saved;