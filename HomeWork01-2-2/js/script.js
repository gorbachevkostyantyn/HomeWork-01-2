
if (n == 0) {
    result = 1;
} else {
    var modn = n > 0 ? n : -1 * n;
    for (var i = 1;  i < modn; i++) {
        result *= x;
   }
    if (n < 0) {
        result = 1 / result;
    }
}

function pow(x, n) {
  var result = x;

    for (var i = 1;  i < n; i++) {
    result *= x;
  }

  return result;
}

var x = prompt('ВВЕДИТЕ ВОЗВОДИМОЕ ЧИСЛО/INSERT');

var n = prompt('ВВЕДИТЕ СТЕПЕНЬ/INSERT');

if (x != parseInt(x)) {
  alert('Число ' + x +
    ' не поддерживается, введите целое число'
  );
}
else if (n != parseInt(n)) {
  alert('Степень ' + n +
    ' не поддерживается, введите целую степень, '
  );
} else {
    console.log( pow(x, n) );
} 




