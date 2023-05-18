const core = require('@actions/core');
const github = require('@actions/github');

const main = async() => {
   try {
    var  message = core.getInput('message'); //Get the message passed to the action
      var beginning = core.getInput('message_beginning'); //Get the format passed to the action
      var regex = new RegExp("^"+beginning);
      //Check if the message has established format or not
    if (regex.test(message)) {
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
