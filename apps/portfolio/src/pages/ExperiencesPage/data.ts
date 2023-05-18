import SG from '../../assets/sg.svg';
import SG2 from '../../assets/sg2.svg';
import SF from '../../assets/sf.svg';
import SF2 from '../../assets/sf2.svg';

export const EXPERIENCES = [
	{
		company: 'TikTok',
		title: 'Software Engineer',
		date: 'June 2022 - Present',
		location: 'Singapore',
		locationImg: SG,
		description: [
			`Architect and develop efficient and highly reusable front-end systems 
            that drive complex web applications for e-Commerce products.`,
			`Architect and design a front-end component library from scratch to increase the
            speed of development of other teams by 50%.`,
			`Optimizations to improve scalability, reliability, security, and performance of web applications.`
		]
	},
	{
		company: 'Sellgo',
		title: 'Software Engineer',
		date: 'Jul 2021 - June 2022',
		location: 'San Francisco, California',
		locationImg: SF2,
		description: [
			`Development of frontend interface for Sellgo Web Application (Amazon Analytics Dashboards), 
            Chrome Extension (Amazon Product Analysis tool), and website.`,
			`Development of backend REST APIs with a focus on Amazon product scrapping, payments, and 
            user management related features.`,
			`Utilising ReactJS, NextJS, Typescript, Sass, Django.`
		]
	},
	{
		company: 'Plug and Play Tech Center',
		title: 'Investment Analyst',
		date: 'Aug 2021 - Apr 2022',
		location: 'San Francisco, California',
		locationImg: SF,
		description: [
			`Evaluated candidate startups as part of VC investment sourcing process.`,
			`Conducted due diligence on over 20 startups in commerce-tech 
            (Retail, Real Estate, Prop-tech, Branding, Supply Chain & Logistics) biweekly 
            to provide analysis for investment decisions.`,
			`Reported comprehensive company evaluation with business model analysis to senior 
            investment team in bi-weekly calls.`
		]
	},
	{
		company: 'Pricewaterhouse Coopers',
		title: 'Risk Assurance and Regulations Compliance',
		date: 'Mar 2019 - Aug 2019',
		location: 'Singapore',
		locationImg: SG2,
		description: [
			`Conceptualized and streamlined documentation workflow during 
            project infancy stage with a client Insurance company to accurately 
            meet compliance regulations, set out by the Monetary Authority of Singapore (MAS).`
		]
	}
];
