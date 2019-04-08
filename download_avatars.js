var request = require('request');
var getSecrets = require('./secrets')

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

getRepoContributors("jquery", "jquery", function(err, result) {
    for (i = 0; i < result.length; i++) {
        console.log(result[i].avatar_url);
    }
    console.log("Errors:", err);
 });