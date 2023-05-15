const core = require('@actions/core');
const github = require('@actions/github');

const main = async() => {
    try{
        const msg = core.getInput('message');
        const regex= /^#[a-zA-Z]+$/;
    
        if(regex.test(msg)){
            core.setOutput('Message OK');
        }else{
            core.setFailed("Incorrect comment format");
    
        }

    }catch(error){
        core.setFailed(error.message);
    }

}

main();