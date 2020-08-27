window.setTimeout(function () {
    // put all of your JS code from the lecture here
    var input = prompt("What would you like to do?");
    var todos = ["Buy New Turtle"];
    while (input !== "quit") {
        // handle input
        if (input === "list") {
            listTodos();
        } else if (input === "new") {
            addTodo();
        } else if (input === "delete") {
            deleteTodo

        }
        // ask again for new input
        input = prompt("What would you like to do?");
    }
    console.log("OK, YOU QUIT THE APP");

    function listTodos() {
        console.log("**********")
        todos.forEach(function (todo, i) {
            console.log(i + ":" + todos);
        });
        console.log("**********")
    }

    function addTodo() {
        // ask for new todo
        var newTodo = prompt("Enter new todo");
        // add to todos array
        todos.push(newTodo);
        console.log("Added Todo");
    }

    function deleteTodo() {
        // ask for index of todo to be deleted
        var index = prompt("Enter of index of todo to delete");
        // delete that todo
        // splice()
        todos.splice(index, 1);
        console.log("Deleted Todo");
    }
}, 500);