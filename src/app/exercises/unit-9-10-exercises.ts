import type { ExerciseSection } from './exercises';

const yesNo = ['Yes', 'No'];

export const unitNineExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    unitId: 9,
    title: 'Ability and permission',
    instruction: 'Choose the correct word or phrase. If both are correct, choose both.',
    questions: [
      { number: 1, parts: ['You ', " really talk when you were one year old, ", ' you?'], answers: [["couldn't"], ['could']], options: [["can't", "couldn't"], ['can', 'could']] },
      { number: 2, parts: ['We ', ' give you a lift home tonight, if you want.'], answers: [['can', 'could']], options: [['can', 'could']] },
      { number: 3, parts: ['I wish I ', ' speak Russian, then ', ' read Tolstoy in the original.'], answers: [['could'], ["I'd be able to", 'I could']], options: [['can', 'could'], ["I'd be able to", 'I could']] },
      { number: 4, parts: ['Excuse me, ', ' you tell me how to get to the leisure centre from here?'], answers: [['could']], options: [['could', 'may']] },
      { number: 5, parts: ["I'm afraid we ", ' come to the wedding after all.'], answers: [["can't", "won't be able to"]], options: [["can't", "won't be able to"]] },
      { number: 6, parts: ['Thankfully, we ', " to get to the airport just in time so we didn't miss the plane."], answers: [['managed']], options: [['could', 'managed']] },
      { number: 7, parts: ['Dawn ', ' to the barbecue as she had to work.'], answers: [["couldn't go"]], options: [["couldn't go", "couldn't have gone"]] },
      { number: 8, parts: ['Would you like to ', " buy the flat you're renting?"], answers: [['be able to']], options: [['could', 'be able to']] },
      { number: 9, parts: ['In a thousand years, ', ' travel faster than the speed of light?'], answers: [['will humans be able to']], options: [['can humans', 'will humans be able to']] },
      { number: 10, parts: ["'Mum, can I watch TV and do my homework later?' 'No, you ", " not!'"], answers: [['may']], options: [['may', 'might']] },
      { number: 11, parts: ['We ', " the last train after all, but of course we didn't know that at the time."], answers: [['could have caught']], options: [['could catch', 'could have caught']] },
      { number: 12, parts: ['', ' I at least stay up till the end of the film?'], answers: [["Can't"]], options: [["Mayn't", "Can't"]] },
      { number: 13, parts: ['Everyone ', ' tell that Julie was upset about something.'], answers: [['could', 'was able to']], options: [['could', 'was able to']] },
      { number: 14, parts: ['', ' I open the window, please? It\'s a little stuffy in here.'], answers: [['May', 'Can']], options: [['May', 'Can']] },
      { number: 15, parts: ['Because we had guests last Saturday, the kids ', ' stay up till midnight.'], answers: [['were allowed to']], options: [['could', 'were allowed to']] }
    ]
  },
  {
    id: 'B',
    unitId: 9,
    title: 'Ability and permission',
    instruction: 'Write a verb from the box in the correct form in each gap.',
    wordBox: ['do', 'eat', 'feel', 'go', 'have', 'invite', 'provide', 'recover', 'sit', 'speak', 'stand', 'work'],
    questions: [
      { number: 1, parts: ["It seems there's nothing anybody can ", ' to stop the conflict escalating further.'], answers: [['do']] },
      { number: 2, parts: ["She couldn't ", ' anything in her left arm for about two hours. She said it was completely numb.'], answers: [['feel']] },
      { number: 3, parts: ["I don't think the Prime Minister will ever manage ", ' from this scandal.'], answers: [['to recover']] },
      { number: 4, parts: ['Can I ', ' Tracy round after tea? We want to play my new computer game.'], answers: [['invite']] },
      { number: 5, parts: ["Liz has had another ice cream so why can't I ", " one? It's not fair!"], answers: [['have']] },
      { number: 6, parts: ['When I was a child, my brothers and sisters and I weren\'t allowed ', ' with the grown-ups except on special occasions.'], answers: [['to sit']] },
      { number: 7, parts: ["Darren's allergic to wheat, so he can't ", ' bread under any circumstances.'], answers: [['eat']] },
      { number: 8, parts: ["Dominic had said he spoke German, but when we got there it turned out he couldn't ", ' a word!'], answers: [['speak']] },
      { number: 9, parts: ["I'd love to be able ", " from home, but in my job it's just not possible."], answers: [['to work']] },
      { number: 10, parts: ['James could ', ' for Parliament at the last election - he had enough support - but he wasn\'t willing to sacrifice his privacy.'], answers: [['have stood']] },
      { number: 11, parts: ['A small cot for babies can ', ' if you ask at reception.'], answers: [['be provided']] },
      { number: 12, parts: ["We couldn't ", " to the concert anyway as Jamie wasn't very well."], answers: [['go']] }
    ]
  },
  {
    id: 'C',
    unitId: 9,
    title: 'Advice and criticism',
    instruction: 'If the bold word or phrase is correct, write OK. If it is incorrect, rewrite it correctly.',
    questions: [
      { number: 1, parts: ["Shouldn't you (getting) ", ' planning permission before you start building?'], answers: [['get', 'have got']] },
      { number: 2, parts: ['Gavin really ought not (to be worn) ', ' casual clothes to the interview last week.'], answers: [['to have worn']] },
      { number: 3, parts: ['She might have (gave) ', ' us a call to let us know she was all right.'], answers: [['given']] },
      { number: 4, parts: ['You (should) ', ' better get a second opinion before you do anything drastic like knock down a supporting wall.'], answers: [['had', "'d"]] },
      { number: 5, parts: ["I don't think you (must) ", " go to school today if you're not feeling well."], answers: [['should', 'ought to']] },
      { number: 6, parts: ['We definitely (should not judge) ', ' Karen until we know exactly what happened.'], answers: [['OK']] },
      { number: 7, parts: ["I probably won't get the job but I (should) ", ' as well apply for it, I suppose.'], answers: [['might', 'may']] },
      { number: 8, parts: ["You (could have told) ", " us you'd changed your mind about the holiday. How are we going to find a fourth person at this late stage?"], answers: [['OK']] },
      { number: 9, parts: ['We (had) ', " rather book the tickets now, hadn't we? They might have sold out on the day."], answers: [['would', "'d"]] },
      { number: 10, parts: ['Terry (would) ', " leave his bedroom in such a mess all the time. It's just not good enough."], answers: [['will']] },
      { number: 11, parts: ['Michael was late, but then again he (will) ', ' be.'], answers: [['would']] },
      { number: 12, parts: ['You (may) ', ' have asked me if I wanted to come with you! You know I need to go to the bank!'], answers: [['might', 'could']] }
    ]
  },
  {
    id: 'D',
    unitId: 9,
    title: 'Advice and criticism',
    instruction: 'Write a word or short phrase in each gap so that the second sentence has a similar meaning to the first sentence.',
    questions: [
      { number: 1, parts: ["I would suggest seeing a doctor if it doesn't clear up.\nYou had ", " a doctor if it doesn't clear up."], answers: [['better see']] },
      { number: 2, parts: ["It was typical of Jerry to forget to feed the cat, wasn't it?\nJerry ", ' to feed the cat, ', ' he?'], answers: [['would forget'], ["wouldn't"]] },
      { number: 3, parts: ["I'm annoyed Diana didn't invite us to her engagement party.\nDiana ", ' us to her engagement party.'], answers: [['might have invited', 'could have invited', 'should have invited', 'ought to have invited']] },
      { number: 4, parts: ['Buying a yellow car was a mistake - everyone thinks I drive a taxi!\nI ', ' a yellow car - everyone thinks I drive a taxi!'], answers: [["shouldn't have bought", "oughtn't to have bought"]] },
      { number: 5, parts: ["Teenagers are noisy, aren't they?\nTeenagers ", ' make so much noise, ', ' they?'], answers: [['will'], ["won't"]] },
      { number: 6, parts: ["It won't harm us to see what special offers are on at the moment.\nWe ", ' what special offers are on at the moment.'], answers: [['might as well see', 'may as well see']] },
      { number: 7, parts: ["Don't you think you should type that essay, rather than write it in pen?\n", ' better type that essay, rather than write it in pen?'], answers: [["Hadn't you"]] },
      { number: 8, parts: ["It would probably have been a good idea if you'd asked Dad what he thought.\nYou ", ' to ', ' Dad what he thought.'], answers: [['ought'], ['have asked']] }
    ]
  },
  {
    id: 'E',
    unitId: 9,
    title: 'Obligation',
    instruction: 'Write a word from the box in each gap. You will need two of the words twice.',
    wordBox: ["doesn't", 'got', 'had', 'has', 'have', 'must', "needn't", 'will'],
    questions: [
      { number: 1, parts: ['I ', ' have bothered preparing so much food; nobody ate anything anyway.'], answers: [["needn't"]] },
      { number: 2, parts: ['Do you ', " to have that music on so loud? I can't concentrate!"], answers: [['have']] },
      { number: 3, parts: ['You ', " call before you come round, as we'll definitely be in."], answers: [["needn't"]] },
      { number: 4, parts: ['It was difficult, but I knew I ', ' to apologise.'], answers: [['had']] },
      { number: 5, parts: ['Trisha ', ' need to get a summer job as her parents are quite well-off.'], answers: [["doesn't"]] },
      { number: 6, parts: ['', ' you have to be there in court yourself, or can a lawyer represent you?'], answers: [['Will']] },
      { number: 7, parts: ["We didn't ", ' to wear a uniform to school today, so I went in jeans and a T-shirt.'], answers: [['have']] },
      { number: 8, parts: ['I think Damien ', ' to stay in hospital for the next four or five weeks.'], answers: [['has']] },
      { number: 9, parts: ['Children ', ' not be left unattended under any circumstances.'], answers: [['must']] },
{ number: 10, parts: ["We haven't ", " to move out for another six months, but we've started looking for a new place anyway."], answers: [['got']] }
]
},
{
id: 'F',
unitId: 9,
title: 'Obligation: must, have to, need or need to',
instruction: 'Complete using must, have to, need or need to in the correct form and the correct form of the words in brackets.',
questions: [
{ number: 1, parts: ['You ', ' (pay) me back now, but of course you can if you like!'], answers: [["don't have to pay", "don't need to pay", "needn't pay"]] },
{ number: 2, parts: ['Dogs ', ' (keep) on a leash at all times.'], answers: [['must be kept', 'have to be kept', 'need to be kept']] },
{ number: 3, parts: ['If Linda ', ' (pick up) from school tomorrow, maybe we could spend the afternoon in town.'], answers: [["doesn't have to be picked up", "doesn't need to be picked up", "needn't be picked up"]] },
{ number: 4, parts: ['We ', " (rely) on phone lines in the future as we'll all have mobile phones which connect to the Internet."], answers: [["won't have to rely", "won't need to rely"]] },
{ number: 5, parts: ['The invitations ', " (send off) soon otherwise they won't get there in time."], answers: [['must be sent off', 'have to be sent off', 'need to be sent off']] },
{ number: 6, parts: ["Sorry I'm late. I ", ' (get) a few things from the supermarket on my way here.'], answers: [['had to get']] },
{ number: 7, parts: ['', ' (you / make) a fuss to get your money back, or was the manager quite reasonable?'], answers: [['Did you have to make', 'Did you need to make']] },
{ number: 8, parts: ['You ', " (believe) everything Graham tells you. He's lied to me before."], answers: [["mustn't believe", "shouldn't believe"]] },
{ number: 9, parts: ['Thankfully we ', ' (put) Flossie in a cattery as our neighbours offered to feed her.'], answers: [["didn't have to put", "didn't need to put"]] },
{ number: 10, parts: ['What time ', ' (farmers / get up) every morning?'], answers: [['do farmers have to get up', 'do farmers need to get up']] },
{ number: 11, parts: ["I'd hate ", " (commute) to work every morning and evening, wouldn't you?"], answers: [['to have to commute']] },
{ number: 12, parts: ['Although we took CDs with us we actually ', ' (do) as there was no CD player to play them on.'], answers: [["needn't have done"]] }
]
},
{
id: 'G',
unitId: 9,
title: 'A tabloid editor speaks',
instruction: 'Write one word in each gap.',
questions: [
{
number: 1,
parts: [
'As editor of the most popular British tabloid, I need ',
' make sure we give our readers what they want. And what do they want? Scandal. It is my job to tell the readers when a celebrity has done something they should not have ',
', or when a politician ',
" to have done something but didn't. One accusation that is often levelled at tabloids is that we think we ",
' not need to worry about the truth, but that is just not true. I have ',
' be shown proof from at least two sources before I run a story. As a newspaper, you have ',
' to get your facts right and you ',
' not print a story just because you want it to be true. There are times when, in retrospect, we ',
' not have been so careful and could have broken a story days before we did, but we ',
' to have absolute proof first.\nI often get asked why so many celebrities sell their stories to us. The truth is that we tell them we are going to run a story about them anyway, so they realise they might as ',
' put their side of the story across. They know they ',
" definitely have to speak out at some point, so why wait? And, let's face it, celebrities need to ",
' talked about constantly or they stop being famous, so they ',
' not complain, in my view.\nWhat I would say to celebrities and politicians that do criticise tabloids is that you ',
" not fear us if you haven't done anything wrong. But if you have, you ",
' better look out, because we are going to catch you.'
],
answers: [
['to'], ['done'], ['ought'], ['do'], ['to'],
['got'], ['must', 'should'], ['need'], ['had'],
['well'], ['will', "'ll"], ['be'], ['should', 'need', 'must'],
['need'], ['had', "'d"]
]
}
]
},
{
id: 'H',
unitId: 9,
title: 'Degrees of certainty',
instruction: 'Choose the correct word or phrase. If both are correct, choose both.',
questions: [
{ number: 1, parts: ["'Did you hear a noise?' '", " probably be the cat.'"], answers: [["That'll"]], options: [["That'll", 'That must']] },
{ number: 2, parts: ["'I had to walk all the way here.' 'You must ", " exhausted. Put your feet up. I'll make us a nice cup of tea.'"], answers: [['be', 'have been']], options: [['be', 'have been']] },
{ number: 3, parts: ["'Your favourite programme's on.' 'It ", " be. It's only half past five.'"], answers: [["can't"]], options: [["mustn't", "can't"]] },
{ number: 4, parts: ["'Andy made me redo every single one of the reports.' 'You ", " have been furious.'"], answers: [['must']], options: [['must', 'can']] },
{ number: 5, parts: ["'Laura walked right past me in the street without saying a word.' 'She ", " have seen you.'"], answers: [["can't", "couldn't"]], options: [["can't", "couldn't"]] },
{ number: 6, parts: ["'I can't believe I got the final question in the pop quiz wrong.' 'Don't worry. I ", " have known the answer either.'"], answers: [["wouldn't"]], options: [["wouldn't", "won't"]] },
{ number: 7, parts: ["'I can't wait to get that blue top tomorrow.' 'I wouldn't get too excited. They only had one left, so they ", " well have sold out.'"], answers: [['may', 'might']], options: [['may', 'might']] },
{ number: 8, parts: ["'It's got very cold.' 'Yes, I think it ", " easily snow tonight.'"], answers: [['might']], options: [['must', 'might']] },
{ number: 9, parts: ["'I can't wait till Roger gets here!' 'He should ", " by now, so he'll be here in about an hour.'"], answers: [['have landed']], options: [['land', 'have landed']] },
{ number: 10, parts: ["'I hope they've got some tickets left.' 'We ", " just be lucky and get the last two.'"], answers: [['might']], options: [['should', 'might']] }
]
},
{
  id: 'I',
  unitId: 9,
  title: 'Degrees of certainty',
  instruction: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words.',
  questions: [
    { number: 1, parts: ["It's possible that Greg didn't go to Swansea after all. (not)\nGreg ", ' to Swansea after all.'], answers: [['may not have gone', 'might not have gone']] },
    { number: 2, parts: ["It's quite likely that Sasha was lying about what Doug said. (well)\nSasha ", ' about what Doug said.'], answers: [['may well have been lying', 'might well have been lying', 'could well have been lying']] },
    { number: 3, parts: ['The most likely situation is that they awarded Grandpa the medal during the war. (must)\nGrandpa ', ' during the war.'], answers: [['must have been awarded the medal']] },
    { number: 4, parts: ["I'd be surprised if Derek has already arrived. (ought)\nDerek ", ' yet.'], answers: [["oughtn't to have arrived", 'ought not to have arrived']] },
    { number: 5, parts: ["Jake, is it definite that they haven't announced the winner yet? (will)\nJake, ", ' announced yet?'], answers: [["won't the winner have been", 'will the winner not have been']] },
    { number: 6, parts: ["It's highly likely that Stephen was listening. (may)\nStephen ", ' listening.'], answers: [['may well have been']] },
    { number: 7, parts: ["It's not possible that Andrew is half Spanish. (be)\nAndrew ", ' half Spanish.'], answers: [["can't be", "couldn't be"]] }
  ]
},
{
id: 'J',
unitId: 9,
title: 'Modals and semi-modals review',
instruction: 'Choose the correct answer.',
questions: [
{ number: 1, parts: ['Even in a million years, we ', ' go back in time.'], answers: [["won't be able to"]], options: [["couldn't", "can't", "won't be able to", "aren't able to"]] },
{ number: 2, parts: ['I ', " at the exam paper lying on Mr Gregson's desk, but I didn't want to risk it."], answers: [['could have looked']], options: [['could look', 'can look', 'can have looked', 'could have looked']] },
{ number: 3, parts: ['', ' Eliot better tell his mum what happened?'], answers: [["Hadn't"]], options: [["Mustn't", "Oughtn't", "Shouldn't", "Hadn't"]] },
{ number: 4, parts: ['You ', " have let us know you'd changed your phone number."], answers: [['could']], options: [['may', 'could', 'would', 'will']] },
{ number: 5, parts: ['', ' lectures at your university?'], answers: [["Don't students have to attend"]], options: [["Haven't students got to have attended", "Needn't students have attended", "Mustn't students to attend", "Don't students have to attend"]] },
{ number: 6, parts: ['We ', ' as well try to sell this old sofa before throwing it out.'], answers: [['might']], options: [['could', 'should', 'might', 'can']] },
{ number: 7, parts: ['Jeremy may well not ', ' about the accident yet.'], answers: [['have been told']], options: [['tell', 'to tell', 'have told', 'have been told']] },
{ number: 8, parts: ["It's essential that the documents ", ' be destroyed immediately.'], answers: [['should']], options: [['should', 'would', 'ought to', 'had better']] },
{ number: 9, parts: ['Luckily I ', ' a new pair of sunglasses as I found mine at the bottom of a bag.'], answers: [["didn't need to buy"]], options: [["needn't have bought", "didn't need to buy", 'needed not to buy', "hadn't to buy"]] },
{ number: 10, parts: ["I'm thinking of going on Million Euro Spender; I'd love to ", ' spend a million euros in one day!'], answers: [['be able']], options: [['have to', 'must', 'can', 'be able']] }
]
}
];

export const unitTenExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    unitId: 10,
    title: 'Topic vocabulary: Communication',
    instruction: 'Complete using the correct form of the words in the boxes.',
    wordBox: [
      'boast', 'contradict', 'exaggerate', 'flatter',
      'allege', 'assert', 'insist', 'utter',
      'confide', 'confirm', 'convey', 'disclose',
      'mumble', 'murmur', 'stumble', 'stutter',
      'quibble', 'rant', 'rave', 'scribble',
      'clarification', 'context', 'gist', 'tip'
    ],
    questions: [
      { number: 1, parts: ["I think Dave's ", " the magazine's importance. It actually has a very small readership."], answers: [['exaggerating']] },
      { number: 2, parts: ['Caroline said the hotel was fantastic and then Paul immediately ', " her and said it wasn't actually very nice at all."], answers: [['contradicted']] },
      { number: 3, parts: ["I know Suzanne's wealthy but there's no need for her to ", ' about it to everyone all the time.'], answers: [['boast']] },
      { number: 4, parts: ['Adam said I could be a professional model but I think he was just ', ' me.'], answers: [['flattering']] },
      { number: 5, parts: ['The politician has continually ', ' his innocence.'], answers: [['asserted']] },
      { number: 6, parts: ['As your lawyer, I ', ' on your telling me the truth.'], answers: [['insist']] },
      { number: 7, parts: ['Thompson is ', ' to have accepted a bribe from a local businesswoman.'], answers: [['alleged']] },
      { number: 8, parts: ["Don't ", " a single word until you've spoken to your lawyer."], answers: [['utter']] },
      { number: 9, parts: ['You know you can ', " in me at any time, don't you?"], answers: [['confide']] },
      { number: 10, parts: ['We would like to ', ' that your application has been approved.'], answers: [['confirm']] },
      { number: 11, parts: ['Your password will not be ', ' to any third party.'], answers: [['disclosed']] },
      { number: 12, parts: ["I can't begin to ", " how sorry I am for the trouble I've caused."], answers: [['convey']] },
      { number: 13, parts: ['I could hear the audience ', " but couldn't make out any distinct comments."], answers: [['murmuring']] },
      { number: 14, parts: ["It's so embarrassing when a newsreader ", ' over their words.'], answers: [['stumbles']] },
      { number: 15, parts: ['I stood there ', ' in shock, unable to think of anything sensible to say.'], answers: [['stuttering']] },
      { number: 16, parts: ["Please don't ", " when you're talking to me. Open your mouth when you talk!"], answers: [['mumble']] },
      { number: 17, parts: ['Linda was ', " about that new sitcom on ITV. She said it's hilarious."], answers: [['raving']] },
      { number: 18, parts: ['Stop ', ' on the desk!'], answers: [['scribbling']] },
      { number: 19, parts: ["There's no point ", " over the bill. It's only a few euros more than we thought it would be anyway."], answers: [['quibbling']] },
      { number: 20, parts: ['When my boss gets in a bad mood, she just ', ' at everybody.'], answers: [['rants']] },
      { number: 21, parts: ["Here's a ", " for all budding writers out there. Never let the truth get in the way of a good story!"], answers: [['tip']] },
      { number: 22, parts: ['Please do contact me if you require further ', ' on any of these issues.'], answers: [['clarification']] },
      { number: 23, parts: ['I understood the ', " of her argument, but I can't say I understood all the fine points."], answers: [['gist']] },
      { number: 24, parts: ['They quoted me completely out of ', ". I didn't mean that at all."], answers: [['context']] }
    ]
  },
  {
    id: 'B',
    unitId: 10,
    title: 'Topic vocabulary: Communication',
    instruction: 'Choose the correct word.',
    questions: [
      { number: 1, parts: ['Are you fed up with complicated ', ' in official documents?'], answers: [['jargon']], options: [['jargon', 'slang']] },
      { number: 2, parts: ['Documents that are impossible to fully ', '?'], answers: [['comprehend']], options: [['comprehend', 'contradict']] },
      { number: 3, parts: ['Do you hear politicians use ', ' and ambiguous language?'], answers: [['vague']], options: [['vague', 'relevant']] },
      { number: 4, parts: ['Do you hear politicians use vague and ', ' language?'], answers: [['ambiguous']], options: [['literal', 'ambiguous']] },
      { number: 5, parts: ["You haven't got a/an ", ' what they really mean?'], answers: [['inkling']], options: [['inkling', 'hint']] },
      { number: 6, parts: ["Do you find doctors' handwriting ", ' on prescriptions?'], answers: [['illegible']], options: [['colloquial', 'illegible']] },
      { number: 7, parts: ['We ', ' all uses of language that confuse rather than explain.'], answers: [['denounce']], options: [['declare', 'denounce']] },
      { number: 8, parts: ["Let's be ", '. A lot of people in public life could do much better.'], answers: [['blunt']], options: [['blunt', 'sharp']] },
      { number: 9, parts: ['Sign our ', ' today and make your feelings clear.'], answers: [['petition']], options: [['placard', 'petition']] }
    ]
  },
  {
    id: 'C',
    unitId: 10,
    title: 'Topic vocabulary: The media',
    instruction: 'Write a word from the box in each gap.',
    wordBox: ['anchor', 'broadcast', 'caption', 'correspondent', 'coverage', 'footnote', 'pamphlet', 'prerecorded', 'spine', 'trailer'],
    questions: [
      { number: 1, parts: ["The programme doesn't go out live. It's ", '.'], answers: [['prerecorded']] },
      { number: 2, parts: ['And now let\'s go over to our political ', ", who's live at Westminster."], answers: [['correspondent']] },
      { number: 3, parts: ['The title of a book is usually printed on the cover and on the ', '.'], answers: [['spine']] },
      { number: 4, parts: ["I'd really love to be the main ", ' hosting a national, nightly news show.'], answers: [['anchor']] },
      { number: 5, parts: ["There's usually massive media ", ' when a celebrity couple splits up.'], answers: [['coverage']] },
      { number: 6, parts: ["I haven't seen the film yet but I saw the ", '; it looks quite interesting.'], answers: [['trailer']] },
      { number: 7, parts: ["There's no ", " under this photo so I don't know who it's of."], answers: [['caption']] },
      { number: 8, parts: ["If you think I need to provide more detail, I'll add a short ", ' at the bottom of the page.'], answers: [['footnote']] },
      { number: 9, parts: ['I think they ', " the show live usually, don't they?"], answers: [['broadcast']] },
      { number: 10, parts: ['Someone in the street gave me a small ', ' about energy conservation at home.'], answers: [['pamphlet']] }
    ]
  },
  {
    id: 'D',
    unitId: 10,
    title: 'Topic vocabulary: The media (Freelance writing)',
    instruction: 'Write a word from the box in the correct form in each gap.',
    wordBox: ['columnist', 'critic', 'ghostwriter', 'handbook', 'manifesto', 'novelist', 'reviewer', 'subtitles', 'supplement', 'tabloid'],
    questions: [
      {
        number: 1,
        parts: [
          "When you're a freelance writer, there are many varied opportunities open to you. You may be working on that great work of fiction and know that within a couple of years you'll be regarded as a hugely successful ",
          ', but until then there are bills to be paid. The Sunday colour ',
          ' are filled with feature articles. They all have to be written, and they\'re often written by freelancers. Offer your services. Know two languages? Consider doing the ',
          " for foreign films and TV programmes. They're usually commissioned on a film-by-film basis. Enjoy politics? Offer to help a political party to produce its next ",
          ' - for a small fee, of course. Like technology? Someone has to write the instructions or ',
          ' that comes with every piece of equipment we buy. It could be you! Set yourself up as a gossip ',
          ', film ',
          ' or book ',
          " for a small local newspaper. Once you've got some pieces behind you, you can move on to a bigger paper, or even a national ",
          ". And when you've made a few contacts and had a few things published, there's a fair amount of work out there for ",
          " - people who write celebrities' autobiographies for them."
        ],
        answers: [
          ['novelist'], ['supplements'], ['subtitles'], ['manifesto'], ['handbook'],
          ['columnist'], ['critic', 'reviewer'], ['reviewer', 'critic'], ['tabloid'], ['ghostwriters']
        ]
      }
    ]
  },
  {
    id: 'E',
    unitId: 10,
    title: 'Phrasal verbs',
    instruction: 'Write a phrasal verb from the box in the correct form in each gap.',
    wordBox: ['blurt out', 'dry up', 'get across', 'pass on', 'shout down', 'speak out', 'talk over', 'talk round'],
    questions: [
      { number: 1, parts: ['Could you ', ' the message to Darren when you see him, please?'], answers: [['pass on']] },
      { number: 2, parts: ['I knew it was supposed to be a secret but I just ', ' it ', ' before I could stop myself!'], answers: [['blurted'], ['out']] },
      { number: 3, parts: ['Rudy was really opposed to the idea at the start, but we managed to ', ' him ', ' in the end.'], answers: [['talk'], ['round']] },
      { number: 4, parts: ["I've tried to explain to Sean how I feel several times, but I just can't seem to ", ' my point of view ', '.'], answers: [['get'], ['across']] },
      { number: 5, parts: ['Dave and I ', ' the whole thing ', " last night and we've agreed to have separate holidays this year."], answers: [['talked'], ['over']] },
      { number: 6, parts: ['All of us who oppose this new road need to ', ' against it as loudly and clearly as we can.'], answers: [['speak out']] },
{ number: 7, parts: ['The Minister was ', " by protestors angry at the government's proposals."], answers: [['shouted down']] },
{ number: 8, parts: ["My speech is okay but I just hope I don't ", ' as soon as I get to the podium.'], answers: [['dry up']] }
]
},
{
id: 'F',
unitId: 10,
title: 'Phrasal verbs',
instruction: 'Write one word in each gap.',
questions: [
{ number: 1, parts: ["No one's supposed to know yet, so don't ", ' on, whatever you do!'], answers: [['let']] },
{ number: 2, parts: ['The magazine ', ' out every Friday.'], answers: [['comes']] },
{ number: 3, parts: ['News ', ' around very fast in this town!'], answers: [['gets']] },
{ number: 4, parts: ["I couldn't believe it when Jake ", ' out with the news that he was going to move to Australia.'], answers: [['came']] },
{ number: 5, parts: ["You'll need to ", ' your views across extremely diplomatically otherwise some people might take offence.'], answers: [['get', 'put']] },
{ number: 6, parts: ["We've ", ' down our beliefs and policies very clearly in our latest manifesto.'], answers: [['set']] },
{ number: 7, parts: ['Everyone except Meg ', ' on immediately that I was only joking.'], answers: [['caught']] },
{ number: 8, parts: ["I've been trying to explain the situation to Ben for weeks but I just don't seem to be able to ", ' through to him.'], answers: [['get']] }
]
},
{
id: 'G',
unitId: 10,
title: 'Phrasal verbs with down',
instruction: "Choose Yes if the phrasal verb is connected to the idea of 'defeating someone or being defeated'; otherwise choose No.",
questions: [
{ number: 1, parts: ['Rose backed down when she realised she was wrong. ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 2, parts: ["With my arthritis, it's actually quite difficult to bend down. ", ''], answers: [['No']], options: [yesNo] },
{ number: 3, parts: ['I almost broke down in tears when I heard the news. ', ''], answers: [['No']], options: [yesNo] },
{ number: 4, parts: ['If the vote goes the wrong way, it could bring down the government. ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 5, parts: ["The council's planning to clamp down on youths drinking in the streets. ", ''], answers: [['Yes']], options: [yesNo] },
{ number: 6, parts: ['The Minister was forced to climb down in the face of so much evidence against his position. ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 7, parts: ["The government's planning to crack down on anti-social behaviour. ", ''], answers: [['Yes']], options: [yesNo] },
{ number: 8, parts: ['I was in such a hurry, I just gobbled down my breakfast and left. ', ''], answers: [['No']], options: [yesNo] },
{ number: 9, parts: ['Both Jo and I went down with food poisoning on the first day of the holiday. ', ''], answers: [['No']], options: [yesNo] },
{ number: 10, parts: ["I'll just jot a few notes down while we talk. ", ''], answers: [['No']], options: [yesNo] },
{ number: 11, parts: ["Gareth really let me down when he told Andrea what I'd told him in confidence. ", ''], answers: [['No']], options: [yesNo] },
{ number: 12, parts: ["Dave didn't want to get married at first, but I've managed to wear him down! ", ''], answers: [['Yes']], options: [yesNo] }
]
},
{
id: 'H',
unitId: 10,
title: 'Phrases, patterns and collocations',
instruction: 'Write one word in each gap.',
questions: [
{ number: 1, parts: ["Obviously it goes ", " saying that I don't want you to tell anyone else about this."], answers: [['without']] },
{ number: 2, parts: ['Reading ', " the lines, it seems that the government's considering tightening media regulations."], answers: [['between']] },
{ number: 3, parts: ["I'm afraid that book's ", " of print, but I'll see if we can find a second-hand copy for you somewhere."], answers: [['out']] },
{ number: 4, parts: ['I followed your instructions ', " the letter but I still couldn't get the printer to work properly."], answers: [['to']] },
{ number: 5, parts: ['Getting Elaine to edit your article is just asking ', ' trouble; you know how pedantic and opinionated she is!'], answers: [['for']] },
{ number: 6, parts: ['', ' answer to your question, no, I have never had any business dealings with Mr Partridge.'], answers: [['In']] },
{ number: 7, parts: ["Even if you've got a great idea for a novel, it's incredibly hard putting pen ", ' paper for the first time.'], answers: [['to']] },
{ number: 8, parts: ['Put your ideas down ', " paper and we'll discuss them at the next meeting."], answers: [['on']] },
{ number: 9, parts: ["You've had some good news, haven't you? It's written all ", ' your face!'], answers: [['over']] }
]
},
{
  id: 'I',
  unitId: 10,
  title: 'Phrases, patterns and collocations',
  instruction: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words.',
  questions: [
    { number: 1, parts: ["The adverts look exactly the same as the articles in this magazine. (difference)\nIt's impossible ", ' the adverts in this magazine.'], answers: [['to tell the difference between the articles and']] },
    { number: 2, parts: ["I assume you've checked your facts carefully. (read)\nI ", " you've checked your facts carefully."], answers: [['take it as read that']] },
    { number: 3, parts: ["You've got to persuade the editor not to publish that story. (out)\nYou've got to ", ' that story.'], answers: [['talk the editor out of publishing']] },
    { number: 4, parts: ['Terry and I started arguing about the situation in the Middle East. (into)\nI ', ' about the situation in the Middle East.'], answers: [['got into an argument with Terry']] },
    { number: 5, parts: ["I'm sure we'll be able to agree on this matter. (understanding)\nI'm sure we'll be able to ", ' on this matter.'], answers: [['come to an understanding', 'reach an understanding']] },
    { number: 6, parts: ["I'd discuss this with Phil before making a final decision. (discussion)\nI'd ", ' before making a final decision.'], answers: [['have a discussion with Phil about this']] }
  ]
},
{
id: 'J',
unitId: 10,
title: 'Phrases, patterns and collocations',
instruction: 'For each question, write one word which can be used in all three sentences.',
questions: [
{ number: 1, parts: ["All of your managers seem to ___ very highly of you. There were no problems to ___ of with the printing. As an investigative journalist, I'm a bit of a crusader, so to ___. Word: ", ''], answers: [['speak']] },
{ number: 2, parts: ['Do please spread the ___ about my new website. I think you should have a ___ with Sue about this. I knew from the ___ go this book would be difficult to write. Word: ', ''], answers: [['word']] },
{ number: 3, parts: ["Helen and I are barely on ___ terms these days. Generally ___, we liked your screenplay very much. Well, ___ as someone who's in the public eye constantly, I must say I do value my privacy. Word: ", ''], answers: [['speaking']] },
{ number: 4, parts: ["Many politicians will only speak to journalists if their comments are off the ___. I'd appreciate the chance to set the ___ straight on this matter. We're trying to compile a ___ of all previous holders of the post. Word: ", ''], answers: [['record']] },
{ number: 5, parts: ['When you stop being prime minister, not many people take any ___ of what you think any more. The library will be closed until further ___. They contacted me at very short ___ and said I had to go to South America to report on the elections there. Word: ', ''], answers: [['notice']] },
{ number: 6, parts: ["No politician ever tells the complete truth in my ___. Don't break any rules - just do it by the ___. I always know what Fred's thinking - I can read him like a ___. Word: ", ''], answers: [['book']] },
{ number: 7, parts: ["Mr Davis has so far refused to ___ the charges that have been levelled against him. When you're self-employed, you don't have to ___ to anyone but yourself. We believe this new radio show will ___ the needs of all those who wish to take part in current affairs discussions in the afternoon. Word: ", ''], answers: [['answer']] }
]
},
{
id: 'K',
unitId: 10,
title: 'Idioms',
instruction: 'Each bold word is in the wrong sentence. Write the correct word in each gap.',
questions: [
{ number: 1, parts: ["Don't tell Irene any of your secrets. She's got a very big (grapevine) ", '!'], answers: [['mouth']] },
{ number: 2, parts: ['Keep me (clean) ', ' about any developments.'], answers: [['posted']] },
{ number: 3, parts: ['Billy, stop telling (drift) ', ' about your sister.'], answers: [['tales']] },
{ number: 4, parts: ["The Minister's disappearance speaks (cards) ", ' about his involvement in the corruption scandal.'], answers: [['volumes']] },
{ number: 5, parts: ['I heard through the (tales) ', ' that you and Rick are thinking of splitting up.'], answers: [['grapevine']] },
{ number: 6, parts: ['Get it off your (word) ', " and tell me exactly what's wrong."], answers: [['chest']] },
{ number: 7, parts: ['You should just put your (hat) ', " on the table and tell them you're leaving unless they give you a pay rise."], answers: [['cards']] },
{ number: 8, parts: ['Keep it under your (stick) ', ", but Julie's going to have a baby."], answers: [['hat']] },
{ number: 9, parts: ["I wasn't sure whether to tell you, but then I thought it was best to come (posted) ", ' about it myself before you found out from someone else.'], answers: [['clean']] },
{ number: 10, parts: ['I give you my (mouth) ', " that I won't tell anybody."], answers: [['word']] },
{ number: 11, parts: ['If I catch your (volumes) ', ", you're saying you're leaving me. Is that right?"], answers: [['drift']] },
{ number: 12, parts: ['Eddie thought I was a football fan - he must have got completely the wrong end of the (chest) ', '.'], answers: [['stick']] }
]
},
{
id: 'L',
unitId: 10,
title: 'Word formation',
instruction: 'Complete each sentence by changing the form of the word in capitals.',
questions: [
{ number: 1, parts: ['She stood there completely ', ', so I had no idea at all what she was thinking. (EXPRESS)'], answers: [['expressionless']] },
{ number: 2, parts: ['Film studios spend millions of dollars on ', ' for new movies. (PUBLIC)'], answers: [['publicity']] },
{ number: 3, parts: ['That news conference was ', ' boring! (SPEAK)'], answers: [['unspeakably']] },
{ number: 4, parts: ["I'm not very keen on the ", ' of this dictionary definition. (WORD)'], answers: [['wording']] },
{ number: 5, parts: ["The problem with Michael is that he's just so ', ' - he never shuts up! (TALK)"], answers: [['talkative']] },
{ number: 6, parts: ["I don't think you should have any ", ' marks in your PhD dissertation. (EXCLAIM)'], answers: [['exclamation']] },
{ number: 7, parts: ['Any actor who becomes known for one role is in danger of becoming ', '. (TYPE)'], answers: [['typecast']] },
{ number: 8, parts: ['Advertising is particularly effective on people who are highly ', '. (SUGGEST)'], answers: [['suggestible']] },
{ number: 9, parts: ["There are so many swear words in this article that I think it's ", '. (PRINT)'], answers: [['unprintable']] },
{ number: 10, parts: ['Rose was extremely ', ' that we rewrite the introduction. (INSIST)'], answers: [['insistent']] }
]
},
{
id: 'M',
unitId: 10,
title: 'Word formation: prefix over-',
instruction: "Choose Yes if the word can take over- to mean 'too much'; otherwise choose No.",
questions: [
{ number: 1, parts: ['act ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 2, parts: ['book ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 3, parts: ['cook ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 4, parts: ['crowded ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 5, parts: ['do ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 6, parts: ['dressed ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 7, parts: ['excited ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 8, parts: ['grown ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 9, parts: ['heat ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 10, parts: ['priced ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 11, parts: ['protective ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 12, parts: ['rate ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 13, parts: ['react ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 14, parts: ['read ', ''], answers: [['No']], options: [yesNo] },
{ number: 15, parts: ['spend ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 16, parts: ['step ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 17, parts: ['stretched ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 18, parts: ['surprised ', ''], answers: [['No']], options: [yesNo] },
{ number: 19, parts: ['try ', ''], answers: [['No']], options: [yesNo] },
{ number: 20, parts: ['weight ', ''], answers: [['Yes']], options: [yesNo] }
]
},
{
id: 'N',
unitId: 10,
title: 'Word formation: prefix over-',
instruction: 'Complete the sentences using words with over- from exercise M.',
questions: [
{ number: 1, parts: ['The rice and sauce were okay, but I thought the chicken was a little ', ' and tough.'], answers: [['overcooked']] },
{ number: 2, parts: ['Everyone else was in jeans and T-shirts - I felt completely ', '.'], answers: [['overdressed']] },
{ number: 3, parts: ["I've ", " this month and haven't got any money left!"], answers: [['overspent']] },
{ number: 4, parts: ["Calm down! You're getting ", '!'], answers: [['overexcited']] },
{ number: 5, parts: ["You've really ", ' the mark this time. How could you be so thoughtless?'], answers: [['overstepped']] },
{ number: 6, parts: ['The house is in good condition, but the garden is completely ', ' and needs a lot of work.'], answers: [['overgrown']] },
{ number: 7, parts: ['The doctor said I was ', " so she's put me on a diet."], answers: [['overweight']] },
{ number: 8, parts: ["It's a nice vase, but I think it's a bit ", ". Let's find something cheaper."], answers: [['overpriced']] }
]
},
{
id: 'O',
unitId: 10,
title: 'Word formation: Ridiculous Rules',
instruction: 'Use the word given in capitals to form a word that fits each gap.',
questions: [
{
number: 1,
parts: [
'The (SAY) ',
" 'never judge a book by its cover' could not be more true for Ridiculous Rules by Marjorie Allen. The cover is completely blank, whereas the book is crammed full of wonderful examples and anecdotes. Allen is an (SPEAK) ",
' critic of much of what is taught to native and non-native speakers of English, and has issued a (DECLARE) ',
' of war against textbooks and style books which tell lies.\nTake the ridiculous and (MEAN) ',
' rule of never ending a sentence with a preposition. The lovely - if famous - story goes, that Winston Churchill, well known for his numerous (WRITE) ',
' as well as for being British Prime Minister during the Second World War, received a manuscript back from an ignorant (EDIT) ',
', who had told him rather rudely that he had to (PHRASE) ',
' a sentence which ended with a preposition. Churchill responded by making the simple yet forceful (STATE) ',
" in the margin: 'This is an impertinence up with which I will not put.' - the (IMPLY) ",
' being that not to end a sentence with a preposition often sounds ridiculous in English. Sadly, Allen informs us that the story is probably mere (HEAR) ',
", and that Churchill may have actually only written 'rubbish!' in the margin."
],
answers: [
['saying'], ['outspoken'], ['declaration'], ['meaningless'], ['writings'],
['editor'], ['rephrase'], ['statement'], ['implication'], ['hearsay']
]
}
]
}
];

