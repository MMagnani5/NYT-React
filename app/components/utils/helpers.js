// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

//  API
var APIKey  = "62b26d71f0d04a29b541ca3866a7e947";

// Helper Functions (in this case the only one is runQuery)
var helpers = {

  runQuery: function(location){

    console.log(location);

    //Figure out the 
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ searchTerm +"&page=0&sort=newest&begin_date="+startYear+"0101&end_date="+endYear+"0101&api-key=" + APIKey;

   

    return axios.get(queryURL)
      .then(function(response){

        console.log(response);
        return response.data.results[0].formatted;
    })

  }

}


// We export the helpers function 
module.exports = helpers;