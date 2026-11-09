import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface ReviewQuestion {
  number: number;
  parts: string[];
  answers: string[];
  options?: string[];
  marks: number;
}

interface ReviewSection {
  id: string;
  title: string;
  instruction: string;
  questions: ReviewQuestion[];
}

@Component({
  selector: 'app-review-one',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './review-one.html',
  styleUrls: ['./review-one.scss']
})
export class ReviewOneComponent {
  readonly unit = 1;
  private readonly reviewOneSections: ReviewSection[] = [
    {
      id: 'A',
      title: 'Word formation',
      instruction: 'Use the word in capitals to form a word that fits in each gap.',
      questions: [
        { number: 1, parts: ['Students learning English are sometimes asked to give an ', ' as to what a word means. (EXPLAIN)'], answers: ['explanation'], marks: 1 },
        { number: 2, parts: ['They are asked to provide a ', '. (DEFINE)'], answers: ['definition'], marks: 1 },
        { number: 3, parts: ['The ', ' is that if you know a word, you can define it. (ASSUME)'], answers: ['assumption'], marks: 1 },
        { number: 4, parts: ['', ', that might make sense, but it is not always reasonable. (LOGIC)'], answers: ['Logically'], marks: 1 },
        { number: 5, parts: ['It is not always ', ' to assume that. (REASON)'], answers: ['reasonable'], marks: 1 },
        { number: 6, parts: ['Native speakers use some phrases without much ', '. (THINK)'], answers: ['thought'], marks: 1 },
        { number: 7, parts: ['This can lead to ', ' when you ask them to define a phrase. (CONFUSE)'], answers: ['confusion'], marks: 1 },
        { number: 8, parts: ["Take the ", " of 'zeitgeist', for example. (CONCEIVE)"], answers: ['concept'], marks: 1 },
        { number: 9, parts: ["It's ", ' much easier to use than to define. (DOUBT)'], answers: ['undoubtedly'], marks: 1 },
        { number: 10, parts: ['It may be more ', ' to test understanding in other ways. (SENSE)'], answers: ['sensible'], marks: 1 }
      ]
    },
    {
      id: 'B',
      title: 'Key word transformations',
      instruction: 'Complete the second sentence using the word given. Keep that word unchanged; use 3–8 words.',
      questions: [
        { number: 11, parts: ["That's the last time I ", ' when I make a decision. (account)'], answers: ["forget to take Darren's views into account", 'forget to take into account Darren’s views', 'forget to take account of Darren’s views'], marks: 2 },
        { number: 12, parts: ['How on earth ', ' such brilliant plots for her novels? (come)'], answers: ['does she come up with'], marks: 2 },
        { number: 13, parts: ["I'm sure Nancy ", ' that the party starts at nine. (impression)'], answers: ['is still under the impression'], marks: 2 },
        { number: 14, parts: ['Sean, ', ' yet what you’re doing this evening? (mind)'], answers: ['have you made up your mind', 'have you made your mind up'], marks: 2 },
        { number: 15, parts: ['I told Jeanne ', ' that she’d be supportive. (belief)'], answers: ['in the belief', 'in the mistaken belief'], marks: 2 },
        { number: 16, parts: ['Your staying out all night with your friends ', ', I’m afraid. (question)'], answers: ['is out of the question'], marks: 2 },
        { number: 17, parts: ["I'm glad ", ' and agree that your parents are right. (senses)'], answers: ["you've now come to your senses", "you've come to your senses"], marks: 2 },
        { number: 18, parts: ['I think ', ' that this is all a conspiracy against you. (misapprehension)'], answers: ['you are under the misapprehension'], marks: 2 }
      ]
    },
    {
      id: 'C',
      title: 'Idioms',
      instruction: 'Write one word in each gap.',
      questions: [
        { number: 19, parts: ['You have to have your ', ' about you when driving through Birmingham.'], answers: ['wits'], marks: 1 },
        { number: 20, parts: ['It is a typical example of not seeing the ', ' for the trees.'], answers: ['wood'], marks: 1 },
        { number: 21, parts: ['Bill Denver? That name rings a ', '.'], answers: ['bell'], marks: 1 },
        { number: 22, parts: ["Don't let success go to your ", '.'], answers: ['head'], marks: 1 },
        { number: 23, parts: ['We were kept completely in the ', ' about what was going on.'], answers: ['dark'], marks: 1 },
        { number: 24, parts: ['Am I going round the ', '?'], answers: ['bend'], marks: 1 },
        { number: 25, parts: ["He doesn't have a ", ' to stand on.'], answers: ['leg'], marks: 1 },
        { number: 26, parts: ["Dawn's a bit slow on the ", ' sometimes.'], answers: ['uptake'], marks: 1 }
      ]
    },
    {
      id: 'D',
      title: 'Phrasal verbs',
      instruction: 'Choose the correct word to complete each phrasal verb.',
      questions: [
        { number: 27, parts: ['We’re still trying to ', ' together exactly what went wrong.'], answers: ['piece'], options: ['part', 'piece', 'set'], marks: 1 },
        { number: 28, parts: ["It's too much information for me to ", ' in in one go.'], answers: ['take'], options: ['take', 'read', 'get'], marks: 1 },
        { number: 29, parts: ["You'd better ", ' up a very good excuse.'], answers: ['think'], options: ['create', 'think', 'work'], marks: 1 },
        { number: 30, parts: ['Let me mull this ', ' for a while.'], answers: ['over'], options: ['about', 'in', 'over'], marks: 1 },
        { number: 31, parts: ["I think she's ", ' around to the idea now.'], answers: ['come'], options: ['come', 'made', 'taken'], marks: 1 },
        { number: 32, parts: ['You should face up ', ' the fact that our relationship is over.'], answers: ['to'], options: ['on', 'with', 'to'], marks: 1 },
        { number: 33, parts: ['We’re still trying to ', ' out how the burglars got in.'], answers: ['figure'], options: ['figure', 'think', 'guess'], marks: 1 },
        { number: 34, parts: ["I'm going to have to ", ' up on what all the road signs mean.'], answers: ['swot'], options: ['learn', 'swot', 'look'], marks: 1 }
      ]
    },
    {
      id: 'E',
      title: 'Multiple choice',
      instruction: 'Choose the correct answer.',
      questions: [
        { number: 35, parts: ["I'm in a real ", ' and I don’t know what to do.'], answers: ['A · dilemma'], options: ['A · dilemma', 'B · paradox', 'C · query', 'D · hunch'], marks: 1 },
        { number: 36, parts: ['They’re staying in rented accommodation for the time ', '.'], answers: ['D · being'], options: ['A · going', 'B · making', 'C · doing', 'D · being'], marks: 1 },
        { number: 37, parts: ['Is it really the first time ', ' first class?'], answers: ['C · you’ve ever flown'], options: ['A · you ever fly', 'B · you’re ever flying', 'C · you’ve ever flown', 'D · you’ve ever been flying'], marks: 1 },
        { number: 38, parts: ['', ' getting a pet tarantula?'], answers: ['B · Is Claire really thinking of'], options: ['A · Does Claire really think of', 'B · Is Claire really thinking of', 'C · Has Claire really thought that', 'D · Has Claire really been thinking that'], marks: 1 },
        { number: 39, parts: ['', ' Alan for hours but he just doesn’t answer his mobile.'], answers: ['D · I’ve been calling'], options: ['A · I call', 'B · I’m calling', 'C · I’ve called', 'D · I’ve been calling'], marks: 1 },
        { number: 40, parts: ['Looking at your CV, I ', ' you used to live in Australia.'], answers: ['A · gather'], options: ['A · gather', 'B · do gather', 'C · am gathering', 'D · have gathered'], marks: 1 },
        { number: 41, parts: ['I ', ' it’s going to snow tonight, don’t you?'], answers: ['C · reckon'], options: ['A · speculate', 'B · reflect', 'C · reckon', 'D · ponder'], marks: 1 },
        { number: 42, parts: ["I've ", ' started reading it!'], answers: ['B · just'], options: ['A · even', 'B · just', 'C · still', 'D · already'], marks: 1 }
      ]
    }
  ];

  private readonly reviewTwoSections: ReviewSection[] = [
    {
      id: 'A', title: 'Word formation', instruction: 'Use the word in capitals to form a word that fits each gap.',
      questions: [
        { number: 1, parts: ["Sir Clive Sinclair has an ", ' place in the minds of British people. (ENDURE)'], answers: ['enduring'], marks: 1 },
        { number: 2, parts: ['He ', ' home computing with the ZX series. (REVOLT)'], answers: ['revolutionised'], marks: 1 },
        { number: 3, parts: ['His ', ' to the car, the C5, failed to capture the public imagination. (ALTER)'], answers: ['alternative'], marks: 1 },
        { number: 4, parts: ['The ZX Spectrum was a successful ', ' to the ZX81. (PLACE)'], answers: ['replacement'], marks: 1 },
        { number: 5, parts: ['Despite limited ', ' they allowed people to play games at home. (CAPABLE)'], answers: ['capability', 'capabilities'], marks: 1 },
        { number: 6, parts: ['They introduced people to the word ', '. (PROCESS)'], answers: ['processor'], marks: 1 },
        { number: 7, parts: ['The C5 ran on ', '. (ELECTRIC)'], answers: ['electricity'], marks: 1 },
        { number: 8, parts: ["Sinclair's attempt to ", ' transport failed. (MODERN)'], answers: ['modernise'], marks: 1 },
        { number: 9, parts: ['It was ', ' criticised in the press. (PERSIST)'], answers: ['persistently'], marks: 1 },
        { number: 10, parts: ['Production was ', ' in August 1985. (CONTINUE)'], answers: ['discontinued'], marks: 1 }
      ]
    },
    {
      id: 'B', title: 'Past tenses', instruction: 'Choose the correct word or phrase.',
      questions: [
        { number: 11, parts: ['When I ', ' Marty, he was chatting outside the bank.'], answers: ['A · saw'], options: ['A · saw', 'B · was seeing'], marks: 1 },
        { number: 12, parts: ['Jason was not interested because he ', ' it.'], answers: ['B · had already seen'], options: ['A · already saw', 'B · had already seen'], marks: 1 },
        { number: 13, parts: ['It was the first time I ', ' Alec use such bad language.'], answers: ['C · had heard'], options: ['A · heard', 'C · had heard'], marks: 1 },
        { number: 14, parts: ['My grandfather ', ' a good tennis player.'], answers: ['C · used to be'], options: ['A · would be', 'C · used to be'], marks: 1 },
        { number: 15, parts: ['I ', ' really pleased when my little brother was born.'], answers: ['A · was'], options: ['A · was', 'B · have been'], marks: 1 },
        { number: 16, parts: ['Tim ', ' into fights at school when he was a kid.'], answers: ['A · was always getting'], options: ['A · was always getting', 'B · had always got'], marks: 1 },
        { number: 17, parts: ['The dog ', ' in the mud, so he was filthy.'], answers: ['A · had been playing'], options: ['A · had been playing', 'B · played'], marks: 1 },
        { number: 18, parts: ['A week into our camping holiday, we ', ' in the open air.'], answers: ['D · were used to cooking'], options: ['A · used to cook', 'D · were used to cooking'], marks: 1 }
      ]
    },
    {
      id: 'C', title: 'Key word transformations', instruction: 'Complete using the word given; do not change it. Use 3–8 words.',
      questions: [
        { number: 19, parts: ["Isn't it about time ", ' the living room? (up)'], answers: ['we did up'], marks: 2 },
        { number: 20, parts: ["What's ", ' you advice if you won’t listen? (use)'], answers: ['the use of me offering', 'the use of my offering'], marks: 2 },
        { number: 21, parts: ['Kevin has ', ' he got out of prison. (leaf)'], answers: ['turned over a new leaf since'], marks: 2 },
        { number: 22, parts: ["It's ", ' it because it won’t make any difference. (good)'], answers: ['no good complaining to me about'], marks: 2 },
        { number: 23, parts: ['You are ', ', so don’t waste time. (clock)'], answers: ['working against the clock'], marks: 2 },
        { number: 24, parts: ['Carol couldn’t believe it when her dream ', ' after so long. (reality)'], answers: ['became a reality'], marks: 2 },
        { number: 25, parts: ['I often ', ' his twin brother, Michael. (mix)'], answers: ['mix Sean up with', 'mix up Sean with'], marks: 2 },
        { number: 26, parts: ['Would you like to ', ' the Prime Minister? (places)'], answers: ['change places with', 'swap places with', 'trade places with'], marks: 2 }
      ]
    },
    {
      id: 'D', title: 'Prepositions', instruction: 'Write one word in each gap.',
      questions: [
        { number: 27, parts: ['Johnson was ', ' the lead until the final bend.'], answers: ['in'], marks: 1 },
        { number: 28, parts: ['The conference room is ', ' use at the moment.'], answers: ['in'], marks: 1 },
        { number: 29, parts: ['The Internet provides access ', ' an incredible amount of information.'], answers: ['to'], marks: 1 },
        { number: 30, parts: ["Grandad's health had changed ", ' the better.'], answers: ['for'], marks: 1 },
        { number: 31, parts: ['The meeting will be held ', ' a later date.'], answers: ['at'], marks: 1 },
        { number: 32, parts: ["Don't believe everything you read ", ' the Web.'], answers: ['on'], marks: 1 },
        { number: 33, parts: ["Nikki wouldn't have hurt your feelings ", ' purpose.'], answers: ['on'], marks: 1 },
        { number: 34, parts: ['The champion has been ', ' very good form recently.'], answers: ['in', 'on'], marks: 1 }
      ]
    },
    {
      id: 'E', title: 'Multiple choice', instruction: 'Choose the correct answer.',
      questions: [
        { number: 35, parts: ['When Josh phoned, he sounded like he ', ' quite a shock.'], answers: ['B · had had'], options: ['A · had', 'B · had had', 'C · had been having', 'D · would have'], marks: 1 },
        { number: 36, parts: ['Just as you arrived, I ', ' ready to go out.'], answers: ['D · was getting'], options: ['A · have got', 'B · would get', 'C · have been getting', 'D · was getting'], marks: 1 },
        { number: 37, parts: ['The computer has had an enormous ', ' on the way we work.'], answers: ['B · influence'], options: ['A · impression', 'B · influence', 'C · change', 'D · alteration'], marks: 1 },
        { number: 38, parts: ['Dinner yesterday was the first time I ', ' octopus.'], answers: ['D · had eaten'], options: ['A · was eating', 'B · have eaten', 'C · have been eating', 'D · had eaten'], marks: 1 },
        { number: 39, parts: ['Make sure you ', ' up the data on your computer.'], answers: ['A · back'], options: ['A · back', 'B · copy', 'C · store', 'D · save'], marks: 1 },
        { number: 40, parts: ['The Minister was accused of ', ' the truth.'], answers: ['A · distorting'], options: ['A · distorting', 'B · revising', 'C · reforming', 'D · shifting'], marks: 1 },
        { number: 41, parts: ['That painting looks out of ', ' in our living room.'], answers: ['C · place'], options: ['A · room', 'B · space', 'C · place', 'D · spot'], marks: 1 },
        { number: 42, parts: ['I woke up late because I ', ' about it all night.'], answers: ['C · had been worrying'], options: ['A · worried', 'B · have been worrying', 'C · had been worrying', 'D · had worried'], marks: 1 }
      ]
    }
  ];

  private readonly reviewThreeSections: ReviewSection[] = [
    { id: 'A', title: 'Word formation', instruction: 'Use the word in capitals to form a word that fits each gap.', questions: [
      { number: 1, parts: ['', ' at Shepparton Carpets voted to continue industrial action. (WORK)'], answers: ['Workers'], marks: 1 },
      { number: 2, parts: ['They refused to work ', ' until the dispute was settled. (TIME)'], answers: ['overtime'], marks: 1 },
      { number: 3, parts: ['We urge ', ' to reconsider their proposals. (MANAGE)'], answers: ['management', 'managers'], marks: 1 },
      { number: 4, parts: ['The action affected ', ' at the factory. (PRODUCE)'], answers: ['productivity', 'production'], marks: 1 },
      { number: 5, parts: ['The company has to become more ', '. (COMPETE)'], answers: ['competitive'], marks: 1 },
      { number: 6, parts: ['It is my responsibility as an ', '. (EMPLOY)'], answers: ['employer'], marks: 1 },
      { number: 7, parts: ['I employ over 500 ', '. (EMPLOY)'], answers: ['employees'], marks: 1 },
      { number: 8, parts: ['', ', we have to make changes. (PERIOD)'], answers: ['Periodically'], marks: 1 },
      { number: 9, parts: ['Some practices are ', '. (ANTIQUE)'], answers: ['antiquated'], marks: 1 },
      { number: 10, parts: ['They are totally ', ' to the modern world. (APPLY)'], answers: ['inapplicable'], marks: 1 }
    ]},
    { id: 'B', title: 'Key word transformations', instruction: 'Complete using the word given; use 3–8 words.', questions: [
      { number: 11, parts: ['That medicine ', ' and I felt better immediately. (magic)'], answers: ['worked like magic'], marks: 2 },
      { number: 12, parts: ['The day ', ' when Bob got his own TV series. (flying)'], answers: ['got off to a flying start'], marks: 2 },
      { number: 13, parts: ['I like this job, but ', ' I wonder if I chose the right career. (again)'], answers: ['every now and again'], marks: 2 },
      { number: 14, parts: ['The headmaster was determined to ', ' to bullying. (end)'], answers: ['put an end', 'bring an end'], marks: 2 },
      { number: 15, parts: ['No one ', ' believes in witches. (age)'], answers: ['in this day and age'], marks: 2 },
      { number: 16, parts: ['We were ', ' for the airport when the flights were grounded. (point)'], answers: ['just on the point of leaving'], marks: 2 },
      { number: 17, parts: ['It ', ' finish this e-mail. (second)'], answers: ['will only take me a second to'], marks: 2 },
      { number: 18, parts: ['Ralph would resign ', ' if he found a better job. (hat)'], answers: ['at the drop of a hat'], marks: 2 }
    ]},
    { id: 'C', title: 'Phrasal verbs', instruction: 'Write one word in each gap.', questions: [
      { number: 19, parts: ['Are you snowed ', ' with work?'], answers: ['under'], marks: 1 },
      { number: 20, parts: ['Lend me five euros to tide me ', ' until payday.'], answers: ['over'], marks: 1 },
      { number: 21, parts: ["Something's cropped ", ' up, so we must postpone the meeting.'], answers: ['up'], marks: 1 },
      { number: 22, parts: ["We'd better not take ", ' any more staff.'], answers: ['on'], marks: 1 },
      { number: 23, parts: ['I can while the afternoon ', ' reading.'], answers: ['away'], marks: 1 },
      { number: 24, parts: ['What time does Jenny knock ', ' from work?'], answers: ['off'], marks: 1 },
      { number: 25, parts: ['The Prime Minister will press ', ' with the changes.'], answers: ['ahead', 'on'], marks: 1 },
      { number: 26, parts: ['Over 3,000 workers were laid ', '.'], answers: ['off'], marks: 1 }
    ]},
    { id: 'D', title: 'Future forms', instruction: 'Correct the bold form where needed; write OK if it is correct.', questions: [
      { number: 27, parts: ["This time next week I'll laze around at home. ", ''], answers: ["I'll be lazing"] , marks: 1 },
      { number: 28, parts: ['Will you have got the computer set up by the time I arrive? ', ''], answers: ['OK', '✓'], marks: 1 },
      { number: 29, parts: ['Will I get something for dinner, Angie? ', ''], answers: ['Shall I', 'Should I'], marks: 1 },
      { number: 30, parts: ["She won't know until she'll get her results. ", ''], answers: ["she gets", "she's got"], marks: 1 },
      { number: 31, parts: ["Watch out! That car's reversing! ", ''], answers: ['OK', '✓'], marks: 1 },
      { number: 32, parts: ["When I grow up, I'm being a pop star! ", ''], answers: ["I'm going to be"], marks: 1 },
      { number: 33, parts: ['Once we get the results, we decide. ', ''], answers: ["we'll decide"], marks: 1 },
      { number: 34, parts: ['We do change trains at Birmingham tomorrow. ', ''], answers: ['OK', '✓'], marks: 1 }
    ]},
    { id: 'E', title: 'Multiple choice', instruction: 'Choose the correct answer.', questions: [
      { number: 35, parts: ['Sarah ', ' in government for exactly 40 years.'], answers: ['D · will have been working'], options: ['A · is working', 'B · will work', 'C · will be working', 'D · will have been working'], marks: 1 },
      { number: 36, parts: ['The film is ', ' released at the end of next year.'], answers: ['C · due to be'], options: ['A · on the verge of being', 'B · on the point of being', 'C · due to be', 'D · about to be'], marks: 1 },
      { number: 37, parts: ['Nick ', ' the new Managing Director.'], answers: ['A · was to be'], options: ['A · was to be', 'B · was being', 'C · is going to be', 'D · will be'], marks: 1 },
      { number: 38, parts: ["No, I'm afraid I ", ' pick up the kids.'], answers: ["B · can't"], options: ["A · wouldn't", "B · can't", "C · shan't", "D · don't"], marks: 1 },
      { number: 39, parts: ["Toby is extremely ", '; he is always on time.'], answers: ['C · punctual'], options: ['A · temporary', 'B · long-standing', 'C · punctual', 'D · subsequent'], marks: 1 },
      { number: 40, parts: ['Have you considered applying for a job with the ', ' service?'], answers: ['A · civil'], options: ['A · civil', 'B · civic', 'C · national', 'D · governmental'], marks: 1 },
      { number: 41, parts: ['Many people work in the public ', '.'], answers: ['D · sector'], options: ['A · division', 'B · zone', 'C · area', 'D · sector'], marks: 1 },
      { number: 42, parts: ['Teenagers go through a rebellious ', '.'], answers: ['D · phase'], options: ['A · stint', 'B · span', 'C · duration', 'D · phase'], marks: 1 }
    ]}
  ];

  private readonly reviewFourSections: ReviewSection[] = [
    { id: 'A', title: 'One word in each gap', instruction: 'Complete the text about the Segway.', questions: [
      { number: 1, parts: ['The Segway ', ' first presented to the public in 2001.'], answers: ['was'], marks: 1 },
      { number: 2, parts: ['It runs ', ' electricity.'], answers: ['on'], marks: 1 },
      { number: 3, parts: ['Balance ', ' maintained by two computers.'], answers: ['is'], marks: 1 },
      { number: 4, parts: ['They monitor the Segway’s ', ' movement.'], answers: ['every'], marks: 1 },
      { number: 5, parts: ['The wheels compensate, ', ' this way restoring balance.'], answers: ['in'], marks: 1 },
      { number: 6, parts: ['It moves in an attempt to steady ', '.'], answers: ['itself'], marks: 1 },
      { number: 7, parts: ['Once you are ', ' the move...'], answers: ['on'], marks: 1 },
      { number: 8, parts: ['The Segway ', ' be steered with the handlebars.'], answers: ['can'], marks: 1 },
      { number: 9, parts: ['', ' are thought to be a number of advantages.'], answers: ['There'], marks: 1 },
      { number: 10, parts: ['Organisations consider ', ' to be an alternative.'], answers: ['it'], marks: 1 }
    ]},
    { id: 'B', title: 'Word formation', instruction: 'Change the form of the word in capitals.', questions: [
      { number: 11, parts: ['He is making a ', ' and has released a new CD. (COME)'], answers: ['comeback'], marks: 1 },
      { number: 12, parts: ['She is still a little ', ' on her feet. (STEADY)'], answers: ['unsteady'], marks: 1 },
      { number: 13, parts: ['I found the book very ', '. (MOVE)'], answers: ['moving'], marks: 1 },
      { number: 14, parts: ['There was a narrow ', ' into the mountain. (PASS)'], answers: ['passage'], marks: 1 },
      { number: 15, parts: ['The party has ', ' ideas. (PROGRESS)'], answers: ['progressive'], marks: 1 },
      { number: 16, parts: ['The war has ', ' the whole country. (STABLE)'], answers: ['destabilised'], marks: 1 },
      { number: 17, parts: ['His disability ', ' him. (STAND)'], answers: ['notwithstanding'], marks: 1 },
      { number: 18, parts: ['I can’t believe you got another ', ' ticket! (SPEED)'], answers: ['speeding'], marks: 1 }
    ]},
    { id: 'C', title: 'Movement vocabulary', instruction: 'Choose the correct word.', questions: [
      { number: 19, parts: ['Would you mind ', ' me a bath?'], answers: ['A · running'], options: ['A · running', 'B · taking', 'C · doing'], marks: 1 },
      { number: 20, parts: ['I did not want to ', ' your hopes.'], answers: ['B · raise'], options: ['A · lift', 'B · raise', 'C · boost'], marks: 1 },
      { number: 21, parts: ['The colour is beside the ', '.'], answers: ['A · point'], options: ['A · point', 'B · subject', 'C · theme'], marks: 1 },
      { number: 22, parts: ['I ', ' at the chance to go to China.'], answers: ['B · jumped'], options: ['A · moved', 'B · jumped', 'C · ran'], marks: 1 },
      { number: 23, parts: ['I found the argument difficult to ', '.'], answers: ['C · follow'], options: ['A · track', 'B · watch', 'C · follow'], marks: 1 },
      { number: 24, parts: ['Everything ', ' into place at the right time.'], answers: ['B · fell'], options: ['A · fell', 'B · went', 'C · moved'], marks: 1 },
      { number: 25, parts: ['The weather started to ', ' cold.'], answers: ['B · turn'], options: ['A · go', 'B · turn', 'C · do'], marks: 1 },
      { number: 26, parts: ['Millions of children will ', ' hungry tonight.'], answers: ['C · go'], options: ['A · go', 'B · get', 'C · go', 'D · suffer'], marks: 1 }
    ]},
    { id: 'D', title: 'Key word transformations', instruction: 'Complete using the word given; use 3–8 words.', questions: [
      { number: 27, parts: ['Jones ', ' the ball by Smith before the whistle. (by)'], answers: ['was given the ball by'], marks: 2 },
      { number: 28, parts: ['There ', ' a number of arrests since the robbery. (reported)'], answers: ['are reported to have been'], marks: 2 },
      { number: 29, parts: ['Try ', ' the other runners. (fall)'], answers: ['not to fall behind'], marks: 2 },
      { number: 30, parts: ['The building ', ' by police. (cordoned)'], answers: ['has been cordoned off by'], marks: 2 },
      { number: 31, parts: ['We ', ' our car. (had)'], answers: ['had a friend of ours fix'], marks: 2 },
      { number: 32, parts: ['The manager always ', ' new employees. (point)'], answers: ['makes a point of welcoming'], marks: 2 },
      { number: 33, parts: ['The comedian ', ' at his jokes. (had)'], answers: ['soon had the audience laughing'], marks: 2 },
      { number: 34, parts: ['I need to ', ' and then I’ll call you. (way)'], answers: ['get this work out of the way'], marks: 2 }
    ]},
    { id: 'E', title: 'Multiple choice', instruction: 'Choose the correct answer.', questions: [
      { number: 35, parts: ['Why don’t you have a doctor ', ' at your arm?'], answers: ['A · to look'], options: ['A · to look', 'B · looking', 'C · look', 'D · for looking'], marks: 1 },
      { number: 36, parts: ['What is the ', ' fare to Berlin?'], answers: ['D · return'], options: ['A · round', 'B · double', 'C · two-way', 'D · return'], marks: 1 },
      { number: 37, parts: ['He’d like ', ' by Monday.'], answers: ['D · to have the report finished'], options: ['A · finished the report', 'B · the report will be finished', 'C · the report finished', 'D · to have the report finished'], marks: 1 },
      { number: 38, parts: ['Ben crept ', ' on Lisa.'], answers: ['B · up'], options: ['A · out', 'B · up', 'C · off', 'D · round'], marks: 1 },
      { number: 39, parts: ['The company is expected ', ' a healthy profit.'], answers: ['B · to make'], options: ['A · make', 'B · to make', 'C · making', 'D · for making'], marks: 1 },
      { number: 40, parts: ['Someone on a motorbike ', ' her handbag.'], answers: ['C · grabbed'], options: ['A · clutched', 'B · clenched', 'C · grabbed', 'D · fumbled'], marks: 1 },
      { number: 41, parts: ['He seems to ', ' across the floor.'], answers: ['A · glide'], options: ['A · glide', 'B · march', 'C · skid', 'D · dash'], marks: 1 },
      { number: 42, parts: ['The Arts Centre has been ', ' construction.'], answers: ['B · under'], options: ['A · in', 'B · under', 'C · on', 'D · below'], marks: 1 }
    ]}
  ];

  get sections(): ReviewSection[] {
    if (this.reviewNumber === 1) return this.reviewOneSections;
    if (this.reviewNumber === 2) return this.reviewTwoSections;
    if (this.reviewNumber === 3) return this.reviewThreeSections;
    return this.reviewFourSections;
  }

  answers: Record<number, string> = {};
  checkedSections: Record<string, boolean> = {};
  visibleCorrections: Record<string, boolean> = {};

  constructor(private route: ActivatedRoute) {}

  get reviewNumber(): number {
    return Number(this.route.snapshot.paramMap.get('reviewNumber')) || 1;
  }

  get unitStart(): number {
    return this.reviewNumber * 2 - 1;
  }

  get unitEnd(): number {
    return this.reviewNumber * 2;
  }

  get lessonLink(): string[] {
    const category = this.unitStart === 1 ? 'unit-overview' : this.unitStart === 3 ? 'past-time' : 'thinking';
    return ['/lessons', String(this.unitStart), category];
  }

  get exerciseLink(): string[] {
    return ['/exercises'];
  }

  get totalScore(): number {
    return this.sections.reduce((total, section) => total + this.sectionScore(section), 0);
  }

  sectionScore(section: ReviewSection): number {
    return section.questions.reduce((score, question) => score + (this.isCorrect(question) ? question.marks : 0), 0);
  }

  sectionMax(section: ReviewSection): number {
    return section.questions.reduce((total, question) => total + question.marks, 0);
  }

  isCorrect(question: ReviewQuestion): boolean {
    const response = this.normalize(this.answers[question.number] ?? '');
    return question.answers.some(answer => this.normalize(answer) === response);
  }

  toggleCorrection(sectionId: string) {
    this.visibleCorrections[sectionId] = !this.visibleCorrections[sectionId];
  }

  private normalize(value: string): string {
    return value.trim().toLocaleLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, ' ');
  }
}