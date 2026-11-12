import type { ExerciseSection } from './exercises';

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