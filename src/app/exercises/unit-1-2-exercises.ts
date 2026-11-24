import type { ExerciseSection } from './exercises';

const yesNo = ['Yes', 'No'];

export const unitOneExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    unitId: 1,
    title: 'Present time: present simple or present continuous',
    instruction: 'Write the verb in brackets in the correct form, present simple or present continuous, in each gap.',
    questions: [
      { number: 1, parts: ['My brother ', ' (do) a degree at university so I ', " (see) him very often, unfortunately."], answers: [['is doing', "'s doing"], ["don't see", 'do not see']] },
      { number: 2, parts: ['Darren ', ' usually ', ' (get) home until about eight o\'clock.'], answers: [["doesn't", 'does not'], ['get']] },
      { number: 3, parts: ["I'm sorry to hear that your parents ", ' (get) divorced.'], answers: [['are getting']] },
      { number: 4, parts: ['You ', ' (go) to the end of the street and ', ' (turn) right.'], answers: [['go'], ['turn']] },
      { number: 5, parts: ['Why ', ' ice ', ' (float)?'], answers: [['does'], ['float']] },
      { number: 6, parts: ["It's lovely now the evenings ", " (get) longer, isn't it?"], answers: [['are getting']] },
      { number: 7, parts: ['My dad ', ' (eat) meat at all - he\'s a vegetarian.'], answers: [["doesn't eat", 'does not eat']] },
      { number: 8, parts: ['Actually, we ', ' (listen) to The Libertines at all - this is Pete Docherty\'s second band, Babyshambles.'], answers: [["aren't listening", "'re not listening", 'are not listening']] },
      { number: 9, parts: ['A man ', ' (walk) into a bar. Ouch! Not a good idea to walk into an iron bar!'], answers: [['walks']] },
      { number: 10, parts: ['', ' you ', ' (phone) me from your mobile? The line\'s not very good.'], answers: [['Are'], ['phoning']] },
      { number: 11, parts: ['', ' you often ', ' (order) things online?'], answers: [['Do'], ['order']] },
      { number: 12, parts: ["There's an Englishman, an Irishman and a Scotsman. They ", ' (walk) across the desert when one of them ', ' (spot) a camel in the distance ...'], answers: [['are walking', "'re walking"], ['spots']] },
      { number: 13, parts: ['Beckham ', ' (have) control of the ball ... It\'s Beckham ... And he ', ' (score)!'], answers: [['has'], ['scores']] },
      { number: 14, parts: ['WOMAN ', ' (give) €500 MILLION LOTTERY WIN TO CHARITY'], answers: [['GIVES', 'gives']] },
      { number: 15, parts: ['My dad ', ' (always / tell) jokes! They\'re usually rubbish, though.'], answers: [['is always telling', "'s always telling"]] },
      { number: 16, parts: ["'Phil ", " (wear) ties, does he?' 'Actually, he ", " (wear) a tie to work most days.'"], answers: [["doesn't wear", 'does not wear'], ['does wear', 'wears']] }
    ]
  },
  {
    id: 'B',
    unitId: 1,
    title: 'Present time expressions',
    instruction: 'Write one word in each gap.',
    questions: [
      { number: 1, parts: ['Why do you ', ' leave the light on when you go out of the room? You wait till you start paying the electricity bill!'], answers: [['always']] },
      { number: 2, parts: ['Fifteen teachers are teaching here full-time at ', '.'], answers: [['present']] },
      { number: 3, parts: ["My sister's revising for her GCSEs at the ", '.'], answers: [['moment']] },
      { number: 4, parts: ["I'm quite happy living at home for the time ", ", but I guess I'll have to get my own place eventually."], answers: [['being']] },
      { number: 5, parts: ["It's true that Ralph calls us quite ", ", but most students only call their parents when they need something, don't they?"], answers: [['rarely']] },
      { number: 6, parts: ['We go to the cinema ', " now and then, but only if there's something good on."], answers: [['every']] },
      { number: 7, parts: ["I'm alone in my study bedroom reading ", ' of the time.'], answers: [['most', 'much', 'some']] },
      { number: 8, parts: ['Tim ', " goes out to play until he's done all his homework. I just don't allow it!"], answers: [['never']] },
      { number: 9, parts: ['I see Lucinda from ', ' to time, but not on a regular basis.'], answers: [['time']] },
      { number: 10, parts: ["I'm sitting in the garden ", ' now talking to you on my mobile.'], answers: [['right']] },
      { number: 11, parts: ["That's the last ", " we're inviting Dave to one of our parties!"], answers: [['time']] },
      { number: 12, parts: ['Do young people these ', ' have more free time than they did in the past?'], answers: [['days']] },
      { number: 13, parts: ['My mum fills up with petrol ', ' she goes to the supermarket.'], answers: [['whenever', 'when', 'if']] },
      { number: 14, parts: ["I'm staying in ", ' now, but I might go out a bit later on.'], answers: [['for']] },
      { number: 15, parts: ['', ' is the last time I ever order from that pizzeria. It was disgusting!'], answers: [['It', 'That']] }
    ]
  },
  {
    id: 'C',
    unitId: 1,
    title: 'Present simple and present continuous in context',
    instruction: 'Write a verb from the box in the correct form, present simple or present continuous, in each gap. Use the words in brackets with the verb. Use contractions where possible.',
    wordBox: ['contact', 'do', 'drive', 'focus', 'go', 'happen', 'have', 'like', 'look', 'need', 'say', 'sound', 'take', 'think', 'try', 'work'],
    questions: [
      {
        number: 1,
        parts: [
          "Sandy: Hey, George! How's things? What (you) ",
          '?\nGeorge: Hi, Sandy! Fine! (I / just) ',
          ' some research for that history project.\nSandy: (how / it) ',
          '?\nGeorge: Yeah, (it / well) ',
          ', thanks. The website (I) ',
          " at now is very good. It's got loads of useful information.\nSandy: Great! Listen, the reason (I) ",
          ' you is that my (mum) ',
          ' past the library every morning on the way to work, and (she) ',
          ' she can give you a lift tomorrow morning, if you like.\nGeorge: Wow, that\'s really kind of her, but actually (it) ',
          " long to walk there from here, so (she) ",
          ' to worry. Can you thank her for me, though?\nSandy: Sure!\nGeorge: (what) ',
          ' with your project? (you) ',
          ' a title yet?\nSandy: No! (I / even) ',
          ' a topic yet! (I / really) ',
          ' on it at the moment, though. (I) ',
          ' to finish my physics project first.\nGeorge: Why (you) ',
          " something on the Second World War? That's interesting.\nSandy: No, (I) ",
          " wars! I'd rather do something (that) ",
          ' more on social history.\nGeorge: Like what?\nSandy: Like the role of women in the Industrial Revolution.\nGeorge: (that) ',
          ' good.\nSandy: (you) ',
          " so? Okay. Maybe I'll do that, then."
        ],
        answers: [
          ['are you doing'], ["I'm just doing", 'I am just doing'], ["How's it going", 'How is it going'],
          ["it's going well", 'it is going well'], ["I'm looking", 'I am looking'], ["I'm contacting", 'I am contacting'],
          ['mum drives'], ['she says'], ["it doesn't take", 'it does not take'], ["she doesn't need", 'she does not need'],
          ["What's happening", 'What is happening'], ['Do you have'], ["I don't even have", 'I do not even have'],
          ["I'm not really working", 'I am not really working'], ["I'm trying", 'I am trying'], ["don't you do", 'do you not do'],
          ["I don't like", 'I do not like'], ['that focuses'], ['That sounds'], ['Do you think']
        ]
      }
    ]
  },
  {
    id: 'D',
    unitId: 1,
    title: 'Stative and dynamic verbs',
    instruction: 'Choose the correct word or phrase.',
    questions: [
      { number: 1, parts: ["Could you explain what 'antidisestablishmentarianism' ", ', please?'], answers: [['means']], options: [['means', 'is meaning']] },
      { number: 2, parts: ['Each song ', " 50 cents at the moment because they're on special offer."], answers: [['only costs']], options: [['only costs', 'is only costing']] },
      { number: 3, parts: ['It ', " which of the books we've studied this term you do your essay on."], answers: [["doesn't matter"]], options: [["doesn't matter", "isn't mattering"]] },
      { number: 4, parts: ["It's only a quick call as ", ' from my mobile.'], answers: [["I'm ringing"]], options: [['I ring', "I'm ringing"]] },
      { number: 5, parts: ['I think ', " that woman over there. Wasn't she on that quiz show last night?"], answers: [['I recognise']], options: [['I recognise', "I'm recognising"]] },
      { number: 6, parts: ['Excuse me, ', " walnuts? I'm allergic to them."], answers: [['does the nut cake contain']], options: [['does the nut cake contain', 'is the nut cake containing']] },
      { number: 7, parts: ['I ', ' that capital punishment deters people from committing murder.'], answers: [["really don't agree"]], options: [["really don't agree", "I'm really not agreeing"]] },
      { number: 8, parts: ['Why ', ' football, Mark? I thought you had a match this afternoon.'], answers: [["aren't you playing"]], options: [["don't you play", "aren't you playing"]] },
      { number: 9, parts: ['Stay out of this, Simon, it ', ' you at all.'], answers: [["doesn't concern"]], options: [["doesn't concern", "isn't concerning"]] },
      { number: 10, parts: ['You really ', ' your father when you frown like that.'], answers: [['resemble']], options: [['resemble', 'are resembling']] },
      { number: 11, parts: ['If ', ' TV, turn it off!'], answers: [["you're not watching"]], options: [["you're not watching", "you don't watch"]] },
      { number: 12, parts: ['The number you have dialled ', '. Please try again.'], answers: [['does not exist']], options: [['does not exist', 'is not existing']] },
      { number: 13, parts: ['I want everyone to do exercise H, and that ', ' you too, Anne!'], answers: [['includes']], options: [['includes', 'is including']] },
{ number: 14, parts: ['', " the living room repainted so it's probably best if we go into the kitchen."], answers: [["We're having"]], options: [["We're having", 'We have']] },
{ number: 15, parts: ['Right now, my job ', ' a huge amount of foreign travel.'], answers: [['involves']], options: [['involves', 'is involving']] }
]
},
{
id: 'E',
unitId: 1,
title: 'Stative verbs with different meanings',
instruction: 'Write a verb from the box in the correct form, present simple or present continuous, in each pair of sentences.',
wordBox: ['appeal', 'be', 'consider', 'depend', 'feel', 'have', 'look', 'see', 'smell', 'think'],
questions: [
{ number: 1, parts: ['A I ', ' for a book on fly fishing. Do you have any in stock?\nB Stan ', " like he's in a bad mood this morning."], answers: [['am looking', "'m looking"], ['looks']] },
{ number: 2, parts: ['A How ', ' you ', ' about inviting Jackie to come with us on Saturday?\nB Britney ', " very well, so I've told her she can go home."], answers: [['do'], ['feel'], ["doesn't feel", "isn't feeling", 'does not feel', 'is not feeling']] },
{ number: 3, parts: ['A Jan and I ', ' buying a new flat.\nB Why ', ' you ', ' Ray Davis to be a better songwriter than Paul McCartney?'], answers: [['are considering', "'re considering"], ['do'], ['consider']] },
{ number: 4, parts: ['A We ', ' a barbecue right now, so can I call you back this evening?\nB ', ' the Deacons ', ' a swimming pool?'], answers: [['are having', "'re having"], ['Do'], ['have']] },
{ number: 5, parts: ['A The idea of going to a Greek island really ', ' to me.\nB Police ', ' for witnesses to the attack.'], answers: [['appeals'], ['are appealing', "'re appealing"]] },
{ number: 6, parts: ['A This chicken ', " very fresh. I think I'll throw it away just to be on the safe side.\nB Why ", ' you ', ' that chicken, Mum?'], answers: [["doesn't smell", 'does not smell'], ['are'], ['smelling']] },
{ number: 7, parts: ['A I ', " on you, James. Don't let me down!\nB Whether we get there by six ", ' on the traffic.'], answers: [['am depending', "'m depending"], ['depends']] },
{ number: 8, parts: ['A Julian ', ' a bit busy at the moment, actually.\nB Guys, you ', " too noisy! Can't you keep it down, please?"], answers: [['is', "'s"], ['are being', 'are', "'re being", "'re"]] },
{ number: 9, parts: ['A ', ' you ', ' Bob would like a CD for his birthday?\nB Oliver said he ', ' about moving out of the city.'], answers: [['Do'], ['think'], ['is thinking', "'s thinking"]] },
{ number: 10, parts: ['A I hear that Doug ', ' quite a lot of Katy these days. Is that true?\nB I ', ' Manchester United lost again.'], answers: [['is seeing', "'s seeing"], ['see']] }
]
},
{
id: 'F',
unitId: 1,
title: 'Present perfect',
instruction: 'Each bold word or phrase is incorrect. Rewrite it correctly.',
questions: [
{ number: 1, parts: ['Tammy (been) ', ' able to swim since she was one year old.'], answers: [['has been', "'s been"]] },
{ number: 2, parts: ['How many articles has Greg (wrote) ', ' for Newsweek?'], answers: [['written']] },
{ number: 3, parts: ['Tina and Phil still (not managed) ', ' to sell their flat.'], answers: [["haven't managed", 'have not managed']] },
{ number: 4, parts: ["(I'm) ", " never been to China - what's it like?"], answers: [["I've", 'I have']] },
{ number: 5, parts: ["Have you heard? Carol's (breaking) ", ' her leg again.'], answers: [['broken']] },
{ number: 6, parts: ["You're lucky you caught me - I've just (came) ", ' through the front door.'], answers: [['come']] },
{ number: 7, parts: ["Why (you haven't tell) ", " Sue yet that you're thinking of dropping out of the course?"], answers: [["haven't you told", 'have you not told']] },
{ number: 8, parts: ['Our family (is living) ', " in this village for over two hundred years and we're not leaving now!"], answers: [['has lived', 'has been living', "'s lived", "'s been living"]] }
]
},
{
id: 'G',
unitId: 1,
title: 'Present perfect simple or continuous',
instruction: 'Choose the correct word or phrase. If both are correct, choose both.',
questions: [
{ number: 1, parts: ["They've ", ' over six bags with rubbish from the beach already.'], answers: [['filled']], options: [['filled', 'been filling']] },
{ number: 2, parts: ['Have you ', " that story in the papers about the elephant that escaped from the zoo? Apparently, they've just ", ' it.'], answers: [['been following'], ['caught']], options: [['followed', 'been following'], ['caught', 'been catching']] },
{ number: 3, parts: ["We've ", " the Tower of London, Buckingham Palace and Oxford Street, and we've only been in London for three hours!"], answers: [['seen']], options: [['seen', 'been seeing']] },
{ number: 4, parts: ["It's the first time I've ", ' The Editors play live.'], answers: [['heard']], options: [['heard', 'been hearing']] },
{ number: 5, parts: ['Jake and I have ', " about where to go on holiday for weeks but we just can't decide."], answers: [['been thinking']], options: [['thought', 'been thinking']] },
{ number: 6, parts: ["You can't want to go to the toilet already - we've only ", ' for about ten minutes so far!'], answers: [['been driving']], options: [['driven', 'been driving']] },
{ number: 7, parts: ["I've ", ' up all day and my feet are killing me!'], answers: [['been standing']], options: [['stood', 'been standing']] },
{ number: 8, parts: ['Has Jan ', ' for the company since it started?'], answers: [['worked', 'been working']], options: [['worked', 'been working']] }
]
}
];
export const unitTwoExerciseSections: ExerciseSection[] = [
{
id: 'A',
unitId: 2,
title: 'Topic vocabulary: Thinking',
instruction: 'Choose the correct word.',
questions: [
{ number: 1, parts: ["Don't be so ", ". Everything's going to be fine, you'll see!"], answers: [['pessimistic']], options: [['optimistic', 'pessimistic']] },
{ number: 2, parts: ['Most newspapers are usually ', ' towards a certain political outlook.'], answers: [['biased']], options: [['biased', 'prejudiced']] },
{ number: 3, parts: ["I'm slightly ", " about whether Sean's idea is going to work."], answers: [['dubious']], options: [['dubious', 'cynical']] },
{ number: 4, parts: ["To suggest that it's possible to create a society without crime is a little ", ", isn't it?"], answers: [['naïve', 'naive']], options: [['naïve', 'sceptical']] },
{ number: 5, parts: ['The only ', ' explanation I can think of is that Jenna got the dates wrong.'], answers: [['plausible']], options: [['ingenious', 'plausible']] },
{ number: 6, parts: ["Please don't ", ' me with loads of technical terminology. Use plain, simple English!'], answers: [['baffle']], options: [['baffle', 'discriminate']] },
{ number: 7, parts: ["It's not always easy to ", " someone's suitability for a job just by talking to them in a short interview."], answers: [['assess']], options: [['assume', 'assess']] },
{ number: 8, parts: ['How can the government ', ' spending so much on the armed forces?'], answers: [['justify']], options: [['justify', 'speculate']] },
{ number: 9, parts: ['Looking at the damage, I would ', ' that the painting will cost at least €2,000 to restore properly.'], answers: [['estimate']], options: [['estimate', 'deduce']] },
{ number: 10, parts: ["I don't think you should ", ' that lots of people are going to help you with this project.'], answers: [['presume']], options: [['reflect', 'presume']] }
]
},
{
id: 'B',
unitId: 2,
title: 'Topic vocabulary: Thinking',
instruction: 'Complete using the correct form of the words in the box.',
wordBox: ['concentrate', 'consider', 'contemplate', 'deliberate', 'gather', 'grasp', 'ponder', 'reckon', 'suppose'],
questions: [
{ number: 1, parts: ['It took me quite a long time to ', ' what the aim of the game was.'], answers: [['grasp']] },
{ number: 2, parts: ['The jury are still ', ", but they're expected to reach a verdict soon."], answers: [['deliberating']] },
{ number: 3, parts: ['I ', " from your tutor that you're thinking of changing course."], answers: [['gather']] },
{ number: 4, parts: ['You really have to ', ' very hard when you are doing calligraphy.'], answers: [['concentrate']] },
{ number: 5, parts: ["I'm seriously ", ' asking for a pay rise tomorrow.'], answers: [['considering', 'contemplating']] },
{ number: 6, parts: ['How long do you ', " it'll take to get to Manchester?"], answers: [['reckon', 'suppose']] },
{ number: 7, parts: ["I don't ", ' I could borrow your lecture notes this weekend, could I?'], answers: [['suppose']] },
{ number: 8, parts: ["If you've ever ", " the question 'Why does the universe bother to exist?', then this is the book for you."], answers: [['pondered', 'considered', 'contemplated']] },
{ number: 9, parts: ["Let's not even ", ' the possibility of failure.'], answers: [['contemplate', 'consider']] }
]
},
{
id: 'C',
unitId: 2,
title: 'Topic vocabulary: Thinking',
instruction: 'Each bold word is in the wrong sentence. Write the correct word.',
questions: [
{ number: 1, parts: ["I'm in a real (hunch) ", " because I've been invited to two parties on Saturday and I don't know which one to go to."], answers: [['dilemma']] },
{ number: 2, parts: ["Dave said he's got complete (guesswork) ", " in us, and thinks we're going to do a great job."], answers: [['faith']] },
{ number: 3, parts: ["Sarah's a/an (intuition) ", " when it comes to astrophysics, but she's not very practical in everyday things."], answers: [['genius']] },
{ number: 4, parts: ["You often need to use a little educated (notion) ", " when you're starting a cryptic crossword."], answers: [['guesswork']] },
{ number: 5, parts: ["I've got a/an (ideology) ", ' that someone in this office is going to get promoted soon.'], answers: [['hunch', 'intuition']] },
{ number: 6, parts: ['Communism and capitalism are very different types of (dilemma) ', '.'], answers: [['ideology']] },
{ number: 7, parts: ['Who gave you the (faith) ', ' for the main character in the book?'], answers: [['inspiration']] },
{ number: 8, parts: ['Detective Tacker had absolutely no evidence that Roddard was involved, but all his (paradox) ', ' told him that he was.'], answers: [['intuition']] },
{ number: 9, parts: ["I've got a small (inspiration) ", ' about the exam syllabus. Should I talk to Mrs Jacobs about it?'], answers: [['query']] },
{ number: 10, parts: ['Paying mothers a salary to raise their children is an interesting (genius) ', '.'], answers: [['notion']] },
{ number: 11, parts: ["The fact that more people would come here if the place wasn't so crowded is a real (query) ", '.'], answers: [['paradox']] }
]
},
{
id: 'D',
unitId: 2,
title: 'Topic vocabulary: Learning',
instruction: 'Choose the correct word to complete each gap in the letter.',
questions: [
{ number: 1, parts: ['Firstly, the system only views the weakest learners as having special ', '.'], answers: [['needs']], options: [['requests', 'desires', 'needs', 'wants']] },
{ number: 2, parts: ['The brightest and most ', ' students are not encouraged to develop to their full potential.'], answers: [['conscientious']], options: [['inattentive', 'ignorant', 'intensive', 'conscientious']] },
{ number: 3, parts: ['My fifteen-year-old daughter, for example, has just spent the last month or so ', ' for exams.'], answers: [['cramming']], options: [['cramming', 'lecturing', 'reading', 'practising']] },
{ number: 4, parts: ["They're just ", ' exams.'], answers: [['mock']], options: [['false', 'mock', 'fake', 'artificial']] },
{ number: 5, parts: ["Is the work she's been doing really going to make her more ", ' about her subjects, or will she forget it all tomorrow?'], answers: [['knowledgeable']], options: [['knowledgeable', 'intellectual', 'academic', 'intelligent']] },
{ number: 6, parts: ['Thirdly, the standard ', " doesn't give students any tuition in developing practical work-related, living and social skills."], answers: [['curriculum']], options: [['timetable', 'lecture', 'seminar', 'curriculum']] },
{ number: 7, parts: ["Thirdly, the standard curriculum doesn't give students any ", ' in developing practical work-related, living and social skills.'], answers: [['tuition']], options: [['lesson', 'subject', 'tuition', 'tutorial']] },
{ number: 8, parts: ['How many students entering university have the first idea what the difference is between ', " someone else's work and making good use of someone else's ideas?"], answers: [['plagiarising']], options: [['writing', 'going over', 'plagiarising', 'repeating']] },
{ number: 9, parts: ['How many of them are really able to go about ', " - a skill that's essential at university because there are no teachers to tell you what to do - in an efficient way?"], answers: [['self-study']], options: [['reviewing', 'revision', 'distance learning', 'self-study']] },
{ number: 10, parts: ['Indeed, how many students ', ' from university totally unable to spell even simple English words correctly?'], answers: [['graduate']], options: [['qualify', 'graduate', 'depart', 'exit']] }
]
},
{
id: 'E',
unitId: 2,
title: 'Phrasal verbs',
instruction: 'Match to make sentences.',
questions: [
{ number: 1, parts: ["I'm going to have to mull this ", ''], answers: [['over for a while before I make a final decision.']], options: [['together exactly what happened that evening.', "in the fact that he'd never see her again.", 'up a brilliant excuse to tell Rachel.', 'over for a while before I make a final decision.', 'this through properly yet.', 'out how to get everyone to the sports centre without Phil knowing.', 'upon such a great idea for a website.']] },
{ number: 2, parts: ['Detectives are still trying to piece ', ''], answers: [['together exactly what happened that evening.']], options: [['together exactly what happened that evening.', "in the fact that he'd never see her again.", 'up a brilliant excuse to tell Rachel.', 'over for a while before I make a final decision.', 'this through properly yet.', 'out how to get everyone to the sports centre without Phil knowing.', 'upon such a great idea for a website.']] },
{ number: 3, parts: ['It took him a very long time to take ', ''], answers: [["in the fact that he'd never see her again."]], options: [['together exactly what happened that evening.', "in the fact that he'd never see her again.", 'up a brilliant excuse to tell Rachel.', 'over for a while before I make a final decision.', 'this through properly yet.', 'out how to get everyone to the sports centre without Phil knowing.', 'upon such a great idea for a website.']] },
{ number: 4, parts: ['Tell us how you hit ', ''], answers: [['upon such a great idea for a website.']], options: [['together exactly what happened that evening.', "in the fact that he'd never see her again.", 'up a brilliant excuse to tell Rachel.', 'over for a while before I make a final decision.', 'this through properly yet.', 'out how to get everyone to the sports centre without Phil knowing.', 'upon such a great idea for a website.']] },
{ number: 5, parts: ['It took us ages to figure ', ''], answers: [['out how to get everyone to the sports centre without Phil knowing.']], options: [['together exactly what happened that evening.', "in the fact that he'd never see her again.", 'up a brilliant excuse to tell Rachel.', 'over for a while before I make a final decision.', 'this through properly yet.', 'out how to get everyone to the sports centre without Phil knowing.', 'upon such a great idea for a website.']] },
{ number: 6, parts: ["I've just thought ", ''], answers: [['up a brilliant excuse to tell Rachel.']], options: [['together exactly what happened that evening.', "in the fact that he'd never see her again.", 'up a brilliant excuse to tell Rachel.', 'over for a while before I make a final decision.', 'this through properly yet.', 'out how to get everyone to the sports centre without Phil knowing.', 'upon such a great idea for a website.']] },
{ number: 7, parts: ["I'm not sure we've thought ", ''], answers: [['this through properly yet.']], options: [['together exactly what happened that evening.', "in the fact that he'd never see her again.", 'up a brilliant excuse to tell Rachel.', 'over for a while before I make a final decision.', 'this through properly yet.', 'out how to get everyone to the sports centre without Phil knowing.', 'upon such a great idea for a website.']] }
]
},
{
id: 'F',
unitId: 2,
title: 'Phrasal verbs',
instruction: 'Write one word in each gap so that each second sentence has a similar meaning to the first sentence.',
questions: [
{ number: 1, parts: ['I need to consider your offer very carefully before I make a decision.\nI need to ', ' over your offer very carefully before I make a decision.'], answers: [['think']] },
{ number: 2, parts: ['Lee had the brilliant idea of booking a clown for the end-of-term party.\nLee came ', ' ', ' the brilliant idea of booking a clown for the end-of-term party.'], answers: [['up'], ['with']] },
{ number: 3, parts: ["It's time you realised that you've got responsibilities now.\nIt's time you faced ", ' ', " the fact that you've got responsibilities now."], answers: [['up'], ['to']] },
{ number: 4, parts: ["I'm going to have to improve my spoken German before I go to Munich.\nI'm going to have to brush ", ' ', ' my spoken German before I go to Munich.'], answers: [['up'], ['on']] },
{ number: 5, parts: ["I didn't like the idea at first but now I do.\nI didn't like the idea at first but I've ", ' round ', ' it now.'], answers: [['come'], ['to']] },
{ number: 6, parts: ["It's a general knowledge quiz so you can't do any revision for it.\nThere's nothing to swot ", ' ', " as it's a general knowledge quiz."], answers: [['up'], ['on']] },
{ number: 7, parts: ["We were right at the back of the hall so I couldn't hear what the speaker was saying.\nI was unable to ", ' out what the speaker was saying because we were right at the back of the hall.'], answers: [['make']] },
{ number: 8, parts: ['We finally thought of a way to get the band into the hotel without the press knowing.\nWe finally puzzled ', ' a way to get the band into the hotel without the press knowing.'], answers: [['out']] },
{ number: 9, parts: ["I've found out a lot of information about the history of English language teaching recently.\nI've been ", ' up on the history of English language teaching recently.'], answers: [['reading']] }
]
},
{
id: 'G',
unitId: 2,
title: 'Phrasal verbs with out',
instruction: "Choose Yes if the phrasal verb with out is connected to the idea of 'finding information'; otherwise choose No.",
questions: [
{ number: 1, parts: ["Did you find out what time the parents' meeting is? ", ''], answers: [['Yes']], options: [yesNo] },
{ number: 2, parts: ["I've been checking out whether it's better to go by ferry or plane. ", ''], answers: [['Yes']], options: [yesNo] },
{ number: 3, parts: ["Susie reckons she's sussed out a great way to get into the club for free. ", ''], answers: [['Yes']], options: [yesNo] },
{ number: 4, parts: ['We all piled out into the playground. ', ''], answers: [['No']], options: [yesNo] },
{ number: 5, parts: ["I can't figure out how to change my password. ", ''], answers: [['Yes']], options: [yesNo] },
{ number: 6, parts: ['The band were completely drowned out by all the screaming fans. ', ''], answers: [['No']], options: [yesNo] },
{ number: 7, parts: ["I'm going to sound Bob out about his investing in the company. ", ''], answers: [['Yes']], options: [yesNo] },
{ number: 8, parts: ['Two essays really do stand out from the rest. ', ''], answers: [['No']], options: [yesNo] },
{ number: 9, parts: ["Jan's good at keeping secrets, so you'll have to worm it out of her! ", ''], answers: [['Yes']], options: [yesNo] },
{ number: 10, parts: ["None of us could fathom out why the experiment wasn't working. ", ''], answers: [['Yes']], options: [yesNo] }
]
},
{
id: 'H',
unitId: 2,
title: 'Phrases, patterns and collocations',
instruction: 'Write one word in each gap.',
questions: [
{ number: 1, parts: ['Jim seems to be ', " the misapprehension that tomorrow's a holiday. It isn't."], answers: [['under']] },
{ number: 2, parts: ['These findings cast doubt ', ' previous research done in this field.'], answers: [['on']] },
{ number: 3, parts: ["This photo's a little ", ' of focus, but you can still see their faces.'], answers: [['out']] },
{ number: 4, parts: ['Look ', " the bright side - it's nearly the end of term."], answers: [['on']] },
{ number: 5, parts: ["I'm not against animal testing ", ' principle.'], answers: [['in']] },
{ number: 6, parts: ["I think I'll always associate this song ", ' our holiday in Majorca.'], answers: [['with']] },
{ number: 7, parts: ['You have to bear ', " mind that there'll be quite a few children there."], answers: [['in']] },
{ number: 8, parts: ["Where did Susan's belief ", ' reincarnation come from?'], answers: [['in']] },
{ number: 9, parts: ['Dad said that my borrowing the car tonight was ', ' of the question.'], answers: [['out']] },
{ number: 10, parts: ['Hearing the news about Caroline put my small problems ', ' perspective.'], answers: [['into']] },
{ number: 11, parts: ["What's the best course of action from your point ", ' view?'], answers: [['of']] },
{ number: 12, parts: ['You were hired ', ' the basis that you would be able to work on Sundays.'], answers: [['on']] },
{ number: 13, parts: ['', " balance, I think the government's doing a reasonable job."], answers: [['On']] },
{ number: 14, parts: ["We haven't taken Julie's thoughts ", ' account at all.'], answers: [['into']] },
{ number: 15, parts: ['', " conclusion, I'd like to thank everyone who supported me during the early years."], answers: [['In']] }
]
},
{
id: 'I',
unitId: 2,
title: 'Phrases, patterns and collocations',
instruction: 'For each question, write one word which can be used in all three sentences.',
questions: [
{ number: 1, parts: ["I was so tired that I couldn't even think ___. I'll come ___ to the point - you're fired! It's time to set the record ___ about what really happened that night. Word: ", ''], answers: [['straight']] },
{ number: 2, parts: ["She's only eight, but she has the ___ age of an 18-year-old. Many ___ illnesses can be cured these days. I'm not very good at ___ arithmetic. Word: ", ''], answers: [['mental']] },
{ number: 3, parts: ["Philip does a very funny ___ of Tony. You really made an ___ on Pete - he hasn't stopped talking about you! Why was I under the ___ that the exam was on Thursday? Word: ", ''], answers: [['impression']] },
{ number: 4, parts: ['Carter was the ___ behind the whole criminal operation. Could I just pick your ___ about good places to eat around here? We sat there racking our ___ trying to think of a place to take Paul and Doug in the evening. Word: ', ''], answers: [['brains']] },
{ number: 5, parts: ["Someone with no ___ of smell can't taste food well either. I can't make ___ of this film at all - what's going on? Unplugging a toaster before you try to fix it is just common ___, isn't it? Word: ", ''], answers: [['sense']] },
{ number: 6, parts: ["I thought Gordon's new invention wouldn't work at all, but in fact it worked like a ___. Winning a cruise on the Queen Mary was a ___ come true for me and Albert. I've had the same recurring ___ for four nights in a row. Word: ", ''], answers: [['dream']] },
{ number: 7, parts: ["Motorists should always show ___ for pedestrians crossing the street at a zebra crossing. I'll give some ___ to your proposals and get back to you. We stupidly didn't take changes in interest rates into ___ when we got a mortgage for our house. Word: ", ''], answers: [['consideration']] }
]
},
{
id: 'J',
unitId: 2,
title: 'Phrases, patterns and collocations',
instruction: 'Write one word in each gap.',
questions: [
{
number: 1,
parts: [
"I read this week that a new organisation called Don't Trust Online Information has been formed. The founder, Douglas Haverford-West, is quoted as saying, 'It's ",
" my principles to trust anything I read on the Internet. I've started this organisation ",
' the belief that there are millions like me who ',
" their doubts about information presented as fact that has not gone through a thorough editorial process. There's no question ",
" us shutting down the Internet - we don't want to do that - but DTOI has been set up with a ",
" to raising awareness.' I sympathise with Haverford-West, but I believe he's wrong. I made up my ",
" long ago not to completely trust anything I heard or read. Whether it's on the Internet or, say, in a newspaper, is irrelevant in my opinion."
],
answers: [['against'], ['in'], ['have'], ['of'], ['view'], ['mind']]
}
]
},
{
id: 'K',
unitId: 2,
title: 'Phrases, patterns and collocations: key word transformations',
instruction: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words.',
questions: [
{ number: 1, parts: ["I never thought that we'd have legal problems. (crossed)\nIt ", " that we'd have legal problems."], answers: [['never crossed my mind']] },
{ number: 2, parts: ["I've decided that teaching is not the right profession for me. (conclusion)\nI've ", ' that teaching is not the right profession for me.'], answers: [['come to the conclusion', 'arrived at the conclusion', 'reached the conclusion']] },
{ number: 3, parts: ['Could you tell me where you were last night, Mr Johnson? (account)\nCould you ', ' your whereabouts last night, Mr Johnson?'], answers: [['give an account of']] },
{ number: 4, parts: ['The journalist pretended that she was a parent of one of the children. (false)\nThe journalist ', ' that she was a parent of one of the children.'], answers: [['gave the false impression']] },
{ number: 5, parts: ['You have to use logic and lateral thinking in equal measure in this job. (strike)\nYou have to ', ' logic and lateral thinking in this job.'], answers: [['strike a balance between']] },
{ number: 6, parts: ["I didn't tell Angie because I didn't want to hurt Eddie's feelings. (consideration)\nI didn't tell Angie ", ' Eddie.'], answers: [['out of consideration for']] }
]
},
{
id: 'L',
unitId: 2,
title: 'Idioms',
instruction: 'Complete using the words in the box.',
wordBox: ['bell', 'bend', 'dark', 'hairs', 'head', 'leg', 'stock', 'two', 'uptake', 'what', 'wits', 'wood'],
questions: [
{ number: 1, parts: ['The name Alan Hickson rings a ', ", but I can't place him."], answers: [['bell']] },
{ number: 2, parts: ['Stop wasting time splitting ', ' and look at the big picture.'], answers: [['hairs']] },
{ number: 3, parts: ["Ask Simon about the sales targets. He always knows what's ", '.'], answers: [['what']] },
{ number: 4, parts: ["You've got to have your ", ' about you to succeed in advertising.'], answers: [['wits']] },
{ number: 5, parts: ["Don't let success go to your ", ', will you?'], answers: [['head']] },
{ number: 6, parts: ['No one told us that Diana was leaving, but we all put two and ', ' together.'], answers: [['two']] },
{ number: 7, parts: ["I'm going to go round the ", " if they don't turn that music down soon."], answers: [['bend']] },
{ number: 8, parts: ["Let's take ", ' of the situation before we make a final decision.'], answers: [['stock']] },
{ number: 9, parts: ['How did they manage to keep me completely in the ', ' about this for so long?'], answers: [['dark']] },
{ number: 10, parts: ["The problem with Jane is that sometimes she can't see the ", ' for the trees.'], answers: [['wood']] },
{ number: 11, parts: ["It took Dan a long time to understand what was going on. He's usually quicker on the ", " than that, isn't he?"], answers: [['uptake']] },
{ number: 12, parts: ["Frankly, you're completely wrong and you haven't got a ", ' to stand on.'], answers: [['leg']] }
]
},
{
id: 'M',
unitId: 2,
title: 'Word formation',
instruction: 'Complete the sentences by changing the form of the word in capitals.',
questions: [
{ number: 1, parts: ['There was quite a bit of ', ' because the examiner handed out the wrong exam papers. (CONFUSE)'], answers: [['confusion']] },
{ number: 2, parts: ["You're acting completely ", '. Just calm down and pull yourself together. (RATIONAL)'], answers: [['irrationally']] },
{ number: 3, parts: ["Einstein's ", ' went unnoticed at school. (BRILLIANT)'], answers: [['brilliance']] },
{ number: 4, parts: ['This is generally considered to be the ', ' guide to Australia. (DEFINE)'], answers: [['definitive']] },
{ number: 5, parts: ["It's absolutely ", ' why the council decided to close down the youth club. (EXPLAIN)'], answers: [['inexplicable']] },
{ number: 6, parts: ['I just stood there and listened in ', ' as Ben told me the news. (BELIEVE)'], answers: [['disbelief']] },
{ number: 7, parts: ["Greg's ", " to say the least, so I wouldn't ask him to choose a hotel. (DECIDE)"], answers: [['indecisive']] },
{ number: 8, parts: ['Many children create ', ' friends to talk to. (IMAGINE)'], answers: [['imaginary']] },
{ number: 9, parts: ['He was found not guilty by reason of ', ' and so was sent to a mental institution rather than prison. (SANE)'], answers: [['insanity']] },
{ number: 10, parts: ['Your argument is ', ". Just because you want me to be a doctor doesn't mean I want to be one. (LOGIC)"], answers: [['illogical']] }
]
},
{
id: 'N',
unitId: 2,
title: 'Word formation: prefix il-',
instruction: 'Choose Yes if the bold word is a negative form of a positive word; otherwise choose No.',
questions: [
{ number: 1, parts: ["Doctors' handwriting is usually (illegible). ", ''], answers: [['Yes']], options: [yesNo] },
{ number: 2, parts: ["There's a beautiful (illustration) on page six. ", ''], answers: [['No']], options: [yesNo] },
{ number: 3, parts: ['People who are (illiterate) may need some help filling in forms. ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 4, parts: ['She had an (illustrious) career as a local politician. ', ''], answers: [['No']], options: [yesNo] },
{ number: 5, parts: ["It's a totally (illiberal) law that's just going to restrict our freedoms further. ", ''], answers: [['Yes']], options: [yesNo] },
{ number: 6, parts: ['Several senior politicians have resigned over the (illegality) of the war. ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 7, parts: ['(Illegitimate) children were given very little social recognition in the past. ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 8, parts: ["The magician didn't really cut his assistant in two - it was only an (illusion). ", ''], answers: [['No']], options: [yesNo] },
{ number: 9, parts: ['The lights (illuminated) the building beautifully at night. ', ''], answers: [['No']], options: [yesNo] }
]
},
{
id: 'O',
unitId: 2,
title: 'Word formation: Rhetoric',
instruction: 'Use the word given in capitals to form a word that fits in the space.',
questions: [
{
number: 1,
parts: [
'The (CONCEIVE) ',
" of 'rhetoric', or effective public speaking, dates back thousands of years. The underlying (ASSUME) ",
' behind rhetoric is that how you present an argument can greatly influence whether people are persuaded by you or not. There is (DOUBT) ',
" plenty of evidence to support this idea - it's practically (THINK) ",
', for example, for a successful politician to be a poor communicator - but is it just a question of style winning over substance? Certainly, it is often said of politicians that they talk complete (SENSE) ',
' but what they say they say with such (CONVINCE) ',
" that we tend to believe them, at least when they're in opposition. On the other hand, (WISE) ",
' and knowledge are of little value if you cannot communicate them effectively to your peers or to the next generation. It is the combination of clear (REASON) ',
', sound (JUDGE) ',
' and effective presentation and communication skills that defines true rhetoric. A true rhetorician should always come across as knowledgeable, and never as (OPINION) ',
' or ignorant.'
],
answers: [
['concept'], ['assumption'], ['undoubtedly', 'doubtless'], ['unthinkable'], ['nonsense'],
['conviction'], ['wisdom'], ['reasoning'], ['judgement', 'judgment'], ['opinionated']
]
}
]
}
];