const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

const main = async() => {
   try {
    let  message = core.getInput('pull_message');
      /*
    if (message.startsWith('#Esto es un ejemplo') || message.startsWith('# Esto es un ejemplo')) {
      console.log("Correct message format.");
      core.setOutput('result', 'success');
    } else {
      core.setOutput('result', 'failure');
      core.setFailed("Incorrect message format.");
    }*/
      const keys=Object.keys(message);
      console.log(keys);
  } catch (error) {
    core.setFailed(error.message);
  }

}

main();
