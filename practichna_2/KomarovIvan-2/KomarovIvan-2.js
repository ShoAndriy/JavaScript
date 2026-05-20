let day = prompt("What is the day?");
let price;
switch(day) {
    case "понеділок":
    case "вівторок":
    case "середа":
        price = "Вартість квитків складає 150 грн";
        break;
    case "четвер":
    case "п’ятниця":
    case "пятниця":
        price = "Вартість квитків складає 200 грн";
        break;
    case "субота":
    case "неділя":
        price = "Вартість квитків складає 250 грн";
        break;
    default:
        price = "Помилка введення дня тижня";
}
console.log(price);
alert(price);