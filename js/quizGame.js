const questions = [
	{
	category: "math",
	question: "what is 2 + 2?",
	choices: ["5", "4", "8"],
	answer: "4" 
},
  {
    category: "Math",
    question: "What is 12 * 8?",
    choices: ["96", "108", "100"],
    answer: "96"
  },
  { 
    category: "Sports",
    question: "How many players are on a soccer team on the field?",
    choices: ["9", "11", "12"],
    answer: "11"
  },
    {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "HO"],
    answer: "H2O"
  },
  {
    category: "Geography",
    question: "Which continent is the Sahara Desert located on?",
    choices: ["Asia", "Africa", "South America"],
    answer: "Africa"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["George Washington", "Abraham Lincoln", "John Adams"],
    answer: "George Washington"
  }
];
	



const getRandomQuestion = (questions) => {
    return questions[Math.floor(Math.random() * questions.length)]
};

const getRandomComputerChoice = (choices) => {
   // Generate a random index between 0 and choices.length - 1
   const randomIndex = Math.floor((Math.random) * choices.length)

	return choices[randomIndex];

}

function getResults(question, choice) {
  if (choice === question.answer) {
		return `The computer's choice is correct!`
	} else {
		return `The computer's choice is wrong. The correct answer is: ${answer}`
	}
};


console.log(questions[0].question);
console.log(questions[0].choices);

