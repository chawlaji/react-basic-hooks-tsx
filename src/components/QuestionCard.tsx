import React from 'react';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    quetsionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, quetsionNr, totalQuestions, userAnswer }) => {
    return <React.Fragment> <p className="number">
        Question:{quetsionNr}/{totalQuestions}
    </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map(answer => (
                <div>
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                    </button>
                </div>
            ))}
        </div>
    </React.Fragment>
}

export default QuestionCard;
