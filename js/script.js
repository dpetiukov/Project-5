// 4. Задайте користувачеві 3 питання, у кожному питанні по 3 варіанти відповіді. 
// За кожну правильну відповідь нараховується 2 бали. Після запитань виведіть користувачеві 
// кількість набраних балів
const cityQuestion1 = prompt("Столиця Франції.\n1.Марсель\n2.Париж\n3.Ліон");
let overallResult = 0;
if (cityQuestion1 == "Париж") {
  overallResult += 2;
}
const cityQuestion2 = prompt("Столиця Іспанії.\n1.Мадрид\n2.Валенсія\n3.Севілья");
if (cityQuestion2 == "Мадрид") {
  overallResult += 2;
}
const cityQuestion3 = prompt("Столиця Італії.\n1.Флоренція\n2.Сан Марино\n3.Рим");
if (cityQuestion3 == "Рим") {
  overallResult += 2;
}
alert(overallResult);
