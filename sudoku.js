var assert = function(expression) {
  if (eval(expression) !== true) {   
    throw "An assertion failed: " + expression;
  } else {
    console.log("PASSED: " + expression);
  }
}

var board = "007090058090500000008306709600040231000162000712050004201907500000001080870030400";



assert("1 == 1");
assert("1 == 2");

