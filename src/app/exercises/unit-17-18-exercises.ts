import type { ExerciseSection } from './exercises';

const yesNo = ['Yes', 'No'];

export const unitSeventeenExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    unitId: 17,
    title: 'Relative pronouns',
    instruction: 'Write a relative pronoun in each gap. Do not use the word that.',
    questions: [
      { number: 1, parts: ['Davina, ', " kids you met last weekend, works for Cooper's in the high street."], answers: [['whose']] },
      { number: 2, parts: ["I'll never understand the reason ", ' you decided to join the army.'], answers: [['why']] },
      { number: 3, parts: ['The village ', ' Alan grew up in is only a few miles from here.'], answers: [['which']] },
      { number: 4, parts: ['Have you spoken to that guy ', ' daughter might be able to help you with the contract?'], answers: [['whose']] },
      { number: 5, parts: ['Back in the 1970s, ', ' I was a teenager, no one ', ' I knew had a computer.'], answers: [['when'], ['who', 'whom']] },
      { number: 6, parts: ["They've just announced that Beddington youth club, ", ' we all used to hang out after school, is going to be turned into a casino.'], answers: [['where']] },
      { number: 7, parts: ["Chicago's a city ", " I've always wanted to visit."], answers: [['which']] },
      { number: 8, parts: ['Do you remember the time ', ' we got totally lost?'], answers: [['when']] },
      { number: 9, parts: ['The cows ', ' are in that field over there are Friesians.'], answers: [['which']] },
      { number: 10, parts: ['Our cat Tibby, ', ' loves being stroked all the time, is 16 years old today!'], answers: [['who', 'which']] },
      { number: 11, parts: ['Bob wants to become a pop star, ', ' seems like a totally unrealistic ambition to me.'], answers: [['which']] },
      { number: 12, parts: ['The official to ', ' you need to address your enquiry is temporarily unavailable.'], answers: [['whom']] },
      { number: 13, parts: ['', ' spoils the film for me is the ending, ', ' is just ridiculous.'], answers: [['What'], ['which']] },
      { number: 14, parts: ['Julian was the prefect ', ' we all liked the best.'], answers: [['who', 'whom']] }
    ]
  },
  {
    id: 'B',
    unitId: 17,
    title: 'Relative pronouns: replacement by that',
    instruction: 'Choose Yes if the relative pronoun in exercise A can be replaced by that; otherwise choose No.',
    questions: [
      { number: 1, parts: ['1 (whose): ', ''], answers: [['No']], options: [yesNo] },
      { number: 2, parts: ['2 (why): ', ''], answers: [['Yes']], options: [yesNo] },
      { number: 3, parts: ['3 (which): ', ''], answers: [['Yes']], options: [yesNo] },
      { number: 4, parts: ['4 (whose): ', ''], answers: [['No']], options: [yesNo] },
      { number: 5, parts: ['5a (when): ', ''], answers: [['No']], options: [yesNo] },
      { number: 6, parts: ['5b (who): ', ''], answers: [['Yes']], options: [yesNo] },
      { number: 7, parts: ['6 (where): ', ''], answers: [['No']], options: [yesNo] },
      { number: 8, parts: ['7 (which): ', ''], answers: [['Yes']], options: [yesNo] },
      { number: 9, parts: ['8 (when): ', ''], answers: [['Yes']], options: [yesNo] },
      { number: 10, parts: ['9 (which): ', ''], answers: [['Yes']], options: [yesNo] },
      { number: 11, parts: ['10 (who): ', ''], answers: [['No']], options: [yesNo] },
      { number: 12, parts: ['11 (which): ', ''], answers: [['No']], options: [yesNo] },
      { number: 13, parts: ['12 (whom): ', ''], answers: [['No']], options: [yesNo] },
      { number: 14, parts: ['13a (What): ', ''], answers: [['No']], options: [yesNo] },
      { number: 15, parts: ['13b (which): ', ''], answers: [['No']], options: [yesNo] },
      { number: 16, parts: ['14 (who): ', ''], answers: [['Yes']], options: [yesNo] }
    ]
  },
  {
    id: 'C',
    unitId: 17,
    title: 'Relative pronouns: omission',
    instruction: 'Choose Yes if the relative pronoun in exercise A can be omitted; otherwise choose No.',
    questions: [
      { number: 1, parts: ['1 (whose): ', ''], answers: [['No']], options: [yesNo] },
      { number: 2, parts: ['2 (why): ', ''], answers: [['Yes']], options: [yesNo] },
      { number: 3, parts: ['3 (which): ', ''], answers: [['Yes']], options: [yesNo] },
      { number: 4, parts: ['4 (whose): ', ''], answers: [['No']], options: [yesNo] },
      { number: 5, parts: ['5a (when): ', ''], answers: [['No']], options: [yesNo] },
      { number: 6, parts: ['5b (who): ', ''], answers: [['Yes']], options: [yesNo] },
      { number: 7, parts: ['6 (where): ', ''], answers: [['No']], options: [yesNo] },
      { number: 8, parts: ['7 (which): ', ''], answers: [['Yes']], options: [yesNo] },
      { number: 9, parts: ['8 (when): ', ''], answers: [['Yes']], options: [yesNo] },
      { number: 10, parts: ['9 (which): ', ''], answers: [['No']], options: [yesNo] },
      { number: 11, parts: ['10 (who): ', ''], answers: [['No']], options: [yesNo] },
      { number: 12, parts: ['11 (which): ', ''], answers: [['No']], options: [yesNo] },
      { number: 13, parts: ['12 (whom): ', ''], answers: [['No']], options: [yesNo] },
      { number: 14, parts: ['13a (What): ', ''], answers: [['No']], options: [yesNo] },
      { number: 15, parts: ['13b (which): ', ''], answers: [['No']], options: [yesNo] },
      { number: 16, parts: ['14 (who): ', ''], answers: [['Yes']], options: [yesNo] }
    ]
  },
  {
    id: 'D',
    unitId: 17,
    title: 'Relative clauses: error correction',
    instruction: 'If the bold word or phrase is correct, write OK. If it is incorrect, rewrite it correctly.',
    questions: [
      { number: 1, parts: ['We took the dog (who we\'d found it) ', ' abandoned in the street straight to the vet.'], answers: [["which we'd found", "that we'd found", "we'd found", "who we'd found"]] },
      { number: 2, parts: ['Would any boys (who\'s) ', ' surnames begin with M please raise your hands?'], answers: [['whose']] },
      { number: 3, parts: ['The day (which) ', ' I first met your mother was the best day of my life.'], answers: [['when', 'that', 'on which']] },
      { number: 4, parts: ["Alfredo thought for a second, and then began to write: 'To (Whom) ", " It May Concern . . .'"], answers: [['OK']] },
      { number: 5, parts: ['The woman (who I spoke to) ', ' was extremely helpful.'], answers: [['OK']] },
      { number: 6, parts: ['The film (which I really want to see it) ', ' is the new one with Johnny Depp.'], answers: [['which I really want to see', 'that I really want to see', 'I really want to see']] },
      { number: 7, parts: ['No, the hospital (where you were born there) ', ' was closed down quite a while ago.'], answers: [['where you were born']] },
      { number: 8, parts: ['Could you just give me one reason (why) ', ' you would say something like that?'], answers: [['OK']] },
      { number: 9, parts: ['The table (where) ', ' we sat at had a lovely view of the Acropolis.'], answers: [['which', 'that']] },
      { number: 10, parts: ['(That) ', ' bothers me is why the police took so long to charge them.'], answers: [['What']] },
      { number: 11, parts: ['The guy (whose car you just hit it) ', ' is a traffic warden!'], answers: [['whose car you just hit']] }
    ]
  },
  {
    id: 'E',
    unitId: 17,
    title: 'Defining and non-defining relative clauses',
    instruction: 'Choose Yes if the sentence requires commas around the relative clause; otherwise choose No.',
    questions: [
      { number: 1, parts: ['We were staying at the hotel that you recommended to us. ', ''], answers: [['No']], options: [yesNo] },
      { number: 2, parts: ['The film which was directed by Mel Gibson is actually in Hebrew. ', ''], answers: [['Yes']], options: [yesNo] },
      { number: 3, parts: ['The person who I look up to more than anyone else is my Uncle Geoffrey. ', ''], answers: [['No']], options: [yesNo] },
      { number: 4, parts: ['I bumped into Katherine the other day which was a strange coincidence. ', ''], answers: [['Yes']], options: [yesNo] },
      { number: 5, parts: ['Is that the book which you were telling me about the other day? ', ''], answers: [['No']], options: [yesNo] },
      { number: 6, parts: ['The best man at my wedding who used to live in Germany has just moved to China. ', ''], answers: [['Yes']], options: [yesNo] },
      { number: 7, parts: ["Have you got a suggestion which doesn't involve spending a lot of money? ", ''], answers: [['No']], options: [yesNo] },
      { number: 8, parts: ['Warwick University where I spent three wonderful years is one of the top ten universities in the country. ', ''], answers: [['Yes']], options: [yesNo] }
    ]
  },
  {
    id: 'F',
    unitId: 17,
    title: 'Relative pronouns with prepositions',
    instruction: 'Write one word in each gap.',
    questions: [
      { number: 1, parts: ["Do you really think the month ", " which you're born affects your character?"], answers: [['in']] },
      { number: 2, parts: ['They declared war on Austria, the reason ', ' which completely escapes me now.'], answers: [['for']] },
      { number: 3, parts: ["There are five slices of pizza left, two ", " which we'd better save for Justin."], answers: [['of']] },
      { number: 4, parts: ['Is the day ', ' which you arrive a Friday?'], answers: [['on']] },
      { number: 5, parts: ['Josephine came to the rescue, of course, ', " which I'm eternally grateful."], answers: [['for']] },
      { number: 6, parts: ['There were 20 people at the meeting, some ', " whom I'd never met before."], answers: [['of']] },
      { number: 7, parts: ['The law needs to be strengthened, ', ' which I mean the police need to be given new powers.'], answers: [['by']] },
      { number: 8, parts: ['', ' whom did you speak?'], answers: [['To', 'With']] },
      { number: 9, parts: ['I looked at several possible presents, none ', ' which were appropriate.'], answers: [['of']] },
{ number: 10, parts: ['She studied in Berlin from 1916 to 1923, ', ' which time many people still believed that women had no role in scientific research.'], answers: [['at']] },
{ number: 11, parts: ['The region ', ' which most of the wine is produced is to the south.'], answers: [['in']] },
{ number: 12, parts: ['Jackson directed over 30 westerns, many ', ' which are now available on DVD.'], answers: [['of']] }
]
},
{
id: 'G',
unitId: 17,
title: 'Combining sentences with relative clauses',
instruction: 'Rewrite as one sentence using a relative clause.',
questions: [
{ number: 1, parts: ['That tree is an oak. My grandfather planted it 60 years ago.\n', ''], answers: [['That tree, which my grandfather planted 60 years ago, is an oak.']] },
{ number: 2, parts: ["Tina and Charlie are having a party this Saturday. They're identical twins.\n", ''], answers: [['Tina and Charlie, who are identical twins, are having a party this Saturday.']] },
{ number: 3, parts: ['On the Friday, we spent most of the day sitting in the port. On the Friday, the ferry was delayed.\n', ''], answers: [['On the Friday, when the ferry was delayed, we spent most of the day sitting in the port.']] },
{ number: 4, parts: ["Barbara used to work in the Personnel Department. You met her at Libby's last Thursday.\n", ''], answers: [["Barbara, who you met at Libby's last Thursday, used to work in the Personnel Department.", "Barbara, whom you met at Libby's last Thursday, used to work in the Personnel Department."]] },
{ number: 5, parts: ["Let's go to da Vinci's. They do a great pepper steak there.\n", ''], answers: [["Let's go to da Vinci's, where they do a great pepper steak."]] },
{ number: 6, parts: ['This book was once owned by Sir Francis Drake. It was given to me by my great aunt.\n', ''], answers: [['This book, which was given to me by my great aunt, was once owned by Sir Francis Drake.']] },
{ number: 7, parts: ["Why did Danny decide to enter the marathon? Danny's totally unfit.\n", ''], answers: [["Why did Danny, who's totally unfit, decide to enter the marathon?", 'Why did Danny, who is totally unfit, decide to enter the marathon?']] },
{ number: 8, parts: ['Guy is now engaged to my sister. His sister is married to my brother.\n', ''], answers: [['Guy, whose sister is married to my brother, is now engaged to my sister.']] }
]
},
{
id: 'H',
unitId: 17,
title: 'Participle and infinitive clauses',
instruction: 'Choose the correct word or phrase. If both are correct, choose both.',
questions: [
{ number: 1, parts: ['After ', " three hamburgers, it's no wonder you feel sick!"], answers: [['eating', 'having eaten']], options: [['eating', 'having eaten']] },
{ number: 2, parts: ['', " exactly what to do, I was pretty confident I wouldn't embarrass myself."], answers: [['Having been told']], options: [['Having been told', 'Telling']] },
{ number: 3, parts: ['', ' the opportunity, would you like to spend a year abroad?'], answers: [['Given']], options: [['Given', 'Giving']] },
{ number: 4, parts: ['Philip was the only person ', ' the committee on track.'], answers: [['keeping', 'who was keeping']], options: [['keeping', 'who was keeping']] },
{ number: 5, parts: ['', ' an advert in the paper, we decided to write off for more information.'], answers: [['Having seen']], options: [['Having seen', 'Seen']] },
{ number: 6, parts: ['The zoo-keeper ', ' in the incident is now in a stable condition.'], answers: [['injured']], options: [['injured', 'having injured']] },
{ number: 7, parts: ['', ' a US citizen, Eleni knew it would be difficult to get a visa.'], answers: [['Not being']], options: [['Not being', 'Not to be']] },
{ number: 8, parts: ['After ', ' a statement, I was allowed to leave.'], answers: [['having made']], options: [['made', 'having made']] },
{ number: 9, parts: ['', ' how to use the software, Adrian quickly started designing his logo.'], answers: [['Shown', 'Having been shown']], options: [['Shown', 'Having been shown']] },
{ number: 10, parts: ['', ' from the top of the stairs, Jill and I could hear raised voices.'], answers: [['Listening']], options: [['Listening', 'Having listened']] },
{ number: 11, parts: ['', ' onto the property ladder is the aim of most young couples.'], answers: [['To get', 'Getting']], options: [['To get', 'Getting']] },
{ number: 12, parts: ['I was told that I was ', ' sure that the press would be there.'], answers: [['to make']], options: [['to make', 'making']] }
]
},
{
id: 'I',
unitId: 17,
title: 'Participle and infinitive clauses',
instruction: 'Write the verb in brackets in the correct form. Write only one or two words in each gap.',
questions: [
{ number: 1, parts: ["I'd love to get some work experience in an office, ", ' (give) the chance.'], answers: [['given']] },
{ number: 2, parts: ['After ', " (get) so bad a school report, you can't blame your parents for being angry."], answers: [['getting', 'having got']] },
{ number: 3, parts: ['The three men ', ' (arrest) have not been named.'], answers: [['arrested']] },
{ number: 4, parts: ['We were only given a room with a balcony after ', ' (complain) to the manager.'], answers: [['complaining', 'having complained']] },
{ number: 5, parts: ['', ' (see) Arctic Monkeys play live before, Josh was desperate to get tickets to their next gig.'], answers: [['Having seen']] },
{ number: 6, parts: ['', ' (swim) along the seabed, the divers were shocked to find a sunken car.'], answers: [['Swimming']] },
{ number: 7, parts: ['', ' (apply) for the job, I forgot all about it until the letter came.'], answers: [['Having applied']] },
{ number: 8, parts: ["Is Bentley's the only department store ", ' (start) its sale on Boxing Day?'], answers: [['starting', 'to start']] },
{ number: 9, parts: ['', " (want) to create trouble, Dad didn't raise any objections."], answers: [['Not wanting']] },
{ number: 10, parts: ["It's Sophie's role ", ' (wait) at the entrance on Tuesday evening to welcome the guests.'], answers: [['to wait']] },
{ number: 11, parts: ['', ' (shoot) in the arm, the man ran bleeding into the undergrowth.'], answers: [['Shot']] },
{ number: 12, parts: ['', ' (make) mistakes is only human!'], answers: [['To make', 'Making']] }
]
},
{
id: 'J',
unitId: 17,
title: 'Concession clauses: Out-of-body experiences',
instruction: 'Choose the correct answer.',
questions: [
{ number: 1, parts: ['', ' most scientists dismiss tales of out-of-body experiences on the operating table as dreams and delusions, there are some cases which seem to defy rational explanation.'], answers: [['While']], options: [['Despite', 'While', 'However', 'In spite']] },
{ number: 2, parts: ['There were serious complications, ', ', and her heart stopped beating.'], answers: [['however']], options: [['whereas', 'although', 'however', 'despite']] },
{ number: 3, parts: ['Try ', ' they might, the surgeon and anaesthetist were unable to resuscitate her.'], answers: [['as']], options: [['as', 'for', 'with', 'so']] },
{ number: 4, parts: ['', ' having been clinically dead, Margaret suffered no brain damage and no adverse side effects.'], answers: [['Despite']], options: [['However', 'Whereas', 'Although', 'Despite']] },
{ number: 5, parts: ["The story doesn't stop there, ", '.'], answers: [['though']], options: [['even if', 'even though', 'although', 'though']] },
{ number: 6, parts: ['And ', ' her never having been conscious in that room at any time, she described the room and the resuscitation attempt in great detail.'], answers: [['in spite of']], options: [['in spite of', 'although', 'however', 'while']] },
{ number: 7, parts: ['She said that ', ' three of the walls were bright white, one was dark grey.'], answers: [['whereas']], options: [['nevertheless', 'whereas', 'in spite of', 'however']] },
{ number: 8, parts: ['', " the anaesthetist didn't - and couldn't - believe her, she checked."], answers: [['Even though']], options: [['In spite', 'However', 'Even though', 'Despite']] },
{ number: 9, parts: ['', ' as they tried, no one at the hospital could explain how Margaret could have known about the book.'], answers: [['Much']], options: [['Most', 'More', 'Much', 'Many']] },
{ number: 10, parts: ['Even ', " one does not believe in a 'soul' or in life after death, it is difficult to explain what happened in that operating theatre when Margaret Frobisher's heart stopped beating."], answers: [['if']], options: [['so', 'if', 'though', 'that']] }
]
},
{
id: 'K',
unitId: 17,
title: 'Concession clauses: key word transformations',
instruction: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words.',
questions: [
{ number: 1, parts: ['Even (he) ', ' for it everywhere, Donald never found his contact lens.'], answers: [['though he had looked', 'though he looked']] },
{ number: 2, parts: ["The stadium won't be ready for the Olympics (even) ", ' building tomorrow.'], answers: [['even if they start']] },
{ number: 3, parts: ['The BBC is still broadcasting (spite) ', ' the electricians are on strike.'], answers: [['in spite of the fact that', 'in spite of the fact']] },
{ number: 4, parts: ['We were still able to get into the club in (given) ', ' an invitation.'], answers: [['spite of our not having been given', 'spite of not having been given', 'spite of our not being given', 'spite of not being given']] },
{ number: 5, parts: ['Try (might) ', ", Dom couldn't finish the crossword."], answers: [['as he might']] },
{ number: 6, parts: ['However (might) ', ", Sarah wasn't able to get the audience to pay attention."], answers: [['loudly she might have shouted']] },
{ number: 7, parts: ['Much (as) ', ", I couldn't persuade Tim to come with us."], answers: [['as I begged him to', 'as I begged him']] },
{ number: 8, parts: ['Late (though) ', ", we didn't think for a second we wouldn't make it on time."], answers: [['though we were']] }
]
},
{
id: 'L',
unitId: 17,
title: 'Clauses review',
instruction: 'Choose the correct answer.',
questions: [
{ number: 1, parts: ['More than 80 people came to the exhibition, many of ', ' children had pictures on the walls.'], answers: [['whose']], options: [['who', 'whom', 'whose', 'which']] },
{ number: 2, parts: ['The man ', ' to safety was in his forties.'], answers: [['lifted']], options: [['who was lifting', 'lifting', 'lifted', 'having been lifted']] },
{ number: 3, parts: ['Who was the receptionist ', ' the phone at the time?'], answers: [['answering']], options: [['answering', 'was answering', 'having answered', 'to answer']] },
{ number: 4, parts: ['', ' a scholarship, I entered the frightening and unknown territory of private education.'], answers: [['Having been awarded']], options: [['To award', 'To be awarded', 'Having awarded', 'Having been awarded']] },
{ number: 5, parts: ['', " half a chance, I'd be there in a flash!"], answers: [['Given']], options: [['Giving', 'Given', 'Being given', 'To be given']] },
{ number: 6, parts: ['', " quickly we ran, we just couldn't catch up with the van."], answers: [['However']], options: [['Although', 'Even', 'Much', 'However']] }
]
},
{
id: 'M',
unitId: 17,
title: 'Broken bones',
instruction: 'Write one word in each gap.',
questions: [
{
number: 1,
parts: [
"Most of us will suffer from a 'fracture', ",
' is the medical term for a broken bone, at some point in our lives. A patient ',
" arm, let's say, is suspected of being broken will first be given an X-ray. ",
' determined the extent of the fracture, the orthopaedic surgeon will decide on the most effective treatment. For a fracture ',
' manipulation is required, ',
' may involve the patient being given a general anaesthetic while the bone is essentially re-broken. Patients ',
" have more serious fractures may require 'fracture fixation', ",
' which pins and rods are connected to the bone to strengthen it. ',
', for simple fractures, a cast - often ',
' out of plaster of Paris or fibreglass - is all that is required.\n',
' a broken upper leg can take anything up to twelve weeks to heal, a broken toe can heal in just three weeks.\nTheir plaster cast ',
' off, the patient will almost certainly require physiotherapy to exercise a limb ',
' has been inactive for several weeks.\n',
' advances in medical technology, ',
" get a frail elderly person's fracture to heal is still remarkably difficult. Even ",
' the fracture has been treated in the right way, it is quite possible that the bone will never fully heal.'
],
answers: [
['which'], ['whose'], ['Having'], ['where'], ['this'], ['who', 'that'], ['in'],
['However'], ['made'], ['Although', 'Though', 'Whereas'], ['taken'],
['which', 'that'], ['Despite'], ['to'], ['if', 'when']
]
}
]
}
];

export const unitEighteenExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    unitId: 18,
    title: 'Topic vocabulary: Reactions',
    instruction: 'Complete using the words in the boxes in the correct form.',
    wordBox: [
      'behaviour', 'manners',
      'avoid', 'prevent',
      'chuckle', 'giggle',
      'grin', 'smirk',
      'glance', 'glimpse',
      'peep', 'peer',
      'cross', 'fed up',
      'manoeuvre', 'tactic'
    ],
    questions: [
      { number: 1, parts: ["It's not very good ", ' to eat with your mouth open, Timothy.'], answers: [['manners']] },
      { number: 2, parts: ['I expect very good ', " from all of you while I'm out of the classroom."], answers: [['behaviour']] },
      { number: 3, parts: ["There's no way you can ", ' me from seeing my friends!'], answers: [['prevent']] },
      { number: 4, parts: ["Let's ", " the city centre as there'll be loads of traffic."], answers: [['avoid']] },
      { number: 5, parts: ['The girls were ', ' excitedly in their room - it was extremely irritating!'], answers: [['giggling']] },
      { number: 6, parts: ['He occasionally ', ' quietly to himself as he read the letter.'], answers: [['chuckled']] },
      { number: 7, parts: ['The boys were ', ' after the film so I think they had a good time.'], answers: [['grinning']] },
      { number: 8, parts: ['Stop ', " in such an unpleasant way. Just because you won the game doesn't make you better than me, you know!"], answers: [['smirking']] },
      { number: 9, parts: ['I ', " something through the window but I've got no idea what it was."], answers: [['glimpsed']] },
      { number: 10, parts: ['Terry ', ' at the clock and realised he was late.'], answers: [['glanced']] },
      { number: 11, parts: ['The window was so dirty we had to ', ' through it to see inside.'], answers: [['peer']] },
      { number: 12, parts: ["Don't ", "! Keep your eyes closed or it'll ruin the surprise."], answers: [['peep']] },
      { number: 13, parts: ["I'm ", ". It's boring just sitting here. Let's go out for a walk."], answers: [['fed up']] },
      { number: 14, parts: ['Mr Jenkins was so ', ' when he heard the news he went red with anger.'], answers: [['cross']] },
      { number: 15, parts: ['Reversing round a corner is a difficult ', '.'], answers: [['manoeuvre']] },
      { number: 16, parts: ["I'm going to have to use some underhand ", ' to get Adam to agree.'], answers: [['tactics']] }
    ]
  },
  {
    id: 'B',
    unitId: 18,
    title: "Topic vocabulary: Reactions (A young child's emotions)",
    instruction: 'Each of the bold words, except one, is in the wrong place. Write the correct words in each gap (or write OK if it is already correct).',
    questions: [
      {
        number: 1,
        parts: [
          "Young children express their emotions much more openly than most adults. In the playground, they often (neglect) ",
          " and ridicule the 'weaker' children and 'social misfits'. When they're successful at something, they (grimace) ",
          ' openly. When they\'re taking horrible medicine, they (conduct) ',
          " in a way that adults rarely do. When they're (impatient) ",
          ', you know about it immediately. The (gloat) ',
          " a young child can experience during a nightmare often seems far more extreme than the fear adults have. Children's emotions are often very unpredictable too. When something angers them, they (mock) ",
          ' instantly. A young child can go from peaceful (terror) ',
          " to extreme anger and back again in just a couple of minutes. If you give a small child a pet, they'll love it for a day or two, but then they might completely (snap) ",
          ' it. All of this is for many reasons. Firstly, humans have to learn how to (contentment) ',
          ' and control their emotions. And that takes time. Secondly, humans have to learn how to (handle) ',
          ' themselves within a society. That also takes many years. Indeed, many adults still have a lot to learn when it comes to that.'
        ],
        answers: [
          ['mock'], ['gloat'], ['grimace'], ['OK'], ['terror'],
          ['snap'], ['contentment'], ['neglect'], ['handle'], ['conduct']
        ]
      }
    ]
  },
  {
    id: 'C',
    unitId: 18,
    title: 'Topic vocabulary: Reactions',
    instruction: 'Complete using the words in the boxes in the correct form.',
    wordBox: [
      'acknowledge', 'agonise', 'comfort', 'disgust', 'moan', 'rejoice', 'resent',
      'disillusioned', 'glum', 'resolute',
      'apathy', 'consequence', 'dignity', 'inertia'
    ],
    questions: [
      { number: 1, parts: ["I've been ", " over this decision for ages but I've definitely made my mind up now."], answers: [['agonising']] },
      { number: 2, parts: ['The whole country was out on the streets ', ' when they won the World Cup.'], answers: [['rejoicing']] },
      { number: 3, parts: ['Do you at least ', ' that not everyone thinks about things the same way you do?'], answers: [['acknowledge']] },
      { number: 4, parts: ['I was in such pain I just lay in bed ', '.'], answers: [['moaning']] },
      { number: 5, parts: ["I'm ", " with the way this company's dealt with this problem. I'm going to complain."], answers: [['disgusted']] },
      { number: 6, parts: ['I do ', " the fact that Josh was promoted and I wasn't, yes."], answers: [['resent']] },
      { number: 7, parts: ['We all need to ', ' Joyce at such a difficult time for her.'], answers: [['comfort']] },
      { number: 8, parts: ["Monica's absolutely determined to get this law changed. I've never seen her so ", ' about anything before.'], answers: [['resolute']] },
      { number: 9, parts: ['You look a bit ', ' today. Is anything the matter?'], answers: [['glum']] },
      { number: 10, parts: ["Joe said he's so ", " with his job he's thinking of quitting."], answers: [['disillusioned']] },
      { number: 11, parts: ['No one knows exactly what the ', ' of this action will be.'], answers: [['consequences']] },
      { number: 12, parts: ['I thought the Prime Minister handled her resignation speech with great ', '.'], answers: [['dignity']] },
      { number: 13, parts: ['The bureaucratic system in this country is suffering from extreme ', '. Nothing ever gets done!'], answers: [['inertia']] },
      { number: 14, parts: ["There's just so much ", " from young people these days when it comes to politics. They're just not interested."], answers: [['apathy']] }
    ]
  },
  {
    id: 'D',
    unitId: 18,
    title: 'Topic vocabulary: Health',
    instruction: 'Choose the correct word or phrase.',
    questions: [
      { number: 1, parts: ["If he's been bitten by a snake, we'll have to get him to a hospital to get the ", ' immediately.'], answers: [['antidote']], options: [['vaccine', 'antidote']] },
      { number: 2, parts: ['They give most children a number of ', ' these days to stop them getting serious diseases.'], answers: [['vaccines']], options: [['vaccines', 'antidotes']] },
      { number: 3, parts: ['Have you been ', ' against tetanus?'], answers: [['inoculated']], options: [['inoculated', 'injected']] },
      { number: 4, parts: ['The symptoms are small red spots and slight skin ', '.'], answers: [['irritation']], options: [['irritation', 'annoyance']] },
      { number: 5, parts: ["I've cut my finger. Have you got ", '?'], answers: [['a plaster']], options: [['plaster', 'a plaster']] },
      { number: 6, parts: ["Richie's broken his leg and it's in ", '.'], answers: [['plaster']], options: [['plaster', 'a plaster']] },
      { number: 7, parts: ['My ', " is that you're suffering from stress."], answers: [['diagnosis']], options: [['diagnosis', 'prognosis']] },
      { number: 8, parts: ['If you carry on taking the tablets, then your ', ' is excellent.'], answers: [['prognosis']], options: [['diagnosis', 'prognosis']] },
      { number: 9, parts: ['', " medicine's all about not getting diseases rather than curing them after you've got them, isn't it?"], answers: [['Preventive']], options: [['Preventive', 'Protective']] },
      { number: 10, parts: ['My grandmother spent the last two years of her life in a nursing ', '.'], answers: [['home']], options: [['house', 'home']] }
    ]
  },
  {
    id: 'E',
    unitId: 18,
    title: 'Topic vocabulary: Health (Diary entry)',
    instruction: 'Complete using the words in the box in the correct form.',
    wordBox: ['administer', 'admit', 'agony', 'consultant', 'diagnosis', 'leave', 'numb', 'paralysis', 'prescribe', 'side', 'syringe', 'ward'],
    questions: [
      {
        number: 1,
        parts: [
          "26th August\nI haven't written anything for about two weeks, so it's time to catch up on what's been going on. So, the morning after my last entry, I woke up in ",
          ". I've never felt so bad in my life. In fact, it felt like I'd been shot in the stomach! I immediately arranged to go on sick ",
          ' from work. Then I called the doctor, who came that morning and ',
          ' some medicine for me. I took it for about two days but my stomach was still really bad, so I called the doctor again. He said I\'d have to be ',
          " to hospital! Well, I've never been in hospital in my life. They took me in an ambulance and put me in a ",
          ' with about 20 other people. In the afternoon, the ',
          ' came to see me. Her ',
          " was that I'd got some kind of ulcer caused by bacteria. She said they'd have to ",
          ' antibiotics via an intravenous drip. So, basically, for the next six days I had a big ',
          " sticking into my arm pumping in antibiotics on a regular basis. It wasn't much fun, but I did start to feel better pretty quickly. One problem, though, was that the drugs did produce one strange ",
          ' effect. Apparently that sometimes happens. The whole of the left side of my face went ',
". It wasn't exactly ",
" because I could still move my cheek - I just couldn't feel it. Very weird! Anyway, I'm home now, and feeling fine. And back to work tomorrow, thank goodness."
],
answers: [
['agony'], ['leave'], ['prescribed'], ['admitted'], ['ward'], ['consultant'],
['diagnosis'], ['administer'], ['syringe'], ['side'], ['numb'], ['paralysis']
]
}
]
},
{
id: 'F',
unitId: 18,
title: 'Phrasal verbs',
instruction: 'Choose the correct word.',
questions: [
{ number: 1, parts: ["I don't know how I'm going to summon ", ' the courage to tell Dad.'], answers: [['up']], options: [['up', 'back']] },
{ number: 2, parts: ["It really got me ", " when the doctor said I'd have to be off work for eight weeks."], answers: [['down']], options: [['out', 'down']] },
{ number: 3, parts: ["Grandpa says his leg's playing ", " again so he's not going to come for a walk with us."], answers: [['up']], options: [['up', 'around']] },
{ number: 4, parts: ['Did it take June a long time to get ', ' her glandular fever?'], answers: [['over']], options: [['over', 'by']] },
{ number: 5, parts: ['We all creased ', ' when Nick walked in wearing a skirt.'], answers: [['up']], options: [['up', 'off']] },
{ number: 6, parts: ['Antony says he felt a little dizzy when he came ', ' from the anaesthetic.'], answers: [['round']], options: [['round', 'back']] },
{ number: 7, parts: ['These carrots have shrivelled ', " a bit so I think I'll throw them out."], answers: [['up']], options: [['up', 'down']] },
{ number: 8, parts: ["Jerry's come ", ' in spots all over his face.'], answers: [['out']], options: [['out', 'over']] }
]
},
{
id: 'G',
unitId: 18,
title: 'Phrasal verbs',
instruction: 'Write a phrasal verb from the box in the correct form in each gap.',
wordBox: ['black out', 'cotton on', 'follow up', 'go down', 'lash out', 'pass away', 'pull through', 'ward off'],
questions: [
{ number: 1, parts: ["Mr Deacon next door had a very serious operation. Apparently, it's a miracle he ", '.'], answers: [['pulled through']] },
{ number: 2, parts: ["The first comedian didn't ", ' well with the audience at all and he was booed off the stage.'], answers: [['go down']] },
{ number: 3, parts: ['It took Terry a while to ', ' to the fact I was joking.'], answers: [['cotton on']] },
{ number: 4, parts: ["There's no point ", " at Dr Barker. She's not responsible for what's happened."], answers: [['lashing out']] },
{ number: 5, parts: ["I don't know what happened. I was just sitting at my desk and I suddenly ", ' for a few minutes.'], answers: [['blacked out']] },
{ number: 6, parts: ['In some cultures, they wear jewellery to ', ' evil spirits.'], answers: [['ward off']] },
{ number: 7, parts: ['The researchers ', ' a number of patients who had taken the drug to determine what side effects they had experienced.'], answers: [['followed up']] },
{ number: 8, parts: ["Susie, I'm afraid I've got some bad news. Your grandmother ", ' peacefully during the night.'], answers: [['passed away']] }
]
},
{
id: 'H',
unitId: 18,
title: 'Phrasal verbs with through',
instruction: "Choose Yes if the phrasal verb contains the idea of 'completing something successfully'; otherwise choose No.",
questions: [
{ number: 1, parts: ["It's going to be tough but we'll muddle through somehow, you'll see. ", ''], answers: [['Yes']], options: [yesNo] },
{ number: 2, parts: ['I was going through my wardrobe when I found these jeans. Would you like them? ', ''], answers: [['No']], options: [yesNo] },
{ number: 3, parts: ["I'm determined to see this through to the bitter end. ", ''], answers: [['Yes']], options: [yesNo] },
{ number: 4, parts: ['Eliot did well in physics, but he only just scraped through his chemistry exam. ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 5, parts: ['Truth and justice will win through in the end - they always do. ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 6, parts: ["The government's totally committed to carrying through these reforms. ", ''], answers: [['Yes']], options: [yesNo] }
]
},
{
id: 'I',
unitId: 18,
title: 'Phrases, patterns and collocations',
instruction: 'Write one word in each gap.',
questions: [
{ number: 1, parts: ['I want you kids to be ', ' your best behaviour tonight.'], answers: [['on']] },
{ number: 2, parts: ["My father's been ", ' poor health for a while now.'], answers: [['in']] },
{ number: 3, parts: ["You shouldn't have reacted ", ' getting so annoyed.'], answers: [['by']] },
{ number: 4, parts: ['We were always polite ', ' our teachers when I was at school.'], answers: [['to']] },
{ number: 5, parts: ["I don't think I'll ever be rich, but you live ", " hope, don't you?"], answers: [['in']] },
{ number: 6, parts: ['I hope I live to the grand old age ', ' 94!'], answers: [['of']] },
{ number: 7, parts: ['I am writing ', ' response to your letter of 15th July.'], answers: [['in']] },
{ number: 8, parts: ['So ', " effect what you're saying is that I'm being made redundant."], answers: [['in']] },
{ number: 9, parts: ['Sue left and, ', ' a consequence, I was promoted to Senior Nurse!'], answers: [['as']] },
{ number: 10, parts: ['I know I did the wrong thing, but I was acting ', ' good faith, you know.'], answers: [['in']] }
]
},
{
id: 'J',
unitId: 18,
title: 'Phrases, patterns and collocations',
instruction: 'Complete using the words in the box in the correct form.',
wordBox: ['adverse', 'aggressive', 'alternative', 'dire', 'health', 'polite', 'quality'],
questions: [
{ number: 1, parts: ['Do you know what time the ', ' centre opens in the morning?'], answers: [['health']] },
{ number: 2, parts: ['What we do here is ensure that our terminally ill patients get the best ', ' of life possible.'], answers: [['quality']] },
{ number: 3, parts: ["Of course hitting someone's an example of ", ' behaviour!'], answers: [['aggressive']] },
{ number: 4, parts: ["There shouldn't be any ", ' effects with these pills, but if there are, let me know.'], answers: [['adverse']] },
{ number: 5, parts: ['I hate the thought of standing there making ', ' conversation to strangers.'], answers: [['polite']] },
{ number: 6, parts: ['The consequences could be ', " if you don't start eating properly and get some exercise."], answers: [['dire']] },
{ number: 7, parts: ["Some doctors think there's a lot to be said for ", ' medicine.'], answers: [['alternative']] }
]
},
{
id: 'K',
unitId: 18,
title: 'Phrases, patterns and collocations',
instruction: 'For each question, write one word which can be used in all three sentences.',
questions: [
{ number: 1, parts: ["I used to be ___ against plastic surgery but I've changed my mind now. There was ___ silence throughout the room, and I realised my joke had offended people. If you do that again you'll be in ___ trouble! Word: ", ''], answers: [['dead']] },
{ number: 2, parts: ["If you treat people well, they usually respond in ___. I didn't say anything of the ___! That was very ___ of you to help Mrs Taylor carry her shopping. Word: ", ''], answers: [['kind']] },
{ number: 3, parts: ["The play really came to ___ in the second act. Darren asked me to go with him to the prom; 'Not on your ___!', I told him. You know you're putting your ___ at risk by smoking, don't you? Word: ", ''], answers: [['life']] },
{ number: 4, parts: ["The way Hilary treats Carl just makes me ___. We were worried ___ because we had no idea where Karen was and she hadn't called. I'm not feeling well at all, so I think I'm going to call in ___ this morning. Word: ", ''], answers: [['sick']] },
{ number: 5, parts: ["We only went there for a ___; we didn't know it would cause so much trouble. You always have to have the last ___, don't you? It's a ___ a minute when Daniel's around. Word: ", ''], answers: [['laugh']] },
{ number: 6, parts: ["She only said that for ___; she doesn't really believe it. The new regulations will come into ___ from midnight tonight. Caffeine has very little ___ on me, so I can sleep at night however many cups of coffee I drink. Word: ", ''], answers: [['effect']] }
]
},
{
id: 'L',
unitId: 18,
title: 'Phrases, patterns and collocations: key word transformations',
instruction: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words.',
questions: [
{ number: 1, parts: ['Spending two weeks in hospital was (cry) ', ' lying on the beach!'], answers: [['a far cry from']] },
{ number: 2, parts: ['You should (benefits) ', ' soon.'], answers: [['feel the benefits of the medicine', 'see the benefits of the medicine']] },
{ number: 3, parts: ['I (acting) ', ', sir.'], answers: [["was just acting on the sergeant's orders", "was acting on the sergeant's orders"]] },
{ number: 4, parts: ['I had no idea I (cause) ', ' by suggesting that.'], answers: [['would cause such a violent reaction']] },
{ number: 5, parts: ["Don't you think you should (treat) ", ', Edward?'], answers: [['treat them with a bit more respect']] },
{ number: 6, parts: ['Alan (taken) ', ' food poisoning.'], answers: [['has been taken ill with']] }
]
},
{
id: 'M',
unitId: 18,
title: 'Idioms',
instruction: 'Each of the bold words is incorrect. Rewrite them correctly.',
questions: [
{ number: 1, parts: ["Thanks for inviting me but I think I'll give it a (leave) ", ", if you don't mind."], answers: [['miss']] },
{ number: 2, parts: ['I could have (hit) ', " myself when I invited Claudia to the beach. I'd completely forgotten she's got to stay indoors until she's completely recovered."], answers: [['kicked']] },
{ number: 3, parts: ["I'm going to be in plaster for six months so I'm just going to have to (smile) ", ' and bear it.'], answers: [['grin']] },
{ number: 4, parts: ['(Hold) ', " your hair on! It's nothing to get upset about, you know."], answers: [['Keep']] },
{ number: 5, parts: ['I know you were angry but there was no need to fly off the (doorknob) ', ' like that.'], answers: [['handle']] },
{ number: 6, parts: ['After working all day, I like to go out with some friends just to let off (air) ', '.'], answers: [['steam']] },
{ number: 7, parts: ['The best way to deal with bullies is to give them a taste of their own (tablets) ', '.'], answers: [['medicine']] },
{ number: 8, parts: ["They're closing the local hospital and everyone round here is up in (guns) ", ' about it.'], answers: [['arms']] },
{ number: 9, parts: ["Fiona's offered to help you. Don't ask why - never look a gift (cow) ", ' in the mouth.'], answers: [['horse']] },
{ number: 10, parts: ["You could complain to her boss, but it's probably better just to let sleeping (cats) ", ' lie.'], answers: [['dogs']] },
{ number: 11, parts: ["What's done is done - there's no point crying over spilt (liquid) ", '.'], answers: [['milk']] },
{ number: 12, parts: ['It was hard to keep a (plain) ', ' face when Jenny told me how Toby had broken his arm.'], answers: [['straight']] }
]
},
{
id: 'N',
unitId: 18,
title: 'Word formation',
instruction: 'Complete the sentences by changing the form of the word in capitals.',
questions: [
{ number: 1, parts: ['Colin became a political ', ' when he was at university. (ACT)'], answers: [['activist']] },
{ number: 2, parts: ["Do you know the ", " of the word 'handsome'? (DERIVE)"], answers: [['derivation']] },
{ number: 3, parts: ["I know it's a bit annoying but there's no need to ", ' to such an extent. (ACT)'], answers: [['overreact']] },
{ number: 4, parts: ['Have you got any ', ' in your toes at all, Mr Babcock? (SENSE)'], answers: [['sensation']] },
{ number: 5, parts: ['We stood there watching the ', ' drama with shock on our faces. (FOLD)'], answers: [['unfolding']] },
{ number: 6, parts: ['In medicine, ', ' is always better than cure. (PREVENT)'], answers: [['prevention']] },
{ number: 7, parts: ['If one of our nurses has acted ', ', you can be assured we will take the strongest possible action against him or her. (NEGLECT)'], answers: [['negligently']] },
{ number: 8, parts: ["It's ", " even trying. We'll never get to the hospital in time. (FRUIT)"], answers: [['fruitless']] },
{ number: 9, parts: ['We were all jumping around ', ' in the corridor, desperately waiting to hear if it was a boy or a girl. (PATIENT)'], answers: [['impatiently']] },
{ number: 10, parts: ['Do you really think your plans are going to come to ', '? (FRUIT)'], answers: [['fruition']] },
{ number: 11, parts: ["By the angry looks on people's faces, I would say there was widespread ", " for the proposed changes to the health centre's opening times. (APPROVE)"], answers: [['disapproval']] },
{ number: 12, parts: ['I used to think I could change the world, but then ', ' set in when I reached my early thirties. (ILLUSION)'], answers: [['disillusionment']] },
{ number: 13, parts: ["I can't believe you forgot to get your wife a birthday present. You're so ", ' sometimes! (NEGLECT)'], answers: [['neglectful']] },
{ number: 14, parts: ["She told me she's not ", ' in the slightest for what she said. (REGRET)'], answers: [['regretful']] },
{ number: 15, parts: ['The whole incident was extremely ', '. (REGRET)'], answers: [['regrettable']] },
{ number: 16, parts: ["There's a lot of ", ' with the government at the moment. I think they might well get kicked out at the next election. (CONTENT)'], answers: [['discontent', 'discontentment']] },
{ number: 17, parts: ['As I told Rose how I felt she was completely ', ', so I had no idea at all what she was thinking. (RESPOND)'], answers: [['unresponsive']] }
]
},
{
id: 'O',
unitId: 18,
title: 'Word formation: Voluntary euthanasia',
instruction: 'Use the word given in capitals to form a word that fits each gap.',
questions: [
{
number: 1,
parts: [
'There are many moral issues which remain (RESOLVE) ',
" to this day. One of these is voluntary euthanasia. Let's say there is a patient who has a terminal disease. All possible treatments known to science are (EFFECT) ",
". There's no cure, and no hope. The patient's death from this disease at some point in the future is (AVOID) ",
". Most of us would say that, as long as the patient is fairly comfortable and pain-free, there's no moral issue. But what if the patient is in extreme agony? They cannot live (DEPEND) ",
' of machines and 24-hour care. What if the patient (RESOLVE) ',
' and continually asks for their life to be brought to an end by doctors? Should the doctors refuse? At present, in most countries, there are laws against voluntary euthanasia. But from a moral point of view, we have to (KNOW) ',
' that there is a problem. Do the doctors really have the right to be (SENSE) ',
" to the patient's wishes?\nOn the other hand, opponents of voluntary euthanasia argue that scientific (KNOW) ",
' is increasing all the time. An incurable disease one day may be curable the next. They also argue that if the law was changed, the (RESULT) ',
' situation would put doctors in a much worse position. They currently have no choice. Do we as a society have the right to expect doctors to (HAND) ',
' such a difficult and complex issue?'
],
answers: [
['unresolved'], ['ineffective'], ['unavoidable'], ['independently'], ['resolutely'],
['acknowledge'], ['insensitive'], ['knowledge'], ['resulting', 'resultant'], ['handle']
]
}
]
}
];