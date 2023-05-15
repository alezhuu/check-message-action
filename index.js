const core = require('@actions/core');
const github = require('@actions/github');

const main = async() => {
     try {
    const event = process.env.GITHUB_EVENT_NAME;
    let message;

    if (event === 'push') {
      message = core.getInput('push_message') || '';
    } else if (event === 'pull_request') {
      message = core.getInput('pull_message') || '';
    } else {
      throw new Error(`Unsupported event: ${event}`);
    }

    if (message.startsWith('#')) {
      console.log("Message starts with '#'.");
      core.setOutput('result', 'success');
    } else {
      console.log("Message does not start with '#'.");
      core.setOutput('result', 'failure');
    }
  } catch (error) {
    core.setFailed(error.message);
  }

}

main();
