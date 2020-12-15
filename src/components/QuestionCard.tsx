import React from 'react';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, questionNr, totalQuestions, userAnswer }) => {
    return <React.Fragment> <p className="number">
        Question:{questionNr}/{totalQuestions}
    </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map(answer => (
                <div key={answer}>
                    <button  value = {answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                    </button>
                </div>
            ))}
        </div>
    </React.Fragment>
}

export default QuestionCard;