// "new" - adds a to do
// "list" - lists all todos
// "delete" - remove specific to do
// "quit" - quits app
let input = prompt("What would you like to do?")
const toDo = ['']
while (input.toLowerCase() !== "quit" && input.toLowerCase() !== "q"){
    input = prompt("What would you like to do?")
}
console.log("Okay, you quit the app!")