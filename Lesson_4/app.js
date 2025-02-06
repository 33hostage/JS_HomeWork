//

function task_1() {
	let shoppingList = [
		{ name: 'Хлеб', quantity: 1, purchased: true },
		{ name: 'ПепсиКола', quantity: 2, purchased: false },
		{ name: 'Чипсы', quantity: 1, purchased: false },
		{ name: 'Яблоки', quantity: 5, purchased: true },
	];

	function displayShoppingList() {
		const sortedList = shoppingList.sort((a, b) => a.purchased - b.purchased)

		sortedList.forEach(item => {
			const status = item.purchased ? 'Куплено' : 'Не куплено'
			console.log(`${item.name} (${item.quantity} шт.) - ${status}`);
		})
	}

	function addToShoppingList(name, quantity) {
		const existingProduct = shoppingList.find(item => item.name === name)

		if (existingProduct) {
			existingProduct.quantity += quantity
			console.log(`Количество продукта "${name}" увеличено на ${quantity}`);
		} else {
			shoppingList.push({ name, quantity, purchased: false })
			console.log(`Продукт "${name}" добавлен в список`);
		}
	}

	function purchaseProduct(name) {
		const product = shoppingList.find(item => item.name === name)

		if (product) {
			product.purchased = true
			console.log(`Продукт "${name}" отмечен как купленный`);
		} else {
			console.log(`Продукт "${name}" не найден в списке`);
		}
	}

	console.log('Начальный список:');
	displayShoppingList();

	console.log('---------------');

	addToShoppingList('Кириешки', 1);
	addToShoppingList('Молоко', 2);
	addToShoppingList('Яблоки', 7);

	purchaseProduct('ПепсиКола');
	purchaseProduct('Чипсы');

	console.log('---------------');

	console.log('Обновленный список:');
	displayShoppingList();
}

task_1();

//

function task_2() {
	let check = [
		{ name: 'Хлеб', quantity: 1, price: 30},
		{ name: 'ПепсиКола', quantity: 2, price: 120 },
		{ name: 'Чипсы', quantity: 1, price: 100 },
		{ name: 'Молоко', quantity: 3, price: 90 },
	];

	function printСheck() {
		console.log('Чек: ');
		console.log('-------------');
		check.forEach(item => {
			const totalPrice = item.quantity * item.price
			console.log(`${item.name} - ${item.quantity} шт. x ${item.price} руб. = ${totalPrice} руб.`);
		})
		console.log('-------------');
	}

	function calculateTotalAmount() {
		return check.reduce((total, item) => total + item.quantity * item.price, 0)
	}

	function getMostPrice() {
		let mostPrice = check[0]
		check.forEach(item => {
			const totalPrice = item.quantity * item.price
			if (totalPrice > mostPrice.quantity * mostPrice.price) {
				mostPrice = item
			}
		})
		return mostPrice
	}

	function calculateAveragePrice() {
		const totalAmount = calculateTotalAmount()
		const totalItems = check.reduce((total, item) => total + item.quantity, 0)
		return totalAmount / totalItems
	}

	printСheck();

	const totalAmount = calculateTotalAmount()
	console.log(`Общая сумма покупки ${totalAmount} руб.`);

	const mostPrice = getMostPrice()
	console.log(`Самая дорогая покупка: ${mostPrice.name} (${mostPrice.quantity} шт. x ${mostPrice.price} руб.)`);
	
	const averagePrice = calculateAveragePrice()
	console.log(`Средняя стоимость одного товара: ${averagePrice.toFixed(2)} руб.`);
}

task_2();

//

function task_3() {
	let cssStyles = [
		{ name: 'color', value: 'red' },
		{ name: 'font-size', value: '28px' },
		{ name: 'text-align', value: 'center' },
		{ name: 'text-decoration', value: 'line-through' },
		{ name: 'font-family', value: 'Arial, sans-serif' },
	];

	function printStyled(styles, text) {
		let styleText = styles.map(style => `${style.name}: ${style.value};`).join(" ")
		document.write(`<p style="${styleText}">${text}</p>`)
	}

	printStyled(cssStyles, 'Hello, CSS')
}

task_3();

//

function task_4() {
	let classrooms = [
		{ name: 'Аудитория 101', seats: 20, faculty: 'Математика' },
		{ name: 'Аудитория 102', seats: 15, faculty: 'Информационные технологии' },
		{ name: 'Аудитория 103', seats: 12, faculty: 'Физика' },
		{ name: 'Аудитория 104', seats: 17, faculty: 'Дизайн' },
		{ name: 'Аудитория 105', seats: 11, faculty: 'Право' },
	];

	function displayClassrooms() {
		console.log('Все аудитории: ');
		classrooms.forEach(classroom => {
			console.log(`${classroom.name}, мест: ${classroom.seats}, факультет: ${classroom.faculty}`);
		})
	}

	function displayClassroomsByFaculty(faculty) {
		console.log(`Аудитории для факультета "${faculty}":`);
		const filteredClassrooms = classrooms.filter(classroom => classroom.faculty === faculty)
		if (filteredClassrooms.length === 0) {
			console.log('Аудитории не найдены.');
		} else {
			filteredClassrooms.forEach(classroom => {
				console.log(`${classroom.name}, мест: ${classroom.seats}`);
			})
		}
	}

	function displayClassroomsForGroup(group) {
		console.log(`Аудитории, подходящие для группы "${group.name}":`);
		const suitableClassrooms = classrooms.filter(classroom => classroom.faculty === group.faculty && classroom.seats >= group.students)
		if (suitableClassrooms.length === 0) {
			console.log('Подходящие аудитории не найдены.');
		} else {
			suitableClassrooms.forEach(classroom => {
				console.log(`${classroom.name}, мест: ${classroom.seats}`);
			})
		}
	}

	function sortClassroomsBySeats() {
		return classrooms.slice().sort((a, b) => a.seats - b.seats);
	}

	function sortClassroomsByName() {
		return classrooms.slice().sort((a, b) => a.name.localeCompare(b.name));
	}

	displayClassrooms();

	displayClassroomsByFaculty("Информационные технологии");

	let group = { name: "Группа TOP-101", students: 14, faculty: "Информационные технологии" };
	displayClassroomsForGroup(group);

	const sortedBySeats = sortClassroomsBySeats();
	console.log('Аудитории, отсортированные по количеству мест:');
	console.log(sortedBySeats);

	const sortedByName = sortClassroomsByName();
	console.log("Аудитории, отсортированные по названию:");
	console.log(sortedByName);
}

task_4();

//