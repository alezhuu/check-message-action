const core = require('@actions/core');
const github = require('@actions/github');

const main = async() => {
   try {
    let  message = core.getInput('message'); //Get the message passed to the action
      //Check if the message has established format or not
    if (message.startsWith('#Esto es un ejemplo')) {
      console.log("Correct message format.");
      core.setOutput('result', 'success');
    } else {
      core.setOutput('result', 'failure');
      core.setFailed("Incorrect message format.");
    }
     
  } catch (error) {
    core.setFailed(error.message); //Catching any errors
  }

}

main();
