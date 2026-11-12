import type { ExerciseSection } from './exercises';

const yesNo = ['Yes', 'No'];

export const unitFiveExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    unitId: 5,
    title: 'Future time: present continuous or be going to',
    instruction: 'Choose the correct word or phrase. If both are correct, choose both.',
    questions: [
      { number: 1, parts: ["Sonia looks like she's ", ' asleep any minute!'], answers: [['falling', 'going to fall']], options: [['falling', 'going to fall']] },
      { number: 2, parts: ["When I leave school, I'm ", ' a journalist.'], answers: [['going to be']], options: [['being', 'going to be']] },
      { number: 3, parts: ["When Jake's got his degree, he's ", ' to drama school for a year.'], answers: [['going', 'going to go']], options: [['going', 'going to go']] },
      { number: 4, parts: ["Watch out or you're ", ' into trouble!'], answers: [['getting', 'going to get']], options: [['getting', 'going to get']] },
      { number: 5, parts: ['When are they ', ' that they have to improve their customer service?'], answers: [['going to realise']], options: [['realising', 'going to realise']] },
      { number: 6, parts: ['When are you ', ' a branch in Littlehampton?'], answers: [['opening', 'going to open']], options: [['opening', 'going to open']] },
      { number: 7, parts: ["It sounds like we're not ", ' a sales conference this year.'], answers: [['having', 'going to have']], options: [['having', 'going to have']] },
      { number: 8, parts: ['I think house prices are ', ' in about six months.'], answers: [['falling', 'going to fall']], options: [['falling', 'going to fall']] },
      { number: 9, parts: ['Why is Tony ', " for that position? He's not qualified at all."], answers: [['applying', 'going to apply']], options: [['applying', 'going to apply']] },
      { number: 10, parts: ["We're ", ' this in detail in the next meeting.'], answers: [['discussing', 'going to discuss']], options: [['discussing', 'going to discuss']] },
      { number: 11, parts: ["I'm pretty sure that building's ", ' knocked down next week.'], answers: [['being', 'going to be']], options: [['being', 'going to be']] },
      { number: 12, parts: ["There's no doubt the events of the last few days are ", ' written about by future historians.'], answers: [['going to be']], options: [['being', 'going to be']] },
      { number: 13, parts: ["You're not ", ' in your resignation tomorrow, are you?'], answers: [['handing', 'going to hand']], options: [['handing', 'going to hand']] },
      { number: 14, parts: ["Fiona and Jerry aren't ", ' arrogant when they release their CD, are they?'], answers: [['going to become']], options: [['becoming', 'going to become']] },
      { number: 15, parts: ["The airline industry's ", ' to cut costs in the near future.'], answers: [['going to have']], options: [['having', 'going to have']] }
    ]
  },
  {
    id: 'B',
    unitId: 5,
    title: 'Future time: will, shall, be going to, present simple or present continuous',
    instruction: 'Choose the correct word or phrase. If both are correct, choose both.',
    questions: [
      { number: 1, parts: ["I can't come to the beach this weekend, I'm afraid, as ", ' my grandparents.'], answers: [["we're visiting"]], options: [["we'll visit", "we're visiting"]] },
      { number: 2, parts: ['The Prime Minister ', ' all of your questions in due course.'], answers: [['will answer']], options: [['will answer', 'is answering']] },
      { number: 3, parts: ['What time ', '?'], answers: [['does your plane arrive', 'is your plane arriving']], options: [['does your plane arrive', 'is your plane arriving']] },
      { number: 4, parts: ['', " after the neighbours' kids tomorrow evening so I can't come bowling."], answers: [["I'll look", "I'm looking"]], options: [["I'll look", "I'm looking"]] },
      { number: 5, parts: ['', ' we move on to the next item on the agenda now?'], answers: [['Shall']], options: [['Shall', 'Will']] },
      { number: 6, parts: ["'I don't feel well at all.' '", " you be sick?'"], answers: [['Are you going to']], options: [['Are you going to', 'Will']] },
      { number: 7, parts: ['The last bus ', ' at midnight.'], answers: [['leaves', 'is leaving']], options: [['leaves', 'is leaving']] },
      { number: 8, parts: ['Karen, ', ' I give you a hand with that report?'], answers: [['shall']], options: [['shall', 'will']] },
      { number: 9, parts: ["I'm afraid ", ' time to finish all this work today.'], answers: [["I won't have"]], options: [["I'm not having", "I won't have"]] },
      { number: 10, parts: ['When ', ' get round to having new business cards printed?'], answers: [['is she going to']], options: [['does she', 'is she going to']] }
    ]
  },
  {
    id: 'C',
    unitId: 5,
    title: 'will, be going to, present simple or present continuous',
    instruction: 'Write a short phrase using will, be going to, present simple or present continuous to complete each sentence. If more than one form is correct, write all possibilities.',
    questions: [
      { number: 1, parts: ['(I / come) ', ' into the office on Saturday morning if you like, Pete.'], answers: [["I'll come", 'I will come']] },
      { number: 2, parts: ['Carol, (you / show) ', ' Harry how to use the photocopier, please?'], answers: [['will you show']] },
      { number: 3, parts: ['From the look of things, (it / snow) ', ' later today.'], answers: [["it's going to snow", 'it is going to snow']] },
      { number: 4, parts: ['Hurry up! (We / miss) ', ' the ferry!'], answers: [["We're going to miss", 'We are going to miss']] },
      { number: 5, parts: ['(The winner / announce) ', ' on 14th January.'], answers: [['The winner will be announced', 'The winner is going to be announced', 'The winner is announced', 'The winner is being announced']] },
      { number: 6, parts: ["I can't come in to work this morning because (I / go) ", " to the doctor's."], answers: [["I'm going", 'I am going', "I'm going to go", 'I am going to go']] },
      { number: 7, parts: ["Don't worry! (They / sack) ", ' anyone for at least six months.'], answers: [["They won't sack", 'They will not sack', "They aren't going to sack", "They're not going to sack", 'They are not going to sack']] },
      { number: 8, parts: ['(Jenny / find) ', ' a job easily when she graduates?'], answers: [['Will Jenny find', 'Is Jenny going to find']] },
      { number: 9, parts: ["No, I'm afraid (I / be) ", ' at the meeting tomorrow.'], answers: [["I won't be", 'I will not be', "I'm not going to be", 'I am not going to be', "I aren't going to be"]] },
      { number: 10, parts: ['(The new version / launch) ', ' in the spring.'], answers: [['The new version will be launched', 'The new version is going to be launched', 'The new version is being launched', 'The new version is launched']] },
      { number: 11, parts: ['(I / order) ', ' a pizza, shall I?'], answers: [["I'll order", 'I will order']] },
      { number: 12, parts: ['It looks like (some people / make) ', ' redundant quite soon.'], answers: [['some people are going to be made', 'some people will be made']] },
      { number: 13, parts: ['What time (the train / leave) ', ' on Saturday?'], answers: [['does the train leave', 'is the train leaving', 'will the train leave', 'is the train going to leave']] }
    ]
  },
  {
    id: 'D',
    unitId: 5,
    title: 'Future perfect',
    instruction: 'If the bold phrase is correct, write OK. If it is incorrect, write the correct form so that the sentence is in the future perfect.',
    questions: [
      { number: 1, parts: ["I think we'll have sold out of these by the end of the day. ", ''], answers: [['OK']] },
      { number: 2, parts: ['On Tuesday, Toby (will have been being) ', ' with the company for exactly 35 years.'], answers: [['will have been']] },
      { number: 3, parts: ["We'll (have been becoming) ", ' the market leader by the end of the summer.'], answers: [['have become']] },
      { number: 4, parts: ["At the end of the summer, I'll (have taking) ", ' the same train to work every morning for 15 years.'], answers: [['have taken', 'have been taking']] },
      { number: 5, parts: ['When we meet tomorrow afternoon, (will you already have) ', ' a chance to look at the sales figures?'], answers: [['will you already have had']] },
      { number: 6, parts: ["You'll (have driven) ", " for hours without a break when we get there, so you'll need a rest before we go out."], answers: [['have been driving']] },
      { number: 7, parts: ['A Managing Director (will have appointed) ', ' by the end of the month.'], answers: [['will have been appointed']] },
      { number: 8, parts: ["Sandra (won't have been finished) ", ' the reports by then, but she should at least have started.'], answers: [["won't have finished", 'will not have finished']] },
      { number: 9, parts: ["Ron's going to be very surprised when he hears the news. He definitely (will have been expecting) ", ' it.'], answers: [["won't have been expecting", 'will not have been expecting', "won't have expected", 'will not have expected']] },
      { number: 10, parts: ['Will you have managed to put something down in writing by the end of the day? ', ''], answers: [['OK']] },
      { number: 11, parts: ["Why will they have been waiting for hours? I thought you'd told them we were going to leave later. ", ''], answers: [['OK']] },
      { number: 12, parts: ["It sounds like the invitations (won't all have delivering) ", ' by next Friday.'], answers: [["won't all have been delivered", 'will not all have been delivered']] }
    ]
  },
  {
    id: 'E',
    unitId: 5,
    title: 'Future perfect simple, future perfect continuous or future continuous',
    instruction: 'Write the verb in brackets in the correct form in each gap. If more than one form is correct, write all the possibilities.',
    questions: [
 { number: 1, parts: ['By the end of today ', ' (Ed / apply) for over 17 jobs!'], answers: [['Ed will have applied', "Ed'll have applied"]] },
{ number: 2, parts: ['This time next year ', ' (I / hopefully / run) my own business.'], answers: [["I'll hopefully be running", 'I will hopefully be running']] },
{ number: 3, parts: ["In three days' time ", ' (we / live) here for exactly two years.'], answers: [["we'll have lived", 'we will have lived', "we'll have been living", 'we will have been living']] },
{ number: 4, parts: ['', ' (Gemma / already / arrive) by the time we get there?'], answers: [['Will Gemma already have arrived', 'Will Gemma have already arrived']] },
{ number: 5, parts: ['', ' (you / travel) all day, will you? Surely ', " (you / have) several stops on the way, won't you?"], answers: [["You won't be travelling", 'You will not be travelling', "You won't have been travelling", 'You will not have been travelling'], ["you'll have", 'you will have', "you'll be having", 'you will be having']] },
{ number: 6, parts: ['', ' (we / wait) for you at reception when you arrive.'], answers: [["We'll be waiting", 'We will be waiting']] },
{ number: 7, parts: ['At the end of this sponsored jumpathon, ', ' (1,000 people / jump) up and down on the spot non-stop for 48 hours!'], answers: [['1,000 people will have been jumping', '1,000 people will have jumped']] },
{ number: 8, parts: ['', " (the boys / sign) autographs all morning, so they'll need a couple of hours' break before the recording session."], answers: [['The boys will have been signing', 'The boys will be signing']] },
{ number: 9, parts: ['How many people ', ' (you / interview) for the position tomorrow?'], answers: [['will you be interviewing']] },
{ number: 10, parts: ['', " (Terry / see) the e-mail as he's only just got here so we'd better discuss that first."], answers: [["Terry won't have seen", 'Terry will not have seen']] },
{ number: 11, parts: ['What ', ' (you / do) this time next week?'], answers: [['will you be doing']] },
{ number: 12, parts: ['', " (we / see) Ken and Tricia when we go to the States as they'll be away at the time, unfortunately."], answers: [["We won't be seeing", 'We will not be seeing', "We won't see", 'We will not see']] }
]
},
{
id: 'F',
unitId: 5,
title: 'Time clauses',
instruction: 'Complete each second sentence so that it has a similar meaning to the first sentence.',
questions: [
{ number: 1, parts: ['The bell will ring and then you can all go home.\nYou can all go home when ', '.'], answers: [['the bell rings', 'the bell has rung']] },
{ number: 2, parts: ["Ahmed will ask the questions and I'll take notes.\nI'll take notes while ", '.'], answers: [['Ahmed asks the questions', 'Ahmed is asking the questions']] },
{ number: 3, parts: ["You're a trainee for three months and then you become a junior employee.\nYou become a junior employee once ", '.'], answers: [["you've been a trainee for three months", 'you have been a trainee for three months', "you've finished being a trainee", 'you have finished being a trainee']] },
{ number: 4, parts: ['Miss Jones will be interviewing the candidates and Mr Dawkins will be recording the interviews.\nMiss Jones will be interviewing the candidates while ', '.'], answers: [['Mr Dawkins records the interviews', 'Mr Dawkins is recording the interviews']] },
{ number: 5, parts: ["The sales figures will come in and then we'll assess the situation again.\nWe'll assess the situation again as ", '.'], answers: [['soon as the sales figures come in', 'soon as the sales figures have come in']] },
{ number: 6, parts: ["Work for us for over a year and we'll consider promoting you.\nWe'll only consider promoting you once ", '.'], answers: [["you've worked for us for over a year", 'you have worked for us for over a year', "you've been working for us for over a year", 'you have been working for us for over a year']] },
{ number: 7, parts: ["They'll start selling in much larger quantities and then they'll make a profit.\nThey won't make a profit until ", '.'], answers: [['they start selling in much larger quantities', "they've started selling in much larger quantities", 'they have started selling in much larger quantities']] },
{ number: 8, parts: ["The publishing company will offer me a contract and then I'll know for sure that they're going to publish the book.\nI'll know for sure that the book is going to be published when I ", '.'], answers: [['am offered a contract by the publishing company', 'have been offered a contract by the publishing company', "'m offered a contract by the publishing company", "'ve been offered a contract by the publishing company"]] }
]
},
{
id: 'G',
unitId: 5,
title: 'Time clauses',
instruction: 'Write a verb from the box in the correct form in each gap.',
wordBox: ['arrive', 'be', 'call', 'destroy', 'draw up', 'give', 'last', 'notify', 'record', 'show', 'take', 'wait'],
questions: [
{
number: 1,
parts: [
'When you ',
' at the main gates, hand over the attached invitation letter to the security guard. You ',
' where to park, and how to get to reception.\nAs soon as you ',
' your name to the receptionist, you ',
' to Meeting Room 7.\nWhile you ',
' in Meeting Room 7, please fill in one of the Personal Information forms which will be in the room.\nWhen you ',
' for interview, please bring this form with you.\nYour interview ',
' for approximately 45 minutes. Please note that all interviews ',
'. This is to help us with the selection process. Once the selection process ',
' over, all recordings ',
'.\nYou ',
' as soon as a shortlist of candidates ',
'.'
],
answers: [
['arrive'], ['will be shown', "'ll be shown"], ['give', 'have given', "'ve given"], ['will be taken', "'ll be taken"],
['wait', 'are waiting', "'re waiting"], ['are called', "'re called"], ['will last', "'ll last"],
['are recorded', 'will be recorded'], ['is'], ['will be destroyed', "'ll be destroyed"],
['will be notified', "'ll be notified"], ['has been drawn up', 'is drawn up']
]
}
]
},
  {
    id: 'H',
    unitId: 5,
    title: 'Future time: key word transformations',
    instruction: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words.',
    questions: [
      { number: 1, parts: ['Shona will find out if she has been promoted very soon. (just)\nShona ', ' find out if she has been promoted.'], answers: [['is just about to']] },
      { number: 2, parts: ['They will decide very soon whether to close the Paris office. (point)\nThey ', ' whether to close the Paris office.'], answers: [['are on the point of deciding', 'are just on the point of deciding']] },
      { number: 3, parts: ['The plan is that I will give a presentation to the board on Friday morning. (due)\nI ', ' a presentation to the board on Friday morning.'], answers: [['am due to give', "'m due to give"]] },
      { number: 4, parts: ['Are you going home in a minute? (about)\nAre you ', ' home?'], answers: [['about to go']] },
      { number: 5, parts: ["Actually, there won't be a general election for a while. (verge)\nActually, we ", ' a general election.'], answers: [["aren't on the verge of having", 'are not on the verge of having', "aren't on the verge of holding", 'are not on the verge of holding']] },
      { number: 6, parts: ['What time do the inspectors arrive tomorrow? (due)\nWhat time ', ' tomorrow?'], answers: [['are the inspectors due to arrive']] },
      { number: 7, parts: ['Keep this a secret. (to)\nYou are ', ' anyone about this.'], answers: [['not to tell']] }
    ]
  },

{
id: 'I',
unitId: 5,
title: 'Future in the past',
instruction: 'Write one word in each gap.',
questions: [
{ number: 1, parts: ['The company ', ' going to expand, but the economic downturn has put a stop to that.'], answers: [['was']] },
{ number: 2, parts: ['No one had any idea that Dave ', ' resign the next day.'], answers: [['would']] },
{ number: 3, parts: ['We were all standing around in front of the TV, knowing that the Minister ', ' to make a statement on the emergency in the next few minutes.'], answers: [['was']] },
{ number: 4, parts: ['Ann ', " to find the documents soon, or her boss would find out she'd mislaid them."], answers: [['had']] },
{ number: 5, parts: ['', ' you going to apply for the post before you heard it had already been filled?'], answers: [['Were']] },
{ number: 6, parts: ['', ' Bill ', ' on a business trip the next day anyway, or did he have to pack a suitcase and get a plane ticket at the last minute?'], answers: [['Was'], ['going']] },
{ number: 7, parts: ["You're lucky you caught me. I ", ' just on the point of leaving.'], answers: [['was']] },
{ number: 8, parts: ['We ', ' due to arrive at six, so I left a message saying we ', ' be there at nine.'], answers: [['were'], ['would']] },
{ number: 9, parts: ['I think they ', ' about to fire me when I quit!'], answers: [['were']] },
{ number: 10, parts: ['Thompson understood the cryptic message. He was ', ' get to Berlin on the first flight.'], answers: [['to']] }
]
},
{
id: 'J',
unitId: 5,
title: 'The office of the future',
instruction: 'Write one word in each gap.',
questions: [
{
number: 1,
parts: [
'What ',
" the office of 2020 be like? By then, it's highly likely that most of the western world will ",
' been connected to a WiFi network. As ',
' as that ',
', the physical restriction of phone lines ',
' disappear. Some people will ',
' have to commute to the office each day, but for many others their office will ',
' wherever they are. More and more people will be ',
'working',
' from home several days a week. Businessmen and women will be ',
'sending',
' e-mails and ',
'doing',
' business with clients ',
'while',
' they ',
'are',
' relaxing or traveling. Laptops and mobile phones will have ',
'become',
' lighter, and new communication tech will have ',
'been',
' introduced by ',
'by',
" 2020 to merge devices into a single powerful unit."
],
answers: [
['will'], ['have'], ['soon'], ['happens', 'occurs'], ['will'], ['still'], ['be'],
['working'], ['be'], ['doing'], ['while', 'whilst', 'when'], ['are'],
['become'], ['been'], ['by']
]
}
]
},
{
id: 'K',
unitId: 5,
title: 'Future time review',
instruction: 'Choose the correct answer.',
questions: [
{ number: 1, parts: ['We are pleased to announce that Keith Danish ', ' replace Susan Williams as Operations Manager from 24th September.'], answers: [['is to']], options: [['does', 'is about to', 'is to', 'is due']] },
{ number: 2, parts: ['I ', " Penny for her advice, but I'm not so sure that's such a good idea now."], answers: [['was going to ask']], options: [['am going to ask', 'was going to ask', 'was asking', 'will ask']] },
{ number: 3, parts: ['Once ', " broadband, you won't want to go back to a dial-up connection."], answers: [["you've used"]], options: [["you'll be using", "you'll have used", "you've been used", "you've used"]] },
{ number: 4, parts: ['', ' find out more about the costs before we make a final decision?'], answers: [['Shall I']], options: [['Do I', 'Will I', 'Shall I', 'Am I due to']] },
{ number: 5, parts: ['', ' to the Finance Manager or the Accounts Manager?'], answers: [['Will you be reporting']], options: [['Will you be reporting', 'Will you have been reporting', 'Shall you be reporting', 'Are you on the verge of reporting']] },
{ number: 6, parts: ['This time tomorrow, Barry will ', ' across the Pacific for exactly three months.'], answers: [['have been rowing']], options: [['be rowing', 'have rowed', 'be rowing', 'have been rowing']] },
{ number: 7, parts: ['When ', ' treating me with some respect at work?'], answers: [['are they going to start']], options: [['will they have started', 'are they going to start', 'are they starting', 'will they be starting']] },
{ number: 8, parts: ['Were you really just on the point ', '?'], answers: [['of resigning']], options: [['of resigning', 'to resign', 'with resignation', 'of having resigned']] }
]
}
];

export const unitSixExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    unitId: 6,
    title: 'Topic vocabulary: Time',
    instruction: 'Write a word from the box in each gap.',
    wordBox: ['obsolete', 'overdue', 'provisional', 'punctual', 'seasonal', 'simultaneous', 'temporary', 'timely'],
    questions: [
      { number: 1, parts: ["'I'll only be working here for a couple of weeks. I'm a ", " worker.'"], answers: [['temporary']] },
      { number: 2, parts: ["'It couldn't have happened at a better time! What a ", " arrival!'"], answers: [['timely']] },
      { number: 3, parts: ["'It depends on the time of year. It's a ", " problem.'"], answers: [['seasonal']] },
      { number: 4, parts: ["'I get to work at nine o'clock on the dot every day. I try to be ", ".'"], answers: [['punctual']] },
      { number: 5, parts: ["'We both said it at exactly the same time. Our answer was ", ".'"], answers: [['simultaneous']] },
      { number: 6, parts: ["'We can't use that software on our new computers. It's ", "!'"], answers: [['obsolete']] },
      { number: 7, parts: ["'It's the first draft of the text. We can change it later if we want. It's only ", ".'"], answers: [['provisional']] },
      { number: 8, parts: ["'They should have sent that to us ages ago. It's long ", ".'"], answers: [['overdue']] }
    ]
  },
  {
    id: 'B',
    unitId: 6,
    title: 'Topic vocabulary: Time',
    instruction: 'Write a word from the box in each gap.',
    wordBox: ['century', 'era', 'frequency', 'millennium', 'phase', 'span', 'spell', 'stint'],
    questions: [
      { number: 1, parts: ['We live in a/an ', ' of mass communication.'], answers: [['era']] },
      { number: 2, parts: ['After a short ', ' of being unemployed, I decided to set up my own business.'], answers: [['spell']] },
      { number: 3, parts: ['It was in the twentieth ', ' that humans first developed nuclear weapons.'], answers: [['century']] },
      { number: 4, parts: ['Despite advances in technology, no human being will ever live for a ', ' in my opinion.'], answers: [['millennium']] },
      { number: 5, parts: ['The council is planning to increase the ', ' of buses to the city centre.'], answers: [['frequency']] },
      { number: 6, parts: ['I did a brief ', " in the navy, and then decided it wasn't for me."], answers: [['stint']] },
      { number: 7, parts: ["I've got a very short concentration ", '.'], answers: [['span']] },
      { number: 8, parts: ["It's just a ", " that most teenagers go through. Don't worry!"], answers: [['phase']] }
    ]
  },
  {
    id: 'C',
    unitId: 6,
    title: 'Topic vocabulary: Time',
    instruction: 'Choose the correct word to complete each gap in the letter.',
    questions: [
      { number: 1, parts: ['I am writing to thank the organisation for the ', ' service I received when my membership expired.'], answers: [['prompt']], options: [['prior', 'prompt']] },
      { number: 2, parts: ['I am writing to thank the organisation for the prompt service I received when my membership ', '.'], answers: [['expired']], options: [['postponed', 'expired']] },
      { number: 3, parts: ['As you may know, I am a ', ' member of the Chaversham Vintage Car Club.'], answers: [['long-standing']], options: [['long-standing', 'timely']] },
      { number: 4, parts: ['I am a long-standing member of the Chaversham ', ' Car Club.'], answers: [['Vintage']], options: [['Vintage', 'Antique']] },
      { number: 5, parts: ['Having spent most of my ', ' working with cars built after the First World War.'], answers: [['lifetime']], options: [['spell', 'lifetime']] },
      { number: 6, parts: ['Working with cars built in the ', ' following the First World War.'], answers: [['decade']], options: [['duration', 'decade']] },
      { number: 7, parts: ["I had been granted the status of '", " member'."], answers: [['permanent']], options: [['chronological', 'permanent']] },
      { number: 8, parts: ["For the ", ' I spent as Chairperson of the organisation in the 1970s.'], answers: [['period']], options: [['period', 'interval']] },
      { number: 9, parts: ['I was surprised to receive a rather ', ' e-mail from the club.'], answers: [['abrupt']], options: [['interim', 'abrupt']] },
      { number: 10, parts: ['Saying that as three months had ', ' since my membership ran out I was no longer eligible.'], answers: [['elapsed']], options: [['lapsed', 'elapsed']] },
      { number: 11, parts: ['I was no longer eligible to attend the ', ' dinner next month.'], answers: [['annual']], options: [['annual', 'eternal']] },
      { number: 12, parts: ['I received a ', ' e-mail from the same person, apologising for the confusion.'], answers: [['subsequent']], options: [['subsequent', 'temporary']] },
      { number: 13, parts: ['The change from my being a non-member to being a member again was literally ', '.'], answers: [['instantaneous']], options: [['simultaneous', 'instantaneous']] },
      { number: 14, parts: ['I am now looking forward to meeting up with some of my ', ' at the dinner next week.'], answers: [['contemporaries']], options: [['anachronisms', 'contemporaries']] }
    ]
  },
  {
    id: 'D',
    unitId: 6,
    title: 'Topic vocabulary: Work',
    instruction: 'Write a word from the boxes in each gap.',
    wordBox: ['marketing', 'multinational', 'consultant', 'executive', 'effective', 'efficient', 'leave', 'redundant', 'fire', 'strike', 'headhunted', 'sacked'],
    questions: [
      { number: 1, parts: ['Would you like to work for a large ', ' corporation?'], answers: [['multinational']] },
      { number: 2, parts: ['How much budget is there for the ', ' campaign?'], answers: [['marketing']] },
      { number: 3, parts: ['Charlene is a freelance business ', '; companies hire her to solve particular problems they are facing.'], answers: [['consultant']] },
      { number: 4, parts: ["My dad's a senior ", ' in a huge American corporation.'], answers: [['executive']] },
      { number: 5, parts: ['The advertising campaign was ', ' in that it increased sales by over 50%.'], answers: [['effective']] },
      { number: 6, parts: ['Robots are often much more ', " than people because they can work 24 hours a day without getting tired, and they don't make mistakes!"], answers: [['efficient']] },
      { number: 7, parts: ['The paper had to make several journalists ', ' last week due to loss of sales.'], answers: [['redundant']] },
      { number: 8, parts: ["Darren's home on ", ' from the army at the moment.'], answers: [['leave']] },
      { number: 9, parts: ['How long is the union planning to ', ' for?'], answers: [['strike']] },
      { number: 10, parts: ["They wouldn't ", ' someone just for stealing a bit of stationery, would they?'], answers: [['fire']] },
      { number: 11, parts: ['Sue used to work here, but then she was ', ' by a major law firm.'], answers: [['headhunted']] },
      { number: 12, parts: ["I can't believe they ", ' Jack just for taking a few paperclips home with him.'], answers: [['sacked']] }
    ]
  },
  {
    id: 'E',
    unitId: 6,
    title: 'Topic vocabulary: Work',
    instruction: 'Choose the correct word.',
    questions: [
      { number: 1, parts: ['Why not consider a career in the ', '?'], answers: [['civil service']], options: [['state service', 'civil service']] },
      { number: 2, parts: ['Working in the public ', ' provides job security and job satisfaction.'], answers: [['sector']], options: [['area', 'sector']] },
      { number: 3, parts: ['There are excellent ', ' for promotion.'], answers: [['prospects']], options: [['prospects', 'predictions']] },
      { number: 4, parts: ['There are excellent prospects for ', '.'], answers: [['promotion']], options: [['promotion', 'progress']] },
      { number: 5, parts: ["You'll be working with highly experienced and professional ", ' in a modern environment.'], answers: [['colleagues']], options: [['colleagues', 'clients']] },
      { number: 6, parts: ["We also respect our staff's right to be part of a ", '.'], answers: [['union']], options: [['club', 'union']] },
      { number: 7, parts: ['We want to ', ' the brightest and the best.'], answers: [['recruit']], options: [['recruit', 'elect']] }
    ]
  },
  {
    id: 'F',
    unitId: 6,
    title: 'Phrasal verbs',
    instruction: 'Choose the correct word.',
    questions: [
      { number: 1, parts: ["I'm so ", " under with work at the moment - it's awful!"], answers: [['snowed']], options: [['iced', 'rained', 'snowed', 'fogged']] },
      { number: 2, parts: ["The company's announced it's ", ' off over 1,000 workers.'], answers: [['laying']], options: [['leaving', 'laying', 'setting', 'giving']] },
      { number: 3, parts: ["They're planning to ", ' down their operation in Greece and concentrate on Eastern Europe.'], answers: [['wind']], options: [['wind', 'tie', 'roll', 'stretch']] },
      { number: 4, parts: ["I'm not sure if I'm doing it right, but I'll try to ", ' ahead with it anyway.'], answers: [['press']], options: [['drive', 'bang', 'touch', 'press']] },
      { number: 5, parts: ["Something's ", " up, so I'm afraid I won't be able to make it this afternoon."], answers: [['cropped']], options: [['shown', 'pulled', 'cropped', 'cut']] },
      { number: 6, parts: ['Could you lend me some money to ', ' me over to the end of the month?'], answers: [['tide']], options: [['hand', 'tide', 'get', 'make']] },
      { number: 7, parts: ["I didn't ", ' out to be a millionaire - I just wanted to run a successful business.'], answers: [['set']], options: [['set', 'go', 'begin', 'watch']] },
      { number: 8, parts: ["Mona's going to leave early this afternoon but she says she'll ", ' up the hours tomorrow.'], answers: [['make']], options: [['find', 'make', 'catch', 'bring']] }
    ]
  },
  {
    id: 'G',
    unitId: 6,
    title: 'Phrasal verbs',
instruction: 'Write a phrasal verb from the box in the correct form in each gap.',
wordBox: ['dive in', 'end up', 'kick off', 'knock off', 'knuckle down', 'lie ahead', 'take on', 'while away'],
questions: [
{ number: 1, parts: ["If the business does well, I'll hopefully be able to ", ' a part-time assistant in the spring.'], answers: [['take on']] },
{ number: 2, parts: ['We ', ' having to scrap the whole advertising campaign and start again.'], answers: [['ended up']] },
{ number: 3, parts: ["Let's ", ' this session by introducing ourselves, shall we?'], answers: [['kick off']] },
{ number: 4, parts: ['Josh can ', ' a whole day playing online computer games with his mates.'], answers: [['while away']] },
{ number: 5, parts: ['No teenager really knows what ', ' for them career-wise in the future.'], answers: [['lies ahead']] },
{ number: 6, parts: ["That's enough TV! It's time to ", ' and get on with your homework now.'], answers: [['knuckle down']] },
{ number: 7, parts: ['I usually ', " work at about half five so I'm home by six thirty most nights."], answers: [['knock off']] },
{ number: 8, parts: ['As soon as the food was brought out, everyone ', ' and helped themselves.'], answers: [['dived in']] }
]
},
{
id: 'H',
unitId: 6,
title: 'Phrasal verbs with away',
instruction: 'Choose Yes if the phrasal verb with away is connected to the idea of an action continuing for a long time; otherwise choose No.',
questions: [
{ number: 1, parts: ['Mary was beavering away at her desk when I last popped in to see her. ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 2, parts: ["Let's break away from the main crowd and go over there for a while. ", ''], answers: [['No']], options: [yesNo] },
{ number: 3, parts: ["You can't explain it away as a simple mistake. You did it on purpose! ", ''], answers: [['No']], options: [yesNo] },
{ number: 4, parts: ["I think I'll give these old clothes away. Do you know any charity shops around here? ", ''], answers: [['No']], options: [yesNo] },
{ number: 5, parts: ["My fingers are tired! I've been hammering away at this keyboard for hours. ", ''], answers: [['Yes']], options: [yesNo] },
{ number: 6, parts: ["I'm sorry to tell you that your great-grandfather passed away during the night. ", ''], answers: [['No']], options: [yesNo] },
{ number: 7, parts: ["Keep plodding away and you'll finish your novel eventually. ", ''], answers: [['Yes']], options: [yesNo] },
{ number: 8, parts: ["Can we have a break? We've been slaving away all morning. ", ''], answers: [['Yes']], options: [yesNo] },
{ number: 9, parts: ['We can hear Carol typing away at her keyboard from the living room. ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 10, parts: ["Don't disturb your father. He's working away on some designs at the moment. ", ''], answers: [['Yes']], options: [yesNo] }
]
},
{
id: 'I',
unitId: 6,
title: 'Phrases, patterns and collocations',
instruction: 'Write one word in each gap.',
questions: [
{ number: 1, parts: ["The President's just been elected to a second term ", ' office.'], answers: [['in', 'of']] },
{ number: 2, parts: ["I don't know how anyone can sit in front of a computer for hours ", ' end.'], answers: [['on']] },
{ number: 3, parts: ['My great-grandmother used to work ', ' a servant in a huge mansion.'], answers: [['as']] },
{ number: 4, parts: ['My exam results should come ', ' day now.'], answers: [['any']] },
{ number: 5, parts: ['Applicants must be at least 18 years ', ' age.'], answers: [['of']] },
{ number: 6, parts: ["You'd better start working a bit harder or you'll be ", ' of a job!'], answers: [['out']] },
{ number: 7, parts: ['Never mind ', " you get paid for it or not, you can't work this weekend. We're going to a wedding!"], answers: [['whether', 'if']] },
{ number: 8, parts: ['', " the time Jeremy got there, we'd already left."], answers: [['By']] }
]
},
{
  id: 'J',
  unitId: 6,
  title: 'Phrases, patterns and collocations',
  instruction: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words.',
  questions: [
    { number: 1, parts: ['The government needs to stop this ridiculous bureaucratic system. (put)\nThe government needs to ', ' this ridiculous bureaucratic system.'], answers: [['put an end to']] },
    { number: 2, parts: ['No one except Jake has ever beaten me at a game of chess. (only)\nJake ', ' beat me at a game of chess.'], answers: [['is the only person ever to', 'is the only one ever to', 'was the only person ever to', 'was the only one ever to']] },
    { number: 3, parts: ["It's time we began to sort through these cupboards. (start)\nIt's time we ", ' through these cupboards.'], answers: [['made a start on sorting', 'made a start at sorting']] },
    { number: 4, parts: ["Julie asked for a second's thinking time before she answered. (just)\n'Could ", " think before I answer?' asked Julie."], answers: [['you just give me a second to', 'I just have a second to', 'I just take a second to']] },
    { number: 5, parts: ["I can't really remember the last time I had a day off. (ages)\nIt feels ", ' I had a day off.'], answers: [['like ages since', "like it's been ages since", 'like it was ages ago when']] },
    { number: 6, parts: ["Sorry, Alan, but right now I'm rather busy. (in)\nSorry, Alan, but at ", " I'm rather busy."], answers: [['this moment in time']] },
    { number: 7, parts: ['They painted the wall very well. (made)\nThey ', ' the wall.'], answers: [['made a good job of painting']] }
  ]
},

{
id: 'K',
unitId: 6,
title: 'Phrases, patterns and collocations',
instruction: 'For each question, write one word which can be used in all three sentences.',
questions: [
{ number: 1, parts: ["Jenny, ___ you've been here for three years, we need to start thinking about your promotion. I'm sure Harold was here just ___, wasn't he? You can share my computer for ___, but they'll have to get you your own quite soon. Word: ", ''], answers: [['now']] },
{ number: 2, parts: ["Thanks so much for the flowers - they really made my ___. My grandparents love going on ___ trips to towns by the sea. You'd think that, in this ___ and age, a 25-year-old would know what a blog is. Word: ", ''], answers: [['day']] },
{ number: 3, parts: ["I was just ___ to go home, but that's okay. It's ___ time you got home - we've been worried sick! We're definitely going to have to do something ___ increasing our market share. Word: ", ''], answers: [['about']] },
{ number: 4, parts: ["I should get a reply from them any ___ now. It'll only take them a ___ to update the website. Now is the ___ of truth! Word: ", ''], answers: [['moment']] },
{ number: 5, parts: ["We're definitely living in the ___ of information. This particular wine doesn't really mature with ___. It's time you started acting your ___, young man! Word: ", ''], answers: [['age']] },
{ number: 6, parts: ["It's just a typical 1960s ___ block. The media start prying into your private life when you run for public ___. You'd better talk to Derek at head ___. Word: ", ''], answers: [['office']] },
{ number: 7, parts: ["I began to realise in the ___ of the meeting that my proposal was not going to be accepted. We're going to have to decide on a ___ of action to take. All they said was that they'd contact me in due ___. Word: ", ''], answers: [['course']] },
{ number: 8, parts: ["I do hope we're going to arrive ___ time. How anyone could work in that office for years ___ end I just don't know. Jim bet me that Doug was going to get the sack so I immediately said: 'You're ___!' Word: ", ''], answers: [['on']] }
]
},
{
id: 'L',
unitId: 6,
title: 'Idioms',
instruction: 'Each bold word is incorrect. Rewrite it correctly.',
questions: [
{ number: 1, parts: ["I haven't seen Carol in (monkey's) ", " years. I wonder what she's doing these days."], answers: [["donkey's"]] },
{ number: 2, parts: ["When I started work here, we didn't have e-mail or even fax machines. That was long before your (moment) ", '.'], answers: [['time']] },
{ number: 3, parts: ["I was talking to Sandra in the Personnel Department the (recent) ", " day and she didn't mention redundancies."], answers: [['other']] },
{ number: 4, parts: ['I nearly sent that e-mail to Dave by mistake, but luckily I realised in the (bill) ', ' of time.'], answers: [['nick']] },
{ number: 5, parts: ["Tina's happy with her job for the time (coming) ", ", but I expect she'll start looking for a new one in a year or so."], answers: [['being']] },
{ number: 6, parts: ["The boss might take you out for a meal once in a blue (planet) ", ", but don't expect it to happen any time soon!"], answers: [['moon']] },
{ number: 7, parts: ["Sheila says she's given up smoking (with) ", " good and that she'll never have another cigarette as long as she lives."], answers: [['for']] },
{ number: 8, parts: ["I get to go on business trips from (once) ", " to time, but it's certainly not a regular occurrence."], answers: [['time']] },
{ number: 9, parts: ["I invited Graham to dinner on the (edge) ", " of the moment. I'm sorry I didn't ask you first."], answers: [['spur']] },
{ number: 10, parts: ["Let me know if you need help and I'll be there at the drop of a (pen) ", '!'], answers: [['hat']] },
{ number: 11, parts: ["'Have you finished the reports yet?' 'Not yet. All in (nice) ", " time!'"], answers: [['good']] },
{ number: 12, parts: ["The photocopier still worked, but I thought it needed a service. You know what they say: 'a (repair) ", " in time saves nine' and all that!"], answers: [['stitch']] }
]
},
{
id: 'M',
unitId: 6,
title: 'Word formation',
instruction: 'Each bold word is in an incorrect form. Rewrite it correctly.',
questions: [
{ number: 1, parts: ['The salary they offered me exceeded my wildest (expecting) ', '!'], answers: [['expectations']] },
{ number: 2, parts: ['I hope I (last) ', ' his previous secretary - she only worked here for a week!'], answers: [['outlast']] },
{ number: 3, parts: ["Once you've been self-employed for a while, it's very difficult to become just another company (employer) ", ' again.'], answers: [['employee']] },
{ number: 4, parts: ['Hargreaves & Son are one of our main (competitions) ', '.'], answers: [['competitors']] },
{ number: 5, parts: ['There were over 100 (appliers) ', ' for the position, apparently.'], answers: [['applicants']] },
{ number: 6, parts: ['Your supervisor will be checking up on you (period) ', '.'], answers: [['periodically']] },
{ number: 7, parts: ["If this project's successful, the possibilities for expansion are (unending) ", '.'], answers: [['endless']] },
{ number: 8, parts: ['A good business suit is (timely) ', ' - it never goes out of fashion.'], answers: [['timeless']] },
{ number: 9, parts: ['The building looks a bit (future) ', " from the outside but it's quite traditional inside."], answers: [['futuristic']] },
{ number: 10, parts: ['You have to be prepared for every (event) ', ' in this line of work.'], answers: [['eventuality']] },
{ number: 11, parts: ["Getting angry with your boss is (productive) ", " because it'll just make a bad situation worse."], answers: [['counterproductive']] }
]
},
{
id: 'N',
unitId: 6,
title: 'Word formation: prefix counter-',
instruction: 'Write each of these words with counter- in the correct gap.',
wordBox: ['counteract', 'counterattack', 'counterbalance', 'counterculture', 'counterintelligence', 'countermeasures', 'counteroffensive', 'counterpart'],
questions: [
{ number: 1, parts: ['As a spy during the war, I was often involved in ', ', where we tried to stop the enemy from discovering our secrets.'], answers: [['counterintelligence']] },
{ number: 2, parts: ['The government will have to take some ', ' to stop inflation from increasing.'], answers: [['countermeasures']] },
{ number: 3, parts: ['The reports by independent journalists will hopefully ', " the government's inaccurate propaganda."], answers: [['counterbalance', 'counteract']] },
{ number: 4, parts: ["The army's planning to mount a ", ' later today.'], answers: [['counteroffensive', 'counterattack']] },
{ number: 5, parts: ["You'll have to speak to my ", ' in the New York office.'], answers: [['counterpart']] },
{ number: 6, parts: ['We have to ', ' this rise in crime by toughening up the sentencing laws.'], answers: [['counteract', 'counterbalance']] },
{ number: 7, parts: ["I'm not interested in mainstream art; I'm far more concerned with art produced in the ", '.'], answers: [['counterculture']] },
{ number: 8, parts: ["If he accuses me of lying, I'm going to ", ' by saying I know he lied about the sales figures last month.'], answers: [['counterattack']] }
]
},
{
id: 'O',
unitId: 6,
title: 'Word formation: Margaret Thatcher',
instruction: 'Use the word given in capitals to form a word that fits each gap.',
questions: [
{
number: 1,
parts: [
'Few British politicians have aroused more passion than Margaret Thatcher, who was Prime Minister from 1979 until 1990. It is not (INCIDENT) ',
' that, during her premiership, Britain went through a period of (MOMENT) ',
" change. Those who support Thatcher's policies say she was responsible for changing Britain's (ANTIQUE) ",
' union laws and smashing union power, paving the way for the creation of a modern, (COMPETE) ',
' economy which required much higher (PRODUCE) ',
', efficiency and wage-restraint on the part of the (WORK) ',
' than in the past. One of her core beliefs was that it was (MANAGE) ',
' which was responsible for running companies, rather than unions or the government.\nCritics of Margaret Thatcher point to the very high (EMPLOY) ',
' figures of the 1980s - the official (JOB) ',
' total had risen from just over one million people out of work in 1979 to over three million by 1982.\nWhen Margaret Thatcher realised that she had lost the support of many of her MPs in November 1990 and stood down as Prime Minister, the nation was split. Some saw her resignation as (TIME) ',
', and wished she would continue. Others felt it could not have come too soon. Even today, (HISTORY) ',
' and economists are divided as to whether her legacy was positive or negative overall.'
],
answers: [
['coincidental'], ['momentous'], ['antiquated'], ['competitive'], ['productivity'],
['workforce'], ['management'], ['unemployment'], ['jobless'], ['untimely'], ['historians']
]}]}]
;
