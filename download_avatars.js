var request = require('request');
var getSecrets = require('./secrets');
var fs = require('fs');


function getRepoContributors(repoOwner, repoName, cb) {
    var options = {
      url: "https://api.github.com/repos/" + repoOwner + "/" + repoName +  "/contributors",
       headers: {
        'User-Agent' : 'request'
      }
    };

    request(options, function(err, res, body) {
      var data = JSON.parse(body)

      cb(err, data);
    }).auth('at0082a', getSecrets.GITHUB_TOKEN);
  }

  function downloadImageByURL(url, filePath) {
    request.get(url)               
       .on('error', function (err) {                                   
         throw err; 
       })
       .on('response', function (response) {                           
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response Message: ', response.statusMessage);
         console.log('Response Headers: ', response.headers['content-type'])
         console.log('Download complete.')
       })
       .pipe(fs.createWriteStream(filePath)); 
  }

// getRepoContributors("jquery", "jquery", function(err, result) {
//     for (i = 0; i < result.length; i++) {
//         console.log(result[i].avatar_url);
//     }
//     console.log("Errors:", err);
//  });

 downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "./photos/kvirani.jpg")