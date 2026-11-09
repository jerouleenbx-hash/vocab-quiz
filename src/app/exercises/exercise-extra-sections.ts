import type { ExerciseSection } from './exercises';

export const extraExerciseSections: ExerciseSection[] = [
  {
    id: 'C',
    title: 'Present simple or present continuous',
    instruction: 'Write the verb in brackets in the correct form. Use contractions where possible.',
    questions: [
      { number: 1, parts: ["Sandy: Hey, George! How's things? What (you) ", '?'], answers: [['are you doing']] },
      { number: 2, parts: ['George: Hi, Sandy! Fine! (I / just) ', ' some research for that history project.'], answers: [["I'm just doing"]] },
      { number: 3, parts: ['Sandy: (how / it) ', '?'], answers: [["How's it going"]] },
      { number: 4, parts: ['George: Yeah, (it / well) ', ', thanks.'], answers: [["it's going well"]] },
      { number: 5, parts: ['The website (I) ', ' at now is very good.'], answers: [["I'm looking"]] },
      { number: 6, parts: ['The reason (I) ', ' you is that my mum'], answers: [["I'm contacting"]] },
      { number: 7, parts: ['(mum) ', ' past the library every morning on the way to work,'], answers: [['mum drives']] },
      { number: 8, parts: ['and (she) ', ' she can give you a lift tomorrow morning.'], answers: [['she says']] },
      { number: 9, parts: ['Actually (it) ', ' long to walk there from here,'], answers: [["it doesn't"]] },
      { number: 10, parts: ['so (she) ', ' to worry.'], answers: [["she doesn't need"]] },
      { number: 11, parts: ['George: (what) ', ' with your project?'], answers: [["What's happening"]] },
      { number: 12, parts: ['(you) ', ' a title yet?'], answers: [['Do you have']] },
      { number: 13, parts: ['Sandy: No! (I / even) ', ' a topic yet!'], answers: [["I don't even have"]] },
      { number: 14, parts: ['(I / really) ', ' on it at the moment, though.'], answers: [["I'm not really working"]] },
      { number: 15, parts: ['(I) ', ' to finish my physics project first.'], answers: [["I'm trying"]] },
      { number: 16, parts: ['George: Why (you) ', ' something on the Second World War?'], answers: [["don't you do"]] },
      { number: 17, parts: ["Sandy: No, (I) ", ' wars!'], answers: [["I don't like"]] },
      { number: 18, parts: ["I'd rather do something (that) ", ' more on social history.'], answers: [['that focuses']] },
      { number: 19, parts: ['George: (that) ', ' good.'], answers: [['That sounds']] },
      { number: 20, parts: ['Sandy: (you) ', ' so?'], answers: [['Do you think']] }
    ]
  },
  {
    id: 'D',
    title: 'Present simple or present continuous',
    instruction: 'Choose the correct word or phrase.',
    questions: [
      { number: 1, parts: ["Could you explain what 'antidisestablishmentarianism' ", ', please?'], answers: [['means']], options: [['means', 'is meaning']] },
      { number: 2, parts: ['Each song ', ' 50 cents at the moment because they\'re on special offer.'], answers: [['only costs']], options: [['only costs', 'is only costing']] },
      { number: 3, parts: ['It ', " which of the books we've studied this term you do your essay on."], answers: [["doesn't matter"]], options: [["doesn't matter", "isn't mattering"]] },
      { number: 4, parts: ["It's only a quick call as ", ' from my mobile.'], answers: [["I'm ringing"]], options: [['I ring', "I'm ringing"]] },
      { number: 5, parts: ['I think ', ' that woman over there. Wasn\'t she on that quiz show last night?'], answers: [['I recognise']], options: [['I recognise', "I'm recognising"]] },
      { number: 6, parts: ['Excuse me, ', ' walnuts? I\'m allergic to them.'], answers: [['does the nut cake contain']], options: [['does the nut cake contain', 'is the nut cake containing']] },
      { number: 7, parts: ['', ' that capital punishment deters people from committing murder.'], answers: [["I really don't agree"]], options: [["I really don't agree", "I'm really not agreeing"]] },
      { number: 8, parts: ['Why ', ' football, Mark? I thought you had a match this afternoon.'], answers: [["don't you play"]], options: [["don't you play", "aren't you playing"]] },
      { number: 9, parts: ['Stay out of this, Simon, ', ' you at all.'], answers: [["it doesn't concern"]], options: [["it doesn't concern", "it isn't concerning"]] },
      { number: 10, parts: ['You really ', ' your father when you frown like that.'], answers: [['resemble']], options: [['resemble', 'are resembling']] },
      { number: 11, parts: ['If ', ', turn it off!'], answers: [["you're not watching"]], options: [["you're not watching", "you don't watch"]] },
      { number: 12, parts: ['The number you have dialled ', '. Please try again.'], answers: [['does not exist']], options: [['does not exist', 'is not existing']] },
      { number: 13, parts: ['I want everyone to do exercise H, and that ', ' too, Anne!'], answers: [['includes']], options: [['includes', 'is including']] },
      { number: 14, parts: ['', ' the living room repainted so it\'s probably best if we go into the kitchen.'], answers: [["We're having"]], options: [["We're having", 'We have']] },
      { number: 15, parts: ['Right now, my job ', ' a huge amount of foreign travel.'], answers: [['involves']], options: [['involves', 'is involving']] }
    ]
  },
  {
    id: 'E',
    title: 'Present simple or present continuous',
    instruction: 'Write the verb in the correct form in each pair of sentences.',
    wordBox: ['appeal', 'be', 'consider', 'depend', 'feel', 'have', 'look', 'see', 'smell', 'think'],
    questions: [
      { number: 1, parts: ['A I ', ' for a book on fly fishing. Do you have any in stock?\nB Stan ', " like he's in a bad mood this morning."], answers: [['am looking'], ['looks']] },
      { number: 2, parts: ['A How ', ' you ', ' about inviting Jackie to come with us on Saturday?\nB Britney ', ' very well, so I\'ve told her she can go home.'], answers: [['do'], ['feel'], ["doesn't feel", "isn't feeling"]] },
      { number: 3, parts: ['A Jan and I ', ' buying a new flat.\nB Why ', ' you ', ' Ray Davis to be a better songwriter than Paul McCartney?'], answers: [['are considering'], ['do'], ['consider']] },
      { number: 4, parts: ['A We ', ' a barbecue right now, so can I call you back this evening?\nB ', ' the Deacons ', ' a swimming pool?'], answers: [['are having'], ['Do'], ['have']] },
      { number: 5, parts: ['A The idea of going to a Greek island really ', ' to me.\nB Police ', ' for witnesses to the attack.'], answers: [['appeals'], ['are appealing']] },
      { number: 6, parts: ['A This chicken ', ' very fresh. I think I\'ll throw it away just to be safe.\nB Why ', ' you ', ' that chicken, Mum?'], answers: [["doesn't smell"], ['are'], ['smelling']] },
      { number: 7, parts: ['A I ', ' on you, James. Don\'t let me down!\nB Whether we get there by six ', ' on the traffic.'], answers: [['am depending'], ['depends']] },
      { number: 8, parts: ['A Julian ', ' a bit busy at the moment, actually.\nB Guys, you ', " too noisy! Can't you keep it down, please?"], answers: [['is'], ['are being', 'are']] },
      { number: 9, parts: ['A ', ' you ', ' Bob would like a CD for his birthday?\nB Oliver said he ', ' about moving out of the city.'], answers: [['Do'], ['think'], ['is thinking']] },
      { number: 10, parts: ['A I hear that Doug ', ' quite a lot of Katy these days. Is that true?\nB I ', ' Manchester United lost again.'], answers: [['is seeing'], ['see']] }
    ]
  },
  {
    id: 'F',
    title: 'Present perfect simple',
    instruction: 'Each bold word or phrase is incorrect. Rewrite it correctly.',
    questions: [
      { number: 1, parts: ['Tammy ', ' able to swim since she was one year old.'], answers: [['has been']] },
      { number: 2, parts: ['How many articles has Greg ', ' for Newsweek?'], answers: [['written']] },
      { number: 3, parts: ['Tina and Phil still ', ' managed to sell their flat.'], answers: [["haven't"]] },
      { number: 4, parts: ['', " never been to China - what's it like?"], answers: [["I've"]] },
      { number: 5, parts: ["Have you heard? Carol's ", ' her leg again.'], answers: [['broken']] },
      { number: 6, parts: ["You're lucky you caught me - I've just ", ' through the front door.'], answers: [['come']] },
      { number: 7, parts: ['', " Sue yet that you're thinking of dropping out of the course?"], answers: [["haven't you told"]] },
      { number: 8, parts: ['Our family ', " in this village for over two hundred years and we're not leaving now!"], answers: [['has lived', 'has been living']] }
    ]
  },
  {
    id: 'G',
    title: 'Present perfect simple or present perfect continuous',
    instruction: 'Choose the correct word or phrase. Some sentences have more than one gap.',
    questions: [
      { number: 1, parts: ["They've ", ' over six bags with rubbish from the beach already.'], answers: [['filled']], options: [['filled', 'been filling']] },
      { number: 2, parts: ['Have you ', ' that story in the papers about the elephant that escaped from the zoo? Apparently, they\'ve just ', ' it.'], answers: [['been following'], ['caught']], options: [['followed', 'been following'], ['caught', 'been catching']] },
      { number: 3, parts: ["We've ", ' the Tower of London, Buckingham Palace and Oxford Street, and we\'ve only been in London for three hours!'], answers: [['seen']], options: [['seen', 'been seeing']] },
      { number: 4, parts: ["It's the first time I've ", ' The Editors play live.'], answers: [['heard']], options: [['heard', 'been hearing']] },
      { number: 5, parts: ['Jake and I have ', ' about where to go on holiday for weeks but we just can\'t decide.'], answers: [['been thinking']], options: [['thought', 'been thinking']] },
      { number: 6, parts: ["You can't want to go to the toilet already - we've only ", ' for about ten minutes so far!'], answers: [['been driving']], options: [['driven', 'been driving']] },
      { number: 7, parts: ["I've ", ' up all day and my feet are killing me!'], answers: [['been standing']], options: [['stood', 'been standing']] },
      { number: 8, parts: ['Has Jan ', ' for the company since it started?'], answers: [['worked', 'been working']], options: [['worked', 'been working']] }
    ]
  },
  {
    id: 'H',
    title: 'Present perfect simple or present perfect continuous',
    instruction: 'Write the verb in brackets in the correct form. Use contractions where possible.',
    questions: [
      { number: 1, parts: ['(I / send off) ', ' over 18 press releases this morning so far.'], answers: [["I've sent off"]] },
      { number: 2, parts: ['Is it the first time (you / ever / eat) ', ' squid?'], answers: [["you've ever eaten"]] },
      { number: 3, parts: ['', ' for the past two hours. Where ', ' ? (we / wait; you / be)'], answers: [["We've been waiting"], ['have you been']] },
      { number: 4, parts: ['(you / just / receive) ', ' an e-mail from Ruth?'], answers: [['Have you just received']] },
      { number: 5, parts: ["I'm afraid (we / get) ", ' any milk. (we / expect) ', ' a delivery for the past four hours but (they / show up) ', ' up yet.'], answers: [["we haven't got"], ["We've been expecting"], ["they haven't shown"]] },
      { number: 6, parts: ['(I / draw up) ', ' a list of people to invite to the wedding but (I / get) ', ' very far so far. (you / have) ', ' any thoughts about it?'], answers: [["I've been drawing up"], ["I haven't got"], ['Have you had']] },
      { number: 7, parts: ['Oh, Clair, my (mum / mean) ', ' to ask you for a while. Would you like to come with us to Wimbledon?'], answers: [["mum's been meaning"]] }
    ]
  },
  {
    id: 'I',
    title: 'Present perfect: time expressions',
    instruction: 'Write a word from the box in each gap. You can use each word more than once.',
    wordBox: ['already', 'before', 'ever', 'for', 'just', 'recently', 'since', 'so', 'still', 'until', 'yet'],
    questions: [
      {
        number: 1,
        parts: [
          "I've ",
          " realised what's different! You've changed your hair.\nMy grandmother's been quite ill ",
          ", so she's coming to stay with us for a week or two.\nWe've had broadband at home ",
          ' about 2005.\nHave you really finished your homework ',
          "? Okay, you can watch TV, then.\nWe've won every match we've played ",
          " far this season.\nI've always lived in a big house ",
          " now, so it's taking time to get used to a small flat.\nI've ",
          ' invited everyone!\nHow long has Sue gone abroad ',
          "?\nI'm pretty sure he's got it ",
          '.\nHave you ',
          ' thought of going into business on your own?\nWe haven\'t started ',
          " so you can join in.\nWe've never been to New York ",
          ", so we're both looking forward to it.\nHave they been living here ",
          ' you moved in?\nI ',
          " haven't found my sunglasses.\nI've been looking for a website like this ",
          " ages!\nWe've ",
          " been talking about you.\nHaven't you done your homework ",
          '?'
        ],
        answers: [['just'], ['recently'], ['since'], ['already'], ['so'], ['until'], ['already'], ['for'], ['already'], ['ever'], ['yet'], ['before'], ['since'], ['still'], ['for'], ['just'], ['yet']]
      }
    ]
  },
  {
    id: 'J',
    title: 'Present perfect simple or present simple',
    instruction: 'Write one word in each gap.',
    questions: [
      {
        number: 1,
        parts: [
          'Humans ',
          ' much in common with other life forms on Earth. ',
          ' the very first life forms appeared, all living things have ',
          ' desperately struggling to survive the harsh and changing conditions of our planet. This has ',
          ' adapting to new situations and, in many cases, has ',
          ' to either evolution or extinction. We are ',
          ' alone in making use of the world around us. Where we ',
          ' differ from other life forms, however, ',
          ' in our ability to record, and learn from, our collective history. In this, it ',
          ' that we ',
          ' unique. ',
          ' is still much mankind ',
          ' not know about the earliest humans, but we are increasingly ',
          ' a species with detailed knowledge about our past. The more we learn, the better ',
          ' our chances of survival in the future. It must also be recognised that we are the only species which ',
          ' managed to create the means to destroy the planet we live on.'
        ],
        answers: [
          ['have'], ['Since'], ['been'], ['meant', 'involved'], ['led'], ['not'], ['do'], ['is'],
          ['appears', 'seems'], ['are'], ['There'], ['does'], ['becoming'], ['are'], ['has']
        ]
      }
      ]
  }
];