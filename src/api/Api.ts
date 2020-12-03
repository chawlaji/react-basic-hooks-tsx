import axios, { AxiosResponse } from "axios";
import { shuffleArray } from "../common/Util";

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
};

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export type QuestionsState = Question & { answers: string[] };

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endPoint = `https://opentdb.com/api.php?amount=${amount}&category=18&difficulty=${difficulty}&type=multiple`;
    const data = await axios(endPoint).then((reponse: AxiosResponse) => reponse.data);
    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }))



}