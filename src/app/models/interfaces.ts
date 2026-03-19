
export interface MultipleChoiceWord {
  id: number;
  word: string;
  definition: string; // la vraie réponse fournie par le back
  difficulty: string;
  type: string;
  tags?: string;
  example?: string;
  choices: string[];
}

export interface SimpleWord {
  id: number;
  word: string;
  definition: string;
  difficulty: string;
  type: string;
  score?: number;
  tags?: string;
  example_sentence?: string;
}
