// Debugging in JS: Inspect page >> Console. equivalent of pry.

// console.log is the equivalent of puts in Ruby

// Debugger: debugger is key word in your funciton

var multiplyBy = function(inputMultiplier){
  for(i = 0; i <= 5; i++ ){
    console.log(i * inputMultiplier)
    debugger;
  };
};