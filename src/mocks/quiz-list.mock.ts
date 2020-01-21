import {Quiz, Theme} from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
  label: 'Jean Gabin a joué dans...',
  answers: [
    {
      value: 'Les tuches II',
      isCorrect: false,
    },
    {
      value: 'La grande illusion',
      isCorrect: true,
    }
  ]
};

export const QUESTION_SPORT: Question = {
  label: 'Combien de sport existe-il ?',
  answers: [
    {
      value: ' < 10',
      isCorrect: false,
    },
    {
      value: ' >= 10 ',
      isCorrect: true,
    }
  ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        name: 'Les Acteurs', // What's happening if I change this value..?
        theme: Theme.Actor,
        questions: [QUESTION_ACTOR],
    },
    {
        name: 'Les Sports',
      theme: Theme.Sport,
        questions: [QUESTION_SPORT],
    }
];
