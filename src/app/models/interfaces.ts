
export interface MultipleChoiceWord {
  id: number;
  word: string;
  definition: string;
  choices: string[];
  example?: string;
  tags?: string; // 👈 Le '?' le rend optionnel (ou supprimez la ligne)
}


export interface SimpleWord {
  id: number;
  tags: string;
  word: string;
  definition: string;
  type: string;             // Utile pour afficher (nom, verbe, adjectif...)
  example_sentence?: string; // Utile si vous affichez la phrase d'exemple
  difficulty?: string;      // À garder uniquement si affiché dans la liste/tableau
}

