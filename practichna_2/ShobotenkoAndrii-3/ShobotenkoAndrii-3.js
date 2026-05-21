let score = Number(prompt("Введіть кількість балів:"));
let homeworkDone = prompt("Всі домашні завдання виконані? (true або false)");
let finalTestPassed = prompt("Фінальний тест пройдено? (true або false)");
let certificate;
if (score >= 70 && homeworkDone === "true" && finalTestPassed === "true") {
    certificate = "Сертифікат успішно отримано";
} else {
    certificate = "Умови для отримання сертифіката не виконані";
}
console.log(certificate);
alert(certificate);
