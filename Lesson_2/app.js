function task_1() {
	let a = Math.trunc(+prompt('Задайте число, которое будет началом диапазона: '));
	let a1 = a;
	let b;
	do {
		b = Math.trunc(+prompt('Задайте число, которое будет концом диапазона: '));
	} while (a >= b);
	let sum = 0;
	while (a <= b) {
		sum += a;
		a++;
	}
	alert(`В диапазоне от ${a1} до ${b} сумма чисел составляет: ${sum}`);
	console.log(`В диапазоне от ${a1} до ${b} сумма чисел составляет: ${sum}`);
}

task_1();

//

function task_2() {
	let a = Math.abs(+prompt('Введите первое число: '));
	let b = Math.abs(+prompt('Введите второе число: '));
	let divisionOfNumber = 1;
	let i = 1;
	
	while (i <= a && i <= b) {
		if (a % i == 0 && b % i == 0) {
			divisionOfNumber = i
		};
		i++
	};
	alert(`У чисел ${a} и ${b} наибольший общий делитель: ${divisionOfNumber}`);
	console.log(`У чисел ${a} и ${b} наибольший общий делитель: ${divisionOfNumber}`);
}

task_2();

//

function task_3() {
	let a = Math.abs(+prompt('Введите число: '));
	let divisionOfNumber = '';
	let i = 1;

	do {
		if (a % i == 0) {
			divisionOfNumber += i + ', '
		};
		i++
	} while (i <= a);
	alert(`У числа ${a} делители: ${divisionOfNumber}`);
	console.log(`У числа ${a} делители: ${divisionOfNumber}`);
}

task_3();

//

function task_4() {
	let a = Math.abs(+prompt('Введите число: '));
	let counter = 0;

	while (a > 0) {
		a = Math.trunc(a / 10)
		counter++
	};
	alert(`В введенном вами числе ${counter} цифр`);
	console.log(`В введенном вами числе ${counter} цифр`);
}

task_4();

//

function task_5() {
	let positive = 0;
	let negative = 0;
	let nul = 0;
	let even = 0;
	let odd = 0;
	let a = 0;

	let i = 0;

	for (; i < 10; i++) {
		a = +prompt('Введите число: ');
		if (a > 0) {
			positive += 1
		} else if (a < 0) {
			negative += 1
		} else {
			nul += 1
		}
		!(a % 2) ? (even += 1) : (odd +=1)
	}
	alert(`Из 10 введеных чисел: ${positive} положительных, ${negative} отрицательных, ${nul} равных нулю, ${even} четных и ${odd} нечетных`)
	console.log(`Из 10 введеных чисел: ${positive} положительных, ${negative} отрицательных, ${nul} равных нулю, ${even} четных и ${odd} нечетных`);
}

task_5();

//

function task_6() {
	let a = 0;
	let b = 0;
	let result = true;
	let symbol = "";

	do {
		a = +prompt('Введите первое число: ');
		symbol = prompt('Введите знак (*, /, +, -): ');
		b = +prompt('Введите второе число: ');
		switch (symbol) {
			case "+":
				alert(`${a} ${symbol} ${b} = ${a + b}`);
				break;
			case "-":
				alert(`${a} ${symbol} ${b} = ${a - b}`);
				break;
			case "*":
				alert(`${a} ${symbol} ${b} = ${a * b}`);
				break;
			case "/":
				alert(`${a} ${symbol} ${b} = ${a / b}`);
				break;
			default:
				alert(`Вы не ввели знак!`);
				break;
		}
		result = confirm('Хотите еще один пример?');
	} while (result == true);
}

task_6();

//

function task_7() {
	let number = Math.abs(Math.trunc(+prompt("Введите число, которое будем сдвигать: ")));
	let jump = Math.abs(Math.trunc(+prompt("Введите, на сколько цифр будем сдвигать: ")));
	let array = [];
	let newNumber = number;

	while (number > 0) {
		array.unshift(number % 10)
		number = Math.trunc(number / 10);
	}; // разбили число по рядам и вписали в массив
	
	let newJump = jump
	jump = jump % array.length
	let arrJumpLeft1 = [];
	let arrJumpLeft2 = [];
	let arrJumpRight1 = [];
	let arrJumpRight2 = [];
	let i = 0;

	for (; i < array.length; i++) {
		if (i < jump) {
			arrJumpLeft1[i] = array[i]
		} else {
			arrJumpLeft2[i] = array[i]
		}
		if (i < array.length - jump) {
			arrJumpRight1[i] = array[i]
		} else {
			arrJumpRight2[i] = array[i]
		}
	};
	alert(`Сдвиг вправо "${newNumber}" на ${newJump} цифр(ы): ` + arrJumpRight2.concat(arrJumpRight1).join(""));
	console.log(`Сдвиг вправо "${newNumber}" на ${newJump} цифр(ы): ` + arrJumpRight2.concat(arrJumpRight1).join(""));
}

task_7();

//

function task_8() {
	let days = [
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота',
		'Воскресенье',
	];
	let i = 0;
	let stop = true;

	while (stop == true) {
		stop = confirm(`${days[i]}. Хотите увидеть следующий день?`)
		i++
		if (i > 6) {
			i = 0
		}
	}
	alert('Вы нажали ОТМЕНА :(')
	console.log('Вы нажали ОТМЕНА :(');
}

task_8();

//

function task_9() {
	let table = '';

	for (let i = 2; i <= 9; i++) {
		for (let k = 1; k <= 10; k++) {
			table += `${i} x ${k} = ` + i * k + ', '
		}
	}
	alert(table)
	console.log(table);
}

task_9();