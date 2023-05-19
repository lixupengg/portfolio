import qubo from '../../assets/projects/qubo/qubo.png';
import hashtap from '../../assets/projects/hashtap/hashtap.png';
import uniquirk from '../../assets/projects/uniquirk/uniquirk.png';
import trippyy from '../../assets/projects/trippyy/trippyy.svg';
import Notebook1 from '../../assets/notebook1.png';
import Notebook2 from '../../assets/notebook2.png';
import Notebook3 from '../../assets/notebook3.png';
import Notebook4 from '../../assets/notebook4.png';

export const PROJECTS = [
	{
		displayImg: qubo,
		backgroundImg: Notebook2,
		title: 'Qubo',
		description: `A payment gateway to allow consumers to transact in cryptocurrencies 
        and earn cashback on their transactions.`,
		stack: ['React', 'Solidity', 'Golang'],
		milestones: [
			'Awarded NUS Venture Initiation Programme Grant',
			'Incubated under NUS Hangar',
			'Second place in Blockchain By Berkeley Hackathon'
		],
		addBackgroundToDisplayImg: true
	},
	{
		displayImg: hashtap,
		backgroundImg: Notebook3,
		title: 'Hashtap',
		description: `A robo-advisory marketing platform that 
        serves to connect content creators with brands.`,
		stack: ['React', 'NodeJS'],
		milestones: ['Winner of MIT 15k Pitch Competition for NUS-SMU Category']
	},
	{
		displayImg: uniquirk,
		backgroundImg: Notebook4,
		title: 'UNIQUIRK',
		description: `Developed Instagram filters to spread exposure of a local social media agency.`,
		stack: ['Spark AR'],
		milestones: []
	},
	{
		displayImg: trippyy,
		backgroundImg: Notebook1,
		title: 'Trippyy',
		description: `A travel web application that integrates algorithms to 
        automatically suggest convenient and well-thought-out itineraries which 
        are optimised in terms of geo-convenience, time, and costs based on user input.`,
		stack: [],
		milestones: ['NUS Orbital Artemis Award', `rekt by Wanderlog :'(`],
		addBackgroundToDisplayImg: true
	}
];
