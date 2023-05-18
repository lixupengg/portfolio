import AnythingYouWant from '../../assets/anything-you-want.jpg';
import LeanStartup from '../../assets/theLeanStartup.jpg';

export const BOOKS = [
	{
		bookPhoto: AnythingYouWant,
		bookTitle: `Anything You Want \n 40 Lessons for a new kind of Entrepreneur`,
		bookAuthor: 'Derek Sivers',
		bookTakeaways: [
			`> You should feel pain when you're unclear: One unclear sentence 
            in an email will result in many confused replies, but unclear phrasings 
            in a website don't have that feedback. Find a way to measure that!`,
			`> Little details matter; Although its tempting to focus on the big thoughts, 
            small things such as one goofy email can go a long way.`,
			`> There's a benefit to being naive about the norms of the world: you can 
            decide from scratch what seems like the right thing to do.`
		]
	},
	{
		bookPhoto: LeanStartup,
		bookTitle: 'The Lean Startup',
		bookAuthor: 'Eric Ries',
		bookTakeaways: [
			`> Value hypothesis - to test whether a product really delivers value to customers once they are using it.`,
			`> Value hypothesis relevant metrics could be if users come back to the site every day`,
			`> Growth hypothesis - to test how new customers will discover your product.`,
			`> Growth hypothesis relevant metrics could be simply organic growth etc`,
			`> Lifecycle of a start-up should be to build-measure-learn and repeat`,
			`> Concierge MVP - ensure participants have an experience as good as can be.`,
			`> Choose features based on customer complaints.`,
			`> The goal of a startup's early efforts (MVP) is to test assumptions as quickly as possible.`
		]
	}
];
