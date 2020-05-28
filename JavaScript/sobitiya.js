
// Добавляем событие нажатия клавиши
document.addEventListener('keydown', function (event) {
	switch (event.keyCode) {
		// нажали стрелку влево
		case 37:
			// если ракетка доходит притфк влево - стрелка перестает его двигать
			if (raketka.offsetLeft >= 20) {
				raketka.style.left = raketka.offsetLeft - 20 + "px";
			}
			break;

		//нажали стрелку вправо
		case 39:
			if (raketka.offsetLeft <= 812 - 160 - 20) {
				raketka.style.left = raketka.offsetLeft + 20 + "px";
			}
			break;
	}
});

// Добавляем событие нажатия клавиши
document.addEventListener('keypress', function (event) {
	switch (event.keyCode) {

		case 32:
			// когда шарик не летает (move == false), пробел работает
			if (move == false) {
				//запускается функция ballFly()
				ballFly();
				// когда нажимаем на пробел - шарик начинает полет (move = true) и блокирует Пробел
				move = true;
			}
			break;
	}
});