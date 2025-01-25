// 1 задание :

function request() {
	let userName = prompt('Введите ваше имя!');
	alert('Привет, ' + userName + '!');

	console.log('Привет, ' + userName + '!');
}

request();


// 2 задание :

function date() {
	const birth = Number(prompt('В каком году ты родился? '));
	const year = Number(prompt('Какой сейчас год? '));
	alert('В этом году Вам ' + (year - birth) + ' лет');

	console.log('В этом году Вам ' + (year - birth) + ' лет');
}

date();


// 3 задание :

function length() {
	const length = Number(prompt('Введите длину стороны квадрата: '));
	alert('Периметр квадрата равен: ' + 4 * length);

	console.log('Периметр квадрата равен: ' + 4 * length);
}

length();


// 4 задание :

function circle() {
	const radius = Number(prompt('Введите радиус окружности: '));
	const square = Math.floor(Math.PI * radius ** 2); // добавил округление числа
	alert('Площадь окружности: '+ square);

	console.log('Площадь окружности: '+ square);
}

circle();


// 5 задание :

function distance() {
	const distance = Number(prompt("Введите расстояние между двумя городами в км: "));
	const time = Number(prompt('За сколько часов вы хотите добраться: '));
	alert('Чтобы успеть вовремя, Вам необходимо двигаться ' + distance / time + ' км/ч');

	console.log('Чтобы успеть вовремя, Вам необходимо двигаться ' + distance / time + ' км/ч');
}

distance();


// 6 задание :

function value() {
	const rate = Number(prompt('Введите курс доллара к евро: '));
	const dollar = Number(prompt('Введите количество долларов для обмена: '));
	alert('При обмене вы получите ' + dollar * rate + ' евро');

	console.log('При обмене вы получите ' + dollar * rate + ' евро');
}

value();


// 7 задание :

function capacity() {
	const memory = 1024;
	const drive = Number(prompt('Введите объем флешки в ГБ: '));
	const size = Math.trunc(drive * 1000 / memory); // добавил округление до целого числа

	if (size < 0) {
		alert('Память заполнена');

		console.log('Память заполнена');
	}
	else {
		alert('На флешку помещается ' + size + ' файлов объемом 820 МБ');

		console.log('На флешку помещается ' + size + ' файлов объемом 820 МБ');
	}

}

capacity();


// 8 задание :

function wallet() {
	let sum = prompt('Cколько у вас денег? ');
	let price = prompt('Цена одной шоколадки? ');
	sum = Number(sum);
	price = Number(price);
	let sell = Math.trunc(sum / price);
	let change = sum - price * sell;
	change = Number(change);
	if (sell < 1) {
		alert('У Вас нет денег');

		console.log('У Вас нет денег');
	}
	else {
		alert('Вы получите ' + sell + ' шоколадки и сдачу ' + (sum - price * sell) + ' рублей ');

		console.log('Вы получите ' + sell + ' шоколадки и сдачу ' + (sum - price * sell) + ' рублей ');
	}
}

wallet();


// 9 задание :

function number() {
	numb = prompt('Введите трехзначное число: ');
	const a = Math.floor(numb % 10);
	const b = Math.floor((numb - a) / 10 % 10);
	const c = Math.floor((numb - a - b) / 100 % 10);
	alert('Итог: ' + (a * 100 + b * 10 + c));

	console.log('Итог: ' + (a * 100 + b * 10 + c));
}

number();


// 10 задание :

function even() {
	const a = prompt('Введите число для проверки на четность: ');
	a = Number(a);
	alert((parseInt(a) % 2 == 0) ? "ЧЁТНОЕ" : "НЕЧЁТНОЕ");

	console.log((parseInt(a) % 2 == 0) ? "ЧЁТНОЕ" : "НЕЧЁТНОЕ");
}

even();