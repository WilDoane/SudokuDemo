var assert = function(expression) {
  if (eval(expression) === true) {   
    console.log("PASSED: " + expression);
  } else {
    throw "An assertion failed: " + expression;
  }
}

var getRow = function(rowNumber) {
  /*
    row   startIndex   endIndex
    1      0              8
    2      9             17
    3     18             26
    4     27             35
  
  */
  
  var startIndex = (rowNumber - 1) * 9;
  var endIndex = startIndex + 9;   //   (rowNumber * 9) - 1;
  
  var rowString = board.substring(startIndex, endIndex);
  
  return rowString;
}


var board = "007090058090500000008306709600040231000162000712050004201907500000001080870030400";

