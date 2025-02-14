const openModalBtn = document.getElementById('modalBtn');
const closeModalBtn = document.getElementById('modalBtnClose');
const loginForm = document.getElementById('loginForm');
const modalFade = document.querySelector('.modal-fade');
const modal = document.querySelector('.modal-menu');
const password = document.getElementById('password');

openModalBtn.onclick = function () {
	modal.classList.add('modal-menu_open');
	modalFade.classList.add('modal-fade_open');
	document.body.classList.toggle('no-scroll');
};

closeModalBtn.onclick = closeModal;

modalFade.onclick = function (e) {
	if (e.target === modalFade) {
		closeModal();
	}
};

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape'){
		closeModal();
	}
})

function closeModal () {
	modal.classList.remove('modal-menu_open');
	modalFade.classList.remove('modal-fade_open');
	document.body.classList.toggle('no-scroll');
}

document.getElementById('togglePassword').addEventListener('click', function() {
	const img = this.querySelector('img');

	if (img.src.endsWith('solar--eye-closed-bold.svg')) {
			img.src = 'img/solar--eye-outline.svg';
			password.type = 'text';
	} else {
			img.src = 'img/solar--eye-closed-bold.svg';
			password.type = 'password';
	}
});

const persons = [
	{ name: 'admin', password: 'admin' },
	{ name: 'abobus', password: 'abobus322' },
]

loginForm.addEventListener('submit', function (event) {
	event.preventDefault();
	const login = this.querySelector('[name="login"]').value
	const password = this.querySelector('[name="password"]').value
	const successMessage = document.getElementById('successMessage');
	const welcomeUser = document.getElementById('welcomeUser');
	const modalMenuWindow = document.querySelector('.modal-menu__window')

	const user = persons.find(person => person.name === login);
	console.log(user)
	if (!user) {
		alert('Не удалось найти пользователя')
		this.reset();
	} else if (user.password === password) {
		successMessage.style.display = 'flex';
		welcomeUser.textContent = user.name;
		modalMenuWindow.style.display = 'none'
		openModalBtn.querySelector('a').textContent = user.name;
		setTimeout(() => {
			closeModal();
		}, 3000);
	} else {
		alert('Пароль неверный!')
		this.querySelector('[name="password"]').value = ''
	}
});

loginForm.elements.password.addEventListener('input',function(){
	const field = this;
	const errorMessage = document.getElementById('password-error');
	console.log(errorMessage);
	
	const regex = /^[a-zA-Z0-9]*$/;
	// разрешить английские буквы и цифры

	if(!regex.test(field.value)){
			errorMessage.textContent = "Ой тут ошибочка :(";
			field.value = field.value.slice(0,-1);
			field.classList.add('errorField')
			
	} else {
			errorMessage.textContent = ""
			field.classList.remove('errorField')
	}
})