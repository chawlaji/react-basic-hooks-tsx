import React, {useState} from 'react';
//components
import QuestionsCard from './components/QuestionCard';
//types
import {QuestionsState,Difficulty} from './api/Api'
//api calls
import {fetchQuizQuestions } from './api/Api';

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
  };
  
const TOTAL_QUESTIONS= 10;

const App: React.FC = () =>{
const [loading,setLoading]=useState(false);
const [questions,setQuestions]=useState<QuestionsState[]>([]);
const [number,setNumber]=useState(0);
const [userAnswers,setuserAnswers]=useState([]);
const [score,setScore]=useState(0);
const [gameOver,setgameOver]=useState(true);

console.log(fetchQuizQuestions(TOTAL_QUESTIONS,Difficulty.EASY));
    const startTrivia =async () =>{}
    const checkAnswer =(e:React.MouseEvent<HTMLButtonElement>) =>{

    }
    const netQuestion = () =>{

    }
return (<div className="App">
    <h1>Computer Science Quiz</h1>
    <button className="start" onClick={startTrivia}>Start</button>
    <p className="score">Score:</p>
    <p>Loading Questions...</p>
    {/* <QuestionsCard  
    quetsionNr= {number +1}
    totalQuestions = {TOTAL_QUESTIONS}
    question={questions[number].question}
    answers={questions[number].answers}
    userAnswer= {userAnswers ? userAnswers[number]:undefined}
    callback={checkAnswer}

    /> */}
    <button className="next" onClick={netQuestion}>Next Question</button>

</div>);
}

export default App;
