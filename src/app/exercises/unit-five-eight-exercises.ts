import type { ExerciseSection } from './exercises';

export const unitFiveExerciseSections: ExerciseSection[] = [
  { id: 'A', unitId: 5, title: 'Future forms', instruction: 'Choose the correct word or phrase.', questions: [
    { number: 1, parts: ["Sonia looks like she's ", ' asleep any minute!'], answers: ['going to fall'], options: ['falling', 'going to fall'] },
    { number: 2, parts: ["When I leave school, I'm ", ' a journalist.'], answers: ['going to be'], options: ['being', 'going to be'] },
    { number: 3, parts: ['Watch out or you ', ' into trouble!'], answers: ['are going to get'], options: ['are getting', 'are going to get'] },
    { number: 4, parts: ['The last bus ', ' at midnight.'], answers: ['leaves'], options: ['leaves', 'is leaving'] }
  ]},
  { id: 'B', unitId: 5, title: 'Future forms', instruction: 'Choose the correct form for arrangements, offers and predictions.', questions: [
    { number: 1, parts: ["I'm afraid I can't come; we ", ' my grandparents.'], answers: ["we're visiting"], options: ["we'll visit", "we're visiting"] },
    { number: 2, parts: ['What time ', ' tomorrow?'], answers: ['does your plane arrive', 'is your plane arriving'], options: ['does your plane arrive', 'is your plane arriving'] },
    { number: 3, parts: ['Karen, ', ' you a hand with the report?'], answers: ['shall I give'], options: ['shall I give', 'will I give'] }
  ]},
  { id: 'C', unitId: 5, title: 'Future forms in context', instruction: 'Complete with will, be going to, present simple or present continuous.', questions: [
    { number: 1, parts: ['I ', ' into the office on Saturday if you like.'], answers: ["I'll come", "I'm coming"] },
    { number: 2, parts: ['From the look of things, it ', ' later today.'], answers: ["it's going to snow", "it'll snow"] },
    { number: 3, parts: ['Hurry up! We ', ' the ferry!'], answers: ["we're going to miss", "we'll miss"] }
  ]},
  { id: 'D', unitId: 5, title: 'Future perfect', instruction: 'Correct the verb form to use the future perfect where necessary.', questions: [
    { number: 1, parts: ['Toby ', ' with the company for 35 years by Tuesday.'], answers: ['will have been'] },
    { number: 2, parts: ['At the end of summer, I ', ' the same train for 15 years.'], answers: ['will have been taking', 'will have taken'] }
  ]},
  { id: 'E', unitId: 5, title: 'Future perfect and continuous', instruction: 'Complete the sentences with the correct future form.', questions: [
    { number: 1, parts: ['By the end of today, Ed ', ' for over 17 jobs.'], answers: ['will have applied'] },
    { number: 2, parts: ['This time next year, I ', ' my own business.'], answers: ['will hopefully be running'] },
    { number: 3, parts: ['In three days, we ', ' here for exactly two years.'], answers: ['will have lived', 'will have been living'] }
  ]},
  { id: 'G', unitId: 5, title: 'Future time clauses', instruction: 'Complete the instructions with the correct future form.', questions: [
    { number: 1, parts: ['When you ', ' at the main gates, hand over your letter.'], answers: ['arrive'] },
    { number: 2, parts: ['You ', ' where to park.'], answers: ['will be shown'] },
    { number: 3, parts: ['As soon as you ', ' your name, you will be taken to the meeting room.'], answers: ['have given', 'give'] }
  ]},
  { id: 'H', unitId: 5, title: 'Future expressions', instruction: 'Complete the transformations using the given word.', questions: [
    { number: 1, parts: ['Shona ', ' find out if she has been promoted. (just)'], answers: ['is just about to'] },
    { number: 2, parts: ['They ', ' whether to close the office. (point)'], answers: ['are on the point of deciding'] },
    { number: 3, parts: ['I ', ' a presentation on Friday. (due)'], answers: ['am due to give'] }
  ]},
  { id: 'J', unitId: 5, title: 'Future time', instruction: 'Write one word in each gap.', questions: [
    { number: 1, parts: ['What ', ' the office of the future be like?'], answers: ['will'] },
    { number: 2, parts: ['Most people will ', ' been connected to Wi-Fi.'], answers: ['have'] },
    { number: 3, parts: ['As ', ' as that happens, phone lines may disappear.'], answers: ['soon'] }
  ]},
  { id: 'K', unitId: 5, title: 'Future time', instruction: 'Choose the correct answer.', questions: [
    { number: 1, parts: ['Keith Danish ', ' replace Susan as Operations Manager.'], answers: ['C · is to'], options: ['A · does', 'B · is about to', 'C · is to', 'D · will'] },
    { number: 2, parts: ['Once ', ' broadband, you will not want dial-up.'], answers: ['D · you’ve used'], options: ['A · you’ll be using', 'B · you’ll have used', 'C · you’ve been used', 'D · you’ve used'] },
    { number: 3, parts: ['This time tomorrow, Barry ', ' across the Pacific.'], answers: ['A · will be rowing'], options: ['A · will be rowing', 'B · will have rowed', 'C · will have been rowing'] }
  ]}
];

export const unitSixExerciseSections: ExerciseSection[] = [
  { id: 'A', unitId: 6, title: 'Time', instruction: 'Write a word from the box in each gap.', wordBox: ['obsolete', 'overdue', 'provisional', 'punctual', 'seasonal', 'simultaneous', 'temporary', 'timely'], questions: [
    { number: 1, parts: ["I'm only working here for two weeks. I'm a ", ' worker.'], answers: ['temporary'] },
    { number: 2, parts: ['What a ', ' arrival!'], answers: ['timely'] },
    { number: 3, parts: ["It's a ", ' problem that depends on the time of year.'], answers: ['seasonal'] },
    { number: 4, parts: ['I try to be ', ' and arrive at nine on the dot.'], answers: ['punctual'] },
    { number: 5, parts: ['Our answer was ', '.'], answers: ['simultaneous'] },
    { number: 6, parts: ["We can't use that software; it's ", '.'], answers: ['obsolete'] },
    { number: 7, parts: ["It's only a ", ' draft.'], answers: ['provisional'] },
    { number: 8, parts: ['The parcel is long ', '.'], answers: ['overdue'] }
  ]},
  { id: 'B', unitId: 6, title: 'Time', instruction: 'Write a word from the box in each gap.', wordBox: ['century', 'era', 'frequency', 'millennium', 'phase', 'span', 'spell', 'stint'], questions: [
    { number: 1, parts: ['We live in an ', ' of mass communication.'], answers: ['era'] },
    { number: 2, parts: ['After a short ', ' of unemployment, I started a business.'], answers: ['spell'] },
    { number: 3, parts: ['It was in the twentieth ', ' that nuclear weapons were developed.'], answers: ['century'] },
    { number: 4, parts: ['No human will ever live for a ', '.'], answers: ['millennium'] },
    { number: 5, parts: ['The bus ', ' will be increased.'], answers: ['frequency'] },
    { number: 6, parts: ['I did a brief ', ' in the navy.'], answers: ['stint'] },
    { number: 7, parts: ['I have a short concentration ', '.'], answers: ['span'] },
    { number: 8, parts: ["It's a ", ' most teenagers go through.'], answers: ['phase'] }
  ]},
  { id: 'D', unitId: 6, title: 'Work', instruction: 'Complete using the correct word from the boxes.', questions: [
    { number: 1, parts: ['Would you work for a large ', ' corporation?'], answers: ['multinational'] },
    { number: 2, parts: ['How much is budgeted for the ', ' campaign?'], answers: ['marketing'] },
    { number: 3, parts: ['Charlene is a freelance business ', '.'], answers: ['consultant'] },
    { number: 4, parts: ['My dad is a senior ', ' in a corporation.'], answers: ['executive'] },
    { number: 5, parts: ['The campaign was ', ' because it increased sales.'], answers: ['effective'] },
    { number: 6, parts: ['Robots are often more ', ' than people.'], answers: ['efficient'] },
    { number: 7, parts: ['The paper made journalists ', '.'], answers: ['redundant'] },
    { number: 8, parts: ["Darren's home on ", ' from the army.'], answers: ['leave'] },
    { number: 9, parts: ['How long will the union ', ' for?'], answers: ['strike'] },
    { number: 10, parts: ['They would not ', ' someone for that.'], answers: ['fire'] },
    { number: 11, parts: ['She was ', ' by a law firm.'], answers: ['headhunted'] },
    { number: 12, parts: ['They ', ' Jack for taking paperclips.'], answers: ['sacked'] }
  ]},
  { id: 'E', unitId: 6, title: 'Work', instruction: 'Choose the correct word.', questions: [
    { number: 1, parts: ['Consider a career in the ', ' service.'], answers: ['civil'] , options:['civil','state']},
    { number: 2, parts: ['Working in the public ', ' provides job security.'], answers: ['sector'], options:['area','sector']},
    { number: 3, parts: ['There are excellent ', ' for promotion.'], answers: ['prospects'], options:['prospects','predictions']},
    { number: 4, parts: ['There are opportunities for ', '.'], answers: ['promotion'], options:['promotion','progress']},
    { number: 5, parts: ['You will work with experienced ', '.'], answers: ['colleagues'], options:['colleagues','clients']},
    { number: 6, parts: ['Staff have the right to belong to a ', '.'], answers: ['union'], options:['club','union']},
    { number: 7, parts: ['We want to ', ' the brightest candidates.'], answers: ['recruit'], options:['recruit','elect']}
  ]},
  { id: 'F', unitId: 6, title: 'Phrasal verbs', instruction: 'Choose the correct word.', questions: [
    { number: 1, parts: ["I'm so ", ' under with work.'], answers: ['C · snowed'], options:['A · iced','B · rained','C · snowed','D · fogged']},
    { number: 2, parts: ['The company is ', ' off over 1,000 workers.'], answers: ['B · laying'], options:['A · leaving','B · laying','C · setting','D · giving']},
    { number: 3, parts: ['They plan to ', ' down their operation.'], answers: ['A · wind'], options:['A · wind','B · tie','C · roll','D · stretch']},
    { number: 4, parts: ["I'll try to ", ' ahead with it.'], answers: ['D · press'], options:['A · drive','B · bang','C · touch','D · press']},
    { number: 5, parts: ["Something's ", ' up, so I cannot come.'], answers: ['C · cropped'], options:['A · shown','B · pulled','C · cropped','D · cut']},
    { number: 6, parts: ['Could you lend me money to ', ' me over?'], answers: ['B · tide'], options:['A · hand','B · tide','C · get','D · make']},
    { number: 7, parts: ["I didn't ", ' out to be a millionaire.'], answers: ['A · set'], options:['A · set','B · go','C · begin','D · watch']},
    { number: 8, parts: ["She'll ", ' up the hours tomorrow.'], answers: ['B · make'], options:['A · find','B · make','C · catch','D · bring']}
  ]},
  { id: 'G', unitId: 6, title: 'Phrasal verbs', instruction: 'Complete with the correct phrasal verb from the box.', wordBox:['dive in','end up','kick off','knock off','knuckle down','lie ahead','take on','while away'], questions:[
    {number:1,parts:['I hope to ', ' a part-time assistant.'],answers:['take on']},
    {number:2,parts:['We ', ' having to scrap the campaign.'],answers:['ended up']},
    {number:3,parts:['Let’s ', ' this session with introductions.'],answers:['kick off']},
    {number:4,parts:['Josh can ', ' a whole day playing games.'],answers:['while away']},
    {number:5,parts:['No one knows what ', ' career-wise.'],answers:['lies ahead']},
    {number:6,parts:['It’s time to ', ' and do your homework.'],answers:['knuckle down']},
    {number:7,parts:['I usually ', ' work at 5:30.'],answers:['knock off']},
    {number:8,parts:['Everyone ', ' and helped themselves.'],answers:['dived in']}
  ]},
  { id: 'L', unitId: 6, title: 'Idioms', instruction: 'Write the corrected idiom.', questions:[
    {number:1,parts:['I haven’t seen Carol in ', ' years.'],answers:["monkey's"]},
    {number:2,parts:['That was long before your ', '.'],answers:['time']},
    {number:3,parts:['I spoke to Sandra the ', ' day.'],answers:['other']},
    {number:4,parts:['I realised in the ', ' of time.'],answers:['nick']},
    {number:5,parts:['She is happy for the time ', '.'],answers:['being']},
    {number:6,parts:['Once in a blue ', '.'],answers:['moon']},
    {number:7,parts:['She has given up smoking for ', '.'],answers:['good']},
    {number:8,parts:['From time to ', '.'],answers:['time']}
  ]}
];

export const unitSevenExerciseSections: ExerciseSection[] = [
  {id:'A',unitId:7,title:'The passive',instruction:'Complete with the correct passive form.',questions:[
    {number:1,parts:['The car ', ' at approximately 1:30 am. (steal)'],answers:['was stolen']},
    {number:2,parts:['The act ', ' in 1988. (introduce)'],answers:['was introduced']},
    {number:3,parts:['All passengers ', ' to present their ticket. (require)'],answers:['are required']},
    {number:4,parts:['The new bridge ', ' next year. (build)'],answers:['will be built']}
  ]},
  {id:'B',unitId:7,title:'Passive forms',instruction:'Choose or write the correct passive form.',questions:[
    {number:1,parts:['The report ', ' yesterday.'],answers:['was published'],options:['published','was published']},
    {number:2,parts:['The problem ', ' at the moment.'],answers:['is being discussed']},
    {number:3,parts:['The building ', ' before the storm arrived.'],answers:['had been completed']},
    {number:4,parts:['The tickets ', ' by email tomorrow.'],answers:['will be sent']}
  ]},
  {id:'C',unitId:7,title:'Impersonal passive',instruction:'Rewrite using an impersonal passive form.',questions:[
    {number:1,parts:['People expect tourism to become a major industry. It ', '.'],answers:['is expected that tourism will become a major industry']},
    {number:2,parts:['People say the railway will create jobs. The railway ', '.'],answers:['is said to create jobs']},
    {number:3,parts:['They report a record number of accidents. There ', '.'],answers:['are reported to have been a record number of accidents']}
  ]},
  {id:'D',unitId:7,title:'Passive structures',instruction:'Complete each sentence with the right passive construction.',questions:[
    {number:1,parts:['The passengers ', ' about the delay. (inform)'],answers:['were informed']},
    {number:2,parts:['A new treatment is believed ', ' soon. (develop)'],answers:['to be developed']},
    {number:3,parts:['It ', ' that the road is unsafe. (think)'],answers:['is thought']}
  ]},
  {id:'E',unitId:7,title:'Causatives',instruction:'Complete using have/get something done or have/get someone to do something.',questions:[
    {number:1,parts:['I ', ' my car ', ' yesterday. (repair)'],answers:['had','repaired']},
    {number:2,parts:['We got the company ', ' out. (come)'],answers:['to come']},
    {number:3,parts:['She had her assistant ', ' the letter. (type)'],answers:['type']}
  ]},
  {id:'F',unitId:7,title:'Passive and causative forms',instruction:'Complete the dialogue with an appropriate form.',questions:[
    {number:1,parts:['My car ', ' yesterday. (service)'],answers:['was serviced']},
    {number:2,parts:['I had the mechanic ', ' the fuel pump. (check)'],answers:['check']},
    {number:3,parts:['We had to get the company ', ' out in the end. (come)'],answers:['to come']}
  ]},
  {id:'G',unitId:7,title:'Causative forms',instruction:'Use the words in brackets to complete each sentence.',questions:[
    {number:1,parts:['Your teacher ', ' it again. (explain it to you)'],answers:['will explain']},
    {number:2,parts:['Watching the kitten soon ', ' much better. (me/feel)'],answers:['made me feel']},
    {number:3,parts:['I ', ' the room ', '. (a professional/do)'],answers:['had','done']},
    {number:4,parts:['I ', ' my hair ', '. (have/cut)'],answers:['had','cut']}
  ]},
  {id:'H',unitId:7,title:'Key word transformations',instruction:'Complete with the word given.',questions:[
    {number:1,parts:['I ', ' for over 20 minutes. (kept)'],answers:['was kept waiting']},
    {number:2,parts:['Despite ', ' a star, Ashley is friendly. (considered)'],answers:['being considered']},
    {number:3,parts:['The new stadium ', ' for two years. (under)'],answers:['has been under construction']},
    {number:4,parts:['Why ', ' behind after the lesson? (to)'],answers:['was Craig made to stay']}
  ]},
  {id:'J',unitId:7,title:'Passives and causatives',instruction:'Choose the correct answer.',questions:[
    {number:1,parts:['The car ', ' in the accident.'],answers:['C · was badly damaged'],options:['A · damaged badly','B · badly damaged','C · was badly damaged','D · was damaging']},
    {number:2,parts:['The reports ', ' by tomorrow.'],answers:['A · will be finished'],options:['A · will be finished','B · will finish','C · are finish','D · have finishing']}
  ]}
];

export const unitEightExerciseSections: ExerciseSection[] = [
  {id:'A',unitId:8,title:'Movement',instruction:'Complete using the correct form of a word from the box.',wordBox:['clench','clutch','fumble','gesture','grab','grasp','point','punch','wave'],questions:[
    {number:1,parts:['I ', ' my fists angrily.'],answers:['clenched']},
    {number:2,parts:['She was ', ' her bag tightly.'],answers:['clutching']},
    {number:3,parts:['He ', ' in his pocket for the keys.'],answers:['fumbled']},
    {number:4,parts:['She ', ' at the map.'],answers:['pointed']}
  ]},
  {id:'B',unitId:8,title:'Movement and transport',instruction:'Choose the correct word.',questions:[
    {number:1,parts:['The climber began to ', ' the steep path.'],answers:['clamber'],options:['clamber','march','float']},
    {number:2,parts:['The boat began to ', ' downstream.'],answers:['drift'],options:['drift','clench','punch']},
    {number:3,parts:['The plane will ', ' at noon.'],answers:['ascend'],options:['ascend','sink','skid']}
  ]},
  {id:'C',unitId:8,title:'Movement',instruction:'Complete the sentences with a movement verb.',questions:[
    {number:1,parts:['The children ', ' over the puddle.'],answers:['leapt','leaped']},
    {number:2,parts:['He ', ' along the pavement to keep warm.'],answers:['jogged']},
    {number:3,parts:['The car ', ' on the icy road.'],answers:['skidded']}
  ]},
  {id:'D',unitId:8,title:'Transport',instruction:'Complete using a word from the transport vocabulary.',questions:[
    {number:1,parts:['We booked a return ', ' to Paris.'],answers:['fare']},
    {number:2,parts:['A ', ' asked us to move our bags from the seat.'],answers:['passerby']},
    {number:3,parts:['Our final ', ' is Edinburgh.'],answers:['destination']}
  ]},
  {id:'F',unitId:8,title:'Phrasal verbs',instruction:'Complete with a movement phrasal verb.',questions:[
    {number:1,parts:['The police ', ' the area after the incident.'],answers:['cordoned off']},
    {number:2,parts:['The deadline began to ', ' on us.'],answers:['creep up']},
    {number:3,parts:['He decided to ', ' and let someone else lead.'],answers:['step aside']},
    {number:4,parts:['We stopped to ', ' for lunch.'],answers:['stop off']}
  ]},
  {id:'I',unitId:8,title:'Phrases and collocations',instruction:'Write one word in each gap.',questions:[
    {number:1,parts:['The train came slowly ', ' view.'],answers:['into']},
    {number:2,parts:['They travelled ', ' foot.'],answers:['on']},
    {number:3,parts:['The driver pulled ', ' by the road.'],answers:['over']}
  ]},
  {id:'K',unitId:8,title:'Idioms',instruction:'Write one word in each gap.',questions:[
    {number:1,parts:['As the ', ' flies, it is four miles.'],answers:['crow']},
    {number:2,parts:['The villa was in the middle of ', '.'],answers:['nowhere']},
    {number:3,parts:['The kids made a ', ' for the ice-cream shop.'],answers:['dash']},
    {number:4,parts:['Follow your ', ' until you see the stadium.'],answers:['nose']}
  ]},
  {id:'L',unitId:8,title:'Word formation',instruction:'Use the word in capitals to form a word that fits.',questions:[
    {number:1,parts:['Stairs often make buildings ', '. (ACCESS)'],answers:['inaccessible']},
    {number:2,parts:['People with limited ', ' can have difficulty. (MOBILE)'],answers:['mobility']},
    {number:3,parts:['The seat moves ', ' along the rails. (RAPID)'],answers:['rapidly']},
    {number:4,parts:['The device is designed to ', ' constant use. (STAND)'],answers:['withstand']}
  ]},
  {id:'M',unitId:8,title:'Word formation',instruction:'Rewrite each word in its correct form.',questions:[
    {number:1,parts:['The roads were ', ' for over a week. (PASSAGE)'],answers:['impassable']},
    {number:2,parts:['Tyrone made a very ', ' recovery. (SPED)'],answers:['speedy']},
    {number:3,parts:['The transition was ', '. (MOTION)'],answers:['motionless']}
  ]}
];
