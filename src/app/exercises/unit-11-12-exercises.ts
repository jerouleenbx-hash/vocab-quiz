import type { ExerciseSection } from './exercises';

const yesNo = ['Yes', 'No'];

export const unitElevenExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    unitId: 11,
    title: 'Conditionals: matching',
    instruction: 'Match each sentence beginning with the correct ending.',
    wordBox: [
      'A we might get served a bit more quickly.',
      "B give us a call and we'll come to pick you up.",
      'C very few people would obey the law.',
      "D you wouldn't get hiccups, would you?",
      'E they have to go through a complicated procedure.',
      "F we'd be happy to give you a good reference.",
      "G I'm pretty sure they won't let you check in.",
      'H more areas of natural beauty will be destroyed.',
      "I we'll have enough time to see a few sights.",
      "J you can't really complain about the government."
    ],
    questions: [
      { number: 1, parts: ['If you stay with us for three days, ', ''], answers: [['I']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']] },
      { number: 2, parts: ['If you decide not to vote in the election, ', ''], answers: [['J']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']] },
      { number: 3, parts: ["If you didn't eat your lunch so fast, ", ''], answers: [['D']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']] },
      { number: 4, parts: ['If there were a few more people working, ', ''], answers: [['A']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']] },
      { number: 5, parts: ['If you forget to take your passport, ', ''], answers: [['G']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']] },
      { number: 6, parts: ["If the hire car isn't there when you arrive, ", ''], answers: [['B']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']] },
      { number: 7, parts: ['If the city continues to expand, ', ''], answers: [['H']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']] },
      { number: 8, parts: ["If the police didn't fine people, ", ''], answers: [['C']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']] },
      { number: 9, parts: ['If you did decide to leave the company, ', ''], answers: [['F']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']] },
      { number: 10, parts: ['If MPs wish to resign, ', ''], answers: [['E']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']] }
    ]
  },
  {
    id: 'B',
    unitId: 11,
    title: 'Conditionals: rewriting',
    instruction: 'Rewrite using an appropriate conditional form, starting with the words given.',
    questions: [
      { number: 1, parts: ["Sue didn't get me a birthday present, which is why I didn't get her one.\nIf Sue ", '.'], answers: [['had got me a birthday present, I would have got her one', "'d got me a birthday present, I'd have got her one"]] },
      { number: 2, parts: ['We didn\'t pay them on time because they made a mistake with our order.\nIf they ', '.'], answers: [["hadn't made a mistake with our order, we would have paid them on time", "hadn't made a mistake with our order, we'd have paid them on time"]] },
      { number: 3, parts: ['The climate is undergoing such radical changes that scientists are worried.\nIf ', '.'], answers: [["the climate wasn't undergoing such radical changes, scientists wouldn't be worried", "the climate weren't undergoing such radical changes, scientists wouldn't be worried"]] },
      { number: 4, parts: ['Did California become an important area because they found gold there?\nWould ', '?'], answers: [["California have become an important area if they hadn't found gold there"]] },
      { number: 5, parts: ["It's the sunset that attracts tourists to that place.\nIf it ", '.'], answers: [["wasn't for the sunset, tourists wouldn't be attracted to that place", "weren't for the sunset, tourists wouldn't be attracted to that place"]] },
      { number: 6, parts: ['There was a traffic jam on the motorway so I was late for my interview.\nIf there ', '.'], answers: [["hadn't been a traffic jam on the motorway, I wouldn't have been late for my interview"]] },
      { number: 7, parts: ["I suggest you use a sunblock, and then you won't go red.\nIf I were ", '.'], answers: [["you, I'd use a sunblock so you don't go red", "you, I would use a sunblock so you don't go red", "you, I'd use a sunblock and then you wouldn't go red", "you, I would use a sunblock and then you wouldn't go red"]] },
      { number: 8, parts: ["The accident happened as a result of the driver's not paying attention to the road.\nIf the driver ", '.'], answers: [["had been paying attention to the road, the accident wouldn't have happened", 'had paid attention to the road, the accident wouldn\'t have happened']] }
    ]
  },
  {
    id: 'C',
    unitId: 11,
    title: 'Conditionals: 17th March',
    instruction: 'Complete using the correct form of the verbs in brackets. Add any other words you need.',
    questions: [
      {
        number: 1,
        parts: [
          'So, today marks one year since I became a Park Ranger. If I ',
          ' (do) that then, I never ',
          ' (have) so many fantastic experiences. If you ',
          ' (ask) me now, I would say that I knew nothing when I started, but I\'ve learnt a huge amount. In a typical day, I\'ll deal with complaints, check on the running of the park and lead guided tours, if any ',
          ' (book). If it\'s low season, I ',
          ' (have) time to check on forest management and fire control measures. It can get stressful at times, especially if visitors to the park ',
          ' (get) lost or injured. We had a case last week, which wouldn\'t ',
          ' (happen) if the woman involved ',
          ' (be) a bit more careful. You see, if you ',
          ' (wander) around a large National Park like this without a map, you\'re bound to get lost. This particular case might ',
          ' (be) so bad if it ',
          ' (start) raining. She was only wearing light clothes, so she was wet through and freezing when we found her. I dread to think what might ',
          " (happen) if we hadn't!"
        ],
        answers: [
          ["hadn't done"], ['would have had', "'d have had"], ['asked'],
          ['are booked', 'have been booked'], ['have', 'will have', "'ll have"],
          ['get'], ['have happened'], ['had been'], ['wander'],
          ['not have been'], ["hadn't started"], ['have happened']
        ]
      }
    ]
  },
  {
    id: 'D',
    unitId: 11,
    title: 'Conditionals and inverted conditionals',
    instruction: 'Choose the correct word or phrase.',
    questions: [
      { number: 1, parts: ["If we hadn't taken a wrong turning back there, we wouldn't ", ' in this mess now.'], answers: [['be']], options: [['be', 'have been']] },
      { number: 2, parts: ['', ' you need any further assistance, please don\'t hesitate to ask.'], answers: [['Should']], options: [['Should', 'Would']] },
      { number: 3, parts: ['', ' warned people in time, a lot more lives could have been lost.'], answers: [['Had they not']], options: [['Had they not', "Hadn't they"]] },
      { number: 4, parts: ['If you ', " last weekend when the boss asked you, then you wouldn't have to work this weekend."], answers: [['had worked']], options: [['worked', 'had worked']] },
      { number: 5, parts: ['Were all the members of staff to attend the conference, would the hotel ', ' enough rooms for everyone?'], answers: [['have']], options: [['have', 'have had']] },
      { number: 6, parts: ["Had the government acted sooner, the general public wouldn't ", ' so much about the current situation.'], answers: [['be worrying']], options: [['be worrying', 'have worried']] },
      { number: 7, parts: ["Tom Cruise wouldn't be the star he is today ", ' made a good impression in his early films.'], answers: [['had he not']], options: [['had he not', 'should he not have']] },
      { number: 8, parts: ['', ' to build more roads, the traffic system would collapse by 2020.'], answers: [['Were we not']], options: [["Weren't we", 'Were we not']] },
      { number: 9, parts: ['It would be hard enough to pass the exam tomorrow even if you ', ' to all the lectures this year.'], answers: [['had gone']], options: [['went', 'had gone']] },
      { number: 10, parts: ['You can contact the hotel manager on extension 142 ', ' you need to.'], answers: [['should']], options: [['should', 'could']] },
      { number: 11, parts: ['', ' receive confirmation of your flight by e-mail, please click the link below.'], answers: [['Should you not']], options: [["Shouldn't you", 'Should you not']] },
      { number: 12, parts: ['I would have asked the person for ID before I let him in, if I ', ' you.'], answers: [['were']], options: [['were', 'have been']] }
    ]
  },
  {
    id: 'E',
    unitId: 11,
    title: 'Other conditional structures',
    instruction: 'Complete using the words in the box.',
    wordBox: ['case', 'condition', 'long', 'otherwise', 'provided', 'so', 'suppose', 'unless'],
    questions: [
      { number: 1, parts: ['Do you want a highly-paid career, and, if ', ', are you prepared to retrain? Contact us.'], answers: [['so']] },
      { number: 2, parts: ["I'm quite happy to lend you money, as ", ' as you make sure I get it back.'], answers: [['long']] },
      { number: 3, parts: ['The village fair should be a great success, ', " we don't have the same problems with the weather as last year."], answers: [['provided']] },
      { number: 4, parts: ["It'd be great to see you on Saturday evening, ", " you've already got other plans."], answers: [['unless']] },
      { number: 5, parts: ['Could you go to the shop for me? I have to stay in in ', ' the courier comes.'], answers: [['case']] },
      { number: 6, parts: ['Your idea sounds fine in theory, but just ', ' something goes wrong. What then?'], answers: [['suppose']] },
{ number: 7, parts: ['Write your name at the top of your essay, ', " I won't know which one's yours."], answers: [['otherwise']] },
{ number: 8, parts: ['The judge allowed the accused to stay at home on ', ' she reported to the police every morning.'], answers: [['condition']] }
]
},
{
id: 'F',
unitId: 11,
title: 'Other conditional structures',
instruction: 'Write one word in each gap.',
questions: [
{ number: 1, parts: ['I would never be able to afford a new house if ', " wasn't for all the overtime I've been doing."], answers: [['it']] },
{ number: 2, parts: ["If it hadn't ", ' for the fact that his uncle was a partner in the business, Angus would never have got the job.'], answers: [['been']] },
{ number: 3, parts: ["How do you think you'd feel if someone happened ", ' damage your car like that?'], answers: [['to']] },
{ number: 4, parts: ['', ' for the kindness of a complete stranger, I would never have found the hotel.'], answers: [['But']] },
{ number: 5, parts: ["I don't think I'd be surprised in the slightest ", ' Paul were to suddenly announce that he was moving abroad.'], answers: [['if']] },
{ number: 6, parts: ["Don't forget to mention the new schedule to Veronica if you ", ' happen to see her this evening.'], answers: [['should']] },
{ number: 7, parts: ['Football matches would be ideal family outings ', ' it not for the danger of violence.'], answers: [['were']] },
{ number: 8, parts: ["If it hadn't been ", " the children, I'm sure Trisha would have left Tom a long time ago."], answers: [['for']] },
{ number: 9, parts: ['I would have lost the game ', ' it not been for some quick thinking.'], answers: [['had']] },
{ number: 10, parts: ['If you ', ' find the book I was asking you about, give me a call.'], answers: [['should']] }
]
},
{
id: 'G',
unitId: 11,
title: 'Conditionals: rewriting',
instruction: 'Rewrite the sentences, starting with the words given.',
questions: [
{ number: 1, parts: ["The only reason we won the contract was Debbie's fantastic presentation.\nWe wouldn't have ", '.'], answers: [["won the contract if it hadn't been for Debbie's fantastic presentation", "won the contract had it not been for Debbie's fantastic presentation", "won the contract but for Debbie's fantastic presentation", "won the contract without Debbie's fantastic presentation"]] },
{ number: 2, parts: ["The eventual arrival of the ferry prevented a fight from breaking out amongst the passengers.\nIf it hadn't been for ", '.'], answers: [['the eventual arrival of the ferry, a fight would have broken out amongst the passengers', "the eventual arrival of the ferry, a fight'd have broken out amongst the passengers"]] },
{ number: 3, parts: ["None of the passengers was injured because of the driver's quick reaction.\nBut ", '.'], answers: [["for the driver's quick reaction, some of the passengers would have been injured", "for the driver's quick reaction, some passengers would have been injured"]] },
{ number: 4, parts: ["We'll have to cancel the meeting if Wendy doesn't turn up soon.\nUnless ", '.'], answers: [["Wendy turns up soon, we'll have to cancel the meeting", 'Wendy turns up soon, we will have to cancel the meeting']] },
{ number: 5, parts: ["Mr Jones would be quite lonely if he didn't have his daughter's visits.\nWere it ", '.'], answers: [["not for his daughter's visits, Mr Jones would be quite lonely", "not for his daughter's visits, Mr Jones'd be quite lonely"]] },
{ number: 6, parts: ["Here's my phone number, because you might need it.\nIn case ", '.'], answers: [["you need it, here's my phone number", 'you need my phone number, here it is']] },
{ number: 7, parts: ['Agree to be back by midnight and you can go.\nProviding ', '.'], answers: [['you agree to be back by midnight, you can go', 'that you agree to be back by midnight, you can go']] },
{ number: 8, parts: ['Officer Hughes prevented the robbers from escaping.\nHad it ', '.'], answers: [['not been for Officer Hughes, the robbers would have escaped', "not been for Officer Hughes, the robbers'd have escaped"]] }
]
},
{
id: 'H',
unitId: 11,
title: 'Conditionals review',
instruction: 'Choose the correct answer.',
questions: [
{ number: 1, parts: ['If you saw another student cheating in an exam, ', ' somebody?'], answers: [['would you tell']], options: [['did you tell', 'do you tell', 'would you tell', 'have you told']] },
{ number: 2, parts: ['Make sure you mix the ingredients well, ', ' you might get lumps in your cake.'], answers: [['otherwise']], options: [['unless', 'otherwise', 'provided', 'supposing']] },
{ number: 3, parts: ['Were ', ' my dad, I would never have started playing tennis in the first place.'], answers: [['it not for']], options: [['it for', "it hadn't been for", 'it to be for', 'it not for']] },
{ number: 4, parts: ['If I ', " hear from Nigel, I'll tell him you were asking after him."], answers: [['should happen to']], options: [['happened', 'should happen to', 'should to', 'will happen to']] },
{ number: 5, parts: ['The book would have been perfect ', ' the ending.'], answers: [['had it not been for']], options: [['had it not been for', 'it had not been for', "it hadn't been for", "hadn't it been for"]] },
{ number: 6, parts: ["If you hadn't taken the money, you ", ' in prison now.'], answers: [["wouldn't be"]], options: [["wouldn't have been", "hadn't been", "haven't been", "wouldn't be"]] },
{ number: 7, parts: ['Do you think that if we ', ' earlier we might not have missed the coach?'], answers: [['had left']], options: [['have been leaving', 'left', 'had left', 'have left']] },
{ number: 8, parts: ['Unless Ray ', " here soon, I'm going to leave because I'm getting bored."], answers: [['gets']], options: [["doesn't get", 'gets', "won't get", 'will get']] },
{ number: 9, parts: ['What if I ', " you that there's a good chance I can get tickets for the concert?"], answers: [['were to tell']], options: [['were to tell', 'were telling', 'have told', 'would to tell']] },
{ number: 10, parts: ['If there ', ' happen to be any reason for late delivery, please inform our Accounts Department.'], answers: [['should']], options: [['might', 'could', 'would', 'should']] }
]
},
{
id: 'I',
unitId: 11,
title: 'Conditionals: CFCs',
instruction: 'Write one word in each gap.',
questions: [
{
number: 1,
parts: [
'Had ',
' not been for the invention of CFCs (chlorofluorocarbons) in the 1920s, at least one environmental problem might have been avoided. In fact, ',
' they to be invented today, they ',
' no doubt be immediately banned. For fifty years, though, if you bought an air conditioner or a spray, there ',
' a good chance that it contained CFCs - and those CFCs are still around in the atmosphere.\nIf you ',
' able to travel into the upper layers of the atmosphere, you ',
' see the chlorine and fluorine from CFCs breaking down the ozone (a form of oxygen). Ozone could damage your lungs ',
' you were to breathe it, but high in the atmosphere it performs the function of blocking ultraviolet rays from the sun, rays which can cause skin cancer if you ',
' exposed to them. We might ',
' have known about the process ',
' it not been for the work of two American scientists, Frank Rowland and Mario Molina. A number of industries fought against their conclusions, and might have won ',
' the evidence not been so clear. Rowland and Molina received the Nobel Prize for Chemistry in 1995 for their work on the ozone layer, but ',
' which we might today be facing an even greater problem.'
],
answers: [
['it'], ['were'], ['would'], ['was'], ['were'],
['would', "'d"], ['if'], ['are', "'re"], ['not', 'never'],
['had'], ['had'], ['without']
]
}
]
},
{
  id: 'J',
  unitId: 11,
  title: 'Conditionals: key word transformations',
  instruction: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words.',
  questions: [
    { number: 1, parts: ['Without this new diet, Henry would never have lost so much weight. (it)\nHad ', ' this new diet, Henry would never have lost so much weight.'], answers: [['it not been for']] },
    { number: 2, parts: ["Unless the plans change, we'll see you on the 19th. (no)\nProvided ", " the plans, we'll see you on the 19th."], answers: [['there are no changes to', 'that there are no changes to']] },
    { number: 3, parts: ["If you applied now, there's a good chance you would get the job. (apply)\nWere ", ", there's a good chance you would get the job."], answers: [['you to apply now']] },
    { number: 4, parts: ["I didn't know about your problem so I didn't offer to help. (have)\nIf I'd known about your problem, ", ' to help.'], answers: [['I would have offered', "I'd have offered"]] },
    { number: 5, parts: ['It could get cold at night, so take some warm clothes. (in)\nTake some warm clothes ', ' cold at night.'], answers: [['in case it gets']] },
    { number: 6, parts: ["I'd love to travel the world if I didn't have to pay off my mortgage. (having)\nWere ", " to pay off my mortgage, I'd love to travel the world."], answers: [['I not having']] },
    { number: 7, parts: ['Ten years ago, people would have complained at seeing this film. (seen)\nHad ', ', they would have complained.'], answers: [['people seen this film ten years ago']] },
    { number: 8, parts: ['Drivers are allowed to park here if they display a local resident permit. (condition)\nDrivers are allowed to park here ', ' they display a local resident permit.'], answers: [['on condition that', 'on the condition that']] }
  ]
},

];

export const unitTwelveExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    unitId: 12,
    title: 'Topic vocabulary: Chance',
    instruction: 'Complete using the correct form of the words in the box.',
    wordBox: ['attribute', 'determine', 'fluctuate', 'foresee', 'gamble', 'meander', 'mutate', 'pick', 'startle', 'wobble'],
    questions: [
      { number: 1, parts: ['The woman claimed to be able to ', ' the future, but I knew she was only guessing.'], answers: [['foresee']] },
      { number: 2, parts: ['In a moment of madness, I decided to ', ' everything on the turn of one card.'], answers: [['gamble']] },
      { number: 3, parts: ['It seems that one of the genes has ', ', causing the frog to be blue.'], answers: [['mutated']] },
      { number: 4, parts: ['Following the investigation, the accident was ', ' to chance.'], answers: [['attributed']] },
      { number: 5, parts: ['When the glass fell off the table on its own, it really ', ' me.'], answers: [['startled']] },
      { number: 6, parts: ["A casino's profits might ", ' from month to month, but you can be sure they will always make money.'], answers: [['fluctuate']] },
      { number: 7, parts: ['Police have yet to ', ' what caused the building to collapse.'], answers: [['determine']] },
      { number: 8, parts: ['The first I knew of the earthquake was when the furniture started to ', '.'], answers: [['wobble']] },
      { number: 9, parts: ['Is there a winning roulette system that can help you ', ' the right number?'], answers: [['pick']] },
      { number: 10, parts: ['As the river gets closer to the sea, it begins to ', ' across the flat lowlands.'], answers: [['meander']] }
    ]
  },
  {
    id: 'B',
    unitId: 12,
    title: 'Topic vocabulary: Chance',
    instruction: 'Choose the correct answer.',
    questions: [
      { number: 1, parts: ["What's the ", ' number of accidents which happen in the home each year?'], answers: [['approximate']], options: [['approximate', 'random', 'close', 'inexact']] },
      { number: 2, parts: ['I always take my lucky ', ' with me into an exam.'], answers: [['charm']], options: [['sign', 'item', 'charm', 'spell']] },
      { number: 3, parts: ['Did you plan to meet up with Emma in London, or was it just a ', '?'], answers: [['coincidence']], options: [['freak', 'fate', 'coincidence', 'luck']] },
      { number: 4, parts: ["Johnnie broke the vase, but I'm sure it wasn't ", '.'], answers: [['deliberate']], options: [['purposeful', 'instrumental', 'desirable', 'deliberate']] },
      { number: 5, parts: ['We can only ', ' as to the causes of the disaster.'], answers: [['speculate']], options: [['think', 'speculate', 'consider', 'ponder']] },
      { number: 6, parts: ['The ', ' of one winning the lottery is hardly worth even considering.'], answers: [['likelihood']], options: [['hazard', 'luck', 'fortune', 'likelihood']] },
      { number: 7, parts: ["I didn't know my guess was going to be right - it was just ", '.'], answers: [['pot luck']], options: [['pot luck', 'odds', 'draw', 'gamble']] },
      { number: 8, parts: ['Do you believe in that old ', ' about not walking under a ladder?'], answers: [['superstition']], options: [['curse', 'misfortune', 'uncertainty', 'superstition']] }
    ]
  },
  {
    id: 'C',
    unitId: 12,
    title: 'Topic vocabulary: Chance',
    instruction: 'Complete using the correct form of the words in the boxes.',
    wordBox: [
      'haphazard', 'spontaneous',
      'blow', 'mishap',
      'freak', 'inadvertent',
      'odds', 'statistics',
      'jinxed', 'superstitious',
      'ascribe', 'assign',
      'random', 'stray',
      'cause', 'transpire'
    ],
    questions: [
      { number: 1, parts: ['Have you ever done something completely ', ', like suddenly deciding to quit your job?'], answers: [['spontaneous']] },
      { number: 2, parts: ["This government doesn't seem to have a plan and is just reacting to events in a ", ' manner.'], answers: [['haphazard']] },
      { number: 3, parts: ["Having an accident in the first race was a real ", " to Johnson's ambitions of becoming world champion."], answers: [['blow']] },
      { number: 4, parts: ['We should get there by midnight, as long as there are no ', ' along the way.'], answers: [['mishaps']] },
      { number: 5, parts: ['Nobody could have foreseen what would happen - it was just a ', ' accident.'], answers: [['freak']] },
      { number: 6, parts: ["The politician's ", ' comments to the press started a national scandal.'], answers: [['inadvertent']] },
      { number: 7, parts: ['It seems to me that you can prove just about anything with ', '.'], answers: [['statistics']] },
      { number: 8, parts: ['The ', ' are 7-1 against Argentina getting to the final of the competition.'], answers: [['odds']] },
      { number: 9, parts: ['Seven people have got ill on the voyage so far; I think the cruise is ', '.'], answers: [['jinxed']] },
      { number: 10, parts: ["Aren't ", ' people just looking for a way to control things that are really out of their control?'], answers: [['superstitious']] },
      { number: 11, parts: ["Andy's been lucky enough to be ", " to the Sydney office and he's leaving next week."], answers: [['assigned']] },
      { number: 12, parts: ['Wilson ', ' his defeat to bad luck.'], answers: [['ascribed']] },
      { number: 13, parts: ['Apparently, the car was hit by a ', ' bullet during the riot.'], answers: [['stray']] },
      { number: 14, parts: ['Just think of a ', ' number and then write it on here.'], answers: [['random']] },
      { number: 15, parts: ['It looks like the fire was ', ' by a discarded cigarette.'], answers: [['caused']] },
      { number: 16, parts: ['We may never know what ', ' that fateful night.'], answers: [['transpired']] }
    ]
  },
  {
    id: 'D',
    unitId: 12,
    title: 'Topic vocabulary: Nature',
    instruction: 'If the bold word or phrase is correct, write OK. If it is incorrect, replace it with a bold word or phrase from another sentence.',
    questions: [
      { number: 1, parts: ['The earthquake was a real (resource) ', ' and destroyed most of the buildings in the city.'], answers: [['catastrophe']] },
      { number: 2, parts: ['They are going to (harvest) ', ' the local people because the volcano might erupt.'], answers: [['evacuate']] },
      { number: 3, parts: ['We need to find alternatives to (catastrophe) ', ' before we destroy our planet.'], answers: [['fossil fuels']] },
      { number: 4, parts: ["There's so much (fossil fuels) ", ' in England during the summer.'], answers: [['greenery']] },
      { number: 5, parts: ['The panda is threatened by the destruction of its (greenery) ', '.'], answers: [['habitat']] },
      { number: 6, parts: ['They were planning to (evacuate) ', ' the grapes the next day and nobody could have predicted the storm.'], answers: [['harvest']] },
      { number: 7, parts: ['Some animals seem to know by (species) ', ' when bad weather is on the way.'], answers: [['instinct']] },
      { number: 8, parts: ['The oil fields are a vast natural (habitat) ', ' that belongs to all the people, not just a few businessmen.'], answers: [['resource']] },
      { number: 9, parts: ['The sparrow is becoming increasingly (scarce) ', ' in this area.'], answers: [['OK']] },
      { number: 10, parts: ['Scientists claim to have identified a new (instinct) ', ' of monkey.'], answers: [['species']] }
    ]
  },
  {
    id: 'E',
    unitId: 12,
    title: 'Topic vocabulary: Nature',
    instruction: 'Choose the correct word or phrase.',
    questions: [
      { number: 1, parts: ['It seems that ', ' first developed in the Middle East.'], answers: [['agriculture']], options: [['agriculture', 'crop']] },
      { number: 2, parts: ['Coffee is a very important ', ' in Brazil.'], answers: [['crop']], options: [['agriculture', 'crop']] },
      { number: 3, parts: ['The ', ' was caused by war in the region.'], answers: [['famine']], options: [['drought', 'famine']] },
      { number: 4, parts: ['If the ', ' continues, the government is planning to introduce a ban on washing cars.'], answers: [['drought']], options: [['drought', 'famine']] },
      { number: 5, parts: ['You have to stop and get out of your car to really ', ' the natural beauty of the area.'], answers: [['appreciate']], options: [['appreciate', 'exploit']] },
      { number: 6, parts: ["Why do you think that we don't have the right to ", ' nature to make money?'], answers: [['exploit']], options: [['appreciate', 'exploit']] },
      { number: 7, parts: ['Some scientists still dispute that ', ' is caused by human activity.'], answers: [['global warming']], options: [['global warming', 'natural disaster']] },
      { number: 8, parts: ['Over half a million people were forced to leave their homes as a result of the recent ', '.'], answers: [['natural disaster']], options: [['global warming', 'natural disaster']] },
      { number: 9, parts: ["It's been raining for days and there's a real danger of ", " if it doesn't stop soon."], answers: [['floods']], options: [['floods', 'hurricanes']] },
      { number: 10, parts: ['This area is frequently hit by ', ' that start at sea and then move inland.'], answers: [['hurricanes']], options: [['floods', 'hurricanes']] }
    ]
  },
  {
    id: 'F',
    unitId: 12,
    title: 'Phrasal verbs: Global warming',
    instruction: 'Write one word in each gap.',
    questions: [
      {
        number: 1,
        parts: [
          'There has been a steady rise in the average temperature around the planet over the last hundred years or so, and the majority of scientists put it ',
          ' to human activity. The solution, they claim, is to cut back ',
' our consumption of fossil fuels, which produce the carbon dioxide that drives global warming. However, some scientists argue that the historical evidence shows that over time the Earth heats ',
' and cools ',
' naturally. According to them, we should just continue to get ',
' the fossil fuels that are available and find alternatives when they run out.\nWhatever the cause of global warming, the increase in temperature is undeniable. It is predicted that over the next few decades many species will die ',
' as once fertile areas turn to desert. Seas will rise in some areas and rivers will dry ',
' in other areas, killing ',
' animal and plant life that rely on them. It looks like this debate will only get more intense.'
],
answers: [['down'], ['on'], ['up'], ['down'], ['through'], ['out'], ['up'], ['off']]
}
]
},
{
id: 'G',
unitId: 12,
title: 'Phrasal verbs',
instruction: 'Complete using the correct form of the phrasal verbs in the box.',
wordBox: ['chance upon', 'come across', 'dig up', 'slip up', 'spring up', 'store up', 'throw out', 'throw up'],
questions: [
{ number: 1, parts: ['We were walking through the woods when we ', ' a trap set by hunters.'], answers: [['chanced upon', 'came across']] },
{ number: 2, parts: ["It's a huge risk, and we can't afford to ", ' or everything will go wrong.'], answers: [['slip up']] },
{ number: 3, parts: ["Don't just ", ' those plastic bottles - we can recycle them.'], answers: [['throw out']] },
{ number: 4, parts: ["Isn't it amazing how squirrels ", ' nuts to make sure they have enough to eat in the winter?'], answers: [['store up']] },
{ number: 5, parts: ['The new law has ', " a number of problems for farmers that weren't expected."], answers: [['thrown up']] },
{ number: 6, parts: ['As I was flicking through the magazine, I ', ' an article about the local nature reserve.'], answers: [['came across', 'chanced upon']] },
{ number: 7, parts: ['According to the evidence that has been ', ', people have been farming this area for over a 1,000 years.'], answers: [['dug up']] },
{ number: 8, parts: ['Organisations concerned about the environment seem to have ', ' everywhere these days.'], answers: [['sprung up']] }
]
},
{
id: 'H',
unitId: 12,
title: 'Phrasal verbs with off',
instruction: "Put the phrasal verbs into the sentences in the correct form, then choose Yes if the phrasal verb means something like 'remove' or No otherwise.",
wordBox: ['chop off', 'cross off', 'drop off', 'go off', 'peel off', 'set off', 'shave off', 'wipe off'],
questions: [
{ number: 1, parts: ['After what Maria said, I think we should ', ' her ', ' the guest list. Means "remove"? ', ''], answers: [['cross'], ['off'], ['Yes']], options: [[], [], yesNo] },
{ number: 2, parts: ['Calvin ', ' the chocolate ', ' his mouth with the back of his hand. Means "remove"? ', ''], answers: [['wiped'], ['off'], ['Yes']], options: [[], [], yesNo] },
{ number: 3, parts: ['Do you think Dad will ever ', ' his beard ', '? Means "remove"? ', ''], answers: [['shave'], ['off'], ['Yes']], options: [[], [], yesNo] },
{ number: 4, parts: ["There's a funny smell, like something's ", ' in the fridge. Means "remove"? ', ''], answers: [['gone off'], ['No']], options: [[], yesNo] },
{ number: 5, parts: ["Aren't you going to ", ' the head ', ' the fish before you serve it? Means "remove"? ', ''], answers: [['chop'], ['off'], ['Yes']], options: [[], [], yesNo] },
{ number: 6, parts: ["I'm so tired after work that I often just ", ' in front of the TV. Means "remove"? ', ''], answers: [['drop off'], ['No']], options: [[], yesNo] },
{ number: 7, parts: ["We're going to ", ' early in the morning, so try to get some sleep. Means "remove"? ', ''], answers: [['set off'], ['No']], options: [[], yesNo] },
{ number: 8, parts: ['You need to ', ' the paper ', ' the top of the ice cream before you eat it. Means "remove"? ', ''], answers: [['peel'], ['off'], ['Yes']], options: [[], [], yesNo] }
]
},
{
id: 'I',
unitId: 12,
title: 'Phrases, patterns and collocations',
instruction: 'Write one preposition in each gap.',
questions: [
{ number: 1, parts: ["It's a million to one against you being struck ", ' lightning.'], answers: [['by']] },
{ number: 2, parts: ['We got caught ', ' the rain so we were completely soaked when we got home.'], answers: [['in']] },
{ number: 3, parts: ['Many people only manage to give up gambling ', ' dint of a lot of hard work.'], answers: [['by']] },
{ number: 4, parts: ['A sudden gust ', ' wind blew the letter out of my hand.'], answers: [['of']] },
{ number: 5, parts: ["I can't believe you bet your car ", ' the toss of a coin!'], answers: [['on']] },
{ number: 6, parts: ["I'd love to be a cat and spend all day lying ", ' the sun.'], answers: [['in']] },
{ number: 7, parts: ["I believe we're ", " luck this time and we won't have lost our money."], answers: [['in']] },
{ number: 8, parts: ["You're either lucky ", ' nature or you have to work hard all your life.'], answers: [['by']] }
]
},
{
id: 'J',
unitId: 12,
title: 'Phrases, patterns and collocations: Earthquake prediction',
instruction: 'Write one word in each gap.',
questions: [
{
number: 1,
parts: [
"If you were to hazard a ",
" at when and where the next major earthquake will strike, there's ",
" chance that you'd be almost as accurate as the experts. The science of earthquake prediction is still in its infancy, which is uncomfortable, considering the threat posed ",
' human civilisation. Even with vast resources at ',
' disposal, often the best that scientists can do is say that ',
' odds are that an earthquake will strike where one occurred before. One reason the chances ',
' making an accurate prediction are so low is the nature ',
' the forces involved. It seems to be impossible to tell the difference between a small earthquake and a warning tremor. Scientists need to decide whether to put lives at ',
' by not issuing a warning, or constantly issue warnings about the threat ',
' an earthquake that may be ignored. In the end, the odds seem to be ',
' us solving this difficult problem any time soon.'
],
answers: [['guess'], ['every'], ['to'], ['their'], ['the'], ['of'], ['of'], ['risk'], ['of'], ['against']]
}
]
},
{
id: 'K',
unitId: 12,
title: 'Phrases, patterns and collocations',
instruction: 'Write one word in each gap.',
questions: [
{ number: 1, parts: ["I think Jay plays poker, but I couldn't ", ' for certain.'], answers: [['say', 'know']] },
{ number: 2, parts: ["If one species survives at the expense of another, then I think that's just ", ' selection.'], answers: [['natural']] },
{ number: 3, parts: ["I'll just call Jimmy to ", ' certain he can look after the dogs.'], answers: [['make']] },
{ number: 4, parts: ['The Minister gave the ', ' light for the bypass to go ahead.'], answers: [['green']] },
{ number: 5, parts: ['You were a bit hard on him for crashing your car - give him a ', ' chance!'], answers: [['second']] },
{ number: 6, parts: ['People are ', ' their luck a bit too far when they live on the slopes of a volcano.'], answers: [['pushing']] },
{ number: 7, parts: ['Global warming will ', ' a great threat to mankind in years to come.'], answers: [['pose']] },
{ number: 8, parts: ['Just at the moment we had to go out, it started to ', ' with rain.'], answers: [['pour']] }
]
},
{
id: 'L',
unitId: 12,
title: 'Phrases, patterns and collocations',
instruction: 'For each question, write one word which can be used in all three sentences.',
questions: [
{ number: 1, parts: ["Have you ever ___ yourself wondering what it would be like to be someone else? I'm surprised you ___ the test so difficult after all that revision. After wandering in the forest for an hour, Gale finally ___ her way out. Word: ", ''], answers: [['found']] },
{ number: 2, parts: ["The problem of conservation is essentially economic in ___. It's only human ___ to want to acquire more wealth. I'm quite a calm person by ___, but things like this make me really angry. Word: ", ''], answers: [['nature']] },
{ number: 3, parts: ["Let's go through things again; I don't want to leave anything to ___. Excuse me, but are you Mr Whitehouse, by any ___? I mean it - this is your last ___ and next time you make a mistake, you're out. Word: ", ''], answers: [['chance']] },
{ number: 4, parts: ["I haven't been at work all week because I've been a bit under the ___. According to the ___ forecast, we're in for thunderstorms. We've had some really awful ___ lately, haven't we? Word: ", ''], answers: [['weather']] },
{ number: 5, parts: ["I was wondering how to get home when, as ___ would have it, Ben drove past in his car. The assistant said that I was in ___ and that they only had one pair left but they were my size. You've won by betting on red the last three times, but don't push your ___! Word: ", ''], answers: [['luck']] },
{ number: 6, parts: ["It so ___ that I've already decided to do that, anyway. As it ___, we can cancel the demonstration because the council have changed their mind. When a freak storm ___, we are not always given any warning of it. Word: ", ''], answers: [['happens']] },
{ number: 7, parts: ["I have to admit to feeling a ___ amount of fear as I stepped into the lions' cage. The press are ___ to find out about this, and then it'll be all over the papers. A ___ Mr Pratt rang this afternoon about your donation to the WWF. Word: ", ''], answers: [['certain']] },
{ number: 8, parts: ["I ___ you must be right about the weather - it feels hot! Don't ask me to ___ at her age as I'd be miles out. You'd never ___ they were married from the way they act in public, would you? Word: ", ''], answers: [['guess']] }
]
},
{
id: 'M',
unitId: 12,
title: 'Idioms',
instruction: 'Complete each dialogue using the appropriate form of an idiom in the box.',
wordBox: [
'act of God', 'come rain or shine', 'down on your luck', 'draw the short straw', 'have green fingers',
'let nature take its course', 'no rhyme or reason', 'out of the blue', 'the luck of the draw', 'touch wood'
],
questions: [
{ number: 1, parts: ["'I feel sorry for Mrs Shepherd.' 'Yes, she does seem to have been rather ", " lately, doesn't she?'"], answers: [['down on her luck']] },
{ number: 2, parts: ["'I'm sure Carol will get over the divorce eventually.' 'Yes, I think we should just ", " and see what happens.'"], answers: [['let nature take its course']] },
{ number: 3, parts: ["'I couldn't believe it when I saw him.' 'It must have been a real shock when he turned up ", " after all these years.'"], answers: [['out of the blue']] },
{ number: 4, parts: ["'Does Dave still go to the football every week?' 'Oh, yes. You know him. He's there ", ".'"], answers: [['come rain or shine']] },
{ number: 5, parts: ["'How come the company chose you to go to New York?' 'I don't know. It was just ", ", I guess.'"], answers: [['the luck of the draw']] },
{ number: 6, parts: ["'Why wasn't there any warning before the floods?' 'Well, it's not easy to predict that kind of ", ", is it?'"], answers: [['act of God']] },
{ number: 7, parts: ["'I don't understand Harry's decision.' 'Me neither. There seems to be ", " to it.'"], answers: [['no rhyme or reason']] },
{ number: 8, parts: ["'Who's babysitting tomorrow night?' 'Well, I ", ", so I'm staying in while the others go out.'"], answers: [['drew the short straw']] },
{ number: 9, parts: ["'I'm so looking forward to the wedding this weekend.' 'The weather should be good, ", ".'"], answers: [['touch wood']] },
{ number: 10, parts: ["'I love your garden!' 'Thanks. Yes, I suppose I've always ", ".'"], answers: [['had green fingers']] }
]
},
{
id: 'N',
unitId: 12,
title: 'Word formation: WWF',
instruction: 'Use the word given in capitals to form a word that fits each gap.',
questions: [
{
number: 1,
parts: [
'The World Wide Fund for Nature (WWF) has been involved in (CONSERVE) ',
' since its foundation in 1961. Its (INTEND) ',
' has always been to protect (WILD) ',
' against the effects of human activity. Working very closely with both expert (ECOLOGY) ',
' and ordinary local people, the organisation aims to help those animals (THREAT) ',
' by the destruction of habitats. Economic growth and tourism force some species to the brink of (EXTINCT) ',
'. (FORTUNE) ',
', the WWF work hard to ensure that animals such as the giant panda will (PROBABLE) ',
' survive for a few more years yet. Refusing to accept that the problems are (MOUNT) ',
', the WWF works tirelessly on a (SEEM) ',
' never-ending list of projects, all of which help to protect the diversity of life on Earth.'
],
answers: [
['conservation'], ['intention'], ['wildlife'], ['ecologists'], ['threatened'],
['extinction'], ['Fortunately'], ['probably'], ['insurmountable'], ['seemingly']
]
}
]
},
{
id: 'O',
unitId: 12,
title: 'Word formation',
instruction: 'Complete the sentences by changing the form of the word in capitals.',
questions: [
{ number: 1, parts: ['The chances against this kind of unusual ', ' are very high. (OCCUR)'], answers: [['occurrence']] },
{ number: 2, parts: ["I'm not convinced that there's a ", ' link between pollution and global warming. (CAUSE)'], answers: [['causal']] },
{ number: 3, parts: ['The ', ' of the cliffs by the sea has completely changed the landscape. (ERODE)'], answers: [['erosion']] },
{ number: 4, parts: ['Female animals have an ', ' need to protect their young. (INSTINCT)'], answers: [['instinctive']] },
{ number: 5, parts: ['The police are investigating the ', ' disappearance from the zoo of a number of animals. (MYSTERY)'], answers: [['mysterious']] },
{ number: 6, parts: ['We knew that getting between the whale and the ship was ', ', but it was the only way to stop them hunting. (RISK)'], answers: [['risky']] },
{ number: 7, parts: ["What's your ", ' of the situation? (ASSESS)'], answers: [['assessment']] },
{ number: 8, parts: ['We have to wait for ', ' conditions to launch the boat. (FAVOUR)'], answers: [['favourable']] },
{ number: 9, parts: ['The expedition travelled miles in search of the ', ' mountain gorilla. (ELUDE)'], answers: [['elusive']] },
{ number: 10, parts: ['Following the ', ' of the volcano, hundreds of villages were destroyed. (ERUPT)'], answers: [['eruption']] }
]
},
{
id: 'P',
unitId: 12,
title: 'Word formation: suffix -y',
instruction: 'Choose Yes if -y can be added to the word to make an adjective; otherwise choose No.',
questions: [
{ number: 1, parts: ['brain ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 2, parts: ['bump ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 3, parts: ['curl ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 4, parts: ['flavour ', ''], answers: [['No']], options: [yesNo] },
{ number: 5, parts: ['guilt ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 6, parts: ['hair ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 7, parts: ['haste ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 8, parts: ['juice ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 9, parts: ['luck ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 10, parts: ['lump ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 11, parts: ['meat ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 12, parts: ['milk ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 13, parts: ['scare ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 14, parts: ['shine ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 15, parts: ['sport ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 16, parts: ['spot ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 17, parts: ['taste ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 18, parts: ['waste ', ''], answers: [['No']], options: [yesNo] },
{ number: 19, parts: ['water ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 20, parts: ['wealth ', ''], answers: [['Yes']], options: [yesNo] }
]
}
];

