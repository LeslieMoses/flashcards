'use strict';
// requiring inquirer
var inquirer = require('inquirer');


// Create constructor: BasicCard (front, back)
function BasicCard(front, back) {
    //key obj pairs
    this.front = front;
    this.back = back;
}
// try BasicCard
// setting front and back arguments of BasicCard
var firstPrez = new BasicCard("Who was the first president of the United States?", "George Washington");
//showing full question of the firstPrez obj  
console.log(firstPrez.front);
//showing answer of the firstPrez obj  
console.log(firstPrez.back);

// 	Create constructor: ClozeCard (text, cloze)
function ClozeCard(fullText, cloze) {
    // first argument contains full sentence
    this.fullText = fullText;
    // 2nd argument contains removed words
    this.cloze = cloze;
    // method for replacing the removed words with ellipses ... (leaving the partial text)
    this.partialText = function() {
        //doesn't work, but tried to search then repace cloze txt with ellipses
        // if (/[this.cloze]/i.test(this.fullText) {
        //         console.log("works so far");

    }


}

//new obj based on constructor function
var firstPrez = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
//showing full text statement of the firstPrez obj  
console.log(firstPrez.fullText);
//show cloze part of statement of the firstPrez obj  
console.log(firstPrez.cloze);
//for inquirer, setting var to user input
// var questions = [

//     {
//         type: 'input',
//         name: 'first_name',
//         message: "What's your first name?"
//     }

// ];
//return info from inquirer
// inquirer.prompt(questions).then(function(answers) {
// format return info
//     console.log(JSON.stringify(answers, null, '  '));
// });