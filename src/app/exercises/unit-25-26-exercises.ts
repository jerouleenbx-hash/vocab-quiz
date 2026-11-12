import type { ExerciseSection } from './exercises';

export const unitTwentyFiveExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    unitId: 25,
    title: 'Reported speech to direct speech',
    instruction: 'Complete each second sentence so that it has a similar meaning to the first sentence.',
    questions: [
      { number: 1, parts: ["Jimmy said that he definitely wasn't going to the match on Saturday.\n'", ",' said Jimmy."], answers: [["I'm definitely not going to the match on Saturday", 'I am definitely not going to the match on Saturday']] },
      { number: 2, parts: ["Alison told Ben that he'd forgotten to do the washing-up.\n'", ", Ben!' said Alison."], answers: [["You've forgotten to do the washing-up", 'You have forgotten to do the washing-up', 'You forgot to do the washing-up']] },
      { number: 3, parts: ["Jason admitted that he had been lying when he'd said he had nothing to do with the breakages.\n'Actually, I ", ",' admitted Jason."], answers: [['was lying when I said I had nothing to do with the breakages']] },
      { number: 4, parts: ["Paul told me that Dawn hadn't been particularly hard-working when she was at university.\n'", ",' said Paul."], answers: [["Dawn wasn't particularly hard-working when she was at university", 'Dawn was not particularly hard-working when she was at university']] },
      { number: 5, parts: ["Sharon shouted that she hadn't finished yet.\n'", "!' shouted Sharon."], answers: [["I haven't finished yet", 'I have not finished yet']] },
      { number: 6, parts: ["Rudy said he'd meet us all at the café in half an hour.\n'", ",' said Rudy."], answers: [["I'll meet you all at the café in half an hour", 'I will meet you all at the café in half an hour']] },
      { number: 7, parts: ["Belinda's mum told her that she didn't have to eat her sprouts if she didn't want to.\n'", ", Belinda,' said her mum."], answers: [["You don't have to eat your sprouts if you don't want to", 'You do not have to eat your sprouts if you do not want to']] },
      { number: 8, parts: ["Sebastian announced that he and Tristan were going to set up a website.\n'Tristan ", ",' announced Sebastian."], answers: [['and I are going to set up a website']] },
      { number: 9, parts: ["Karen asked Diana when she had got married.\n'", ", Diana?' asked Karen."], answers: [['When did you get married']] },
      { number: 10, parts: ["Freda asked Bjorn if she could borrow his bike for a couple of hours.\n'Bjorn, ", "?' asked Freda."], answers: [['can I borrow your bike for a couple of hours', 'could I borrow your bike for a couple of hours', 'may I borrow your bike for a couple of hours']] }
    ]
  },
  {
    id: 'B',
    unitId: 25,
    title: 'Reported speech: tense changes',
    instruction: 'Choose the correct word or phrase. If both are correct, choose both.',
    questions: [
      { number: 1, parts: ['When I told Mr Peters that the dog ', " eaten my homework, he didn't believe me."], answers: [['had']], options: [['has', 'had']] },
      { number: 2, parts: ['Adam told me that his girlfriend ', ' eat meat at all.'], answers: [["doesn't", "didn't"]], options: [["doesn't", "didn't"]] },
      { number: 3, parts: ['When I saw Ed yesterday morning, he told me that he ', ' going to look at a flat in the afternoon.'], answers: [['was']], options: [['is', 'was']] },
      { number: 4, parts: ['Roger told me about the pop quiz. He said his team ', ' doing well in the first few rounds, but that it ', ' wrong with the round about dance music.'], answers: [['were', 'had been'], ['all went', 'had all gone']], options: [['were', 'had been'], ['all went', 'had all gone']] },
      { number: 5, parts: ['When we watched Death Watch III, Paul said he ', ' never seen a worse movie in his life!'], answers: [['had']], options: [['has', 'had']] },
      { number: 6, parts: ['Did Galileo say that the Earth ', ' round the sun?'], answers: [['goes', 'went']], options: [['goes', 'went']] },
      { number: 7, parts: ['Phil told me on Friday that he ', ' just bumped into Wally Deacon!'], answers: [['had']], options: [['has', 'had']] },
      { number: 8, parts: ['Babs announced to us all last night that she ', ' finally giving up smoking.'], answers: [['is', 'was']], options: [['is', 'was']] },
      { number: 9, parts: ['Did you say that you ', ' want sugar in your coffee or not?'], answers: [['do', 'did']], options: [['do', 'did']] },
      { number: 10, parts: ['I told Brian last week that the office ', " opening on Tuesday so I don't know why he showed up yesterday morning."], answers: [["wasn't"]], options: [["isn't", "wasn't"]] }
    ]
  },
  {
    id: 'C',
    unitId: 25,
    title: 'Reported speech: modals and error correction',
    instruction: 'If the bold word or phrase is correct, write OK. If it is incorrect, rewrite it correctly.',
    questions: [
      { number: 1, parts: ['Bob (did tell) ', " me that he probably wouldn't be coming in today."], answers: [['OK']] },
      { number: 2, parts: ["Last week he told us that we (don't have to) ", " do that exercise and then yesterday he said he'd made a mistake."], answers: [["didn't have to", 'did not have to']] },
      { number: 3, parts: ['Did you say these bills (had to be) ', ' paid before tomorrow?'], answers: [['OK']] },
      { number: 4, parts: ['Steve said he (could) ', ' play guitar when he was two years old. Do you believe that?'], answers: [['OK']] },
      { number: 5, parts: ["Pauline told my mum that she'd (had better) ", " get a lawyer. I think she's right."], answers: [['better']] },
      { number: 6, parts: ['When we went to the party, Claudia told me that I (must) ', ' be on my best behaviour all evening. It was very rude of her, I thought.'], answers: [['had to', 'was to', 'should']] },
      { number: 7, parts: ["Darren said that Mr Taylor (was to) ", " have forgotten about the meeting, but I'm not so sure. I think he just didn't want to come."], answers: [['must']] },
      { number: 8, parts: ["When I was a teenager, my dad always told me that (I'm not to) ", " stay out later than ten o'clock."], answers: [['I was not to', "I wasn't to", 'I should not', "I shouldn't"]] },
      { number: 9, parts: ["I was pleased when Jilly told us that she (can) ", " help us paint the flat. If only I'd known then what that meant!"], answers: [['could']] },
      { number: 10, parts: ["When I was at school, my English teacher always told us that we (don't have to) ", ' pay attention but we (do have to) ', ' be quiet.'], answers: [["didn't have to", 'did not have to'], ['did have to', 'had to']] },
      { number: 11, parts: ['The letter they sent six months ago said that they (shall) ', " be in touch again soon. Well, I haven't heard anything since!"], answers: [['would']] },
      { number: 12, parts: ['Seven years ago, the Prime Minister stated that his government (will) ', " be corruption-free. It doesn't look that way now, does it?"], answers: [['would']] }
    ]
  },
  {
    id: 'D',
    unitId: 25,
    title: 'Reported speech: pronouns and determiners',
    instruction: 'Write one word in each gap.',
    questions: [
      { number: 1, parts: ["'Oh no! These shoes don't go with that suit at all!' I actually really liked the shoes but Maureen told me ", ' didn\'t go with the suit I was planning to wear.'], answers: [['they']] },
      { number: 2, parts: ["'This play is rubbish!' Susan told us in no uncertain terms that ", ' play was rubbish.'], answers: [['the', 'that']] },
      { number: 3, parts: ["'My sister Chloe's coming to stay for a few days.' Why did Derek say that ", " sister's called Chloe? She's called Clarissa, isn't she?"], answers: [['his']] },
      { number: 4, parts: ["'This is not what I ordered!' Mike told the waiter - quite rudely in my opinion - that ", " wasn't what he'd ordered."], answers: [['it', 'that']] },
      { number: 5, parts: ["'These trainers are far too expensive!' My mum said that ", " trainers were too expensive so I didn't get them in the end."], answers: [['the', 'those']] },
      { number: 6, parts: ["'My number's easy. It's 123456.' You don't know Sindy's phone number, do you? She did actually tell me ", ' number but I stupidly forgot to write it down.'], answers: [['her']] },
      { number: 7, parts: ["'Could you put these on the table?' Mum asked me to put ", ' on the table.'], answers: [['them']] },
      { number: 8, parts: ["'You won't believe what happened to us last night.' Angus and James told me that ", ' house was broken into last night.'], answers: [['their']] }
    ]
  },
  {
    id: 'E',
    unitId: 25,
    title: 'Reported speech: time and place',
    instruction: 'Read the dialogue and write one word in each gap to complete the report.',
    wordBox: [
      'Seamus: Hi Marios! It\'s Seamus. Listen, what are you doing at the moment?',
      'Marios: Right now? Nothing much. Why?',
      'Seamus: Well, do you remember last week I told you about that new gym? I\'m just about to check it out and I wondered if you\'d like to come too.',
      'Marios: Yeah, great! Umm ... to tell you the truth, Seamus, I actually went a couple of days ago. It\'s really good!',
      'Seamus: Did you?',
      'Marios: Yeah, well, I\'m taking part in the London Marathon next month so I\'m trying to get fit.',
      'Seamus: Oh, of course you are. Well, you can show me round, then.',
      'Marios: Absolutely! Look, I was going to call you yesterday to ask you if you wanted to come with me next time, but something came up.',
      'Seamus: No, no problem. Don\'t worry about it.',
      'Marios: Thanks. So, where shall we meet?',
      'Seamus: Well, I\'m at the office right now and the gym\'s only a few minutes walk from here. Do you want to come here and we\'ll go together?',
      'Marios: Sure. See you in about half an hour.'
    ],
    questions: [
      { number: 1, parts: ['Seamus asked Marios what he was doing at ', ' moment.'], answers: [['that']] },
{ number: 2, parts: ['Marios replied that right ', ' he was not doing anything much.'], answers: [['then']] },
{ number: 3, parts: ["Seamus mentioned a conversation they'd had the ", ' week.'], answers: [['previous']] },
{ number: 4, parts: ["Marios admitted that he'd been to the gym two days ", '.'], answers: [['before', 'previously', 'earlier']] },
{ number: 5, parts: ['Marios reminded Seamus that he was taking part in the London Marathon ', ' month.'], answers: [['the following', 'next']] },
{ number: 6, parts: ['Marios told Seamus that he had been planning to call him the day ', '.'], answers: [['before']] },
{ number: 7, parts: ['Seamus said he was at the office and suggested they meet ', '.'], answers: [['there']] }
]
},
{
id: 'F',
unitId: 25,
title: 'Direct speech to reported speech',
instruction: 'Complete each second sentence so that it has a similar meaning to the first sentence.',
questions: [
{ number: 1, parts: ["'Carol and I went to a great museum when we were in Italy last month,' said Shirley.\nShirley told her friends that ", '.'], answers: [['Carol and she had been to a great museum when they were in Italy the previous month', 'Carol and she had gone to a great museum when they were in Italy the previous month', 'Carol and she had been to a great museum when they had been in Italy the previous month', 'Carol and she had gone to a great museum when they had been in Italy the previous month', 'Carol and she had been to a great museum when they were in Italy the month before', 'Carol and she had gone to a great museum when they were in Italy the month before']] },
{ number: 2, parts: ["'I only washed these trousers yesterday, Tony!' said his mum.\nTony's mum told ", '.'], answers: [['him that she had only washed the trousers the day before', "him that she'd only washed the trousers the day before", 'him she had only washed the trousers the day before', "him she'd only washed the trousers the day before", 'Tony that she had only washed those trousers the previous day', "Tony that she'd only washed those trousers the previous day", 'him that she had only washed those trousers the day before']] },
{ number: 3, parts: ["'You have to get all the letters sent off by tomorrow,' said Jake to his secretary as he was leaving.\nAs he was leaving, Jake told ", '.'], answers: [['his secretary that he had to get all the letters sent off by the following day', 'his secretary that she had to get all the letters sent off by the following day', 'his secretary he had to get all the letters sent off by the next day', 'his secretary she had to get all the letters sent off by the next day', 'his secretary that he had to get all the letters sent off by the day after', 'his secretary that she had to get all the letters sent off by the day after']] },
{ number: 4, parts: ["'We shall meet you all back here in exactly half an hour from now.'\nMum told me that ", '.'], answers: [['they would meet us all back there in exactly half an hour from then']] },
{ number: 5, parts: ["'Luckily I don't have to go into the office this Saturday,' said Olivia.\nOlivia said happily that ", '.'], answers: [["luckily she didn't have to go into the office that Saturday", 'luckily she did not have to go into the office that Saturday']] },
{ number: 6, parts: ["'It can't be very nice having all these cars going by all the time.'\nAlan commented to Ros that ", '.'], answers: [["it couldn't be very nice having all the cars going by all the time", "it couldn't be very nice having all those cars going by all the time", 'it could not be very nice having all the cars going by all the time', 'it could not be very nice having all those cars going by all the time']] },
{ number: 7, parts: ["'I'll put these in water right now.'\nDaniel's mum said that ", '.'], answers: [["she'd put them in water right then", 'she would put them in water right then']] },
{ number: 8, parts: ["'I told Dan two days ago that this report would have to be rewritten,' said Greg.\nGreg told Jeanne that ", '.'], answers: [["he'd told Dan two days earlier that the report would have to be rewritten", 'he had told Dan two days earlier that the report would have to be rewritten', "he'd told Dan two days before that the report would have to be rewritten", 'he had told Dan two days before that the report would have to be rewritten', "he'd told Dan two days previously that that report would have to be rewritten", 'he had told Dan two days previously that that report would have to be rewritten']] }
]
},
{
id: 'G',
unitId: 25,
title: 'Reported questions: key word transformations',
instruction: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words.',
questions: [
{ number: 1, parts: ['Andrea asked Gareth if (go) ', ' to the concert the following Thursday.'], answers: [['he would go with her']] },
{ number: 2, parts: ['Pete asked (whether) ', " at four o'clock."], answers: [['whether the train got in']] },
{ number: 3, parts: ["Tim's dad asked (if) ", ' on the phone all evening.'], answers: [['him if he had been talking', 'Tim if he had been talking', "him if he'd been talking", "Tim if he'd been talking"]] },
{ number: 4, parts: ['Fiona asked (whether) ', ' day.'], answers: [['us whether we were all coming the following', 'us whether we were all coming the next']] },
{ number: 5, parts: ['Dominic asked whether (me) ', ' any more.'], answers: [['Jerry lived near me']] },
{ number: 6, parts: ['Kevin asked (him) ', ' an e-mail about it.'], answers: [['Trevor if he should send him', 'Trevor whether he should send him']] },
{ number: 7, parts: ['Robert (offered) ', ' the dishes.'], answers: [['offered to help Carlo do', 'offered to help Carlo with']] },
{ number: 8, parts: ['Toby asked his parents (did) ', ' go to bed right then.'], answers: [['if they really had to', 'whether they really had to']] }
]
},
{
id: 'H',
unitId: 25,
title: 'Reported questions',
instruction: 'Choose the correct word or phrase.',
questions: [
{ number: 1, parts: ["Kostas didn't dare ask Eleni where ", ' been the previous evening.'], answers: [['she had']], options: [['had she', 'she had']] },
{ number: 2, parts: ['I was tempted to ask why ', ' to sit next to Li Han so badly.'], answers: [['Ranji wanted']], options: [['did Ranji want', 'Ranji wanted']] },
{ number: 3, parts: ['We did ask Carol who ', " invited but for some reason she wouldn't tell us."], answers: [['she had']], options: [['she had', 'had she']] },
{ number: 4, parts: ['Can you believe it? Fred actually asked me how ', ' send an e-mail!'], answers: [['to']], options: [['to', 'could he']] },
{ number: 5, parts: ['No one has asked me why ', ' come to work yesterday.'], answers: [["I didn't"]], options: [["didn't I", "I didn't"]] },
{ number: 6, parts: ["I'm going to ask them what on earth ", ' they were doing.'], answers: [['they thought']], options: [['did they think', 'they thought']] },
{ number: 7, parts: ['Ask that man over there who ', ' complain to.'], answers: [['to']], options: [['should we', 'to']] },
{ number: 8, parts: ["Doug and Sally didn't even ask me how ", ' going.'], answers: [['the website was']], options: [['the website was', 'was the website']] }
]
},
{
id: 'I',
unitId: 25,
title: 'Reported commands, requests and questions',
instruction: 'Write a verb from the box in the correct form in each gap.',
wordBox: ['attack', 'do', 'get', 'like', 'make', 'pass', 'take', 'talk', 'turn', 'use', 'want', 'work'],
questions: [
{ number: 1, parts: ["You'd better ask the security guard how ", ' into the building at the weekend.'], answers: [['to get']] },
{ number: 2, parts: ['That was so nice of them to ask whether I ', ' to stay the night.'], answers: [['wanted']] },
{ number: 3, parts: ["I know you asked me ", " the washing-up now but it'll only take a minute, I promise."], answers: [['to do']] },
{ number: 4, parts: ['Why did the officer order his men ', ' when he knew they were outnumbered?'], answers: [['to attack']] },
{ number: 5, parts: ['I would ask you ', ' judgement until you know all the facts.'], answers: [['to pass']] },
{ number: 6, parts: ["I couldn't believe it when Sandy came out and asked me if I ", ' drugs before.'], answers: [['had taken', "'d taken"]] },
{ number: 7, parts: ["I don't like asking you ", " on a Saturday, but I'm afraid there's no alternative."], answers: [['to work']] },
{ number: 8, parts: ['You should have asked your mother which cloth ', ". She'd know."], answers: [['to use']] },
{ number: 9, parts: ['It was funny when you were asked by the technician how ', ' the computer on.'], answers: [['to turn']] },
{ number: 10, parts: ['She very kindly asked me if I ', ' fruit cake and said there was a fruit salad if I preferred.'], answers: [['liked']] },
{ number: 11, parts: ['Go and ask your dad ', ' us a coffee, would you?'], answers: [['to make']] },
{ number: 12, parts: ["I'm sorry, but we've been instructed ", ' to reporters under any circumstances.'], answers: [['not to talk']] }
]
},
{
id: 'J',
unitId: 25,
title: 'Reporting verbs',
instruction: 'Choose the correct answer.',
questions: [
{ number: 1, parts: ['Do you deny ', ' this with the defendant on the day in question?'], answers: [['discussing']], options: [['to discuss', 'discussing', 'of having discussed', 'to have discussed']] },
{ number: 2, parts: ['Why did you refuse ', " the police officer's questions? It only makes you look guilty!"], answers: [['to answer']], options: [['to answer', 'answering', 'that you answer', 'for answering']] },
{ number: 3, parts: ["It's about time Mrs Richards apologised to me ", ' me a gossip in front of everybody.'], answers: [['for having called']], options: [['to have called', 'from calling', 'that she called', 'for having called']] },
{ number: 4, parts: ['She may claim ', " a PhD but nobody's ever actually seen the certificate."], answers: [['to have']], options: [['having', 'for having', 'to have', 'if she has']] },
{ number: 5, parts: ['The kids suggested ', ' a pizza tonight. What do you think?'], answers: [['getting']], options: [['to get', "we'll get", 'getting', 'for getting']] },
{ number: 6, parts: ['I do agree there ', ' simple solution to this problem.'], answers: [['is no']], options: [['is no', 'be not', 'not to be', 'not being']] },
{ number: 7, parts: ['Tammy responded ', " that at least she'd never lied to her parents."], answers: [['by saying']], options: [['to say', 'that she said', 'by saying', 'with having said']] },
{ number: 8, parts: ["I'm begging ", '.'], answers: [['you to stay']], options: [['you to stay', 'that you stay', 'your staying', 'you for staying']] }
]
},
{
id: 'K',
unitId: 25,
title: 'Reporting review: Hobbies',
instruction: 'Write one word in each gap.',
questions: [
{
number: 1,
parts: [
'The next time someone asks me ',
' my hobbies are, or, indeed, ',
" I have any hobbies, I'm tempted to refuse ",
" answer. Better still, I'll turn the question round and ask them to ",
" me what their hobbies are. Doubtless they'll claim to ",
" an avid collector of rare postage stamps, or an expert builder-of-cathedrals-out-of-matchsticks, but I shan't believe it. I don't think we should deny ",
" any longer: the hobby is dead. I would like to suggest ",
", from now on, the word 'hobby' is erased from our vocabulary. You may accuse me ",
' being naïve, but I strongly believe the facts support my case. Ask any teenager - or adult, for that matter - how they ',
" their spare time. They'll respond ",
' a list of activities - going to the gym, playing computer games, watching TV, downloading music, hanging out with friends, surfing the Internet, going to the pub, playing football - none of which can sensibly be called a hobby.'
],
answers: [
['what'], ['whether', 'if'], ['to'], ['tell'], ['be'],
['it', 'this', 'that'], ['that'], ['of'], ['spend'], ['with']
]
}
]
}
];

const yesNo = ['Yes', 'No'];

export const unitTwentySixExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    unitId: 26,
    title: 'Topic vocabulary: Preference',
    instruction: 'Choose the correct answer.',
    questions: [
      { number: 1, parts: ['Although she would have preferred to carry on working, my mum ', ' her career in order to have children.'], answers: [['sacrificed']], options: [['devoted', 'repealed', 'sacrificed', 'abolished']] },
      { number: 2, parts: ['I find the offer quite ', ", but I think I'd rather study at Oxford."], answers: [['tempting']], options: [['tempting', 'desirous', 'inclined', 'envious']] },
      { number: 3, parts: ["I don't normally like noisy clubs, but I had a sudden ", ' to see what the Blue Parrot was like.'], answers: [['impulse']], options: [['force', 'motive', 'pressure', 'impulse']] },
      { number: 4, parts: ["Jerry loves snowboarding so much that it's almost like a drug ", '.'], answers: [['addiction']], options: [['passion', 'obsession', 'addiction', 'requirement']] },
      { number: 5, parts: ["I don't want to do the course in applied statistics, but it's ", '.'], answers: [['compulsory']], options: [['compulsory', 'inevitable', 'bound', 'indecisive']] },
      { number: 6, parts: ["Don't worry about me - I'm quite ", ' to sit here and wait for you to come back.'], answers: [['content']], options: [['ecstatic', 'delighted', 'joyful', 'content']] },
      { number: 7, parts: ['When I was pregnant, I often got a sudden ', ' for tinned sardines.'], answers: [['craving']], options: [['preference', 'craving', 'envy', 'greed']] },
      { number: 8, parts: ["Thank you for thinking of us, but I'm afraid we're going to have to ", ' your kind invitation.'], answers: [['decline']], options: [['decline', 'deny', 'condemn', 'reject']] },
      { number: 9, parts: ["I've never seen anyone so ", ' to their job as Philip is.'], answers: [['dedicated']], options: [['eager', 'keen', 'dedicated', 'interested']] },
      { number: 10, parts: ['Why do you have such a ', ' with model railways?'], answers: [['fascination']], options: [['desire', 'fascination', 'love', 'preference']] },
      { number: 11, parts: ['I wish you would stop wasting so much time on computer games and do something a little more ', '.'], answers: [['worthwhile']], options: [['welcome', 'enviable', 'feasible', 'worthwhile']] },
      { number: 12, parts: ['Olivia has always ', ' to return to the country she was born in.'], answers: [['yearned']], options: [['favoured', 'yearned', 'urged', 'inclined']] }
    ]
  },
  {
    id: 'B',
    unitId: 26,
    title: 'Topic vocabulary: Preference',
    instruction: 'Complete using the correct form of the words in the box.',
    wordBox: ['adore', 'appeal', 'bear', 'delight', 'differentiate', 'fancy', 'favour', 'praise', 'resolve', 'strive', 'urge', 'welcome'],
    questions: [
      { number: 1, parts: ["Trisha suggested going to Indonesia, but the idea didn't really ", ' to me.'], answers: [['appeal']] },
      { number: 2, parts: ['Young children seem to ', " in showing things they've made at school to their parents."], answers: [['delight']] },
      { number: 3, parts: ['Francis obviously ', ' his three children and will do anything for them.'], answers: [['adores']] },
      { number: 4, parts: ['I think I just ', ' getting a DVD and staying in tonight.'], answers: [['fancy']] },
      { number: 5, parts: ['The firefighters ', ' Mrs Collins for her quick thinking when the fire broke out.'], answers: [['praised']] },
      { number: 6, parts: ['We would ', ' anyone who values personal freedom to vote against this proposal.'], answers: [['urge']] },
      { number: 7, parts: ['The Prime Minister ', ' the suggestion from the leader of the opposition and said that the government would consider it carefully.'], answers: [['welcomed']] },
      { number: 8, parts: ["I don't know how Liz can ", ' to work at that place.'], answers: [['bear']] },
      { number: 9, parts: ["It's important to have clear goals to ", ' towards.'], answers: [['strive']] },
      { number: 10, parts: ['Parents should try to treat all their children equally and not ', ' one over another.'], answers: [['favour']] },
      { number: 11, parts: ["It's quite easy to ", ' between margarine and butter because butter has a creamier taste.'], answers: [['differentiate']] },
      { number: 12, parts: ['The Board of Directors has ', ' to increase sales by at least 20% over the coming year.'], answers: [['resolved']] }
    ]
  },
  {
    id: 'C',
    unitId: 26,
    title: 'Topic vocabulary: Preference',
    instruction: 'Choose the correct word.',
    questions: [
      { number: 1, parts: ["Share your chocolate with your brother and don't be so ", '.'], answers: [['greedy']], options: [['greedy', 'obsessed']] },
      { number: 2, parts: ["Claudia's completely ", " with Jack and doesn't talk about anything else these days."], answers: [['obsessed']], options: [['greedy', 'obsessed']] },
      { number: 3, parts: ['I smiled in ', ' as the waiter brought the desserts to our table.'], answers: [['anticipation']], options: [['anticipation', 'aspiration']] },
      { number: 4, parts: ['Joining the Air Force has always been an ', ' of mine.'], answers: [['aspiration']], options: [['anticipation', 'aspiration']] },
      { number: 5, parts: ['These two day trips are included in the price of the tour, while the third is ', ' and costs 50 euros extra.'], answers: [['optional']], options: [['arbitrary', 'optional']] },
      { number: 6, parts: ["We don't have any information about the hotels, so we'll just have to make an ", ' decision.'], answers: [['arbitrary']], options: [['arbitrary', 'optional']] },
      { number: 7, parts: ["If you look at Madeleine's house, it's obvious she has a lot of ", '.'], answers: [['taste']], options: [['liking', 'taste']] },
      { number: 8, parts: ["I've always had a ", ' for Naomi, ever since she moved in next door.'], answers: [['liking']], options: [['liking', 'taste']] },
      { number: 9, parts: ["Life in this small town is really quite ", " and I can't wait to move to the big city."], answers: [['mundane']], options: [['mediocre', 'mundane']] },
      { number: 10, parts: ['I thought her latest book was ', ' compared to the others, which I really enjoyed.'], answers: [['mediocre']], options: [['mediocre', 'mundane']] },
      { number: 11, parts: ['Eva got everything she had ever ', ' when she married a rich businessman.'], answers: [['desired']], options: [['envied', 'desired']] },
      { number: 12, parts: ['I ', ' people who can just walk into a room full of strangers and feel at home.'], answers: [['envy']], options: [['envy', 'desire']] }
    ]
  },
  {
    id: 'D',
    unitId: 26,
    title: 'Topic vocabulary: Leisure activities',
    instruction: 'If the bold word is correct, write OK. If it is incorrect, replace it with one of the bold words from the other sentences.',
    questions: [
      { number: 1, parts: ["It should be quite a (sedentary) ", " event, so don't dress up too much."], answers: [['casual']] },
      { number: 2, parts: ['Without enough leisure time, people begin to suffer from stress and (solitude) ', '.'], answers: [['fatigue']] },
      { number: 3, parts: ['I get 25 days a year (venue) ', ', which is probably about average.'], answers: [['leave']] },
      { number: 4, parts: ['The new Arts Centre should be a great (outing) ', ' for concerts.'], answers: [['venue']] },
      { number: 5, parts: ['Last time I had a day off, we went on a family (lifestyle) ', ' to the beach.'], answers: [['outing']] },
      { number: 6, parts: ["Kids just wouldn't fit in with my (fatigue) ", ", so I don't plan to have any at the moment."], answers: [['lifestyle']] },
      { number: 7, parts: ["I like to be quite active when I've got time off because my job is quite (absorbing) ", '.'], answers: [['sedentary']] },
      { number: 8, parts: ['I find nothing so relaxing as reading a really (casual) ', ' book.'], answers: [['absorbing']] },
      { number: 9, parts: ["Work's so (tedious) ", " that I can't wait to meet my friends in the evening."], answers: [['OK']] },
      { number: 10, parts: ['The most relaxing things about getting away to the mountains are the peace and (leave) ', '.'], answers: [['solitude']] }
    ]
  },
  {
    id: 'E',
    unitId: 26,
    title: 'Topic vocabulary: Leisure activities (The beginnings of modern leisure)',
    instruction: 'Complete using the correct form of the words in the box.',
    wordBox: ['exhilarating', 'idle', 'indulge', 'pastime', 'pursue', 'recreation', 'respite', 'socialise', 'trivial', 'unwind'],
    questions: [
      {
        number: 1,
        parts: [
          'During the first half of the nineteenth century, more and more people were employed in factories, working 14- or 15-hour days that left them little time for hobbies, sport or any other form of ',
          " and meant they weren't able to ",
          ' with friends. A key breakthrough in Britain came with the Ten Hour Act (1847), which limited the working day and ensured that workers got some ',
          ' from their jobs. People now had at least some time to ',
          ' from work at the end of the day and ',
          ' themselves.\nNot everyone approved. Many members of the middle class hated the idea of the workers being ',
          ' and believed that they would waste their time on ',
          ' matters instead of ',
          ' productive activities, such as education or going to church. The workers, however, found the new freedom ',
          ' and threw themselves into new ',
          ' with enthusiasm.'
        ],
        answers: [
          ['recreation'], ['socialise'], ['respite'], ['unwind'], ['indulge'],
          ['idle'], ['trivial'], ['pursuing'], ['exhilarating'], ['pastimes']
        ]
      }
    ]
  },
  {
    id: 'F',
unitId: 26,
title: 'Phrasal verbs: matching',
instruction: 'Match each sentence beginning with the correct ending.',
wordBox: [
'A in some fantastic areas of natural beauty.',
'B for active pastimes; I much prefer reading.',
'C about with all the equipment all day.',
'D a whole month off and just travel.',
'E out with friends in the town centre.',
'F out good spots to go windsurfing.',
'G around fishing or my other main hobby, water polo.',
'H up a few songs after just a couple of lessons on the guitar.'
],
questions: [
{ number: 1, parts: ['I suppose I spend a lot of time just hanging ', ''], answers: [['E']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']] },
{ number: 2, parts: ['The best thing about camping is just messing ', ''], answers: [['C']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']] },
{ number: 3, parts: ["Since I'm self-employed, I'm able to take ", ''], answers: [['D']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']] },
{ number: 4, parts: ['Drew spends a lot of time seeking ', ''], answers: [['F']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']] },
{ number: 5, parts: ['Most of my leisure time seems to centre ', ''], answers: [['G']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']] },
{ number: 6, parts: ["The tour we're going on next week takes ", ''], answers: [['A']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']] },
{ number: 7, parts: ["I'm not one of those people who go in ", ''], answers: [['B']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']] },
{ number: 8, parts: ['With a bit of practice, I picked ', ''], answers: [['H']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']] }
]
},
{
id: 'G',
unitId: 26,
title: 'Phrasal verbs',
instruction: 'Complete using a phrasal verb with a word from box A in the right form and a word from box B. You need to use one word from box B more than once.',
wordBox: ['A: get, go, grow, keep, laze, put, take, warm', 'B: around, in, into, off, on, out, up'],
questions: [
{ number: 1, parts: ["I don't have much money these days, so it's hard to ", ' my music collection.'], answers: [['keep up']] },
{ number: 2, parts: ["If you're ", ' Amanda ', " this weekend, why don't you go to the Popwave festival?"], answers: [['taking'], ['out']] },
{ number: 3, parts: ["I didn't like this CD at first, but now I'm really ", ' it.'], answers: [['getting into']] },
{ number: 4, parts: ['Carl and I just spent the whole day ', ' listening to music.'], answers: [['lazing around']] },
{ number: 5, parts: ["I'm still not sure about this track, but I think it's starting to ", ' me.'], answers: [['grow on']] },
{ number: 6, parts: ['Before the concert started, we could hear the band ', ' off stage.'], answers: [['warming up']] },
{ number: 7, parts: ["I used to love this band, but I've ", ' them since the lead singer left.'], answers: [['gone off']] },
{ number: 8, parts: ["You can tell they've ", ' a lot of hard work when you listen to their latest album.'], answers: [['put in']] }
]
},
{
id: 'H',
unitId: 26,
title: 'Phrasal verbs with into',
instruction: "Choose Yes if the phrasal verb has a meaning connected to 'becoming involved in an activity or situation'; otherwise choose No.",
questions: [
{ number: 1, parts: ['I love watching TV, but it does bite into my free time. ', ''], answers: [['No']], options: [yesNo] },
{ number: 2, parts: ['Jordan was relieved when she finally broke into the music business. ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 3, parts: ["When you're flying a model aeroplane, the important thing is not to crash into anything! ", ''], answers: [['No']], options: [yesNo] },
{ number: 4, parts: ['The council have entered into discussions on building a new sports centre in town. ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 5, parts: ['To access the online games network, key your username and password into the box below. ', ''], answers: [['No']], options: [yesNo] },
{ number: 6, parts: ['Think carefully before you rush into such a long-term agreement. ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 7, parts: ['Kelly launched into a detailed account of her plans for the summer. ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 8, parts: ['Pete is always taking up new hobbies and he really throws himself into them. ', ''], answers: [['Yes']], options: [yesNo] }
]
},
{
id: 'I',
unitId: 26,
title: 'Phrases, patterns and collocations: error correction',
instruction: 'One word in each sentence is incorrect. Write the correct word.',
questions: [
{ number: 1, parts: ["It's the boss's birthday next Wednesday, and there's a rumour we might be (taken) ", ' the day off.'], answers: [['given']] },
{ number: 2, parts: ["I know you'd rather I took up a sport, but it's not your choice to (do) ", '.'], answers: [['make']] },
{ number: 3, parts: ["Some of the courses are compulsory, so we can't just pick and (select) ", ' whatever we like.'], answers: [['choose']] },
{ number: 4, parts: ["If you won't give me a pay rise, then I shall have to (think) ", ' my options.'], answers: [['consider']] },
{ number: 5, parts: ['The council said they had no option (apart) ', ' to close the sports centre.'], answers: [['but']] },
{ number: 6, parts: ['Angela travels a lot and is only (very) ', ' eager to experience new places.'], answers: [['too']] },
{ number: 7, parts: ["Jake's been practising (as) ", ' mad to impress the others in the band.'], answers: [['like']] },
{ number: 8, parts: ["I can't believe the judge just let the accused (be) ", ' free like that.'], answers: [['go']] },
{ number: 9, parts: ["I've decided in favour (for) ", ' joining the local swimming team.'], answers: [['of']] },
{ number: 10, parts: ['You should plan things more carefully and not just act (with) ', ' impulse all the time.'], answers: [['on']] }
]
},
{
id: 'J',
unitId: 26,
title: 'Phrases, patterns and collocations: The future of leisure',
instruction: 'Choose the correct word.',
questions: [
{ number: 1, parts: ['There is no doubt technology and shorter working hours have ', ' people free to enjoy their leisure time more than ever before.'], answers: [['set']], options: [['got', 'let', 'set']] },
{ number: 2, parts: ['Many people ', ' the leisure to pursue hobbies'], answers: [['have']], options: [['do', 'have', 'make']] },
{ number: 3, parts: ['and other activities they ', ' to the work routine.'], answers: [['prefer']], options: [['like', 'prefer', 'want']] },
{ number: 4, parts: ['What leisure activities will people ', ' for in the future?'], answers: [['opt']], options: [['choose', 'decide', 'opt']] },
{ number: 5, parts: ['We can expect to see increased personal ', '.'], answers: [['choice']], options: [['choice', 'decision', 'option']] },
{ number: 6, parts: ['The range of leisure ', ' will expand'], answers: [['pursuits']], options: [['actions', 'hobbies', 'pursuits']] },
{ number: 7, parts: ['and people will have the ', ' of following up an interest in almost any activity.'], answers: [['option']], options: [['decision', 'option', 'preference']] },
{ number: 8, parts: ['Whether at home or at ', ' centres,'], answers: [['leisure']], options: [['enjoyment', 'leisure', 'relaxation']] },
{ number: 9, parts: ['there will be an ever-increasing need to provide for people at ', '.'], answers: [['play']], options: [['play', 'recreation', 'rest']] },
{ number: 10, parts: ["If the future is not one of increased leisure, then it won't be for ", ' of demand.'], answers: [['want']], options: [['need', 'desire', 'want']] }
]
},
{
id: 'K',
unitId: 26,
title: 'Phrases, patterns and collocations',
instruction: 'For each question, write one word which can be used in all three sentences.',
questions: [
{ number: 1, parts: ['To our ___, the boss said that we could have an extra day off work. Martin always takes great ___ in talking to anyone about fishing. When Erin finally started to move downhill on the skis for the first time, she laughed in ___. Word: ', ''], answers: [['delight']] },
{ number: 2, parts: ["It's important that people feel they can exercise ___ over their leisure activities. Your fee is so late that I'm afraid we have no ___ but to cancel your membership. The college offers a wide ___ of evening and weekend classes. Word: ", ''], answers: [['choice']] },
{ number: 3, parts: ["The local council should start a building programme to meet the ___ for leisure facilities. The Mayor said he had no ___ of advice from people who didn't understand the situation. This area is badly in ___ of financial investment. Word: ", ''], answers: [['need']] },
{ number: 4, parts: ["I had dried frog when I was in Korea, and I would describe the ___ as unforgettable. I thought that what you said to Erica was in very bad ___. You might not like sushi the first time you try it - it's a bit of an acquired ___. Word: ", ''], answers: [['taste']] },
{ number: 5, parts: ["We're quite ___ for our son to go to Cambridge University when he finishes school. I enjoy team sports, like basketball and volleyball, and I'm especially ___ on football. My parents have always taken a ___ interest in my hobbies. Word: ", ''], answers: [['keen']] },
{ number: 6, parts: ["I was a bit of a loner when I was younger and I spent a lot of time ___ by myself. The government has been accused of ___ for time because it doesn't know what to do. Liam never learnt to read music, but he's capable of ___ practically anything by ear. Word: ", ''], answers: [['playing']] },
{ number: 7, parts: ['The headmaster was full of ___ for the school cricket team, who had won six matches in a row. The police officers involved deserve ___ for their bravery in such a difficult situation. If I read one more newspaper editorial in ___ of the Prime Minister I shall scream. Word: ', ''], answers: [['praise']] },
{ number: 8, parts: ['When we finally made it out of the forest, we decided to ___ before moving on. Just ___ your bike against the gate and come inside. You can ___ assured that I will not stop until I find the person who damaged the school gym. Word: ', ''], answers: [['rest']] }
]
},
{
id: 'L',
unitId: 26,
title: 'Idioms',
instruction: 'Complete using the words in the box.',
wordBox: ['batteries', 'end', 'feet', 'hair', 'heart', 'party', 'potato', 'spice', 'time', 'whim'],
questions: [
{ number: 1, parts: ["'Oh! I'm exhausted! I've been doing housework all day.' 'Come and put your ", " up for five minutes and I'll make a cup of tea.'"], answers: [['feet']] },
{ number: 2, parts: ["'Do you fancy going to that new jazz club in town?' 'Yes, let's go and let our ", " down a bit, shall we?'"], answers: [['hair']] },
{ number: 3, parts: ["'Jamie is so much fun!' 'Yes, he really is the life and soul of the ", ".'"], answers: [['party']] },
{ number: 4, parts: ["'You're not changing jobs again already, are you?' 'Well, they do say that variety is the ", " of life.'"], answers: [['spice']] },
{ number: 5, parts: ["'Roger wasn't pleased to get rejected by the team, was he?' 'No. He really had his ", " set on playing for them.'"], answers: [['heart']] },
{ number: 6, parts: ["'You look a bit bored.' 'Well, I've been at a loose ", " since I finished the book I was reading.'"], answers: [['end']] },
{ number: 7, parts: ["'You weren't planning to go to Singapore on holiday, were you?' 'No. I got to the travel agent's and just decided to go there on a ", ".'"], answers: [['whim']] },
{ number: 8, parts: ["'I can't believe you built the Eiffel Tower out of matchsticks!' 'I guess I must have had a lot of ", " on my hands.'"], answers: [['time']] },
{ number: 9, parts: ["'Does Jenny ever move from in front of the TV?' 'I think she's in danger of becoming a bit of a couch ", ".'"], answers: [['potato']] },
{ number: 10, parts: ["'You've got a great suntan!' 'I went away for a few days to recharge my ", ".'"], answers: [['batteries']] }
]
},
{
id: 'M',
unitId: 26,
title: 'Word formation',
instruction: 'Complete the sentences by changing the form of the word in capitals.',
questions: [
{ number: 1, parts: ['The cricket ground and the theatre make this a very ', ' area to live in. (DESIRE)'], answers: [['desirable']] },
{ number: 2, parts: ['My family have always gone in for traditional country ', ', such as hunting, shooting and fishing. (PURSUE)'], answers: [['pursuits']] },
{ number: 3, parts: ["What I like about Stravinsky's music is the ", ' complexity, which has a powerful effect on the listener. (RHYTHM)'], answers: [['rhythmic', 'rhythmical']] },
{ number: 4, parts: ['After ten matches, we had the ', ' record of played ten, won none, lost ten. (ENVY)'], answers: [['unenviable']] },
{ number: 5, parts: ["I know you'd rather take your holiday in August, but when the boss is offering you extra days off, I don't think you can afford to be so ", '. (CHOOSE)'], answers: [['choosy']] },
{ number: 6, parts: ["You don't need to be quite so ", ' in your work, and you might find you enjoy it more if you take a little time off. (ZEAL)'], answers: [['zealous']] },
{ number: 7, parts: ["You don't have time to do all the sports you'd like to, so you're going to have to be a bit ", '. (SELECT)'], answers: [['selective']] },
{ number: 8, parts: ['After dinner, we went for a ', ' stroll along the seafront. (LEISURE)'], answers: [['leisurely']] },
{ number: 9, parts: ["We're only two weeks into the school holidays and already my children are ", '. (REST)'], answers: [['restless']] },
{ number: 10, parts: ["I don't mind Annabel spending time on her computer, but playing this latest game has become almost an ", '. (OBSESS)'], answers: [['obsession']] }
]
},
{
id: 'N',
unitId: 26,
title: 'Word formation: Get Active with Marlston Council',
instruction: 'Write a word formed from the words in the box in each gap.',
wordBox: ['available', 'do', 'motive', 'play', 'prefer', 'relax', 'satisfy', 'sport', 'stimulate', 'tend'],
questions: [
{
number: 1,
parts: [
"As a local resident, you may already be aware of Marlston Council's 'Get Active' campaign. We'd like to take this opportunity to remind you of the campaign and to give you some simple tips to help you and your family get active.\n• It's impossible to ",
' the importance of getting active as a family. We all have a ',
' to start off with good intentions and then lose our ',
'. Playing and exercising together as a family can help you through those moments when you are ',
" with your progress.\n• Don't ",
' it. Start with gentle exercise and work up to something more strenuous. Whatever your ',
" activity, make sure that you're all comfortable doing it at that level. If necessary, switch to a more ",
" activity until you're all in better shape.\n• Children these days get a lot of ",
" from the fast-moving worlds of television, the Internet and computer games. Make sure you find an activity that they'll find fun. Contact Marlston Council to find out about the ",
' of facilities where you live.\n• Playing a sport together will teach your children about fair play, ',
" and working with others. But remember that it has to be fun or they'll soon lose interest.\nFor further information, contact Marlston Council and ask to speak to someone from the 'Get Active' campaign."
],
answers: [
['overplay'], ['tendency'], ['motivation'], ['dissatisfied'], ['overdo'],
['preferred'], ['relaxing'], ['stimulation'], ['availability'], ['sportsmanship']
]
}
]
},
{
id: 'O',
unitId: 26,
title: 'Word formation: suffixes -ance and -ence',
instruction: 'Form a noun using -ance or -ence for each word.',
questions: [
{ number: 1, parts: ['accept: ', ''], answers: [['acceptance']] },
{ number: 2, parts: ['allow: ', ''], answers: [['allowance']] },
{ number: 3, parts: ['annoy: ', ''], answers: [['annoyance']] },
{ number: 4, parts: ['appear: ', ''], answers: [['appearance']] },
{ number: 5, parts: ['assist: ', ''], answers: [['assistance']] },
{ number: 6, parts: ['attend: ', ''], answers: [['attendance']] },
{ number: 7, parts: ['avoid: ', ''], answers: [['avoidance']] },
{ number: 8, parts: ['clear: ', ''], answers: [['clearance']] },
{ number: 9, parts: ['correspond: ', ''], answers: [['correspondence']] },
{ number: 10, parts: ['depend: ', ''], answers: [['dependence']] },
{ number: 11, parts: ['differ: ', ''], answers: [['difference']] },
{ number: 12, parts: ['disturb: ', ''], answers: [['disturbance']] },
{ number: 13, parts: ['endure: ', ''], answers: [['endurance']] },
{ number: 14, parts: ['exist: ', ''], answers: [['existence']] },
{ number: 15, parts: ['guide: ', ''], answers: [['guidance']] },
{ number: 16, parts: ['ignore: ', ''], answers: [['ignorance']] },
{ number: 17, parts: ['inherit: ', ''], answers: [['inheritance']] },
{ number: 18, parts: ['insist: ', ''], answers: [['insistence']] },
{ number: 19, parts: ['insure: ', ''], answers: [['insurance']] },
{ number: 20, parts: ['interfere: ', ''], answers: [['interference']] },
{ number: 21, parts: ['occur: ', ''], answers: [['occurrence']] },
{ number: 22, parts: ['perform: ', ''], answers: [['performance']] },
{ number: 23, parts: ['persist: ', ''], answers: [['persistence']] },
{ number: 24, parts: ['reassure: ', ''], answers: [['reassurance']] },
{ number: 25, parts: ['refer: ', ''], answers: [['reference']] },
{ number: 26, parts: ['rely: ', ''], answers: [['reliance']] },
{ number: 27, parts: ['resemble: ', ''], answers: [['resemblance']] },
{ number: 28, parts: ['resist: ', ''], answers: [['resistance']] },
{ number: 29, parts: ['tolerate: ', ''], answers: [['tolerance']] },
{ number: 30, parts: ['utter: ', ''], answers: [['utterance']] }
]
},
{
id: 'P',
unitId: 26,
title: 'Word formation: suffixes -ance and -ence',
instruction: 'Complete the sentences using words formed in exercise O.',
questions: [
{ number: 1, parts: ["Do you think you could help me? I'm having real problems with this and I think I need some ", '.'], answers: [['assistance', 'guidance']] },
{ number: 2, parts: ["There's such a close ", " between Mikey and his father, don't you think?"], answers: [['resemblance']] },
{ number: 3, parts: ["I use the Internet quite a bit now for looking up information and I don't really use the ", ' books on my shelves.'], answers: [['reference']] },
{ number: 4, parts: ['The head teacher was walking past the classroom door when she heard a loud ', ' coming from inside.'], answers: [['disturbance']] },
{ number: 5, parts: ['You need to be really fit to be able to complete an ', ' race like the marathon.'], answers: [['endurance']] },
{ number: 6, parts: ["You might feel like giving up, but keep practising and you'll be amazed at what a little ", ' can achieve.'], answers: [['persistence']] },
{ number: 7, parts: ['This football team has a proud tradition and has been in ', ' since 1890.'], answers: [['existence']] },
{ number: 8, parts: ['There was a lot of ', " from local people to the government's plans to knock down the stadium."], answers: [['resistance']] }
]
}
];