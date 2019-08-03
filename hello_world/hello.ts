// From https://www.typescriptlang.org/docs/tutorial.html
function greeter(person: string) {
    return "Hello, " + person;
}

var user = "world!";

document.body.innerHTML = greeter(user);
