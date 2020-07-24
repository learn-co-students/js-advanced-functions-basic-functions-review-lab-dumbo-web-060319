function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*') {
    
    return function(compliment='special') {
        return `You are ${flair}${compliment}${flair}!`
    }
}

const Calculator = {
    add: function (a, b) {
        return a + b
    },
    subtract: function (a, b) {
        return a - b
    },
    multiply: function (a, b) {
        return a * b
    },
    divide: function (a, b) {
        return a / b
    }
}

function actionApplyer(int, array) {
    let funcEval = null; 
    if(array.length == 0) {
        return int;
    } else {
        for (let i = 0; i < array.length; i++) {
            const func = array[i];
            if (funcEval === null) {
                funcEval = func(int)
            } else {
                funcEval = func(funcEval)
            }
        }
    }

    return funcEval;
}