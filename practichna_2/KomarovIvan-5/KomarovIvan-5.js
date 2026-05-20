let grade = Number(prompt("Введіть оцінку студента (від 1 до 12):"));
let gradeResult;
switch (grade) {
    case 12:
    case 11:
    case 10:
        gradeResult = "Excellent result";
        break;
    case 9:
    case 8:
    case 7:
        gradeResult = "Good result";
        break;
    case 6:
    case 5:
    case 4:
        gradeResult = "Enough result";
        break;
    case 3:
    case 2:
    case 1:
        gradeResult = "Потрібно покращити знання (You should improve your knowledge)";
        break;
    default:
        gradeResult = "Incorrect grade";
}
console.log(gradeResult);
alert(gradeResult);