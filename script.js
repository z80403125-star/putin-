"use strict";

const questions = [
  {
    question: "Чем выручка отличается от прибыли?",
    answers: [
      "Выручка — все поступления от продаж, прибыль — остаток после вычета расходов",
      "Это два названия одной и той же суммы",
      "Прибыль — это все поступления, а выручка — остаток после расходов"
    ],
    correct: 0,
    explanation: "Выручка — сумма продаж, а прибыль появляется после того, как из выручки вычли расходы."
  },
  {
    question: "Компания продала товаров на 100 000 ₽. Как называется эта сумма до вычета затрат?",
    answers: [
      "Чистая прибыль",
      "Выручка",
      "Рентабельность"
    ],
    correct: 1,
    explanation: "Сумма, полученная от продаж до вычета расходов, называется выручкой."
  },
  {
    question: "Что такое чистая прибыль?",
    answers: [
      "Выручка за вычетом только стоимости товаров",
      "Деньги на банковском счёте компании",
      "Прибыль после вычета всех расходов, налогов и обязательных платежей"
    ],
    correct: 2,
    explanation: "Чистая прибыль — то, что остаётся после учёта всех расходов и налогов."
  },
  {
    question: "Какие расходы обычно называют постоянными?",
    answers: [
      "Те, которые не меняются напрямую вместе с объёмом продаж в коротком периоде",
      "Те, которые возникают только при каждой продаже",
      "Те, которые всегда равны нулю"
    ],
    correct: 0,
    explanation: "Например, аренда офиса часто остаётся примерно одинаковой независимо от числа продаж."
  },
  {
    question: "Какой пример лучше всего иллюстрирует переменные расходы?",
    answers: [
      "Ежемесячная аренда помещения",
      "Сырьё, необходимое для производства каждой дополнительной единицы товара",
      "Годовая лицензия на программу с фиксированной стоимостью"
    ],
    correct: 1,
    explanation: "Переменные расходы обычно растут или снижаются вместе с объёмом производства или продаж."
  },
  {
    question: "Как рассчитать прибыль в простейшем случае?",
    answers: [
      "Расходы − выручка",
      "Выручка + расходы",
      "Выручка − расходы"
    ],
    correct: 2,
    explanation: "В простейшем виде прибыль — это выручка за вычетом относящихся к ней расходов."
  },
  {
    question: "Выручка составила 80 000 ₽, расходы — 55 000 ₽. Какова прибыль?",
    answers: [
      "25 000 ₽",
      "55 000 ₽",
      "135 000 ₽"
    ],
    correct: 0,
    explanation: "80 000 ₽ − 55 000 ₽ = 25 000 ₽ прибыли."
  },
  {
    question: "Что показывает рентабельность продаж?",
    answers: [
      "Сколько товаров продано за месяц",
      "Какую долю выручки составляет прибыль",
      "Сколько сотрудников работает в компании"
    ],
    correct: 1,
    explanation: "Рентабельность продаж показывает, какая часть выручки остаётся в виде прибыли."
  },
  {
    question: "Что означает точка безубыточности?",
    answers: [
      "Момент, когда расходы равны выручке и прибыль равна нулю",
      "Момент, когда у бизнеса совсем нет расходов",
      "Самый прибыльный день в году"
    ],
    correct: 0,
    explanation: "В точке безубыточности выручка покрывает расходы: бизнес ещё не получает прибыль, но уже не несёт убыток."
  },
  {
    question: "Что такое денежный поток (cash flow)?",
    answers: [
      "Только стоимость имущества компании",
      "Разница между ценой покупки и продажи одного товара",
      "Движение денег в компанию и из неё за определённый период"
    ],
    correct: 2,
    explanation: "Денежный поток отражает реальные поступления и выплаты за период."
  },
  {
    question: "Может ли прибыльная компания испытывать нехватку денег для текущих платежей?",
    answers: [
      "Да, например, если клиенты ещё не оплатили счета",
      "Нет, прибыль всегда означает, что все деньги уже на счёте",
      "Нет, если у компании есть хотя бы один клиент"
    ],
    correct: 0,
    explanation: "Прибыль и наличие свободных денег — не одно и то же: деньги могут быть, например, заморожены в неоплаченных счетах или запасах."
  },
  {
    question: "Что обычно понимают под личным доходом?",
    answers: [
      "Все расходы семьи за месяц",
      "Деньги, которые человек получает, например, от работы, бизнеса или инвестиций",
      "Только наличные деньги в кошельке"
    ],
    correct: 1,
    explanation: "Доход — это поступающие человеку деньги из разных источников, а не только наличные."
  },
  {
    question: "Какой из примеров является пассивным доходом?",
    answers: [
      "Зарплата за отработанные часы",
      "Оплата за разовую консультацию",
      "Доход от сдачи принадлежащей вам квартиры в аренду"
    ],
    correct: 2,
    explanation: "Арендная плата может приносить регулярный доход без ежедневной работы за каждую выплату, хотя управление недвижимостью всё же требует усилий."
  },
  {
    question: "Зачем учитывать личные доходы и расходы?",
    answers: [
      "Чтобы понимать, куда уходят деньги, и планировать бюджет",
      "Чтобы обязательно тратить весь доход до конца месяца",
      "Чтобы доход автоматически увеличился"
    ],
    correct: 0,
    explanation: "Учёт помогает заметить привычки в расходах, планировать цели и принимать более осознанные решения."
  },
  {
    question: "Что такое валовая прибыль в торговле?",
    answers: [
      "Выручка после вычета вообще всех расходов и налогов",
      "Выручка от продаж за вычетом себестоимости проданных товаров",
      "Сумма налогов, уплаченных компанией"
    ],
    correct: 1,
    explanation: "Валовая прибыль рассчитывается после вычета себестоимости проданных товаров, но до ряда других расходов."
  },
  {
    question: "Что в первую очередь поможет увеличить прибыль бизнеса при прочих равных?",
    answers: [
      "Увеличить расходы, не меняя продажи",
      "Снизить качество товара без проверки реакции покупателей",
      "Увеличить выручку или разумно сократить расходы, не навредив ценности продукта"
    ],
    correct: 2,
    explanation: "Прибыль растёт, если увеличить выручку или оптимизировать затраты, сохраняя ценность продукта для клиента."
  },
  {
    question: "Почему рост выручки не всегда означает рост прибыли?",
    answers: [
      "Потому что расходы могут вырасти ещё сильнее",
      "Потому что выручка никак не связана с продажами",
      "Потому что прибыль всегда фиксирована"
    ],
    correct: 0,
    explanation: "Если для дополнительных продаж затраты выросли сильнее, прибыль может не измениться или даже снизиться."
  },
  {
    question: "Что означает диверсификация источников дохода?",
    answers: [
      "Получать деньги только из одного источника",
      "Иметь несколько разных источников дохода",
      "Отказаться от планирования расходов"
    ],
    correct: 1,
    explanation: "Несколько источников могут снизить зависимость от одного из них, хотя каждый источник тоже связан со своими рисками."
  },
  {
    question: "У вас есть регулярный доход. Какой шаг поможет подготовиться к неожиданным расходам?",
    answers: [
      "Тратить сбережения заранее, чтобы не держать их без дела",
      "Полностью отказаться от учёта бюджета",
      "Постепенно откладывать часть дохода в резервный фонд"
    ],
    correct: 2,
    explanation: "Резервный фонд помогает покрыть непредвиденные расходы без срочных займов."
  },
  {
    question: "Какой показатель лучше сравнивать, чтобы оценить долю прибыли в выручке?",
    answers: [
      "Маржу (отношение прибыли к выручке)",
      "Количество подписчиков компании",
      "Общую площадь офиса"
    ],
    correct: 0,
    explanation: "Маржа показывает, какую долю выручки составляет прибыль; важно уточнять, какой именно вид прибыли используется."
  }
];

const answerLetters = ["А", "Б", "В"];
const questionCounter = document.getElementById("question-counter");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const answerList = document.getElementById("answer-list");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const nextLabel = document.getElementById("next-label");
const progressFill = document.getElementById("progress-fill");
const progressBar = document.getElementById("progress-bar");
const selectionHint = document.getElementById("selection-hint");
const quizContent = document.getElementById("quiz-content");
const results = document.getElementById("results");
const restartButton = document.getElementById("restart-button");

let currentQuestion = 0;
let correctAnswers = 0;
let hasAnswered = false;

function renderQuestion() {
  const item = questions[currentQuestion];
  const displayNumber = String(currentQuestion + 1).padStart(2, "0");

  questionCounter.innerHTML = `ВОПРОС <strong>${displayNumber}</strong> <span>/ ${questions.length}</span>`;
  questionNumber.textContent = displayNumber;
  questionText.textContent = item.question;
  answerList.replaceChildren();
  feedback.hidden = true;
  feedback.textContent = "";
  feedback.className = "feedback";
  hasAnswered = false;
  nextButton.disabled = true;
  selectionHint.textContent = "Выберите один вариант ответа";
  nextLabel.textContent = currentQuestion === questions.length - 1 ? "Посмотреть результат" : "Следующий вопрос";

  item.answers.forEach((answer, index) => {
    const option = document.createElement("button");
    option.type = "button";
    option.className = "answer-option";
    option.setAttribute("aria-label", `${answerLetters[index]}. ${answer}`);

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.setAttribute("aria-hidden", "true");
    letter.textContent = answerLetters[index];

    const text = document.createElement("span");
    text.className = "answer-text";
    text.textContent = answer;

    option.append(letter, text);
    option.addEventListener("click", () => selectAnswer(index));
    answerList.append(option);
  });

  const progress = (currentQuestion / questions.length) * 100;
  progressFill.style.width = `${progress}%`;
  progressBar.setAttribute("aria-valuenow", String(currentQuestion));
}

function selectAnswer(selectedIndex) {
  if (hasAnswered) return;

  hasAnswered = true;
  const item = questions[currentQuestion];
  const options = Array.from(answerList.querySelectorAll(".answer-option"));
  const isCorrect = selectedIndex === item.correct;

  if (isCorrect) correctAnswers += 1;

  options.forEach((option, index) => {
    option.disabled = true;
    if (index === item.correct) option.classList.add("is-correct");
    if (index === selectedIndex && !isCorrect) option.classList.add("is-incorrect");
    if (index === selectedIndex) option.setAttribute("aria-pressed", "true");
  });

  feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
  if (isCorrect) {
    feedback.innerHTML = `<strong>Верно!</strong> ${item.explanation}`;
  } else {
    feedback.innerHTML = `<strong>Не совсем.</strong> Правильный ответ: «${item.answers[item.correct]}». ${item.explanation}`;
  }
  feedback.hidden = false;
  nextButton.disabled = false;
  selectionHint.textContent = isCorrect ? "Ответ принят — отлично!" : "Ответ принят — запомните правильный вариант";
  progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  progressBar.setAttribute("aria-valuenow", String(currentQuestion + 1));
}

function showResults() {
  const incorrectAnswers = questions.length - correctAnswers;
  const percentage = Math.round((correctAnswers / questions.length) * 100);
  const resultTitle = document.getElementById("results-title");

  document.getElementById("score-points").innerHTML = `${correctAnswers} <small>/ ${questions.length} баллов</small>`;
  document.getElementById("score-percent").textContent = `${percentage}%`;
  document.getElementById("correct-count").textContent = String(correctAnswers);
  document.getElementById("incorrect-count").textContent = String(incorrectAnswers);
  document.getElementById("result-message").textContent =
    percentage === 100 ? "Безупречный результат — вы отлично разбираетесь в теме!" :
      percentage >= 75 ? "Здорово! Вы уверенно ориентируетесь в теме дохода и прибыли." :
        percentage >= 50 ? "Хорошая основа! Теперь вы знаете, какие темы стоит освежить." :
          "Это только начало — теперь у вас есть отличная база для новых знаний.";
  resultTitle.textContent = percentage >= 75 ? "Отличная работа!" : percentage >= 50 ? "Хороший результат!" : "Вы справились!";

  quizContent.hidden = true;
  results.hidden = false;
  progressFill.style.width = "100%";
  progressBar.setAttribute("aria-valuenow", String(questions.length));
  questionCounter.innerHTML = `ИТОГ <strong>${questions.length}</strong> <span>/ ${questions.length}</span>`;
  document.querySelector(".question-area").hidden = true;
  answerList.hidden = true;
  feedback.hidden = true;
  document.querySelector(".quiz-footer").hidden = true;
}

function restartQuiz() {
  currentQuestion = 0;
  correctAnswers = 0;
  results.hidden = true;
  quizContent.hidden = false;
  document.querySelector(".question-area").hidden = false;
  answerList.hidden = false;
  document.querySelector(".quiz-footer").hidden = false;
  renderQuestion();
}

nextButton.addEventListener("click", () => {
  if (!hasAnswered) return;
  if (currentQuestion === questions.length - 1) {
    showResults();
    return;
  }
  currentQuestion += 1;
  renderQuestion();
});

restartButton.addEventListener("click", restartQuiz);

renderQuestion();
