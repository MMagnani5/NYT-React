// Include React 
var React = require('react');

var Search = require('./Children/Search'); 
var Saved = require('./Children/Saved');
var Results = require('./Children/Results'); 

// Helper Function
var helpers = require('./utils/helpers.js');
// This is the main component. 
var Main = React.createClass({
  
    getInitialState: function(){
      return{
        searchTerm: "",
        results: "",
        saved: []
      
      }
    },

    setTerm: function(term){
      this.setState({
        searchTerm: term,
        
      })
    },

    componentDidUpdate: function(prevProps, prevState){

    if(prevState.searchTerm != this.state.searchTerm){
      console.log("UPDATED");

      helpers.runQuery(this.state.searchTerm)
        .then(function(data){
          if (data != this.state.results)
          {
            console.log("Article");
            console.log(data);

            this.setState({
              results: data
            })  
       helpers.postHistory(this.state.searchTerm)
              .then(function(data){
                console.log("Updated!");

            
             helpers.getHistory()
                  .then(function(response){
                    console.log("Saved Current", response.data);
                    if (response != this.state.saved){
                      console.log ("Saved", response.data);

                      this.setState({
                        saved: response.data
                      })
                    }
                }.bind(this))   
          
        }.bind(this))
       
      }
    }.bind(this))          
  }
},    
    // The moment the page renders get the History
  componentDidMount: function(){

    // Get the latest history.
    helpers.getHistory()
      .then(function(response){
        if (response != this.state.saved){
          console.log ("Saved", response.data);

          this.setState({
            saved: response.data
          })
        }
      }.bind(this))
  }, 
    
render: function(){
    return(
          
          <div className="container">

            <div className="row">

              <div className="jumbotron"> 
                  <h1 className="text-center"><strong>New York Times Search</strong></h1>
                  <p className="text-center"><em>Enter a search term</em></p>
              </div>

            <div className="row">
                <div className="col-sm-12">


                    <Search setTerm={this.setTerm}/>

                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">

                      <Results address={this.state.results} />

                </div>
            </div>

            <div className="row">

                    <Saved saved={this.state.saved} />

            </div>

        </div>
      </div>
    )

  }
});

module.exports = Main;
