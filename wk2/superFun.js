var num;
var dblNum;

num = 656;

function timesTwo (num) {
  return num*2;
  }
  
  dblNum = timesTwo(num);
  
  var numbers;
  
  numbers = [num, dblNum];
  
  for (var i=0;i<numbers.length;i++) {
    timesTwo(numbers[i]);
    }
    
    
    numbers = {};
    
    numbers.num = dblNum;

