import type { ExerciseSection } from './exercises';

const yesNo = ['Yes', 'No'];

export const unitSevenExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    unitId: 7,
    title: 'The passive',
    instruction: 'If the bold verb is correct, write OK. If it is incorrect, rewrite it correctly.',
    questions: [
      { number: 1, parts: ['Could you tell me where your passport (was been issued) ', '?'], answers: [['was issued']] },
      { number: 2, parts: ['When the winning actor (was) finally (announced) ', ', a big cheer went up.'], answers: [['OK']] },
      { number: 3, parts: ['(Has) your business trip to Calcutta next week (confirmed) ', ' by the Indian office?'], answers: [['Has', 'Will'], ['been confirmed', 'be confirmed']] },
      { number: 4, parts: ['Everyone who (was been invited) ', ' to the wedding came.'], answers: [['had been invited', 'was invited']] },
      { number: 5, parts: ['The wire coat hanger (invented) ', ' in 1903 by a Mr Parkhouse.'], answers: [['was invented']] },
      { number: 6, parts: ['The issue (has discussed) ', ' in Parliament yesterday, but no decisions were taken.'], answers: [['was discussed']] },
      { number: 7, parts: ['By the time we get there, the problem (should have been sorted out) ', '.'], answers: [['OK']] },
      { number: 8, parts: ['Britain (was be invaded) ', ' by the Romans under Emperor Claudius in 43 AD.'], answers: [['was invaded']] },
      { number: 9, parts: ['The party (had been planned) ', ' months in advance, but we still had problems.'], answers: [['OK']] },
      { number: 10, parts: ['After (be treated) ', ', I was allowed to leave the hospital.'], answers: [['being treated', 'having been treated']] },
      { number: 11, parts: ['We boarded the ship and (were showing) ', ' to our cabin by a steward.'], answers: [['were shown']] },
      { number: 12, parts: ['The new supermarket (is to be opened) ', ' by an actor from a soap opera.'], answers: [['OK']] }
    ]
  },
  {
    id: 'B',
    unitId: 7,
    title: 'The passive',
    instruction: 'Write a verb from the box in the correct passive form in each gap.',
    wordBox: ['allow', 'ask', 'find', 'give', 'know', 'light', 'make', 'meet', 'show', 'write'],
    questions: [
      { number: 1, parts: ['The stolen items ', ' in the attic of an empty house last week.'], answers: [['were found']] },
      { number: 2, parts: ['When the open-air cinema opens, the first film ', ' will be Vertigo.'], answers: [['to be shown', 'shown']] },
      { number: 3, parts: ['Questions ', " in Parliament about the Minister's business interests."], answers: [['were asked', 'are being asked', 'have been asked', 'will be asked']] },
      { number: 4, parts: ["We're looking forward to ", ' a guided tour of the whole factory.'], answers: [['being given']] },
      { number: 5, parts: ['Just imagine that when these words ', ', Europeans had not yet discovered America.'], answers: [['were written', 'were being written']] },
      { number: 6, parts: ['Once the barbecue ', ", we'll be able to start cooking."], answers: [['has been lit', 'is lit']] },
      { number: 7, parts: ['Before ', ' to see the invention, I had to agree not to tell anyone.'], answers: [['being allowed']] },
      { number: 8, parts: ['I would really like ', " at the airport, if that's possible."], answers: [['to be met']] },
      { number: 9, parts: ['It ', " very clear to us that we weren't welcome."], answers: [['was made', 'had been made']] },
      { number: 10, parts: ["Gareth says he's always wanted ", ' as someone with a good sense of humour.'], answers: [['to be known']] }
    ]
  },
  {
    id: 'C',
    unitId: 7,
    title: 'Impersonal passive',
    instruction: 'Choose the correct word or phrase.',
    questions: [
      { number: 1, parts: ['Global warming ', ' by pollution.'], answers: [['is thought to be caused']], options: [['is thought to be caused', 'is caused']] },
      { number: 2, parts: ['There ', ' about 5,400 different species of mammals.'], answers: [['are estimated to be']], options: [['are to be estimated', 'are estimated to be']] },
      { number: 3, parts: ['It ', ' that gunshots have been heard in the city centre.'], answers: [['has been reported']], options: [['is to be reported', 'has been reported']] },
      { number: 4, parts: ['The escaped prisoner is believed ', ' a rope to climb the wall.'], answers: [['to have used']], options: [['to use', 'to have used']] },
      { number: 5, parts: ['It ', " that about 60% of a man's body mass is water."], answers: [['is calculated']], options: [['is to be calculated', 'is calculated']] },
      { number: 6, parts: ['Over 200 people ', ' to have been injured in the explosion.'], answers: [['are understood']], options: [['are being understood', 'are understood']] },
      { number: 7, parts: ['It is considered impolite in some cultures ', ' with your left hand.'], answers: [['to eat']], options: [['to be eaten', 'to eat']] },
      { number: 8, parts: ['There ', ' to have been 60 crates of olives in the order, not 600!'], answers: [['were meant']], options: [['mean', 'were meant']] },
      { number: 9, parts: ['', ' has been suggested that people who don\'t recycle should pay more tax.'], answers: [['It']], options: [['It', 'There']] },
      { number: 10, parts: ['Your order is guaranteed ', ' within three working days.'], answers: [['to be delivered']], options: [['will be delivered', 'to be delivered']] }
    ]
  },
  {
    id: 'D',
    unitId: 7,
    title: 'The passive: Heathrow',
    instruction: 'Each sentence contains one verb in the wrong form. Write the correct form in each gap.',
    questions: [
      { number: 1, parts: ["Heathrow Airport, near London, (has called) ", " the world's busiest international airport and the 68 million passengers who are processed each year would probably agree."], answers: [['is called', 'has been called']] },
      { number: 2, parts: ['The land on which the airport stands (sold) ', ' to Fairey Aviation by the local vicar and was used for test flights during the 1930s, under the name Great Western Aerodrome.'], answers: [['was sold']] },
      { number: 3, parts: ['In 1944, the airport was handed over to the government and was developed for civilian use, (was named) ', ' after a small village that was removed to create space, Heath Row.'], answers: [['named', 'being named', 'and was named']] },
      { number: 4, parts: ['The first concrete slab of the modern runways was laid by Queen Elizabeth II in 1953, and the first terminal building, which (has) ', ' later renamed Terminal 2, was opened two years later.'], answers: [['was']] },
      { number: 5, parts: ['The London Underground was extended to reach Heathrow in 1977, meaning that passengers could be (transport) ', ' from central London via the Piccadilly Line in just under an hour.'], answers: [['transported']] },
      { number: 6, parts: ['Four passenger terminals and a cargo terminal have been constructed and permission (was been granted) ', ' for a fifth passenger terminal in 2001.'], answers: [['was granted']] },
      { number: 7, parts: ['It has been suggested that a new airport, which would lead to Heathrow being retired over a period of 20 years, (has been built) ', ' on a floating island in the Thames, although no firm plans have been drawn up.'], answers: [['should be built', 'be built', 'could be built', 'might be built', 'will be built']] }
    ]
  },
  {
    id: 'E',
    unitId: 7,
    title: 'Avoiding the passive',
    instruction: 'Complete the sentences describing each situation using the phrase given.',
    questions: [
      { number: 1, parts: ['By the time I take my exams, (in training) ', '.'], answers: [['I will have been in training as an accountant for a year', "I'll have been in training as an accountant for a year", 'I will have been in training for a year', "I'll have been in training for a year", 'I will have been in training for twelve months', "I'll have been in training for twelve months"]] },
      { number: 2, parts: ['The redevelopment of the city centre (under consideration) ', '.'], answers: [['has been under consideration by the council for some time', 'has been under consideration for some time']] },
      { number: 3, parts: ['Discussions on the issue (in progress) ', '.'], answers: [['have been in progress for over two weeks']] },
      { number: 4, parts: ["The local Art Society's latest works (on display) ", '.'], answers: [['will be on display at the library this weekend', 'are going to be on display at the library this weekend']] },
      { number: 5, parts: ["George's website (under construction) ", '.'], answers: [['seems to have been under construction for a long time']] }
    ]
  },
  {
    id: 'F',
    unitId: 7,
    title: 'Causatives',
    instruction: 'If the bold word or phrase is correct, write OK. If it is incorrect, rewrite it correctly.',
    questions: [
      { number: 1, parts: ['We had to (have it repaired) ', ' twice!'], answers: [['OK']] },
      { number: 2, parts: ['Well, we got (delivered it) ', ' to our house on Monday morning.'], answers: [['it delivered']] },
      { number: 3, parts: ['We decided to have it (check) ', ' straight away, because it had come all the way from America.'], answers: [['checked']] },
      { number: 4, parts: ["Oh, I didn't know you'd had them (do) ", ' that.'], answers: [['OK']] },
      { number: 5, parts: ['Anyway, we had my dad (to have) ', " a look at it. And he found that the engine wasn't running properly."], answers: [['have']] },
      { number: 6, parts: ['Did you have the company (to come) ', ' to fix it?'], answers: [['come']] },
      { number: 7, parts: ['We got my brother (to working) ', ' on it.'], answers: [['working', 'to work']] },
      { number: 8, parts: ['I bet he soon had (running it) ', ' smoothly.'], answers: [['it running']] },
{ number: 9, parts: ['Yes, but we still had to get the company (come) ', ' out in the end, because the fuel pump stopped working.'], answers: [['to come']] },
{ number: 10, parts: ['You should (get them to give) ', ' you some compensation.'], answers: [['OK']] }
]
},
{
id: 'G',
unitId: 7,
title: 'Causatives',
instruction: 'Complete each sentence using the noun and an appropriate causative form of the verb in brackets.',
questions: [
{ number: 1, parts: ["If you don't understand, ", ' it to you again after the lesson. (your teacher / explain)'], answers: [['get your teacher to explain', 'have your teacher explain']] },
{ number: 2, parts: ['I was a bit depressed, but watching my kitten play with a ball of wool soon ', ' much better. (me / feel)'], answers: [['had me feeling', 'got me feeling']] },
{ number: 3, parts: ["Don't bother redecorating yourself - ", ' it. (a professional / do)'], answers: [['get a professional to do', 'have a professional do']] },
{ number: 4, parts: ['', ' was so annoying because it meant I had to take the tube to work. (our car / steal)'], answers: [['Having our car stolen', 'Getting our car stolen']] },
{ number: 5, parts: ["You won't learn as much if you ", ' you with your homework all the time. (your parents / help)'], answers: [['have your parents help', 'get your parents to help', 'have your parents helping', 'get your parents helping']] },
{ number: 6, parts: ['The concert started quietly, but the band soon ', ' to their hit songs. (us all / dance)'], answers: [['had us all dancing', 'got us all dancing']] },
{ number: 7, parts: ["Tell Gordon yourself! Don't try ", ' your dirty work for you! (me / do)'], answers: [['to get me to do', 'getting me to do']] },
{ number: 8, parts: ['Have you thought about ', ' as short as mine? (your hair / cut)'], answers: [['having your hair cut', 'getting your hair cut']] },
{ number: 9, parts: ['I ', " me how to juggle with five balls, but I still couldn't do it. (Karen / show)"], answers: [['got Karen to show', 'had Karen show']] },
{ number: 10, parts: ['Have you heard about the problems caused by students ', ' by companies on the Internet? (their essays / write)'], answers: [['having their essays written', 'getting their essays written']] }
]
},
{
id: 'H',
unitId: 7,
title: 'Passives and causatives',
instruction: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words.',
questions: [
{ number: 1, parts: ['I (kept) ', ' for over 20 minutes on the phone!'], answers: [['was kept waiting']] },
{ number: 2, parts: ['Despite (considered) ', ", Ashley's always friendly towards everyone."], answers: [['being considered a star', 'being considered to be a star']] },
{ number: 3, parts: ['The Prime Minister (be) ', ' a surprise visit to Syria.'], answers: [['is reported to be making']] },
{ number: 4, parts: ['The (by) ', ' the manager.'], answers: [['staff were provided with extra training by', 'extra training was provided for the staff by', 'extra training was provided to the staff by']] },
{ number: 5, parts: ['I think I need (explaining) ', ' me.'], answers: [['this computer program explaining to']] },
{ number: 6, parts: ['The new stadium (under) ', ' for much longer than they originally estimated.'], answers: [['has been under construction']] },
{ number: 7, parts: ['Do you know why (to) ', ' behind after the lesson?'], answers: [['Craig was made to stay']] },
{ number: 8, parts: ['Call Lionel and (have) ', ' the reports up to my office.'], answers: [['have him send']] }
]
},
{
id: 'I',
unitId: 7,
title: 'Passives and causatives review',
instruction: 'Choose the correct answer.',
questions: [
{ number: 1, parts: ['When Nadine arrived, she soon ', ' at all her jokes.'], answers: [['had everyone laughing']], options: [['had everyone laughed', 'had laughing everyone', 'had everyone laughing', 'had laughed everyone']] },
{ number: 2, parts: ['The government must ', ' strong measures against crime.'], answers: [['be seen to be taking']], options: [['be seen be taking', 'see to be taking', 'seen to take', 'be seen to be taking']] },
{ number: 3, parts: ['Mrs Davies asked me to tell you that she would like ', ' by Friday at the latest.'], answers: [['the orders sent']], options: [['the orders sent', 'sending the orders', 'that you sent', 'sent the orders']] },
{ number: 4, parts: ['Joining a gym ', ", but I didn't really fancy the idea."], answers: [['was suggested to me']], options: [['was suggested me', 'to me was suggested', 'was suggested to me', 'was suggesting me']] },
{ number: 5, parts: ['There ', ' between 4,000 and 6,000 languages in the world, depending on how you count them.'], answers: [['are said to be']], options: [['say to be', 'are said that', 'are said to be', 'said being']] },
{ number: 6, parts: ['I spoke to Victor last night and he says he ', ' while he was on holiday.'], answers: [['had his phone stolen']], options: [['had stolen his phone', 'got stolen his phone', 'was got his phone stolen', 'had his phone stolen']] },
{ number: 7, parts: ["Why didn't you ", ' you when you moved house?'], answers: [['have Aaron help']], options: [['have Aaron help', 'have got Aaron help', 'have Aaron helped', 'get Aaron help']] },
{ number: 8, parts: ['Profits ', " slightly next year, although we don't predict any job losses."], answers: [['are expected to fall']], options: [['expect to fall', 'are expecting to fall', 'are expected falling', 'are expected to fall']] },
{ number: 9, parts: ["It's hard to believe that this film ", ' completely by computer.'], answers: [['has been generated']], options: [['was been generating', 'has generated', 'has been generated', 'was to generate']] },
{ number: 10, parts: ['As soon as Dad ', ', we can leave.'], answers: [['has got the car started']], options: [['has the car starting', 'has got the car started', 'got started the car', 'was got starting the car']] }
]
},
{
id: 'J',
unitId: 7,
title: 'The scramjet',
instruction: 'Write one word in each gap.',
questions: [
{
number: 1,
parts: [
'Imagine ',
' transported around the globe in a matter of hours, rather than the 24 hours which ',
' currently required to get from London to Sydney. Such is the promise of the scramjet, a highly experimental type of engine which has been ',
' development over the past couple of decades. In a conventional jet engine, air ',
' sucked into the engine at speeds below the speed of sound, where it is mixed ',
' fuel, ignited, and the exhaust gases provide thrust. In a scramjet, which has to ',
' taken to supersonic speeds by conventional means before it will operate, the air enters at supersonic speeds.\nIt has ',
' estimated that a scramjet might be capable of travelling at 12-24 times the speed of sound. However, the technology ',
' been found to be extremely difficult to control. Although scientists ',
' had scramjets perform short flights, commercial aircraft are still a long way in the future, and indeed may never ',
' successfully developed.'
],
answers: [
['being'], ['are'], ['under'], ['is'], ['with'],
['be'], ['been'], ['has'], ['have'], ['be']
]
}
]
}
];

export const unitEightExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    unitId: 8,
    title: 'Topic vocabulary: Movement',
    instruction: 'Complete using the correct form of the words in the boxes.',
    wordBox: [
      'clench', 'clutch', 'fumble', 'gesture', 'grab', 'grasp', 'point', 'punch', 'wave',
      'crawl', 'creep', 'dash', 'hop', 'jog', 'leap', 'march', 'skip', 'step', 'stride',
      'drift', 'roam', 'wander',
      'skid', 'slide', 'slip', 'trip'
    ],
    questions: [
      { number: 1, parts: ['I ', ' my school bag from the table and rushed out of the house.'], answers: [['grabbed']] },
      { number: 2, parts: ['Grace ', ' in her bag for her car keys and finally found them.'], answers: [['fumbled']] },
      { number: 3, parts: ['A man ran from the burning house, ', ' a baby in his arms.'], answers: [['clutching']] },
      { number: 4, parts: ['The old man ', ' his finger straight at me and I felt a chill go down my spine.'], answers: [['pointed']] },
      { number: 5, parts: ['As the train left the station, Charlie ', ' goodbye.'], answers: [['waved']] },
      { number: 6, parts: ['Jamie came home from school with a black eye because someone had ', ' him.'], answers: [['punched']] },
      { number: 7, parts: ['I asked Karen where the phone was and without taking her eyes off the TV she ', ' lazily in the direction of the kitchen.'], answers: [['gestured']] },
      { number: 8, parts: ['Lina ', ' her fists tightly in anger but managed to control herself.'], answers: [['clenched']] },
      { number: 9, parts: ['He ', ' my hand firmly and I could see that he was trying to thank me.'], answers: [['grasped']] },
      { number: 10, parts: ['The burglar ', ' very quietly along the corridor, trying not to wake anybody.'], answers: [['crept']] },
      { number: 11, parts: ['How long do you think you could ', ' on one leg?'], answers: [['hop']] },
      { number: 12, parts: ['I ', ' in the park most mornings because I like to keep myself in shape.'], answers: [['jog']] },
      { number: 13, parts: ['Just ', ' this way, sir, and the customer services manager will be with you in a moment.'], answers: [['step']] },
      { number: 14, parts: ['When we heard the noise, we quickly ', ' round the corner to see what had happened.'], answers: [['dashed']] },
      { number: 15, parts: ['Before he learnt to walk, my younger brother used to ', ' everywhere on all fours.'], answers: [['crawl']] },
      { number: 16, parts: ['The army ', ' for two days before they came to the outskirts of the city.'], answers: [['marched']] },
      { number: 17, parts: ['The speaker ', ' onto the stage and smiled confidently at the audience.'], answers: [['strode']] },
      { number: 18, parts: ['When he saw me coming, our dog ', ' over the gate and came to greet me.'], answers: [['leapt', 'leaped']] },
      { number: 19, parts: ['Polly was so happy she ', ' along the pavement to school, jumping from one foot to the other.'], answers: [['skipped']] },
      { number: 20, parts: ['When the men were finally found, they had been ', ' at sea in a tiny boat for days.'], answers: [['drifting']] },
      { number: 21, parts: ['Wolves used to ', ' this whole area, looking for food.'], answers: [['roam']] },
      { number: 22, parts: ['I was bored so I ', ' into the centre of town and did a bit of window shopping.'], answers: [['wandered']] },
      { number: 23, parts: ["I didn't see the oil on the floor and I ", ' on it.'], answers: [['slipped']] },
      { number: 24, parts: ['This wardrobe is really heavy, but maybe we can ', ' it along the ground.'], answers: [['slide']] },
      { number: 25, parts: ["I didn't see the step and I ", ' over it.'], answers: [['tripped']] },
      { number: 26, parts: ['The road was wet, so when I pressed the brakes the car ', '.'], answers: [['skidded']] }
    ]
  },
  {
    id: 'B',
    unitId: 8,
    title: 'Topic vocabulary: Movement',
    instruction: 'Complete using the words in brackets in the correct form.',
    questions: [
      { number: 1, parts: ['I ', ' over a rock and looked down into the valley below us. We had ', ' to 6,000 metres above sea level and the air was getting thin. Nick was injured, and I knew we would have to ', ' soon to get medical treatment. (ascend, clamber, descend)'], answers: [['clambered'], ['ascended'], ['descend']] },
      { number: 2, parts: ['The pilot held the controls. The engines were dead and the plane was ', ' towards the airfield. She knew that if she didn\'t have the ', ' to reach the runway, there was no way she could ', '. She just hoped that the air would continue to ', ' over the wings and stop her from ', ' too low. She ', ' the runway with her heart in her throat. (accelerate, approach, flow, glide, sink, velocity)'], answers: [['gliding'], ['velocity'], ['accelerate'], ['flow'], ['sinking'], ['approached']] },
      { number: 3, parts: ['The arctic tern is an incredible bird. It ', ' thousands of miles each year, stopping occasionally to ', ' on the ocean to rest. How it remembers the ', ' is still not fully understood. (float, migrate, route)'], answers: [['migrates'], ['float'], ['route']] },
      { number: 4, parts: ['In basketball, you must ', ' the ball when you are moving with it. When you take a shot, you should let the ball ', ' off your fingers so that it ', ' in the air. That makes it more accurate. (bounce, roll, rotate)'], answers: [['bounce'], ['roll'], ['rotates']] },
      { number: 5, parts: ['In the 1950s, many people ', ' from the West Indies to England. Life was often hard for these ', ', but they eventually became part of British life. Today, Britain also welcomes ', ' from parts of the world that are affected by war. (emigrate, immigrant, refugee)'], answers: [['emigrated'], ['immigrants'], ['refugees']] }
    ]
  },
  {
    id: 'C',
    unitId: 8,
    title: 'Topic vocabulary: Transport',
    instruction: 'Complete using the correct form of the words in the box.',
    wordBox: ['airline', 'carriage', 'charter', 'commute', 'destination', 'jet lag', 'legroom', 'steward'],
    questions: [
      {
        number: 1,
        parts: [
          'The railways changed the way we live and work. People started to ',
          ' to work, travelling home in a crowded train ',
          ' each day. Now a new ',
          ', Officeways, plans to extend the idea and hopes to get more of us taking the plane to work!\nIn the past, getting to work by air was only for the very wealthy, who could afford to ',
          " a plane or helicopter even if they didn't have their own private jet. Now, Officeways, which travels to ",
          ' throughout Europe, is offering special deals on short trips to business travellers. You might have less ',
          ' than on the train, but Officeways claims their ',
          " are specially trained to help you relax on the way to work. And with such short journey times, there's no risk of ",
          '! So what are you waiting for? Turn to page 37 for our Officeways competition!'
        ],
        answers: [['commute'], ['carriage'], ['airline'], ['charter'], ['destinations'], ['legroom'], ['stewards'], ['jet lag']]
      }
    ]
  },
  {
    id: 'D',
    unitId: 8,
    title: 'Topic vocabulary: Transport',
    instruction: 'Choose the correct word or phrase.',
    questions: [
      { number: 1, parts: ['Running along the seafront, there was a short concrete ', ', where a dozen fishing boats bobbed in the afternoon sun.'], answers: [['quay']], options: [['pier', 'quay']] },
      { number: 2, parts: ['Quite a few resorts in Britain have long ', ', which stick out into the sea, and which often have shows or other forms of entertainment on them.'], answers: [['piers']], options: [['piers', 'quays']] },
      { number: 3, parts: ['This area is for ', ' only and is closed to all traffic.'], answers: [['pedestrians']], options: [['passersby', 'pedestrians']] },
      { number: 4, parts: ['After the accident, ', ' described the driver as a middle-aged man with a beard.'], answers: [['passersby']], options: [['passersby', 'pedestrians']] },
      { number: 5, parts: ["Keep both hands on the wheel and you'll find it easier to ", ' the car.'], answers: [['steer']], options: [['pilot', 'steer']] },
      { number: 6, parts: ["I'm hoping to train so that I can ", ' commercial aircraft.'], answers: [['pilot']], options: [['pilot', 'steer']] },
      { number: 7, parts: ['As I came out of the petrol station, I saw a ', ' with his thumb out, trying to get a lift.'], answers: [['hitchhiker']], options: [['hiker', 'hitchhiker']] },
      { number: 8, parts: ['Local ', ' insist that they have the right to walk across the field, although the farmer who owns the land disagrees.'], answers: [['hikers']], options: [['hikers', 'hitchhikers']] },
      { number: 9, parts: ["It's three and a half hours each way, so the ", ' takes seven hours.'], answers: [['round trip']], options: [['return fare', 'round trip']] },
      { number: 10, parts: ['A single is €40, but the ', ' is actually only €55.'], answers: [['return fare']], options: [['return fare', 'round trip']] },
      { number: 11, parts: ['A lorry lost its ', " on the motorway and there's white paint everywhere."], answers: [['load']], options: [['cargo', 'load']] },
      { number: 12, parts: ['The area where the ', ' is stored on a plane can actually get extremely cold during a flight.'], answers: [['cargo']], options: [['cargo', 'load']] }
    ]
  },
  {
    id: 'E',
    unitId: 8,
    title: 'Phrasal verbs',
    instruction: 'Write one word in each gap.',
    questions: [
{ number: 1, parts: ['The police officer told the homeless man to move ', ' and he walked slowly and painfully down the road.'], answers: [['on']] },
{ number: 2, parts: ['Len has already left on foot, but if we take the car then maybe we can still head him ', ' before he gets home.'], answers: [['off']] },
{ number: 3, parts: ['Would you mind moving ', ' so that I can sit here?'], answers: [['over']] },
{ number: 4, parts: ['A young man was riding his motorbike on the pavement and everyone was forced to step ', ' to let him go past.'], answers: [['aside']] },
{ number: 5, parts: ['The area has been cordoned ', ' following a bomb threat.'], answers: [['off']] },
{ number: 6, parts: ['As I leant on the table, it tipped ', ' and I fell over.'], answers: [['up']] },
{ number: 7, parts: ["My mum's a bit upset because my sister's moving ", ' to go to university next week.'], answers: [['out']] },
{ number: 8, parts: ['Daryl managed to keep up with the leader for most of the race, but eventually he started to fall ', '.'], answers: [['behind']] }
]
},
{
id: 'F',
unitId: 8,
title: 'Phrasal verbs',
instruction: 'Complete using a phrasal verb with a word from box A in the right form and a word from box B.',
wordBox: ['A: creep, go, hold, move, pull, slip, stop, walk', 'B: astray, away, back, in, off, out, over, up'],
questions: [
{ number: 1, parts: ['Dimitri thought he heard a funny noise coming from the car engine, so he ', ' to investigate.'], answers: [['pulled over']] },
{ number: 2, parts: ['The police ', ' the crowd ', ' so that the ambulances could get to the scene more quickly.'], answers: [['held'], ['back']] },
{ number: 3, parts: ['The show was so boring that we ', ' after half an hour.'], answers: [['walked out']] },
{ number: 4, parts: ['Remind me to ', " on the way to your grandma's to get her a birthday card."], answers: [['stop off']] },
{ number: 5, parts: ["I wish you wouldn't ", ' on me like that! You frightened me to death!'], answers: [['creep up']] },
{ number: 6, parts: ["Martha didn't want to interrupt the party, so she just ", ' quietly without anyone noticing.'], answers: [['slipped away']] },
{ number: 7, parts: ['Are you really thinking of ', ' with Josie? What about your own flat?'], answers: [['moving in']] },
{ number: 8, parts: ['It seems that the explorers ', ' after losing their map and wandered in the jungle for days.'], answers: [['went astray']] }
]
},
{
id: 'G',
unitId: 8,
title: 'Phrasal verbs with off',
instruction: "Choose Yes if the word can complete 'The area has been _____ off by police' to mean 'prevent people entering'; otherwise choose No.",
questions: [
{ number: 1, parts: ['block ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 2, parts: ['close ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 3, parts: ['line ', ''], answers: [['No']], options: [yesNo] },
{ number: 4, parts: ['fence ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 5, parts: ['put ', ''], answers: [['No']], options: [yesNo] },
{ number: 6, parts: ['rope ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 7, parts: ['seal ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 8, parts: ['take ', ''], answers: [['No']], options: [yesNo] }
]
},
{
id: 'H',
unitId: 8,
title: 'Phrases, patterns and collocations',
instruction: 'Complete using the phrases in the box in the correct form. Change sb, sth or do into something appropriate.',
wordBox: [
'back onto', 'do sth in a rush', 'drop sb at', 'fall in love', 'fly at', 'get a move on',
'get sth out of the way', 'get sth wet', 'go and do', 'jump at the chance',
'keep track of', "raise sb's hopes"
],
questions: [
{ number: 1, parts: ["Look at the time! We'd better ", " or we're going to be late."], answers: [['get a move on']] },
{ number: 2, parts: ['My parents say they ', ' when they met on holiday in Turkey.'], answers: [['fell in love']] },
{ number: 3, parts: ["Your essay isn't good enough. It's obvious to me that you ", ', rather than taking your time.'], answers: [['did it in a rush']] },
{ number: 4, parts: ["I've always wanted to fly and I would ", ' to visit the pilot in the cockpit.'], answers: [['jump at the chance']] },
{ number: 5, parts: ['One of the things I love about this house is that it ', ' the river.'], answers: [['backs onto']] },
{ number: 6, parts: ["I don't want to ", ", but there's a chance we might be flying to America!"], answers: [['raise your hopes']] },
{ number: 7, parts: ["I can't believe you ", ' Ben what I said about him.'], answers: [['went and told']] },
{ number: 8, parts: ["There's no need to ", " me - I wasn't the one who crashed the car!"], answers: [['fly at']] },
{ number: 9, parts: ["I've got a lot of homework, so let me ", " first and then I'll call you."], answers: [['get it out of the way', 'get that out of the way']] },
{ number: 10, parts: ["You travel so much! I can't ", " all the countries you've been to."], answers: [['keep track of']] },
{ number: 11, parts: ["Since you're going that way, do you think you could ", ' my house?'], answers: [['drop me at']] },
{ number: 12, parts: ["Those sunglasses were expensive - take them off in the pool or you'll ", '.'], answers: [['get them wet']] }
]
},
{
id: 'I',
unitId: 8,
title: 'Phrases, patterns and collocations',
instruction: 'Write one word in each gap.',
questions: [
{ number: 1, parts: ['In the distance, a steam train ', ' slowly into view.'], answers: [['came']] },
{ number: 2, parts: ["Don't ", " your voice at me! I haven't done anything wrong!"], answers: [['raise']] },
{ number: 3, parts: ['We need to book our ferry tickets ', ' some point, so remind me later.'], answers: [['at']] },
{ number: 4, parts: ['Suddenly, the door flew ', ' and there stood Mrs Singh.'], answers: [['open']] },
{ number: 5, parts: ["It's the ", " hour, so there 'll be a lot of traffic on the roads."], answers: [['rush']] },
{ number: 6, parts: ["My dad's beginning to ", " grey, and he's only 35."], answers: [['go']] },
{ number: 7, parts: ['Even when his flight was cancelled, Jake still managed to ', ' a smile.'], answers: [['raise']] },
{ number: 8, parts: ['Do you know the ', " to Ed's house from here?"], answers: [['way']] },
{ number: 9, parts: ["Sam's not coming, but Isabelle's ", ' the way, so she should be here soon.'], answers: [['on']] },
{ number: 10, parts: ["I can't believe that woman just tried to ", ' the queue and get to the front first.'], answers: [['jump']] }
]
},
{
id: 'J',
unitId: 8,
title: 'Phrases, patterns and collocations',
instruction: 'For each question, write one word which can be used in all three sentences.',
questions: [
{ number: 1, parts: ["I don't understand what ___ Michael to leave his family like that. The kids almost ___ me crazy when we were on holiday. I thought the journalist ___ his point home well, and the politician didn't know what to say. Word: ", ''], answers: [['drove']] },
{ number: 2, parts: ['We decided to ___ towards the small town we could see in the distance. Joshua Reed has been appointed to ___ the committee responsible for promoting local tourism. Which places would you say ___ the list of most popular tourist destinations in Britain? Word: ', ''], answers: [['head']] },
{ number: 3, parts: ["I'm starting to ___ to the conclusion that you don't want to go on holiday with me. How did you ___ to lose your passport? I know it's going to ___ as a bit of a shock to you, but I've decided to walk round the world. Word: ", ''], answers: [['come']] },
{ number: 4, parts: ["We need to keep up a ___ pace if we're going to get there before it gets dark. Corey and Angela seem to have a very ___ relationship, and I can't imagine them splitting up, can you? Kelly gave me a ___ look as if to say, 'I know where you've been.' Word: ", ''], answers: [['steady']] },
{ number: 5, parts: ["We always make a ___ of inviting the old woman next door to join us for Christmas dinner. Don't mention the fact that Chris failed his driving test - it's a bit of a sore ___ with him. I know she's your best friend, but that's beside the ___ - you had no right to invite her on the trip without asking me. Word: ", ''], answers: [['point']] },
{ number: 6, parts: ["It's hard to believe that Sandra ___ 50 this year, isn't it? The police officer ___ her gun on the man and told him to lie down on the floor. I ___ to say something to Connor, but he had already left. Word: ", ''], answers: [['turned']] },
{ number: 7, parts: ["Jacob ___ his doctor's advice and went away for a few days. Hannah decided to start wearing earrings and her friends soon ___ suit. I ___ the speaker's argument up to the final point, but I don't understand where his conclusions came from. Word: ", ''], answers: [['followed']] },
{ number: 8, parts: ["My dad's involved in ___ a campaign to stop them building the new motorway near here. These vehicles have the advantage of ___ on electricity, rather than petrol. You won't be able to avoid ___ into problems, so just deal with them when they arise. Word: ", ''], answers: [['running']] }
]
},
{
id: 'K',
unitId: 8,
title: 'Idioms',
instruction: 'Write one word in each gap.',
questions: [
{ number: 1, parts: ['From our house to the centre of town is about four miles as the ', ' flies.'], answers: [['crow']] },
{ number: 2, parts: ["I know the brochure said the villa was 'peaceful', but it was actually in the ", ' of nowhere.'], answers: [['middle']] },
{ number: 3, parts: ['As soon as we got to the pool, the kids made a ', ' for the shop selling ice creams.'], answers: [['beeline']] },
{ number: 4, parts: ["The soldier shouted 'Halt!' and I stopped dead in my ", '.'], answers: [['tracks']] },
{ number: 5, parts: ["Cambodia? That's a bit off the beaten ", ", isn't it?"], answers: [['track']] },
{ number: 6, parts: ['Take the next left, then first right, and just follow your ', ' until you see the stadium on your left.'], answers: [['nose']] },
{ number: 7, parts: ['Wandering the streets of Prague, I lost my ', ', so I had to ask the way to the castle.'], answers: [['bearings']] },
{ number: 8, parts: ['We were quite lucky because our hotel was only a ', ' throw away from the beach.'], answers: [["stone's"]] },
{ number: 9, parts: ["It's about 20 minutes longer, but if we take the scenic ", " you'll be able to take some photos."], answers: [['route']] },
{ number: 10, parts: ["Turn right here and we'll ", ' a short cut through the side roads.'], answers: [['take']] }
]
},
{
id: 'L',
unitId: 8,
title: 'Word formation: The stairlift',
instruction: 'Use the word given in capitals to form a word that fits each gap.',
questions: [
{
number: 1,
parts: [
"It's ironic that the very things that are supposed to provide access to the (UP) ",
' floors of buildings - stairs - often, in fact, make them (ACCESS) ',
'. For many elderly people and others with limited (MOBILE) ',
', getting upstairs can be a daily problem to be (COME) ',
'. However, stairlifts have been helping people solve that problem since they first appeared in the US in the 1930s. Designs have (GO) ',
' many changes over the years and stairlifts have become (PROGRESS) ',
' safer and easier to use. Most consist of a seat which moves along rails that run along the wall.\nThe user controls how (RAPID) ',
' the seat moves along the rails as it travels from the bottom of the stairs to the (LAND) ',
" at the top. In today's models, the (MOVE) ",
' is controlled by computers to give a smooth ride and the components are designed to (STAND) ',
' constant use. Many people have been given a new lease of life by the stairlift.'
],
answers: [
['upper'], ['inaccessible'], ['mobility'], ['overcome'], ['undergone'],
['progressively'], ['rapidly'], ['landing'], ['movement'], ['withstand']
]
}
]
},
{
id: 'M',
unitId: 8,
title: 'Word formation',
instruction: 'Each bold word is in an incorrect form. Rewrite it correctly.',
questions: [
{ number: 1, parts: ['The situation has been getting (unsteady) ', ' worse for many years now.'], answers: [['steadily']] },
{ number: 2, parts: ['The heavy snow meant that the mountain roads were (passage) ', ' for over a week.'], answers: [['impassable']] },
{ number: 3, parts: ['People are being advised not to travel to the area because of the (outgoing) ', ' conflict.'], answers: [['ongoing']] },
{ number: 4, parts: ['Luckily, Tyrone made a very (sped) ', ' recovery after the car accident.'], answers: [['speedy']] },
{ number: 5, parts: ["The service at the hotel was (upstanding) ", ", and I'd definitely recommend it."], answers: [['outstanding']] },
{ number: 6, parts: ['Every child needs security and (unstable) ', ' in their life.'], answers: [['stability']] },
{ number: 7, parts: ["It's not always easy to make the (transitional) ", ' from primary school to secondary school.'], answers: [['transition']] },
{ number: 8, parts: ['I sat completely (motion) ', ' as the spider crawled along my arm.'], answers: [['motionless']] }
]
},
{
id: 'N',
unitId: 8,
title: 'Word formation: prefix de-',
instruction: 'Choose Yes if the word can be made negative by adding de-; otherwise choose No.',
questions: [
{ number: 1, parts: ['caffeinated ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 2, parts: ['direct ', ''], answers: [['No']], options: [yesNo] },
{ number: 3, parts: ['form ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 4, parts: ['hydrate ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 5, parts: ['motivate ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 6, parts: ['regulate ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 7, parts: ['satisfy ', ''], answers: [['No']], options: [yesNo] },
{ number: 8, parts: ['sensitise ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 9, parts: ['understand ', ''], answers: [['No']], options: [yesNo] },
{ number: 10, parts: ['value ', ''], answers: [['Yes']], options: [yesNo] }
]
},
{
id: 'O',
unitId: 8,
title: 'Word formation: prefix de-',
instruction: 'Complete the sentences using words formed in exercise N.',
questions: [
{ number: 1, parts: ["Drinking alcohol when it's very hot can ", ' you.'], answers: [['dehydrate']] },
{ number: 2, parts: ['The government should ', ' this industry.'], answers: [['deregulate']] },
{ number: 3, parts: ["I have to drink ", " coffee or I can't sleep."], answers: [['decaffeinated']] },
{ number: 4, parts: ["If you don't tell staff how well they're doing, it can ", ' them.'], answers: [['demotivate']] },
{ number: 5, parts: ["Don't you think violent films ", ' people to violence in real life?'], answers: [['desensitise']] },
{ number: 6, parts: ["You'll ", " your feet if you don't get shoes that fit you properly."], answers: [['deform']] },
{ number: 7, parts: ["They've decided to ", " the currency, so it'll be worth a lot less."], answers: [['devalue']] }
]
}
];