// "new" - adds a to do
// "list" - lists all todos
// "delete" - remove specific to do
// "quit" - quits app
let input = prompt("What would you like to do?")
const toDo = ['stuff', 'things']
while (input.toLowerCase() !== "quit" && input.toLowerCase() !== "q"){
    if (input.toLowerCase() === 'list'){
        console.log("<---------------->")
        for (i=0; i < toDo.length; i++){
            console.log(`${i}: ${toDo[i]}`)
            // reminder that i logs the index
        }
        console.log("<---------------->")
    }

    input = prompt("What would you like to do?")
}
console.log("Okay, you quit the app!")