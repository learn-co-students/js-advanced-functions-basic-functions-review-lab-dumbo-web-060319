// Your code here
function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(string = "*"){
  return function(adjective = "special"){
    return `You are ${string}${adjective}${string}!`
  }
}

const Calculator = {
  add: function(){
    return 1 + 3
  },

  subtract: function(){
    return 1 - 3 
  },

  multiply: function(){
    return 1 * 3
  },

  divide: function(){
    return 10 / 5
  }
}

const actionApplyer = (a, array) => {
  array.forEach(el => a = el(a))
  return a
}