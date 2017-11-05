var flag = 0;
var counter = '';
var counterArray = [];
var oprArray = [];
var opr = '';
var numberDisplay = document.getElementById('numberDisplay');
var countDisplay = document.getElementById('countDisplay');
var allClear = document.getElementById('allClear');
var zero = document.getElementById('zero');
var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');
var five = document.getElementById('5');
var six = document.getElementById('6');
var seven = document.getElementById('7');
var eight = document.getElementById('8');
var nine = document.getElementById('9');
var dot = document.getElementById('dot');
var divide = document.getElementById('divide');
var multiply = document.getElementById('multiply');
var minus = document.getElementById('minus');
var plus = document.getElementById('plus');
var equal = document.getElementById('equal');
var CE = document.getElementById('CE');

ready();
function ready() {
  zero.addEventListener('click', function() {
    if (flag == 0) {
      return updater(0);
    }
  });
  one.addEventListener('click', function() {
    if (flag == 0) {
      return updater(1);
    }
  });
  two.addEventListener('click', function() {
    if (flag == 0) {
      return updater(2);
    }
  });
  three.addEventListener('click', function() {
    if (flag == 0) {
      return updater(3);
    }
  });
  four.addEventListener('click', function() {
    if (flag == 0) {
      return updater(4);
    }
  });
  five.addEventListener('click', function() {
    if (flag == 0) {
      return updater(5);
    }
  });
  six.addEventListener('click', function() {
    if (flag == 0) {
      return updater(6);
    }
  });
  seven.addEventListener('click', function() {
    if (flag == 0) {
      return updater(7);
    }
  });
  eight.addEventListener('click', function() {
    if (flag == 0) {
      return updater(8);
    }
  });
  nine.addEventListener('click', function() {
    if (flag == 0) {
      return updater(9);
    }
  });
  dot.addEventListener('click', function() {
    if (flag == 0) {
      return updater('.');
    }
  });
  divide.addEventListener('click', function() {
    if (flag == 0) {
      opr = '/';
      return operator(opr);
    }
  });
  multiply.addEventListener('click', function() {
    if (flag == 0) {
      opr = '*';
      return operator(opr);
    }
  });
  minus.addEventListener('click', function() {
    if (flag == 0) {
      opr = '-';
      return operator(opr);
    }
  });
  plus.addEventListener('click', function() {
    if (flag == 0) {
      opr = '+';
      return operator(opr);
    }
  });
  equal.addEventListener('click', function() {
    //
    counterArray.push(Number(counter));
    flag = 1;
    return calculate();
  });
  allClear.addEventListener('click', function() {
    reset();
    flag = 0;
  });
  CE.addEventListener('click', function() {
    return CEClear(counter);
  });
}

function updater(x) {
  counter = counter + x;
  numberDisplay.textContent = counter;
  countDisplay.textContent = countDisplay.textContent + x;
}

function operator(opr) {
  if (counter) {
    counterArray.push(Number(counter));
  }
  numberDisplay.textContent = opr;
  countDisplay.append(opr);
  counterArray.push(opr);
  counter = '';
}

function calculate() {
  counterArray = counterArray.join(' ');
  counter = eval(counterArray);

  numberDisplay.textContent = counter;
  countDisplay.append('=' + numberDisplay.textContent);
}

function reset() {
  numberDisplay.textContent = 0;
  countDisplay.textContent = '';
  counterArray = [];
  oprArray = [];
  counter = '';
}

function CEClear() {
  counterArray.pop();
  var countClone = counterArray.slice(0);
  countDisplay.textContent = countClone.join('');
  counter = '';
}
