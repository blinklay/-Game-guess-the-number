const body = document.querySelector('body');

const secretNumberField = document.querySelector('.number');
const submitNumberBtn = document.querySelector('.check');
const inputNumber = document.querySelector('.guess');
const roundBtn = document.querySelector('.again');
const attemptCountField = document.querySelector('.score');
const recordCountField = document.querySelector('.highscore');

const messageField = document.querySelector('.message')

let attemptCount = 20
let recordCount = 0
let secretNumber = generateSecretNumber(1, 20)
console.log(secretNumber);

function checkCurrentNumber(number) {
  if (number < 0) return false
  if (number > 20) return false
  if (!number) return false
  return true
}

function updateUi() {
  attemptCountField.textContent = attemptCount
  recordCountField.textContent = recordCount
}

function generateSecretNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function printGameWin() {
  secretNumberField.textContent = secretNumber
  body.classList.add('win-back')
  messageField.textContent = 'Вы выиграли!'

  recordCount++
  updateUi()
}

function printGameLose() {
  secretNumberField.textContent = secretNumber
  body.classList.add('lose-back')
  messageField.textContent = 'Вы проиграли!'

  recordCount = 0
  updateUi()
}

submitNumberBtn.addEventListener('click', () => {
  const userNumber = +inputNumber.value
  if (attemptCount === 0) printGameLose()
  else {
    if (checkCurrentNumber(userNumber)) {
      if (userNumber === secretNumber) printGameWin()
      else {
        attemptCount--
        updateUi()
      }
    }
  }
})

roundBtn.addEventListener('click', () => {
  secretNumber = generateSecretNumber(1, 20)
  console.log(secretNumber);

  secretNumberField.textContent = '?'
  messageField.textContent = 'Начните угадывать...'
  inputNumber.value = ''
  body.className = ""

  attemptCount = 20
  updateUi()
})

updateUi()
