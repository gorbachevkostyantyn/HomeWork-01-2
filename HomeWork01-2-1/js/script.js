


var userList = ['Петя', 'Вася', 'Олег', 'Толя', 'Андрей'];

var userName = prompt('ВВЕДИТЕ ИМЯ ПОЛЬЗОВАТЕЛЯ/INSERT');

for (var i = 0; i < 5; i++) 

if (userList[i] === userName) {

alert(userName + ',вы успешно вошли!');break; 

} else {

alert(userName + ',ИМЯ ПOЛЬЗОВАТЕЛЯ ВВЕДЕНО НЕВЕРНО!'+ userList[i] );

}





