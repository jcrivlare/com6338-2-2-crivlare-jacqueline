function greet() {
    var name = prompt ("What is your name?");
    alert("Hello, " + name);
    var age = prompt ("How old are you?");
    var ageNum = parseInt(age);
    var answer = confirm("Have you had a birthday yet this year?")

    var currentYear = new Date().getFullYear();

    if (answer) {
        var yearBorn = currentYear - ageNum;
    } else {
        var yearBorn = currentYear - ageNum - 1;
    }

    alert("You were born in " + yearBorn);
}