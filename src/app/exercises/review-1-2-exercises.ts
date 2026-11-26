import type { ExerciseSection } from './exercises';

export const reviewOneExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    title: 'Word formation',
    instruction: 'Use the word given in capitals to form a word that fits in the space.',
    questions: [
      {
        number: 1,
        parts: [
          'Students learning English as a second language are sometimes given a word by their teacher and asked to give an (EXPLAIN) ',
          ' as to what that word means; in other words, to provide a (DEFINE) ',
          '. The (ASSUME) ',
          ' is that if you know a word, you can define it. (LOGIC) ',
          ', that might make sense, but in reality it is not always (REASON) ',
          ' to assume that. There are words and phrases that even native speakers use in conversation without much (THINK) ',
          ' which can lead to (CONFUSE) ',
          " when you ask a native speaker to define them. Take the (CONCEIVE) ",
          " of 'zeitgeist', for example, which has entered English from German. It's (DOUBT) ",
          " much easier to use than it is to define. With a word like 'zeitgeist', it may be more (SENSE) ",
          " to test the student's understanding in ways other than asking them to define it."
        ],
        answers: [
          ['explanation'],
          ['definition'],
          ['assumption'],
          ['Logically'],
          ['reasonable'],
          ['thought'],
          ['confusion'],
          ['concept', 'conception'],
          ['undoubtedly', 'doubtless'],
          ['sensible']
        ]
      }
    ]
  },
  {
    id: 'B',
    title: 'Key word transformations',
    instruction: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words, including the word given.',
    questions: [
      {
        number: 11,
        parts: [
          "I'm never going to forget to consider Darren's views when I make a decision again. (account)\nThat's the last time I ",
          ' when I make a decision.'
        ],
        answers: [
          [
            "take Darren's views into account",
            "take account of Darren's views",
            "am going to take Darren's views into account",
            "am going to take account of Darren's views",
            "'m going to take Darren's views into account",
            "'m going to take account of Darren's views"
          ]
        ]
      },
      {
        number: 12,
        parts: [
          "I don't know how on earth she thinks of such brilliant plots for her novels. (come)\nHow on earth ",
          ' such brilliant plots for her novels?'
        ],
        answers: [['does she come up with']]
      },
      {
        number: 13,
        parts: [
          "I'm sure Nancy is still presuming that the party starts at nine. (impression)\nI'm sure Nancy ",
          ' that the party starts at nine.'
        ],
        answers: [['is still under the impression', "'s still under the impression"]]
      },
      {
        number: 14,
        parts: [
          "Sean, do you know yet what you're doing this evening? (mind)\nSean, ",
          " yet what you're doing this evening?"
        ],
        answers: [['have you made up your mind', 'have you made your mind up']]
      },
      {
        number: 15,
        parts: [
          "I told Jeanne, thinking that she'd be supportive - how wrong I was! (belief)\nI told Jeanne ",
          " that she'd be supportive - how wrong I was!"
        ],
        answers: [['in the belief']]
      },
      {
        number: 16,
        parts: [
          "There's no way that you're staying out all night with your friends, I'm afraid. (question)\nYour staying out all night with your friends ",
          ", I'm afraid."
        ],
        answers: [['is out of the question', "'s out of the question"]]
      },
      {
        number: 17,
        parts: [
          "I'm glad you now see sense and agree that your parents are right. (senses)\nI'm glad ",
          ' and agree that your parents are right.'
        ],
        answers: [['you have come to your senses', "you've come to your senses"]]
      },
      {
        number: 18,
        parts: [
          'I think you think - wrongly - that this is all a conspiracy against you. (misapprehension)\nI think ',
          ' that this is all a conspiracy against you.'
        ],
        answers: [['you are under the misapprehension', "you're under the misapprehension"]]
      }
    ]
  },
  {
    id: 'C',
    title: 'Idioms and collocations',
    instruction: 'Write one word in each gap.',
    questions: [
      {
        number: 19,
        parts: ['You really have to have your ', ' about you when driving through Birmingham.'],
        answers: [['wits']]
      },
      {
        number: 20,
        parts: ["It's a typical example of not being able to see the ", ' for the trees.'],
        answers: [['wood']]
      },
      {
        number: 21,
        parts: ['Bill Denver? That name rings a ', '.'],
        answers: [['bell']]
      },
      {
        number: 22,
        parts: ["Don't let success go to your ", ' whatever you do!'],
        answers: [['head']]
      },
      {
        number: 23,
        parts: ['We were kept completely in the ', " about what was going on - they didn't tell us anything!"],
        answers: [['dark']]
      },
      {
        number: 24,
        parts: ['Am I going round the ', ' or did you just ask me to marry you?'],
        answers: [['bend']]
      },
      {
        number: 25,
        parts: ["He'll never win the court case. My solicitor says he doesn't have a ", ' to stand on.'],
        answers: [['leg']]
      },
      {
        number: 26,
        parts: ["Dawn's a bit slow on the ", ' sometimes, so maybe she didn\'t realise you were suggesting she gave you a job.'],
        answers: [['uptake']]
      }
    ]
  },
  {
    id: 'D',
    title: 'Phrasal verbs',
    instruction: 'Circle the correct word.',
    questions: [
      {
        number: 27,
        parts: ["We're still trying to ", ' together exactly what went wrong.'],
        answers: [['piece']],
        options: [['part', 'piece', 'set']]
      },
      {
        number: 28,
        parts: ["It's too much information for me to ", ' in in one go.'],
        answers: [['take']],
        options: [['take', 'read', 'get']]
      },
      {
        number: 29,
        parts: ["You'd better ", " up a very good excuse why you didn't come to the meeting."],
        answers: [['think']],
        options: [['create', 'think', 'work']]
      },
      {
        number: 30,
        parts: ['Let me mull this ', " for a while and then I'll get back to you."],
        answers: [['over']],
        options: [['about', 'in', 'over']]
      },
      {
        number: 31,
        parts: ["Toni was totally opposed at first but I think she's ", ' around to the idea now.'],
        answers: [['come']],
        options: [['come', 'made', 'taken']]
      },
      {
        number: 32,
        parts: ['I think you should face up ', " the fact that our relationship's over."],
        answers: [['to']],
        options: [['on', 'with', 'to']]
      },
      {
        number: 33,
        parts: ["We're still trying to ", ' out how the burglars got in.'],
        answers: [['figure']],
        options: [['figure', 'think', 'guess']]
      },
      {
        number: 34,
        parts: ["I'm going to have to ", ' up on what all the road signs mean before my driving test.'],
        answers: [['swot']],
        options: [['learn', 'swot', 'look']]
      }
    ]
  },
  {
    id: 'E',
    title: 'Grammar and vocabulary review',
    instruction: 'Choose the correct answer.',
    questions: [
      {
        number: 35,
        parts: ["I'm in a real ", " and I just don't know what to do."],
        answers: [['A dilemma']],
        options: [['A dilemma', 'B paradox', 'C query', 'D hunch']]
      },
      {
        number: 36,
        parts: ["They're staying in rented accommodation for the time ", '.'],
        answers: [['D being']],
        options: [['A going', 'B making', 'C doing', 'D being']]
      },
      {
        number: 37,
        parts: ['Is it really the first time ', ' first class?'],
        answers: [["C you've ever flown"]],
        options: [['A you ever fly', "B you're ever flying", "C you've ever flown", "D you've ever been flying"]]
      },
      {
        number: 38,
        parts: ['', ' getting a pet tarantula?'],
        answers: [['B Is Claire really thinking of']],
        options: [
          'A Does Claire really think of',
          'B Is Claire really thinking of',
          'C Has Claire really thought that',
          'D Has Claire really been thinking that'
        ]
      },
      {
        number: 39,
        parts: ['', " Alan for hours but he just doesn't answer his mobile. I hope nothing's wrong."],
        answers: [["D I've been calling"]],
        options: ['A I call', "B I'm calling", "C I've called", "D I've been calling"]
      },
      {
        number: 40,
        parts: ['Looking at your CV, I ', ' you used to live in Australia.'],
        answers: [['A gather']],
        options: ['A gather', 'B do gather', 'C am gathering', 'D have gathered']
      },
      {
        number: 41,
        parts: ['I ', " it's going to snow tonight, don't you?"],
        answers: [['C reckon']],
        options: ['A speculate', 'B reflect', 'C reckon', 'D ponder']
      },
      {
        number: 42,
        parts: ["'Have you finished with the paper yet?' 'I've ", " started reading it!'"],
        answers: [['B just']],
        options: ['A even', 'B just', 'C still', 'D already']
      }
    ]
  }
];
