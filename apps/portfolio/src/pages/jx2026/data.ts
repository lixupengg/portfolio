import Peach5 from '../../assets/stickersImg/peachImg5.png';

export type AnswerOption = {
	label: string;
	image?: string; // URL or imported image path
};

export type Question = {
	question: string;
	image?: string; // URL or imported image path for the question
	options: AnswerOption[];
	correctIndex: number;
};

export type Milestone = {
	id: number;
	title: string;
	gradient: [string, string];
	questions: [Question, Question];
	correctMessage: string;
	wrongMessage: string;
};

export const milestones: Milestone[] = [
	{
		id: 1,
		title: 'When We Met',
		gradient: ['#FFF8F0', '#F4A0A0'],
		questions: [
			{
				question: 'What did we eat when we first met?',
				options: [
					{
						label: 'REPLACE_ME_A',
						image: Peach5
					},
					{ label: 'REPLACE_ME_B', image: Peach5 },
					{ label: 'REPLACE_ME_C', image: Peach5 },
					{ label: 'REPLACE_ME_D', image: Peach5 }
				],
				correctIndex: 0
			},
			{
				question: 'What did we do on the day we first met?',
				options: [
					{ label: 'REPLACE_ME_A' },
					{ label: 'REPLACE_ME_B' },
					{ label: 'REPLACE_ME_C' },
					{ label: 'REPLACE_ME_D' }
				],
				correctIndex: 0
			}
		],
		correctMessage: 'You remembered!',
		wrongMessage: 'Hmm, think again!'
	},
	{
		id: 2,
		title: "First Valentine's",
		gradient: ['#F4A0A0', '#D4838A'],
		questions: [
			{
				question: "What did we eat on our first Valentine's?",
				options: [
					{ label: 'REPLACE_ME_A' },
					{ label: 'REPLACE_ME_B' },
					{ label: 'REPLACE_ME_C' },
					{ label: 'REPLACE_ME_D' }
				],
				correctIndex: 0
			},
			{
				question: "What did we do on our first Valentine's?",
				options: [
					{ label: 'REPLACE_ME_A' },
					{ label: 'REPLACE_ME_B' },
					{ label: 'REPLACE_ME_C' },
					{ label: 'REPLACE_ME_D' }
				],
				correctIndex: 0
			}
		],
		correctMessage: 'You remembered!',
		wrongMessage: 'Not quite~'
	},
	{
		id: 3,
		title: 'First Anniversary',
		gradient: ['#D4838A', '#F5D28F'],
		questions: [
			{
				question: 'What did we eat on our first anniversary?',
				options: [
					{ label: 'REPLACE_ME_A' },
					{ label: 'REPLACE_ME_B' },
					{ label: 'REPLACE_ME_C' },
					{ label: 'REPLACE_ME_D' }
				],
				correctIndex: 0
			},
			{
				question: 'What did we do on our first anniversary?',
				options: [
					{ label: 'REPLACE_ME_A' },
					{ label: 'REPLACE_ME_B' },
					{ label: 'REPLACE_ME_C' },
					{ label: 'REPLACE_ME_D' }
				],
				correctIndex: 0
			}
		],
		correctMessage: 'You remembered!',
		wrongMessage: 'Try again, love!'
	},
	{
		id: 4,
		title: "Second Valentine's",
		gradient: ['#F5D28F', '#A8C5A0'],
		questions: [
			{
				question: "What did we eat on our second Valentine's?",
				options: [
					{ label: 'REPLACE_ME_A' },
					{ label: 'REPLACE_ME_B' },
					{ label: 'REPLACE_ME_C' },
					{ label: 'REPLACE_ME_D' }
				],
				correctIndex: 0
			},
			{
				question: "What did we do on our second Valentine's?",
				options: [
					{ label: 'REPLACE_ME_A' },
					{ label: 'REPLACE_ME_B' },
					{ label: 'REPLACE_ME_C' },
					{ label: 'REPLACE_ME_D' }
				],
				correctIndex: 0
			}
		],
		correctMessage: 'You remembered!',
		wrongMessage: 'Nope, guess again!'
	},
	{
		id: 5,
		title: 'Second Anniversary',
		gradient: ['#A8C5A0', '#F4A0A0'],
		questions: [
			{
				question: 'What did we eat on our second anniversary?',
				options: [
					{ label: 'REPLACE_ME_A' },
					{ label: 'REPLACE_ME_B' },
					{ label: 'REPLACE_ME_C' },
					{ label: 'REPLACE_ME_D' }
				],
				correctIndex: 0
			},
			{
				question: 'What did we do on our second anniversary?',
				options: [
					{ label: 'REPLACE_ME_A' },
					{ label: 'REPLACE_ME_B' },
					{ label: 'REPLACE_ME_C' },
					{ label: 'REPLACE_ME_D' }
				],
				correctIndex: 0
			}
		],
		correctMessage: 'You remembered!',
		wrongMessage: 'So close!'
	}
];

export const NODE_POSITIONS = [
	{ x: 100, y: 380 },
	{ x: 280, y: 200 },
	{ x: 460, y: 350 },
	{ x: 640, y: 180 },
	{ x: 820, y: 330 }
];

export const SVG_PATH = [
	'M 100 380 C 150 280, 230 200, 280 200',
	'C 330 200, 400 350, 460 350',
	'C 520 350, 580 180, 640 180',
	'C 700 180, 760 330, 820 330'
].join(' ');

export const VALENTINE_MESSAGE =
	"Happy Valentine's Day, my love! " +
	'Every milestone with you is a treasure. ' +
	"Here's to many more adventures together.";
