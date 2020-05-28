// обьявляем основной блок игры, заставку и кнопки
var main = document.querySelector ("#main");
var zastavka = document.querySelector ("#zastavka");
var zastavka2 = document.querySelector ("#zastavka2");
var againBttn = document.querySelector(".againBttn");
var repeatBttn = document.querySelector(".repeatBttn");
//переменная с игровым полем
var igraPole = null;
//переменные кнопок уровней
var easyBttn = null;
var middleBttn = null;
var hardBttn = null;
//переменные для блоков проигрыша и выигрыша
var end = null;
var win = null;

// Выбираем блок с ракеткой
var raketka = null;

// переменная мячика (шарика)
var ball = null;
// переменная Х мячика (шарика)
var ballX = null;
// переменная Y мячика (шарика)
var ballY = null;
//задаем переменную движения шарика по умолчанию
var move = false;
// переменная таймер, которая запускает полет шарика flyBall
var timer = null;

// переменная жизней
var lifes = null;
//создаем переменную количество жизней
var colichestvoLifes = 0;
// переменная текущего количества жизней
var tekusheeColichestvoLifes = 0;

// переменная с кубиком
var kubik = null;
// Максимальное кол-во кубиков на игровом поле
var maxKubik = 0;
// текущее кол-во кубиков (перед созданием - автоматически ноль)
var minKubik = 0;
//будет определять тип кубика
var typeOfKubik = null;
// нужный кубик - создаем для проверки попадания мячиком в него
var needKubik = null;
// присваеваем айди каждому создавшемуся кубику
var nomerId = 0;
/*при создании кубика (рандомно) и попадании шарика в кубик 
переменная считает кол-во прозрачных кубиков */ 
var colNeKubik = 0;

// переменная таймера (полет мячика)
var second = 0;
//переменные для аудио сопровождения
var audioBttn = new Audio("sounds/klick5.mp3");
var audioWin = new Audio("sounds/pobeda.mp3");
var audioGo = new Audio("sounds/go.mp3");
var gameOver = new Audio("sounds/end2.mp3");
