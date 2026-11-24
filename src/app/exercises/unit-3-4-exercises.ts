import type { ExerciseSection } from './exercises';

const yesNo = ['Yes', 'No'];

export const unitThreeExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    unitId: 3,
    title: 'Past time: past simple or present perfect simple',
    instruction: 'Choose the correct word or phrase.',
    questions: [
      { number: 1, parts: ['Rick should know about the meeting because I ', ' him about it yesterday.'], answers: [['told']], options: [['told', 'have told']] },
      { number: 2, parts: ['', ' last July while you were both backpacking around Europe?'], answers: [['Did you meet']], options: [['Did you meet', 'Have you met']] },
      { number: 3, parts: ["I'm resigning because the pressure at work ", ' too much for me.'], answers: [['has become']], options: [['has become', 'became']] },
      { number: 4, parts: ['A month ago, I ', " a letter from Neil, but I haven't replied."], answers: [['got']], options: [['got', 'have got']] },
      { number: 5, parts: ['Julie ', ' anxious to speak to you since she heard about your accident.'], answers: [['has been']], options: [['was', 'has been']] },
      { number: 6, parts: ['I ', ' no idea you were such a good chess player.'], answers: [['had']], options: [['had', 'have had']] },
      { number: 7, parts: ['If you ', ", put your hand up and I'll collect your exam paper."], answers: [['have finished']], options: [['finished', 'have finished']] },
      { number: 8, parts: ['There ', ' a number of different reasons for our divorce.'], answers: [['were']], options: [['were', 'have been']] },
      { number: 9, parts: ['It was my birthday last week and my grandad ', ' me a new laptop.'], answers: [['gave']], options: [['gave', 'has given']] },
      { number: 10, parts: ["I don't know who's responsible because I ", ' here long.'], answers: [["haven't worked"]], options: [["didn't work", "haven't worked"]] },
      { number: 11, parts: ['My brother and I ', ' to chew gum when we were young.'], answers: [['were never allowed']], options: [['were never allowed', 'have never been allowed']] },
      { number: 12, parts: ['My parents ', ' me to a private school until I was 12.'], answers: [['sent']], options: [['sent', 'have sent']] }
    ]
  },
  {
    id: 'B',
    unitId: 3,
    title: 'Past time: past simple or past continuous',
    instruction: 'Write the verb in brackets in the correct form, past simple or past continuous, in each gap. You may have to use the passive form.',
    questions: [
      { number: 1, parts: ['When the explosion happened, hundreds of people ', ' (pass) through the airport.'], answers: [['were passing']] },
      { number: 2, parts: ['When I heard the phone ring, I ', ' (stop) writing to answer it.'], answers: [['stopped']] },
      { number: 3, parts: ['Amy ', " (read), so she didn't see me walking past."], answers: [['was reading']] },
      { number: 4, parts: ['I ', ' (have) piano lessons every week from the age of six onwards.'], answers: [['had']] },
      { number: 5, parts: ['We decided to leave the beach because it ', ' (get) dark and we wanted to get home while there was still some light.'], answers: [['was getting']] },
      { number: 6, parts: ['', ' Jessica already ', ' (think) of leaving university before she failed her first year exams?'], answers: [['Was'], ['thinking']] },
      { number: 7, parts: ['Since the hotel had a pool, ', ' you ', ' (swim) every day?'], answers: [['did'], ['swim']] },
      { number: 8, parts: ['The Industrial Revolution ', ' (attract) many people from the country to the city.'], answers: [['attracted']] },
      { number: 9, parts: ['The Hubble Space Telescope ', ' (put) into orbit around the Earth in 1990.'], answers: [['was put']] },
      { number: 10, parts: ["Sorry I couldn't come on Friday, but I ", ' (work) on my project.'], answers: [['was working']] },
      { number: 11, parts: ['By the time we ', ' (arrive), the party was almost over.'], answers: [['arrived']] },
      { number: 12, parts: ['The national park ', ' (create) to protect local wildlife.'], answers: [['was created']] }
    ]
  },
  {
    id: 'C',
    unitId: 3,
    title: 'High-tech trouble',
    instruction: 'Write a verb from the box in the correct form in each gap.',
    wordBox: ['appear', 'check', 'complete', 'disappear', 'get', 'go', 'kidnap', 'look', 'make', 'mean', 'open', 'press', 'race', 'rain', 'remind', 'see', 'start', 'take', 'travel', 'wait', 'wear', 'work'],
    questions: [
      {
        number: 1,
        parts: [
          'It all ',
          ' as I made my way home from work. We ',
          ' on a top secret computer program, and everyone ',
          ' pretty nervous about finishing on time, so it was good to get away from the office. It ',
          ' and it seemed like everyone ',
          ' home at the same time, anxious to avoid getting wet. I ',
          ' down into the underground station and ',
          ' for the train when I ',
          ' her at the end of the platform. She ',
          ' a red leather jacket that ',
          " me of something I'd seen in a film, although I couldn't remember when. As I watched, she ",
          ' her handbag and ',
          ' out what looked like a hand-held computer. She ',
          ' something on the screen, then ',
          ' in my direction. Suddenly, my mobile phone ',
          ' a sound that ',
          ' I had a text message. Frowning, I ',
          ' a key and the message ',
          ". 'We ",
          ' your daughter. We know you ',
          " the program. Follow the woman in red.' I looked up just as she ",
          ' around the corner. I ',
          ' after her.'
        ],
        answers: [
          ['started'], ['were working', 'had been working'], ['was getting'], ['was raining'], ['was travelling'],
          ['went'], ['was waiting'], ['saw'], ['was wearing'], ['reminded'], ['opened'], ['took'],
          ['checked'], ['looked'], ['made'], ['meant'], ['pressed'], ['appeared'], ['have kidnapped'],
          ['have completed'], ['disappeared', 'was disappearing'], ['raced']
        ]
      }
    ]
  },
  {
    id: 'D',
    unitId: 3,
    title: 'Past tenses: error correction',
    instruction: 'One verb in each sentence is in the wrong tense. Write it in the correct tense.',
    questions: [
      { number: 1, parts: ["I've been having a lot of problems with my computer recently and so I got a technician to come and have a look at it, but she (has told) ", " me that it was because I wasn't using it properly."], answers: [['told']] },
      { number: 2, parts: ['It (was) ', ' a few days since I heard from Roger, but he left Russia last Monday and he was planning to arrive in China yesterday, so I called his mum to see if she had heard anything.'], answers: [['is', 'has been', "'s been"]] },
      { number: 3, parts: ['Patricia and I were having a really good discussion when Jason suddenly appeared and decided that he wanted to join in, even though he (has known) ', ' absolutely nothing about what we were talking about.'], answers: [['knew']] },
      { number: 4, parts: ['I (had never been visiting) ', " a working prison before, so when the opportunity came up I was really eager to have a look around and I certainly wasn't disappointed, although we weren't actually allowed to see the area where the prisoners live."], answers: [['had never visited']] },
      { number: 5, parts: ["Charlie didn't know what Callum had said to Imogen, but he could see immediately that she had been crying and he (was putting) ", ' his arm around her to comfort her, which made her feel a little better.'], answers: [['put']] },
      { number: 6, parts: ['Although there was no reason to doubt what Alex said, I (was ringing) ', ' Rick to check and he told me that Alex had been right and the concert really had been cancelled because the lead singer had come down with flu.'], answers: [['rang']] },
      { number: 7, parts: ['The year before, I had given Lisa a CD for her birthday, but this particular year I wanted to surprise her, so I went into town and I was looking round the shops when suddenly I (had seen) ', ' an old-fashioned hat, and it was her size, so I immediately bought it.'], answers: [['saw']] },
      { number: 8, parts: ["Olivia was cycling to school, as she usually did on those days when her father was working and wasn't able to drive her, when she (was passing) ", ' an old woman, who was waiting for the lights to change so that she could cross the road.'], answers: [['passed']] }
    ]
  },
  {
    id: 'E',
    unitId: 3,
    title: 'Past continuous or present perfect continuous',
    instruction: 'Write the verb in brackets in the correct form, past continuous or present perfect continuous, in each gap.',
    questions: [
      { number: 1, parts: ["'Why are you out of breath?' 'Because I ", " for the last hour.' (exercise)"], answers: [['have been exercising', "'ve been exercising"]] },
      { number: 2, parts: ["'Your light was on when I walked past last night.' 'Yes, I ", " online to my cousin in Australia.' (chat)"], answers: [['was chatting']] },
      { number: 3, parts: ["'You've really improved on the flute.' 'Well, I hope so because I ", " a lot lately.' (practise)"], answers: [['have been practising', "'ve been practising"]] },
      { number: 4, parts: ["'You're not jealous of my other friends, are you?' 'No, but you ", " quite a lot of them recently.' (see)"], answers: [['have been seeing', "'ve been seeing"]] },
      { number: 5, parts: ["'I didn't wake you up, did I?' 'No, I ", ".' (sleep)"], answers: [["wasn't sleeping", 'was not sleeping']] },
      { number: 6, parts: ["'Did you quit your job in the end?' 'I ", " of doing so for a long time, but then I decided not to.' (think)"], answers: [['was thinking']] },
      { number: 7, parts: ["'Why is your street such a mess?' 'Oh, the council ", " up the roads, but they should finish this weekend.' (dig)"], answers: [['have been digging', 'has been digging']] }
    ]
  },
   {
    id: 'F',
    unitId: 3,
    title: 'Past simple or past perfect',
    instruction: 'Write one verb in each sentence in the past simple and the other verb in the past perfect.',
    questions: [
      { number: 1, parts: ['The ambulance ', ' (left) by the time the reporters ', ' (get) to the scene of the accident.'], answers: [['had left'], ['got']] },
      { number: 2, parts: ['Before I ', ' (meet) Dr Christian, I ', ' (see) a number of different specialists.'], answers: [['met'], ['had seen']] },
      { number: 3, parts: ['It ', ' (be) only the second time I ', ' (ever / be) in a helicopter.'], answers: [['was'], ['had ever been']] },
      { number: 4, parts: ["Up to the moment when Mr O'Donnell ", " (say) 'You're fired', I ", ' (have) no idea why he wanted to see me.'], answers: [['said'], ['had had']] },
      { number: 5, parts: ['When Tonya ', ' (finished) eating, she ', ' (ask) the waiter to bring the bill.'], answers: [['had finished'], ['asked']] },
      { number: 6, parts: ['Luckily, I ', ' (just / reach) the end of my essay when the teacher ', ' (tell) us all to put our pens down.'], answers: [['had just reached'], ['told']] },
      { number: 7, parts: ['We ', ' (do) everything we had to do by five, so we ', ' (decide) to go out for a coffee.'], answers: [['had done'], ['decided']] },
      { number: 8, parts: ['I ', " (want) Mrs Thomas's young son to touch my ornaments because I ", ' (just / clean) them.'], answers: [["didn't want", 'did not want'], ['had just cleaned']] },
      { number: 9, parts: ['My mum ', ' (be) annoyed with me because I ', ' (forget) to get milk when I was at the shop.'], answers: [['was'], ['had forgotten']] },
      { number: 10, parts: ['I ', ' (get) Janine a book for her birthday, but she ', ' (read) it before.'], answers: [['got'], ['had read']] }
    ]
  },
   {
    id: 'G',
    unitId: 3,
    title: 'The mobile phone',
    instruction: 'If the bold word or phrase is in the correct form, write OK. If it is incorrect, write the correct form.',
    questions: [
      { number: 1, parts: ['People (have been dreaming) ', ' of having a personal means of communication for a long time.'], answers: [['OK']] },
      { number: 2, parts: ['In the late 1960s, the idea (had seemed) ', ' so far in the future that it was included in the science fiction series, Star Trek.'], answers: [['seemed']] },
      { number: 3, parts: ['In the late 1960s, the idea seemed so far in the future that it (was included) ', ' in the science fiction series, Star Trek.'], answers: [['OK']] },
      { number: 4, parts: ['Since the 1980s, however, mobiles (became) ', ' a part of everyday life.'], answers: [['have become']] },
      { number: 5, parts: ['Although they (were initially seen) ', ' as a status symbol for successful business people, mobile use spread to include practically everyone.'], answers: [['OK']] },
      { number: 6, parts: ['Mobile use (had spread) ', ' to include practically everyone in the developed world, old and young alike.'], answers: [['has spread']] },
      { number: 7, parts: ['The impact on social life (had been) ', ' enormous.'], answers: [['has been']] },
      { number: 8, parts: ['Before this was possible, there were many occasions when friends who (had arranged) ', ' to meet completely missed each other.'], answers: [['OK']] },
      { number: 9, parts: ['Friends who had arranged to meet completely (had missed) ', ' each other because of a slight misunderstanding.'], answers: [['missed']] },
      { number: 10, parts: ['As mobiles (have been becoming) ', ' more popular, so they have become more powerful.'], answers: [['have become']] },
      { number: 11, parts: ['As mobiles have become more popular, so they (have become) ', ' more powerful.'], answers: [['OK']] },
      { number: 12, parts: ['The large, unreliable mobile phone of the 1980s (has evolved) ', ' into the small, stylish camera phone of today.'], answers: [['OK']] }
    ]
  },
  {
    id: 'H',
    unitId: 3,
    title: 'Past time: key word transformations',
    instruction: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words.',
    questions: [
      { number: 1, parts: ['I started working at eight and I was still working at six in the evening, when you called. (been)\nWhen you called, ', ' ten hours.'], answers: [['I had been working for', "I'd been working for"]] },
      { number: 2, parts: ['We often went to the seaside with our grandparents as children. (would)\nOur grandparents ', ' to the seaside as children.'], answers: [['would often take us']] },
      { number: 3, parts: ["It's about seven years now since Laura started to learn Russian. (learning)\nLaura ", ' seven years.'], answers: [['has been learning Russian for about', "'s been learning Russian for about"]] },
      { number: 4, parts: ['Being with the older children soon stopped being frightening when I went to secondary school. (used)\nSecondary school was frightening, but I ', ' with the older children.'], answers: [['soon got used to being']] },
      { number: 5, parts: ['Every night for the past week I have had the same dream. (having)\nI ', ' for a week now.'], answers: [['have been having the same dream', "'ve been having the same dream"]] },
      { number: 6, parts: ["I always disliked karate lessons but now I'm starting to enjoy them. (used)\nI ", " karate lessons, but now I'm starting to."], answers: [['never used to enjoy']] }
    ]
  },
    { id: 'I', unitId: 3, title: 'The pencil', instruction: 'Write one word in each gap.', questions: [
    { number: 1, parts: ['Because the pencil ', ' become a fundamental part of our lives...'], answers: ['has'] },
    { number: 2, parts: ['People ', ' not been using them forever.'], answers: ['had'] },
    { number: 3, parts: ['People ', ' to use pens and brushes.'], answers: ['used'] },
    { number: 4, parts: ['It ', ' also possible to use a metal stick.'], answers: ['was'] },
    { number: 5, parts: ['No one ', ' found an easy way to make erasable marks.'], answers: ['had'] },
    { number: 6, parts: ['A deposit of graphite ', ' found near Borrowdale.'], answers: ['was'] },
    { number: 7, parts: ['Locals ', ' use graphite to mark sheep.'], answers: ['would'] },
    { number: 8, parts: ['Tales of the substance ', ' spread to artists.'], answers: ['had'] },
    { number: 9, parts: ['It ', ' to have to be covered in something.'], answers: ['used'] },
    { number: 10, parts: ['People had ', ' trying to improve the pencil.'], answers: ['been'] }
  ]},
    {
    id: 'J',
    unitId: 3,
    title: 'Past time review',
    instruction: 'Choose the correct answer.',
    questions: [
      { number: 1, parts: ['How long ', ' before Val finally turned up?'], answers: [['had you been waiting']], options: [['have you been waiting', 'are you waiting', 'you waited', 'had you been waiting']] },
      { number: 2, parts: ['You ', ' be so good at backgammon, did you?'], answers: [['never used to']], options: [['never used to', 'got used to', 'are used to', "wouldn't"]] },
      { number: 3, parts: ['Could you tell me, sir, what you ', ' in the park at three in the morning?'], answers: [['were doing']], options: [['have done', 'have been doing', 'were doing', 'had done']] },
      { number: 4, parts: ['I was angry when you saw me because I ', ' with my sister.'], answers: [['had been arguing']], options: [['have been arguing', 'argued', 'had been arguing', 'would argue']] },
      { number: 5, parts: ['The Black Pirate ', ' over a million copies already this year.'], answers: [['has sold']], options: [['had sold', 'has sold', 'had been selling', 'was selling']] },
      { number: 6, parts: ["Don't throw the paper away because I ", ' it yet.'], answers: [["haven't read"]], options: [["haven't read", "hadn't read", "haven't been reading", "hadn't been reading"]] },
      { number: 7, parts: ['By the time we arrived, the film ', '.'], answers: [['had already started']], options: [['has already started', 'would already start', 'already started', 'had already started']] },
      { number: 8, parts: ['We had to walk home in the end because Jimmy ', ' his car keys.'], answers: [['had lost']], options: [['has been losing', 'had lost', 'was losing', 'had been losing']] },
      { number: 9, parts: ['It took Edward a long time to ', ' living in Canada.'], answers: [['get used to']], options: [['be used to', 'used to', 'get used to', 'be used']] },
      { number: 10, parts: ["I'd love to have lived in the old days, when people ", ' to market by horse and carriage.'], answers: [['would travel']], options: [['have been travelling', 'would travel', 'got used to travelling', 'had been travelling']] },
      { number: 11, parts: ['I much preferred it when we ', ' to Wales every summer on holiday.'], answers: [['used to go']], options: [['used to go', 'were used to going', 'had gone', 'have been going']] },
      { number: 12, parts: ['Your teacher called me today and said that you ', ' in the playground again.'], answers: [['had been fighting']], options: [['had been fighting', 'used to fight', 'have fought', 'would fight']] }
    ]
  }
];

export const unitFourExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    unitId: 4,
    title: 'Topic vocabulary: Change',
    instruction: 'Complete using the correct form of the words in the box.',
    wordBox: ['decay', 'endure', 'innovation', 'mature', 'modify', 'potential', 'progress', 'shift', 'substitute', 'switch'],
    questions: [
      { number: 1, parts: ['Sometimes I wonder how many of the changes we see around us will really ', '.'], answers: [['endure']] },
      { number: 2, parts: ['There has been a real ', ' in attitudes towards this lately.'], answers: [['shift']] },
      { number: 3, parts: ['Mobile phones that receive TV programmes are a real ', '.'], answers: [['innovation']] },
      { number: 4, parts: ['Iris has a lot of ', ' and should do well in her future career.'], answers: [['potential']] },
      { number: 5, parts: ['You have to try to be ', ' about the situation and use your experience to find a solution.'], answers: [['mature']] },
      { number: 6, parts: ["This isn't my laptop! Someone must have ", ' my bag and theirs.'], answers: [['switched']] },
      { number: 7, parts: ["We've made a lot of ", ' with the plans, but we still have a long way to go.'], answers: [['progress']] },
      { number: 8, parts: ["You might have learnt the theory, but there's no ", ' for practical experience.'], answers: [['substitute']] },
      { number: 9, parts: ['When trees fall and start to ', ', they provide a home for many insects.'], answers: [['decay']] },
      { number: 10, parts: ["I've ", ' the design by giving the car six wheels instead of four.'], answers: [['modified']] }
    ]
  },
  {
    id: 'B',
    unitId: 4,
    title: 'Topic vocabulary: Change (The changing face of Britain)',
    instruction: 'Choose the correct word.',
    questions: [
      { number: 1, parts: ['It seemed to the generation of Britons alive before the Second World War that their way of life would ', ' for many years to come.'], answers: [['last']], options: [['sustain', 'maintain', 'last', 'be']] },
      { number: 2, parts: ['However, the war caused a ', ' in British life that completely changed the status quo.'], answers: [['revolution']], options: [['revolution', 'revision', 'rotation', 'rejection']] },
      { number: 3, parts: ['However, the war caused a revolution in British life that completely changed the ', '.'], answers: [['status quo']], options: [['social status', 'status quo', 'status symbol', 'high status']] },
      { number: 4, parts: ['What had been a fairly ', ' society up to that point, with people sharing many basic beliefs and values, underwent radical changes after the war.'], answers: [['uniform']], options: [['uniform', 'same', 'similar', 'identical']] },
      { number: 5, parts: ['What had been a fairly uniform society up to that point underwent ', ' changes after the war.'], answers: [['radical']], options: [['refined', 'potential', 'alternative', 'radical']] },
      { number: 6, parts: ['The ', ' was away from fixed social roles and towards a more dynamic society.'], answers: [['trend']], options: [['reform', 'trend', 'fashion', 'decay']] },
      { number: 7, parts: ['The trend was away from fixed social roles and towards a more ', ' society.'], answers: [['dynamic']], options: [['revised', 'amended', 'dynamic', 'different']] },
      { number: 8, parts: ['Britain began to ', ' into its present form.'], answers: [['evolve']], options: [['refine', 'progress', 'substitute', 'evolve']] },
      { number: 9, parts: ['Many ideas that are accepted today, such as a large amount of freedom for teenagers, were at the time ', ' and exciting.'], answers: [['novel']], options: [['novel', 'mature', 'alternate', 'steady']] },
      { number: 10, parts: ['New and ', ' music and fashion had a great influence on young people.'], answers: [['innovative']], options: [['internal', 'incoherent', 'innate', 'innovative']] },
      { number: 11, parts: ['New and innovative music and fashion had a great ', ' on young people.'], answers: [['influence']], options: [['substitute', 'progress', 'influence', 'innovation']] },
      { number: 12, parts: ['The whole of Britain became less ', '.'], answers: [['conservative']], options: [['conservative', 'concerned', 'convinced', 'contained']] }
    ]
  },
  {
    id: 'C',
    unitId: 4,
    title: 'Topic vocabulary: Change',
    instruction: 'Complete using the correct form of the words in the boxes.',
    wordBox: ['reform', 'revise', 'amend', 'distort', 'maintain', 'remain', 'adapt', 'adjust', 'alternate', 'alternative', 'persist', 'sustain', 'convert', 'transform', 'deteriorate', 'spoil'],
    questions: [
      { number: 1, parts: ["It's time we completely ", ' the whole prison system.'], answers: [['reformed']] },
      { number: 2, parts: ["I'd like you to ", ' your report to include more information about costs.'], answers: [['revise']] },
      { number: 3, parts: ['I thought the report in the paper completely ', ' the truth.'], answers: [['distorted']] },
      { number: 4, parts: ["I've ", ' the contract and it now says that you will receive 15%.'], answers: [['amended']] },
      { number: 5, parts: ['I sometimes find it hard to ', ' a balance between work and my home life.'], answers: [['maintain']] },
      { number: 6, parts: ['The important thing is to ', ' calm and try to think logically.'], answers: [['remain']] },
      { number: 7, parts: ['You can ', ' the chair to make it comfortable by pressing this button.'], answers: [['adjust']] },
      { number: 8, parts: ['This company needs to ', " or we're not going to survive."], answers: [['adapt']] },
      { number: 9, parts: ['Mike and I meet for coffee on ', ' Saturdays.'], answers: [['alternate']] },
      { number: 10, parts: ["There's a lot of traffic, so I'm trying to find an ", ' route.'], answers: [['alternative']] },
      { number: 11, parts: ["You'll regret it if you ", ' in annoying people like that.'], answers: [['persist']] },
      { number: 12, parts: ['Can the company ', " the kind of growth we've had recently?"], answers: [['sustain']] },
      { number: 13, parts: ['Many people in Britain ', ' to Christianity during the Roman period.'], answers: [['converted']] },
      { number: 14, parts: ['Learning to use the Internet has really ', ' my life.'], answers: [['transformed']] },
      { number: 15, parts: ["I hope the bad weather didn't ", ' your holiday.'], answers: [['spoil']] }
    ]
  },
  {
    id: 'D',
    unitId: 4,
    title: 'Topic vocabulary: Technology',
    instruction: 'If the bold word is correct, write OK. If it is incorrect, replace it with one of the bold words from the other sentences.',
    questions: [
      { number: 1, parts: ['The Internet is really a vast (console) ', ' of computers, all connected together.'], answers: [['network']] },
      { number: 2, parts: ["Since we got (resource) ", ", we've been watching music videos online."], answers: [['broadband']] },
      { number: 3, parts: ["Early computer games seem quite (nuclear) ", " compared to today's games."], answers: [['primitive']] },
      { number: 4, parts: ['It seems to me that (primitive) ', ' power is far cleaner than oil.'], answers: [['nuclear']] },
      { number: 5, parts: ['These ancient (tools) ', ' have been crafted with an enormous amount of skill.'], answers: [['OK']] },
      { number: 6, parts: ['The next generation of games (technique) ', ' will have better graphics.'], answers: [['console']] },
      { number: 7, parts: ["There's a (network) ", " in computing called 'beta testing', which means you test something to see if it works properly before it becomes official."], answers: [['technique']] },
      { number: 8, parts: ['This latest (breakthrough) ', ' will mean cheaper, faster internet access for all.'], answers: [['OK']] },
      { number: 9, parts: ['The computer has finished analysing all the (broadband) ', '.'], answers: [['data']] },
      { number: 10, parts: ['The sea is a great natural (data) ', ' but we need the right technology to use it.'], answers: [['resource']] }
    ]
  },
  {
    id: 'E',
    unitId: 4,
    title: 'Topic vocabulary: Technology (WANTED: COMPUTER GEEK)',
    instruction: 'Complete using the correct form of the words in the box.',
    wordBox: ['click', 'complex', 'download', 'electronics', 'file', 'manual', 'offline', 'online', 'programmer', 'upload'],
    questions: [
      {
        number: 1,
        parts: [
          "Some people think 'geek' is a negative term for someone who spends all their time on computers. Well, we at Compulearn think it's a positive thing! If you're interested in becoming a computer ",
          ", if you enjoy reading the ",
          " to find out what's really going on inside consumer ",
          ' like the latest plasma TV, then we want to hear from you.\nOur six-week course covers everything from ',
          ' music ',
          " from the Internet to writing your own games. You'll learn how to ",
          ' your own website to the Internet and how to solve ',
          ' problems in the latest programming languages. Go ',
          ' now and visit us on the net. ',
          " on 'Opportunities' and start your future now.\n(If for any reason our website is ",
          ', or you are unable to connect to the Internet, call us on 0800-COMPULEARN.)'
        ],
        answers: [
          ['programmer'], ['manual'], ['electronics'], ['downloading'], ['files'],
          ['upload'], ['complex'], ['online'], ['Click'], ['offline']
        ]
      }
    ]
  },
  {
    id: 'F',
    unitId: 4,
    title: 'Phrasal verbs',
    instruction: 'Write a phrasal verb in the correct form to replace the words in italics. Use the word given in brackets.',
    questions: [
      { number: 1, parts: ["Why don't you (remove) ", ' those wet things and put something dry on? (out)'], answers: [['change out of']] },
      { number: 2, parts: ['The image on the screen slowly (disappeared) ', ' and I knew it was a computer virus. (away)'], answers: [['faded away']] },
      { number: 3, parts: ["Let's (try) ", ' your new game and see if it works. (out)'], answers: [['test out']] },
      { number: 4, parts: ["You'll regret it if you don't (make a copy of) ", ' your important data. (up)'], answers: [['back up']] },
      { number: 5, parts: ['Have you (recorded on all of) ', ' the blank CDs I gave you, or have you got some left? (up)'], answers: [['used up']] },
      { number: 6, parts: ["Did you hear they're thinking of (getting rid of) ", ' identity cards? (away)'], answers: [['doing away with']] },
      { number: 7, parts: ["You need to (put in using the keyboard) ", " your details and then press 'enter'. (in)"], answers: [['key in']] },
      { number: 8, parts: ["We should (redecorate) ", " Jake's bedroom now he's left home. (up)"], answers: [['do up']] }
    ]
  },
  {
    id: 'G',
    unitId: 4,
    title: 'Phrasal verbs',
    instruction: 'Complete using the correct form of the phrasal verbs in the box.',
    wordBox: ['change around', 'change into', 'make into', 'mix up', 'switch on', 'take apart', 'turn into', 'wear out'],
    questions: [
      { number: 1, parts: ['Could you send someone to have a look at my computer, because nothing happens when I ', ' it ', '?'], answers: [['switch'], ['on']] },
      { number: 2, parts: ['I ', ' my watch ', " to see what was wrong with it, but I couldn't put it back together again!"], answers: [['took'], ['apart']] },
      { number: 3, parts: ['Your essay would make more sense if you ', ' the second and third paragraphs ', '.'], answers: [['changed'], ['around']] },
      { number: 4, parts: ['One of the miracles of nature is the way a caterpillar ', ' a butterfly.'], answers: [['turns into', 'changes into']] },
      { number: 5, parts: ['I played so much football last season that I ', ' two pairs of boots!'], answers: [['wore out']] },
      { number: 6, parts: ["In the story, Cinderella's coach ", ' a pumpkin at midnight.'], answers: [['turns into', 'changes into', 'turned into', 'changed into']] },
      { number: 7, parts: ["My CDs were all in order and now someone's ", ' them ', '.'], answers: [['mixed'], ['up']] },
      { number: 8, parts: ["I think they've ", ' the old library ', ' a really nice space for children to read in.'], answers: [['made', 'turned'], ['into']] }
    ]
  },
  {
    id: 'H',
    unitId: 4,
    title: "Phrasal verbs with up ('improve')",
    instruction: 'Put the following phrasal verbs into the sentences and choose Yes if the phrasal verb means something like improve; otherwise choose No.',
    wordBox: ['bring up', 'brush up', 'cheer up', 'dress up', 'make up', 'take up', 'tidy up', 'turn up'],
    questions: [
      { number: 1, parts: ["Why don't you ", ' yoga? ', ''], answers: [['take up'], ['No']], options: [[], yesNo] },
      { number: 2, parts: ['I was depressed all day, but I started to ', ' when I saw Alec. ', ''], answers: [['cheer up'], ['Yes']], options: [[], yesNo] },
      { number: 3, parts: ["I'm going to ", ' my French before we go on holiday. ', ''], answers: [['brush up'], ['Yes']], options: [[], yesNo] },
      { number: 4, parts: ['How could you ', ' such a ridiculous excuse? ', ''], answers: [['make up'], ['No']], options: [[], yesNo] },
      { number: 5, parts: ['If you ', ' your room, then you\'ll be able to find things more easily. ', ''], answers: [['tidy up'], ['Yes']], options: [[], yesNo] },
      { number: 6, parts: ['Why did you have to ', ' the fact that Dennis has lost his job? ', ''], answers: [['bring up'], ['No']], options: [[], yesNo] },
      { number: 7, parts: ["Let's ", ' and go out to that new Italian restaurant tonight. ', ''], answers: [['dress up'], ['Yes']], options: [[], yesNo] },
      { number: 8, parts: ['What time did Nigel finally ', ' at the party, then? ', ''], answers: [['turn up'], ['No']], options: [[], yesNo] }
    ]
  },
  {
    id: 'I',
    unitId: 4,
    title: 'Phrases, patterns and collocations',
    instruction: 'Write one word in each gap.',
    questions: [
      { number: 1, parts: ["The government's decision not to publish this report represents a real ", ' with tradition.'], answers: [['break']] },
      { number: 2, parts: ['Bill Gates made his money by satisfying the ', ' for computer operating systems that were easy to use.'], answers: [['demand', 'need']] },
      { number: 3, parts: ['You should ', " better than to spend all your time playing computer games when you've got exams next week."], answers: [['know']] },
      { number: 4, parts: ['I was ', ' the Web when I came across a site that had lots of information about my favourite band.'], answers: [['surfing', 'on']] },
      { number: 5, parts: ['Click on the ', ' below to become a member and enjoy everything that Musiconline has to offer.'], answers: [['link']] },
      { number: 6, parts: ["We've lived in this area for over 20 years, and I can tell you that things have definitely ", ' for the worse.'], answers: [['changed']] },
      { number: 7, parts: ["When you're ", " the wheel of the new T4 sports car, it's obvious that there's a lot of computing power under the bonnet, as well as engine power."], answers: [['at', 'behind']] },
      { number: 8, parts: ["People's attitudes to disability are changing and more and more places have wheelchair ", ' these days.'], answers: [['access']] },
      { number: 9, parts: ["Now, don't complain about having to spend the holidays away from your computer - it's for your own ", " and you'll thank me later."], answers: [['good']] },
      { number: 10, parts: ['Since she changed jobs, Anne has really thrown her ', ' into her career.'], answers: [['energy']] },
      { number: 11, parts: ['You should keep your computer system up to ', ", or you might find that some programs won't run."], answers: [['date']] },
      { number: 12, parts: ['The workman said that he needed a spanner and asked me to pass him one from his ', ' kit.'], answers: [['tool']] }
    ]
  },
  {
    id: 'J',
    unitId: 4,
    title: 'Phrases, patterns and collocations (Changing ambitions)',
    instruction: 'Write one word in each gap.',
    questions: [
      {
        number: 1,
        parts: [
          'It used to be accepted wisdom that higher education provides access ',
          ' better-paid careers. However, the world of work has changed in recent decades, ',
          ' one where few people had university degrees to one where they are very common. A ',
          ' many underpaid teachers, managers and other professionals are considering a career change. Swapping the desk for the ',
          ' box, many are retraining to become skilled manual workers, who are very much ',
          ' demand.\nThose who ',
          ' the change are finding that as plumbers, gas fitters and electricians they can earn a good ',
          ' more than they used to. Workers who ',
          ' something about these vital services can demand high fees ',
          ' customers and often enjoy considerable independence, in ',
          " of the controlled working environment in a school or office. Of course, those who ",
          " the break know that if it doesn't work out they can usually go back to their profession ",
          ' a later date.'
        ],
        answers: [
          ['to'], ['from'], ['good'], ['tool'], ['in'], ['make'],
          ['deal'], ['know'], ['from'], ['place'], ['make'], ['at']
        ]
      }
    ]
  },
  {
    id: 'K',
    unitId: 4,
    title: 'Phrases, patterns and collocations',
    instruction: 'For each question, write one word which can be used in all three sentences.',
    questions: [
      { number: 1, parts: ["There will be a help and support line when the new computer system is in ___. I'm giving my laptop away because it's of no ___ to me any more. What's the ___ of trying to keep up with fashions that change too quickly? Word: ", ''], answers: [['use']] },
      { number: 2, parts: ["I think it's time Megan faced up to ___ and realised that she's going to have to change her lifestyle. There's a lot of talk about the effects of technology, but I don't think people have really changed that much in ___. It's amazing how popular ___ TV has become in such a short time. Word: ", ''], answers: [['reality']] },
      { number: 3, parts: ["Many of today's mobile phones wouldn't look out of ___ in science fiction films. Vikram's been offered a ___ at Oxford to study computer science. Nothing will ever take the ___ of my old, reliable transistor radio. Word: ", ''], answers: [['place']] },
      { number: 4, parts: ["Do all these lights on the stereo serve a ___, or are they just for decoration? Jerry seems to lack a sense of ___ since he retired. I can't believe that Alfie would've sent you a computer virus on ___! Word: ", ''], answers: [['purpose']] },
      { number: 5, parts: ["In this game, you compete against the ___ to collect as many gold rings as you can. People in my office waste time surfing the Net and watching the ___ until it's time to leave. We provide full technical support for all our products around the ___. Word: ", ''], answers: [['clock']] },
      { number: 6, parts: ["During the 1970s, computer chips began to appear in people's homes in the ___ of the first games consoles. You need to fill out the ___ online to become a member of the website. All the players have been in good ___ lately, so it should be a good match. Word: ", ''], answers: [['form']] },
      { number: 7, parts: ["I was in the ___ of texting Debbie when my phone rang and it was her! Recent developments mean that there is a good chance the Middle East peace ___ could be restarted. If the monster isn't behind that door or that door, then it must be behind the third one - it's just a ___ of elimination. Word: ", ''], answers: [['process']] },
      { number: 8, parts: ['The path ___ around the side of the building. What ___ you to come up with the idea of a clockwork radio? The scientist ___ me into the laboratory, where an experiment was going on. Word: ', ''], answers: [['led']] }
    ]
  },
  {
    id: 'L',
    unitId: 4,
    title: 'Idioms',
    instruction: 'Complete each dialogue using the appropriate form of an idiom in the box.',
    wordBox: [
      "a leopard can't change its spots", 'all mod cons', 'break the mould', 'change your tune',
      'have a change of heart', 'know sth inside out', 'reinvent the wheel', 'stick to your guns',
      'the tools of the trade', 'turn over a new leaf'
    ],
    questions: [
      { number: 1, parts: ["'Do you think they might pick Lisa on Thursday?' 'It would really ", " for them to choose a woman to run the club, but I hope so.'"], answers: [['break the mould']] },
      { number: 2, parts: ["'I thought you were going to tell Nigel you were angry with him.' 'Well, I ", " and decided to just ignore it after all.'"], answers: [['had a change of heart']] },
      { number: 3, parts: ["'Your son's behaviour in class has improved this term, Mrs Harris.' 'Oh, good. Let's hope he's ", ".'"], answers: [['turned over a new leaf']] },
      { number: 4, parts: ["'Is your research based on other people's work?' 'Some of it. Well, there's no point ", ", is there?'"], answers: [['reinventing the wheel']] },
      { number: 5, parts: ["'I'm not sure whether to change my mind and let Jenny go to the party.' 'I think you should ", " and show her you're serious.'"], answers: [['stick to your guns']] },
      { number: 6, parts: ["'I wish Terry wouldn't be so thoughtless all the time.' 'I know, but ", ", you know.'"], answers: [["a leopard can't change its spots"]] },
      { number: 7, parts: ["'I'm thinking of asking Felicity out on a date.' 'You've ", ", haven't you? You said she annoyed you.'"], answers: [['changed your tune', 'had a change of heart']] },
      { number: 8, parts: ["'You've got lots of books on computing languages.' 'It's what I do for a living, so they're just ", ", really.'"], answers: [['the tools of the trade']] },
      { number: 9, parts: ["'You moved recently, didn't you? What's your new place like?' 'Oh, fantastic. It's got ", " and it's handy for the train.'"], answers: [['all mod cons']] },
{ number: 10, parts: ["'Maria came round and fixed my computer yesterday.' 'Oh, she ", ' computers ', ", doesn't she?'"], answers: [['knows'], ['inside out']] }
]
},
{
id: 'M',
unitId: 4,
title: 'Word formation',
instruction: 'Use the word given in capitals to form a word that fits in the space.',
questions: [
{
number: 1,
parts: [
'We often think of ourselves as living in a time of (CONTINUE) ',
' technological change and development. We tend to believe that we are unique in history in dealing with a constantly (EVOLVE) ',
' world of gadgets, devices and innovations. However, the end of the nineteenth century and the start of the twentieth was also a time that saw many (REVOLT) ',
' changes.\nPeople had needed to show (FLEXIBLE) ',
' throughout the nineteenth century, as the effects of the Industrial Revolution meant constantly making (ADJUST) ',
' to deal with changing working conditions. Towards the end of the century, though, people had to become more (ADAPT) ',
' than ever before. The typewriter (1873), the telephone (1876), the electric light bulb (1879) and other (INFLUENCE) ',
' developments gave people the (CAPABLE) ',
' to live and work in ways their grandparents could not have imagined. Over the next 30 years, little remained (ALTER) ',
' as the camera, the cinema, the phonograph, the plane and radio all had an (ELECTRIC) ',
' effect on people and society.'
],
answers: [
['continual', 'continuous', 'continuing'], ['evolving'], ['revolutionary'], ['flexibility'], ['adjustments'],
['adaptable'], ['influential'], ['capability'], ['unaltered'], ['electrifying']
]
}
]
},
{
id: 'N',
unitId: 4,
title: 'Word formation',
instruction: 'Complete the sentences by changing the form of the word in capitals.',
questions: [
{ number: 1, parts: ["The weather's been so ", " today that I don't know what to wear. (CHANGE)"], answers: [['changeable']] },
{ number: 2, parts: ['Bonnie showed a lot of ', ' in the way she handled the problem with Olivia. (MATURE)'], answers: [['maturity']] },
{ number: 3, parts: ['The flats were built in the 1960s, but they were all ', ' in the 90s. (MODERN)'], answers: [['modernised', 'modernized']] },
{ number: 4, parts: ['Jack got in a lot of trouble for ', ' breaking school rules. (PERSIST)'], answers: [['persistently']] },
{ number: 5, parts: ["I really don't think I'd have the ", ' to finish a marathon! (ENDURE)'], answers: [['endurance']] },
{ number: 6, parts: ['I feel a lot better since I decided to stop eating ', ' food. (PROCESS)'], answers: [['processed']] },
{ number: 7, parts: ['Can we ', ' the lesson for next Wednesday? (ARRANGE)'], answers: [['rearrange']] },
{ number: 8, parts: ['We need to rely more on wave power, wind power and other ', ' sources of energy. (NEW)'], answers: [['renewable']] },
{ number: 9, parts: ['I gradually lost touch with Ricardo after his ', ' to Islam. (CONVERT)'], answers: [['conversion']] },
{ number: 10, parts: ["I'm scanning my gran's photos onto my computer because they'd be ", ' if anything happened to them. (PLACE)'], answers: [['irreplaceable']] }
]
}
];