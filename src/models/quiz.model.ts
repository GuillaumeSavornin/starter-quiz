import { Question } from './question.model';

export enum Theme {
  Sport = 'Sport',
  Actor = 'Actor',
  Other = 'Other',
}

export interface Quiz {
    name: string;
    theme: Theme;
    questions: Question[];
    creationDate?: Date;
}
