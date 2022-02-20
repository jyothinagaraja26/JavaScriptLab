function Question(question,choices,answer){
    this.question=question;
    this.choices=choices;
    this.answer=answer;
}
function Quiz(questions){
    this.questions=questions;
    this.score=0;
    this.questionIndex=0;
}
Quiz.prototype.getQuestionByIndex=function(){
    return this.questions[this.questionIndex];

}

Quiz.prototype.checkAnswer=function(userChoice){
    if(userChoice===this.getQuestionByIndex().answer){
        this.score++;
    }
    this.questionIndex++;

}
Quiz.prototype.isQuizEnded=function(){
    return this.questionIndex===this.questions.length;
}
var questions =[
    new Question("JavaScript supports",["Function","html","css","xml"],"Function"),
    new Question("Which language is used for styling web pages?",["html","jquery","css","html"],"css"),
    new Question("Which is not a JavaScript Framework?",["Python script","Jquery","Django","Nodejs"],"Django"),
    new Question("Which is used for Connect To Database?",["PHP","html","JS","all"],"JS"),
]

function loadPage(){

    if(quiz.isQuizEnded()){
        showScore();
    }else{
var questionElement=document.getElementById("question");
questionElement.innerHTML=quiz.getQuestionByIndex().question;

var options=quiz.getQuestionByIndex().choices;
for(var i=0;i<options.length;i++){
    var element=document.getElementById("choice"+i);
    element.innerHTML=options[i];
    handleOptionButton(options[i],"btn"+i);
}
showProgress();
    }
}
function showProgress(){
    var y=quiz.questionIndex+1;
    document.getElementById("progress").innerHTML="Question " +y+" of " +quiz.questions.length;
}
function handleOptionButton(choice,id){
    var button=document.getElementById(id);
    button.onclick=function(){
        quiz.checkAnswer(choice);
    loadPage();
    }
}
function showScore(){
    var x = "<h1> Result is: </h1>";
 x +="<h2>Your score is : "+ quiz.score+" And your percentage is : "+(quiz.score/questions.length)*100+"%</h2>";
     document.getElementById("quiz").innerHTML=x;
 
}

var quiz = new Quiz(questions);
loadPage();