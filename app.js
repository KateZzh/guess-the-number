// Описание проекта:
// программа генерирует случайное число в диапазоне от 1 до 100 и просит пользователя угадать
// это число. Если догадка пользователя больше случайного числа, то программа должна вывести
// сообщение 'Слишком много, попробуйте еще раз'. Если догадка меньше случайного числа, то
// программа должна вывести сообщение 'Слишком мало, попробуйте еще раз'. Если пользователь
// угадывает число, то программа должна поздравить его и вывести сообщение 'Вы угадали,
// поздравляем!'.
// Составляющие проекта:
// Целые числа; Переменные; Ввод / вывод данных; Условный оператор; Цикл; Бесконечный цикл;
// Операторы break, continue; Работа с модулем random для генерации случайных чисел; Функции.

const rndNum = Math.round(Math.random() * 100);

function guessNum(rndNum_) {
  let start = 0;
  let end = 100;
  let countOfIteration = 0;
  alert("Программа загадала рандомное число. Ваша задача угадать его.");

  for (let i = start; i < end; i++) {
    let userNum = prompt(`Введите число от ${start} до ${end}`);

    if (userNum == null) {
      alert("Вы закончили игру");
      break;
    }

    if (userNum >= start && userNum <= end) {
      
      if (userNum == rndNum_) {
        alert(`Вы угадали число за ${countOfIteration} итераций!`);
        break;
      } else if (userNum < rndNum_) {
        countOfIteration++;
        start = userNum;
        alert(`Вы ввели число ${userNum} и это слишком маленькое значение. Введите число от ${start} до ${end}`);
      } else if (userNum > rndNum_) {
        countOfIteration++;
        end = userNum;
        alert(`Вы ввели число ${userNum} и это слишком большое значение. Введите число от ${start} до ${end}`);
      }

    } else {
      userNum = prompt(`Введите число от ${start} до ${end}`);
    }
  }
}

const result = guessNum(rndNum);
console.log(result);
