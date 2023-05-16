const core = require('@actions/core');
const github = require('@actions/github');

const main = async() => {
   try {
    let  message = core.getInput('pull_info');
         console.log(message);
    if (message.startsWith('#Esto es un ejemplo') || message.startsWith('# Esto es un ejemplo')) {
      console.log("Correct message format.");
      core.setOutput('result', 'success');
    } else {
      core.setOutput('result', 'failure');
      core.setFailed("Incorrect message format.");
    }
     
  } catch (error) {
    core.setFailed(error.message);
  }

}

main();
