import type { ExerciseSection } from './exercises';

const yesNo = ['Yes', 'No'];

export const unitNineteenExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    unitId: 19,
    title: 'Inversion',
    instruction: 'If the bold phrase is correct, write OK. If it is incorrect, rewrite it correctly.',
    questions: [
      { number: 1, parts: ['Hardly (I had sat down) ', ' when the doorbell rang.'], answers: [['had I sat down']] },
      { number: 2, parts: ['Scarcely (had Julian finished) ', ' writing when the teacher told the students to put their pens down.'], answers: [['OK']] },
      { number: 3, parts: ['We had barely set off on our journey when (the kids started) ', ' asking when we would get there.'], answers: [['OK']] },
      { number: 4, parts: ['No sooner (the government changes) ', ' the tax laws than businesses find a way around them.'], answers: [['does the government change']] },
      { number: 5, parts: ['Scarcely (they had finished) ', ' painting the house when it started to rain.'], answers: [['had they finished']] },
      { number: 6, parts: ['Hardly (the new computer system had) ', ' been installed when it started to go wrong.'], answers: [['had the new computer system']] },
      { number: 7, parts: ["It's true that no sooner (we had started) ", ' eating than we realised we had forgotten the potatoes.'], answers: [['had we started']] },
      { number: 8, parts: ['Barely had the politician started to speak when (began the crowd) ', ' to boo.'], answers: [['the crowd began']] },
      { number: 9, parts: ['Hardly (the new park was finished) ', ' when vandals destroyed the flowerbeds.'], answers: [['was the new park finished', 'had the new park been finished']] },
      { number: 10, parts: ['Scarcely (Keith had arrived) ', ' in Argentina when he was arrested.'], answers: [['had Keith arrived']] }
    ]
  },
  {
    id: 'B',
    unitId: 19,
    title: 'Negative and limiting adverbials',
    instruction: 'Complete using the words and phrases in the box.',
    wordBox: ['at no point', 'in no way', 'little', 'never', 'not', 'not only', 'only after', 'on no account', 'rarely', 'under no circumstances'],
    questions: [
      { number: 1, parts: ['', ' were the security guards to blame for what happened.'], answers: [['In no way']] },
      { number: 2, parts: ['', ' once did the old woman thank me for helping her.'], answers: [['Not']] },
      { number: 3, parts: ['', ' seeing the doctor was Theresa allowed to leave hospital.'], answers: [['Only after']] },
      { number: 4, parts: ['', ' will passengers be allowed to carry more than 6 kg of hand luggage.'], answers: [['On no account', 'Under no circumstances']] },
      { number: 5, parts: ['', ' were you late, but you also forgot to bring the correct documents.'], answers: [['Not only']] },
      { number: 6, parts: ['', ' during the meeting did anyone mention that the managing director was planning to leave.'], answers: [['At no point']] },
      { number: 7, parts: ['', ' did the passengers know that the driver was really an undercover police officer.'], answers: [['Little']] },
      { number: 8, parts: ['', ' do you meet anyone as charming as Mr Beeching.'], answers: [['Rarely']] },
      { number: 9, parts: ['', ' should unaccompanied children be allowed to enter the area.'], answers: [['Under no circumstances', 'On no account']] },
      { number: 10, parts: ['', ' before has the company found itself facing such stiff competition.'], answers: [['Never']] }
    ]
  },
  {
    id: 'C',
    unitId: 19,
    title: 'Inversion with negative and limiting adverbials',
    instruction: 'Complete using the words in brackets with the verb in the correct form.',
    questions: [
      { number: 1, parts: ['Not until the area is made safe ', '. (construction / can continue)'], answers: [['can construction continue']] },
      { number: 2, parts: ['In no way ', ' (the announcement / affect) how strongly we felt about the situation.'], answers: [['did the announcement affect']] },
      { number: 3, parts: ['Seldom ', ' (you / see) a vintage car in quite such good condition these days.'], answers: [['do you see']] },
      { number: 4, parts: ['Not only ', ' (Jerry / forget) my birthday, but he also forgot our wedding anniversary.'], answers: [['did Jerry forget', 'has Jerry forgotten']] },
      { number: 5, parts: ['At no time ', ' (I / ask) my opinion on the subject.'], answers: [['was I asked', 'had I been asked']] },
      { number: 6, parts: ['Only when ', ' (I / checked) the ticket again did I realise that I had won first prize!'], answers: [['I checked', 'I had checked', "I'd checked"]] },
      { number: 7, parts: ['Little ', ' (Caroline / realise) that I had a big surprise planned for her.'], answers: [['did Caroline realise']] },
      { number: 8, parts: ['Under no circumstances ', " (you / should sign) a contract you haven't read thoroughly."], answers: [['should you sign']] },
      { number: 9, parts: ['At no stage ', ' (it / appear) likely that Wilkinson would win the championship.'], answers: [['did it appear']] },
      { number: 10, parts: ['Only if the weather is clear ', ' (the space shuttle / will allow) to launch.'], answers: [['will the space shuttle be allowed']] }
    ]
  },
  {
    id: 'D',
    unitId: 19,
    title: 'Other inversions: Neighbourhood noise',
    instruction: 'Complete using a verb from the box in the correct form. Try to use each verb at least once.',
    wordBox: ['appear', 'be', 'come', 'go', 'lie', 'sit', 'stand'],
    questions: [
      {
        number: 1,
        parts: [
          "'There ",
          " our new neighbour now,' said Joe. I looked up and coming along the path ",
          ' a short, fat man. On his head ',
          ' a bright red baseball cap. He ignored us and went into the house next door. We waited a moment. From an upstairs window ',
          " the sound of loud rock music. Joe sighed.\n'Every day for the past week has been the same,' he said. 'Well, today's going to be different.' In his hand ",
          " a letter from the council. 'This'll stop him,' he said.\nWe went next door and knocked. After a moment, the door opened and the music suddenly got louder. There ",
          ' a little old woman, looking up at us, smiling. On the sofa behind her ',
          " a fat old cat.\n'Erm ... we've come about the noise,' mumbled Joe, confused at finding the old woman.\n'Eh?' she said.\n'About the noise. I've got a letter from the council,' shouted Joe. Suddenly, in the doorway ",
          " the same fat man I had seen earlier.\n'She's quite deaf. That's why she plays her music so loud. Can I help you?'\nJoe looked at the little old woman. 'Er ... no. No. That's okay.' He screwed the letter up and put it into his pocket."
        ],
        answers: [
          ['is', 'goes'], ['was'], ['was', 'sat'], ['came'],
          ['was'], ['stood'], ['lay', 'was', 'sat'], ['appeared', 'was', 'stood']
        ]
      }
    ]
  },
  {
    id: 'E',
    unitId: 19,
    title: 'Inversion after so, such, neither, nor, as, than',
    instruction: 'Choose the correct phrase. If both are correct, choose both.',
    questions: [
      { number: 1, parts: ["Dave doesn't really trust Ian, and I have to say that neither ", '.'], answers: [['do I']], options: [['I do', 'do I']] },
      { number: 2, parts: ['Such a valuable painting ', ' that the public are not allowed to get close to it.'], answers: [['is it']], options: [['it is', 'is it']] },
      { number: 3, parts: ['So ', ' watch TV while we ate, we moved the television onto the balcony.'], answers: [['we could']], options: [['we could', 'could we']] },
      { number: 4, parts: ["My dad's never been abroad, and nor ", '.'], answers: [['has my mum']], options: [['my mum has', 'has my mum']] },
      { number: 5, parts: ['Such ', ' in the wedding that there were over a dozen photographers.'], answers: [['was the media interest']], options: [['the media interest was', 'was the media interest']] },
      { number: 6, parts: ["It's been a hard season for the team, as ", '.'], answers: [['last season was', 'was last season']], options: [['last season was', 'was last season']] },
      { number: 7, parts: ['Russia is a country with vast natural resources, and so ', '.'], answers: [['is China']], options: [['China is', 'is China']] },
      { number: 8, parts: ['We in this country spend more per person on fuel than ', '.'], answers: [['the French do', 'do the French']], options: [['the French do', 'do the French']] },
      { number: 9, parts: ['The Minister was forced to resign, such ', ' on her.'], answers: [['was the pressure']], options: [['the pressure was', 'was the pressure']] },
      { number: 10, parts: ['So nervous ', ' that I was almost certain he was lying.'], answers: [['was he']], options: [['he was', 'was he']] }
    ]
  },
  {
    id: 'F',
    unitId: 19,
    title: 'Cleft sentences',
    instruction: 'Rewrite the sentences, starting with the words given.',
    questions: [
      { number: 1, parts: ['The window was broken by a cricket ball.\nIt ', '.'], answers: [['was a cricket ball which broke the window', 'was a cricket ball that broke the window']] },
      { number: 2, parts: ["I will never forget the day I heard I'd got into my chosen university.\nThe day on ", '.'], answers: [["which I heard I'd got into my chosen university is one I will never forget", "which I heard I'd got into my chosen university is one I'll never forget"]] },
      { number: 3, parts: ['Glynn became a social worker to help people less fortunate than himself.\nThe reason ', '.'], answers: [['Glynn became a social worker was to help people less fortunate than himself']] },
      { number: 4, parts: ['Getting through the summer without getting injured was the only thing the athlete wanted.\nAll ', '.'], answers: [['the athlete wanted was to get through the summer without getting injured']] },
{ number: 5, parts: ["The driver didn't see the motorcyclist.\nWhat happened ", '.'], answers: [["was that the driver didn't see the motorcyclist", "was the driver didn't see the motorcyclist"]] },
{ number: 6, parts: ['Christopher Columbus discovered America.\nThe person ', '.'], answers: [['who discovered America was Christopher Columbus']] },
{ number: 7, parts: ['Seeing Patricia cry like that made me feel guilty.\nWhat ', '.'], answers: [['made me feel guilty was seeing Patricia cry like that']] },
{ number: 8, parts: ['What we had to do first was decide where to meet.\nThe first thing ', '.'], answers: [['we had to do was to decide where to meet', 'we had to do was decide where to meet']] },
{ number: 9, parts: ['There are lots of facilities where we go camping.\nThe place ', '.'], answers: [['where we go camping has lots of facilities']] },
{ number: 10, parts: ['Einstein proved that energy and mass are basically the same thing.\nWhat ', '.'], answers: [['Einstein proved is that energy and mass are basically the same thing', 'Einstein proved was that energy and mass are basically the same thing']] }
]
},
{
id: 'G',
unitId: 19,
title: 'so / such / too / enough',
instruction: 'Write so, such, too or enough in each gap.',
questions: [
{ number: 1, parts: ['It was ', ' good a meal that we left the waiter quite a large tip.'], answers: [['so']] },
{ number: 2, parts: ["It's becoming increasingly clear that there just aren't ", ' people willing to buy our products online.'], answers: [['enough']] },
{ number: 3, parts: ["I'm quite enjoying my maths degree, but I just find statistics ", ' boring!'], answers: [['so']] },
{ number: 4, parts: ['Angela seemed to be having ', ' a good time at the party that I decided not to tell her how late it was.'], answers: [['such']] },
{ number: 5, parts: ["We've all been working ", ' hard on the latest project the manager gave us a couple of extra days off.'], answers: [['so']] },
{ number: 6, parts: ['I worry about my grandparents because they have ', ' a lot of health problems.'], answers: [['such']] },
{ number: 7, parts: ["It's ", ' early to tell whether the business is going to succeed or not.'], answers: [['too']] },
{ number: 8, parts: ["Set the alarm or we'll never wake up early ", ' to catch the first train.'], answers: [['enough']] },
{ number: 9, parts: ['I never knew that Andrew had ', ' few friends.'], answers: [['so']] },
{ number: 10, parts: ["Everyone was surprised when Dan failed because he's ", ' a good student.'], answers: [['such']] },
{ number: 11, parts: ['A year after losing my job, I had ', ' many debts that I was really beginning to panic.'], answers: [['so']] },
{ number: 12, parts: ['I was hoping to have a word with Alan before he left, but it seems to be ', ' late now.'], answers: [['too']] }
]
},
{
id: 'H',
unitId: 19,
title: 'Complex sentences: key word transformations',
instruction: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words.',
questions: [
{ number: 1, parts: ['Only when (cleared) ', ' start decorating.'], answers: [['I had cleared the spare room could I']] },
{ number: 2, parts: ['Hardly (had) ', ' it rang again.'], answers: [['had I put the phone down when']] },
{ number: 3, parts: ['No sooner (had) ', ' they decided to get divorced.'], answers: [['had the Watsons moved to London than']] },
{ number: 4, parts: ['Little (realise) ', ' the manager wanted to see me to fire me.'], answers: [['did I realise that', 'did I realise']] },
{ number: 5, parts: ['It (who) ', ' me about the website.'], answers: [['was Charlie who told']] },
{ number: 6, parts: ['Rarely (to) ', ' a plane ticket at the last minute.'], answers: [['is it possible to buy']] },
{ number: 7, parts: ['Not (question) ', ' about my plans for the summer.'], answers: [['one single question did they ask me', 'a single question did they ask me', 'one question did they ask me']] },
{ number: 8, parts: ['Under (no) ', ' the management to lower wages.'], answers: [['no circumstances will we allow']] }
]
},
{
id: 'I',
unitId: 19,
title: 'Complex sentences review',
instruction: 'Choose the correct answer.',
questions: [
{ number: 1, parts: ['Not until we have no choice ', ' the business down.'], answers: [['will we close']], options: [['close we', 'we will close', 'will we close', 'we close']] },
{ number: 2, parts: ["It was ", " a victory that even Smith's fans couldn't believe it."], answers: [['so surprising']], options: [['such surprising', 'so surprising', 'too surprising', 'surprising enough']] },
{ number: 3, parts: ['At no time ', ' I was going to fail the exam.'], answers: [['did I think']], options: [['did I think', 'thought I', 'I thought', 'was I thought']] },
{ number: 4, parts: ['So ', ' that they actually finished three weeks early.'], answers: [['fast were the builders']], options: [['were the builders fast', 'fast the builders were', 'the builders were fast', 'fast were the builders']] },
{ number: 5, parts: ['Never ', ' complete and utter rubbish!'], answers: [['have I heard such']], options: [['have I heard so', 'I heard such', 'did I hear so', 'have I heard such']] },
{ number: 6, parts: ['In no way ', ' that people will be prevented from organising peaceful protests.'], answers: [['does this law mean']], options: [['this law means', 'means this law', 'does this law mean', 'this law does mean']] },
{ number: 7, parts: ["If you don't put the tent up ", ', it might blow away!'], answers: [['carefully enough']], options: [['too carefully', 'so carefully', 'such carefully', 'carefully enough']] },
{ number: 8, parts: ['No sooner ', ' everyone started to gossip about him.'], answers: [['had Mike left than']], options: [['had Mike left than', 'did Mike leave when', 'left Mike when', 'Mike had left than']] },
{ number: 9, parts: ["'I can't stand this hot weather!' 'No, ", ". Dreadful, isn't it?'"], answers: [['neither can I']], options: [["so can't I", 'neither can I', "so I can't", 'nor I can']] },
{ number: 10, parts: ["'We were at the Rolling Stones concert last weekend.' 'Were you? So ", ".'"], answers: [['was I']], options: [['I was', 'was I being', 'I was there', 'was I']] }
]
},
{
id: 'J',
unitId: 19,
title: 'Problems close to home',
instruction: 'Write one word in each gap.',
questions: [
{
number: 1,
parts: [
'Rarely ',
' neighbours have the best of relationships for any length of time. Of course, some people become close friends, but only if there is a lot of give and take ',
' this possible.\n',
' common are disputes between neighbours that there are many laws to cover arguments over noise, property and rubbish. Before things go ',
' far for the relationship to be saved, there are a few simple things you can do. The first is ',
" speak to your neighbour. You'd be amazed at how many arguments are avoided by ",
' a simple step. Not ',
' does it give you the chance to express your complaint, it ',
' gives your neighbour the chance to explain and, perhaps, take action.\nSecondly, check your rights. On ',
" account should you do anything to damage your neighbours' property, or their overhanging trees if that's the problem, without knowing what your legal rights are.\n",
' until you are sure you are acting within the law should you do anything. And remember - a little understanding can go a long way.'
],
answers: [
['do'], ['is'], ['So'], ['too'], ['to'],
['such'], ['only'], ['also'], ['no'], ['Not']
]
}
]
}
];

export const unitTwentyExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    unitId: 20,
    title: 'Topic vocabulary: Power',
    instruction: 'Choose the correct word.',
    questions: [
      { number: 1, parts: ["The operation can only go ahead if the child's parents ", ' to it.'], answers: [['consent']], options: [['consent', 'submit']] },
      { number: 2, parts: ['In Britain, prisoners are not ', ' to vote in elections, but I think they should be allowed to.'], answers: [['entitled']], options: [['entitled', 'exempt']] },
      { number: 3, parts: ['Colonel Wilson ', ' over 5,000 men.'], answers: [['commands']], options: [['commands', 'intimidates']] },
      { number: 4, parts: ['We need to plan carefully to ', ' all risk of failure.'], answers: [['eliminate']], options: [['eliminate', 'prohibit']] },
      { number: 5, parts: ['Queen Victoria saw many changes during her time as ', '.'], answers: [['monarch']], options: [['dictator', 'monarch']] },
      { number: 6, parts: ["It's one thing having this law, but unless the police ", " it, it's useless."], answers: [['enforce']], options: [['enforce', 'reinforce']] },
      { number: 7, parts: ["I don't think I'll ever ", ' surfing.'], answers: [['master']], options: [['master', 'reign']] },
      { number: 8, parts: ['Our manager at work just tries to ', ' us all into doing what she wants.'], answers: [['bully']], options: [['bully', 'conquer']] },
      { number: 9, parts: ["But surely the council don't have the ", ' to change the law, do they?'], answers: [['authority']], options: [['aggression', 'authority']] },
      { number: 10, parts: ["Didn't the government foresee that there would be a lot of ", ' in the papers about this latest proposal?'], answers: [['controversy']], options: [['controversy', 'unrest']] }
    ]
  },
  {
    id: 'B',
    unitId: 20,
    title: 'Topic vocabulary: Power',
    instruction: 'Complete using the words in the box.',
    wordBox: ['benign', 'former', 'inferior', 'mainstream', 'minister', 'reluctant', 'society', 'subjective', 'superior', 'vulnerable'],
    questions: [
      { number: 1, parts: ['Bill Clinton, ', ' President of the United States, arrived in Beijing today.'], answers: [['former']] },
      { number: 2, parts: ['After years in small political parties, I gradually became more interested in ', ' politics.'], answers: [['mainstream']] },
      { number: 3, parts: ["My boss doesn't know what he's doing, but I can't tell him that because he's ", ' to me.'], answers: [['superior']] },
      { number: 4, parts: ['I was ', ' to help her, but I had no choice.'], answers: [['reluctant']] },
      { number: 5, parts: ["You might think people want this law, but that's just your ", " opinion and you don't have any facts to back it up."], answers: [['subjective']] },
      { number: 6, parts: ['A dictator might appear ', ', but you never know when they might start to abuse their power.'], answers: [['benign']] },
      { number: 7, parts: ['We must do all we can to help those who are in a ', ' position.'], answers: [['vulnerable']] },
      { number: 8, parts: ['Each department is controlled by a ', ', who is part of the government.'], answers: [['minister']] },
      { number: 9, parts: ["Don't think I'm ", ' to you. I\'m just as good as you are.'], answers: [['inferior']] },
      { number: 10, parts: ["I'm sick of worrying about what ", " thinks and I'm just going to do what I want."], answers: [['society']] }
    ]
  },
  {
    id: 'C',
    unitId: 20,
    title: 'Topic vocabulary: Power (Power)',
    instruction: 'Complete using the correct form of the words in the box.',
    wordBox: ['dominate', 'impose', 'label', 'liberate', 'resist', 'restrict', 'subject', 'summon', 'undermine', 'victimise'],
    questions: [
      {
        number: 1,
        parts: [
          'We are ',
          ' to many different forms of power. There are those forms of power that exist by law: the right of the government to ',
          ' laws on a country and to ',
          ' what we are allowed to do. There is also the right of courts to ',
          ' people to appear to stand trial or to give evidence. There is also, of course, power on a more personal level.\nPeople are constantly struggling for power and social status. This might take the form of attempting to ',
          ' a conversation, something that is relatively easy to ',
          ' since it is so obvious. It is more difficult to ',
          " ourselves from other forms of social power. When we are ",
          " as 'this' or 'that' by other people and put into a category, that too is a form of power. Bosses at work might ",
          ' their employees by making them work long hours. A parent might ',
          " their child's self-confidence with constant criticism. Power is everywhere and the more you understand it, the more you may be able to control it."
        ],
        answers: [
          ['subject', 'subjected'], ['impose'], ['restrict'], ['summon'], ['dominate'],
          ['resist'], ['liberate'], ['labelled'], ['victimise'], ['undermine']
        ]
      }
    ]
  },
  {
    id: 'D',
    unitId: 20,
    title: 'Topic vocabulary: Social issues (Crime and punishment)',
    instruction: 'Complete using the correct form of the words in the box.',
    wordBox: ['bureaucracy', 'community', 'convict', 'corruption', 'deterrent', 'institution', 'legislation', 'prejudice', 'reform', 'state'],
    questions: [
      {
        number: 1,
        parts: [
          'The demand for prison ',
          ' has steadily increased as more and more people have come to see that locking people up in ',
          " simply doesn't reduce crime. Not only does it fail to act as a ",
          ', but it does very little to help ',
          ' readjust to life back in the ',
          ' after they have served their time. Prisons are isolated places, where prisoners learn from other criminals, and where bullying, bribery and other forms of ',
          ' spread. Once outside prison, offenders face ',
          ', which tends to force them back into a life of crime. Even once the ',
          ' recognises the need for change, it is notoriously slow. It usually demands new ',
          ' to change the system, and while the slow processes of ',
          ' go on, more and more lives are affected.'
        ],
        answers: [
          ['reform'], ['institutions'], ['deterrent'], ['convicts'], ['community'],
          ['corruption'], ['prejudice'], ['state'], ['legislation'], ['bureaucracy']
        ]
      }
    ]
  },
  {
    id: 'E',
    unitId: 20,
    title: 'Topic vocabulary: Social issues',
    instruction: 'If the bold word is correct, write OK. If it is incorrect, replace it with one of the bold words from the other sentences.',
    questions: [
      { number: 1, parts: ["It's ridiculous to think that we should (advocate) ", ' passports and just let everyone go where they like.'], answers: [['abolish']] },
      { number: 2, parts: ["What I don't understand is why the government aren't doing the work that this (heritage) ", ' is doing.'], answers: [['charity']] },
      { number: 3, parts: ["Don't you think that our library system is an important part of our national (action) ", '?'], answers: [['heritage']] },
      { number: 4, parts: ['Unions are threatening industrial (class) ', ' unless the pay offer is increased.'], answers: [['action']] },
      { number: 5, parts: ['Do you (alleviate) ', ' capital punishment for very serious offences?'], answers: [['advocate']] },
      { number: 6, parts: ['Derren came from a working (immigration) ', ' background but eventually became a lord.'], answers: [['class']] },
      { number: 7, parts: ['Warning: We will (abolish) ', ' anyone caught shoplifting.'], answers: [['prosecute']] },
      { number: 8, parts: ['I suppose I was (privileged) ', " to go to private school, but I don't think about it much."], answers: [['OK']] },
      { number: 9, parts: ['More must be done to (prosecute) ', ' the suffering of the poorest in society.'], answers: [['alleviate']] },
      { number: 10, parts: ['High levels of (charity) ', ' to Australia from Europe in the nineteenth century meant there was a rapid increase in its population.'], answers: [['immigration']] }
    ]
  },
  {
    id: 'F',
    unitId: 20,
    title: 'Phrasal verbs: matching',
    instruction: 'Match each sentence beginning with the correct ending.',
    wordBox: [
      'A in to this kind of blackmail from the workers.',
      "B off with just 100 hours' community service.",
      "C in at this election because it doesn't make any difference.",
      'D down from her position on abortion.',
      'E over the business and rearranged things.',
      'F up when the alarm went off.',
      'G about the changes that we so desperately need.',
      'H back at her critics and claimed she had done nothing wrong.'
    ],
    questions: [
      { number: 1, parts: ['No matter what I said, Chris refused to back ', ''], answers: [['D']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']] },
      { number: 2, parts: ['Hardly had they locked the shop ', ''], answers: [['F']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']] },
      { number: 3, parts: ['Only radical action will bring ', ''], answers: [['G']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']] },
      { number: 4, parts: ['What annoys me is that the man got ', ''], answers: [['B']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']] },
      { number: 5, parts: ['The Prime Minister hit ', ''], answers: [['H']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']] },
      { number: 6, parts: ['Things have certainly improved since you took ', ''], answers: [['E']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']] },
{ number: 7, parts: ["The authorities shouldn't give ", ''], answers: [['A']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']] },
{ number: 8, parts: ["I don't care who gets ", ''], answers: [['C']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']] }
]
},
{
id: 'G',
unitId: 20,
title: 'Phrasal verbs',
instruction: 'Write a word in each gap so that each second sentence has a similar meaning to the first sentence.',
questions: [
{ number: 1, parts: ["They're gradually getting rid of the old-style passports.\nThey're ", ' out the old-style passports.'], answers: [['phasing']] },
{ number: 2, parts: ['Did you know that you can choose not to pay into the state pension scheme?\nDid you know that you can ', ' out of the state pension scheme?'], answers: [['opt']] },
{ number: 3, parts: ['The police are making a special effort to deal with illegal parking around here.\nThe police are ', ' down on illegal parking around here.'], answers: [['cracking']] },
{ number: 4, parts: ['Police officers in plain clothes tried to join the crowd and not be noticed.\nPolice officers in plain clothes tried to ', ' in with the crowd.'], answers: [['blend']] },
{ number: 5, parts: ["You shouldn't let Stephanie bully you.\nYou should ", ' up to Stephanie.'], answers: [['stand']] },
{ number: 6, parts: ['The press directed most of their criticism at the Deputy Prime Minister.\nThe Deputy Prime Minister was ', ' out for criticism by the press.'], answers: [['singled']] },
{ number: 7, parts: ["I wish you wouldn't speak to me as if you were superior.\nI wish you wouldn't ", ' down to me.'], answers: [['talk']] },
{ number: 8, parts: ['Kyle got in trouble for bullying kids in the playground.\nKyle got in trouble for ', ' kids around in the playground.'], answers: [['pushing']] }
]
},
{
id: 'H',
unitId: 20,
title: 'Phrasal verbs with up',
instruction: "Choose Yes if the phrasal verb has a meaning connected to 'fastening or restricting'; otherwise choose No.",
questions: [
{ number: 1, parts: ['I heard on the news that terrorists have blown a train up in India. ', ''], answers: [['No']], options: [yesNo] },
{ number: 2, parts: ["I think it's cruel to leave a dog chained up like that all day. ", ''], answers: [['Yes']], options: [yesNo] },
{ number: 3, parts: ["It's freezing outside. Do up your coat before you go out. ", ''], answers: [['Yes']], options: [yesNo] },
{ number: 4, parts: ["Sorry! I didn't mean to mess your room up, but I was looking for something. ", ''], answers: [['No']], options: [yesNo] },
{ number: 5, parts: ["Why don't you sew up that hole in your jeans before you go out? ", ''], answers: [['Yes']], options: [yesNo] },
{ number: 6, parts: ['The parcel was taped up so I had to use scissors to open it. ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 7, parts: ['I found a rope to tie the burglar up with and then I called the police. ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 8, parts: ["Can you help me? I can't zip up my top. ", ''], answers: [['Yes']], options: [yesNo] }
]
},
{
id: 'I',
unitId: 20,
title: 'Phrases, patterns and collocations: The Hoody',
instruction: 'Write one word in each gap.',
questions: [
{
number: 1,
parts: [
"The hooded top, or 'hoody', has become something of a symbol of youth crime in Britain. It seems to get a mention whenever the newspapers get ",
' the subject. Those wearing them are often classed ',
' yobs or hooligans, even when they have done nothing ',
' the law. The problem is that hoodies can easily hide their identity from CCTV cameras. Those ',
' authority in some places such as shopping centres have even gone so far as to ban people wearing hoodies. They claim that the threat of crime ',
' them the right to do it, but there is a danger that young people will actually be provoked ',
' behaving in antisocial ways through rules like this. They may feel that those ',
' power are discriminating against them, and that they refuse to listen when they deny ',
' done anything wrong. It seems to be a classic example ',
' older people feeling threatened by the fashions of the young. At the end of the day, what the members of their peer ',
" think will always be more important to the young than what people running shopping centres think they should or shouldn't wear."
],
answers: [['onto'], ['as'], ['against'], ['in'], ['gives'], ['into'], ['in'], ['having'], ['of'], ['group']]
}
]
},
{
id: 'J',
unitId: 20,
title: 'Phrases, patterns and collocations',
instruction: 'For each question, write one word which can be used in all three sentences.',
questions: [
{ number: 1, parts: ["We don't go out during the week as a ___, but we'll make an exception tonight. People must be made to respect the ___ of law, or we'll have anarchy. A good ___ of thumb is that you should allow 15 minutes per exercise in the exam. Word: ", ''], answers: [['rule']] },
{ number: 2, parts: ["Did you hear that the guy who lives in the flat upstairs has been ___ with burglary? I couldn't believe they ___ me three euros for a bottle of water! The children ran out of the school gate and ___ down the hill. Word: ", ''], answers: [['charged']] },
{ number: 3, parts: ["We have it on good ___ that they're thinking of closing the local office. The professor spoke with ___ on the subject of young people and crime. Responsibility for running the prison has been taken out of the hands of the local ___. Word: ", ''], answers: [['authority']] },
{ number: 4, parts: ["The headteacher punished Aaron severely in order to make an ___ of him. Why can't you follow your brother's ___ and go to university? Give me one ___ of a place round here where young people can go in the evenings. Word: ", ''], answers: [['example']] },
{ number: 5, parts: ["The politician ___ all responsibility for the prison escape. The authorities ___ the couple's request to be allowed to stay in Britain. I didn't believe Abigail when she ___ knowing who had stolen the money. Word: ", ''], answers: [['denied']] },
{ number: 6, parts: ["My parents have decided to lay down the ___ so I can't come out this weekend. This government's top priority is ___ and order. Have things improved since the Freedom of Information Act became ___? Word: ", ''], answers: [['law']] }
]
},
{
id: 'K',
unitId: 20,
title: 'Phrases, patterns and collocations',
instruction: 'Choose the correct answer.',
questions: [
{ number: 1, parts: ['We all have to follow the rules, and none of us is ', ' the law.'], answers: [['above']], options: [['beyond', 'over', 'above', 'onto']] },
{ number: 2, parts: ['Apparently, before the fight some of the youths had ', ' themselves with knives.'], answers: [['armed']], options: [['fitted', 'installed', 'armed', 'readied']] },
{ number: 3, parts: ['The woman was convicted and sentenced ', ' six months in prison.'], answers: [['to']], options: [['for', 'on', 'with', 'to']] },
{ number: 4, parts: ['Since it was a minor offence, Derek was sent to ', ' prison.'], answers: [['an open']], options: [['an open', 'an easy', 'a soft', 'a weak']] },
{ number: 5, parts: ['A middle-aged man was seen running away from the ', ' of the crime.'], answers: [['scene']], options: [['place', 'scene', 'location', 'point']] },
{ number: 6, parts: ["I work such long hours that I don't really have time for much of a ", ' life.'], answers: [['social']], options: [['friendly', 'outgoing', 'social', 'free']] },
{ number: 7, parts: ["Don't worry - the documents are safely ", ' lock and key at my place.'], answers: [['under']], options: [['under', 'in', 'on', 'within']] },
{ number: 8, parts: ["The most powerful force in a teenager's life is probably ", ' pressure.'], answers: [['peer']], options: [['friend', 'peer', 'company', 'crowd']] },
{ number: 9, parts: ['We are pleased to inform you that we have decided to ', ' your request for British citizenship.'], answers: [['grant']], options: [['give', 'grant', 'permit', 'donate']] },
{ number: 10, parts: ['We finally managed to ', ' our way through the crowd and reach the exit.'], answers: [['force']], options: [['create', 'insist', 'move', 'force']] }
]
},
{
id: 'L',
unitId: 20,
title: 'Idioms',
instruction: 'Complete using the words in the box.',
wordBox: ['book', 'hand', 'head', 'law', 'live', 'powers', 'strings', 'tape', 'thumb', 'way'],
questions: [
{ number: 1, parts: ["You can't just bury your ", ' in the sand and hope that this problem goes away, you know.'], answers: [['head']] },
{ number: 2, parts: ['My dad pulled a few ', ' and got me the job.'], answers: [['strings']] },
{ number: 3, parts: ["You can't just take the ", ' into your own hands and attack someone like that.'], answers: [['law']] },
{ number: 4, parts: ["Ian's really under his boss's ", " and isn't allowed to make any decisions himself."], answers: [['thumb']] },
{ number: 5, parts: ['It was a difficult game, but I eventually managed to gain the upper ', '.'], answers: [['hand']] },
{ number: 6, parts: ["Our neighbour's a bit strange, but ", ' and let live, I always say.'], answers: [['live']] },
{ number: 7, parts: ['The ', ' that be have decided to ban skateboarding in the park.'], answers: [['powers']] },
{ number: 8, parts: ['I had to get through a lot of red ', ', but I finally got the documents I needed.'], answers: [['tape']] },
{ number: 9, parts: ['If you let Vanessa have her own ', " all the time, you'll spoil her."], answers: [['way']] },
{ number: 10, parts: ["This is the third time Heather's been caught - they're really going to throw the ", ' at her this time.'], answers: [['book']] }
]
},
{
id: 'M',
unitId: 20,
title: 'Word formation: A Reader Writes ...',
instruction: 'Use the word given in capitals to form a word that fits each gap.',
questions: [
{
number: 1,
parts: [
'We have all had the experience, I am sure, of feeling (POWER) ',
' in the face of civil servants. All nations need bureaucrats, but too many have become (INSTITUTE) ',
' and inflexible. While some carry out their jobs (DUTY) ',
', others apply the letter of the law but not the spirit, and behave in an (OFFICE) ',
' manner, relying on computers and rules to tell them what is (PERMIT) ',
' and what is not. The number of civil servants has increased (SIGNIFY) ',
' under this current government, which I believe is a good (INDICATE) ',
' of where their priorities lie. I agree with Jack Turner (Letters, 16th May) that it is a (CRIME) ',
" waste of taxpayers' money and I find his argument that we only need one third of them very (PERSUADE) ",
' indeed. We in this country have (ARGUE) ',
' the biggest civil service in this part of the world and it is time something was done about it.\nYours sincerely,\nA. P. Kennedy (Mrs)'
],
answers: [
['powerless'], ['institutionalised'], ['dutifully'], ['officious'], ['permissible'],
['significantly'], ['indicator', 'indication'], ['criminal'], ['persuasive'], ['arguably']
]
}
]
},
{
id: 'N',
unitId: 20,
title: 'Word formation',
instruction: 'Each of the bold words is in an incorrect form. Rewrite them correctly.',
questions: [
{ number: 1, parts: ['The (domineering) ', " view is that it's time this Prime Minister went."], answers: [['predominant']] },
{ number: 2, parts: ['Since the factory closed, many people in the area have been living in (hardly) ', '.'], answers: [['hardship']] },
{ number: 3, parts: ['I find a lot of what is on TV these days offensive and (moralise) ', '.'], answers: [['immoral']] },
{ number: 4, parts: ['Did you know that you can claim (charity) ', ' donations against tax?'], answers: [['charitable']] },
{ number: 5, parts: ['Peter gave the ball a (mightily) ', ' kick and sent it over the wall.'], answers: [['mighty']] },
{ number: 6, parts: ['From what she said, I think Katie is (prejudicial) ', ' against black people.'], answers: [['prejudiced']] },
{ number: 7, parts: ["Calm down! There's no need to get so (aggression) ", ' about the situation!'], answers: [['aggressive']] },
{ number: 8, parts: ['Verity won a prize at school for her (example) ', ' behaviour.'], answers: [['exemplary']] },
{ number: 9, parts: ["It's not often you see such agreement between the opposition and the (governor) ", ' party.'], answers: [['governing']] },
{ number: 10, parts: ["I'm sure Scott wouldn't have hit the other boy if he hadn't had some kind of (provocative) ", '.'], answers: [['provocation']] },
{ number: 11, parts: ['Lois can be so (arguable) ', " sometimes and never seems to listen to the other person's point of view."], answers: [['argumentative']] },
{ number: 12, parts: ["I know I'm successful, but I only got where I am today by working (hardly) ", '.'], answers: [['hard']] },
{ number: 13, parts: ["I'm only telling you this (officialdom) ", ', but it looks like you are going to be promoted.'], answers: [['unofficially']] },
{ number: 14, parts: ['This problem may seem (significance) ', ' to you, but I can assure you that the council takes it very seriously.'], answers: [['insignificant']] },
{ number: 15, parts: ['After the recent civil war, the country is almost (government) ', ' and crime rates have soared.'], answers: [['ungovernable']] },
{ number: 16, parts: ['I managed to (persuasive) ', ' Mike from sacking you, but just be more careful next time.'], answers: [['dissuade']] }
]
},
{
id: 'O',
unitId: 20,
title: 'Word formation: prefix mis-',
instruction: "Choose Yes if the word can form a word using mis- to mean 'bad/badly' or 'wrong/wrongly'; otherwise choose No.",
questions: [
{ number: 1, parts: ['apply ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 2, parts: ['behave ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 3, parts: ['calculate ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 4, parts: ['conduct ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 5, parts: ['direct ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 6, parts: ['fire ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 7, parts: ['fortune ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 8, parts: ['hear ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 9, parts: ['inform ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 10, parts: ['judge ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 11, parts: ['lead ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 12, parts: ['listen ', ''], answers: [['No']], options: [yesNo] },
{ number: 13, parts: ['manage ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 14, parts: ['organise ', ''], answers: [['No']], options: [yesNo] },
{ number: 15, parts: ['place ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 16, parts: ['print ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 17, parts: ['read ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 18, parts: ['satisfy ', ''], answers: [['No']], options: [yesNo] },
{ number: 19, parts: ['spell ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 20, parts: ['trust ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 21, parts: ['understand ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 22, parts: ['use ', ''], answers: [['Yes']], options: [yesNo] }
]
},
{
id: 'P',
unitId: 20,
title: 'Word formation: prefix mis-',
instruction: 'Complete the sentences using words formed in exercise O in the correct form.',
questions: [
{ number: 1, parts: ['Oh, I thought you said Saturday. I must have ', ' you.'], answers: [['misheard', 'misunderstood']] },
{ number: 2, parts: ['I hope I never have the ', ' to meet that horrible man ever again!'], answers: [['misfortune']] },
{ number: 3, parts: ['The secretary was arrested for ', " the club's money."], answers: [['misusing', 'mismanaging']] },
{ number: 4, parts: ['When I looked at the bill, I realised that they had ', ' it by nearly five per cent.'], answers: [['miscalculated']] },
{ number: 5, parts: ["Now, be good. I don't want you to ", ' while Mrs Charlton is here.'], answers: [['misbehave']] },
{ number: 6, parts: ['I always ', " 'potato' because I always think there's an 'e' on the end."], answers: [['misspell']] },
{ number: 7, parts: ['I used to think Molly was unfriendly, but I think I ', " her and she's actually quite nice."], answers: [['misjudged']] },
{ number: 8, parts: ['The gun ', ' and injured the soldier.'], answers: [['misfired']] }
]
}
];