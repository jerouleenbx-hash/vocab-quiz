import type { ExerciseSection } from './exercises';

export const progressTestTwoExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    title: 'Word formation: The RNLI',
    instruction: 'Use the word given in capitals to form a word that fits in the space.',
    questions: [
      {
        number: 1,
        parts: [
          'The RNLI (Royal National Lifeboat Institution) is an organisation (DEPEND) ',
          " of government control, dedicated to saving lives at sea. The RNLI has an active fleet of several hundred lifeboats around the length and (BROAD) ",
          " of Britain's coastline.\nSince it was founded in 1824, the RNLI has had an extremely (SIGNIFY) ",
          ' impact on maritime safety, saving over 130,000 lives.\nBecause the RNLI is not funded by the government, it relies on the (GOOD) ',
          ' of the public to cover its costs, its income coming from membership fees and (CHARITY) ',
          ' donations. Some people have raised (OBJECT) ',
          ' to this, saying that such an (VALUE) ',
          ' service should be government-funded.\nThe lifeboat crews are almost all volunteers. They are generally (KNOW) ',
          ' by the British people as being (EXAMPLE) ',
          ' in their (SELF) ',
          ', frequently putting their lives at risk to save others.'
        ],
        answers: [
          ['independent'],
          ['breadth'],
          ['significant'],
          ['goodwill'],
          ['charitable'],
          ['objections'],
          ['invaluable'],
          ['acknowledged', 'known'],
          ['exemplary'],
          ['selflessness']
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
        parts: ["'I haven't made any firm decisions yet,' said Laurence. (open)\nLaurence said he ", ' at that time.'],
        answers: [
          [
            'was keeping his options open',
            'was leaving his options open'
          ]
        ]
      },
      {
        number: 12,
        parts: ['Paul and Pete share so many similar interests. (common)\nPaul ', ' Pete.'],
        answers: [
          [
            'has so much in common with',
            'has got so much in common with',
            'has so many interests in common with',
            'has got so many interests in common with'
          ]
        ]
      },
      {
        number: 13,
        parts: ['It would be in your interest to take an earlier train on Sunday. (off)\nYou would ', ' an earlier train on Sunday.'],
        answers: [['be better off taking']]
      },
      {
        number: 14,
        parts: ["I've become extremely good at missing the rush hour over the last few weeks. (fine)\nI've got missing the rush hour ", ' over the last few weeks.'],
        answers: [['down to a fine art']]
      },
      {
        number: 15,
        parts: ['Although Rudy really didn\'t want to play cricket on Sunday, he agreed in the end. (dead)\nDespite ', ' cricket on Sunday, Rudy agreed in the end.'],
        answers: [['being dead set against playing']]
      },
      {
        number: 16,
        parts: ['Karen should be made responsible for dealing with customer complaints. (charge)\nIt\'s high time Karen ', ' dealing with customer complaints.'],
        answers: [['was put in charge of', 'were put in charge of']]
      },
      {
        number: 17,
        parts: ['My parents are furious with me for getting a tattoo and so have grounded me. (arms)\nMy parents, ', ' getting a tattoo, have grounded me.'],
        answers: [['who are up in arms about', 'who are up in arms over']]
      },
      {
        number: 18,
        parts: ["'I don't think we're going to survive, David,' I said, but of course we did. (tale)\nI told David I thought we ", ', but of course we did.'],
        answers: [["wouldn't live to tell the tale", 'would not live to tell the tale']]
      },
      {
        number: 19,
        parts: ["I'd prefer to come out on top in the end, though! (laugh)\nI'd rather ", ' in the end, though!'],
        answers: [['have the last laugh']]
      },
      {
        number: 20,
        parts: ["I wish coffee didn't affect me. (effect)\nIf ", ' me.'],
        answers: [
          [
            'only coffee had no effect on',
            "only coffee didn't have any effect on",
            "only coffee didn't have an effect on"
          ]
        ]
      }
    ]
  },
  {
    id: 'C',
    title: 'Open cloze: Krakatoa',
    instruction: 'Write one word in each gap.',
    questions: [
      {
        number: 21,
        parts: [
          'Volcanic eruption has been a constant threat to our natural environment for millions of years, but seldom in recent times ',
          ' a volcano erupted with the ferocity of Krakatoa.\nKrakatoa, ',
          ' is a volcanic island group in Indonesia, erupted on 27th August 1883. ',
          ' only was the explosion ',
          ' loud that it was heard as far away (more than 3,000 km) as Perth in Australia, but it is also recognised as ',
          ' the loudest sound ',
          ' recorded.\nTens of thousands of people in the region were killed, many ',
          ' in the enormous tsunamis which the eruption produced - tsunamis which eventually reached South Africa and the English Channel.\nThe explosion also had a major effect on the ',
          " world's weather system. The volcanic dust in the atmosphere reduced the ",
          ' of sunlight reaching the earth\'s surface, reducing global temperatures by more than one degree centigrade. Only after five years had passed ',
          ' global temperatures begin to return to normal.'
        ],
        answers: [
          ['has'],
          ['which'],
          ['Not'],
          ['so'],
          ['being'],
          ['ever'],
          ['drowning', 'drowned', 'perishing', 'perished'],
          ['whole', 'entire'],
          ['amount'],
          ['did']
        ]
      }
    ]
  },
  {
    id: 'D',
    title: 'Gapped sentences',
    instruction: 'For each question, write one word which can be used in all three sentences.',
    questions: [
      {
        number: 31,
        parts: [
          "He's actually quite a ",
          ' name in the world of bathroom fittings.\nIt was very ',
          " of you to admit you were wrong.\nThere's no need to make such a ",
          " thing out of this; it's not that important."
        ],
        answers: [['big']]
      },
      {
        number: 32,
        parts: [
          "Ted's got a bit of a ",
          ' temper so don\'t say anything to upset him.\nWhy do I always seem to draw the ',
          " straw?\nWe're running ",
          ' of sugar again.'
        ],
        answers: [['short']]
      },
      {
        number: 33,
        parts: [
          "I'll be with you in a ",
          " of days.\nThat's not a fact, it's a ",
          " of opinion.\nNo ",
          " how much you try, you'll never get me to change my mind."
        ],
        answers: [['matter']]
      },
      {
        number: 34,
        parts: [
          "You'd better get your ",
          ' together and start learning your lines.\nThey were caught in the ',
          ' of handing over the drugs.\nAngie was just putting on an ',
          " - she wasn't really upset."
        ],
        answers: [['act']]
      },
      {
        number: 35,
        parts: [
          "We're going to be in ",
          ' trouble if anyone catches us.\nThere was ',
          " silence for a second, then everyone started laughing.\nTurn left at the corner, and the cathedral's ",
          ' ahead.'
        ],
        answers: [['dead']]
      },
      {
        number: 36,
        parts: [
          'The suffering of those poor innocent people just makes me ',
          " at heart.\nI'm ",
          " and tired of her constant criticisms.\nWhere have you been? We've been worried ",
          '!'
        ],
        answers: [['sick']]
      },
      {
        number: 37,
        parts: [
          'I hope the judge makes an ',
          ' of him and throws him in jail.\nCould you give me a more specific ',
          '?\nAs a teacher, you have to set an ',
          ' to the children.'
        ],
        answers: [['example']]
      },
      {
        number: 38,
        parts: [
          'Am I ',
          " in thinking you've just moved to Basingstoke?\nYou've got no ",
          ' to answer me back like that.\nDo animals have the concept of ',
          ' and wrong?'
        ],
        answers: [['right']]
      },
      {
        number: 39,
        parts: [
          'Simon, this is Angela, my ',
          " half.\nLet's play draughts or, ",
          " yet, chess.\nDon't you think you had ",
          ' think about this a bit more carefully?'
        ],
        answers: [['better']]
      },
      {
        number: 40,
        parts: [
          "You're cutting it ",
          ", aren't you? The meeting's just about to start.\nMake sure you read the ",
          " print before you sign.\nThere's a ",
          ' line between good business practice and corruption.'
        ],
        answers: [['fine']]
      }
    ]
  },
  {
    id: 'E',
    title: 'Vocabulary review',
    instruction: 'Choose the correct answer.',
    questions: [
      {
        number: 41,
        parts: ['My jeans ', " in the wash and they're too small for me now."],
        answers: [['C shrank']],
        options: [['A reduced', 'B deteriorated', 'C shrank', 'D diminished']]
      },
      {
        number: 42,
        parts: ['Would you like to arrange to pay by direct ', '?'],
        answers: [['B debit']],
        options: [['A debt', 'B debit', 'C deposit', 'D dividend']]
      },{
number: 43,
parts: ['I threw some biscuit ', ' on the ground and a whole load of pigeons swooped down and started eating them.'],
answers: [['D crumbs']],
options: [['A grains', 'B specks', 'C flakes', 'D crumbs']]
},
{
number: 44,
parts: ['The insects looked and tasted so horrible, I ', ' with disgust as I tried to force them down.'],
answers: [['C grimaced']],
options: [['A gloated', 'B grinned', 'C grimaced', 'D chuckled']]
},
{
number: 45,
parts: ['Have you been ', ' against tetanus in the last ten years?'],
answers: [['D inoculated']],
options: [['A prescribed', 'B diagnosed', 'C injected', 'D inoculated']]
},
{
number: 46,
parts: ["There's no way the police will be able to ", ' this law.'],
answers: [['A enforce']],
options: [['A enforce', 'B administer', 'C dominate', 'D reign']]
},
{
number: 47,
parts: ['The union is seriously considering taking industrial ', '.'],
answers: [['B action']],
options: [['A activity', 'B action', 'C contract', 'D reactor']]
},
{
number: 48,
parts: ["Has Britain's influence in the world ", ' since the Second World War?'],
answers: [['C declined']],
options: [['A decayed', 'B worsened', 'C declined', 'D devastated']]
},
{
number: 49,
parts: ["Da Vinci's Mona Lisa is ", '; if it was destroyed no amount of money could ever replace it.'],
answers: [['A priceless']],
options: [['A priceless', 'B worthless', 'C valueless', 'D invaluable']]
},
{
number: 50,
parts: ["I wouldn't call her a close friend. She's more of a/an ", ' really.'],
answers: [['C acquaintance']],
options: [['A ancestor', 'B successor', 'C acquaintance', 'D peer']]
}
]
},
{
id: 'F',
title: 'Grammar review: Verb forms',
instruction: 'Complete using the correct form of the verbs in brackets.',
questions: [
{
number: 51,
parts: ["It's high time (we / get) ", ' the house painted.'],
answers: [['we got']]
},
{
number: 52,
parts: ['', " (I / listen) to you from the start, I wouldn't be in this mess now."],
answers: [['Had I listened']]
},
{
number: 53,
parts: ['I do wish (you / tell) ', " Jim, but you have so it's too late now, isn't it?"],
answers: [["you hadn't told", 'you had not told']]
},
{
number: 54,
parts: ['', ' (study) English and American literature at university for three years, she went on to a highly successful career in journalism.'],
answers: [['Having studied']]
},
{
number: 55,
parts: ['Frank told me (he / go) ', " to the aquarium several times that year already, so didn't really want to go again."],
answers: [['he had been', 'he had gone', "he'd been", "he'd gone"]]
},
{
number: 56,
parts: ['If (I / drive) ', " any faster, I'd be breaking the speed limit!"],
answers: [['I drove', 'I were driving', 'I was driving']]
},
{
number: 57,
parts: ["It's time for (you / do) ", ' your homework, young man.'],
answers: [['you to do']]
},
{
number: 58,
parts: ['Would you sooner (I / invite) ', " Bill and Trisha round, or don't you mind if they come?"],
answers: [['I invited']]
},
{
number: 59,
parts: ['', " (you / be) to hear tomorrow that you've been offered the job, how would you react?"],
answers: [['Were you']]
},
{
number: 60,
parts: ['', ' (make) to wait for over an hour to see a customer services officer put me in an extremely bad mood.'],
answers: [['Being made', 'Having been made']]
}
]
},
{
id: 'G',
title: 'Phrasal verbs',
instruction: 'Write one word in each gap.',
questions: [
{
number: 61,
parts: ["I hear Lizzie's taken ", ' asking people to call her Elizabeth from now on.'],
answers: [['to']]
},
{
number: 62,
parts: ["He may have just lost the leadership election, but I wouldn't write ", ' his political career just yet.'],
answers: [['off']]
},
{
number: 63,
parts: ['We need to spread ', ' in a long line and search the whole field thoroughly.'],
answers: [['out']]
},
{
number: 64,
parts: ['The initial proposals were watered ', ' by the supervising committee to make them more acceptable to the board of directors.'],
answers: [['down']]
},
{
number: 65,
parts: ["I heard about your father's illness. He is going to pull ", ", isn't he?"],
answers: [['through']]
},
{
number: 66,
parts: ["You mustn't let the bigger kids push you ", '!'],
answers: [['around']]
},
{
number: 67,
parts: ["I don't think Doug's eating properly. He looks like he's wasting ", '.'],
answers: [['away']]
},
{
number: 68,
parts: ["It didn't take me long to cotton ", ' to the fact that Gareth was rather unpunctual.'],
answers: [['on']]
},
{
number: 69,
parts: ['How do you intend to drum ', ' support for this?'],
answers: [['up']]
},
{
number: 70,
parts: ['I give ', '! Tell me the answer.'],
answers: [['up']]
}
]
},
{
id: 'H',
title: 'Word formation',
instruction: 'Complete the sentences by changing the form of the word in capitals.',
questions: [
{
number: 71,
parts: ['Why do they put so many ', ' in processed food? (ADD)'],
answers: [['additives']]
},
{
number: 72,
parts: ['If we ', " the photo, you'll see his face in much more detail. (LARGE)"],
answers: [['enlarge']]
},
{
number: 73,
parts: ["Don't you think it's a bit early to ", ' blame? (PORTION)'],
answers: [['apportion']]
},
{
number: 74,
parts: ['Your comments may well have done ', ' damage to management-union relations. (REPAIR)'],
answers: [['irreparable']]
},
{
number: 75,
parts: ["This flat's a lot more ", " than the others we've seen. (SPACE)"],
answers: [['spacious']]
},
{
number: 76,
parts: ['The rumours are completely ', ' and I would urge everyone not to believe them. (SUBSTANCE)'],
answers: [['unsubstantiated']]
},
{
number: 77,
parts: ['Your credit card bill provides a record of all financial ', ' carried out in the previous month. (ACT)'],
answers: [['transactions']]
},
{
number: 78,
parts: ['Although we feel that the earth is stationary, in fact this is ', ". We're moving through space, and spinning, all the time. (ILLUSION)"],
answers: [['illusory']]
},
{
number: 79,
parts: ['Too many families in this country still suffer from financial ', '. (HARD)'],
answers: [['hardship']]
},
{
number: 80,
parts: ['Being the hardest natural substance, diamond is practically ', '. (DESTROY)'],
answers: [['indestructible']]
}
]
},
{
id: 'I',
title: 'Idioms: Word swap',
instruction: 'Each of the words in bold is in the wrong sentence. Rewrite them correctly.',
questions: [
{
number: 81,
parts: ["I don't mind whether we go out or stay in. It's six of one and half a (blot) ", ' of the other, really.'],
answers: [['dozen']]
},
{
number: 82,
parts: ['That new office block really is a (face) ', " on the landscape, isn't it?"],
answers: [['blot']]
},
{
number: 83,
parts: ["What's it like living right in the middle of the commuter (strings) ", '?'],
answers: [['belt']]
},
{
number: 84,
parts: ["I hope Dad doesn't fly off the (pride) ", ' when I tell him I crashed the car.'],
answers: [['handle']]
},
{
number: 85,
parts: ['I found it hard to keep a straight (tape) ', ' when Mr Taylor was telling us off.'],
answers: [['face']]
},
{
number: 86,
parts: ['If I pull a few (dozen) ', ", I don't think you'll have any problems getting planning permission."],
answers: [['strings']]
},
{
number: 87,
parts: ["We were hoping to open next Thursday, but we've been delayed by all the red (wavelength) ", '.'],
answers: [['tape']]
},
{
number: 88,
parts: ['This hotel really is the last (handle) ', ' in luxury.'],
answers: [['word']]
},
{
number: 89,
parts: ['This trophy here definitely takes (word) ', ' of place in my collection.'],
answers: [['pride']]
},
{
number: 90,
parts: ["I'm glad we're on the same (belt) ", ' over this; it would be awful if we disagreed.'],
answers: [['wavelength']]
}
]
},
{
id: 'J',
title: 'Phrasal verbs',
instruction: 'Complete using the words in the box in the correct form. You will not need one of the words.',
wordBox: ['board', 'break', 'check', 'club', 'crack', 'hit', 'paper', 'put', 'single', 'summon', 'wear'],
questions: [
{
number: 91,
parts: ['', " down on illegal immigration is this government's number one priority."],
answers: [['Cracking']]
},
{
number: 92,
parts: ['The report completely ', " over the problem of the shortage of nurses; it just doesn't deal with it at all."],
answers: [['papers', 'papered']]
},
{
number: 93,
parts: ['Shopkeepers in the town centre have ', ' up windows in anticipation of rioting during the demonstration.'],
answers: [['boarded']]
},
{
number: 94,
parts: ["We're having a solar-panelled water-heating system ", ' in next week.'],
answers: [['put']]
},
{
number: 95,
parts: ['The Prime Minister ', ' back at critics accusing her of being soft on crime.'],
answers: [['hit']]
},
{
number: 96,
parts: ['Three firefighters have been ', ' out for bravery above and beyond the call of duty.'],
answers: [['singled']]
},
{
number: 97,
parts: ["I'm thinking of ", ' out that new jazz club tonight. Do you want to come along?'],
answers: [['checking']]
},
{
number: 98,
parts: ['Dad was completely against me getting my ears pierced but I ', ' him down in the end.'],
answers: [['wore']]
},
{
number: 99,
parts: ["Mrs Thompson's leaving at the end of term. Shall we ", ' together and get her a leaving present?'],
answers: [['club']]
},
{
number: 100,
parts: ["I don't know how I'm going to ", " up the courage to tell George he can't stay here after all."],
answers: [['summon']]
}
]
},
{
id: 'K',
title: 'Idioms and collocations: Dialogue',
instruction: 'Write one word in each gap.',
questions: [
{
number: 101,
parts: [
'Jenny: Hi Penny! Long time no ',
"!\nPenny: Hi Jen! Yeah, it has been a long time, hasn't it? I haven't had much free time recently. I've got such a lot ",
' at work at the moment.\nJenny: Getting on ',
" of you, is it?\nPenny: That's about the ",
" of it, yes. The truth is I'm my own ",
" enemy. I take on far too many projects for my own good. I'm going to have to cut back in the very ",
" future, otherwise I'll go mad!\nJenny: Well, as a ",
" of fact, I'm glad I ran into you. Sharon and I are having a little get-together on Friday night. Do feel ",
" to come along. We'd love to see you.\nPenny: Thanks! I'll certainly ",
" my best.\nJenny: You're in for a ",
" if you do make it. Sharon's doing her wonderful lamb curry!\nPenny: Lovely!"
],
answers: [
['see'],
['on'],
['top'],
['size'],
['worst'],
['near'],
['matter'],
['free'],
['do', 'try'],
['treat']
]
}
]
},
{
id: 'L',
title: 'Topic vocabulary: People and society',
instruction: 'Match a word from the box with each phrase. You will not need one of the words.',
wordBox: ['bully', 'consultant', 'curator', 'dependant', 'descendant', 'extrovert', 'minister', 'monarch', 'predecessor', 'sibling', 'spouse'],
questions: [
{
number: 111,
parts: ['a specialising doctor ', ''],
answers: [['consultant']]
},
{
number: 112,
parts: ['someone who is cruel to people smaller or weaker than they are ', ''],
answers: [['bully']]
},
{
number: 113,
parts: ['someone who relies on you for financial support ', ''],
answers: [['dependant']]
},
{
number: 114,
parts: ['a husband or wife ', ''],
answers: [['spouse']]
},
{
number: 115,
parts: ['someone who did your job before you ', ''],
answers: [['predecessor']]
},
{
number: 116,
parts: ['someone who looks after objects in a museum ', ''],
answers: [['curator']]
},
{
number: 117,
parts: ['a relative of someone from a previous generation ', ''],
answers: [['descendant']]
},
{
number: 118,
parts: ['someone who is lively in social situations ', ''],
answers: [['extrovert']]
},
{
number: 119,
parts: ['a brother or sister ', ''],
answers: [['sibling']]
},
{
number: 120,
parts: ['a king or queen ', ''],
answers: [['monarch']]
}
]
},
{
id: 'M',
title: 'Collocations',
instruction: 'Circle the correct word.',
questions: [
{
number: 121,
parts: ['I want you to give this the ', ' priority.'],
answers: [['highest']],
options: [['tallest', 'highest']]
},
{
number: 122,
parts: ['At long ', ', a washing powder that really does clean whiter than white.'],
answers: [['last']],
options: [['last', 'end']]
},
{
number: 123,
parts: ['Good hairdressers are a bit thin on the ', ' round here.'],
answers: [['ground']],
options: [['land', 'ground']]
},
{
number: 124,
parts: ["Why don't you ", ' a proposal at the next meeting?'],
answers: [['table']],
options: [['table', 'chair']]
},
{
number: 125,
parts: ['Cleaner air would really improve our ', ' of life.'],
answers: [['quality']],
options: [['quality', 'standard']]
},
{
number: 126,
parts: ["It's just a ", " reaction but I'd say he's lying."],
answers: [['gut']],
options: [['stomach', 'gut']]
},
{
number: 127,
parts: ['The King in his graciousness will deign to ', ' your request, Bolitho.'],
answers: [['grant']],
options: [['consent', 'grant']]
},
{
number: 128,
parts: ['Teenagers who start smoking often do so as a result of peer ', '.'],
answers: [['pressure']],
options: [['pressure', 'force']]
},
{
number: 129,
parts: ["That's a ", ' new Rolls Royce!'],
answers: [['brand']],
options: [['model', 'brand']]
},
{
number: 130,
parts: ['The typical ', ' family consists of two parents and two children.'],
answers: [['nuclear']],
options: [['nuclear', 'atomic']]
}
]
},
{
id: 'N',
title: 'Grammar review',
instruction: 'Write one word in each gap.',
questions: [
{
number: 131,
parts: ["Tony doesn't really fancy going out tonight and ", ' do I, to be honest.'],
answers: [['neither', 'nor']]
},
{
number: 132,
parts: ["If you haven't got ", ' money to buy ice creams as well as chocolate, just get the chocolate.'],
answers: [['enough']]
},
{
number: 133,
parts: ['If ', ' the flight got in at a reasonable time.'],
answers: [['only']]
},
{
number: 134,
parts: ['', " as we wanted to take the flat, we just couldn't arrange a mortgage in time."],
answers: [['Much']]
},
{
number: 135,
parts: ['Even ', " you do feel better tomorrow, it's probably better if you don't go to school."],
answers: [['if', 'though']]
},
{
number: 136,
parts: ['The Prime Minister said that we should all carry on as normal ', ' the increased risk of attack.'],
answers: [['despite']]
},
{
number: 137,
parts: ['The film is ', ' near as good as the book.'],
answers: [['nowhere']]
},
{
number: 138,
parts: ['I do find ', ' hard to believe that it will be possible one day to travel through time.'],
answers: [['it']]
},
{
number: 139,
parts: ["You're talking as ", " you understood what Sean's going through. You don't, you know!"],
answers: [['if', 'though']]
},
{
number: 140,
parts: ['', ' did we realise that we were next on the list.'],
answers: [['Little']]
}
]
}
];
