
// Функция, позволяющая выбрать рандомное целое число от 1 до определенных ограничений
function random(max) {
	var sluchChisl = 1 + Math.random() * (max + 1);
	sluchChisl = Math.floor(sluchChisl);
	return sluchChisl;
}

// Функция начала игры
function go() {
	startBlock.remove();
	makeIgraPole();
	randomAddKubik();
	makeRaketka();
	makeLifes();
	makeBall();
}

/*========================================
Функции создания обьектов на игровом поле
=======================================*/
// Создаем блок игрового поля 
function makeIgraPole() {
	//создаем блок <div id="raketka"></div>
	igraPole = document.createElement("div");
	//даем индефикатор переменной 
	igraPole.id = "igraPole";
	//добавляем Игровое поле в body
	main.appendChild(igraPole);
}

// Создание блока старта игры
function makeStartBlock() {
	// Создаем блок <div id="start-block">
	startBlock = document.createElement("div");
	// добавляем тегу div => id="startBlock" 
	startBlock.id = "start-block";
	let h1 = document.createElement("h1");
	h1.innerText = "";
	//Добавляем заголовок h2
	startBlock.appendChild(h1);

	// В startBlock добавляем кнопки
	easyBttn = document.createElement("button");
	easyBttn.id = "easy-bttn";
	easyBttn.className = "bttn";
	easyBttn.innerText = "Easy";
	// Добавляем Кнопку в Стартовый блок
	startBlock.appendChild(easyBttn);
	// Функции нажатия на кнопки
	easyBttn.onclick = function () {
		easyBttnOnclick();
	}

	middleBttn = document.createElement("button");
	middleBttn.id = "middle-bttn";
	middleBttn.className = "bttn";
	middleBttn.innerText = "Middle";
	// Добавляем Кнопку в Стартовый блок
	startBlock.appendChild(middleBttn);
	middleBttn.onclick = function () {
		middleBttnOnclick();
	}

	hardBttn = document.createElement("button");
	hardBttn.id = "hard-bttn";
	hardBttn.className = "bttn";
	hardBttn.innerText = "Hard";
	// Добавляем Кнопку в Стартовый блок
	startBlock.appendChild(hardBttn);
	hardBttn.onclick = function () {
		hardBttnOnclick();
	}
	// Добавляем Стартовый блок в игровое поле
	main.appendChild(startBlock);
}

// Создаем ракетку на игровом поле
function makeRaketka() {
	//создаем блок <div id="raketka"></div>
	raketka = document.createElement("div");
	//даем индефикатор переменной 
	raketka.id = "raketka";
	//добавляем в Игровое поле ракетку	
	igraPole.appendChild(raketka);
}

// создаем жизни игровом поле
function makeLifes() {
	//создаем блок див <div id="lifes"></div>
	lifes = document.createElement("div");
	//даем индефикатор переменной Lifes
	lifes.id = "lifes";
	//переменная в которой храним текущее количество отображенных жизней
	var tekusheeColichestvoLifes = 0;
	while (tekusheeColichestvoLifes < colichestvoLifes) {
		//создаем тег спан
		var span = document.createElement("span");
		//помещаем спан в блок жизней
		lifes.appendChild(span);
		//увеличиваем количество текущих отображенных жизней на 1
		tekusheeColichestvoLifes = tekusheeColichestvoLifes + 1;
	};
	//добавляем в Игровое поле жизни	
	igraPole.appendChild(lifes);
}

// Создаем мячик на игровом поле 
function makeBall() {
	// создаем блок <div id = "ball"></div>
	ball = document.createElement("div");
	// даем индефикатор переменной ball
	ball.id = "ball";
	// добавляем картинку нашему мячику
	var pic = document.createElement("IMG");
	pic.src = "images/ball6.gif";
	//добавляем картинку в мячик, а мячик в Игровое поле
	ball.appendChild(pic);
	igraPole.appendChild(ball);
	audioGo.play();
}

// функция, создает кубик
function makeKubik() {
	// функция, которая рандомно определяет клас кубика
	typeOfKubik = random(3);
	//делаем кубик <div id></div>
	kubik = document.createElement("div");
	// задаем айди каждому создавшемуся кубику
	nomerId = nomerId + 1;
	let ownId = nomerId;
	kubik.id = "kubik" + ownId;
	//функция "если", если тип кубика = 2, то его клас "kubik"(шанс 1 к 3)// иначе "ne-kubik"
	if (typeOfKubik == 2) {
		kubik.className = "kubik";
		// kubik.style.backgroundImage = 'images/kubik8.gif';
		kubik.id = "kubik" + ownId;
	} else if (typeOfKubik == 1) {
		// кроме класса также задаем новый фон
		kubik.className = "kubik";
		kubik.style.backgroundImage = "url('images/kubik14.gif')";
		kubik.style.backgroundSize = "117%";
		kubik.id = "kubik" + ownId;
	} else {
		// кроме класса также задаем айди НЕ кубик для проверки на удаление его с экрана
		colNeKubik = colNeKubik + 1;
		kubik.className = "ne-kubik";
		kubik.id = "ne-kubik" + ownId;
	}
	//добавляю кубик в Игровое поле
	igraPole.appendChild(kubik);
}

//функция, которая добавляет рандомно кубики на Игровое поле 
function randomAddKubik() {
	//цикл while, делает кубики, пока minKubik не будет = maxKubik
	while (maxKubik > minKubik) {
		minKubik = minKubik + 1;
		makeKubik();
	}
}

/*=========================
Функции движения и проверки...
============================*/
// функция сверки попал ли мячь в кубик
function popadenie() {
	// задаем айди Нужному кубику, чтоб проверить на попадание мяча
	let ownId = 1;
	// Пока айди Нужного кубика меньше чем макс кол-во кубиков...
	while (ownId < maxKubik + 1) {
		//вызываем нужный кубик с нужным айди
		needKubik = document.getElementById("kubik" + ownId);
		// когда мяч попадет в НУЖНЫЙ кубик - последний спрячется, а мяч развернется
		if (needKubik != null && needKubik.id != "ne-kubik") {
			// Если верх мяча совпадает с низом кубика, либо сбоку, 
			// то кубик должен удалиться, когда его айдибудет ne-kubik
			if ((ball.offsetTop <= needKubik.offsetTop + 50)
				&& (ball.offsetLeft > needKubik.offsetLeft)
				&& (ball.offsetLeft < needKubik.offsetLeft + 50)) {
				needKubik.id = "ne-kubik" + ownId;
				needKubik.className = "ne-kubik";
				needKubik.style.background = "none";
				// меняем направление мяча
				ballY = -ballY;
				// считаем кол-во прозрачных кубиков
				colNeKubik = colNeKubik + 1;
				// когда все kubik станут ne-kubik - ПОБЕДА
				if (colNeKubik == maxKubik) {
					youwin();
				}
			}
		}
		ownId = ownId + 1;
	}
}

//Функция полёта шарика
function ballFly() {
	// задаем варианты вылета шарика при старте - влево или вправо
	switch (Math.floor(Math.random() * Math.floor(3))) {
		// левая сторона
		case 0:
			ballX = -10;
			ballY = -9;
			break;
		// правая сторона
		case 1:
			ballX = 10;
			ballY = -9;
			break;
		// вылет вверх левее или верх правее
		case 2:
			switch (Math.floor(Math.random() * Math.floor(2))) {
				case 0:
					ballX = -7;
					break;
				case 1:
					ballX = 7;
					break;
			}
			ballY = -10;
			break;
	}

	// интевал, с помощью которого шарик меняет местонахождение
	timer = setInterval(function () {
		// проверка на попадание мяча в кубик при каждом изменении координат мяча
		popadenie();
		// Когда мячик попадает в ракетку - он отбивается
		if ((ball.offsetTop >= raketka.offsetTop - 15)
			&& ((ball.offsetLeft > raketka.offsetLeft - 25) && (ball.offsetLeft < raketka.offsetLeft + 160 - 25))) {
			if (ballY > 0) {
				ballY = -ballY;
			}
		}
		// координаты перемещения мяча
		ball.style.left = ball.offsetLeft + ballX + "px";
		ball.style.top = ball.offsetTop + ballY + "px";
		// При попадении мяча по стенкам - разворачиваем мяч под углом 45 градусов
		if (ball.offsetLeft <= 25) {
			ballX = -ballX;
		}
		if (ball.offsetTop <= 25) {
			ballY = -ballY;
		}
		if (ball.offsetLeft >= (812 - 25)) {
			ballX = -ballX;
		}
		// Когда мячик не попадает в ракетку (выходит за границы поля) - отнимаем жизнь
		if (ball.offsetTop >= (700 + 55)) {
			clearInterval(timer); /*выключаем таймер*/
			ball.remove(); /*Удаляем шарик*/
			raketka.remove(); /*удаляем также ракетку*/
			// когда шарик летает, пробел не работает
			move = false;
			// уменьшаем количество жизней
			colichestvoLifes = colichestvoLifes - 1;
			lifes.remove(); /*удаляем жизн*/
			makeLifes(); /*создаем жизн*/
			//если жизней не осталось, то конец игры
			if (colichestvoLifes == 0) {
				koniecIgra();
			} else { /* а если еще остались - то создаем опять мяч и ракетку*/
				makeBall();
				makeRaketka();
			}
		}
	}, second);
}

/*=========================
Создаем функции кликов по кнопкам
задавая новые значения переменных по уровням
============================*/
function easyBttnOnclick() {
	colichestvoLifes = 4;
	maxKubik = 10;
	second = 20;
	audioBttn.play();
	go();
}

function middleBttnOnclick() {
	colichestvoLifes = 3;
	maxKubik = 35;
	second = 13;
	audioBttn.play();
	go();
}

function hardBttnOnclick() {
	colichestvoLifes = 2;
	maxKubik = 50;
	second = 9;
	audioBttn.play();
	go();
}

function againBttnOnclick() {
	zastavka.style.display = "none";
	againBttn.style.display = "none";
	makeStartBlock();
}

function repeatBttnOnclick() {
	zastavka2.style.display = "none";
	makeStartBlock();
}
/*=========================
Функции Победы и Проигрыша
============================*/
//Создаем функцию ПОБЕДА
function youwin() {
	//Очищаем таймер полета мяча и удаляем иговое поле
	clearInterval(timer);
	igraPole.remove();
	zastavka2.style.display = "block";
	repeatBttn.style.display = "block";
	againBttn.style.display = "none";
	// обнуляем переменные
	move = false;
	maxKubik = 0;
	minKubik = 0;
	kubik = null;
	colNeKubik = 0;
	needKubik = null;
	nomerId = 0;
	// Создаем блок победы
	win = document.createElement("div");
	win.className = "win";
	// создаем блок <h1></h1>
	let h1 = document.createElement("h1");
	h1.innerText = "";
	win.appendChild(h1);
	// клик по кнопке
	repeatBttn.onclick = function () {
		repeatBttnOnclick();
		win.remove();
	}
	// Добавляем Кнопку в Стартовый блок
	zastavka2.appendChild(repeatBttn);
	// добавляем в игровое поле блок Победы
	zastavka2.appendChild(win);
	// добавляем аудио
	audioWin.play();
}

//Создаем функцию КОНЕЦ ИГРА
function koniecIgra() {
	// удаляем иговое поле и кубики
	kubik.remove();
	igraPole.remove();
	zastavka.style.display = "block";
	againBttn.style.display = "block";
	repeatBttn.style.display = "none";
	// обнуляем переменные
	maxKubik = 0;
	minKubik = 0;
	kubik = null;
	colNeKubik = 0;
	needKubik = null;
	nomerId = 0;
	//Создаем блок <div id "koniec-igra">
	end = document.createElement("div");
	end.className = "konec-igra";
	// создаем блок <h1>Игра окончена></h1>
	let h2 = document.createElement("h2");
	h2.innerText = "";
	//Добавляем заголовок h1
	end.appendChild(h2);
	let h1 = document.createElement("h1");
	h1.innerText = "";
	//Добавляем заголовок h1
	end.appendChild(h1);
	// клик по кнопке
	againBttn.onclick = function () {
		againBttnOnclick();
		end.remove();
	}
	// Добавляем Кнопку в Стартовый блок
	zastavka.appendChild(againBttn);
	// добавляем в игровое поле блок завершения игры
	zastavka.appendChild(end);
	// добавляем аудио
	gameOver.play();
}
