import type { ExerciseSection } from './exercises';

export const reviewSevenExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    title: 'Word formation: Credit card debt',
    instruction: 'Use the word given in capitals to form a word that fits in the space.',
    questions: [
      {
        number: 1,
        parts: [
          'A recent government report (HIGH) ',
          ' the (EXTEND) ',
          ' to which credit card debt is spiralling. Blame is (PORTION) ',
          ' solely to the credit card companies, who, the report claims, will go to any (LONG) ',
          ' to attract new customers. (ADD) ',
          ', according to the report, they are responsible for encouraging existing customers to borrow more by raising their monthly limit. Certainly a recent advertising campaign by a major credit card company - which has since been (DRAW) ',
          ' - seems to bear these findings out.\nHowever, while the responsibility of the credit card companies is not (CONSIDER) ',
          ', it is, in my opinion, unfair to lay all the blame on their shoulders. The (MAJOR) ',
          ' of credit card users are able to make their (PAY) ',
          ' on time without difficulty. There will always be a (MINOR) ',
          " of people in our society who are financially irresponsible. If they run up huge debts, is it really the credit card company's fault?"
        ],
        answers: [
          ['highlights', 'highlighted'],
          ['extent'],
          ['apportioned'],
          ['lengths'],
          ['Additionally'],
          ['withdrawn'],
          ['inconsiderable'],
          ['majority'],
          ['repayments', 'payments'],
          ['minority']
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
        parts: ["You're asking for trouble by arguing with the boss so aggressively like that. (ice)\nYou're ", ' by arguing with the boss so aggressively like that.'],
        answers: [['skating on thin ice']]
      },
      {
        number: 12,
        parts: ['Are you saying Dan gets angry easily, Fiona? (short)\nAre you saying Dan ', ', Fiona?'],
        answers: [
          [
            'has a short temper',
            'has got a short temper',
            'has a short fuse',
            'has got a short fuse'
          ]
        ]
      },
      {
        number: 13,
        parts: ["There's no doubt shopping around is a good idea. (pays)\nThere's no doubt ", ' around.'],
        answers: [['it pays to shop']]
      },
      {
        number: 14,
        parts: ["I'd prefer to get value for money by staying at the theme park all day. (worth)\nI'd rather I ", ' by staying at the theme park all day.'],
        answers: [["got my money's worth"]]
      },
      {
        number: 15,
        parts: ["I think Dad's worried about a lot of things at the moment. (mind)\nI think Dad ", ' at the moment.'],
        answers: [
          [
            'has a lot on his mind',
            'has got a lot on his mind',
            'has a lot of things on his mind',
            'has got a lot of things on his mind'
          ]
        ]
      },
      {
        number: 16,
        parts: ["Why didn't you search everywhere for your wallet? Then you might have found it. (low)\nIf ", ' for your wallet, you might have found it.'],
        answers: [['you had searched high and low', "you'd searched high and low"]]
      },
      {
        number: 17,
        parts: ["I can't cope at all with my new job, and that bothers me. (depth)\nI wish ", ' my new job.'],
        answers: [
          [
            "I wasn't out of my depth in",
            "I wasn't out of my depth with",
            "I weren't out of my depth in",
            "I weren't out of my depth with"
          ]
        ]
      },
      {
        number: 18,
        parts: ['Jane was the unlucky one so she had to tell Ed he was losing his company car. (straw)\nIf Jane ', ', she wouldn\'t have had to tell Ed he was losing his company car.'],
        answers: [["hadn't drawn the short straw", 'had not drawn the short straw']]
      }
    ]
  },
  {
    id: 'C',
    title: 'Topic vocabulary: Money',
    instruction: 'Write a word from the box in each gap. There is one word you will not use.',
    wordBox: ['compensation', 'debit', 'deposit', 'dividend', 'mortgage', 'overdraft', 'payment', 'pension', 'sum'],
    questions: [
      {
        number: 19,
        parts: ["It'll take me 25 years to pay off the ", '. Then the house will be mine!'],
        answers: [['mortgage']]
      },
      {
        number: 20,
        parts: ['We pay all our bills by direct ', ", so we don't have to spend hours in long queues."],
        answers: [['debit']]
      },
      {
        number: 21,
        parts: ["We're paying for the car in instalments. In fact, we made the first down ", ' yesterday.'],
        answers: [['payment']]
      },
      {
        number: 22,
        parts: ['When the insurance policy matures, you can either have a one-off lump ', ' payment, or receive a certain amount per month for ten years.'],
        answers: [['sum']]
      },
      {
        number: 23,
        parts: ['My grandfather used to be in the army, so he gets a small serviceman\'s ', ' every month.'],
        answers: [['pension']]
      },
      {
        number: 24,
        parts: ['I never seem to have any money left in the last week of the month. Maybe I should arrange a/an ', ' with the bank.'],
        answers: [['overdraft']]
      },
      {
        number: 25,
        parts: ['We ask that you pay a 10% ', ' now, and the balance on receipt of the goods.'],
        answers: [['deposit']]
      },
      {
        number: 26,
        parts: ['The judge awarded Mrs Thompson £300,000 ', ' for unfair dismissal.'],
        answers: [['compensation']]
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
        parts: ['If we all ', ' together, we should be able to afford something special.'],
        answers: [['club']],
        options: [['collect', 'club', 'group']]
      },
      {
        number: 28,
        parts: ["You'll need to ", ' up a lot more support before the council listens to you.'],
        answers: [['drum']],
        options: [['drum', 'beat', 'bang']]
      },
      {
        number: 29,
        parts: ["Reggie's ", " up over 3,000 hours' flying time already."],
        answers: [['clocked']],
        options: [['watched', 'timed', 'clocked']]
      },
      {
        number: 30,
        parts: ["My debts are ", " up and I'm not bringing enough money in. It's worrying!"],
        answers: [['mounting']],
        options: [['mounting', 'climbing', 'getting']]
      },
      {
        number: 31,
        parts: ["Let's ", ' the situation up very carefully before making any important decisions.'],
        answers: [['size']],
        options: [['shape', 'size', 'lengthen']]
      },
      {
        number: 32,
        parts: ['I know it sounds a lot, but if you ', " it down into an amount per month, it's actually not that much."],
        answers: [['break']],
        options: [['break', 'knock', 'hit']]
      },
      {
        number: 33,
        parts: ['I will lend you the money, but you have to ', ' me back by the end of the week.'],
        answers: [['pay']],
        options: [['give', 'pay', 'hand']]
      },
      {
        number: 34,
        parts: ['Hundreds of British people have been ', ' up land all over western Crete.'],
        answers: [['buying']],
        options: [['buying', 'spending', 'purchasing']]
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
        parts: ["It's high time ", ' up to your responsibilities as a parent.'],
        answers: [['C you faced']],
        options: [['A to face', 'B you face', 'C you faced', 'D you have faced']]
      },
      {
        number: 36,
        parts: ["I'd rather you ", " anything for tonight, but I suppose it's too late to change things now."],
        answers: [["D hadn't arranged"]],
        options: [['A not arrange', "B don't arrange", "C didn't arrange", "D hadn't arranged"]]
      },
      {
        number: 37,
        parts: ['Do you wish ', ' a formal complaint?'],
        answers: [['A to make']],
        options: [['A to make', 'B making', 'C you made', 'D you to make']]
      },
      {
        number: 38,
        parts: ["If only people in our grandparents' generation ", ' the opportunities that we take for granted nowadays.'],
        answers: [['B could have had']],
        options: [['A could have', 'B could have had', 'C would have had', 'D have had']]
      },
      {
        number: 39,
        parts: ['Joan definitely wishes she ', ' to do all the housework.'],
        answers: [["B didn't have"]],
        options: [["A doesn't have", "B didn't have", "C wouldn't have", "D hadn't"]]
      },
      {
        number: 40,
        parts: ['', " any heavier, we'd never have made it on time."],
        answers: [['B Had the traffic been']],
        options: [
          'A Were the traffic',
          'B Had the traffic been',
          'C Should the traffic be',
          'D Be the traffic'
        ]
      },
      {
        number: 41,
        parts: ["I'd never kill an animal unless it ", ' me first.'],
        answers: [['D attacked']],
        options: [['A has attacked', 'B will attack', 'C attacks', 'D attacked']]
      },
      {
        number: 42,parts: ['Imagine the Internet ', " created. Our lives would be so different, don't you think?"],
answers: [["B hadn't been"]],
options: [["A wasn't", "B hadn't been", 'C to not be', 'D to not have been']]
}
]
}
];
