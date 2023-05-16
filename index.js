const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const JSONStream = require('JSONStream');


const main = () => {
    return new Promise((resolve, reject) => {
      try {
        let  pullRequestInfo = core.getInput('pull_info');
        const parser = JSONStream.parse([true,'commit','message']);
        console.log(typeof(pullRequestInfo));
        console.log(pullRequestInfo);

        /*
        const stream = fs.createReadStream('C:/Users/alzuhira/Desktop/Spectral/informed-domains-v2.json', { encoding: 'utf8' });
  
      stream.pipe(parser);
  
      const results = [];
      parser.on('data', (data) => {
        results.push(data);
      });
  
      parser.on('end', () => {
        resolve(results);
        if (results[results.length-1].startsWith('#Esto es un ejemplo') || results[results.length-1].startsWith('# Esto es un ejemplo')) {
          console.log("Correct message format.");
          core.setOutput('result', 'success');
        } else {
          core.setOutput('result', 'failure');
          core.setFailed("Incorrect message format.");
        }
      });
  
      parser.on('error', (err) => {
        reject(err);
      });
    */
      } catch (error) {
        core.setFailed(error.message);
      }
    });
  };
  



main();
