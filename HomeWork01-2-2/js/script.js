var x = prompt('ВВЕДИТЕ ВОЗВОДИМОЕ ЧИСЛО/INSERT');

var n = prompt('ВВЕДИТЕ СТЕПЕНЬ/INSERT');

if (n < 0) {
  alert('Степень ' + n +
    ' не поддерживается, введите целое число'
  );

} else {
  console.log( pow (x, n) ) ;
}

function pow(x, n) {
  var result = 1;

    for (var i = 0;  i < n; i++) {
    result *= x;
  }

  return result;
}




