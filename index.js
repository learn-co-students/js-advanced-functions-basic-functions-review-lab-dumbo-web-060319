// Your code here

function saturdayFun(param="roller-skate")
{
    let ans = `This Saturday, I want to ${param}!`;
    return ans;
}

function mondayWork(param = "go to the office")
{
    let ans = `This Monday, I will ${param}.`
    return ans
}

function wrapAdjective(str = "*")
{
    return function(param = "special")
    {
        return `You are ${str}${param}${str}!`
    }
}

let Calculator = {}

Calculator.add = function()
{
    return 1+3;
}
Calculator.subtract = function()
{
    return 1-3;
}
Calculator.multiply = function()
{
    return 1*3;
}
Calculator.divide = function()
{
    return 10/5;
}

function actionApplyer(start,arr)
{
    if (arr.length == 0)
    {
        return start;
    }
    else 
    {
        let result = start;
        for (let i=0; i < arr.length; i++)
        {
            let theFn = arr[i]
            result = theFn(result);
            
        }
        return result;
    }
}