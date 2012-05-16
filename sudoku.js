var util = require('util');

var assert = function(expression) {
  if ( eval(expression) === true ) {   
    console.log("PASSED: " + expression);
  } else {
    console.log( "*** FAILED: " + expression);
  }
}

var testSuite = function() {  
  board = "007090058090500000008306709600040231000162000712050004201907500000001080870030400";
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

  assert("cell(1, 1) === 1");
  assert("cell(1, 2) === 1");
  assert("cell(1, 3) === 1");
  assert("cell(2, 1) === 1");
  assert("cell(2, 2) === 1");
  assert("cell(2, 3) === 1");
  assert("cell(3, 1) === 1");
  assert("cell(3, 2) === 1");
  assert("cell(3, 3) === 1");

  assert("cell(4, 1) === 4");
  assert("cell(4, 2) === 4");
  assert("cell(4, 3) === 4");
  assert("cell(5, 1) === 4");
  assert("cell(5, 2) === 4");
  assert("cell(5, 3) === 4");
  assert("cell(6, 1) === 4");
  assert("cell(6, 2) === 4");
  assert("cell(6, 3) === 4");

  assert("cell(9, 9) === 9");


  assert("isUsedInRow(1, 1, board) === false");
  assert("isUsedInRow(1, 2, board) === false ");
  assert("isUsedInRow(1, 3, board) === false ");
  assert("isUsedInRow(1, 4, board) === false");
  assert("isUsedInRow(1, 5, board) === true ");
  assert("isUsedInRow(1, 6, board) === false ");
  assert("isUsedInRow(1, 7, board) === true");
  assert("isUsedInRow(1, 8, board) === true ");
  assert("isUsedInRow(1, 9, board) === true ");
  
  assert("isUsedInColumn(1, 1, board) === false");
  assert("isUsedInColumn(1, 2, board) === true ");
  assert("isUsedInColumn(1, 3, board) === false ");
  assert("isUsedInColumn(1, 4, board) === false");
  assert("isUsedInColumn(1, 5, board) === false ");
  assert("isUsedInColumn(1, 6, board) === true ");
  assert("isUsedInColumn(1, 7, board) === true");
  assert("isUsedInColumn(1, 8, board) === true ");
  assert("isUsedInColumn(1, 9, board) === false ");
  
  
  
  assert("spliceString('abcde', 'X', 0) === 'Xbcde'");
  assert("spliceString('abcde', 'X', 1) === 'aXcde'");
  assert("spliceString('abcde', 'X', 2) === 'abXde'");


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

var isDigitValid = function(digit) {
  if ( (digit < 1) || (digit > 9) ) {
    throw "digit must be between 1 and 9 inclusive: " + digit;
  } 
}


var isUsedInRow = function(rowNumber, digit, trialBoard) {

  if ( (rowNumber < 1) || (rowNumber > 9) ) {
    throw "rowNumber must be between 1 and 9 inclusive: " + rowNumber;
  }

  isDigitValid(digit);

  var result = false;
  
  for (var c = 1; c <= 9; c++) {
    if( get(rowNumber, c, trialBoard) === digit.toString() ) {
      result = true;
    }
  }
  
  
  return result;
  
}


var notUsedInRow = function(rowNumber, digit, trialBoard) {
  return !isUsedInRow(rowNumber, digit, trialBoard);
}

var isUsedInColumn = function(colNumber, digit, trialBoard) {
  if ( (colNumber < 1) || (colNumber > 9) ) {
    throw "colNumber must be between 1 and 9 inclusive: " + colNumber;
  }

  isDigitValid(digit);

  var result = false;
  
  for (var r = 1; r <= 9; r++) {
    if( get(r, colNumber, trialBoard) === digit.toString() ) {
      result = true;
    }
  }
  
  
  return result;
}

var notUsedInColumn = function(colNumber, digit, trialBoard) {
  return !isUsedInColumn(colNumber, digit, trialBoard);
}

var cell = function(r, c) {
  var result = 0;
  
  if ( (1 <= r) && (r <= 9) ) {
    if ( (1 <= c) && (c <= 3) ) result = 1;
    if ( (4 <= c) && (c <= 6) ) result = 2;
    if ( (7 <= c) && (c <= 9) ) result = 3;
  }

  if ( (4 <= r) && (r <= 6) ) {
    if ( (1 <= c) && (c <= 3) ) result = 4;
    if ( (4 <= c) && (c <= 6) ) result = 5;
    if ( (7 <= c) && (c <= 9) ) result = 6;
  }

  if ( (7 <= r) && (r <= 9) ) {
    if ( (1 <= c) && (c <= 3) ) result = 7;
    if ( (4 <= c) && (c <= 6) ) result = 8;
    if ( (7 <= c) && (c <= 9) ) result = 9;
  }
  
  return result;
}

var isUsedInCell = function(rowNumber, colNumber, digit, trialBoard) {
  var result = false;
  
  for (var r = 1; r <= 9; r++) {
    for (var c = 1; c <= 9; c++) {
      if ( cell(r, c) === cell(rowNumber, colNumber) ) {
        if ( get(r, c, trialBoard) === digit.toString() ) {
          result = true;
        }
      }
    }
  }
  return result;
}


var notUsedInCell = function(rowNumber, colNumber, digit, trialBoard) {
  return !isUsedInCell(rowNumber, colNumber, digit, trialBoard);
}

/*

  Array index numbers (i)
   r   c 1  2  3    4  5  6    7  8  9
   1     0  1  2    3  4  5    6  7  8
   2     9 10 11   12 13 14   15 16 17
   3    18 19 20   21 22 23   24 25 26
       
   4    27 28 29   30 31 32   33 34 35
   5    36 37 38   39 40 41   42 43 44
   6    45 46 47   48 49 50   51 52 53
       
   7    54 55 56   57 58 59   60 61 62
   8    63 64 65   66 67 68   69 70 71
   9    72 73 74   75 76 77   78 79 80

   r = floor(i / 9) + 1
   c = (i % 9) + 1

   i = ((r - 1) * 9) + (c - 1)

*/

var get = function(r, c, trialBoard) {
  var i = ( (r - 1) * 9 ) + (c - 1);
  return trialBoard[i];
}

var set = function(r, c, v, trialBoard) {
  var i = ( (r - 1) * 9 ) + (c - 1);
  return spliceString(trialBoard, v.toString(), i);  
}

var spliceString = function(str, char, pos) {
  /*
     abcde, X, 2  --> abXde
  */
  
  return str.substring(0, pos) + char + str.substring(pos + 1);
  
}

var isAvailable = function(r, c, guess, trialBoard) {
  return notUsedInRow(r, guess, trialBoard) && 
         notUsedInColumn(c, guess, trialBoard) &&
         notUsedInCell(r, c, guess, trialBoard);
}

var findSolution = function(trialBoard) {
  outputBoard(trialBoard);
  
  for (var r = 1; r <= 9; r++) {
    for (var c = 1; c <= 9; c++) {
      if (get(r, c, trialBoard) === '0') {
        //util.print("Working on blank at " + r + ", " + c + "\n");
        for (var guess = 1; guess <= 9; guess++) {
          
          if ( isAvailable(r, c, guess, trialBoard) === true ) {
            //util.print( r + ", " + c + " could be a(n) " + guess + "\n" );
            var newBoard = set(r, c, guess, trialBoard);
            findSolution(newBoard);
            //util.print( "\n" + guess + " fell through due to contradiction. Now back at: " + r + ", " + c + "\n" )
          } else if (guess >= 9) {
            return;
          }
          
        }
        if (guess === 10) {
          return;
        }
      }
    }
  }
}

var outputBoard = function(b) {
  for (var r = 1; r <= 9; r++) {
    for (var c = 1; c <= 9; c++) {
      util.print( get(r, c, b) );
      if (c%3 === 0) {
        util.print("  ");
      }
    }
    util.print("\n");
    if (r%3 === 0) {
      util.print("\n");
    }
  }
  util.print("\n----------\n");
  
}

var board = "007090058090500000008306709600040231000162000712050004201907500000001080870030400";

testSuite();

board = "013000500000703410790080300200810604009506800106034005008040057075308000001000280";
findSolution(board);

