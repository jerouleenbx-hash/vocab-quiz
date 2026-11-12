import type { ExerciseSection } from './exercises';

const yesNo = ['Yes', 'No'];

export const unitFifteenExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    unitId: 15,
    title: 'Position of adjectives',
    instruction: 'If the bold word is correct, write OK. If it is incorrect, rewrite it correctly.',
    questions: [
      { number: 1, parts: ['Whenever she gets home from work, Mum always seems (unhappily) ', ' about something.'], answers: [['unhappy']] },
      { number: 2, parts: ["I don't know what's in it, but it smells (strongly) ", ' of cinnamon.'], answers: [['OK']] },
      { number: 3, parts: ['When Terry finally became (calmly) ', ', I asked him what had happened.'], answers: [['calm']] },
      { number: 4, parts: ["I'm glad I didn't go on holiday with Efy and Graham because it sounded (dreadfully) ", '.'], answers: [['dreadful']] },
      { number: 5, parts: ["It's hard to believe that the seeds you planted have grown so (quickly) ", '.'], answers: [['OK']] },
      { number: 6, parts: ['The car sped past me and turned (sharply) ', ' into the next street.'], answers: [['OK']] },
      { number: 7, parts: ['The actors could tell that the audience were growing (restlessly) ', '.'], answers: [['restless']] },
      { number: 8, parts: ['Why are you looking so (accusingly) ', ' at me?'], answers: [['OK']] },
      { number: 9, parts: ["Add some chilli to the curry because it doesn't taste (spicily) ", ' enough.'], answers: [['spicy']] },
      { number: 10, parts: ["I don't think I get (angrily) ", ' very often, but one or two people do really annoy me.'], answers: [['angry']] },
      { number: 11, parts: ['In the darkness, I felt (nervously) ', ' for the light switch and finally found it.'], answers: [['OK']] },
      { number: 12, parts: ['Tim appeared (tiredly) ', ' after his tennis match.'], answers: [['tired']] }
    ]
  },
  {
    id: 'B',
    unitId: 15,
    title: 'Adjectives after as, how, so, this, that and too',
    instruction: 'Complete the sentences using the words in brackets. Add any other words you need.',
    questions: [
      { number: 1, parts: ["I haven't had this ", ' at work for a long time. (day, hard)'], answers: [['hard a day']] },
      { number: 2, parts: ['So ', ' was it that I never went back to that country again. (experience, frightening)'], answers: [['frightening an experience']] },
      { number: 3, parts: ["If we'd known how ", " it was going to be, we wouldn't have agreed to do it. (difficult, task)"], answers: [['difficult a task']] },
      { number: 4, parts: ['It was as ', " as I'd seen in a long time. (moving, performance)"], answers: [['moving a performance']] },
      { number: 5, parts: ['Alex has got that ', ' he never seems to have to work hard at school. (good, memory)'], answers: [['good a memory']] },
      { number: 6, parts: ['It was too ', ' to turn down. (offer, tempting)'], answers: [['tempting an offer']] },
      { number: 7, parts: ['No matter how ', " you have, there's always the risk of failure. (career, successful)"], answers: [['successful a career']] },
      { number: 8, parts: ["I don't think I'll ever be as ", ' as my brother. (good, pianist)'], answers: [['good a pianist']] }
    ]
  },
  {
    id: 'C',
    unitId: 15,
    title: 'Position of multiple adjectives',
    instruction: 'Complete the sentences using the words in brackets in the correct order.',
    questions: [
      { number: 1, parts: ['Oh, what a/an ', ' sculpture! Did you buy it when you were there? (African, gorgeous, little)'], answers: [['gorgeous little African']] },
      { number: 2, parts: ['Have you seen my ', " boots anywhere? I'm sure I left them here. (black, climbing, leather)"], answers: [['black leather climbing']] },
      { number: 3, parts: ["They've got some ", " shoes in the sale at Derbyshire's. (ballet, fantastic, pink, Russian, silk)"], answers: [['fantastic pink Russian silk ballet']] },
      { number: 4, parts: ["Didn't the bride look lovely in that ", ' dress? (beautiful, cotton, cream, wedding)'], answers: [['beautiful cream cotton wedding']] },
      { number: 5, parts: ['Does Spencer still drive that ', ' car of his? (blue, foreign, ugly)'], answers: [['ugly blue foreign']] },
      { number: 6, parts: ["It's hard to imagine that such a ", ' frog is so important to the local environment. (Amazonian, green, tiny)'], answers: [['tiny green Amazonian']] },
      { number: 7, parts: ['Andrea has a ', ' rug on the floor in her bedroom. (long, lovely, sheepskin, white)'], answers: [['lovely long white sheepskin']] },
      { number: 8, parts: ['The clown was wearing a ', ' wig and a red nose. (funny, plastic, red)'], answers: [['funny red plastic']] },
      { number: 9, parts: ["I couldn't believe it when Sylvia turned up in the same ", ' hat that she wore last time. (horrible, wide, yellow)'], answers: [['horrible wide yellow']] },
      { number: 10, parts: ['When are you going to get rid of those ', ' trousers? (dreadful, French, nylon, short)'], answers: [['dreadful short French nylon']] }
    ]
  },
  {
    id: 'D',
    unitId: 15,
    title: 'Position of adverbs: The Millennium Dome',
    instruction: 'Choose the best position (A, B, C or D) for each adverb in brackets. If more than one position is possible, choose all correct letters.',
    questions: [
      { number: 1, parts: ['The Millennium Dome, or the O2 as (A) it (B) is (C) called (D) now that the mobile company of that name owns the naming rights, has become a distinctive part of the London skyline. (correctly) ', ''], answers: [['C']], options: [['A', 'B', 'C', 'D']] },
      { number: 2, parts: ['It was built for the millennium celebrations of 2000, and (A) a number of people (B) criticised (C) the high cost of construction (D). (strongly) ', ''], answers: [['B']], options: [['A', 'B', 'C', 'D']] },
      { number: 3, parts: ['Costing £789 million to build and operate for a year, (A) it (B) failed (C) to reach (D) its target of 12 million visitors. (completely) ', ''], answers: [['B', 'C']], options: [['A', 'B', 'C', 'D']] },
      { number: 4, parts: ['Even Michael Heseltine, the politician who was originally in charge of the Dome, later admitted that (A) it (B) would (C) have been (D) better to build something else. (probably) ', ''], answers: [['B', 'C']], options: [['A', 'B', 'C', 'D']] },
      { number: 5, parts: ['Although the press were critical, (A) people who visited the Dome (B) had (C) a positive experience (D). (often) ', ''], answers: [['B']], options: [['A', 'B', 'C', 'D']] },
      { number: 6, parts: ['Even with low visitor numbers, (A) it (B) was (C) the most popular attraction in Britain in 2000 (D). (easily) ', ''], answers: [['C']], options: [['A', 'B', 'C', 'D']] },
      { number: 7, parts: ['Although (A) it (B) is (C) closed (D), the Dome has a bright future as a venue for pop concerts and other events. (currently) ', ''], answers: [['C', 'D']], options: [['A', 'B', 'C', 'D']] }
    ]
  },
  {
    id: 'E',
    unitId: 15,
    title: 'Comparatives and superlatives',
    instruction: 'Complete with an appropriate comparative or superlative form of the words in the box. Add any other words you need.',
    wordBox: ['demanding', 'few', 'funny', 'hard', 'long', 'observant', 'reliable', 'slight', 'ugly', 'valuable'],
    questions: [
      { number: 1, parts: ["I thought this week's programme was far ", " last week's, so it's definitely improving."], answers: [['funnier than']] },
      { number: 2, parts: ['My new laptop is ', " my old one, but I suppose it was quite cheap so I shouldn't be surprised."], answers: [['less reliable than']] },
      { number: 3, parts: ["Jim Carter knows what he wants from employees, and I don't think I've ever worked for ", ' manager.'], answers: [['a more demanding']] },
      { number: 4, parts: ['Because of its internal structure, diamond is ', ' substance known.'], answers: [['the hardest']] },
      { number: 5, parts: ['Beside the house, there stood ', ' tower block I had ever seen.'], answers: [['the ugliest']] },
      { number: 6, parts: ['If the conflict goes on any ', ', more people are going to lose their lives.'], answers: [['longer']] },
      { number: 7, parts: ['', " his Portrait of Dr. Gachet, van Gogh's Irises still sold for $49 million."], answers: [['Less valuable than']] },
      { number: 8, parts: ['Even ', ' amongst us soon realise when a friend has changed their appearance in some way.'], answers: [['the least observant']] },
      { number: 9, parts: ["I'm afraid that what you're saying doesn't make ", ' difference to how I feel.'], answers: [['the slightest']] },
      { number: 10, parts: ['Frankly, I think ', ' people who know about this, the better.'], answers: [['the fewer']] }
    ]
  },
  {
    id: 'F',
    unitId: 15,
    title: 'Comparative and superlative modifiers',
    instruction: 'Choose the correct word or phrase.',
    questions: [
      { number: 1, parts: ["It's good to see that Rebecca has become a great ", ' more independent than she used to be.'], answers: [['deal']], options: [['lot', 'deal']] },
      { number: 2, parts: ['The hotel was ', " from the most luxurious I've stayed in."], answers: [['far']], options: [['away', 'far']] },
      { number: 3, parts: ['The new law is ', ' more than an attempt to divert attention from the real problems.'], answers: [['little']], options: [['less', 'little']] },
      { number: 4, parts: ['This is ', " far the worst public transport system I've ever been on."], answers: [['by']], options: [['by', 'from']] },
      { number: 5, parts: ["Have you noticed that the neighbours' trees have grown ", ' bigger?'], answers: [['considerably']], options: [['easily', 'considerably']] },
      { number: 6, parts: ["My mum's getting ", ' older now, so she needs someone to look after her.'], answers: [['a little']], options: [['a little', 'little']] },
{ number: 7, parts: ['It was ', ' the most delightful little puppy I had ever seen!'], answers: [['quite']], options: [['quite', 'somewhat']] },
{ number: 8, parts: ['If you have ', " further problems with your computer, don't hesitate to call me."], answers: [['any']], options: [['any', 'even']] },
{ number: 9, parts: ["I'd say that the woman I saw running away from the bank was ", ' taller than I am.'], answers: [['no']], options: [['any', 'no']] },
{ number: 10, parts: ['Imogen was told that she would have to work a ', ' deal harder than she had been doing.'], answers: [['good']], options: [['better', 'good']] }
]
},
{
  id: 'G',
  unitId: 15,
  title: 'Structures used to make comparisons',
  instruction: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words.',
  questions: [
    { number: 1, parts: ['The red shoes are slightly more expensive than the green ones. (quite)\nThe green shoes ', ' the red ones.'], answers: [['are not quite as expensive as', "aren't quite as expensive as", 'are not quite so expensive as', "aren't quite so expensive as"]] },
    { number: 2, parts: ['Richard is much more committed to the project than Grant seems to be. (like)\nGrant seems to be ', ' to the project.'], answers: [['nothing like as committed as Richard is', 'nothing like as committed as Richard']] },
    { number: 3, parts: ["If you argue about it more, we'll get to Denver later. (the)\nThe ", " we'll get to Denver."], answers: [['more you argue about it, the later']] },
    { number: 4, parts: ['My new MP3 player was twice the price of yours. (expensive)\nYour MP3 player was ', ' mine.'], answers: [['half as expensive as']] },
    { number: 5, parts: ['England is much bigger than Wales. (nowhere)\nWales ', ' England.'], answers: [['is nowhere near as big as', 'is nowhere near so big as']] },
    { number: 6, parts: ['Derek is quite a bit more adventurous than his sister, Annabelle. (nearly)\nAnnabelle ', ' her brother, Derek.'], answers: [["isn't nearly as adventurous as", 'is not nearly as adventurous as', "isn't nearly so adventurous as", 'is not nearly so adventurous as']] },
    { number: 7, parts: ['Bigger cities have higher crime rates. (the)\nThe ', ' the crime rate.'], answers: [['bigger the city, the higher']] },
    { number: 8, parts: ['Their first album was considerably more successful than their second. (near)\nTheir second album ', ' their first.'], answers: [['was nowhere near as successful as', 'was nowhere near so successful as']] }
  ]
},

{
id: 'H',
unitId: 15,
title: 'Gradable and ungradable adjectives',
instruction: 'Choose the word or phrase which CANNOT complete the sentence.',
questions: [
{ number: 1, parts: ["Jackie didn't like the show so much, but I thought it was ", ' perfect.'], answers: [['very']], options: [['absolutely', 'quite', 'very']] },
{ number: 2, parts: ['You were ', ' right about Laura - she is from Manchester.'], answers: [['fairly']], options: [['completely', 'fairly', 'totally']] },
{ number: 3, parts: ["We've been ", " busy at work, so I'm looking forward to a break."], answers: [['absolutely']], options: [['absolutely', 'a little', 'quite']] },
{ number: 4, parts: ["It's ", ' pointless trying to persuade Michael to lend you his new car.'], answers: [['very']], options: [['completely', 'totally', 'very']] },
{ number: 5, parts: ['Anthony seems to be ', ' worried about the situation.'], answers: [['utterly']], options: [['a little', 'really', 'utterly']] },
{ number: 6, parts: ["Jackson's shot from the halfway line was ", ' incredible.'], answers: [['too']], options: [['absolutely', 'quite', 'too']] },
{ number: 7, parts: ["If you think I'm going to help you after what you did, you're ", ' wrong.'], answers: [['a bit']], options: [['a bit', 'completely', 'quite']] },
{ number: 8, parts: ['In the end, the documents that the tax office sent us were ', ' useless.'], answers: [['very']], options: [['completely', 'totally', 'very']] }
]
},
{
id: 'I',
unitId: 15,
title: 'Confusing cases',
instruction: 'Complete using the words in the boxes. You need to use one word in each box twice.',
wordBox: ['hard', 'hardly', 'fair', 'fairly', 'free', 'freely', 'high', 'highly'],
questions: [
{ number: 1, parts: ["Don't press the keys so ", " or you'll break the keyboard."], answers: [['hard']] },
{ number: 2, parts: ['This is ', ' the most attractive part of the city, is it?'], answers: [['hardly']] },
{ number: 3, parts: ["It's ", ' to understand why Isabelle reacted in the way she did.'], answers: [['hard']] },
{ number: 4, parts: ["It's not ", '! You never let me go to parties!'], answers: [['fair']] },
{ number: 5, parts: ['Divide the money between you ', '.'], answers: [['fairly']] },
{ number: 6, parts: ["I'm ", ' satisfied with your progress.'], answers: [['fairly']] },
{ number: 7, parts: ["They're giving away ", ' tickets to the concert!'], answers: [['free']] },
{ number: 8, parts: ['This tool moves ', ' in any direction.'], answers: [['freely']] },
{ number: 9, parts: ['Can we get in ', " if we're members of the club?"], answers: [['free']] },
{ number: 10, parts: ["I'm always uncomfortable in ", ' places.'], answers: [['high']] },
{ number: 11, parts: ['This request is ', ' unusual.'], answers: [['highly']] },
{ number: 12, parts: ['The dog jumped ', ' and cleared the fence.'], answers: [['high']] }
]
},
{
id: 'J',
unitId: 15,
title: 'Vertical living',
instruction: 'Write one word in each gap.',
questions: [
{
number: 1,
parts: [
'In the 1950s and 60s, the tower block seemed to offer a solution to two problems. Firstly, houses built ',
' earlier in the century, or even in the nineteenth century, were ',
' longer suitable for people to live in. Secondly, an increasing population placed a great ',
' more strain on available space. New, vertical tower blocks, able to house more people in a relatively small space ',
' a horizontal street, started to appear. The more people got used to living in these structures, ',
' more they would form the heart of communities, or so the thinking went.\nInitially, these blocks were ',
' popular than the old housing they replaced. They were ',
' and away the ',
' affordable alternative for many people, and they also offered excellent views.\nHowever, these buildings soon became ',
' attractive to residents as crime rose. It also became clear that a tower block was ',
' like as friendly a place to live in ',
' a traditional street. More often ',
" not, residents in a tower block didn't interact with each other on a regular basis. Although modern tower blocks are making something of a comeback amongst young professionals, they still have a poor reputation in the minds of many people."
],
answers: [
['much'], ['no'], ['deal'], ['than'], ['the'], ['more'],
['far'], ['most'], ['less'], ['nothing'], ['as'], ['than']
]
}
]
},
{
id: 'K',
unitId: 15,
title: 'Adjectives and adverbs review',
instruction: 'Choose the correct answer.',
questions: [
{ number: 1, parts: ['I ', ' when Colin asked me to make him a cup of tea.'], answers: [['had hardly sat down']], options: [['had sat hard down', 'had sat down hardly', 'had hardly sat down', 'had hard sat down']] },
{ number: 2, parts: ["Where's that ", ' dress that your grandma gave you?'], answers: [['lovely, long, pink, silk']], options: [['lovely, long, pink, silk', 'pink, long, lovely, silk', 'lovely, pink, long, silk', 'long, pink, silk, lovely']] },
{ number: 3, parts: ['Although he ', ' to Ernest Hemingway, I think his books are unique.'], answers: [['has often been compared']], options: [['often has been compared', 'has often been compared', 'has often compared', 'has been comparing often']] },
{ number: 4, parts: ["Don't you think ", ' in society have a responsibility to help those less fortunate?'], answers: [['the wealthy']], options: [['wealthy', 'wealthier', 'wealthiest', 'the wealthy']] },
{ number: 5, parts: ['The rents in this area are ', ' the highest in the city.'], answers: [['far and away']], options: [['far from away', 'away by far', 'far and away', 'far to away']] },
{ number: 6, parts: ['The coastguard boarded the ship and found ', '.'], answers: [['four injured men alive']], options: [['four injured alive men', 'alive four men injured', 'four injured men alive', 'injured four alive men']] },
{ number: 7, parts: ['To be honest, Harry has ', ' than you have.'], answers: [['been considerably more helpful']], options: [['been more helpful considerably', 'been considerably more helpful', 'been more considerably helpful', 'considerably been more helpful']] },
{ number: 8, parts: ["I'm ", ' my brother is.'], answers: [['nowhere near as ambitious as']], options: [['nowhere like so ambitious', 'nothing near as ambitious as', 'nothing as ambitious than', 'nowhere near as ambitious as']] }
]
}
];

export const unitSixteenExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    unitId: 16,
    title: 'Topic vocabulary: Materials',
    instruction: 'Complete using the correct form of the words in the boxes.',
    wordBox: [
      'block', 'chip', 'crumb', 'flake', 'grain', 'lump', 'pile', 'speck',
      'pat', 'polish', 'scratch', 'scrub', 'stroke',
      'crack', 'crush', 'grind', 'smash', 'squash', 'squeeze', 'tear',
      'brittle', 'dense', 'fragile', 'hollow', 'opaque', 'stiff', 'transparent',
      'mould', 'stack', 'stuff'
    ],
    questions: [
      { number: 1, parts: ['When are you going to move that ', ' of clothes in your bedroom?'], answers: [['pile']] },
      { number: 2, parts: ['The old man slowly put a few more ', ' of coal on the dying fire.'], answers: [['lumps']] },
      { number: 3, parts: ['We need to redecorate. Look - there are ', ' of paint coming off the walls.'], answers: [['flakes']] },
      { number: 4, parts: ['The building is composed of ', ' of concrete held together by metal poles.'], answers: [['blocks']] },
      { number: 5, parts: ["When I come back, I don't want to find a single ", ' of dust in here.'], answers: [['speck']] },
      { number: 6, parts: ['How many ', ' of sand do you think there are on this beach?'], answers: [['grains']] },
      { number: 7, parts: ["Eat your sandwich in the kitchen, because I don't want ", ' on my new sofa.'], answers: [['crumbs']] },
      { number: 8, parts: ['Be careful! I dropped something and there are ', ' of glass all over the floor.'], answers: [['chips']] },
      { number: 9, parts: ["Don't ", " your mosquito bites or you'll make them worse."], answers: [['scratch']] },
      { number: 10, parts: ['I felt great when the coach ', " me on the back and said, 'Well done'."], answers: [['patted']] },
      { number: 11, parts: ['Martin quickly ', ' his shoes and walked out the door.'], answers: [['polished']] },
      { number: 12, parts: ["Don't ", " the dog's fur the wrong way. She doesn't like it."], answers: [['stroke']] },
      { number: 13, parts: ['I had to really ', ' that wall to get the graffiti off it.'], answers: [['scrub']] },
      { number: 14, parts: ["You'll have to ", ' your T-shirt to get all the water out of it.'], answers: [['squeeze']] },
      { number: 15, parts: ["You get the orange juice, and I'll ", ' some ice.'], answers: [['crush']] },
      { number: 16, parts: ['I like to ', ' my own coffee because it tastes so much better.'], answers: [['grind']] },
      { number: 17, parts: ["Don't ", ' that spider! Just put it outside on the grass.'], answers: [['squash']] },
      { number: 18, parts: ['', ' the paper in half and give half to the student next to you.'], answers: [['Tear']] },
      { number: 19, parts: ["You haven't broken the window, but you have ", ' it.'], answers: [['cracked']] },
      { number: 20, parts: ['Eva was so angry she ', ' a glass against the wall.'], answers: [['smashed']] },
      { number: 21, parts: ["Be careful with that old wedding dress - it's very ", '.'], answers: [['fragile']] },
      { number: 22, parts: ["Why can you see through glass, whereas concrete isn't ", ' at all?'], answers: [['transparent']] },
      { number: 23, parts: ["This paper isn't ", ' enough to make a birthday card out of.'], answers: [['stiff']] },
      { number: 24, parts: ['The windows of the limousine were ', ", so I couldn't see who was inside."], answers: [['opaque']] },
      { number: 25, parts: ['After being out in the sun for a month, the plastic container became ', '.'], answers: [['brittle']] },
      { number: 26, parts: ['Rocks sink in water because they are ', '.'], answers: [['dense']] },
      { number: 27, parts: ['This wall appears solid, but when you knock on it, it sounds ', '.'], answers: [['hollow']] },
      { number: 28, parts: ['Alice quickly ', ' a few clothes into a suitcase and ran out of the house.'], answers: [['stuffed']] },
      { number: 29, parts: ['You could help by ', ' those boxes over there.'], answers: [['stacking']] },
      { number: 30, parts: ['Try to ', ' the clay into the basic shape of a vase.'], answers: [['mould']] }
    ]
  },
  {
    id: 'B',
    unitId: 16,
    title: 'Topic vocabulary: Materials',
    instruction: 'Complete using the words in brackets in the correct form.',
    questions: [
      {
        number: 1,
        parts: [
          'Why do we slip on ice, but not on wood? The answer is ',
          ', the force that stops one object moving against another. When two ',
          ' are in contact, tiny bumps on each surface prevent them from moving easily. The surface of ice is actually covered in ',
          ', so your shoes slide over it. Once you slip, the force of ',
          ' takes over, and you fall down! (friction, gravity, liquid, solid)'
        ],
        answers: [['friction'], ['solids'], ['liquid'], ['gravity']]
      },
      {
        number: 2,
        parts: [
          'Nylon was the first ',
          ' material to be produced using coal, water and air. Since its invention in 1935, it has been used to make many products and long thin strands of it can be made into ',
          ' for clothing. Although cheap, many people dislike the plastic ',
          ' of nylon and prefer natural fibres, such as cotton. (fabric, synthetic, texture)'
        ],
        answers: [['synthetic'], ['fabric'], ['texture']]
      },
      {
        number: 3,
        parts: [
          "Rocks are formed in different ways. One type, metamorphic rocks, are produced by high pressure beneath the Earth's surface, which ",
          ' the rocks and makes them ',
          '. Most rocks are a mixture of different chemicals. When a ',
          ' occurs in rock form but is not mixed with other chemicals, it is known as a ',
          '. (compact, firm, mineral, substance)'
        ],
        answers: [['compacts'], ['firm'], ['substance'], ['mineral']]
      },
      {
        number: 4,
        parts: [
          'If you take a glass of water and ',
          " salt in it, you produce what's called a solution. If you add more water, the solution becomes more ",
          '. You can ',
          ' the solution by adding more salt. (concentrate, dilute, dissolve)'
        ],
        answers: [['dissolve'], ['dilute'], ['concentrate']]
      }
    ]
  },
  {
    id: 'C',
    unitId: 16,
    title: 'Topic vocabulary: The built environment (Row over new road intensifies)',
    instruction: 'Complete using the correct form of the words in the box.',
    wordBox: ['bypass', 'construct', 'district', 'dwell', 'inner city', 'occupy', 'populated', 'suburban', 'surroundings', 'urban'],
    questions: [
      {
        number: 1,
        parts: [
          'The proposed ',
          ' around the city of Rushton has run into more controversy. The local council have been attempting to ',
          ' the road for five years now in order to ease traffic in the ',
          ', which is amongst the most densely ',
          ' areas in the country. However, residents in ',
          ' areas, on the outskirts of the city, are up in arms about the plan, which they claim would spoil the ',
          ".\n'We live in beautiful ",
          " here,' commented Ada Fowler, one of those whose house ",
          " a position next to the proposed route of the new road. 'The council have no real concept of ",
          " planning.'\nMany of those who ",
          ' in the area agree. The council were unavailable for comment.'
        ],
        answers: [
          ['bypass'], ['construct'], ['inner city'], ['populated'], ['suburban'],
          ['district'], ['surroundings'], ['occupies'], ['urban'], ['dwell']
        ]
      }
    ]
  },
  {
    id: 'D',
    unitId: 16,
    title: 'Topic vocabulary: The built environment',
    instruction: 'Choose the correct word.',
    questions: [
      { number: 1, parts: ["I'd hate to live in such a ", ' area as this.'], answers: [['built-up']], options: [['built-up', 'high-rise']] },
      { number: 2, parts: ['My grandparents have just moved into a ', ' block and they seem to like it.'], answers: [['high-rise']], options: [['built-up', 'high-rise']] },
      { number: 3, parts: ['The first ', ' was made possible by advances in the use of metal and glass as building materials.'], answers: [['skyscraper']], options: [['skyline', 'skyscraper']] },
      { number: 4, parts: ['I love to look at the ', " of London at night, don't you?"], answers: [['skyline']], options: [['skyline', 'skyscraper']] },
      { number: 5, parts: ['The government is planning to provide low-cost ', ' for people on low incomes.'], answers: [['housing']], options: [['estate', 'housing']] },
      { number: 6, parts: ['I grew up on a local ', ', so I know the area quite well.'], answers: [['estate']], options: [['estate', 'housing']] },
      { number: 7, parts: ["They're going to ", ' the old Town Hall today.'], answers: [['demolish']], options: [['demolish', 'evict']] },
      { number: 8, parts: ["You can't ", ' a poor old woman like that and just leave her homeless!'], answers: [['evict']], options: [['demolish', 'evict']] },
      { number: 9, parts: ["St Paul's Cathedral is a really impressive ", '.'], answers: [['structure']], options: [['structure', 'infrastructure']] },
      { number: 10, parts: ["This country just doesn't have the ", ' to host the Olympic Games.'], answers: [['infrastructure']], options: [['structure', 'infrastructure']] }
    ]
  },
  {
    id: 'E',
    unitId: 16,
    title: "Phrasal verbs: Britain's Inner Cities",
    instruction: 'Write one word in each gap.',
    questions: [
      {
        number: 1,
        parts: [
          "After decades of neglect, it's not unusual to see buildings which have been boarded ",
          " in Britain's inner cities. After businesses have closed ",
' for the day, many city centres are depressing, no-go areas. The problems of decay have been piling ',
' for years and will not be solved easily. However, some councils are finally deciding to fix inner city areas ',
' to attract residents and investors back. The process begins by knocking ',
' old, ugly buildings and putting ',
' attractive office and apartment blocks. Advertising hoardings are taken ',
' and facilities to attract families, such as play areas, are put ',
'. Urban regeneration can be a long, expensive process, but for many towns and cities it has paid off.'
],
answers: [['up'], ['up'], ['up'], ['up'], ['down'], ['up'], ['down'], ['in']]
}
]
},
{
id: 'F',
unitId: 16,
title: 'Phrasal verbs',
instruction: 'Complete using a phrasal verb with a word from box A in the right form and a word from box B. You need to use some words from box B more than once.',
wordBox: ['A: come, cut, prop, put, set, spread, water, wear', 'B: down, out, together, up'],
questions: [
{ number: 1, parts: ["The fair must be happening in town because they've ", ' tents.'], answers: [['set up', 'put up']] },
{ number: 2, parts: ['', ' a circle ', ' of the first piece of card and stick it on the second piece.'], answers: [['Cut'], ['out']] },
{ number: 3, parts: ["If the juice is too strong for you, why don't you ", ' it ', '?'], answers: [['water'], ['down']] },
{ number: 4, parts: ["That wall would fall over if it wasn't ", ' with planks of wood.'], answers: [['propped up']] },
{ number: 5, parts: ["You've got blood on your collar. It won't ", ', you know.'], answers: [['come out']] },
{ number: 6, parts: ["I've got a large family, but they've all ", ' across the whole country.'], answers: [['spread out']] },
{ number: 7, parts: ['I hate buying furniture from that place because you have to ', ' it ', ' yourself.'], answers: [['put'], ['together']] },
{ number: 8, parts: ['The steps were ', ' after many years of use.'], answers: [['worn down']] }
]
},
{
id: 'G',
unitId: 16,
title: 'Phrasal verbs with up',
instruction: "Choose Yes if the phrasal verb means something like 'increase'; otherwise choose No.",
questions: [
{ number: 1, parts: ['I see the supermarket has put its prices up again. ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 2, parts: ["Speed up, or we're never going to get there! ", ''], answers: [['Yes']], options: [yesNo] },
{ number: 3, parts: ["Pass me a cloth and I'll just wipe up that water on the table. ", ''], answers: [['No']], options: [yesNo] },
{ number: 4, parts: ["Work is really beginning to mount up, so I'll have to go into the office this weekend. ", ''], answers: [['Yes']], options: [yesNo] },
{ number: 5, parts: ['Marianne had something stuck in her throat, but she finally coughed it up. ', ''], answers: [['No']], options: [yesNo] },
{ number: 6, parts: ["You'll have to speak up because I'm a little deaf, you know. ", ''], answers: [['Yes']], options: [yesNo] },
{ number: 7, parts: ["You need to build up your strength if you're going to take part in the marathon. ", ''], answers: [['Yes']], options: [yesNo] },
{ number: 8, parts: ['Oh, I wanted to watch this programme. Turn the TV up. ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 9, parts: ['Jill and I had a terrible row, but we soon made up. ', ''], answers: [['No']], options: [yesNo] },
{ number: 10, parts: ["Honestly, I couldn't eat another thing! What are you trying to do - fatten me up? ", ''], answers: [['Yes']], options: [yesNo] }
]
},
{
id: 'H',
unitId: 16,
title: 'Phrases, patterns and collocations',
instruction: 'Complete using the phrases in the box.',
wordBox: ['bricks and mortar', 'on the house', 'on the table', 'out of shape', 'precious metal', 'raw materials', 'smooth sailing', 'the town of'],
questions: [
{ number: 1, parts: ['We had a few difficulties at first, but it was pretty ', ' after that.'], answers: [['smooth sailing']] },
{ number: 2, parts: ["Don't worry - these drinks are ", '.'], answers: [['on the house']] },
{ number: 3, parts: ['Lance built a log cabin in a Canadian forest, using ', ' that were all around him.'], answers: [['raw materials']] },
{ number: 4, parts: ['Isambard Kingdom Brunel, the great engineer, was born in ', ' Portsmouth in 1806.'], answers: [['the town of']] },
{ number: 5, parts: ['The offer ', " is far too low and I'm going to ask them to increase it."], answers: [['on the table']] },
{ number: 6, parts: ['I would invest in ', ', because property is usually a safe investment.'], answers: [['bricks and mortar']] },
{ number: 7, parts: ['Charles was so ', ' that he was exhausted after just half a day on the building site.'], answers: [['out of shape']] },
{ number: 8, parts: ['A ', ' such as silver is valuable because of its rarity.'], answers: [['precious metal']] }
]
},
{
id: 'I',
unitId: 16,
title: 'Phrases, patterns and collocations: Building the home of the future',
instruction: 'Write one word in each gap.',
questions: [
{
number: 1,
parts: [
"I've always kept a sharp eye ",
" developments in building, so when it was time to plan my own home, I was determined to build the home of the future. It wasn't easy. There are rules and regulations everywhere that seem to block ",
' way and, to ',
' matters worse, not everyone agrees on the best way to go about it. It certainly gave me a window ',
" the world of architecture to hear my architect explain the problems he knew we were going to face. Perhaps I was crazy (that's a ",
' of opinion!), but I knew what I wanted. It had to look great, but ',
' the surface I wanted it to be high-tech and environmentally friendly. I did a lot of research, and that certainly smoothed the ',
' for what was to come. I did some of the physical work myself, putting up walls and bending things ',
" shape, and I'd like to erect a monument ",
" the person who invented solar-powered heating. In the end, my architect's predictions of doom ",
' no foundation and it all took just eight months.'
],
answers: [['on'], ['your', 'the'], ['make'], ['on', 'into', 'onto'], ['matter'], ['under', 'underneath', 'beneath'], ['way'], ['into'], ['to'], ['had']]
}
]
},
{
id: 'J',
unitId: 16,
title: 'Phrases, patterns and collocations',
instruction: 'For each question, write one word which can be used in all three sentences.',
questions: [
{ number: 1, parts: ['These accusations are completely without ___. The ___ stone for the new hospital was laid by the Mayor. You have to do a ___ course before you can start your degree. Word: ', ''], answers: [['foundation']] },
{ number: 2, parts: ["Joshua looks aggressive, but he's not such a ___ guy once you get to know him. It's time this government got ___ with people exceeding the speed limit. The last few years have been quite ___ on Amanda and I'm glad things seem to be getting better. Word: ", ''], answers: [['tough']] },
{ number: 3, parts: ['The building collapsed only a ___ of months after construction was completed. My parents said that I have to find a flat of my own this month, no ___ what. We need to install traffic lights at this junction as a ___ of some urgency. Word: ', ''], answers: [['matter']] },
{ number: 4, parts: ["There was a hush in Parliament as the Minister took the ___. I'd be afraid of burglars if I lived in a ground ___ flat. I quite enjoyed the club, but I thought the ___ show was terrible. Word: ", ''], answers: [['floor']] },
{ number: 5, parts: ["The Smiths were pretty quick off the ___ to sell when they heard house prices were falling. I think that what you said to Rita about her taste in furniture really hit the ___. Poverty and unemployment have certainly left a ___ on this area. Word: ", ''], answers: [['mark']] },
{ number: 6, parts: ["A record number of businesses are predicted to ___ in the next 12 months. Now carefully ___ the paper in two, and you can begin to see the shape of the paper plane. Don't ___ your arms and talk to me in that tone of voice! Word: ", ''], answers: [['fold']] }
]
},
{
id: 'K',
unitId: 16,
title: 'Idioms',
instruction: 'Complete using the words in the box. You have to use some words more than once.',
wordBox: ['belt', 'home', 'jungle', 'landscape', 'sticks', 'street', 'town'],
questions: [
{ number: 1, parts: ['That awful new office block is a real blot on the ', '.'], answers: [['landscape']] },
{ number: 2, parts: ["The crime rate is soaring! It's becoming a real concrete ", ' out there.'], answers: [['jungle']] },
{ number: 3, parts: ['Make yourself at ', ' while I just put the kettle on and make us a nice cup of tea.'], answers: [['home']] },
{ number: 4, parts: ["It's my birthday, so I'm planning to go out on the ", ' with my friends this evening.'], answers: [['town']] },
{ number: 5, parts: ['Living in the commuter ', " is okay, but I'd love to move back into the city."], answers: [['belt']] },
{ number: 6, parts: ["I don't know how Nicole survives, living all the way out in the ", '.'], answers: [['sticks']] },
{ number: 7, parts: ["We couldn't afford to live in London, so we ended up living in a satellite ", ' about half an hour away.'], answers: [['town']] },
{ number: 8, parts: ["I love this hotel, and it's always been a kind of ", ' from home for me.'], answers: [['home']] },
{ number: 9, parts: ['After losing his job and getting divorced, it seemed only a matter of time before Anthony was out on the ', '.'], answers: [['street']] },
{ number: 10, parts: ["It's fine to travel, but there's nothing better than ", ' sweet home.'], answers: [['home']] }
]
},
{
id: 'L',
unitId: 16,
title: 'Word formation',
instruction: 'Each of the bold words is in the wrong form. Rewrite them correctly.',
questions: [
{ number: 1, parts: ['The (manufacturer) ', ' industries are a major employer in this area.'], answers: [['manufacturing']] },
{ number: 2, parts: ['Dunscar and the (roundness) ', ' areas have seen a sharp increase in house prices.'], answers: [['surrounding']] },
{ number: 3, parts: ['When the mixture starts to (solidity) ', ', put it in the freezer.'], answers: [['solidify']] },
{ number: 4, parts: ['Each (housing) ', ' is responsible for maintaining the area in front of their house.'], answers: [['householder']] },
{ number: 5, parts: ["'I'll always be here for you,' Brittany said (soften) ", '.'], answers: [['softly']] },
{ number: 6, parts: ["Be careful - the floor's wet and it's a bit (slippage) ", '.'], answers: [['slippery', 'slippy']] },
{ number: 7, parts: ['I dropped a spanner and it made a loud, (metallurgy) ', ' sound.'], answers: [['metallic']] },
{ number: 8, parts: ['There have been (substance) ', ' improvements to the local area.'], answers: [['substantial']] },
{ number: 9, parts: ['The council apply the rules on building quite (rigidity) ', '.'], answers: [['rigidly']] },
{ number: 10, parts: ['After the earthquake, all the buildings were checked for (structure) ', ' damage.'], answers: [['structural']] }
]
},
{
id: 'M',
unitId: 16,
title: 'Word formation: Rebuilding Coventry',
instruction: 'Use the word given in capitals to form a word that fits each gap.',
questions: [
{
number: 1,
parts: [
'In the late 30s, (ANALYSE) ',
' knew that the centre of the historic town of Coventry in the West Midlands needed to be redeveloped. Plans had to be (SHELF) ',
" when the Second World War started in 1939. However, the architects' opportunity (MATERIAL) ",
' when the city centre was practically destroyed during the war. Many buildings were (REPAIR) ',
' damaged and demolition work began. Aiming to create a much more (SPACE) ',
' area for (RESIDE) ',
' to work and shop in, town planners came up with a radical idea. They would make the city more (INHABIT) ',
' by pedestrianising the centre, preventing cars entering. There were (OBJECT) ',
' from local shopkeepers, who thought that it would have an impact on trade, but the planners went ahead. What was once a (DENSE) ',
' populated area became a pleasant, attractive place to visit. It was a real (ARCHITECT) ',
' achievement, one that many British towns have emulated since.'
],
answers: [
['analysts'], ['shelved'], ['materialised'], ['irreparably'], ['spacious'],
['residents'], ['habitable', 'inhabitable'], ['objections'], ['densely'], ['architectural']
]
}
]
},
{
id: 'N',
unitId: 16,
title: 'Word formation: suffix -en',
instruction: "Choose Yes if the noun or adjective can take -en to form a verb meaning 'cause to become' or 'become'; otherwise choose No.",
questions: [
{ number: 1, parts: ['black ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 2, parts: ['bright ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 3, parts: ['broad ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 4, parts: ['brown ', ''], answers: [['No']], options: [yesNo] },
{ number: 5, parts: ['damp ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 6, parts: ['deep ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 7, parts: ['fright ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 8, parts: ['hard ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 9, parts: ['length ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 10, parts: ['loose ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 11, parts: ['narrow ', ''], answers: [['No']], options: [yesNo] },
{ number: 12, parts: ['red ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 13, parts: ['short ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 14, parts: ['strength ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 15, parts: ['tall ', ''], answers: [['No']], options: [yesNo] },
{ number: 16, parts: ['tight ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 17, parts: ['weak ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 18, parts: ['wide ', ''], answers: [['Yes']], options: [yesNo] }
]
},
{
id: 'O',
unitId: 16,
title: 'Word formation: suffix -en',
instruction: 'Complete the sentences using words formed in exercise N in the correct form.',
questions: [
{ number: 1, parts: ["Apparently, they're going to ", ' the road here so that it can cope with the heavy traffic.'], answers: [['widen']] },
{ number: 2, parts: ['This decision by the authorities only ', ' our determination to fight on.'], answers: [['strengthens', 'strengthened']] },
{ number: 3, parts: ["Ryan's face ", " as he realised what a terrible mistake he'd made."], answers: [['reddened']] },
{ number: 4, parts: ["The dress suits you, but it's a bit long. You can always ", ' it.'], answers: [['shorten']] },
{ number: 5, parts: ['Could you help me ', " my seat belt? It's a bit loose."], answers: [['tighten']] },
{ number: 6, parts: ['Some flowers in here would certainly ', " the place up, wouldn't they?"], answers: [['brighten']] },
{ number: 7, parts: ['They leave the clay in the sun to ', ' and use the bricks to build houses.'], answers: [['harden']] },
{ number: 8, parts: ['We must remain strong and not ', " if we're going to stop this bypass being built."], answers: [['weaken']] }
]
}
];