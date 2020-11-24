var readlineSync = require('readline-sync');
var chalk = require('chalk');
const CFonts = require('cfonts');
var score = 0;

questionSet =[
  {
    question : 'How many times has India won the Cricket World Cup?\n1. Four\n2. One\n3. Two\n4. Three',
    answer : '3',
    explaination:'The Indian cricket team are two times World Champions. In addition to winning the 1983 Cricket World Cup, they triumphed over Sri Lanka in the 2011 Cricket World Cup on home soil'
  },
  {
    question: 'Who came up with the law of motion?\n1. Nikola Tesla\n2. Sir Issac Newton\n3. Albert Einstein\n4. Marie Curie',
    answer:'2',
    explaination:'Sir Isaac Newton first presented his three laws of motion in the "Principia Mathematica Philosophiae Naturalis" in 1686.'
  },
  {
    question:'An improper fraction has___________.\n1. Numerator greater than its denominator\n2. Denominator greater than its denominator\n3. A zero as its denominator\n4. A zero as its numerator',
    answer:'1',
    explaination:'A fraction where the numerator (the top number) is greater than or equal to the denominator (the bottom number)'
  },
  {
    question:'Which of the following is the correct spelling?\n1. beneficiary\n2. benefeciary',
    answer:'1',
    explaination:'beneficiary - a person who derives advantage from something, especially a trust, will, or life insurance policy.'
  },
  {
    question:'Guess the super hero from the Emoji : 🕷️  👨.\n1. Super Man\n2. Per Man\n3. Dead Shot\n4. Spider Man',
    answer:'4',
    explaination:'Spider + Man = Spider-Man !'
  },
  {
    question : 'What is Pakora (an indian snack) called in English?\n1. Fritters\n2. Fries\n3. Frinzzels\n4. Frittles ',
    answer: '1',
    explaination:'Pakora, is a fried snack (fritter), originating from the Indian subcontinent.'
  },
  {
    question:'Railways were first introduced to India in the year _______ from Bombay to Thane?\n1. 1857\n2. 1859\n3. 1853\n4. 1851',
    answer:'3',
    explaination:'On 16th April 1853, the first passenger train ran between Bori Bunder (Bombay) and Thane, a distance of 34 km.'
  },
  {
    question:'Which team has successfully defended its title in the IPL?\n1. MI\n2. KKR\n3. SRH\n4. CSK',
    answer:'4',
    explaination:'CSK had become the first-ever in IPL history to successfully defend their title when they beatRCB in IPL 2011 final after winning in 2010.'
  },
  {
    question:'The Mirror used in the Automobiles are?\n1. Concave\n2. Convex\n3. Plain\n4. Reflective',
    answer:'2',
    explaination:'Convex mirrors are used as side view mirrors in a car to see the traffic behind.'
  },
  {
    question:'Which of the following is FALSE regarding the Moon?\n1. There is no dark side of the Moon\n2. The Moon is slowly drifting towards Earth\n3. There is no atmosphere on the Moon\n4. The rise & fall of tides on Earth is caused by the Moon.',
    answer:'2',
    explaination:'The Moon is slowly drifting AWAY from Earth. Every year, the Moon moves roughly 3.8 cm further away from Earth.',
    
  },
  {
    question:'ALL INDIA RADIO in India was started in?\n1. 1919\n2. 1923\n3. 1930\n4. 1939',
    answer:'3',
    explaination:'The All India Radio was started in the year 1930, officially known since 1957 as Akashvani.',
    
  },
  {
    question:'The Electronic Voting Machines used in the Indian elections can record a maximum of ___________ votes.\n1. 1500\n2. 2000\n3. 2500\n4. 3000',
    answer:'2',
    explaination:'An EVM can record a maximum of 2000 votes and can cater to a maximum of 64 candidates.',
    
  },
  {
    question:'What is the name of a therapy in which blood is infused from the recovered patients of COVID-19 to other critical COVID-19 patients?\n1. Convalescent Plasma\n2. Plasma Therapy\n3. Both A and B\n4. Neither A nor B',
    answer:'3',
    explaination:'Both A and B. In Convalescent Plasma or Plasma Therapy the blood of the recovered person as it is rich in antibodies is used to treat other sick people.',
  },
  {
    question:'Where is the headquarters of ISRO?\n1. Chennai\n2. Mumbai\n3. Bengaluru\n4. None of these',
    answer:'3',
    explaination:'The Secretariat of DOS and ISRO Headquarters are located at Antariksh Bhavan in Bangalore.',
  },
  {
    question:'Which country is not part of South Asian Association for Regional Cooperation (SAARC)?\n1. Afghanistan\n2. Bhutan\n3. Maldives\n4. Myanmar',
    answer:'4',
    explaination:'Myanmar is not the member of the SAARC. All the members of the SAARC are; Afghanistan, Bangladesh, Bhutan, India, Nepal, the Maldives, Pakistan and Sri Lanka.',
  }
]


greetUser();
startGame();
displayLeaderBoard();

/*Functions*/

/*Function to greet User with a customised Greeting */
function greet(userName)
{
  CFonts.say(`Hello ${userName}`, {
    font: 'tiny',              // define the font face
    align: 'left',              // define text alignment
    colors: ['#844b93'],         // define all colors
    background: 'transparent',  
    letterSpacing: 1,           // define letter spacing
    lineHeight: 1,              // define the line height
    space: true,                
    maxLength: '0',             // define how many character can be on one line
    gradient: false,            // define your two gradient colors
    independentGradient: false, 
    transitionGradient: false,  
    env: 'node'                 // define the environment CFonts is being executed in
});
}

/*Function to call the Greet function with their names and display Rule Book */
function greetUser(){
  var welcomeMessage = readlineSync.question(chalk.hex('#c56cf0')('Hey 👋\nWhat can I call you? 🤔\n'));
console.log(chalk.hex('#0be881')("\n------------------------------------------------------------"));
greet(welcomeMessage);
console.log(chalk.hex('#0be881')("------------------------------------------------------------"));

console.log(chalk.hex('#0be881')
(`This is a very Random Quiz testing your knowledge and awareness about really Random Things. Too much of the "RANDOM" word right ! Let's Start 🏁 \n`));
readlineSync.question(chalk.hex('#0be881')("Press ENTER to view the Rule-Book 📗\n"));
console.log(chalk.hex('#ffa801')('*******************************************************************'));
console.log(`${chalk.hex('#ffa801')('LET US HAVE A LOOK AT THE RULE-BOOK 👀')}\n
Rule 1️⃣ : Each question will have either 2 or 4 options. You have to \n         select only one that is the correct one. 
Rule 2️⃣ : Each ${chalk.hex('#16C60C')('CORRECT')} answer will fetch you +1.0 points and each \n         ${chalk.hex('#F03A17')('WRONG')} answer will deduct -0.25 from your score. PLAY WISELY!
Rule 3️⃣ : Leaderboard will be shown at the end of the quiz. If you \n         beat the highscore or make it to the TOP 5, take a screenshot\n         and send it to me. I will update the Leaderboard.`);
console.log(chalk.hex('#ffa801')('\n*******************************************************************'));
readlineSync.question(chalk.hex('#0be881')("Press ENTER to start the Quiz\n"));
}

/*Function to Start the Quiz*/
function startGame(){
  for(var i=0;i<questionSet.length;i++){
    currentQuestion = questionSet[i];
    playGame(currentQuestion.question,currentQuestion.answer,currentQuestion.explaination,i);
  }
}

/** Function playGame() to shoot questions one by one with Options */
function playGame(question,answer,explaination,i)
{
  if(i===5){
    console.log((chalk.hex('#0be881'))('************************************************************************\nWELCOME TO LEVEL 2 - Questions will get a little difficult from here 🎖\n************************************************************************'));
  }
  else if(i===10){
    console.log((chalk.hex('#0be881'))('************************************************************\nGood Job! You are now at LEVEL 3, just few more questions 🎖\n************************************************************'));
  }
  console.log(chalk.hex('#ffa801')(`\n------------------------ Question ${i+1} ------------------------`));
  var userAnswer = readlineSync.question(question+"\n");
  if(userAnswer === answer){
    console.log(chalk.hex('#16C60C')('CORRECT ✔️'));
    console.log(chalk.hex('#16C60C')(explaination));
    score = score + 1;
  }
  else{
    console.log(chalk.hex('#F03A17')('INCORRECT ❌'));
    console.log(chalk.hex('#F03A17')(explaination));
    score = score - 0.25;
  }
  console.log(chalk.hex('#ffa801')("------------------------------------------------------------"));
  console.log(chalk.hex('#ffa801')('YOUR CURRENT SCORE : '+score));
  console.log(chalk.hex('#ffa801')("------------------------------------------------------------\n\n"));
}

/**Function to display the leaderboard in the end! */
function displayLeaderBoard(){
  console.log(chalk.hex('#0be881')("Your Total Score: " +score+"\n"));
  if(score>6.5){
    console.log(chalk.hex('#0be881')('CONGRATS! 💯  You have beaten the score to be on the leaderboard, send me a screenshot to update your score on the leaderboard 🔰\n'));
  }
  console.log(chalk.hex('#0be881')('****** LEADERBOARD ******\n1. BOT 1- 13.5\n2. BOT 2- 11.0\n3. BOT 3- 10.5\n4. BOT 4- 9.0\n5. BOT 5- 6.5\n*************************'));
}