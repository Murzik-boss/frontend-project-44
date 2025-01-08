import readlineSync from "readline-sync";
function askName() {
  var userName = readlineSync.question("May I have your name? ");
  console.log("Hello, " + userName + "!");
}
export { askName };
