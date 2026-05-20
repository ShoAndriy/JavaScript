let genre = prompt("Vyberit ganr muziki (rock, pop, jazz, classical):");
let playlist;

switch (genre) {
    case "rock":
        playlist = "Увімкнено rock-плейлист";
        break;
    case "pop":
        playlist = "Увімкнено pop-плейлист";
        break;
    case "jazz":
        playlist = "Увімкнено jazz-плейлист";
        break;
    case "classical":
        playlist = "Увімкнено classical music";
        break;
    default:
        playlist = "Genre not found";
}
console.log(playlist);
alert(playlist);