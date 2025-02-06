//

function task_1() {
	function accepts(a, b) {
		if (a < b) {
			return -1;
		} else if (a > b) {
			return 1;
		} else if (a == b) {
			return 0;
		} else {
			return 'Ошибка';
		}
	}
	let x = +prompt('Введите первое число ')
	let y = +prompt('Введите второе число ')

	alert(accepts(x, y));
	console.log(accepts(x, y));
}

task_1();

//

function task_2() {
	function factorial(n) {
		if (n == 1) {
			return 1;
		}
		return n * factorial(n - 1);
	}
	
	let x = 1
	do {
		x = Math.trunc(+prompt('Для вычисления факториала введите положительное число от 1: '))
	} while (x < 1)
	alert(factorial(x));
	console.log(factorial(x));
}

task_2();

//

function task_3() {
	function take(a, b, c) {
		return a * 100 + b * 10 + c
	}

	let x = 0
	let y = 0
	let z = 0
	do {
		x = Math.trunc(Math.abs(+prompt('Введите первое число: ')))
		y = Math.trunc(Math.abs(+prompt('Введите второе число: ')))
		z = Math.trunc(Math.abs(+prompt('Введите третье число: ')))
	} while (x > 9 || y > 9 || z > 9);
	
	alert(take(x, y, z))
	console.log(take(x, y, z));
}

task_3();

//

function task_4() {
	function square(length, width = length) {
		return length * width
	}
	
	let length = parseFloat(prompt('Введите длину: '));

	if (isNaN(length)) {
		alert('Введите корректное число для длины. ');
		this.reset();
	} else {
		let widthInput = prompt('Введите ширину (если это квадрат, оставьте поле пустым): ')
		let width = widthInput === "" ? length : parseFloat(widthInput)

		if (isNaN(width)) {
			alert('Введите корректное число для ширины. ');
			this.reset();
		} else {
			let area = square(length, width)

			alert('Площадь = ' + area)
			console.log('Площадь = ' + area);
		}
	}
}

task_4();

//

function task_5() {
	function isPerfectNumber(num) {
		if (num < 1) return false;

		let sum = 0
		for (let i = 1; i < num; i++) {
			if (num % i === 0) {
				sum += i
			}
		}
		if (sum == num) {
			return "Это совершенное число!"
		}
		return "Это не совершенное число!"
	}

	let x = Math.trunc(+prompt('Введите число: '))
	alert(isPerfectNumber(x))
	console.log(isPerfectNumber(x));
}

task_5();

//

function task_6() {
	function isPerfectNumber(num) {
		if (num < 1) return false;

		let sum = 0
		for (let i = 1; i <= num / 2; i++) {
			if (num % i === 0) {
				sum += i
			}
		}
		return sum === num
	}

	function rangePerfectNumber(min, max) {
		if (min > max) {
			alert('Минимальное значение не должно быть больше максимального')
			console.log('Минимальное значение не должно быть больше максимального');
			return
		}

		let perfectNumbers = [];

		for (let i = min; i <= max; i++) {
			if (isPerfectNumber(i)) {
				perfectNumbers.push(i)
			}
		}

		if (perfectNumbers.length === 0) {
			alert('В заданном диапазоне совершенных чисел НЕТ! ')
			console.log('В заданном диапазоне совершенных чисел НЕТ! ');
		} else {
			alert(`Совершенные числа в диапозоне: ${perfectNumbers.join(", ")}`)
			console.log(`Совершенные числа в диапозоне: ${perfectNumbers.join(", ")}`);
		}
	}
	
	let userMin = parseInt(prompt('Введите минимальное значение диапазона: '));
	let userMax = parseInt(prompt('Введите максимальное значение диапазона: '));

	if (isNaN(userMin) || isNaN(userMax)) {
		alert('Введите корректные числа!')
		console.log('Введите корректные числа!');
	} else {
		rangePerfectNumber(userMin, userMax)
	}
}

task_6();

//

function task_7() {
	function time(hours, minutes = 0, seconds = 0) {
		if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
			return "Некорректные данные. Пожалуйста, введите числа!"
		}

		if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
			return "Некорректное время. Часы должны быть от 0 до 23, минуты и секунды - от 0 до 59"
		}

		const formattedHours = String(hours).padStart(2, '0')
		const formattedMinutes = String(minutes).padStart(2, '0')
		const formattedSeconds = String(seconds).padStart(2, '0')

		return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
	}

	let x = Math.abs(+prompt('Введите часы от 0 до 23: '))
	let y = Math.abs(+prompt('Введите минуты от 0 до 59: '))
	let z = Math.abs(+prompt('Введите секунды от 0 до 59: '))

	alert('Текущее время: ' + time(x, y, z));
	console.log('Текущее время: ' + time(x, y, z));
}

task_7();

//

function task_8() {
	function timeToSeconds(hours = 0, minutes = 0, seconds = 0) {
		if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
			return "Некорректные данные. Пожалуйста, введите числа!"
		}

		if (minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
			return "Некорректное время. Минуты и секунды должны быть от 0 до 59"
		}

		const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
		return totalSeconds
	}

	let x = Math.abs(+prompt('Введите часы от 0 до 23: '))
	let y = Math.abs(+prompt('Введите минуты от 0 до 59: '))
	let z = Math.abs(+prompt('Введите секунды от 0 до 59: '))

	alert('Ваше время в секундах составляет: ' + timeToSeconds(x, y, z))
	console.log('Ваше время в секундах составляет: ' + timeToSeconds(x, y, z));
}

task_8();

//

function task_9() {
	function secondsToTime(a) {
		let hours = Math.trunc(a / 3600)
		let minutes = Math.trunc((a - hours * 3600) / 60)
		let seconds = Math.trunc(a - hours * 3600 - minutes * 60)

		if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
			return "Некорректные данные. Пожалуйста, введите числа!"
		}

		const formattedHours = String(hours).padStart(2, '0')
		const formattedMinutes = String(minutes).padStart(2, '0')
		const formattedSeconds = String(seconds).padStart(2, '0')

		return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
	}

	let inputSeconds = Math.trunc(+prompt('Введите секунды для перевода их в текущее время: '))

	alert(secondsToTime(inputSeconds))
	console.log(secondsToTime(inputSeconds));
}

task_9();

//