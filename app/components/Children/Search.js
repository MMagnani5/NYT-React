// Include React 
var React = require('react');

// Component creation
var Search = React.createClass({


  // Here we render the function
  render: function(){

    return(

      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Query</h3>
        </div>
        <div className="panel-body text-center">

            <form>
              <div className="form-group">
                <h4 className=""><strong>Location</strong></h4>

                
                <input type="text" className="form-control text-center" id="term" onChange= {this.handleChange} required/>
                <br />
                <button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
              </div>

            </form>
        </div>
      </div>



    )
  }






});


// Export the component back for use in other files
module.exports = Search;