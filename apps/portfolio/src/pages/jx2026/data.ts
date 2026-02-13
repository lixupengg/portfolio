import Peach5 from '../../assets/stickersImg/peachImg5.png';

// Node background images - update these paths as needed
import Node1Image from '../../assets/jx2026/IMG_4108.JPG';

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
		title: 'Vroom vroom to China!',
		gradient: ['#FFF8F0', '#F4A0A0'],
		questions: [
			{
				question:
					'What color shirt did Jiaxuan wear on the flight back from China?',
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
		title: 'Weddings are fun!',
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
		title: 'Korea is fun too!',
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
		title: 'What about Singapore adventures',
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
	}
];

export const SVG_HEIGHT = 500;

// y values are relative to bottom (distance from bottom edge)
// size: { radius, glowRadius, iconSize, labelOffset, labelSize }
export const NODE_POSITIONS = [
	{
		x: 550,
		y: 200,
		image: Node1Image,
		size: {
			radius: 70,
			glowRadius: 90,
			iconSize: 18,
			labelOffset: 46,
			labelSize: 13
		}
	},
	{
		x: 735,
		y: 270,
		image: Node1Image,
		size: {
			radius: 60,
			glowRadius: 32,
			iconSize: 18,
			labelOffset: 46,
			labelSize: 13
		}
	},
	{
		x: 890,
		y: 340,
		image: Node1Image,
		size: {
			radius: 45,
			glowRadius: 32,
			iconSize: 18,
			labelOffset: 46,
			labelSize: 13
		}
	},
	{
		x: 990,
		y: 440,
		image: Node1Image,
		size: {
			radius: 30,
			glowRadius: 32,
			iconSize: 18,
			labelOffset: 46,
			labelSize: 13
		}
	}
];

// Convert bottom-relative y to SVG y coordinate
const toSvgY = (y: number) => SVG_HEIGHT - y;

// Generate SVG path from node positions
export const SVG_PATH = (() => {
	const p = NODE_POSITIONS.map((n) => ({ x: n.x, y: toSvgY(n.y) }));
	return [
		`M ${p[0].x} ${p[0].y} C ${p[0].x + 50} ${p[0].y - 100}, ${p[1].x - 50} ${
			p[1].y
		}, ${p[1].x} ${p[1].y}`,
		`C ${p[1].x + 50} ${p[1].y}, ${p[2].x - 50} ${p[2].y}, ${p[2].x} ${p[2].y}`,
		`C ${p[2].x + 50} ${p[2].y}, ${p[3].x - 50} ${p[3].y}, ${p[3].x} ${p[3].y}`
	].join(' ');
})();

export const VALENTINE_MESSAGE =
	"Happy Valentine's Day, my love! " +
	'Every milestone with you is a treasure. ' +
	"Here's to many more adventures together.";
