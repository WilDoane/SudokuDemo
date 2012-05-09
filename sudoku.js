var assert = function(expression) {
  if (eval(expression) === true) {   
    console.log("PASSED: " + expression);
  } else {
    console.log( "*** FAILED: " + expression);
  }
}

var testSuite = function() {  
  assert("getRow(1) === '007090058'");
  
  assert("getRow(1).indexOf('1') === -1");
  assert("getRow(1).indexOf('2') === -1");
  assert("getRow(1).indexOf('3') === -1");
  assert("getRow(1).indexOf('4') === -1");
  assert("getRow(1).indexOf('5') ===  7");
  assert("getRow(1).indexOf('6') === -1");
  assert("getRow(1).indexOf('7') ===  2");
  assert("getRow(1).indexOf('8') ===  8");
  assert("getRow(1).indexOf('9') ===  4");


  assert("getRow(1).indexOf('1') !== 2");
  assert("getRow(1).indexOf('2') !== 2");
  assert("getRow(1).indexOf('3') !== 2");
  assert("getRow(1).indexOf('4') !== 2");

  assert("isUsed(1, 1) === false");
  assert("isUsed(1, 7) === true ");
  assert("isUsed(1, 5) === true ");
}





var getRow = function(rowNumber) {
  /*
    row   startIndex   endIndex
    1      0              8
    2      9             17
    3     18             26
    4     27             35
  
  */
  
  if ( (rowNumber < 1) || (rowNumber > 9) ) {
    throw "rowNumber must be between 1 and 9 inclusive: " + rowNumber;
  }
    
  var startIndex = (rowNumber - 1) * 9;
  var endIndex = startIndex + 9;   //   (rowNumber * 9) - 1;
  
  var rowString = board.substring(startIndex, endIndex);
  
  return rowString;
}

var isUsed = function(rowNumber, digit) {

  if ( (rowNumber < 1) || (rowNumber > 9) ) {
    throw "rowNumber must be between 1 and 9 inclusive: " + rowNumber;
  }

  if ( (digit < 1) || (digit > 9) ) {
    throw "digit must be between 1 and 9 inclusive: " + digit;
  }

  if (getRow(rowNumber).indexOf(digit) >= 0) {
    return true; // is in row
  } else {
    return false; // is not in row
  }
  
}


var board = "007090058090500000008306709600040231000162000712050004201907500000001080870030400";

testSuite();






