import type { ExerciseSection } from './exercises';

const yesNo = ['Yes', 'No'];

export const unitThirteenExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    unitId: 13,
    title: 'Conditionals: The importance of nothing',
    instruction: 'Write the verbs in brackets in the correct form in each gap.',
    questions: [
      {
        number: 1,
        parts: [
          "There is a lateral thinking question which asks: 'If the Romans ",
          ' (have) all the technology we have today, why would they not have been able to get to the moon?\' ',
          ' (we / be) to think about this logically, we would probably be unable to come up with a satisfactory reason. However, with lateral thinking, there is a perfectly reasonable explanation. ',
          ' (the Romans / be) as technologically advanced as we are, they would indeed be stuck here on Earth. Why? Because if, 2,000 years ago, they ',
          ' (employ) a Roman centurion to count down their Roman space rocket, he would have started at ten (in Latin, of course), got down to one and then stopped. The Romans had no word for \'zero\', so there would have been no \'Lift-off!\'\nOf course, the truth is that if these hypothetical Romans ',
          " (have) the number 'zero', it would be impossible for them to have all our technology. If the concept of zero ",
          ' (develop), we would not have computers today. Modern maths and physics relies absolutely on there being a numeral to represent nothingness. It may seem obvious to us now that zero should exist, but many philosophers in the past were very uncomfortable with the idea. The ancient Greeks tied themselves in logical knots by stating: \'If nothing ',
          ' (be) a number, then it would be something. And if it ',
          ' (do) become something, then it would no longer be nothing.\' If it ',
          ' (be) for an Indian mathematician called Brahmagupta, who knows what would have happened? He wrote the earliest known text stating that zero was a number. If he ',
          ' (do), we might not have set foot on the moon either.'
        ],
        answers: [
          ['had', 'had had'], ['Were we'], ['Had the Romans been'], ['had employed'],
          ['had', 'had had'], ["hadn't been developed", 'had not been developed'],
          ['was', 'were'], ['did'], ["hadn't been", 'had not been'], ["hadn't done", 'had not done']
        ]
      }
    ]
  },
  {
    id: 'B',
    unitId: 13,
    title: 'imagine / what if / suppose / supposing',
    instruction: 'Write the verbs in brackets in the correct form in each gap to make hypothetical situations.',
    questions: [
      { number: 1, parts: ['Supposing you ', ' (have) the chance to spend a year in space, would you take it?'], answers: [['had']] },
      { number: 2, parts: ['What if we ', ' (decide) to run away right now and never come back?'], answers: [['decided']] },
      { number: 3, parts: ['Suppose all your friends ', ' (say) bad things about you behind your back and you found out. What would you do?'], answers: [['said', 'were saying']] },
      { number: 4, parts: ['Imagine you ', ' (have) any money or any means of getting any. What on earth could you do?'], answers: [["didn't have"]] },
      { number: 5, parts: ['What if the Internet ', " (invent)? Wouldn't that be weird?"], answers: [["hadn't been invented"]] },
      { number: 6, parts: ['Supposing the sun ', ' (stop) shining right now, how long would it take for us to realise?'], answers: [['stopped']] },
      { number: 7, parts: ['Imagine we ', ' (just / tell) that a huge meteor was on its way to Earth. What would be the best thing to do?'], answers: [['had just been told', 'were just told']] },
      { number: 8, parts: ['Suppose you ', ' (can) travel back in time. Where would you go?'], answers: [['could']] },
      { number: 9, parts: ['What if everyone in the world ', ' (speak) the same language?'], answers: [['spoke']] },
      { number: 10, parts: ['Suppose it ', ' (prove) that aliens existed and were living among us!'], answers: [['was proved', 'were proved', 'was proven', 'were proven']] },
      { number: 11, parts: ["I do realise it'll probably never happen but imagine her song ", ' (become) really popular!'], answers: [['became']] },
      { number: 12, parts: ['What if you ', ' (give) three wishes by a genie in a bottle? What would you wish for?'], answers: [['were given', 'had been given']] },
      { number: 13, parts: ['Supposing you ', " (wake) up one morning and found you'd gone back in time, how would you feel?"], answers: [['woke']] },
      { number: 14, parts: ["I know we can't travel faster than the speed of light but suppose for a moment that we ", ' (be) able to.'], answers: [['were']] },
      { number: 15, parts: ['Imagine that humans ', " (can) speak. How do you think we'd communicate?"], answers: [["couldn't"]] }
    ]
  },
  {
    id: 'C',
    unitId: 13,
    title: 'as if / as though',
    instruction: 'Look at the question that follows each sentence and choose the answer (A, B or C) which is NOT correct.',
    questions: [
      { number: 1, parts: ['Why do you always act as if you were better than everyone else, John? — Is John better than everyone else? ', ''], answers: [['A Yes, he is.']], options: [['A Yes, he is.', "B No, he isn't.", 'C He might think he is.']] },
      { number: 2, parts: ['Rod often acts as if he had lots of brothers and sisters. — Does Rod have lots of brothers and sisters? ', ''], answers: [['A Yes, he does.']], options: [['A Yes, he does.', "B No, he doesn't.", "C He could have but we don't know."]] },
      { number: 3, parts: ["They look as if they've been running fast. — Have they been running fast? ", ''], answers: [['B No, they haven\'t.']], options: [["A Yes, they're probably sweating.", "B No, they haven't.", 'C They could well have been.']] },
      { number: 4, parts: ["There's no need to be frightened of him. Just treat him as if you didn't know he'd spent some time in prison. — Do you know about the time he spent in prison? ", ''], answers: [['B No, you know nothing about it.']], options: [['A Yes, you do.', 'B No, you know nothing about it.', 'C You probably do.']] },
      { number: 5, parts: ["It was scary! At one point, it felt like we weren't ever going to get out of that jungle alive. — How did you feel in the jungle? ", ''], answers: [['A You would get out of it easily.']], options: [['A You would get out of it easily.', 'B You would possibly die in the jungle.', "C You didn't know if you would survive the jungle or not."]] },
      { number: 6, parts: ['Sara looked as if she had just woken up. — How did Sara look? ', ''], answers: [['B She certainly hadn\'t just woken up then.']], options: [["A She looked tired and she wasn't wearing her make-up.", "B She certainly hadn't just woken up then.", 'C She could possibly just have looked tired but got up a lot earlier.']] }
    ]
  },
  {
    id: 'D',
    unitId: 13,
    title: 'as if / as though',
    instruction: 'Write the verbs in brackets in the correct form in each gap. When a situation is hypothetical or unlikely, use unreal tenses.',
    questions: [
      { number: 1, parts: ['Dave talks as though he ', ' (grow up) in the UK, but he actually only moved here three months ago.'], answers: [['grew up', 'had grown up', "'d grown up"]] },
      { number: 2, parts: ['I was such a mess when I got home I looked as if I ', ' (drag) through a hedge backwards!'], answers: [['had been dragged', "'d been dragged"]] },
      { number: 3, parts: ['It was such a bad case of flu that I honestly felt as if I ', ' (go) to die.'], answers: [['was going', 'were going']] },
      { number: 4, parts: ['When I saw Corin on TV last night, it felt as if he ', " (do) chat shows for ages. I can't believe this was his first one!"], answers: [['had been doing', "'d been doing"]] },
      { number: 5, parts: ['Hardip looked as if he ', " (have) the worst possible news. In fact, he'd failed his finals."], answers: [['had had', "'d had"]] },
      { number: 6, parts: ["Don't you think Maria sometimes looks as though she ", " (wish) she'd been born in another century?"], answers: [['wishes']] },
      { number: 7, parts: ['Rupert often dresses as though he ', " (roll) in money but he's actually on the dole."], answers: [['was rolling', 'were rolling']] },
      { number: 8, parts: ['You kids are behaving as if it ', " (be) a school night. It is, you know!"], answers: [["wasn't", "weren't"]] },
      { number: 9, parts: ['How can you sit there as if nothing ', ' (happen)?'], answers: [['has happened', 'had happened']] }
    ]
  },
  {
    id: 'E',
    unitId: 13,
    title: 'Questions and requests',
    instruction: 'Make each of these statements or questions as polite as possible by using past tenses.',
    questions: [
      { number: 1, parts: ['What time ', ' (you, want) to be woken tomorrow morning?'], answers: [['did you want']] },
      { number: 2, parts: ['I ', ' (look) for an engagement present for a young couple.'], answers: [['was looking']] },
      { number: 3, parts: ['We ', ' (wonder) whether you ', ' (want) to go out this evening.'], answers: [['were wondering'], ['wanted']] },
      { number: 4, parts: ['Excuse me, sir. ', ' (you, plan) to park there for long?'], answers: [['Were you planning']] },
      { number: 5, parts: ['', ' (you, wish) to see me about something, Mr Patel?'], answers: [['Did you wish']] },
      { number: 6, parts: ['', ' (you, look) for anything in particular?'], answers: [['Were you looking']] },
      { number: 7, parts: ['', ' (you, want) milk and sugar in your tea?'], answers: [['Did you want']] },
      { number: 8, parts: ['I ', ' (hope) you ', ' (give) me a hand tomorrow.'], answers: [['was hoping'], ['would give', 'could give', 'might give']] },
      { number: 9, parts: ['How long ', ' (you, intend) to stay here?'], answers: [['did you intend', 'were you intending']] },
{ number: 10, parts: ['I ', ' (wonder) if you ', ' (pay) by credit card, madam.'], answers: [['was wondering'], ['would be paying', 'were paying', 'wanted to pay']] }
]
},
{
id: 'F',
unitId: 13,
title: "it's (high/about) time",
instruction: 'Write a verb from the box in the correct form in each gap.',
wordBox: ['allow', 'buy', 'call', 'do', 'get up', 'give', 'go', 'learn', 'look', 'make', 'start', 'stop'],
questions: [
{ number: 1, parts: ["It's high time you ", " smoking. It's a disgusting habit!"], answers: [['stopped']] },
{ number: 2, parts: ["It's time you ", ' for a job, young man!'], answers: [['looked', 'were looking']] },
{ number: 3, parts: ["I think it's time we ", " a new carpet. This one's got holes in it!"], answers: [['bought']] },
{ number: 4, parts: ["It's time for you kids ", ' your homework.'], answers: [['to do']] },
{ number: 5, parts: ["It's about time the government ", ' listening to the views of ordinary people.'], answers: [['started']] },
{ number: 6, parts: ["Wake up, Bonnie. It's time ", ' now.'], answers: [['to get up']] },
{ number: 7, parts: ["Don't you think it's time you ", ' a pay rise?'], answers: [['were given']] },
{ number: 8, parts: ["It's time for you ", " a partner in the firm; you've been with them for over eight years, after all."], answers: [['to be made']] },
{ number: 9, parts: ["It's definitely time I ", " to stay out after ten o'clock at night."], answers: [['was allowed', 'were allowed']] },
{ number: 10, parts: ["It's time for us ", ' now, Sammy. Are you ready?'], answers: [['to go']] },
{ number: 11, parts: ["Isn't it about time you ", ' to drive?'], answers: [['learnt', 'learned']] },
{ number: 12, parts: ['Is it a good time ', ' Aunty Audrey? What time is it in Australia?'], answers: [['to call']] }
]
},
{
id: 'G',
unitId: 13,
title: 'would rather / sooner',
instruction: 'Write a word or short phrase in each gap so that each second sentence has a similar meaning to the first sentence.',
questions: [
{ number: 1, parts: ["We'd prefer the successful candidate to have previous experience in the field.\nWe'd rather the successful candidate ", ' previous experience in the field.'], answers: [['had']] },
{ number: 2, parts: ['Would you prefer me to come back later?\nWould you rather ', ' later?'], answers: [['I came back']] },
{ number: 3, parts: ["To be honest, I'd prefer you not to tell anyone about this.\nTo be honest, I'd rather ", ' anyone about this.'], answers: [["you didn't tell"]] },
{ number: 4, parts: ["I'd prefer us to get a new kitchen rather than go on an expensive holiday.\nI'd sooner ", ' a new kitchen than ', ' on an expensive holiday.'], answers: [['we got'], ['went']] },
{ number: 5, parts: ["Dad said he'd prefer Brian to be living nearer home and I agree with him.\nDad said he'd rather Brian ", ' nearer home and I agree with him.'], answers: [['was living', 'were living', 'lived']] },
{ number: 6, parts: ['I would prefer her to be sent on a training course rather than sacked.\nI would rather ', ' on a training course than sacked.'], answers: [['she was sent', 'she were sent']] },
{ number: 7, parts: ["I'd prefer us not to talk about this right now, if you don't mind.\nI'd sooner ", " about this right now, if you don't mind."], answers: [["we didn't talk", "we weren't talking"]] },
{ number: 8, parts: ['Of course I would have preferred you to tell me the truth!\nOf course I would rather ', ' me the truth!'], answers: [['you had told', "you'd told"]] },
{ number: 9, parts: ['I think Jeanne would definitely prefer to have a traditional wedding.\nI think Jeanne would definitely rather ', ' a traditional wedding.'], answers: [['have']] },
{ number: 10, parts: ["We would have preferred them not to have stayed so long, that's true.\nWe would sooner ", " so long, that's true."], answers: [["they hadn't stayed"]] }
]
},
{
id: 'H',
unitId: 13,
title: 'wish / if only',
instruction: 'Choose the correct word or phrase. If both are correct, choose both.',
questions: [
{ number: 1, parts: ['All of my friends have got mobiles. I wish I ', ' one too!'], answers: [['had']], options: [['have', 'had']] },
{ number: 2, parts: ["Don't you sometimes wish you ", ' this company?'], answers: [['ran', 'were running']], options: [['ran', 'were running']] },
{ number: 3, parts: ['If only we ', ' the map at home!'], answers: [["hadn't left"]], options: [["didn't leave", "hadn't left"]] },
{ number: 4, parts: ['If only we ', ' have to go to school tomorrow!'], answers: [["didn't"]], options: [["don't", "didn't"]] },
{ number: 5, parts: ['I do wish the bus ', ". I'm going to be late."], answers: [['would come']], options: [['came', 'would come']] },
{ number: 6, parts: ['Do you ever wish that you ', ' really well?'], answers: [['could sing']], options: [['sang', 'could sing']] },
{ number: 7, parts: ["There's only really one thing I regret. I wish I could ", " to university but of course, in those days, it just wasn't possible."], answers: [['have gone']], options: [['go', 'have gone']] },
{ number: 8, parts: ['Excuse me, I wish ', ' to the person in charge.'], answers: [['to speak']], options: [['I spoke', 'to speak']] },
{ number: 9, parts: ['I ', ' it snows tomorrow!'], answers: [['hope']], options: [['wish', 'hope']] },
{ number: 10, parts: ['Why on earth does Geoffrey wish ', ' him a knighthood?'], answers: [['they would give']], options: [['he would be given', 'they would give']] },
{ number: 11, parts: ["Well, I don't think it's a very sensible business venture, but I do wish you ", '.'], answers: [['luck']], options: [['luck', 'lucky']] },
{ number: 12, parts: ['My grandfather always wished that he ', ' taller.'], answers: [['was', 'had been']], options: [['was', 'had been']] },
{ number: 13, parts: ['If only ', " watching Thomas instead of checking your e-mail. He wouldn't have fallen off the slide then."], answers: [["you'd been"]], options: [['you were', "you'd been"]] },
{ number: 14, parts: ['I do wish the taxi driver ', " so slowly. We're never going to get there!"], answers: [["wasn't going"]], options: [["didn't go", "wasn't going"]] },
{ number: 15, parts: ['If only Peggy ', " sent off. I'm sure we'd have won the match."], answers: [["hadn't been"]], options: [["wasn't", "hadn't been"]] }
]
},
{
id: 'I',
unitId: 13,
title: 'Unreal time review',
instruction: 'Choose the correct answer.',
questions: [
{ number: 1, parts: ['Imagine ', ' when the ancient Egyptians built the pyramids. How would your life have been different?'], answers: [["you'd been living"]], options: [["you're living", "you'd been living", 'you live', "you've been living"]] },
{ number: 2, parts: ['What if your cat suddenly ', ' to you right now? How would you react?'], answers: [['started talking']], options: [['had started talking', 'is starting to talk', 'starts talking', 'started talking']] },
{ number: 3, parts: ['Would Rubik have become rich if he ', " the Rubik's Cube?"], answers: [["hadn't invented"]], options: [["hadn't invented", "hadn't been inventing", "didn't invent", "wasn't inventing"]] },
{ number: 4, parts: ["It's high time ", ' rid of this old sofa.'], answers: [['we got']], options: [['we got', 'we get', 'for us to get', 'to get']] },
{ number: 5, parts: ["It's amazing how Jenny acts as though she and Darren ", ' serious problems at the moment.'], answers: [["weren't having"]], options: [["aren't having", "weren't having", "hadn't had", "hadn't been having"]] },
{ number: 6, parts: ['', ' either of you want some more dessert?'], answers: [['Did']], options: [['Had', 'Would', 'Did', 'Were']] },
{ number: 7, parts: ['If you ', ' to attend the wedding, would you still have to reply to the invitation?'], answers: [["weren't planning"]], options: [["aren't planning", "don't plan", "weren't planning", "hadn't been planning"]] },
{ number: 8, parts: ['Apparently, Lewis would rather we ', ' anything special for his 18th birthday next month.'], answers: [["didn't organise"]], options: [["don't organise", "didn't organise", "haven't organised", "aren't going to organise"]] }
]
},
{
  id: 'J',
  unitId: 13,
  title: 'Unreal time: key word transformations',
  instruction: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words.',
  questions: [
    { number: 1, parts: ["Pauline doesn't want to be given a main part in the school play. (rather)\nPauline ", ' a main part in the school play.'], answers: [['would rather not be given', "'d rather not be given"]] },
    { number: 2, parts: ["We didn't get to meet the Minister and that was a great shame. (only)\nIf ", ' to meet the Minister!'], answers: [['only we had got', 'we had only got', "only we'd got", "we'd only got"]] },
    { number: 3, parts: ["Why don't they stop making so much noise downstairs? (wish)\nI ", ' making so much noise downstairs!'], answers: [["wish they'd stop", 'wish they would stop']] },
    { number: 4, parts: ["What a shame I didn't see his face when you told him the news. (could)\nI wish ", ' his face when you told him the news.'], answers: [['I could have seen']] },
    { number: 5, parts: ["Don't you think they should bring out a new version of MatchPlayer? (about)\nDon't you think it's ", ' out a new version of MatchPlayer?'], answers: [['about time they brought']] },
    { number: 6, parts: ['I only knew about the meeting because Cynthia rang me. (if)\nI wouldn\'t have known about the meeting ', ' me.'], answers: [["if Cynthia hadn't rung", 'if Cynthia had not rung']] }
  ]
},

];

export const unitFourteenExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    unitId: 14,
    title: 'Topic vocabulary: Quantity',
    instruction: 'Choose the correct word.',
    questions: [
      { number: 1, parts: ['Thankfully, she only suffered ', ' injuries in the accident.'], answers: [['minor']], options: [['minor', 'meagre', 'minute', 'tiny']] },
      { number: 2, parts: ['A half, written as a/an ', ', looks like this: 1/2.'], answers: [['fraction']], options: [['fraction', 'rate', 'ratio', 'equation']] },
      { number: 3, parts: ["In a few hundred years' time, oil will not be nearly so ", ' here on Earth.'], answers: [['abundant']], options: [['abundant', 'ample', 'considerable', 'immense']] },
      { number: 4, parts: ['', ' is measured in cm3 or m3.'], answers: [['Volume']], options: [['Mass', 'Extent', 'Volume', 'Magnitude']] },
      { number: 5, parts: ["Don't wash that sweater in really hot water or it'll ", '.'], answers: [['shrink']], options: [['diminish', 'shrink', 'reduce', 'decrease']] },
      { number: 6, parts: ['Maps on paper can only show the world in two ', '.'], answers: [['dimensions']], options: [['areas', 'masses', 'dimensions', 'proportions']] },
      { number: 7, parts: ['Why are all your clothes in a ', ' on the floor?'], answers: [['heap']], options: [['bulk', 'batch', 'heap', 'sum']] },
      { number: 8, parts: ["Sending out e-mails that people haven't asked for to ", " addresses is often known as 'spamming'."], answers: [['multiple']], options: [['sufficient', 'widespread', 'countless', 'multiple']] }
    ]
  },
  {
    id: 'B',
    unitId: 14,
    title: 'Topic vocabulary: Quantity',
    instruction: 'Each of the words in bold is in the wrong sentence. Write the correct words in each gap.',
    questions: [
      { number: 1, parts: ['The (uneven) ', ' age of everyone in this class is 16.5.'], answers: [['average']] },
      { number: 2, parts: ["It's impossible to (expand) ", ' how much destruction the hurricane has caused.'], answers: [['quantify']] },
      { number: 3, parts: ['There was a severe shortage of food in the Second World War so many governments had to (force) ', ' it.'], answers: [['ration']] },
      { number: 4, parts: ['Balloons (ration) ', ' when you blow into them.'], answers: [['expand']] },
      { number: 5, parts: ["There isn't a/an (equidistant) ", ' number of numbers because you can always add one more onto the biggest number you can think of.'], answers: [['finite']] },
      { number: 6, parts: ['Russia is an absolutely (finite) ', ' country - it can take two weeks to travel from one side to the other by train.'], answers: [['vast']] },
      { number: 7, parts: ['Any point on a circle is (vast) ', ' from the centre.'], answers: [['equidistant']] },
      { number: 8, parts: ["There's a huge (quantify) ", ' between what the rich and the poorest members of society earn.'], answers: [['imbalance']] },
      { number: 9, parts: ['The (imbalance) ', ' that makes things drop to the ground is called gravity.'], answers: [['force']] },
      { number: 10, parts: ['The walls of the old cottage were rough and (average) ', ' in height.'], answers: [['uneven']] },
      { number: 11, parts: ['The density of an object is calculated by dividing its (intensity) ', ' by its volume.'], answers: [['mass']] },
      { number: 12, parts: ['The storm hit the coast with such (mass) ', ' that many buildings in the region were destroyed.'], answers: [['intensity', 'force']] }
    ]
  },
  {
    id: 'C',
    unitId: 14,
    title: 'Topic vocabulary: Money',
    instruction: 'Choose the correct word or phrase.',
    questions: [
      { number: 1, parts: ['The judge awarded us 1,000 euros ', " when the builder admitted he hadn't followed safety standards."], answers: [['damages']], options: [['damage', 'damages']] },
      { number: 2, parts: ["The hotel was so bad I'm thinking of asking for ", ' from the travel agency.'], answers: [['compensation']], options: [['compensation', 'debit']] },
      { number: 3, parts: ['Many companies ', ' tax from your salary before you get paid.'], answers: [['deduct']], options: [['withdraw', 'deduct']] },
      { number: 4, parts: ["Hello. I'd like to ", ' 500 euros from my account, please.'], answers: [['withdraw']], options: [['withdraw', 'deduct']] },
      { number: 5, parts: ["You can pay in 12 monthly instalments, but you'll have to make an initial ", ' of £25.'], answers: [['down payment']], options: [['lump sum', 'down payment']] },
      { number: 6, parts: ['If you win, you can choose to receive it all in one go as a ', ' or you can have a certain amount per year for life.'], answers: [['lump sum']], options: [['lump sum', 'down payment']] },
      { number: 7, parts: ["I'll ", ' the money in your bank account in the morning.'], answers: [['deposit']], options: [['finance', 'deposit']] },
      { number: 8, parts: ["I'm thinking of ", " on the stock exchange. Do you think it's risky?"], answers: [['speculating']], options: [['speculating', 'depositing']] },
      { number: 9, parts: ["Why don't you arrange to pay your bills by direct ", "? That way, they're automatically paid from your account."], answers: [['debit']], options: [['debt', 'debit']] },
      { number: 10, parts: ['Where is the company planning to get the ', ' for this project from?'], answers: [['finance']], options: [['sum', 'finance']] }
    ]
  },
  {
    id: 'D',
    unitId: 14,
    title: 'Topic vocabulary: Money (Money management - an introduction)',
    instruction: 'Write a word from the box in the correct form in each gap.',
    wordBox: ['benefit', 'debt', 'dividend', 'insurance', 'interest', 'investment', 'mortgage', 'overdraft', 'pension', 'share'],
    questions: [
      { number: 1, parts: ['Different bank accounts pay different amounts of ', '. It makes sense to shop around before you open an account.'], answers: [['interest']] },
      { number: 2, parts: ["If your salary doesn't always get you to the end of the month, you'll have to arrange a/an ", " with your bank, so it's worth being on good terms with your bank manager."], answers: [['overdraft']] },
      { number: 3, parts: ["If you're planning to buy a house, you'll probably need to get a/an ", '. Once again, shop around to get the best deal.'], answers: [['mortgage']] },
      { number: 4, parts: ["If you're thinking about taking out life ", ", make sure you talk to an independent financial advisor. They'll give you unbiased advice."], answers: [['insurance']] },
      { number: 5, parts: ['Make sure you know what ', " you're entitled to. If you're on a low income and have a family, you may be surprised how much you'll receive from the state each month."], answers: [['benefits']] },
      { number: 6, parts: ["Even if you're only in your early twenties, it pays to plan for the future. If you can, start paying into a/an ", ' scheme now to ensure you have a comfortable retirement.'], answers: [['pension']] },
      { number: 7, parts: ['It goes without saying that you should try to avoid getting into too much ', ". Only buy things on credit if you're sure you can afford to pay the monthly instalments."], answers: [['debt']] },
      { number: 8, parts: ['If you do manage to start saving a little each month, you might want to think about buying some ', '.'], answers: [['shares']] },
      { number: 9, parts: ['Their value can go down of course, but they can be a good ', ', particularly in the mid- to long-term.'], answers: [['investment']] },
      { number: 10, parts: ['Many companies pay an annual ', " to shareholders - this can be a welcome source of extra income if the company's doing well."], answers: [['dividend']] }
    ]
  },
  {
    id: 'E',
    unitId: 14,
    title: 'Phrasal verbs: Dealing with debt',
    instruction: 'Write one word in each gap.',
    questions: [
      {
        number: 1,
        parts: [
          'If your debts are mounting ',
          ' and your financial problems are weighing you ',
          ', the first thing to do is to stay calm. Sizing ',
          ' your financial situation - however painful - is far better than just ignoring it. The next thing to do is to make a financial plan.\nAt the top, write down your total monthly income. Then make a list of all your monthly outgoings. Break these outgoings ',
          ' into essentials (such as electricity bills and food) and luxuries (such as nights out). Cross the luxuries off - there\'s no more of them for the time being - and take your essential outgoings ',
          " from your income. The amount that's remaining is the amount you can afford to pay ",
          ' to your creditors each month. Most credit card companies are willing to accept payment in instalments as they know that if you - and they - just let the debt build ',
          ' indefinitely it will never be paid off. If your essential expenses add up ',
          " more than your income, then your situation is more serious and you'll have to consider drastic action either to increase your income or reduce the amount of money you have to pay ",
          ' each month on essentials.'
        ],
        answers: [['up'], ['down'], ['up'], ['down'], ['away'], ['back'], ['up'], ['to'], ['out']]
      }
    ]
  },
  {
    id: 'F',
    unitId: 14,
    title: 'Phrasal verbs: matching',
    instruction: 'Match each sentence beginning with the correct ending.',
    wordBox: [
      'A up over 700 hours of flying time already.',
      'B up support is to get people in the high street to sign a petition.',
      'C it over till next year and take it in January.',
      'D up most of the land round here already.',
      'E out the company when it was threatened with closure.',
      "F blackmailers off - I'd rather go to the police and face the consequences.",
"G together, I'm sure we can afford to get Mrs Timms a nice leaving present."
],
questions: [
{ number: 1, parts: ['The big supermarket chains have bought ', ''], answers: [['D']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G']] },
{ number: 2, parts: ['If we club ', ''], answers: [['G']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G']] },
{ number: 3, parts: ["Phil's clocked ", ''], answers: [['A']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G']] },
{ number: 4, parts: ['One good way to drum ', ''], answers: [['B']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G']] },
{ number: 5, parts: ['Six managers bought ', ''], answers: [['E']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G']] },
{ number: 6, parts: ["I've got two weeks' holiday left but I think I'll carry ", ''], answers: [['C']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G']] },
{ number: 7, parts: ["I'd never buy ", ''], answers: [['F']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G']] }
]
},
{
id: 'G',
unitId: 14,
title: 'Phrasal verbs with together',
instruction: 'Choose Yes if the phrasal verb with together contains the idea of people doing something as a group; otherwise choose No.',
questions: [
{ number: 1, parts: ['Eight countries in the region have banded together to make a free-trade zone. ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 2, parts: ["I didn't know anyone was coming to dinner, so I had to cobble a meal together from whatever was in the fridge. ", ''], answers: [['No']], options: [yesNo] },
{ number: 3, parts: ["Why don't we all get together on Tuesday evening? ", ''], answers: [['Yes']], options: [yesNo] },
{ number: 4, parts: ['The twins have been behaving so badly recently. I should knock their heads together! ', ''], answers: [['No']], options: [yesNo] },
{ number: 5, parts: ['Everyone in the village pulled together to make the carnival a success. ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 6, parts: ["The only way we'll all get off this mountain alive is if we stick together. ", ''], answers: [['Yes']], options: [yesNo] },
{ number: 7, parts: ['The three of us put together quite an interesting proposal. ', ''], answers: [['No']], options: [yesNo] }
]
},
{
id: 'H',
unitId: 14,
title: 'Phrases, patterns and collocations',
instruction: 'Choose the correct word.',
questions: [
{ number: 1, parts: ["It took quite a while but at ", " last the website's starting to take off."], answers: [['long']], options: [['slow', 'long']] },
{ number: 2, parts: ['Did you really offer Liz a 50 per cent ', ' in the business?'], answers: [['share']], options: [['share', 'piece']] },
{ number: 3, parts: ["No, you can't borrow a thousand euros! I'm not made ", ' money, you know!'], answers: [['of']], options: [['of', 'with']] },
{ number: 4, parts: ['Nice apartments are a bit ', ' on the ground round here.'], answers: [['thin']], options: [['thin', 'slim']] },
{ number: 5, parts: ['I literally went weak ', " the knees when he told me how much he'd won."], answers: [['at']], options: [['on', 'at']] },
{ number: 6, parts: ["Let's discuss this ", ' depth tomorrow.'], answers: [['in']], options: [['in', 'with']] },
{ number: 7, parts: ["The field's just over four hectares ", ' size.'], answers: [['in']], options: [['at', 'in']] },
{ number: 8, parts: ["They said on the news the escaped convict's still ", ' large.'], answers: [['at']], options: [['at', 'in']] },
{ number: 9, parts: ["The problem with Jimmy is that he's such a ", ' loser.'], answers: [['poor']], options: [['weak', 'poor']] },
{ number: 10, parts: ['I hate landlords who grow ', ' on the rent they collect.'], answers: [['fat']], options: [['fat', 'large']] },
{ number: 11, parts: ['The area used to be very ', ' in tin and copper.'], answers: [['rich']], options: [['rich', 'wealthy']] },
{ number: 12, parts: ["It's a good business opportunity ", ' my money.'], answers: [['for']], options: [['for', 'with']] },
{ number: 13, parts: ['There were a whole ', ' of people I knew at the opening.'], answers: [['load']], options: [['number', 'load']] }
]
},
{
id: 'I',
unitId: 14,
title: 'Phrases, patterns and collocations',
instruction: 'Write one word in each gap.',
questions: [
{ number: 1, parts: ['Jane just stood there and watched while we did all the work. A ', ' lot of use that was!'], answers: [['fat']] },
{ number: 2, parts: ['You can make a lot of money if you work in ', ' finance.'], answers: [['high']] },
{ number: 3, parts: ["We've travelled the length and ", ' of the country looking for the next Teen Star!'], answers: [['breadth']] },
{ number: 4, parts: ['Hi Chloe! Long time no ', '!'], answers: [['see']] },
{ number: 5, parts: ['The first moments of the universe are often known as the Big ', '.'], answers: [['Bang']] },
{ number: 6, parts: ["It only cost five euros and we were there all day. We really did get our money's ", '.'], answers: [['worth']] },
{ number: 7, parts: ["It's a pay and ", ' car park, so get a ticket from the machine before you go shopping.'], answers: [['display']] },
{ number: 8, parts: ["'That was very generous of you to give half of your lunch to Tony.' 'Share and share ", ", that's what I say.'"], answers: [['alike']] },
{ number: 9, parts: ['And suddenly Diana appeared out of ', ' air.'], answers: [['thin']] },
{ number: 10, parts: ["I think you're on very weak ", ' with that argument.'], answers: [['ground']] }
]
},
{
id: 'J',
unitId: 14,
title: 'Phrases, patterns and collocations',
instruction: 'For each question, write one word which can be used in all three sentences.',
questions: [
{ number: 1, parts: ["I think we're running ___ of petrol. Nick would be a terrible teacher - he's got such a ___ temper. At least she apologised for calling me in at such ___ notice. Word: ", ''], answers: [['short']] },
{ number: 2, parts: ["It ___ to shop around when you're looking for a mortgage. I don't mind Guy moving in for a few weeks as long as he ___ his way. It always puts a smile on my face when someone ___ me a compliment. Word: ", ''], answers: [['pays']] },
{ number: 3, parts: ["You can have one more bowl of ice cream but then that's your ___. Maybe it's just my ___ in life never to find someone to settle down with. I've got a ___ on this weekend, so I doubt we'll be able to meet up unfortunately. Word: ", ''], answers: [['lot']] },
{ number: 4, parts: ["Pauline seems to be in very ___ spirits this afternoon. There's quite a ___ risk of side effects with this medicine, apparently. It's ___ time you started thinking about your future. Word: ", ''], answers: [['high']] },
{ number: 5, parts: ["Tom's actually quite a ___ name in the poultry industry. I've said I'm sorry; there's no need to make such a ___ thing out of it. It's every teenager's dream to make it ___ in the entertainment business. Word: ", ''], answers: [['big']] },
{ number: 6, parts: ["I don't think I've got any ___ change, I'm afraid. You made me feel so ___ when you criticised me like that in front of everyone. I'm really not keen on making ___ talk at parties. Word: ", ''], answers: [['small']] }
]
},
{
  id: 'K',
  unitId: 14,
  title: 'Phrases, patterns and collocations: key word transformations',
  instruction: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words.',
  questions: [
    { number: 1, parts: ['Some people will do anything to make money. (lengths)\nSome people will ', ' to make money.'], answers: [['go to any lengths']] },
    { number: 2, parts: ["I don't know why you're saying this is so important. (deal)\nI don't know why you're ", ' this.'], answers: [['making such a big deal out of', 'making a big deal out of', 'making such a big deal of', 'making a big deal of']] },
    { number: 3, parts: ['Simon said he had no idea what he was doing for the first few weeks of his new job. (depth)\nSimon said he ', ' for the first few weeks of his new job.'], answers: [['was completely out of his depth', 'was totally out of his depth', 'was out of his depth']] },
    { number: 4, parts: ["I think they're largely responsible for what's happened. (small)\nI hold them ", " responsible for what's happened."], answers: [['in no small way']] },
    { number: 5, parts: ["We've searched everywhere for the lottery ticket and can't find it anywhere. (low)\nWe've searched ", " for the lottery ticket and can't find it anywhere."], answers: [['high and low']] },
    { number: 6, parts: ['We talked about investments for a very long time. (length)\nWe talked ', ' about investments.'], answers: [['at great length', 'at length']] }
  ]
},

{
id: 'L',
unitId: 14,
title: 'Idioms',
instruction: 'Each of the bold words or phrases is incorrect. Rewrite them correctly.',
questions: [
{ number: 1, parts: ["I was hoping I'd raise about 1,000 euros for the local hospital, but I fell (small) ", ' by a few hundred euros.'], answers: [['short']] },
{ number: 2, parts: ['Jerry and I agreed to split the costs (twenty-twenty) ', " so we'd each pay exactly half."], answers: [['fifty-fifty']] },
{ number: 3, parts: ["There are two ways to get to Innsbruck, but I think it's as (wide) ", " as it's long."], answers: [['broad']] },
{ number: 4, parts: ['My dad taught me about the importance of saving money when I was knee-high to a (locust) ', '.'], answers: [['grasshopper']] },
{ number: 5, parts: ["So many politicians just seem to be trying to line their own (wallets) ", " these days - it's disgraceful."], answers: [['pockets']] },
{ number: 6, parts: ["We shouldn't worry about paying for that advert. The cost is a drop in the (sea) ", ' in terms of the whole marketing budget.'], answers: [['ocean']] },
{ number: 7, parts: ["I've decided to sell the whole business - lock, stock and (trigger) ", '.'], answers: [['barrel']] },
{ number: 8, parts: ["Don't pay the whole bill. Let's go (half) ", '.'], answers: [['halves', 'fifty-fifty']] },
{ number: 9, parts: ["There are two ways to get to Innsbruck, but I think it's six of one and half a (twelve) ", ' of the other.'], answers: [['dozen']] },
{ number: 10, parts: ['Lucy managed to save quite a (clean) ', ' sum last summer.'], answers: [['tidy']] },
{ number: 11, parts: ["We're not going to make a profit this year, but we should just break (equal) ", '.'], answers: [['even']] },
{ number: 12, parts: ["Colin gets a new car every August. He's just trying to (stay) ", ' up with the Joneses, if you ask me.'], answers: [['keep']] }
]
},
{
id: 'M',
unitId: 14,
title: 'Word formation',
instruction: 'Complete the sentences by changing the form of the word in capitals.',
questions: [
{ number: 1, parts: ['How dare they ', ' blame without knowing all the facts first? (PORTION)'], answers: [['apportion']] },
{ number: 2, parts: ['At the ', ' of summer, the temperature can reach 50°C. (HIGH)'], answers: [['height']] },
{ number: 3, parts: ["I'd like to make a ", ' from my bank account, please. (DRAW)'], answers: [['withdrawal']] },
{ number: 4, parts: ['Doris Carter, who is 107 today, puts her ', ' down to having a loving family, and seven cups of tea a day. (LONG)'], answers: [['longevity']] },
{ number: 5, parts: ['A ', ' of residents now support the proposal to build a new roundabout in the town centre. (MAJOR)'], answers: [['majority']] },
{ number: 6, parts: ['What strength ', ' do those binoculars have? (MAGNIFY)'], answers: [['magnification']] },
{ number: 7, parts: ["We took out a loan from the bank, so we're going to have to make monthly ", ' for the next five years. (PAY)'], answers: [['repayments', 'payments']] },
{ number: 8, parts: ['Liskeard and Callington are basically ', " from here, so it'll take about the same time to get to either of them. (DISTANT)"], answers: [['equidistant']] },
{ number: 9, parts: ['Their help was hugely ', '. (BENEFIT)'], answers: [['beneficial']] },
{ number: 10, parts: ['Please keep e-mails short. ', " makes everyone's lives easier. (BRIEF)"], answers: [['Brevity']] },
{ number: 11, parts: ["The school's football pitch has been ", ' over the summer to conform to new national standards. (LONG)'], answers: [['lengthened']] },
{ number: 12, parts: ["I don't want to ", " the agony for you, but I'm afraid you'll have to wait another two days to know how much money you've won. (LONG)"], answers: [['prolong']] },
{ number: 13, parts: ['You might find it hard to answer all the questions in the ', ' time. (LOT)'], answers: [['allotted']] }
]
},
{
id: 'N',
unitId: 14,
title: 'Word formation: Albert Einstein',
instruction: 'Use the word given in capitals to form a word that fits each gap.',
questions: [
{
number: 1,
parts: [
"Albert Einstein's work has enormously (BROAD) ",
' our understanding of the universe and has had a (CONSIDER) ',
' impact on all our lives. Thanks to his equation E=mc2, we now know that energy and mass (or matter) are directly related to each other. To a very great (EXTEND) ',
', it is Einstein who is responsible for our now knowing that space and time are actually one thing: space-time. (ADD) ',
', without E=mc2, we would not have nuclear power - and nuclear weapons - today.\nEinstein did not become famous because of E=mc2, which was first published in 1905. At the time, his paper was (LARGE) ',
' ignored, even by most scientists. Indeed, it was 14 years later that Einstein first made headlines round the world, when scientific evidence began to show that his Theory of General Relativity, which was an (EXTEND) ',
' of his 1905 paper, was correct.\nThe idea that only a tiny (MINOR) ',
" of scientists can understand Einstein's theories comes from this media reporting. The New York Times asked its golfing correspondent to cover the story. As he was clearly out of his (DEEP) ",
', he presumed that everyone else was too. A myth was born.\nSpace, time, energy and mass are (WEIGH) ',
" subjects - no pun intended - to get to grips with, but Einstein's ideas are not impossible to understand by any means. The implications of Einstein's work for our lives, however, may well be (FINITE) ",
'.'
],
answers: [
['broadened'], ['considerable'], ['extent'], ['Additionally'], ['largely'],
['extension'], ['minority'], ['depth'], ['weighty'], ['infinite']
]
}
]
},
{
id: 'O',
unitId: 14,
title: 'Word formation: prefix en-',
instruction: "Classify each word with the prefix en- into the correct category: 'put in/on (a)...', 'make ...' or 'bring into effect'.",
wordBox: ['able', 'act', 'circle', 'code', 'danger', 'dear', 'force', 'large', 'list', 'rage', 'rich', 'slave', 'throne', 'tomb', 'trap'],
questions: [
{ number: 1, parts: ['able: ', ''], answers: [['make ...']], options: [['put in/on (a)...', 'make ...', 'bring into effect']] },
{ number: 2, parts: ['act: ', ''], answers: [['bring into effect']], options: [['put in/on (a)...', 'make ...', 'bring into effect']] },
{ number: 3, parts: ['circle: ', ''], answers: [['put in/on (a)...']], options: [['put in/on (a)...', 'make ...', 'bring into effect']] },
{ number: 4, parts: ['code: ', ''], answers: [['put in/on (a)...']], options: [['put in/on (a)...', 'make ...', 'bring into effect']] },
{ number: 5, parts: ['danger: ', ''], answers: [['put in/on (a)...']], options: [['put in/on (a)...', 'make ...', 'bring into effect']] },
{ number: 6, parts: ['dear: ', ''], answers: [['make ...']], options: [['put in/on (a)...', 'make ...', 'bring into effect']] },
{ number: 7, parts: ['force: ', ''], answers: [['bring into effect']], options: [['put in/on (a)...', 'make ...', 'bring into effect']] },
{ number: 8, parts: ['large: ', ''], answers: [['make ...']], options: [['put in/on (a)...', 'make ...', 'bring into effect']] },
{ number: 9, parts: ['list: ', ''], answers: [['put in/on (a)...']], options: [['put in/on (a)...', 'make ...', 'bring into effect']] },
{ number: 10, parts: ['rage: ', ''], answers: [['put in/on (a)...']], options: [['put in/on (a)...', 'make ...', 'bring into effect']] },
{ number: 11, parts: ['rich: ', ''], answers: [['make ...']], options: [['put in/on (a)...', 'make ...', 'bring into effect']] },
{ number: 12, parts: ['slave: ', ''], answers: [['make ...']], options: [['put in/on (a)...', 'make ...', 'bring into effect']] },
{ number: 13, parts: ['throne: ', ''], answers: [['put in/on (a)...']], options: [['put in/on (a)...', 'make ...', 'bring into effect']] },
{ number: 14, parts: ['tomb: ', ''], answers: [['put in/on (a)...']], options: [['put in/on (a)...', 'make ...', 'bring into effect']] },
{ number: 15, parts: ['trap: ', ''], answers: [['put in/on (a)...']], options: [['put in/on (a)...', 'make ...', 'bring into effect']] }
]
},
{
id: 'P',
unitId: 14,
title: 'Word formation: prefix en-',
instruction: 'Write a word with en- from exercise O in the correct form in each gap.',
questions: [
{ number: 1, parts: ['Are you really thinking of ', ' in the army?'], answers: [['enlisting']] },
{ number: 2, parts: ['This new software should ', ' us to speed up the distribution process no end.'], answers: [['enable']] },
{ number: 3, parts: ["There's no point having a law if the police can't ", ' it.'], answers: [['enforce']] },
{ number: 4, parts: ["We were completely ", " by journalists and photographers and couldn't get to the car."], answers: [['encircled']] },
{ number: 5, parts: ['The destruction of the rainforests is ', ' the survival of a number of species.'], answers: [['endangering']] },
{ number: 6, parts: ['Can we ', ' the photo so we can see their faces in a bit more detail?'], answers: [['enlarge']] }
]
}
];