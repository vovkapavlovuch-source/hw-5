// 1.Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch

let and = prompt("Введіть Кава, Чай або Сік");
let result = "";
switch (and) {
    case "Кава":
        result = "Тримай Каву";
        break
    case "Чай":
        result = "Тримай Чай";
        break
    case "Сік":
        result = "Тримай Сік";
        break
    default:
        result = "Error";
}
alert(result);

// 2.Створіть змінну для зберігання введеного рядка, який може бути днем тижня. Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.

let week = prompt("Введіть любий день тижня");
let res = ""
switch (week) {
    case "Понеділок":
    case "Вівторок":
    case "Середа":
    case "Четвер":
    case "П'ятниця":
        res = "Сьогодні робочий день";
        break
    case "Суботта":
    case "Неділя":
        res = "Сьогодні вихідний день";
        break
    default:
        res = "Error";
}
alert(res);

// 3.Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.

let month = prompt("Напиши мені номер місяця");
let monthRes = "";
switch (month) {
    case "12":
    case "1":
    case "2":
        monthRes = "Зима";
        break
    case "3":
    case "4":
    case "5":
        monthRes = "Весна";
        break
    case "6":
    case "7":
    case "8":
        monthRes = "Літо";
        break
    case "9":
    case "10":
    case "11":
        monthRes = "Осінь";
        break
    default:
        monthRes = "Error";
}
alert(monthRes);

// 4.Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

let light = prompt("Введіть червоний, зелений або жовтий");
let lightRes = "";
switch (light) {
    case "червоний":
        lightRes = "СТОП";
        break
    case "зелений":
        lightRes = "ЙТИ";
        break
    case "жовтий":
        lightRes = "ЧЕКАЙ";
        break
    default:
        lightRes = "Error";
}
alert(lightRes);

// 5.Створіть змінні для зберігання двох чисел та оператора (як у списку select). Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.

let numOne = Number(prompt("Введіть перше число"));
let numTwo = Number(prompt("Введіть друге число"));
let action = prompt("Введіть дію (+, -, *, /)");
let numberRes;
switch (action) {
    case "+":
        numberRes = numOne + numTwo;
        break
    case "-":
        numberRes = numOne - numTwo;
        break
    case "*":
        numberRes = numOne * numTwo;
        break
    case "/":
        if (numTwo === 0) {
            numberRes = "На нуль ділити не можна";
        }
        else {
            numberRes = numOne / numTwo;
        }
        break
    default:
        numberRes = "Error";
}
alert(numberRes);
