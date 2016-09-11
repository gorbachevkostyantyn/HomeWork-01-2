



var userList = ['Петя', 'Вася', 'Олег', 'Толя', 'Андрей'];

var userName = prompt('ВВЕДИТЕ ИМЯ ПОЛЬЗОВАТЕЛЯ/INSERT');


if (userList.indexOf(userName)>=0){

alert(userName + ',вы успешно вошли!');

} else {

alert(userName + '   ,ИМЯ ПOЛЬЗОВАТЕЛЯ ВВЕДЕНО НЕВЕРНО!')

}
