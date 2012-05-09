var assert = function(expression) {
  if (eval(expression) === true) {   
    console.log("PASSED: " + expression);
  } else {
    throw "An assertion failed: " + expression;
  }
}

var testSuite = function() {  
  assert("getRow(1) === '007090058'");
  assert("r1.indexOf('1') === -1");
  assert("r1.indexOf('2') === -1");
  assert("r1.indexOf('3') === -1");
  assert("r1.indexOf('4') === -1");
  assert("r1.indexOf('5') ===  7");
  assert("r1.indexOf('6') === -1");
  assert("r1.indexOf('7') ===  2");
  assert("r1.indexOf('8') ===  8");
  assert("r1.indexOf('9') ===  4");

  assert("r1.indexOf('1') !== 2");
  assert("r1.indexOf('2') !== 2");
  assert("r1.indexOf('3') !== 2");
  assert("r1.indexOf('4') !== 2");

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

