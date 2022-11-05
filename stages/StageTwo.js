const { slackUsername } = require('../variables.js');
const { getResponse } = require('../services/openAi.js');

const stageTwoRequest = async (req, res) => {
    const body = req.body
    let result;
    const {operation_type, x, y} = body;

    if(operation_type == ''){
        return res.status(400).json({message: "operation type not provided"});
    }

    const addition = ['addition', 'plus', '+', 'add'];
    const subtraction = ['subtraction', 'minus', '-', 'remove', 'subtract'];
    const multiplication = ['multiplication', 'multiply', '*', 'x', 'times'];

    if(addition.includes(operation_type)){
        result = x + y;
    }else if(subtraction.includes(operation_type)){
        result = x - y;
    }else if(multiplication.includes(operation_type)){
        result = x * y;
    }else{
        result = await getResponse(operation_type);
    }
    return res.status(200).json({slackUsername, result, operation_type});
}

module.exports = {
    stageTwoRequest
}