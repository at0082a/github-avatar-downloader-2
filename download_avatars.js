var request = require('request');

function getRepoContributors(repoOwner, repoName, cb) {
    var options = {
      url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
      headers: {
        'User-Agent' : 'request',
        'Authorization' : 'ea8ea57512ae3db4f06e5c2b1f0d71382b468164'
      }
    };
  
    request(options, function(err, res, body) {
      cb(err, body);
    });
  }

getRepoContributors("jquery", "jquery", function(err, result) {
    console.log("Errors:", err);
    console.log("Result:", result);
 });