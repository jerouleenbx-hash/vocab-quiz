import type { ExerciseSection } from './exercises';

const yesNo = ['Yes', 'No'];

export const unitTwentyOneExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    unitId: 21,
    title: 'Countable and uncountable nouns',
    instruction: 'Choose the correct word. If both are correct, choose both.',
    questions: [
      { number: 1, parts: ['Are those ', ' or goats in that field over there?'], answers: [['sheep']], options: [['sheep', 'sheeps']] },
      { number: 2, parts: ['How many ', ' have you got?'], answers: [['sisters-in-law']], options: [['sister-in-laws', 'sisters-in-law']] },
      { number: 3, parts: ['Look at those lovely little ', '!'], answers: [['fish', 'fishes']], options: [['fish', 'fishes']] },
      { number: 4, parts: ["I've only got one important piece of ", ' to tell you, I think.'], answers: [['news']], options: [['new', 'news']] },
      { number: 5, parts: ['The hairdresser quickly swept up the ', ' on the floor.'], answers: [['hair', 'hairs']], options: [['hair', 'hairs']] },
      { number: 6, parts: ["I'll be giving you a lot of ", ', so do please take notes.'], answers: [['information']], options: [['information', 'informations']] },
      { number: 7, parts: ["We've bought quite a lot of ", ' in the last few days.'], answers: [['furniture']], options: [['furniture', 'furnitures']] },
      { number: 8, parts: ['Could you give us both ', ' to miss PE tomorrow?'], answers: [['permission']], options: [['permission', 'permissions']] },
      { number: 9, parts: ['', ' is my favourite subject by far.'], answers: [['Physics']], options: [['Physic', 'Physics']] },
      { number: 10, parts: ["I think I've got some ", ' on me.'], answers: [['money']], options: [['money', 'monies']] },
      { number: 11, parts: ["I'm going to give them all the ", ' I can.'], answers: [['advice']], options: [['advice', 'advices']] },
      { number: 12, parts: ['What kind of ', ' are you interested in getting?'], answers: [['jewellery']], options: [['jewellery', 'jewelleries']] },
      { number: 13, parts: ['Would you like some ', '?'], answers: [['chocolate', 'chocolates']], options: [['chocolate', 'chocolates']] },
      { number: 14, parts: ["You've got to have very good general ", ' to go on Who Wants To Be A Millionaire.'], answers: [['knowledge']], options: [['knowledge', 'knowledges']] },
      { number: 15, parts: ["I've always been interested in ", '.'], answers: [['politics']], options: [['politic', 'politics']] }
    ]
  },
  {
    id: 'B',
    unitId: 21,
    title: 'Subject-verb agreement',
    instruction: 'Complete using the correct form of the verb in brackets.',
    questions: [
      { number: 1, parts: ['', ' (be) all the furniture very expensive when you got it?'], answers: [['Was']] },
      { number: 2, parts: ['My earnings ', ' (increase) considerably over the last two years.'], answers: [['have increased']] },
      { number: 3, parts: ['', ' (be) all the luggage yours?'], answers: [['Is', 'Was']] },
      { number: 4, parts: ['Your pyjamas ', ' (be) on your bed, I think.'], answers: [['are', 'were']] },
      { number: 5, parts: ['Politics ', ' (be) a love of mine, as well as my profession.'], answers: [['is', 'was']] },
      { number: 6, parts: ['', ' (be) your team doing well in the league right now?'], answers: [['Is', 'Are']] },
      { number: 7, parts: ['The people over there ', ' (need) serving.'], answers: [['need']] },
      { number: 8, parts: ['', ' (be) the news good or bad?'], answers: [['Is', 'Was']] },
      { number: 9, parts: ['There ', ' (be) blood all over the floor!'], answers: [['is', 'was']] },
      { number: 10, parts: ['The cattle ', ' (eat) at the moment.'], answers: [['are eating']] },
      { number: 11, parts: ['Diabetes ', ' (be) very common these days.'], answers: [['is']] },
      { number: 12, parts: ['Where ', ' (be) the scissors?'], answers: [['are', 'were']] },
      { number: 13, parts: ['My work ', ' (be) the most important thing in my life.'], answers: [['is', 'was']] },
      { number: 14, parts: ['I think the milk ', ' (go off). Shall I pour it away?'], answers: [['has gone off', 'is going off']] },
      { number: 15, parts: ['The jeans I tried on in the shop yesterday ', ' (be) far too small.'], answers: [['were']] }
    ]
  },
  {
    id: 'C',
    unitId: 21,
    title: 'Partitives and collective nouns',
    instruction: 'If the bold word is correct, write OK. If it is in the wrong sentence, write the correct word.',
    questions: [
      { number: 1, parts: ["I'm off to the newsagent's to get a (pair) ", ' of chocolate. Do you want anything?'], answers: [['bar']] },
      { number: 2, parts: ['Could you get me a (flock) ', ' of chewing gum when you go to the shops?'], answers: [['pack']] },
      { number: 3, parts: ["I think I'll have another (herd) ", ' of toast.'], answers: [['piece', 'slice', 'bit']] },
      { number: 4, parts: ['Just add a (breath) ', ' of milk if the mixture starts to get a bit dry.'], answers: [['drop', 'bit']] },
      { number: 5, parts: ["I'm popping out for a (pack) ", ' of fresh air. Do you want to come?'], answers: [['breath', 'bit']] },
      { number: 6, parts: ['There was a (block) ', ' of cows being taken down the lane for milking, and it took us ages to get by.'], answers: [['herd']] },
      { number: 7, parts: ['You said you wanted to get a new (bar) ', " of trousers, didn't you?"], answers: [['pair']] },
      { number: 8, parts: ['Get us a (bunch) ', " of bread when you go to the shops, won't you?"], answers: [['loaf']] },
      { number: 9, parts: ['I was thinking of getting Jill a (blade) ', " of flowers for our anniversary. Do you think that's romantic?"], answers: [['bunch']] },
      { number: 10, parts: ['There was a really strong (drop) ', " of wind and it blew a man's wig off!"], answers: [['gust']] },
      { number: 11, parts: ["My mum's so houseproud; there's never a (gust) ", ' of dust anywhere in the house.'], answers: [['speck', 'bit']] },
      { number: 12, parts: ['Could you cut me off a small (slice) ', ' of that cheese?'], answers: [['OK']] },
      { number: 13, parts: ['That (speck) ', " of birds will be migrating south for the winter, I'd imagine."], answers: [['flock']] },
      { number: 14, parts: ["Since we got the goat, there's not a (loaf) ", ' of grass longer than about two centimetres!'], answers: [['blade', 'bit']] },
      { number: 15, parts: ['We do like a nice (bit) ', " of steak every now and again, don't we, Francis?"], answers: [['OK']] },
      { number: 16, parts: ["How heavy's that (sheet) ", ' of concrete, would you say?'], answers: [['block', 'lump', 'bit', 'piece']] },
      { number: 17, parts: ["We'll give you a (set) ", ' of keys and a security pass.'], answers: [['OK']] },
      { number: 18, parts: ["There's not a (grain) ", ' of truth in what she said.'], answers: [['OK']] },
      { number: 19, parts: ['Is one (piece) ', ' of sugar enough?'], answers: [['lump']] },
      { number: 20, parts: ["I'll tear you off a (lump) ", " of paper if you're going to take notes."], answers: [['sheet', 'bit', 'piece']] }
    ]
  },
  {
    id: 'D',
    unitId: 21,
    title: 'Nouns with countable and uncountable meanings',
    instruction: 'Complete the pairs of sentences using the correct form of a word in the box.',
    wordBox: ['arm', 'cake', 'chicken', 'chocolate', 'damage', 'glass', 'hair', 'help', 'knowledge', 'paper', 'space', 'time', 'wood', 'work'],
    questions: [
      { number: 1, parts: ["Right! I'm off to ", '.\nHow many ', ' of art by Picasso can you actually name?'], answers: [['work'], ['works']] },
      { number: 2, parts: ['The storm did quite a lot of ', ', so I hear.\nThe jury awarded them ', ' of over €500,000.'], answers: [['damage'], ['damages']] },
      { number: 3, parts: ["I don't think I've ever baked three ", ' from scratch in one day.\nWould you like another piece of ', '?'], answers: [['cakes'], ['cake']] },
      { number: 4, parts: ['Thanks, you\'ve been a great ', '.\nWithout your ', ", we don't know what we'd have done."], answers: [['help'], ['help']] },
      { number: 5, parts: ['Ed was looking in the mirror and noticed one of his ', ' had gone grey.\nI gather that long ', ' is back in fashion amongst the young.'], answers: [['hairs'], ['hair']] },
      { number: 6, parts: ['Did you know that ', ' is actually a kind of liquid?\nI can\'t find my ', '. Have you seen them anywhere?'], answers: [['glass'], ['glasses']] },
      { number: 7, parts: ['Is your left ', ' really longer than your right?\nThe ', " trade is an industry I'd rather have nothing to do with."], answers: [['arm'], ['arms']] },
      { number: 8, parts: ["Let's have a picnic in the ", ".\nThat table's not made of ", ". It's plastic!"], answers: [['wood', 'woods'], ['wood']] },
      { number: 9, parts: ["Phil's ", " of eighteenth century pottery is astounding.\nPhil's got a great ", ' of eighteenth century pottery.'], answers: [['knowledge'], ['knowledge']] },
      { number: 10, parts: ["No one can hear you scream in ", " because there's no sound.\nWhy are there no parking ", ' round here at all?'], answers: [['space'], ['spaces']] },
      { number: 11, parts: ['How did people write things down before ', ' was invented?\nThe story appeared in most of the Sunday ', '.'], answers: [['paper'], ['papers']] },
      { number: 12, parts: ['One of our ', ' is ill so we\'ve had to call the vet out.\nThis ', ' tastes delicious!'], answers: [['chickens'], ['chicken']] },
      { number: 13, parts: ['How many ', ' have I told you not to do that?\nWhat ', ' did you get home last night?'], answers: [['times'], ['time']] },
      { number: 14, parts: ["Let's get a big bar of milk ", '.\nOh no! There are only two ', ' left in the box!'], answers: [['chocolate'], ['chocolates']] }
    ]
  },
  {
    id: 'E',
    unitId: 21,
    title: 'Quantifiers',
instruction: 'Complete each second sentence using one of the two words in bold and any other words you need so that it has a similar meaning to the first sentence.',
questions: [
{ number: 1, parts: ['Only (double / couple) ', ' boys volunteered to hand out programmes.'], answers: [['a couple of']] },
{ number: 2, parts: ['There were (number / amount) ', ' people at the party who I knew.'], answers: [['a number of']] },
{ number: 3, parts: ['When I was (little / few) ', " girl, I'd never heard of computers."], answers: [['a little']] },
{ number: 4, parts: ["There's only (little / few) ", ' ketchup left in the bottle.'], answers: [['a little']] },
{ number: 5, parts: ['(little / few) ', ' kids have put their names down already.'], answers: [['A few']] },
{ number: 6, parts: ["I've only got (number / amount) ", " money on me, I'm afraid."], answers: [['a small amount of']] },
{ number: 7, parts: ["I didn't understand (much / many) ", ' what she said, to be honest.'], answers: [['much of']] },
{ number: 8, parts: ['(little / few) ', ' British people can speak a foreign language.'], answers: [['Very few', 'Too few']] }
]
},
{
id: 'F',
unitId: 21,
title: 'Quantifiers',
instruction: 'Choose the correct word or phrase. More than one option may be correct in each sentence.',
questions: [
{ number: 1, parts: ['Would you like ', ' coffee?'], answers: [['any', 'some']], options: [['any', 'some']] },
{ number: 2, parts: ["I've hardly got ", ' money left!'], answers: [['any']], options: [['any', 'some']] },
{ number: 3, parts: ['', ' of the ducks have names.'], answers: [['Only a few', 'Few', 'A few']], options: [['Only a few', 'Few', 'A few']] },
{ number: 4, parts: ["I've only got ", ' time, so make it quick!'], answers: [['a little', 'a small amount of']], options: [['a little', 'little', 'a small amount of']] },
{ number: 5, parts: ['', ' guards was injured in the attack.'], answers: [['Neither of the']], options: [['Neither', 'Neither of the', 'Both']] },
{ number: 6, parts: ['', ' of the clothes were filthy.'], answers: [['All', 'Most', 'Many']], options: [['All', 'Most', 'Many', 'Much', 'Both']] },
{ number: 7, parts: ['', ' of the glasses had been smashed.'], answers: [['None', 'Half', 'Each']], options: [['None', 'Half', 'Whole', 'Each', 'Every']] },
{ number: 8, parts: ['', ' student in the class whose surname begins with a vowel, please stand up.'], answers: [['Each', 'Every']], options: [['Each', 'Every', 'All']] },
{ number: 9, parts: ["There's ", " we can do about the situation, I'm afraid."], answers: [['little', 'not much']], options: [['a little', 'little', 'not much', 'not many']] },
{ number: 10, parts: ["We've got ", " of time, don't worry."], answers: [['plenty', 'a lot', 'lots']], options: [['most', 'plenty', 'a lot', 'lots', 'lot']] }
]
},
{
id: 'G',
unitId: 21,
title: 'Articles',
instruction: 'Complete the sentences with a, an or the. If no article is required, write -.',
questions: [
{ number: 1, parts: ["I think there's ", ' chemist open in ', ' main road somewhere.'], answers: [['a'], ['the']] },
{ number: 2, parts: ['One of ', ' people who I met at ', ' lecture ', ' last night is ', ' architect for quite ', ' well-known firm.'], answers: [['the'], ['the'], ['-'], ['an'], ['a']] },
{ number: 3, parts: ['', ' quality screwdriver is ', ' essential part of any tool box.'], answers: [['A'], ['an']] },
{ number: 4, parts: ['Who designed ', ' invitations for ', ' wedding?'], answers: [['the'], ['the']] },
{ number: 5, parts: ['', ' poor and ', ' elderly are often left behind when it comes to ', ' modern technology.'], answers: [['The'], ['the', '-'], ['-']] },
{ number: 6, parts: ['When I was at ', ' school, we had to wear ', ' shorts until we were ', ' 11 and then we were allowed to wear ', ' pair of long trousers.'], answers: [['-'], ['-'], ['-'], ['a']] },
{ number: 7, parts: ['I met ', ' writer ', ' Catherine Hawkins ', ' other day. She signed ', ' copy of her ', ' latest book for me.'], answers: [['the'], ['-'], ['the'], ['a'], ['-']] },
{ number: 8, parts: ['I honestly believe that ', ' car is one of ', ' worst inventions in ', ' history of ', ' world.'], answers: [['the'], ['the'], ['the'], ['the']] },
{ number: 9, parts: ['Is that ', ' ewe or ', ' elk?'], answers: [['a'], ['an']] },
{ number: 10, parts: ["What's ", ' difference between ', ' unicorn and ', " postbox? You don't know? Then, I'm not going to ask you to post ", ' letter for me!'], answers: [['the'], ['a'], ['a'], ['a']] }
]
},
{
id: 'H',
unitId: 21,
title: 'Noun phrases review',
instruction: 'Choose the correct answer.',
questions: [
{ number: 1, parts: ['Are these windows really not made of ', '?'], answers: [['glass']], options: [['the glass', 'a glass', 'glass', 'glasses']] },
{ number: 2, parts: ['I fancy playing poker. Have we got a ', ' of cards anywhere?'], answers: [['pack']], options: [['pack', 'pair', 'bunch', 'set']] },
{ number: 3, parts: ['Luckily, only ', ' of the medicine got spilt.'], answers: [['a little']], options: [['little', 'a little', 'few', 'a few']] },
{ number: 4, parts: ['The ', ' on the kitchen table.'], answers: [['groceries are']], options: [['grocery is', 'grocery are', 'groceries is', 'groceries are']] },
{ number: 5, parts: ['Hardly ', ' of the paintings at the gallery were for sale.'], answers: [['any']], options: [['none', 'few', 'some', 'any']] },
{ number: 6, parts: ["It's ", ' opportunity to see African wildlife in its natural environment.'], answers: [['a unique']], options: [['an unique', 'a unique', 'the unique', 'unique']] },
{ number: 7, parts: ["You can't just demand ", ', you have to earn it.'], answers: [['respect']], options: [['a respect', 'the respect', 'any respect', 'respect']] },
{ number: 8, parts: ['Almost ', " person I've asked says they're going on the anti-war demonstration next Saturday."], answers: [['every']], options: [['every', 'each', 'all the', 'the entire']] }
]
},
{
id: 'I',
unitId: 21,
title: 'Artists and money',
instruction: 'Write one word in each gap.',
questions: [
{
number: 1,
parts: [
'In publishing, ',
' author will usually earn royalties on sales. For ',
' book sold, the author gets a percentage. The more successful the author, the more they are able to negotiate with their publisher, and ',
" bigger the percentage they can get. Although the 'struggling author' is still common, it is quite possible for a successful novelist to earn a ",
' deal of money. You only have to look at ',
" children's author J. K. Rowling to see that.\nFor a painter or sculptor, however, the situation is more difficult. A painter sells his or her work for ",
' fee. As the painter becomes more successful, the painting becomes valuable. ',
" time it is sold, its value increases. The painter doesn't receive ",
' benefit from this, though. To make money, the artist has to be continually producing new pieces. More than a ',
" artists today, however, are very aware of this, and so practise what is sometimes called 'holding back'. They produce, say, ten paintings for an exhibition, but only allow a certain ",
' of them, say eight, to be sold. The other two they keep, in ',
' hope that when they sell them in later years they will have greatly increased in value.\nFor musicians, there are royalties for performance (eg on CD) and for writing. However, since ',
' illegal transfer of digital music via the Internet has become widespread, ',
' songwriters and performers have become worried that their main source of income will dry up. Certainly, the ',
' music industry - be it pop, rock or classical - is in turmoil at the moment, but its future is not bleak. There is still a huge ',
' of money to be made from live performances.'
],
answers: [
['an', 'the'], ['every', 'each'], ['the'], ['great'], ['the'],
['a'], ['Each', 'Every'], ['any'], ['few'], ['number'],
['the'], ['the'], ['many', 'some', 'several'], ['entire', 'whole'], ['amount']
]
}
]
}
];

export const unitTwentyTwoExerciseSections: ExerciseSection[] = [
  {
    id: 'A',
    unitId: 22,
    title: 'Topic vocabulary: Quality',
    instruction: 'Choose the correct word. If both are correct, choose both.',
    questions: [
      { number: 1, parts: ["The procedure's good, but I think we can ", ' it further to make it more efficient.'], answers: [['better', 'streamline']], options: [['better', 'streamline']] },
      { number: 2, parts: ['The shell of the building has been completely ', ' and the interior decorators will be starting inside next week.'], answers: [['renovated']], options: [['renovated', 'refurbished']] },
      { number: 3, parts: ["The Minister's inflammatory comments are just ", ' an already difficult situation. He should think before he opens his mouth next time.'], answers: [['exacerbating', 'aggravating']], options: [['exacerbating', 'aggravating']] },
      { number: 4, parts: ['The inspectors are going to be ', ' the performance of every teacher.'], answers: [['evaluating']], options: [['evaluating', 'valuing']] },
      { number: 5, parts: ['In Berkshire, a lorry carrying chemicals has crashed into a river and has ', ' the local water supply.'], answers: [['contaminated']], options: [['decayed', 'contaminated']] },
      { number: 6, parts: ["I set the school record for the 100m over eight years ago and it's never been ", ' to this day.'], answers: [['bettered']], options: [['strengthened', 'bettered']] },
      { number: 7, parts: ['This new browser should ', " everyone's experience online."], answers: [['enhance']], options: [['enhance', 'reinforce']] },
      { number: 8, parts: ['The number of school-leavers going on to university has ', ' since the government introduced tuition fees.'], answers: [['declined']], options: [['declined', 'devastated']] },
      { number: 9, parts: ['We must never let inflation ', ' the three per cent mark again.'], answers: [['surpass']], options: [['surpass', 'outclass']] },
      { number: 10, parts: ['This accident has ', " Dagli's chances of competing in the final."], answers: [['wrecked']], options: [['wrecked', 'worsened']] },
      { number: 11, parts: ['Pop songs have ', " the word 'love' so that it's meaningless nowadays."], answers: [['cheapened']], options: [['cheapened', 'worsened']] },
      { number: 12, parts: ['The rock festival was fun, but it was marred by the organisation, which was a ', '.'], answers: [['shambles']], options: [['chaos', 'shambles']] },
      { number: 13, parts: ['The face in the picture is angelic, except for that tiny ', ' just below the eye - can you see it? - that seems to be some kind of scar or birthmark.'], answers: [['blemish']], options: [['blemish', 'flaw']] }
    ]
  },
  {
    id: 'B',
    unitId: 22,
    title: 'Topic vocabulary: Quality',
    instruction: 'Choose the word which best matches each statement.',
    questions: [
      { number: 1, parts: ["'I've never seen a more beautiful diamond!' ", ''], answers: [['exquisite']], options: [['exquisite', 'sound']] },
      { number: 2, parts: ["'His honesty is the only feature about him that's positive.' ", ''], answers: [['redeeming']], options: [['redeeming', 'ultimate']] },
      { number: 3, parts: ["'These metal railings are really old and brown.' ", ''], answers: [['rusty']], options: [['stale', 'rusty']] },
      { number: 4, parts: ["'It's just not good enough.' ", ''], answers: [['inadequate']], options: [['invaluable', 'inadequate']] },
      { number: 5, parts: ["'The workmanship on this cabinet isn't very good.' ", ''], answers: [['shoddy']], options: [['detrimental', 'shoddy']] },
      { number: 6, parts: ["'This CD-ROM drive isn't working properly.' ", ''], answers: [['defective']], options: [['defective', 'detrimental']] },
      { number: 7, parts: ["'This apple's completely black.' ", ''], answers: [['rotten']], options: [['rotten', 'stale']] },
      { number: 8, parts: ["'This was the most important reason for us.' ", ''], answers: [['prime']], options: [['optimum', 'prime']] },
      { number: 9, parts: ["'The job couldn't have been done without your help.' ", ''], answers: [['invaluable']], options: [['exquisite', 'invaluable']] },
      { number: 10, parts: ["'The price seems reasonable to me. I'll take it.' ", ''], answers: [['satisfactory']], options: [['ultimate', 'satisfactory']] },
      { number: 11, parts: ["'This bread's not very fresh.' ", ''], answers: [['stale']], options: [['rotten', 'stale']] },
      { number: 12, parts: ["'I think the government's measures are going to do quite a lot of damage.' ", ''], answers: [['detrimental']], options: [['detrimental', 'defective']] },
      { number: 13, parts: ["'It's the most exciting experience you'll ever have!' ", ''], answers: [['ultimate']], options: [['ultimate', 'optimum']] },
      { number: 14, parts: ["'I think it was a sensible decision.' ", ''], answers: [['sound']], options: [['prime', 'sound']] },
      { number: 15, parts: ["'This is exactly what I need.' ", ''], answers: [['ideal']], options: [['ideal', 'prime']] },
      { number: 16, parts: ["'Excellent work. Well done!' ", ''], answers: [['first-rate']], options: [['satisfactory', 'first-rate']] },
      { number: 17, parts: ["'Four is the right number of people for this project.' ", ''], answers: [['optimum']], options: [['ultimate', 'optimum']] }
    ]
  },
  {
    id: 'C',
    unitId: 22,
    title: 'Topic vocabulary: The arts',
    instruction: 'Write a word from the boxes in each gap.',
    wordBox: ['bestseller', 'paperback', 'lines', 'lyrics', 'recital', 'score', 'curator', 'retrospective', 'priceless', 'worthless', 'jobs', 'works'],
    questions: [
      { number: 1, parts: ["I haven't read Susan Bashworth's latest yet but I've heard it's very good. It became a ", ' within weeks of being published.'], answers: [['bestseller']] },
      { number: 2, parts: ["I'm actually waiting for it to come out in ", ' before I get it.'], answers: [['paperback']] },
      { number: 3, parts: ["I've learnt all my ", ' for the play, which was easy,'], answers: [['lines']] },
      { number: 4, parts: ["but we have to sing a song at the end and I'm just no good at remembering ", '.'], answers: [['lyrics']] },
      { number: 5, parts: ["The school orchestra's giving a ", ' tonight which sounds quite interesting.'], answers: [['recital']] },
      { number: 6, parts: ["They've got a guest conductor who's quite famous. Apparently, he's written the ", ' for a number of movies.'], answers: [['score']] },
      { number: 7, parts: ['We went to that ', " of Lewis' paintings at the Granchester Museum last week. It was very good."], answers: [['retrospective']] },
      { number: 8, parts: ['We got chatting to the ', ', who told us a very interesting story about one picture ...'], answers: [['curator']] },
      { number: 9, parts: ['He told us that someone had found it in their attic, thought it was ', ' and so gave it to a neighbour.'], answers: [['worthless']] },
      { number: 10, parts: ['In fact, it turned out to be ', '!'], answers: [['priceless']] },
      { number: 11, parts: ['One of the ', " I'd love to do"], answers: [['jobs']] },
      { number: 12, parts: ['is restoring damaged or faded ', ' of art. It must be really satisfying seeing an old painting come to life again.'], answers: [['works']] }
    ]
  },
  {
    id: 'D',
    unitId: 22,
    title: 'Topic vocabulary: The arts (An alternative to galleries)',
    instruction: 'Complete using the words in the box in the correct form. There is one word you will not need.',
    wordBox: ['abstract', 'auction', 'audition', 'fine', 'installation', 'item', 'masterpiece', 'period', 'sketch'],
    questions: [
      {
        number: 1,
        parts: [
          'When most of us think of works of art, we tend to think of pieces in galleries, whether they be famous ',
          " (such as da Vinci's Mona Lisa) hanging on the wall, or bizarre ",
          ' (such as a pile of bricks with a red shoe on top).\nCertainly, galleries are one of the main ways in which people can view art. Another way is to go to a/an ',
          ". You don't have to be rich to attend (entrance is usually free), although if you're going to bid for a Van Gogh, you'd better take your bank details with you.\nThey're actually a great way to learn about art, because the catalogue gives detailed information about each piece, and there's often more variety than in a gallery. On any one day, there may be ",
          ' in pencil (artists generally do these before painting the actual picture), ',
          " art (which includes sculptures and ceramics as well as paintings), collector's ",
          ' (anything from broomsticks to postcards), ',
          ' paintings (the catalogue will help you work out what the artist was trying to express) and even ',
          ' furniture.'
        ],
        answers: [
          ['masterpieces'], ['installations'], ['auction'], ['sketches'],
          ['fine'], ['items'], ['abstract'], ['period']
        ]
      }
    ]
  },
  {
    id: 'E',
    unitId: 22,
    title: 'Phrasal verbs',
    instruction: 'Write one word in each gap so the second sentence has a similar meaning to the first sentence.',
    questions: [
      { number: 1, parts: ["You'll have to improve your general knowledge before you go on that quiz show.\nYou'll have to ", ' up on your general knowledge before you go on that quiz show.'], answers: [['brush']] },
      { number: 2, parts: ['The car was so badly damaged it had to be destroyed.\nThe car was so badly damaged it had to be ', ' off.'], answers: [['written']] },
      { number: 3, parts: ['One of the poems is particularly noteworthy due to its interesting use of imagery.\nOne of the poems particularly ', ' out due to its interesting use of imagery.'], answers: [['stands']] },
{ number: 4, parts: ["If attendance doesn't improve soon, the play will probably have to close.\nIf attendance doesn't ", ' up soon, the play will probably have to close.'], answers: [['pick']] },
{ number: 5, parts: ["I've heard a new gallery has opened in St Ives, so I'm going to see what it's like.\nI've heard a new gallery has opened in St Ives, so I'm going to ", ' it out.'], answers: [['check']] },
{ number: 6, parts: ['Susan only just passed her history of art course.\nSusan ', ' through her history of art course.'], answers: [['scraped']] },
{ number: 7, parts: ["The photo's got a couple of marks on it, so I'll scan it and make it look better with some software I've got.\nThe photo's got a couple of marks on it, so I'll scan it and ", " it up with some software I've got."], answers: [['touch']] },
{ number: 8, parts: ["On the show today, we're going to completely change the look of the Simpsons' spare bedroom.\nOn the show today, we're going to completely ", " over the Simpsons' spare bedroom."], answers: [['make']] }
]
},
{
id: 'F',
unitId: 22,
title: 'Phrasal verbs',
instruction: 'If the bold word is in the wrong sentence, write the correct word. If it is correct, write OK.',
questions: [
{ number: 1, parts: ['The party was a bit boring to start with but everyone (livened) ', ' up when Rod got out his guitar.'], answers: [['OK']] },
{ number: 2, parts: ["I'm not very pleased with this drawing actually as I think I've (papered) ", ' up the perspective a little.'], answers: [['messed']] },
{ number: 3, parts: ["I've only (wasted) ", " this up for now - I won't be able to fix it properly until we get home."], answers: [['patched']] },
{ number: 4, parts: ['Julie and Simone have (messed) ', " over their differences while they get their business set up, but I'm sure they'll start arguing again pretty soon."], answers: [['papered']] },
{ number: 5, parts: ['The Prime Minister responded that it was the previous administration which had (patched) ', ' the film industry down.'], answers: [['run']] },
{ number: 6, parts: ['Luckily, the weather (brightened) ', ' up in the afternoon so we were able to hold the reception outside after all.'], answers: [['OK']] },
{ number: 7, parts: ['As kids, we always (ran) ', ' ourselves up when our grandparents came to visit.'], answers: [['smartened']] },
{ number: 8, parts: ['The holiday at the health farm was awful. They only gave us a few vegetables every evening - I almost (smartened) ', ' away!'], answers: [['wasted']] }
]
},
{
id: 'G',
unitId: 22,
title: 'Phrases, patterns and collocations',
instruction: 'Choose the correct word.',
questions: [
{ number: 1, parts: ['I want this mess cleared up right now. Did I ', ' myself clear?'], answers: [['make']], options: [['make', 'do']] },
{ number: 2, parts: ["It's ", ' and warm in here.'], answers: [['nice']], options: [['nice', 'good']] },
{ number: 3, parts: ['Off the top of my ', ", I'd say this diamond's worth at least a million euros."], answers: [['head']], options: [['brain', 'head']] },
{ number: 4, parts: ["You're cutting it ", '. The meeting starts in about two minutes.'], answers: [['fine']], options: [['fine', 'well']] },
{ number: 5, parts: ['To the ', " of my knowledge, there aren't any Picassos on the market at the moment."], answers: [['best']], options: [['top', 'best']] },
{ number: 6, parts: ["That Ferrari Craig's just bought is ", ' new. It must have cost him a fortune!'], answers: [['brand']], options: [['brand', 'model']] },
{ number: 7, parts: ["Lee's his own worst ", ". He complains he hasn't sold any of his paintings, but he won't show them to anyone."], answers: [['enemy']], options: [['friend', 'enemy']] },
{ number: 8, parts: ["There's been bad ", ' between them ever since Trevor accused Charlton of sabotaging his opening night.'], answers: [['blood']], options: [['blood', 'mood']] },
{ number: 9, parts: ["That's the last time I lie to a client for Mrs Richards. I'm not going to do her dirty ", ' for her any more.'], answers: [['work']], options: [['job', 'work']] },
{ number: 10, parts: ["My mum's got organising her Christmas card list ", ' to a fine art.'], answers: [['down']], options: [['round', 'down']] }
]
},
{
id: 'H',
unitId: 22,
title: 'Phrases, patterns and collocations',
instruction: 'For each question, write one word which can be used in all three sentences.',
questions: [
{ number: 1, parts: ["The caterers didn't turn up and the guest of honour was late so we had to make the ___ of a rather disastrous situation. I know you're not very keen on art, but just do your ___ in the exam. I didn't get the job in the end, but it's probably for the ___. Word: ", ''], answers: [['best']] },
{ number: 2, parts: ["I'm afraid we're ___ out of that CD. As soon as I get out of prison, I'm determined to make a ___ start. And now, ___ from their blockbuster tour of the USA, here's ... The Goldsmiths! Word: ", ''], answers: [['fresh']] },
{ number: 3, parts: ["She wants to make a ___ break and leave the publishing industry completely. The doctors have given me a completely ___ bill of health. This term, you all start again with a ___ sheet, so I won't hold anything you did wrong last term against you. Word: ", ''], answers: [['clean']] },
{ number: 4, parts: ["Is long hair back in ___? I actually don't know much about that ___ of architecture. If I was a rock star, I'd make sure I was treated with ___ wherever I went. Word: ", ''], answers: [['style']] },
{ number: 5, parts: ["I bumped into an ___ flame of mine in Woolworth's this morning. Dave's an ___ hand when it comes to doing the carnival disco - he's been doing it for years. I'm afraid we're going to have to consider putting Mum in an ___ people's home. Word: ", ''], answers: [['old']] },
{ number: 6, parts: ["They think I'm stupid but I'm not going to let them get the ___ of me. We could stay at a hotel near the festival or, ___ yet, camp in the grounds. Yes, I'm certainly all the ___ for two weeks in the sun. Word: ", ''], answers: [['better']] }
]
},
{
id: 'I',
unitId: 22,
title: 'Phrases, patterns and collocations: Contemporary Art',
instruction: 'Write one word in each gap.',
questions: [
{
number: 1,
parts: [
'There is a widely held view that artistic standards have got ',
" over the last 100 years or so and that contemporary art is ",
" a bad way, the clichéd response being 'my three-year-old child could have done better than that'. Yet many pieces sell for millions of dollars within the art world. How can we get to the ",
' of this seeming contradiction?\nThose new ',
' contemporary art should be forgiven for this kind of response, but it is largely a matter of their ignorance rather than the reality. What needs to be ',
' clear is that contemporary art is at the cutting edge; painting a lifelike picture of a racehorse is no longer an option for an artist attempting to break new ground. Were contemporary artists to produce pictures like this, we would actually have the ',
" of all worlds - a stagnant and backward-looking artistic tradition.\nHaving said that, some contemporary art is of poor ",
", but that's true of every art ",
' at any point in history. We can only decide that novels are great, for example, by having mediocre or bad novels to compare them to.\nHowever, those ',
' the top of the contemporary art world are producing innovative and challenging pieces. At ',
" best, contemporary art is as exciting and productive as it's possible for art to be.\nThere is, of course, a ",
' line between quality contemporary art and pseudo-art. Abstract pictures produced by cats, for example, have no real place in the contemporary art world. They merely relieve the gullible and the ignorant of their money.'
],
answers: [
['worse'], ['in'], ['bottom'], ['to'], ['made'], ['worst'],
['quality'], ['form'], ['at'], ['its'], ['fine']
]
}
]
},
{
id: 'J',
unitId: 22,
title: 'Idioms',
instruction: 'Complete using the words in the box.',
wordBox: ['edge', 'fuel', 'heel', 'line', 'par', 'pride', 'show', 'sight', 'top', 'whistle', 'word', 'world'],
questions: [
{ number: 1, parts: ['Soccer Maestro is undoubtedly the last ', ' in online football simulation games at the moment.'], answers: [['word']] },
{ number: 2, parts: ['The picture that takes ', ' of place on our mantelpiece, though, is the one of our granddaughter graduating.'], answers: [['pride']] },
{ number: 3, parts: ["You're a ", " for sore eyes, Claire! Thank goodness you're here - we desperately need your input."], answers: [['sight']] },
{ number: 4, parts: ["Jean Paul is clearly a very talented designer. His one Achilles' ", ', however, may be his lack of business sense.'], answers: [['heel']] },
{ number: 5, parts: ['The buffet at the party was out of this ', "! I've never tasted such exquisite strawberries."], answers: [['world']] },
{ number: 6, parts: ["Amis' new novel is slightly below ", ' for a writer of his stature; I was a little disappointed.'], answers: [['par']] },
{ number: 7, parts: ['All the bands were fantastic, but The Editors and Franz Ferdinand really stole the ', '.'], answers: [['show']] },
{ number: 8, parts: ["I'm happy to simplify things for the readers, but I draw the ", ' at telling them blatant untruths.'], answers: [['line']] },
{ number: 9, parts: ["I think the media's response has been a little over the ", " - it's only a TV programme, after all."], answers: [['top']] },
{ number: 10, parts: ["Recent allegations in the press about price-fixing at the auction house have only added ", " to the fire regarding speculation about Dotheby's future."], answers: [['fuel']] },
{ number: 11, parts: ["I've spent the whole morning vacuuming the inside of the car. It's now clean as a ", '.'], answers: [['whistle']] },
{ number: 12, parts: ['The Gordon Gallery clearly has the ', ' over other modern art galleries; they have the largest collection, and the largest budget to spend on acquiring new pieces.'], answers: [['edge']] }
]
},
{
id: 'K',
unitId: 22,
title: 'Word formation',
instruction: 'Use the word given in capitals to form a word that fits each gap.',
questions: [
{ number: 1, parts: ['Well, she did study ', " at Oxford, so it's hardly surprising she knows Latin and Ancient Greek. (CLASS)"], answers: [['classics', 'Classics']] },
{ number: 2, parts: ["The Pet Shop Boys' sound is ", ' and unique. (IMITATE)'], answers: [['inimitable']] },
{ number: 3, parts: ['What this painting says to me is that we live in a world of ', ' and despair. (DESTROY)'], answers: [['destruction']] },
{ number: 4, parts: ["I've got enormous ", " for Ben; he's achieved such a lot in such a short space of time. (ADMIRE)"], answers: [['admiration']] },
{ number: 5, parts: ["The main reason I believe children shouldn't be exposed to violence on TV is that they're so ", ' at that age. (IMPRESS)'], answers: [['impressionable']] },
{ number: 6, parts: ["I'm a bit of a ", ', so I can spend all day agonising over which choice of two words to use. (PERFECT)'], answers: [['perfectionist']] },
{ number: 7, parts: ['Maybe I am an ', "; but what's wrong with wanting every human being to have access to clean drinking water? (IDEAL)"], answers: [['idealist']] },
{ number: 8, parts: ["I've read that many performers suffered feelings of ", ' as children. (ADEQUATE)'], answers: [['inadequacy']] },
{ number: 9, parts: ["I don't know how ", ' it would be to get some of these old postcards valued. (WORTH)'], answers: [['worthwhile']] },
{ number: 10, parts: ["We'll find out how much the jewellery's worth at the ", ' next Thursday. (VALUE)'], answers: [['valuation']] },
{ number: 11, parts: ["Now the government's ", ' the papers, we can find out what really happened. (CLASS)'], answers: [['declassified']] },
{ number: 12, parts: ['Being director of the National Gallery is an ', ' responsibility but thankfully I have a number of highly experienced experts to help me. (AWE)'], answers: [['awesome']] },
{ number: 13, parts: ['With her experience as both an actor and a director, Tabitha is a very ', ' successor to Albert Weeks as Chairperson of the National Theatre. (WORTH)'], answers: [['worthy']] },
{ number: 14, parts: ['There were some very interesting clay ', ' dating from the third century BC at the museum. (ART)'], answers: [['artefacts', 'artifacts']] },
{ number: 15, parts: ['Stage fright is an understatement! Performing on stage for the first time was the most ', " experience I've ever had. (TERROR)"], answers: [['terrifying']] },
{ number: 16, parts: ["Don't throw away consumer packaging. Most of it's ", ' if you use a little creativity. (USE)'], answers: [['reusable']] },
{ number: 17, parts: ["There's a ", ' difference between photography and still-life drawing. (QUALITY)'], answers: [['qualitative']] }
]
},
{
id: 'L',
unitId: 22,
title: 'Word formation: The working world of Jacob Lawson',
instruction: 'Use the word given in capitals to form a word that fits each gap.',
questions: [
{
number: 1,
parts: [
'This week we look at the working life of Jacob Lawson, who buys and sells items on Internet auction sites.\nIn the old days, before the Internet, I had to trawl through hundreds of (CLASS) ',
' ads each week and go to car boot sales at the weekend. Auction sites like eBay, though, are extremely (IMPRESS) ',
' and a great (IMPROVE) ',
". It's just (TERROR) ",
' what you can do at the click of a button. I love it!\nI generally buy and sell (COLLECT) ',
' items. These could be anything - from carriage clocks to knives and forks to plastic (ART) ',
' flowers. (COLLECT) ',
" are interested in the strangest things - and there's always money to be made. The best money comes from items that are in very good condition - often because they're (USE) ",
" and still in their packaging, but there's also a market for things like second-hand pottery or glassware that might have (PERFECT) ",
".\nI'm quite successful. One of my (STRONG) ",
" is that I've got a very good rating on most of these sites - people I've sold to have given me very good reviews, so new customers trust me. I'm also good at spotting what's (VALUE) ",
" and what's completely (WORTH) ",
". For example, here's a pair of (MATCH) ",
" earrings. The description says they're diamond, but if you click on the picture, a trained eye like mine can tell immediately they're (IMITATE) ",
". Diamond's basically (DESTROY) ",
", you see, and these have got damage marks on them. So I won't be buying them. Ideally, it's better to actually see the (GOOD) ",
" you're buying before you purchase them, but these auction sites have pretty good policies if you're not satisfied with your purchase, and I've never had any problems."
],
answers: [
['classified'], ['impressive'], ['improvement'], ['terrific'],
['collectable', 'collectible'], ['artificial'], ['Collectors'],
['unused'], ['imperfections'], ['strengths'], ['valuable'],
['worthless'], ['matching'], ['imitation'], ['indestructible'], ['goods']
]
}
]
},
{
id: 'M',
unitId: 22,
title: 'Word formation: prefix in-',
instruction: "Choose Yes if the prefix in- means 'not' or 'no'; otherwise choose No.",
questions: [
{ number: 1, parts: ['The inbound flight from Chicago has been delayed due to bad weather. ', ''], answers: [['No']], options: [yesNo] },
{ number: 2, parts: ['I really do value my independence. ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 3, parts: ['The whole family was infamous round here for their antisocial behaviour. ', ''], answers: [['No']], options: [yesNo] },
{ number: 4, parts: ['I left the organisation eventually because of all the infighting. ', ''], answers: [['No']], options: [yesNo] },
{ number: 5, parts: ["This material is inflammable, isn't it? ", ''], answers: [['No']], options: [yesNo] },
{ number: 6, parts: ['What an ingenious idea. ', ''], answers: [['No']], options: [yesNo] },
{ number: 7, parts: ["The place will soon be inhabitable, won't it? ", ''], answers: [['No']], options: [yesNo] },
{ number: 8, parts: ['The whole area feels very inhospitable. ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 9, parts: ['The situation is intolerable. ', ''], answers: [['Yes']], options: [yesNo] },
{ number: 10, parts: ['She was charged with being disorderly and intoxicated. ', ''], answers: [['No']], options: [yesNo] }
]
}
];