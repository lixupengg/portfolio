import { createStitches, styled } from '@stitches/react';
import { sage, cyan, orange, blue } from '@radix-ui/colors';
import { Theme } from '@stonksfi/types/theme';

export const themeObj: { theme: Theme } = {
	theme: {
		colors: {
			/* Primary colors */
			primaryColor1: cyan.cyan1,
			primaryColor2: cyan.cyan2,
			primaryColor3: cyan.cyan3,
			primaryColor4: cyan.cyan4,
			primaryColor5: cyan.cyan5,
			primaryColor6: cyan.cyan6,
			primaryColor7: cyan.cyan7,
			primaryColor8: cyan.cyan8,
			primaryColor9: cyan.cyan9,
			primaryColor10: cyan.cyan10,
			primaryColor11: cyan.cyan11,
			primaryColor12: cyan.cyan12,

			// primaryColor1: '#fbfdff',
			// primaryColor2: '#f5faff',
			// primaryColor3: '#edf6ff',
			// primaryColor4: '#e1f0ff',
			// primaryColor5: '#cee7fe',
			// primaryColor6: '#b7d9f8',
			// primaryColor7: '#96c7f2',
			// primaryColor8: '#5eb0ef',
			// primaryColor9: '#0091ff',
			// primaryColor10: '#0081f1',
			// primaryColor11: '#006adc',
			// primaryColor12: '#00254d',

			// primaryColor1: '#0f1720',
			// primaryColor2: '#0f1b2d',
			// primaryColor3: '#10243e',
			// primaryColor4: '#102a4c',
			// primaryColor5: '#0f3058',
			// primaryColor6: '#0d3868',
			// primaryColor7: '#0a4481',
			// primaryColor8: '#0954a5',
			// primaryColor9: '#0091ff',
			// primaryColor10: '#369eff',
			// primaryColor11: '#52a9ff',const cyan = {
			// primaryColor12: '#eaf6ff',

			/* Secondary colors */
			secondaryColor1: orange.orange1,
			secondaryColor2: orange.orange2,
			secondaryColor3: orange.orange3,
			secondaryColor4: orange.orange4,
			secondaryColor5: orange.orange5,
			secondaryColor6: orange.orange6,
			secondaryColor7: orange.orange7,
			secondaryColor8: orange.orange8,
			secondaryColor9: orange.orange9,
			secondaryColor10: orange.orange10,
			secondaryColor11: orange.orange11,
			secondaryColor12: orange.orange12,

			/* Grey colors */
			grey1: sage.sage1,
			grey2: sage.sage2,
			grey3: sage.sage3,
			grey4: sage.sage4,
			grey5: sage.sage5,
			grey6: sage.sage6,
			grey7: sage.sage7,
			grey8: sage.sage8,
			grey9: sage.sage9,
			grey10: sage.sage10,
			grey11: sage.sage11,
			grey12: sage.sage12,

			/* Systems colors */
			systemOrange: '#f4aa74',
			systemRed: '#eb675e',
			systemGreen: '#5dc560',
			systemBlue: '#5381db',
			systemCream: '#fff2ee',
			white: '#ffffff',
			black: '#000000',

			gradientZero: '#a960ee',
			gradientOne: '#ff333d',
			gradientTwo: '#90e0ff',
			gradientThree: '#ffcb57'
		},
		space: {
			veryTiny: '5px',
			tiny: '10px',
			small: '18px',
			medium: '30px',
			big: '40px',
			large: '60px'
		},
		fontSizes: {
			title54: '54px',
			title46: '46px',

			subtitle40: '40px',
			subtitle38: '38px',
			subtitle32: '32px',
			subtitle28: '28px',
			subtitle24: '24px',
			subtitle20: '20px',

			content18: '18px',
			content16: '16px',
			content14: '14px',
			content12: '12px',
			content10: '10px'
		},
		fonts: {
			poppins: 'Poppins, sans-serif',
			openSans: 'Open Sans, sans-serif',
			roobert: 'Roobert, sans-serif'
		},

		fontWeights: {
			light: '200',
			regular: '300',
			medium: '400',
			semibold: '500',
			bold: '600',
			extrabold: '700'
		},

		lineHeights: {
			lineheight45: '45px',
			lineheight30: '30px',
			lineheight20: '20px'
		},
		letterSpacings: {},
		borderWidths: {},
		borderStyles: {},
		radii: {
			tiny: '5px',
			small: '10px',
			medium: '18px',
			big: '30px',
			large: '60px'
		},
		sizes: {
			cardWidth: '300px',
			bigCardWidth: '618px', // 300px * 2 + $small
			cardHeight: '300px',
			bigCardHeight: '300px',
			buttonMinWidth: '60px',
			buttonMinHeight: '40px'
		},
		shadows: {
			small: '0 0 4px rgba(0, 0, 0, .125)',
			medium: '0 0 12px rgba(0, 0, 0, .125)',
			large: '0 0 24px rgba(0, 0, 0, .125)',
		},
		zIndices: {},
		transitions: {
			default: 'all .2s ease-in-out',
			fast: 'all .1s ease-in-out',
			slow: 'all .4s	 ease-in-out'
		}
	}
};

export const { theme } = createStitches(themeObj as any);

export const Layout = styled('main', {
	background: '$primaryColor1',
	height: '100vh',
	margin: '0 auto',
	boxSizing: 'border-box',
	fontFamily: 'Roobert',
	fontSize: '$content16',
	color: '$primaryColor12'
});

export const COLORS = themeObj.theme.colors;
export const SPACES = themeObj.theme.space;
