import { ChangeDetectorRef, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SimpleWord } from '../models/interfaces';
import { WordService } from '../services/word.service';
import { LessonCategoryId, UnitId } from './exercises';

interface LessonEntry {
  id: string;
  term: string;
  partOfSpeech?: string;
  definition: string;
  example?: string;
  section?: string;
}

interface LessonEntryGroup {
  title?: string;
  entries: LessonEntry[];
}

interface LessonCategory {
  id: LessonCategoryId;
  title: string;
  reference: string;
  exerciseSection: string;
  exerciseRange: string;
  wordList?: string[];
  databaseType?: string;
  entries?: LessonEntry[];
}

@Component({
  selector: 'app-unit-two-lesson-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './unit-two-lesson-page.html',
  styleUrls: ['./unit-two-lesson.scss']
})
export class UnitTwoLessonPageComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  currentUnit: UnitId = 2;
  readonly availableUnits: UnitId[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

  get unitHeading(): string {
    return { 1: 'Present time', 
             2: 'Thinking and learning', 
             3: 'Past time', 
             4: 'Change and technology', 
             5: 'Future time', 
             6: 'Time and work', 
             7: 'Passives and causatives', 
             8: 'Movement and transport',
             9: 'Modals and semi-modals',
             10: 'Communication and the media',
             11: 'Conditionals',
             12: 'Chance and nature',
             13: '13',
             14: '14',
             15: '15',
             16: '16',
             17: '17',
             18: '18',
             19: '19',
             20: '20',
             21: '21',
             22: '22',
             23: '23',
             24: '24',
             25: '25',
             26: '26'
             }
             [this.currentUnit];
  }

  readonly unitOneCategories: LessonCategory[] = [
    {
      id: 'unit-overview',
      title: 'Present time',
      reference: 'Leçon complète Unit 1 · Exercices A–J, livre p. 6–7.',
      exerciseSection: 'A',
      exerciseRange: 'Tous les exercices A–J',
      entries: [
        { id: 'simple-truths', section: 'Present Simple', term: 'General truths', definition: 'Le present simple exprime les vérités générales.', example: 'The left-hand side of the brain controls the right-hand side of the body.' },
        { id: 'simple-habits', section: 'Present Simple', term: 'Current habits', definition: 'Le present simple décrit les habitudes actuelles.', example: "I don't always go to lectures that are early in the morning." },
        { id: 'simple-states', section: 'Present Simple', term: 'Permanent situations and states', definition: 'Le present simple décrit les situations durables et les états.', example: 'Angie teaches French at a local adult education centre.' },
        { id: 'simple-stories', section: 'Present Simple', term: 'Stories and commentary', definition: 'Le present simple s’emploie dans les blagues, les commentaires sportifs, les titres et les résumés.', example: 'Adams passes to Kareshi. It’s a goal!' },
        { id: 'simple-directions', section: 'Present Simple', term: 'Instructions and directions', definition: 'Le present simple sert à donner des instructions et des indications.', example: 'You turn left at the end of the road.' },
        { id: 'simple-future', section: 'Present Simple', term: 'Fixed future events', definition: 'Le present simple peut décrire un événement futur fixé.', example: 'Term ends on 21st December.' },
        { id: 'emphatic-contrast', section: 'Emphatic present simple', term: 'Emphasising contrast', definition: 'Do/does + base verbale souligne un contraste.', example: 'Adam doesn’t know much about psychiatry, but he does know quite a lot about psychology.' },
        { id: 'emphatic-feeling', section: 'Emphatic present simple', term: 'Emphasising strong feelings', definition: 'Do/does + base verbale peut renforcer une émotion ou une opinion.', example: 'I do like playing word games.' },
        { id: 'continuous-now', section: 'Present continuous', term: 'Actions happening now', definition: 'Le present continuous décrit une action en cours au moment présent.', example: 'The boys are doing their homework right now.' },
        { id: 'continuous-around-now', section: 'Present continuous', term: 'Actions happening around now', definition: 'Le present continuous décrit une activité temporaire autour du moment présent.', example: 'What book are you doing in English at the moment?' },
        { id: 'continuous-temporary', section: 'Present continuous', term: 'Temporary situations and series of actions', definition: 'Le present continuous décrit une situation temporaire ou une évolution.', example: 'We aren’t having any exams while the lecturers are still on strike.' },
        { id: 'continuous-changing', section: 'Present continuous', term: 'Changing and developing situations', definition: 'Le present continuous décrit une évolution en cours.', example: 'More and more people are recognising the advantages of speaking a foreign language.' },
        { id: 'continuous-habits', section: 'Present continuous', term: 'Annoying or amusing habits', definition: 'Avec always, le present continuous peut souligner une habitude agaçante ou amusante.', example: 'Dan’s always coming up with the craziest ideas!' },
        { id: 'continuous-stories', section: 'Present continuous', term: 'Background in stories', definition: 'Le present continuous donne des informations de fond dans une histoire.', example: 'A man goes to see his psychiatrist. He’s carrying a bag full of honey.' },
        { id: 'continuous-arrangements', section: 'Present continuous', term: 'Future arrangements', definition: 'Le present continuous peut parler d’un arrangement futur.', example: 'When are you taking your driving test?' },
        { id: 'perfect-states', section: 'Present perfect simple', term: 'Situations and states continuing now', definition: 'Un état commencé dans le passé et toujours vrai.', example: 'I’ve been a member of MENSA for over five years.' },
        { id: 'perfect-series', section: 'Present perfect simple', term: 'A series of actions up to now', definition: 'Une série d’actions terminée jusqu’au présent.', example: 'She’s done a BA, an MA and a PhD so far.' },
        { id: 'perfect-experience', section: 'Present perfect simple', term: 'Completed actions at an unspecified past time', definition: 'Une action passée dont le moment précis n’est pas important.', example: 'Have you ever read any books by Edward De Bono?' },
        { id: 'perfect-result', section: 'Present perfect simple', term: 'Present result', definition: 'Une action passée dont le résultat est important maintenant.', example: 'She’s been awarded a scholarship to study at Harvard.' },
        { id: 'perfect-recent', section: 'Present perfect simple', term: 'Recently completed actions', definition: 'Le present perfect simple exprime aussi une action récente.', example: 'I’ve just received my exam results.' },
        { id: 'perfect-time-clauses', section: 'Present perfect simple', term: 'Future in time clauses', definition: 'Le present perfect simple peut situer une action future dans une proposition de temps.', example: 'Tell me when you’ve finished the report.' },
        { id: 'perfect-continuous', section: 'Present perfect continuous', term: 'Actions and situations continuing to the present', definition: 'Le present perfect continuous insiste sur une activité ou une situation qui dure jusqu’au présent.', example: 'We’ve all been wondering what to get Tony for his birthday.' },
        { id: 'perfect-continuous-future', section: 'Present perfect continuous', term: 'Future in time clauses', definition: 'Le present perfect continuous peut exprimer la durée d’une activité avant un événement futur.', example: 'I won’t take my driving test until I’ve been having lessons for at least two months.' },
        { id: 'perfect-number', section: 'Present perfect continuous', term: 'Number or duration', definition: 'Le simple précise généralement un nombre ; le continuous met l’accent sur la durée.', example: 'I’ve written two essays this week. / I’ve been working here for five years.' },
        { id: 'perfect-time-words', section: 'Present perfect continuous', term: 'Time expressions', definition: 'Expressions fréquentes : since, for, just, all day/week.', example: 'I’ve been working all day.' },
        { id: 'stative-description', section: 'Stative and non-stative uses of verbs', term: 'Stative verbs', definition: 'Les verbes décrivant un état s’emploient généralement au simple, pas au continuous.' },
        { id: 'thinking-verbs', section: 'Stative and non-stative uses of verbs', term: 'Thinking', definition: 'believe, consider, doubt, expect, imagine, know, mean, realise, suppose, suspect, think, understand' },
        { id: 'emotion-verbs', section: 'Stative and non-stative uses of verbs', term: 'Communication and emotions', definition: 'agree, deny, disagree; adore, appreciate, desire, dislike, fear, feel, hate, like, love, need, prefer, trust, want, wish' },
        { id: 'perception-verbs', section: 'Stative and non-stative uses of verbs', term: 'Perception', definition: 'appear, hear, look, notice, recognise, resemble, see, seem, smell, sound, taste' },
        { id: 'possession-verbs', section: 'Stative and non-stative uses of verbs', term: 'Possession and relationships', definition: 'belong, concern, consist, contain, cost, depend, fit, have, include, involve, own, possess, suit, weigh' },
        { id: 'other-stative-verbs', section: 'Stative and non-stative uses of verbs', term: 'Existence and other verbs', definition: 'be, exist, deserve, matter' },
        { id: 'non-stative-use', section: 'Stative and non-stative uses of verbs', term: 'Verbs describing actions', definition: 'Certains verbes statifs peuvent aussi prendre une forme continue lorsqu’ils décrivent des actions.', example: 'I think it’s important to know. (opinion) / I’m thinking about a course. (considering)' }
      ]
    }
  ];

  readonly unitTwoCategories: LessonCategory[] = [
    {
      id: 'thinking',
      title: 'Topic Vocabulary : Thinking',
      reference: 'Exercices A–C · Définitions et exemples tirés de la base de vocabulaire Unit 02.',
      exerciseSection: 'A',
      exerciseRange: 'Exercices A–C',
      wordList: [
        'assess', 'assume', 'baffle', 'biased', 'concentrate', 'consider', 'contemplate', 'cynical',
        'deduce', 'deliberate', 'dilemma', 'discriminate', 'dubious', 'estimate', 'faith', 'gather',
        'genius', 'grasp', 'guesswork', 'hunch', 'ideology', 'ingenious', 'inspiration', 'intuition',
        'justify', 'naive', 'notion', 'optimistic', 'paradox', 'pessimistic', 'plausible', 'ponder',
        'prejudiced', 'presume', 'query', 'reckon', 'sceptical', 'speculate', 'suppose'
      ]
    },
    {
      id: 'learning',
      title: 'Topic Vocabulary : Learning',
      reference: 'Exercice D · Définitions et exemples tirés de la base de vocabulaire Unit 02.',
      exerciseSection: 'D',
      exerciseRange: 'Exercice D',
      wordList: [
        'academic', 'conscientious', 'cram', 'curriculum', 'distance learning', 'graduate', 'ignorant',
        'inattentive', 'intellectual', 'intelligent', 'intensive', 'knowledgeable', 'lecture', 'mock exam',
        'plagiarise', 'self-study', 'seminar', 'special needs', 'tuition', 'tutorial'
      ]
    },
    {
      id: 'phrasal-verbs',
      title: 'Phrasal verbs',
      reference: 'Exercices E–G · Définitions tirées de la base de vocabulaire Unit 02.',
      exerciseSection: 'E',
      exerciseRange: 'Exercices E–G',
      databaseType: 'phrasal verb'
    },
    {
      id: 'collocations',
      title: 'Phrases, patterns and collocations',
      reference: 'Exercices H–K · Expressions et associations de mots de la leçon.',
      exerciseSection: 'H',
      exerciseRange: 'Exercices H–K',
      entries: [
        { id: 'account', term: 'account', definition: 'account for; (give) an account of; take account of / into account; on account of; by all accounts; on someone’s account' },
        { id: 'associate', term: 'associate', definition: 'associate something with' },
        { id: 'balance', term: 'balance', definition: 'hang in the balance; strike a balance; upset / alter / redress the balance; balance between / of; on balance; off balance' },
        { id: 'basis', term: 'basis', definition: 'basis for; on a daily / temporary basis; on the basis of / that' },
        { id: 'belief', term: 'belief', definition: 'express belief(s); belief in / that; contrary to popular belief; beyond belief; in the belief that; widely held / firm / strong belief' },
        { id: 'brain', term: 'brain', definition: 'pick someone’s brains; rack your brains; the brains behind; brainless; brainchild; brainstorm; brainwash; brainwave' },
        { id: 'conclusion', term: 'conclusion', definition: 'bring to a conclusion; come to / arrive at / reach a conclusion; jump to conclusions; in conclusion; logical / foregone conclusion' },
        { id: 'consideration', term: 'consideration', definition: 'take into consideration; give consideration to; show consideration for; under consideration; for someone’s consideration; out of consideration for' },
        { id: 'doubt', term: 'doubt', definition: 'doubt that; have doubts about; cast doubt on; raise doubts; in doubt; beyond doubt; without a doubt; open to doubt' },
        { id: 'dream', term: 'dream', definition: 'dream of / about / that; have a dream; beyond your wildest dreams; a dream come true; in your dreams; like a dream' },
        { id: 'focus', term: 'focus', definition: 'focus on; focus of / for; in / out of focus; focus group; main / primary focus' },
        { id: 'impression', term: 'impression', definition: 'give a (false) impression; do an impression of; make an impression on; under the impression that; first impressions' },
        { id: 'mental', term: 'mental', definition: 'make a mental note; mental arithmetic; mental illness; mental age; mental health' },
        { id: 'mind', term: 'mind', definition: 'make up your mind; cross your mind; bear in mind; take your mind off; bring to mind; in two minds; on your mind; state of mind' },
        { id: 'misapprehension', term: 'misapprehension', definition: 'under the misapprehension that' },
        { id: 'perspective', term: 'perspective', definition: 'put into perspective; from another perspective; in / out of perspective; a sense of perspective' },
        { id: 'principle', term: 'principle', definition: 'have principles; stick to your principles; in principle; a matter of principle; against someone’s principles' },
        { id: 'question', term: 'question', definition: 'raise the question; no question of; in question; out of the question; without question; beyond question; awkward question' },
        { id: 'sense', term: 'sense', definition: 'see sense; make sense of; have the sense to; come to your senses; common sense' },
        { id: 'side', term: 'side', definition: 'side with; take sides; see both sides; look on the bright side; by someone’s side' },
        { id: 'straight', term: 'straight', definition: 'put someone straight; set the record straight; get straight to the point; think straight; straight answer' },
        { id: 'view', term: 'view', definition: 'view something as; take a dim view of; come into view; in view of; with a view to; point of view' }
      ]
    },
    {
      id: 'idioms',
      title: 'Idioms',
      reference: 'Exercice L · Définitions tirées de la base de vocabulaire Unit 02.',
      exerciseSection: 'L',
      exerciseRange: 'Exercice L',
      databaseType: 'idiom'
    },
    {
      id: 'word-formation',
      title: 'Word formation',
      reference: 'Exercices M–O · Familles de mots de la leçon.',
      exerciseSection: 'M',
      exerciseRange: 'Exercices M–O',
      entries: [
        { id: 'assume', term: 'assume', definition: 'assumption, assuming, unassuming, assumed' },
        { id: 'believe', term: 'believe', definition: 'disbelieve, belief, disbelief, believer, believable, disbelieving, unbelievably' },
        { id: 'brilliant', term: 'brilliant', definition: 'brilliance, brilliantly' },
        { id: 'conceive', term: 'conceive', definition: 'conceptualise, concept, conception, conceptual, conceivable, inconceivably' },
        { id: 'confuse', term: 'confuse', definition: 'confusion, confused, confusingly' },
        { id: 'convince', term: 'convince', definition: 'conviction, unconvinced, unconvincingly' },
        { id: 'decide', term: 'decide', definition: 'decision, decider, decisiveness, deciding, indecisive' },
        { id: 'define', term: 'define', definition: 'definition, defined, definitive, indefinite' },
        { id: 'doubt', term: 'doubt', definition: 'doubter, doubtful, undoubted, doubtless' },
        { id: 'explain', term: 'explain', definition: 'explanation, explanatory, unexplained, inexplicable, inexplicably' },
        { id: 'imagine', term: 'imagine', definition: 'imagination, imaginings, imaginary, unimaginative' },
        { id: 'judge', term: 'judge', definition: 'judgement, judiciary, judiciousness, judicious, judicial, judgemental, judiciously' },
        { id: 'logic', term: 'logic', definition: 'illogical, illogically' },
        { id: 'opinion', term: 'opinion', definition: 'opinionated' },
        { id: 'rational', term: 'rational', definition: 'rationalise, rationalisation, rationalist, rationalism, irrationality, irrationally' },
        { id: 'reason', term: 'reason', definition: 'reasoning, reasonableness, unreasonable, reasoned, unreasonably' },
        { id: 'sane', term: 'sane', definition: 'insanity, insanely' },
        { id: 'sense', term: 'sense', definition: 'desensitise, nonsense, sensitivity, sensibility, senseless, sensible, nonsensical, sensibly, sensitive' },
        { id: 'think', term: 'think', definition: 'thought, thinker, thinking, thoughtfulness, thoughtlessness, unthinkable, thoughtful, thoughtless' },
        { id: 'wise', term: 'wise', definition: 'wisdom, unwise, unwisely' }
      ]
    }
  ];

  readonly unitThreeCategories: LessonCategory[] = [
    {
      id: 'past-time', title: 'Past time',
      reference: 'Leçon Unit 3 · Past simple, past continuous, past perfect et habitudes passées, livre p. 22–23.',
      exerciseSection: 'A', exerciseRange: 'Exercices A–J',
      entries: [
        { id: 'past-simple-actions', section: 'Past simple', term: 'Completed and repeated past actions', definition: 'Le past simple décrit les actions terminées, les habitudes passées, les vérités générales du passé et les événements principaux d’un récit.', example: 'Sony and Philips invented the CD in the early 1980s.' },
        { id: 'past-simple-emphatic', section: 'Emphatic past simple', term: 'Emphasis', definition: 'Did + base verbale souligne un contraste ou une émotion dans le passé.', example: 'They didn’t have e-mail, but they did have the telephone.' },
        { id: 'past-perfect-comparison', section: 'Past simple vs present perfect simple', term: 'Finished and continuing time periods', definition: 'Le past simple concerne une période terminée ; le present perfect, une période qui continue jusqu’au présent.', example: 'I sent an e-mail six months ago. / There have been many advances in recent years.' },
        { id: 'past-continuous-background', section: 'Past continuous', term: 'Background and actions in progress', definition: 'Le past continuous décrit une action en cours à un moment passé ou sert de contexte à un événement.', example: 'We were talking when Andrea mentioned her new website.' },
        { id: 'past-continuous-habits', section: 'Past continuous', term: 'Temporary and repeated situations', definition: 'Il peut décrire une situation temporaire, une évolution ou une habitude agaçante avec always.', example: 'When she was young, Tina was always taking things apart.' },
        { id: 'past-perfect-simple', section: 'Past perfect simple', term: 'Earlier past actions', definition: 'Le past perfect simple marque une action ou un état antérieur à un autre moment du passé.', example: 'When Dimitra called, I had managed to fix my computer.' },
        { id: 'past-perfect-continuous', section: 'Past perfect continuous', term: 'Duration before a past moment', definition: 'Le past perfect continuous insiste sur la durée d’une activité jusqu’à un moment du passé.', example: 'She’d been writing games for over ten years before she had a hit.' },
        { id: 'past-would', section: 'Past habits', term: 'Would', definition: 'Would décrit souvent des habitudes répétées, surtout dans un passé lointain, mais pas des états.', example: 'The ancient Greeks would rely on the power of slaves.' },
        { id: 'past-used-to', section: 'Past habits', term: 'Used to', definition: 'Used to décrit des habitudes ou états passés qui ne sont plus vrais.', example: 'It used to seem strange to communicate over long distances.' },
        { id: 'be-get-used-to', section: 'Be used to and get used to', term: 'Familiarity and adaptation', definition: 'Be used to signifie être habitué ; get used to décrit le processus d’adaptation.', example: 'People got used to travelling by train.' }
      ]
    }
  ];

  readonly unitFourCategories: LessonCategory[] = [
    {
      id: 'change-topic', title: 'Topic Vocabulary : Change',
      reference: 'Exercices A–C · Définitions Unit 04 tirées de la base.',
      exerciseSection: 'A', exerciseRange: 'Exercices A–C',
      wordList: ['adapt', 'adjust', 'alternate', 'alternative', 'amend', 'conservative', 'convert', 'decay', 'deteriorate', 'distort', 'dynamic', 'endure', 'evolve', 'influence', 'innovation', 'innovative', 'last', 'maintain', 'mature', 'modify', 'novel', 'persist', 'potential', 'progress', 'radical', 'refine', 'reform', 'remain', 'revolution', 'revise', 'shift', 'spoil', 'status quo', 'steady', 'substitute', 'sustain', 'switch', 'transform', 'trend', 'uniform']
    },
    {
      id: 'technology-topic', title: 'Topic Vocabulary : Technology',
      reference: 'Exercices D–E · Définitions Unit 04 tirées de la base.',
      exerciseSection: 'D', exerciseRange: 'Exercices D–E',
      wordList: ['breakthrough', 'broadband', 'click', 'complex', 'consumer electronics', 'console', 'craft', 'data', 'download', 'file', 'manual', 'network', 'nuclear', 'offline', 'online', 'primitive', 'programmer', 'resource', 'technique', 'upload']
    },
    { id: 'technology-phrasal', title: 'Phrasal verbs', reference: 'Exercices F–H · Définitions Unit 04 tirées de la base.', exerciseSection: 'F', exerciseRange: 'Exercices F–H', databaseType: 'phrasal verb' },
    { id: 'technology-collocations', title: 'Phrases, patterns and collocations', reference: 'Exercices I–K · Expressions de la leçon Unit 4.', exerciseSection: 'I', exerciseRange: 'Exercices I–K', databaseType: 'expression' },
    { id: 'technology-idioms', title: 'Idioms', reference: 'Exercice L · Idiomes de la leçon Unit 4.', exerciseSection: 'L', exerciseRange: 'Exercice L', databaseType: 'idiom' },
    { id: 'technology-word-formation', title: 'Word formation', reference: 'Exercices M–N · Familles de mots de la leçon Unit 4.', exerciseSection: 'M', exerciseRange: 'Exercices M–N', entries: [
      { id: 'continue', term: 'continue', definition: 'continual, continuous, continuing' }, { id: 'evolve', term: 'evolve', definition: 'evolving' },
      { id: 'revolt', term: 'revolt', definition: 'revolutionary' }, { id: 'flexible', term: 'flexible', definition: 'flexibility' },
      { id: 'adjust', term: 'adjust', definition: 'adjustment' }, { id: 'adapt', term: 'adapt', definition: 'adaptable' },
      { id: 'influence', term: 'influence', definition: 'influential' }, { id: 'capable', term: 'capable', definition: 'capability' },
      { id: 'alter', term: 'alter', definition: 'unaltered' }, { id: 'electric', term: 'electric', definition: 'electrifying' },
      { id: 'endure', term: 'endure', definition: 'endurance' }, { id: 'process', term: 'process', definition: 'processed' },
      { id: 'new', term: 'new', definition: 'renewable' }, { id: 'convert', term: 'convert', definition: 'conversion' },
      { id: 'place', term: 'place', definition: 'irreplaceable' }
    ] }
  ];

  readonly unitFiveCategories: LessonCategory[] = [
    { id: 'future-time', title: 'Future time', reference: 'Leçon Unit 5 · Futur simple, be going to, futur continu et futur perfect.', exerciseSection: 'A', exerciseRange: 'Exercices A–L', entries: [
      { id: 'will', section: 'Will', term: 'Predictions and future facts', definition: 'Will exprime une prédiction, un fait futur, une décision prise au moment de parler, une offre, une promesse, une demande ou un refus.', example: 'I’ll help you with the advertising campaign.' },
      { id: 'shall', section: 'Will', term: 'Offers and suggestions', definition: 'Dans une question avec I ou we, shall sert à proposer de l’aide ou une suggestion.', example: 'Shall I help? / Shall we discuss this in the morning?' },
      { id: 'going-to', section: 'Be going to', term: 'Evidence and intentions', definition: 'Be going to exprime une prédiction fondée sur des indices présents ou une intention.', example: 'Look at that wall. It’s going to fall down.' },
      { id: 'present-continuous-future', section: 'Present continuous', term: 'Arrangements', definition: 'Le present continuous s’emploie pour les arrangements futurs et certaines intentions proches.', example: 'I’m meeting Fiona on Friday.' },
      { id: 'present-simple-future', section: 'Present simple', term: 'Fixed future events', definition: 'Le present simple décrit les événements futurs fixes, notamment horaires et programmes.', example: 'The shop closes at 3 pm next Saturday.' },
      { id: 'future-perfect-simple', section: 'Future perfect simple', term: 'Completion before a future time', definition: 'Le future perfect simple décrit une situation achevée avant un moment futur.', example: 'Jake will have lost his job by the end of the week.' },
      { id: 'future-perfect-continuous', section: 'Future perfect continuous', term: 'Duration up to a future time', definition: 'Le future perfect continuous met l’accent sur la durée jusqu’à un moment futur.', example: 'I’ll have been working here for 25 years.' },
      { id: 'future-continuous', section: 'Future continuous', term: 'Future situations in progress', definition: 'Le future continuous décrit une activité en cours à un moment futur ou un événement prévu dans le cours normal des choses.', example: 'This time next week, I’ll be travelling around Russia.' }
    ] }
  ];

  readonly unitSixCategories: LessonCategory[] = [
    { id: 'time-topic', title: 'Topic Vocabulary : Time', reference: 'Exercices A–C · Définitions Unit 06 tirées de la base.', exerciseSection: 'A', exerciseRange: 'Exercices A–C', wordList: ['abrupt', 'anachronism', 'annual', 'antique', 'century', 'chronological', 'contemporary', 'decade', 'duration', 'elapse', 'era', 'eternal', 'expire', 'frequency', 'instantaneous', 'interim', 'interval', 'lapse', 'lifetime', 'long-standing', 'millennium', 'obsolete', 'overdue', 'period', 'permanent', 'phase', 'postpone', 'prior', 'prompt', 'provisional', 'punctual', 'seasonal', 'simultaneous', 'span', 'spell', 'stint', 'subsequent', 'temporary', 'timely', 'vintage'] },
    { id: 'work-topic', title: 'Topic Vocabulary : Work', reference: 'Exercices D–E · Définitions Unit 06 tirées de la base.', exerciseSection: 'D', exerciseRange: 'Exercices D–E', wordList: ['civil service', 'client', 'colleague', 'consultant', 'effective', 'efficient', 'executive', 'fire', 'headhunt', 'leave', 'marketing', 'multinational', 'promotion', 'prospects', 'public sector', 'private sector', 'recruit', 'redundant', 'sack', 'strike', 'union'] },
    { id: 'time-work-phrasal', title: 'Phrasal verbs', reference: 'Exercices F–H · Définitions Unit 06 tirées de la base.', exerciseSection: 'F', exerciseRange: 'Exercices F–H', databaseType: 'phrasal verb' },
    { id: 'time-work-collocations', title: 'Phrases, patterns and collocations', reference: 'Exercices I–K · Expressions de la leçon Unit 6.', exerciseSection: 'I', exerciseRange: 'Exercices I–K', entries: [
      { id: 'office', term: 'office', definition: 'in office; out of office' }, { id: 'end', term: 'end', definition: 'at the end; for hours on end; in the end' },
      { id: 'time', term: 'time', definition: 'any day/time now; at the same time; in time; on time; time and again' },
      { id: 'work', term: 'work', definition: 'at work; out of work; work experience; work-life balance' },
      { id: 'clock', term: 'clock', definition: 'against the clock; around the clock; clock in/out' }
    ] },
    { id: 'time-work-idioms', title: 'Idioms', reference: 'Exercice L · Idiomes de la leçon Unit 6.', exerciseSection: 'L', exerciseRange: 'Exercice L', databaseType: 'idiom' },
    { id: 'time-work-word-formation', title: 'Word formation', reference: 'Exercices M–O · Familles de mots de la leçon Unit 6.', exerciseSection: 'M', exerciseRange: 'Exercices M–O', entries: [
      { id: 'expect', term: 'expect', definition: 'expectation, unexpected, expectant' }, { id: 'last', term: 'last', definition: 'last, lasting, outlast' },
      { id: 'employ', term: 'employ', definition: 'employee, employer, employment, unemployment' }, { id: 'compete', term: 'compete', definition: 'competition, competitor, competitive' },
      { id: 'apply', term: 'apply', definition: 'applicant, application, applicable' }, { id: 'period', term: 'period', definition: 'periodic, periodically' }
    ] }
  ];

  readonly unitSevenCategories: LessonCategory[] = [
    { id: 'passives', title: 'Passives and causatives', reference: 'Leçon Unit 7 · Passive, impersonal passive et causatifs.', exerciseSection: 'A', exerciseRange: 'Exercices A–J', entries: [
      { id: 'passive-use', section: 'The passive', term: 'When to use the passive', definition: 'On emploie le passif lorsque l’agent est inconnu, évident ou sans importance, pour mettre l’information nouvelle en relief, ou dans un style formel.', example: 'The car was stolen at approximately 1:30 am.' },
      { id: 'passive-form', section: 'The passive', term: 'Form', definition: 'be + past participle ; les temps et aspects sont portés par be.', example: 'The XL500 was designed with young families in mind.' },
      { id: 'impersonal-passive', section: 'Impersonal passive', term: 'It is said / thought that', definition: 'It + passive verb + that-clause permet de rapporter une opinion ou une information de façon impersonnelle.', example: 'It is thought that the railway will provide jobs.' },
      { id: 'passive-infinitive', section: 'Impersonal passive', term: 'Subject + passive + infinitive', definition: 'La structure sujet + passif + infinitif rapporte ce que l’on croit ou annonce au sujet d’une personne ou d’une chose.', example: 'Tourism is expected to become a major part of the economy.' },
      { id: 'causative-have', section: 'Causatives', term: 'Have something done', definition: 'Have + object + past participle indique qu’on fait réaliser une action par quelqu’un.', example: 'I had my car repaired.' },
      { id: 'causative-get', section: 'Causatives', term: 'Get someone to do something', definition: 'Get + person + to-infinitive signifie persuader ou demander à quelqu’un de faire quelque chose.', example: 'We got the company to come out.' },
      { id: 'causative-make', section: 'Causatives', term: 'Make / let / have', definition: 'Make + object + infinitif sans to signifie obliger ; let signifie autoriser ; have demande à quelqu’un de faire quelque chose.' }
    ] }
  ];

  readonly unitEightCategories: LessonCategory[] = [
    { id: 'movement-topic', title: 'Topic Vocabulary : Movement', reference: 'Exercices A–C · Définitions Unit 08 tirées de la base.', exerciseSection: 'A', exerciseRange: 'Exercices A–C', wordList: ['accelerate', 'approach', 'ascend', 'bounce', 'clamber', 'clench', 'clutch', 'crawl', 'creep', 'dash', 'descend', 'drift', 'emigrate', 'float', 'flow', 'fumble', 'gesture', 'grab', 'grasp', 'hop', 'immigrant', 'jog', 'leap', 'march', 'migrate', 'punch', 'refugee', 'roam', 'roll', 'rotate', 'route', 'sink', 'skid', 'skip', 'slide', 'slip', 'step', 'stride', 'trip', 'velocity', 'wander', 'wave'] },
    { id: 'transport-topic', title: 'Topic Vocabulary : Transport', reference: 'Exercices D–E · Définitions Unit 08 tirées de la base.', exerciseSection: 'D', exerciseRange: 'Exercices D–E', wordList: ['airline', 'cargo', 'carriage', 'charter', 'commute', 'destination', 'hiker', 'hitchhiker', 'jet lag', 'legroom', 'load', 'passerby', 'pedestrian', 'pier', 'pilot', 'quay', 'return fare', 'round trip', 'steer', 'steward'] },
    { id: 'movement-phrasal', title: 'Phrasal verbs', reference: 'Exercices F–H · Définitions Unit 08 tirées de la base.', exerciseSection: 'F', exerciseRange: 'Exercices F–H', databaseType: 'phrasal verb' },
    { id: 'movement-collocations', title: 'Phrases, patterns and collocations', reference: 'Exercices I–J · Expressions de la leçon Unit 8.', exerciseSection: 'I', exerciseRange: 'Exercices I–J', entries: [
      { id: 'make-way', term: 'way', definition: 'make your way; find your way; on the way; out of the way; by way of' },
      { id: 'take-place', term: 'place', definition: 'take place; in place; out of place; take someone’s place' },
      { id: 'heavy-traffic', term: 'traffic', definition: 'heavy traffic; traffic jam; traffic lights' },
      { id: 'foot', term: 'foot', definition: 'on foot; at someone’s feet; get cold feet' }
    ] },
    { id: 'movement-idioms', title: 'Idioms', reference: 'Exercice K · Idiomes de la leçon Unit 8.', exerciseSection: 'K', exerciseRange: 'Exercice K', entries: [
      { id: 'as-crow-flies', term: 'as the crow flies', definition: 'par le chemin le plus court, en ligne droite' },
      { id: 'middle-nowhere', term: 'in the middle of nowhere', definition: 'dans un endroit isolé, loin de tout' },
      { id: 'make-dash', term: 'make a dash for', definition: 'se précipiter vers' },
      { id: 'stop-tracks', term: 'stop dead in your tracks', definition: 's’arrêter net' },
      { id: 'beaten-track', term: 'off the beaten track', definition: 'à l’écart des itinéraires habituels' },
      { id: 'follow-nose', term: 'follow your nose', definition: 'continuer tout droit ou suivre son instinct' },
      { id: 'lose-way', term: 'lose your way', definition: 'se perdre' },
      { id: 'stone-throw', term: 'a stone’s throw away', definition: 'tout près' },
      { id: 'scenic-route', term: 'the scenic route', definition: 'un itinéraire pittoresque' },
      { id: 'short-cut', term: 'take a short cut', definition: 'prendre un raccourci' }
    ] },
    { id: 'movement-word-formation', title: 'Word formation', reference: 'Exercices L–O · Familles de mots de la leçon Unit 8.', exerciseSection: 'L', exerciseRange: 'Exercices L–O', entries: [
      { id: 'access', term: 'access', definition: 'accessible, inaccessible, accessibility' }, { id: 'mobile', term: 'mobile', definition: 'mobility, immobilise, immobile' },
      { id: 'come', term: 'come', definition: 'overcome, forthcoming, newcomer' }, { id: 'go', term: 'go', definition: 'ongoing, undergo, outgoing' },
      { id: 'move', term: 'move', definition: 'movement, movable, removal, motionless' }, { id: 'rapid', term: 'rapid', definition: 'rapidly, rapidity' },
      { id: 'transit', term: 'transit', definition: 'transition, transitional, transient' }
    ] }
  ];

  readonly unitNineCategories: LessonCategory[] = [
    { id: 'movement-idioms', title: 'Unit 9', reference: 'Leçon Unit 9', exerciseSection: 'A', exerciseRange: 'Exercices A–J', entries: [
      { id: 'passive-use', section: 'The passive', term: 'When to use the passive', definition: 'On emploie le passif lorsque l’agent est inconnu, évident ou sans importance, pour mettre l’information nouvelle en relief, ou dans un style formel.', example: 'The car was stolen at approximately 1:30 am.' }
    ] }
  ];

  readonly unitTenCategories: LessonCategory[] = [
    { id: 'movement-idioms', title: 'Unit 10', reference: 'Leçon Unit 10', exerciseSection: 'A', exerciseRange: 'Exercices A–J', entries: [
      { id: 'unit-10-entry', section: 'Grammar Section', term: 'New Term', definition: 'Definition text', example: 'Example sentence' }
    ] }
  ];

  readonly unitElevenCategories: LessonCategory[] = [
    { id: 'movement-idioms', title: 'Unit 11', reference: 'Leçon Unit 11', exerciseSection: 'A', exerciseRange: 'Exercices A–J', entries: [
      { id: 'unit-11-entry', section: 'Grammar Section', term: 'New Term', definition: 'Definition text', example: 'Example sentence' }
    ] }
  ];

  readonly unitTwelveCategories: LessonCategory[] = [
    { id: 'movement-idioms', title: 'Unit 12', reference: 'Leçon Unit 12', exerciseSection: 'A', exerciseRange: 'Exercices A–J', entries: [
      { id: 'unit-12-entry', section: 'Grammar Section', term: 'New Term', definition: 'Definition text', example: 'Example sentence' }
    ] }
  ];

  readonly unitThirteenCategories: LessonCategory[] = [
    { id: 'movement-idioms', title: 'Unit 13', reference: 'Leçon Unit 13', exerciseSection: 'A', exerciseRange: 'Exercices A–J', entries: [
      { id: 'unit-13-entry', section: 'Grammar Section', term: 'New Term', definition: 'Definition text', example: 'Example sentence' }
    ] }
  ];

  readonly unitFourteenCategories: LessonCategory[] = [
    { id: 'movement-idioms', title: 'Unit 14', reference: 'Leçon Unit 14', exerciseSection: 'A', exerciseRange: 'Exercices A–J', entries: [
      { id: 'unit-14-entry', section: 'Grammar Section', term: 'New Term', definition: 'Definition text', example: 'Example sentence' }
    ] }
  ];

  readonly unitFifteenCategories: LessonCategory[] = [
    { id: 'movement-idioms', title: 'Unit 15', reference: 'Leçon Unit 15', exerciseSection: 'A', exerciseRange: 'Exercices A–J', entries: [
      { id: 'unit-15-entry', section: 'Grammar Section', term: 'New Term', definition: 'Definition text', example: 'Example sentence' }
    ] }
  ];

  readonly unitSixteenCategories: LessonCategory[] = [
    { id: 'movement-idioms', title: 'Unit 16', reference: 'Leçon Unit 16', exerciseSection: 'A', exerciseRange: 'Exercices A–J', entries: [
      { id: 'unit-16-entry', section: 'Grammar Section', term: 'New Term', definition: 'Definition text', example: 'Example sentence' }
    ] }
  ];

  readonly unitSeventeenCategories: LessonCategory[] = [
    { id: 'movement-idioms', title: 'Unit 17', reference: 'Leçon Unit 17', exerciseSection: 'A', exerciseRange: 'Exercices A–J', entries: [
      { id: 'unit-17-entry', section: 'Grammar Section', term: 'New Term', definition: 'Definition text', example: 'Example sentence' }
    ] }
  ];

  readonly unitEighteenCategories: LessonCategory[] = [
    { id: 'movement-idioms', title: 'Unit 18', reference: 'Leçon Unit 18', exerciseSection: 'A', exerciseRange: 'Exercices A–J', entries: [
      { id: 'unit-18-entry', section: 'Grammar Section', term: 'New Term', definition: 'Definition text', example: 'Example sentence' }
    ] }
  ];

  readonly unitNineteenCategories: LessonCategory[] = [
    { id: 'movement-idioms', title: 'Unit 19', reference: 'Leçon Unit 19', exerciseSection: 'A', exerciseRange: 'Exercices A–J', entries: [
      { id: 'unit-19-entry', section: 'Grammar Section', term: 'New Term', definition: 'Definition text', example: 'Example sentence' }
    ] }
  ];

  readonly unitTwentyCategories: LessonCategory[] = [
    { id: 'movement-idioms', title: 'Unit 20', reference: 'Leçon Unit 20', exerciseSection: 'A', exerciseRange: 'Exercices A–J', entries: [
      { id: 'unit-20-entry', section: 'Grammar Section', term: 'New Term', definition: 'Definition text', example: 'Example sentence' }
    ] }
  ];

  readonly unitTwentyOneCategories: LessonCategory[] = [
    { id: 'movement-idioms', title: 'Unit 21', reference: 'Leçon Unit 21', exerciseSection: 'A', exerciseRange: 'Exercices A–J', entries: [
      { id: 'unit-21-entry', section: 'Grammar Section', term: 'New Term', definition: 'Definition text', example: 'Example sentence' }
    ] }
  ];

  readonly unitTwentyTwoCategories: LessonCategory[] = [
    { id: 'movement-idioms', title: 'Unit 22', reference: 'Leçon Unit 22', exerciseSection: 'A', exerciseRange: 'Exercices A–J', entries: [
      { id: 'unit-22-entry', section: 'Grammar Section', term: 'New Term', definition: 'Definition text', example: 'Example sentence' }
    ] }
  ];

  readonly unitTwentyThreeCategories: LessonCategory[] = [
    { id: 'movement-idioms', title: 'Unit 23', reference: 'Leçon Unit 23', exerciseSection: 'A', exerciseRange: 'Exercices A–J', entries: [
      { id: 'unit-23-entry', section: 'Grammar Section', term: 'New Term', definition: 'Definition text', example: 'Example sentence' }
    ] }
  ];

  readonly unitTwentyFourCategories: LessonCategory[] = [
    { id: 'movement-idioms', title: 'Unit 24', reference: 'Leçon Unit 24', exerciseSection: 'A', exerciseRange: 'Exercices A–J', entries: [
      { id: 'unit-24-entry', section: 'Grammar Section', term: 'New Term', definition: 'Definition text', example: 'Example sentence' }
    ] }
  ];

  readonly unitTwentyFiveCategories: LessonCategory[] = [
    { id: 'movement-idioms', title: 'Unit 25', reference: 'Leçon Unit 25', exerciseSection: 'A', exerciseRange: 'Exercices A–J', entries: [
      { id: 'unit-25-entry', section: 'Grammar Section', term: 'New Term', definition: 'Definition text', example: 'Example sentence' }
    ] }
  ];

  readonly unitTwentySixCategories: LessonCategory[] = [
    { id: 'movement-idioms', title: 'Unit 26', reference: 'Leçon Unit 26', exerciseSection: 'A', exerciseRange: 'Exercices A–J', entries: [
      { id: 'unit-26-entry', section: 'Grammar Section', term: 'New Term', definition: 'Definition text', example: 'Example sentence' }
    ] }
  ];

  
  get categories(): LessonCategory[] {
    return {
      1: this.unitOneCategories,
      2: this.unitTwoCategories,
      3: this.unitThreeCategories,
      4: this.unitFourCategories,
      5: this.unitFiveCategories,
      6: this.unitSixCategories,
      7: this.unitSevenCategories,
      8: this.unitEightCategories,
      9: this.unitNineCategories,
      10: this.unitTenCategories,
      11: this.unitElevenCategories,
      12: this.unitTwelveCategories,
      13: this.unitThirteenCategories,
      14: this.unitFourteenCategories,
      15: this.unitFifteenCategories,
      16: this.unitSixteenCategories,
      17: this.unitSeventeenCategories,
      18: this.unitEighteenCategories,
      19: this.unitNineteenCategories,
      20: this.unitTwentyCategories,
      21: this.unitTwentyOneCategories,
      22: this.unitTwentyTwoCategories,
      23: this.unitTwentyThreeCategories,
      24: this.unitTwentyFourCategories,
      25: this.unitTwentyFiveCategories,
      26: this.unitTwentySixCategories
    }[this.currentUnit];
  }

  selectedCategory = this.unitTwoCategories[0];
  entries: LessonEntry[] = [];
  loading = true;
  loadError = false;
  private unitWords: SimpleWord[] = [];

  get exerciseLink(): string[] {
    return ['/exercises'];
  }

  get exerciseQueryParams(): { unit: number; section?: string } {
    if (this.currentUnit === 1 || this.currentUnit === 3) return { unit: this.currentUnit };
    return { unit: this.currentUnit, section: this.selectedCategory.exerciseSection };
  }

  lessonUnitLink(unit: UnitId): string[] {
    const categories = this.categoriesForUnit(unit);
    return ['/lessons', String(unit), categories[0].id];
  }


  private categoriesForUnit(unit: UnitId): LessonCategory[] {
  return {
    1: this.unitOneCategories,
    2: this.unitTwoCategories,
    3: this.unitThreeCategories,
    4: this.unitFourCategories,
    5: this.unitFiveCategories,
    6: this.unitSixCategories,
    7: this.unitSevenCategories,
    8: this.unitEightCategories,
    9: this.unitNineCategories,
    10: this.unitTenCategories,
    11: this.unitElevenCategories,
    12: this.unitTwelveCategories,
    13: this.unitThirteenCategories,
    14: this.unitFourteenCategories,
    15: this.unitFifteenCategories,
    16: this.unitSixteenCategories,
    17: this.unitSeventeenCategories,
    18: this.unitEighteenCategories,
    19: this.unitNineteenCategories,
    20: this.unitTwentyCategories,
    21: this.unitTwentyOneCategories,
    22: this.unitTwentyTwoCategories,
    23: this.unitTwentyThreeCategories,
    24: this.unitTwentyFourCategories,
    25: this.unitTwentyFiveCategories,
    26: this.unitTwentySixCategories
  }[unit as number] || [];
}


  lessonCategoryLink(category: LessonCategory): string[] {
    return ['/lessons', String(this.currentUnit), category.id];
  }

  get exerciseRoute(): string[] {
    return ['/exercises'];
  }

  get reviewRoute(): string[] {
    return ['/review', String(Math.ceil(this.currentUnit / 2))];
  }

  constructor(
    private route: ActivatedRoute,
    private wordService: WordService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(params => {
      const requestedUnit = Number(params.get('unit'));
      this.currentUnit = [1, 2, 3, 4, 5, 6, 7, 8].includes(requestedUnit) ? requestedUnit as UnitId : 1;
      const requestedId = params.get('category') as LessonCategoryId | null;
      this.selectedCategory = this.categories.find(category => category.id === requestedId) ?? this.categories[0];
      this.loading = [2, 4, 6, 8].includes(this.currentUnit);
      this.loadError = false;
      this.unitWords = [];
      this.updateEntries();
      this.changeDetector.markForCheck();
      if ([2, 4, 6, 8].includes(this.currentUnit)) this.loadUnitWords(this.currentUnit);
    });
  }

  private loadUnitWords(unit: UnitId) {
    this.wordService.getAllWords('All', `Unit 0${unit}`, 'All', 'All')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: words => {
          this.unitWords = words;
          this.loading = false;
          this.loadError = false;
          this.updateEntries();
          this.changeDetector.markForCheck();
        },
        error: () => {
          this.loading = false;
          this.loadError = true;
          this.updateEntries();
          this.changeDetector.markForCheck();
        }
      });
  }

  get visibleEntries(): LessonEntry[] {
    return this.entries;
  }

  get visibleEntryGroups(): LessonEntryGroup[] {
    const groups: LessonEntryGroup[] = [];
    for (const entry of this.visibleEntries) {
      const currentGroup = groups[groups.length - 1];
      if (!currentGroup || currentGroup.title !== entry.section) {
        groups.push({ title: entry.section, entries: [entry] });
      } else {
        currentGroup.entries.push(entry);
      }
    }
    return groups;
  }

  private updateEntries() {
    const category = this.selectedCategory;
    if (this.currentUnit === 1 || this.currentUnit === 3) {
      this.entries = category.entries ?? [];
      return;
    }
    if (category.entries) {
      this.entries = category.entries;
      return;
    }

    if (category.databaseType) {
      this.entries = this.unitWords
        .filter(word => word.type.toLocaleLowerCase() === category.databaseType)
        .map(word => this.toLessonEntry(word))
        .sort((a, b) => a.term.localeCompare(b.term));
      return;
    }

    const allowedWords = new Set((category.wordList ?? []).map(word => this.normalize(word)));
    this.entries = this.unitWords
      .filter(word => allowedWords.has(this.normalize(word.word)))
      .map(word => this.toLessonEntry(word))
      .sort((a, b) => a.term.localeCompare(b.term));
  }

  private toLessonEntry(word: SimpleWord): LessonEntry {
    return {
      id: String(word.id),
      term: word.word,
      partOfSpeech: word.type,
      definition: word.definition,
      example: word.example_sentence
    };
  }

  private normalize(value: string): string {
    return value.toLocaleLowerCase().replace(/[^a-z]/g, '');
  }
}