const { slackUsername } = require('../variables.js');

const stageOneRequest = (req, res) => {
    const backend = true;
    const age = 25;
    const bio = 'I`m a graduate of Microbiology with programming skills. I have been designing and creating websites since 2021. I develop web applications with tools such as NodeJs where i use framework like expressJs, adonisJs and PHP where  use framework like Laravel. Finding solutions to challenges, and focused on customer satisfaction.';

    return res.status(200).json({
        slackUsername, backend, age, bio
    })
};

module.exports = {
    stageOneRequest
}

