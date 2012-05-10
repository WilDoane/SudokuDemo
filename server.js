var f = function(upperBound) {
  var result = 0;

  var i = 0;
  while (i <= upperBound) {
    result = result + i;
    
    i = i + 1;
  }

  console.log(result);
}

var j = 10;

while (j <= 100) {
  f(j);
  
  j = j + 1;
}