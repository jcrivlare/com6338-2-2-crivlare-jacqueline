
    var questionsArr = [
        {
            question: 'Michael holds a yearly award ceremony for his employees called "The Dundies".',
            answer: true
        } ,
    
        {
            question: 'Jim introduces "Flonkerton" as a Dunder Mifflin Olympic Sport.',
            answer: true 
        } ,
    
        {
            question: 'Ryan starts a fire making spaghettios in the microwave that almost burns down the office.',
            answer: false
        } ,
    
        {
            question: 'Phyllis marries a man named Bob Vance, of Vance Plumbling and Heating.',
            answer: false 
        } ,
    
        {
            question: 'Michael creates an online dating profile and his username is "Little Kid Lover".',
            answer: true
        } ,
    
        {
            question: 'Michael takes Jan on a vacation to Italy.',
            answer: false
        } ,
    
        {
            question: 'Michael once promised a class of elementary school kids he would pay for their college tuitions.',
            answer: true
        }
    ]
    
    
    
    
    
    //for 
    function runQuiz () {}
        var answersArr = [];
        for(let i = 0; i < questionsArr.length; i++) {
            var question = questionsArr[i].question;
            var answer = confirm(question);
            answerArr[i] = answer;
            //console.log(questionsArr[i].question);
        }
            
            
    
    
    
    //confirm
        //var answer = confirm("Is that your final answer?")
        
    //scoring
    //finalPercentage =
    //alert("You scored" + finalPercentage)
    
    
    
    
    
    //use a for loop to iterate the questionsArr
    //and use the q and a properties and CONFIRM to ask user questions and compare answers
    
    //after all questions asked and answered, use ALERT to display percentage to user (rounded)
    
    
    
    
    //function greet() {
        //var name = prompt ("What is your name?");
        //alert("Hello, " + name);
        //var age = prompt ("How old are you?");
        //var ageNum = parseInt(age);
        //var answer = confirm("Have you had a birthday yet this year?")
    
       // var currentYear = new Date().getFullYear();
    
        //if (answer) {
           // var yearBorn = currentYear - ageNum;
        //} else {
           // var yearBorn = currentYear - ageNum - 1;
        //}
    
       // alert("You were born in " + yearBorn);
      //  }