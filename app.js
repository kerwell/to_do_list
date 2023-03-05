// "new" - adds a to do
// "list" - lists all todos
// "delete" - remove specific to do
// "quit" - quits app
let input = prompt("What would you like to do?");
// using let because input will be re-assigned
const toDo = []
while (input.toLowerCase() !== "quit" && input.toLowerCase() !== "q"){
    if (input.toLowerCase() === 'list'){
        console.log("--------------------------------");
        for (let i=0; i < toDo.length; i++){
            console.log(`${i}: ${toDo[i]}`);
            // reminder that i logs the index
        }
        console.log("--------------------------------");
    } else if (input.toLowerCase() === 'new'){
        const newToDo = prompt("Okay, what is the new to do?");
        toDo.push(newToDo);
        console.log(`${newToDo} added to list`)
    } else if (input.toLowerCase() === 'delete'){
        const deleteToDo = parseInt(prompt("Okay, type the index to which you want to delete"));
        //putting parse int ^ because if it returns 'NaN' it defaults to index 0
        if (!Number.isNaN(deleteToDo)){
        const deleted = toDo.splice(deleteToDo,1);
        console.log(`${deleted} deleted...`);
        } else {
            console.log("Unknown index");
        }
    }

    input = prompt("What would you like to do?");
    //input being reassigned here too
}
console.log("Okay, you quit the app!");