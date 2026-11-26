import type { ExerciseSection } from './exercises';

export const reviewThreeExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    title: 'Word formation: Industrial action',
    instruction: 'Use the word given in capitals to form a word that fits in the space.',
    questions: [
      {
        number: 1,
        parts: [
          '(WORK) ',
          " at Shepparton Carpets Ltd voted today to continue with their industrial action. Union leader Elaine Watkins issued a statement saying: 'Although we do not envisage an all-out strike at this stage, everyone at the plant will continue to refuse to work (TIME) ",
          ' until this dispute is settled. We urge (MANAGE) ',
          " to reconsider their proposals.' The industrial action, which began three weeks ago, has affected (PRODUCE) ",
          " at the factory. Joe Turner, Managing Director of Shepparton Carpets, has, however, refused to bow to union demands. 'If Shepparton Carpets wants to survive, it has to become more (COMPETE) ",
          ",' he said. 'It is my responsibility as an (EMPLOY) ",
          ' of over 500 (EMPLOY) ',
          ' to ensure this company continues to make a profit. (PERIOD) ',
          ", we have to make changes to improve efficiency. If we don't, we'll all be out of a job. It may not be pleasant, but it is essential. Some of the working practices at the factory are, frankly, (ANTIQUE) ",
          ' and totally (APPLY) ',
          " to the modern world. I just wish the unions would work with me on this, rather than fighting me every step of the way.'"
        ],
        answers: [
          ['Workers'],
          ['overtime'],
          ['management', 'managers'],
          ['productivity', 'production'],
          ['competitive'],
          ['employer'],
          ['employees'],
          ['Periodically'],
          ['antiquated'],
          ['inapplicable']
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
          'That medicine was very effective and I started to feel better immediately. (magic)\nThat medicine ',
          ' and I started to feel better immediately.'
        ],
        answers: [['worked like magic']]
      },
      {
        number: 12,
        parts: [
          'The day started really well when we heard that Bob had been given his own TV series. (flying)\nThe day ',
          ' when we heard that Bob had been given his own TV series.'
        ],
        answers: [['got off to a flying start']]
      },
      {
        number: 13,
        parts: [
          "I do like this job, but I sometimes wonder if I've chosen the right career path. (again)\nI do like this job, but ",
          " I wonder if I've chosen the right career path."
        ],
        answers: [['every now and again', 'now and again']]
      },
      {
        number: 14,
        parts: [
          'The headmaster was determined to stop all bullying at the school. (end)\nThe headmaster was determined to ',
          ' to all bullying at the school.'
        ],
        answers: [['put an end', 'bring an end']]
      },
      {
        number: 15,
        parts: [
          'No one nowadays believes in witches, do they? (age)\nNo one ',
          ' believes in witches, do they?'
        ],
        answers: [['in this day and age']]
      },
      {
        number: 16,
        parts: [
          'We were just about to leave for the airport when we heard all planes had been grounded. (point)\nWe were ',
          ' for the airport when we heard all planes had been grounded.'
        ],
        answers: [['just on the point of leaving', 'on the point of leaving']]
      },
      {
        number: 17,
        parts: [
          "I'll just finish this e-mail and then I'll be with you. (second)\nIt ",
          " finish this e-mail and then I'll be with you."
        ],
        answers: [
          [
            'will only take me a second to',
            'will just take me a second to',
            'will take me a second to',
            "'ll only take me a second to",
            "'ll just take me a second to",
            "'ll take me a second to"
          ]
        ]
      },
      {
        number: 18,
        parts: [
          'Ralph would hand in his resignation immediately if he could find a better job. (hat)\nRalph would hand in his resignation ',
          ' if he could find a better job.'
        ],
        answers: [['at the drop of a hat']]
      }
    ]
  },
  {
    id: 'C',
    title: 'Phrasal verbs',
    instruction: 'Write one word in each gap.',
    questions: [
      {
        number: 19,
        parts: ['Are you really snowed ', ' with work at the moment?'],
        answers: [['under']]
      },
      {
        number: 20,
        parts: ['Could you lend me five euros to tide me ', ' until I get my pocket money?'],
        answers: [['over']]
      },
      {
        number: 21,
        parts: ["Something's cropped ", " so I'm afraid we'll have to postpone the meeting."],
        answers: [['up']]
      },
      {
        number: 22,
        parts: ["We'd better not take ", ' any more staff until sales increase.'],
        answers: [['on']]
      },
      {
        number: 23,
        parts: ['I can easily while the whole afternoon ', ' reading a good book.'],
        answers: [['away']]
      },
      {
        number: 24,
        parts: ['What time does Jenny usually knock ', ' from work?'],
        answers: [['off']]
      },
      {
        number: 25,
        parts: ['The Prime Minister is determined to press ', ' with the changes despite concerns from his own MPs.'],
        answers: [['ahead', 'on']]
      },
      {
        number: 26,
        parts: ['Over 3,000 workers were laid ', ' when the company moved its factory abroad.'],
        answers: [['off']]
      }
    ]
  },
  {
    id: 'D',
    title: 'Future time: error correction',
    instruction: 'If the bold word or phrase is correct, write OK. If it is incorrect, rewrite it correctly.',
    questions: [
      {
        number: 27,
        parts: ["This time next week (I'll laze) ", ' around at home.'],
        answers: [["I'll be lazing", 'I will be lazing']]
      },
      {
        number: 28,
        parts: ["Do you think (you'll have got) ", ' the computer set up by the time I arrive?'],
        answers: [['OK']]
      },
      {
        number: 29,
        parts: ['(Will I) ', ' get something for dinner when I go to the shop, Angie?'],
        answers: [['Shall I', 'Should I']]
      },
      {
        number: 30,
        parts: ["Sandy won't know which university she's going to until (she'll get) ", ' her exam results.'],
        answers: [['she gets', "she's got", 'she has got']]
      },
      {
        number: 31,
        parts: ["Watch out! That (car's reversing) ", '!'],
        answers: [['OK']]
      },
      {
        number: 32,
        parts: ["When I grow up, (I'm being) ", ' a pop star!'],
        answers: [["I'm going to be", 'I am going to be']]
      },
      {
        number: 33,
        parts: ['Once we get your blood test results, (we decide) ', ' on the best course of action.'],
        answers: [["we'll decide", 'we will decide']]
      },
      {
        number: 34,
        parts: ['We (do change) ', ' trains at Birmingham tomorrow, actually.'],
        answers: [['OK']]
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
        parts: ['At the end of the month, Sarah ', ' in government for exactly 40 years.'],
        answers: [['D will have been working']],
        options: [['A is working', 'B will work', 'C will be working', 'D will have been working']]
      },
      {
        number: 36,
        parts: ['The film is ', ' released at the end of next year.'],
        answers: [['C due to be']],
        options: [['A on the verge of being', 'B on the point of being', 'C due to be', 'D about to be']]
      },
      {
        number: 37,
        parts: ["We'd just been informed that Nick ", ' the new Managing Director.'],
        answers: [['A was to be']],
        options: [['A was to be', 'B was being', 'C is going to be', 'D will be']]
      },
      {
        number: 38,
        parts: ["'Would you pick the kids up from school this afternoon?' 'No, I'm afraid I ", ".'"],
        answers: [["B can't"]],
        options: [["A wouldn't", "B can't", "C shan't", "D don't"]]
      },
      {
        number: 39,
        parts: ["Toby's extremely ", '; he turns up every day at nine o\'clock on the dot.'],
        answers: [['C punctual']],
        options: [['A temporary', 'B long-standing', 'C punctual', 'D subsequent']]
      },
      {
        number: 40,
        parts: ['Have you considered applying for a job with the ', ' service?'],
        answers: [['A civil']],
        options: [['A civil', 'B civic', 'C national', 'D governmental']]
      },
      {
        number: 41,
        parts: ['Too many people work in the public ', ' in this country, in my opinion.'],
        answers: [['D sector']],
        options: [['A division', 'B zone', 'C area', 'D sector']]
      },
      {
        number: 42,
        parts: ['Most teenagers go through a rebellious ', ' for a few years but they soon grow out of it.'],
        answers: [['D phase']],
        options: [['A stint', 'B span', 'C duration', 'D phase']]
      }
    ]
  }
];
