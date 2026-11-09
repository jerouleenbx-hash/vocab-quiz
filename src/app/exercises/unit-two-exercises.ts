import type { ExerciseSection } from './exercises';

const yesNo = ['Yes', 'No'];

export const unitTwoExerciseSections: ExerciseSection[] = [
  {
    id: 'A', unitId: 2, title: 'Thinking', instruction: 'Choose the correct word.',
    questions: [
      { number: 1, parts: ["Don't be so ", '. Everything\'s going to be fine, you\'ll see!'], answers: [['pessimistic']], options: [['optimistic', 'pessimistic']] },
      { number: 2, parts: ['Most newspapers are usually ', ' towards a certain political outlook.'], answers: [['biased']], options: [['biased', 'prejudiced']] },
      { number: 3, parts: ["I'm slightly ", " about whether Sean's idea is going to work."], answers: [['dubious']], options: [['dubious', 'cynical']] },
      { number: 4, parts: ["To suggest that it's possible to create a society without crime is a little ", ", isn't it?"], answers: [['naive']], options: [['naive', 'sceptical']] },
      { number: 5, parts: ['The only ', ' explanation I can think of is that Jenna got the dates wrong.'], answers: [['plausible']], options: [['ingenious', 'plausible']] },
      { number: 6, parts: ["Please don't ", ' me with loads of technical terminology. Use plain, simple English!'], answers: [['baffle']], options: [['baffle', 'discriminate']] },
      { number: 7, parts: ["It's not always easy to ", " someone's suitability for a job just by talking to them."], answers: [['assess']], options: [['assume', 'assess']] },
      { number: 8, parts: ['How can the government ', ' spending so much on the armed forces?'], answers: [['justify']], options: [['justify', 'speculate']] },
      { number: 9, parts: ['Looking at the damage, I would ', ' that the painting will cost at least €2,000 to restore.'], answers: [['estimate']], options: [['estimate', 'deduce']] },
      { number: 10, parts: ["I don't think you should ", ' that lots of people are going to help you with this project.'], answers: [['presume']], options: [['reflect', 'presume']] }
    ]
  },
  {
    id: 'B', unitId: 2, title: 'Thinking', instruction: 'Complete using the correct form of a word from the box. More than one answer may fit.',
    wordBox: ['concentrate', 'consider', 'contemplate', 'deliberate', 'gather', 'grasp', 'ponder', 'reckon', 'suppose'],
    questions: [
      { number: 1, parts: ['It took me quite a long time to ', ' what the aim of the game was.'], answers: [['grasp']] },
      { number: 2, parts: ["The jury are still ", ", but they're expected to reach a verdict soon."], answers: [['deliberating']] },
      { number: 3, parts: ["I ", " from your tutor that you're thinking of changing course."], answers: [['gather']] },
      { number: 4, parts: ['You really have to ', ' very hard when you are doing calligraphy.'], answers: [['concentrate']] },
      { number: 5, parts: ['I\'m seriously ', ' asking for a pay rise tomorrow.'], answers: [['considering', 'contemplating']] },
      { number: 6, parts: ["How long do you ", " it'll take to get to Manchester?"], answers: [['reckon', 'suppose']] },
      { number: 7, parts: ["I don't ", " I could borrow your lecture notes this weekend, could I?"], answers: [['suppose']] },
      { number: 8, parts: ["If you've ever ", " the question 'Why does the universe bother to exist?', then this is the book for you."], answers: [['pondered', 'considered', 'contemplated']] },
      { number: 9, parts: ["Let's not even ", ' the possibility of failure.'], answers: [['contemplate', 'consider']] }
    ]
  },
  {
    id: 'C', unitId: 2, title: 'Thinking', instruction: 'Each bold word is in the wrong sentence. Write the correct word in each gap.',
    questions: [
      { number: 1, parts: ["I'm in a real ", " because I've been invited to two parties on Saturday and I don't know which one to go to."], answers: [['dilemma']] },
      { number: 2, parts: ["Dave said he's got complete ", " in us, and thinks we're going to do a great job."], answers: [['faith']] },
      { number: 3, parts: ["Sarah's a/an ", " when it comes to astrophysics, but she's not very practical."], answers: [['genius']] },
      { number: 4, parts: ['You often need to use a little educated ', ' when starting a cryptic crossword.'], answers: [['guesswork']] },
      { number: 5, parts: ["I've got a/an ", " that someone in this office is going to get promoted soon."], answers: [['hunch', 'intuition']] },
      { number: 6, parts: ['Communism and capitalism are very different types of ', '.'], answers: [['ideology']] },
      { number: 7, parts: ['Who gave you the ', ' for the main character in the book?'], answers: [['inspiration']] },
      { number: 8, parts: ['Detective Tacker had no evidence against Roddard, but all his ', ' told him he was involved.'], answers: [['intuition']] },
      { number: 9, parts: ["I've got a small ", ' about the exam syllabus. Should I talk to Mrs Jacobs?'], answers: [['query']] },
      { number: 10, parts: ['Paying mothers a salary to raise their children is an interesting ', '.'], answers: [['notion']] },
      { number: 11, parts: ["The fact that more people would come here if it wasn't so crowded is a real ", '.'], answers: [['paradox']] }
    ]
  },
  {
    id: 'D', unitId: 2, title: 'Learning', instruction: 'Choose the correct word to complete each gap in the letter.',
    questions: [
      { number: 1, parts: ['The system only views the weakest learners as having special ', '.'], answers: [['needs']], options: [['requests', 'desires', 'needs', 'wants']] },
      { number: 2, parts: ['The brightest and most ', ' students are not encouraged to develop to their full potential.'], answers: [['conscientious']], options: [['inattentive', 'ignorant', 'intensive', 'conscientious']] },
      { number: 3, parts: ['My daughter has just spent the last month ', ' for exams.'], answers: [['cramming']], options: [['cramming', 'lecturing', 'reading', 'practising']] },
      { number: 4, parts: ["They're just ", ' exams, not real important exams.'], answers: [['mock']], options: [['false', 'mock', 'fake', 'artificial']] },
      { number: 5, parts: ['Is the work going to make her more ', ' about her subjects?'], answers: [['knowledgeable']], options: [['knowledgeable', 'intellectual', 'academic', 'intelligent']] },
      { number: 6, parts: ['The standard ', " doesn't give students enough practical skills."], answers: [['curriculum']], options: [['timetable', 'lecture', 'seminar', 'curriculum']] },
      { number: 7, parts: ["The standard curriculum doesn't give students any ", ' in developing practical skills.'], answers: [['tuition']], options: [['lesson', 'subject', 'tuition', 'tutorial']] },
      { number: 8, parts: ['How many students know the difference between ', " someone else's work and making good use of their ideas?"], answers: [['plagiarising']], options: [['writing', 'going over', 'plagiarising', 'repeating']] },
      { number: 9, parts: ['How many students can go about ', ' in an efficient way?'], answers: [['self-study']], options: [['reviewing', 'revision', 'distance learning', 'self-study']] },
      { number: 10, parts: ['How many students ', ' from university unable to spell simple English words?'], answers: [['graduate']], options: [['qualify', 'graduate', 'depart', 'exit']] }
    ]
  },
  {
    id: 'E', unitId: 2, title: 'Phrasal verbs', instruction: 'Match each sentence beginning with the correct ending.',
    wordBox: [
      'A together exactly what happened that evening', 'B in the fact that he\'d never see her again',
      'C up a brilliant excuse to tell Rachel', 'D over for a while before I make a final decision',
      'E this through properly yet', 'F out how to get everyone to the sports centre',
      'G upon such a great idea for a website'
    ],
    questions: [
      { number: 1, parts: ["I'm going to have to mull this ", '.'], answers: [['D']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G']] },
      { number: 2, parts: ['Detectives are still trying to piece ', '.'], answers: [['A']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G']] },
      { number: 3, parts: ['It took him a very long time to take ', '.'], answers: [['B']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G']] },
      { number: 4, parts: ['Tell us how you hit ', '.'], answers: [['G']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G']] },
      { number: 5, parts: ['It took us ages to figure ', '.'], answers: [['F']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G']] },
      { number: 6, parts: ["I've just thought ", '.'], answers: [['C']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G']] },
      { number: 7, parts: ["I'm not sure we've thought ", '.'], answers: [['E']], options: [['A', 'B', 'C', 'D', 'E', 'F', 'G']] }
    ]
  },
  {
    id: 'F', unitId: 2, title: 'Phrasal verbs', instruction: 'Complete each sentence with the correct form of a phrasal verb.',
    questions: [
      { number: 1, parts: ['I need to ', ' over your offer very carefully.'], answers: [['think']] },
      { number: 2, parts: ['Lee came ', ' the brilliant idea of booking a clown.'], answers: [['up with']] },
      { number: 3, parts: ["It's time you faced ", " the fact that you've got responsibilities now."], answers: [['up to']] },
      { number: 4, parts: ["I'm going to have to brush ", ' my spoken German before I go to Munich.'], answers: [['up on']] },
      { number: 5, parts: ["I didn't like the idea at first but I've ", ' round ', ' it now.'], answers: [['come'], ['to']] },
      { number: 6, parts: ["There's nothing to swot ", ' as it\'s a general knowledge quiz.'], answers: [['up on']] },
      { number: 7, parts: ['I was unable to ', ' out what the speaker was saying.'], answers: [['make']] },
      { number: 8, parts: ['We finally puzzled ', ' a way to get the band into the hotel.'], answers: [['out']] },
      { number: 9, parts: ["I've been ", ' up on the history of English language teaching.'], answers: [['reading']] }
    ]
  },
  {
    id: 'G', unitId: 2, title: 'Phrasal verbs with out', instruction: 'Choose Yes if the phrasal verb is about finding information, otherwise choose No.',
    questions: [
      { number: 1, parts: ["Did you find out what time the parents' meeting is? ", ''], answers: [['Yes']], options: [yesNo] },
      { number: 2, parts: ["I've been checking out whether it's better to go by ferry or plane. ", ''], answers: [['Yes']], options: [yesNo] },
      { number: 3, parts: ["Susie reckons she's sussed out a great way to get into the club for free. ", ''], answers: [['Yes']], options: [yesNo] },
      { number: 4, parts: ['We all piled out into the playground. ', ''], answers: [['No']], options: [yesNo] },
      { number: 5, parts: ["I can't figure out how to change my password. ", ''], answers: [['Yes']], options: [yesNo] },
      { number: 6, parts: ['The band were drowned out by the screaming fans. ', ''], answers: [['No']], options: [yesNo] },
      { number: 7, parts: ["I'm going to sound Bob out about his investing in the company. ", ''], answers: [['Yes']], options: [yesNo] },
      { number: 8, parts: ['Two essays really do stand out from the rest. ', ''], answers: [['No']], options: [yesNo] },
      { number: 9, parts: ["You'll have to worm the secret out of Jan. ", ''], answers: [['Yes']], options: [yesNo] },
      { number: 10, parts: ["None of us could fathom out why the experiment wasn't working. ", ''], answers: [['Yes']], options: [yesNo] }
    ]
  },
  {
    id: 'H', unitId: 2, title: 'Phrases, patterns and collocations', instruction: 'Write one word in each gap.',
    questions: [
      { number: 1, parts: ['Jim seems to be ', ' the misapprehension that tomorrow is a holiday.'], answers: [['under']] },
      { number: 2, parts: ['These findings cast doubt ', ' previous research.'], answers: [['on']] },
      { number: 3, parts: ["This photo's a little ", ' of focus, but you can still see their faces.'], answers: [['out']] },
      { number: 4, parts: ['Look ', ' the bright side - it\'s nearly the end of term.'], answers: [['on']] },
      { number: 5, parts: ["I'm not against animal testing ", ' principle.'], answers: [['in']] },
      { number: 6, parts: ["I'll always associate this song ", ' our holiday in Majorca.'], answers: [['with']] },
      { number: 7, parts: ["You have to bear ", " mind that there'll be quite a few children there."], answers: [['in']] },
      { number: 8, parts: ['Where did Susan\'s belief ', ' reincarnation come from?'], answers: [['in']] },
      { number: 9, parts: ['Borrowing the car tonight was ', ' of the question.'], answers: [['out']] },
      { number: 10, parts: ['Put my small problems ', ' perspective.'], answers: [['into']] },
      { number: 11, parts: ["What's the best course of action from your point ", ' view?'], answers: [['of']] },
      { number: 12, parts: ['You were hired ', ' the basis that you could work Sundays.'], answers: [['on']] },
      { number: 13, parts: ['', ' balance, I think the government is doing a reasonable job.'], answers: [['On']] },
      { number: 14, parts: ["We haven't taken Julie's thoughts ", ' account at all.'], answers: [['into']] },
      { number: 15, parts: ['', ' conclusion, I\'d like to thank everyone who supported me.'], answers: [['In']] }
    ]
  },
  {
    id: 'I', unitId: 2, title: 'Phrases, patterns and collocations', instruction: 'Write one word that fits all three sentences in each question.',
    questions: [
      { number: 1, parts: ["I couldn't even think ___. I'll come ___ to the point - you're fired! Set the record ___ about what happened. Word: ", ''], answers: [['straight']] },
      { number: 2, parts: ["She has the ___ age of an 18-year-old. Many ___ illnesses can be cured. I'm not good at ___ arithmetic. Word: ", ''], answers: [['mental']] },
      { number: 3, parts: ['Philip does a funny ___ of Tony. You made an ___ on Pete. I was under the ___ the exam was Thursday. Word: ', ''], answers: [['impression']] },
      { number: 4, parts: ['Carter was the ___ behind the operation. Pick your ___ about places to eat. We racked our ___ for an idea. Word: ', ''], answers: [['brains']] },
      { number: 5, parts: ['No ___ of smell means you cannot taste well. I cannot make ___ of this film. It is common ___ to unplug a toaster. Word: ', ''], answers: [['sense']] },
      { number: 6, parts: ['The invention worked like a ___. The cruise was a ___ come true. I had the same recurring ___ for four nights. Word: ', ''], answers: [['dream']] },
      { number: 7, parts: ['Show ___ for pedestrians. Give ___ to my proposals. Take changes into ___ before taking a mortgage. Word: ', ''], answers: [['consideration']] }
    ]
  },
  {
    id: 'J', unitId: 2, title: 'Phrases, patterns and collocations', instruction: 'Write one word in each gap.',
    questions: [
      { number: 1, parts: ["It's ", ' my principles to trust everything I read online.'], answers: [['against']] },
      { number: 2, parts: ["I've started this organisation ", ' the belief that many people share my doubts.'], answers: [['in']] },
      { number: 3, parts: ['Millions like me who ', ' their doubts about information presented as fact.'], answers: [['have']] },
      { number: 4, parts: ["There's no question ", ' us shutting down the Internet.'], answers: [['of']] },
      { number: 5, parts: ['DTOI has been set up with a ', ' to raising awareness.'], answers: [['view']] },
      { number: 6, parts: ['I made up my ', ' long ago not to completely trust anything I heard or read.'], answers: [['mind']] }
    ]
  },
  {
    id: 'K', unitId: 2, title: 'Phrases, patterns and collocations', instruction: 'Complete the second sentence using the word given. Do not change it; use 3–8 words.',
    questions: [
      { number: 1, parts: ["It (crossed) ", " that we'd have legal problems."], answers: [['never crossed my mind']] },
      { number: 2, parts: ["I've (conclusion) ", " that teaching isn't right for me."], answers: [['come to the conclusion', 'arrived at the conclusion', 'reached the conclusion']] },
      { number: 3, parts: ['Could you (account) ', ' your whereabouts last night?'], answers: [['give an account of']] },
      { number: 4, parts: ['The journalist (false) ', ' that she was a parent.'], answers: [['gave the false impression']] },
      { number: 5, parts: ['You have to (strike) ', ' logic and lateral thinking.'], answers: [['strike a balance between']] },
      { number: 6, parts: ["I didn't tell Angie (consideration) ", " Eddie's feelings."], answers: [['out of consideration for']] }
    ]
  },
  {
    id: 'L', unitId: 2, title: 'Idioms', instruction: 'Complete using the words in the box.',
    wordBox: ['bell', 'bend', 'dark', 'hairs', 'head', 'leg', 'stock', 'two', 'uptake', 'what', 'wits', 'wood'],
    questions: [
      { number: 1, parts: ['The name Alan Hickson rings a ', ', but I can\'t place him.'], answers: [['bell']] },
      { number: 2, parts: ['Stop splitting ', ' and look at the big picture.'], answers: [['hairs']] },
      { number: 3, parts: ["Ask Simon about sales. He always knows what's ", '.'], answers: [['what']] },
      { number: 4, parts: ["You've got to have your ", ' about you to succeed.'], answers: [['wits']] },
      { number: 5, parts: ["Don't let success go to your ", '.'], answers: [['head']] },
      { number: 6, parts: ['We put two and ', ' together.'], answers: [['two']] },
      { number: 7, parts: ["I'm going to go round the ", ' if they do not turn down that music.'], answers: [['bend']] },
      { number: 8, parts: ['Let\'s take ', ' of the situation before deciding.'], answers: [['stock']] },
      { number: 9, parts: ['They kept me in the ', ' about this for so long.'], answers: [['dark']] },
      { number: 10, parts: ["Jane can't see the ", ' for the trees.'], answers: [['wood']] },
      { number: 11, parts: ["He's usually quicker on the ", ' than that, isn\'t he?'], answers: [['uptake']] },
      { number: 12, parts: ["You haven't got a ", ' to stand on.'], answers: [['leg']] }
    ]
  },
  {
    id: 'M', unitId: 2, title: 'Word formation', instruction: 'Complete each sentence by changing the form of the word in capitals.',
    questions: [
      { number: 1, parts: ['There was quite a bit of ', ' because the examiner handed out the wrong exam papers. (CONFUSE)'], answers: [['confusion']] },
      { number: 2, parts: ["You're acting completely ", '. Calm down and pull yourself together. (RATIONAL)'], answers: [['irrationally']] },
      { number: 3, parts: ["Einstein's ", ' went unnoticed at school. (BRILLIANT)'], answers: [['brilliance']] },
      { number: 4, parts: ['This is considered the ', ' guide to Australia. (DEFINE)'], answers: [['definitive']] },
      { number: 5, parts: ["It's absolutely ", ' why the council closed the youth club. (EXPLAIN)'], answers: [['inexplicable']] },
      { number: 6, parts: ['I listened in ', ' as Ben told me the news. (BELIEVE)'], answers: [['disbelief']] },
      { number: 7, parts: ["Greg's ", " to say the least, so I wouldn't ask him to choose a hotel. (DECIDE)"], answers: [['indecisiveness']] },
      { number: 8, parts: ['Many children create ', ' friends to talk to. (IMAGINE)'], answers: [['imaginary']] },
      { number: 9, parts: ['He was found not guilty by reason of ', ' and sent to a mental institution. (SANE)'], answers: [['insanity']] },
      { number: 10, parts: ['Your argument is ', '. Wanting me to be a doctor does not mean I do. (LOGIC)'], answers: [['illogical']] }
    ]
  },
  {
    id: 'N', unitId: 2, title: 'Word formation', instruction: 'Choose Yes if the word in bold is a negative form of a positive word; otherwise choose No.',
    questions: [
      { number: 1, parts: ["Doctors' handwriting is usually illegible. ", ''], answers: [['Yes']], options: [yesNo] },
      { number: 2, parts: ["There's a beautiful illustration on page six. ", ''], answers: [['No']], options: [yesNo] },
      { number: 3, parts: ['People who are illiterate may need help filling in forms. ', ''], answers: [['Yes']], options: [yesNo] },
      { number: 4, parts: ['She had an illustrious career as a local politician. ', ''], answers: [['No']], options: [yesNo] },
      { number: 5, parts: ["It's a totally illiberal law that restricts our freedoms. ", ''], answers: [['Yes']], options: [yesNo] },
      { number: 6, parts: ['Several politicians resigned over the illegality of the war. ', ''], answers: [['Yes']], options: [yesNo] },
      { number: 7, parts: ['Illegitimate children were given little social recognition in the past. ', ''], answers: [['Yes']], options: [yesNo] },
      { number: 8, parts: ["It was only an illusion; the magician didn't cut his assistant in two. ", ''], answers: [['No']], options: [yesNo] },
      { number: 9, parts: ['The lights illuminated the building beautifully at night. ', ''], answers: [['No']], options: [yesNo] }
    ]
  },
  {
    id: 'O', unitId: 2, title: 'Word formation', instruction: 'Use the word in capitals to form a word that fits each gap.',
    questions: [
      { number: 1, parts: ["The (CONCEIVE) ", " of rhetoric, or effective public speaking, dates back thousands of years. The underlying (ASSUME) ", ' behind rhetoric is that how you present an argument can influence whether people are persuaded. There is (DOUBT) ', ' plenty of evidence - it is practically (THINK) ', ' for a successful politician to be a poor communicator. Politicians may talk complete (SENSE) ', ' but say it with such (CONVINCE) ', ' that we tend to believe them. On the other hand, (WISE) ', ' and knowledge have little value if you cannot communicate them. The combination of clear (REASON) ', ', sound (JUDGE) ', ' and effective presentation defines true rhetoric. A rhetorician should never be (OPINION) ', ' or ignorant.'], answers: [['concept'], ['assumption'], ['undoubtedly', 'doubtless'], ['unthinkable'], ['nonsense'], ['conviction'], ['wisdom'], ['reasoning'], ['judgement', 'judgment'], ['opinionated']] }
    ]
  }
];