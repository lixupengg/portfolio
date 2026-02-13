// Milestone answer images
import china1 from '../../assets/jx2026/china1.jpg';
import china2 from '../../assets/jx2026/china2.jpg';
import china3 from '../../assets/jx2026/china3.jpg';
import wedding1 from '../../assets/jx2026/wedding1.jpg';
import wedding2 from '../../assets/jx2026/wedding2.jpg';
import korea1 from '../../assets/jx2026/korea1.jpg';
import korea2 from '../../assets/jx2026/korea2.jpg';
import korea3 from '../../assets/jx2026/korea3.jpg';
import sg1 from '../../assets/jx2026/sg1.jpg';
import sg2 from '../../assets/jx2026/sg2.jpg';
import sg3 from '../../assets/jx2026/sg3.jpg';
import sg4 from '../../assets/jx2026/sg4.jpg';
import cruise1 from '../../assets/jx2026/cruise1.jpg';
import cruise2 from '../../assets/jx2026/cruise2.jpg';

export type AnswerOption = {
	label: string;
	image?: string; // URL or imported image path
};

export type Question = {
	question: string;
	image?: string; // URL or imported image path for the question
	qnsPic?: string; // shown during question stage
	ansPic?: string; // shown after correct answer
	options: AnswerOption[];
	correctIndex: number;
	correctMessage: string;
	wrongMessage: string;
};

export type Milestone = {
	id: number;
	title: string;
	gradient: [string, string];
	questions: [Question, Question];
};

export const milestones: Milestone[] = [
	{
		id: 1,
		title: 'Vroom vroom to China!',
		gradient: ['#FFFDE7', '#FFD54F'],
		questions: [
			{
				question:
					'What color shirt did Jiaxuan wear on the flight back from China?',
				ansPic: china3,
				options: [
					{
						label: 'BLACK'
					},
					{ label: 'WHITE' },
					{ label: 'YELLOW' },
					{ label: 'GREEN' }
				],
				correctIndex: 3,
				correctMessage: 'Good job dd!!',
				wrongMessage: 'Hmm, i guess your memory isnt that good HEHE'
			},
			{
				question: 'What was the name of the fancy fancy flower restaurant?',
				ansPic: china1,
				options: [
					{ label: 'Formacado' },
					{ label: 'Tomacado' },
					{ label: 'Flowercado' },
					{ label: 'Flower Kitchen' }
				],
				correctIndex: 1,
				correctMessage: 'Ding ding ding!',
				wrongMessage: 'How can you forget such a fancy restaurant!!!!'
			}
		]
	},
	{
		id: 2,
		title: 'Weddings are fun!',
		gradient: ['#FFD54F', '#FFA000'],
		questions: [
			{
				question: 'When was koyongs wedding HEHEHE',
				options: [
					{ label: '10 May' },
					{ label: '10 Apr' },
					{ label: '8 May' },
					{ label: '8 Apr' }
				],
				correctIndex: 0,
				correctMessage: 'Ding ding ding!',
				wrongMessage: 'Orh hor i tell them!!!'
			},
			{
				question:
					"Did jiaxuan stand on michelle's right or left during our picture hohoho",
				ansPic: wedding1,
				options: [{ label: 'Left' }, { label: 'Right' }],
				correctIndex: 0,
				correctMessage: 'Ding ding ding!',
				wrongMessage: 'Hey its only a 50/50 chance!!!'
			}
		]
	},
	{
		id: 3,
		title: 'Korea is fun too!',
		gradient: ['#FFA000', '#F5D28F'],
		questions: [
			{
				question: 'How many bellygoms did we win!',
				ansPic: korea3,
				options: [
					{ label: '3' },
					{ label: '2' },
					{ label: '1' },
					{ label: '0' }
				],
				correctIndex: 3,
				correctMessage: 'Hey you dont have to rub it in.... T.T',
				wrongMessage: 'You are right!!!!!!'
			},
			{
				question: 'What is the best ice cream in the world?',
				ansPic: korea1,
				options: [
					{
						label:
							'Ice cream that xupeng make with his future ice cream machine'
					},
					{ label: 'Tiger Ice Cream' }
				],
				correctIndex: 1,
				correctMessage:
					'How can you like other peoples ice cream over mine!!!!',
				wrongMessage:
					'Good answer!!! Hey this means that i can buy ice cream machine next time right hehehe'
			}
		]
	},
	{
		id: 4,
		title: 'What about Singapore adventures',
		gradient: ['#F5D28F', '#A8C5A0'],
		questions: [
			{
				question: 'Where is gary?',
				qnsPic: sg1,
				ansPic: sg2,
				options: [{ label: 'Singapore Zoo!!' }],
				correctIndex: 0,
				correctMessage: 'I forgot to post this so i wanted to use it :(',
				wrongMessage: 'Nope, guess again!'
			},
			{
				question: "What did we do on our second Valentine's?",
				ansPic: sg2,
				options: [
					{ label: 'REPLACE_ME_A' },
					{ label: 'REPLACE_ME_B' },
					{ label: 'REPLACE_ME_C' },
					{ label: 'REPLACE_ME_D' }
				],
				correctIndex: 0,
				correctMessage: 'You remembered!',
				wrongMessage: 'Nope, guess again!'
			}
		]
	},
	{
		id: 5,
		title: 'Our Future Together',
		gradient: ['#A8C5A0', '#8BC34A'],
		questions: [
			{
				question: 'What are you most excited about for our future?',
				ansPic: cruise1,
				options: [
					{ label: 'REPLACE_ME_A' },
					{ label: 'REPLACE_ME_B' },
					{ label: 'REPLACE_ME_C' },
					{ label: 'REPLACE_ME_D' }
				],
				correctIndex: 0,
				correctMessage: 'You know me so well!',
				wrongMessage: 'Try once more!'
			},
			{
				question: 'Where do you want to travel with me next?',
				ansPic: cruise2,
				options: [
					{ label: 'REPLACE_ME_A' },
					{ label: 'REPLACE_ME_B' },
					{ label: 'REPLACE_ME_C' },
					{ label: 'REPLACE_ME_D' }
				],
				correctIndex: 0,
				correctMessage: 'You know me so well!',
				wrongMessage: 'Try once more!'
			}
		]
	}
];

export const SVG_HEIGHT = 500;

// y values are relative to bottom (distance from bottom edge)
// size: { radius, glowRadius, iconSize, labelOffset, labelSize }
export const NODE_POSITIONS = [
	{
		x: 550,
		y: 90,
		image: china2,
		size: {
			radius: 70,
			glowRadius: 90,
			iconSize: 18,
			labelOffset: 46,
			labelSize: 13
		},
		travelerOffset: { x: -50, y: -100 }
	},
	{
		x: 735,
		y: 130,
		image: wedding2,
		size: {
			radius: 60,
			glowRadius: 32,
			iconSize: 18,
			labelOffset: 46,
			labelSize: 13
		},
		travelerOffset: { x: -10, y: -120 }
	},
	{
		x: 890,
		y: 200,
		image: korea2,
		size: {
			radius: 45,
			glowRadius: 32,
			iconSize: 18,
			labelOffset: 46,
			labelSize: 13
		},
		travelerOffset: { x: 0, y: -100 }
	},
	{
		x: 1010,
		y: 270,
		image: sg3,
		size: {
			radius: 30,
			glowRadius: 32,
			iconSize: 18,
			labelOffset: 46,
			labelSize: 13
		},
		travelerOffset: { x: 50, y: -60 }
	},
	{
		x: 920,
		y: 340,
		image: china1,
		size: {
			radius: 25,
			glowRadius: 32,
			iconSize: 18,
			labelOffset: 46,
			labelSize: 13
		},
		travelerOffset: { x: -140, y: -60 }
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
		`C ${p[2].x + 50} ${p[2].y}, ${p[3].x - 50} ${p[3].y}, ${p[3].x} ${p[3].y}`,
		`C ${p[3].x + 50} ${p[3].y}, ${p[4].x - 50} ${p[4].y}, ${p[4].x} ${p[4].y}`
	].join(' ');
})();

export const VALENTINE_MESSAGE =
	"Happy Valentine's Day, my love! " +
	'Every milestone with you is a treasure. ' +
	"Here's to many more adventures together.";
