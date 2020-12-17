import React from 'react';
import { AnswerObject } from '../App';
import './QuestionCard.scss';
type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>)=> void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, questionNr, totalQuestions, userAnswer }) => {
    return <React.Fragment> <p className="number">
        Question:{questionNr}/{totalQuestions}
    </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div className="card question-card">
            {answers.map(answer => (
                <div className="w-100" key={answer}>
                    <button className="answer-button"disabled={!!userAnswer} value = {answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                    </button>
                </div>
            ))}
        </div>
    </React.Fragment>
}

export default QuestionCard;
