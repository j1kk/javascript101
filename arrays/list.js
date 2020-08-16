var todos = ["Buy New Turtle"];
window.setTimeout(function() {
    // put all of your JS code from the lecture here
var input = prompt("What would you like to do?");

while(input !== "quit"){
    // handle input
    if (input === "list") {
        console.log(todos);
    } else if(input === "new") {
        // ask for new todo
        var newTodo = prompt("Enter new todo");
        // add to todos array
        todos.push(newTodo);
    }
    // ask again for new input
     input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");
  }, 500);


// note:
// Chrome browser behaves a little strangely when using alert, prompt, or confirm functions. It doesn't display the HTML on the page until after the popup has been closed. This is problematic since our HTML contains instructions for the user to be able to use the app we're building.

// You can avoid this by wrapping your JS code in the following setTimeout function:
// window.setTimeout(function() {
//     // put all of your JS code from the lecture here
// },500);

