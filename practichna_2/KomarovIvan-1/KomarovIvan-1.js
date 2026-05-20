let isAuthorized = prompt('Enter if you are authorized (true or false)');
let internetSpeed = Number(prompt('Enter internet speed'));
let isBanned = prompt('Enter if you are blocked (true or false)');
if (isAuthorized === "true" && internetSpeed >= 20 && isBanned !== "true") {
    console.log("Access allowed");
    alert("Access allowed");
} else {
    console.log("Access denied");
    alert("Access denied");
}