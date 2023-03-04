// "new" - adds a to do
// "list" - lists all todos
// "delete" - remove specific to do
// "quit" - quits app
let input = prompt("What would you like to do?");
// using let because input will be re-assigned
const toDo = []
while (input.toLowerCase() !== "quit" && input.toLowerCase() !== "q"){
    if (input.toLowerCase() === 'list'){
        // console.log("--------------------------------");
        for (i=0; i < toDo.length; i++){
            console.log(`${i}: ${toDo[i]}`);
            // reminder that i logs the index
        }
        console.log("--------------------------------");
    } else if (input.toLowerCase() === 'new'){
        const newTodo = prompt("Okay, what is the new to do?");
        toDo.push(newTodo);
    } else if (input.toLowerCase() === 'delete'){
        const deleteToDo = prompt("Okay, type the index to which you want to delete");
        toDo.splice(deleteToDo,1)
    }

    input = prompt("What would you like to do?")
    //input being reassigned here too
}
console.log("Okay, you quit the app!");