const questions = [
	{
	category: "math",
	question: "what is 2 + 2",
	choices: ["5", " 4", "8"],
	answer: "4"
},
  {
    category: "Math",
    question: "What is 12 × 8?",
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
	



const getRandomQuestion = (questions = [question]) => {

};

const getRandomComputerChoice = (questions.choices) => {

}

const getResults = (questions.question, choice) {
	if (answer == choices) {
		return `The computer's choice is correct!`
	} else {
		return `The computer's choice is wrong. The correct answer is: ${answer}`
	}
}

