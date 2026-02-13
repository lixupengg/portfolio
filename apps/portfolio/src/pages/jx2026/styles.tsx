import { styled, keyframes } from '@stitches/react';

// Colors
const blush = '#FFD54F';
const gold = '#F5D28F';
const cream = '#FFFDE7';
const rose = '#FFA000';
const sage = '#A8C5A0';

// Keyframes
export const pulse = keyframes({
	'0%, 100%': { boxShadow: `0 0 8px 2px ${blush}`, transform: 'scale(1)' },
	'50%': { boxShadow: `0 0 20px 8px ${blush}`, transform: 'scale(1.08)' }
});

export const shakeX = keyframes({
	'0%, 100%': { transform: 'translateX(0)' },
	'20%, 60%': { transform: 'translateX(-6px)' },
	'40%, 80%': { transform: 'translateX(6px)' }
});

export const correctPulse = keyframes({
	'0%': { transform: 'scale(1)' },
	'50%': { transform: 'scale(1.05)' },
	'100%': { transform: 'scale(1)' }
});

export const filmScroll = keyframes({
	'0%': { transform: 'translateX(-100%)' },
	'100%': { transform: 'translateX(75%)' }
});

export const flicker = keyframes({
	'0%, 100%': { opacity: 1 },
	'48%': { opacity: 1 },
	'50%': { opacity: 0.92 },
	'52%': { opacity: 1 },
	'72%': { opacity: 1 },
	'73%': { opacity: 0.95 },
	'74%': { opacity: 1 }
});

export const confettiDrop = keyframes({
	'0%': { transform: 'translateY(-10px) rotate(0deg)', opacity: 1 },
	'100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: 0.5 }
});

export const fadeIn = keyframes({
	'0%': { opacity: 0 },
	'100%': { opacity: 1 }
});

export const heartBeat = keyframes({
	'0%, 100%': { transform: 'scale(1)' },
	'15%': { transform: 'scale(1.15)' },
	'30%': { transform: 'scale(1)' },
	'45%': { transform: 'scale(1.1)' }
});

export const wobble = keyframes({
	'0%, 100%': { transform: 'rotate(-4deg)' },
	'50%': { transform: 'rotate(3deg)' }
});

export const birdFly = keyframes({
	'0%': { transform: 'translateX(-100px)' },
	'100%': { transform: 'translateX(100vw)' }
});

export const birdWing = keyframes({
	'0%, 100%': { transform: 'rotate(0deg)' },
	'50%': { transform: 'rotate(-30deg)' }
});

export const float = keyframes({
	'0%, 100%': { transform: 'translateY(0)' },
	'50%': { transform: 'translateY(-10px)' }
});

// Layout
export const PageWrapper = styled('div', {
	width: '100%',
	height: '100%',
	position: 'relative',
	overflow: 'hidden'
});

// Landing
export const LandingOverlay = styled('div', {
	position: 'absolute',
	inset: 0,
	zIndex: 10,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	background: 'rgba(255,248,240,0.85)',
	backdropFilter: 'blur(8px)',
	transition: 'opacity 0.8s ease, visibility 0.8s ease',

	variants: {
		hidden: {
			true: { opacity: 0, visibility: 'hidden', pointerEvents: 'none' }
		}
	}
});

export const LandingTitle = styled('h1', {
	fontSize: 'clamp(28px, 5vw, 48px)',
	color: rose,
	textAlign: 'center',
	marginBottom: '24px',
	fontWeight: 400,
	lineHeight: 1.3
});

export const BeginButton = styled('button', {
	padding: '14px 48px',
	fontSize: '18px',
	background: blush,
	color: '#fff',
	border: 'none',
	borderRadius: '30px',
	cursor: 'pointer',
	fontFamily: 'inherit',
	transition: 'transform 0.2s, box-shadow 0.2s',
	boxShadow: '0 4px 12px rgba(255,213,79,0.4)',
	'&:hover': {
		transform: 'translateY(-2px)',
		boxShadow: '0 6px 20px rgba(255,213,79,0.5)'
	}
});

// Map
export const MapContainer = styled('div', {
	width: '100%',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	transition: 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out',
	transformOrigin: 'center center',
	position: 'relative',
	zIndex: 1,

	variants: {
		zoomedOut: {
			true: { opacity: 0, transform: 'scale(3)' }
		}
	}
});

// Quiz
export const QuizOverlay = styled('div', {
	position: 'absolute',
	inset: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	opacity: 0,
	visibility: 'hidden',
	transition: 'opacity 0.6s ease-in-out, visibility 0.6s ease-in-out',
	zIndex: 5,

	variants: {
		visible: {
			true: { opacity: 1, visibility: 'visible' }
		}
	}
});

export const QuizCard = styled('div', {
	width: 'min(90vw, 500px)',
	padding: '40px 32px',
	borderRadius: '24px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	color: '#fff',
	textAlign: 'center',
	boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
	overflow: 'hidden',

	variants: {
		hasImage: {
			true: {
				flexDirection: 'row',
				width: 'min(90vw, 700px)',
				padding: 0,
				alignItems: 'stretch'
			}
		}
	}
});

export const QuizContent = styled('div', {
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: '40px 32px',
	textAlign: 'center'
});

export const QuizTitle = styled('h2', {
	fontSize: '24px',
	marginBottom: '8px',
	fontWeight: 400
});

export const QuestionText = styled('p', {
	fontSize: '18px',
	marginBottom: '24px',
	lineHeight: 1.5,
	padding: '12px 16px',
	borderRadius: '12px',
	background:
		'linear-gradient(to top, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%)',
	backdropFilter: 'blur(4px)',
	WebkitBackdropFilter: 'blur(4px)',
	color: '#333',
	textShadow: '0 1px 2px rgba(0,0,0,0.1)'
});

export const AnswerGrid = styled('div', {
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	gap: '12px',
	width: '100%'
});

export const AnswerButton = styled('button', {
	padding: '0',
	fontSize: '14px',
	fontWeight: 600,
	borderRadius: '14px',
	border: '2px solid rgba(255,255,255,0.3)',
	background: 'rgba(255,255,255,0.2)',
	color: '#fff',
	cursor: 'pointer',
	fontFamily: 'inherit',
	overflow: 'visible',
	position: 'relative',
	minHeight: '100px',
	height: 'auto',
	backgroundSize: '250%',
	backgroundPosition: 'center',
	transition:
		'transform 0.15s, box-shadow 0.15s, ' +
		'border-color 0.2s, background 0.2s, ' +
		'background-size 0.5s ease-out',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-end',
	alignItems: 'center',
	paddingTop: '60px',
	paddingBottom: '8px',

	'&:hover:not(:disabled)': {
		transform: 'translateY(-4px)',
		boxShadow: '0 6px 16px rgba(0,0,0,0.15)'
	},

	'&:disabled': {
		cursor: 'not-allowed',
		opacity: 0.5
	},

	variants: {
		state: {
			correct: {
				border: '2px solid #4ade80',
				animation: `${correctPulse} 0.4s ease`
			},
			wrong: {
				border: '2px solid #f87171',
				animation: `${shakeX} 0.4s ease`
			}
		},
		selected: {
			true: {
				backgroundSize: 'contain',
				backgroundRepeat: 'no-repeat'
			}
		}
	}
});

export const AnswerLabel = styled('span', {
	padding: '6px 12px',
	borderRadius: '8px',
	background:
		'linear-gradient(to top, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%)',
	backdropFilter: 'blur(4px)',
	WebkitBackdropFilter: 'blur(4px)',
	textShadow: '0 1px 2px rgba(0,0,0,0.2)',
	color: '#333',
	maxWidth: '90%',
	textAlign: 'center'
});

export const FeedbackText = styled('p', {
	fontSize: '16px',
	marginTop: '16px',
	minHeight: '24px',
	fontStyle: 'italic',
	padding: '10px 16px',
	borderRadius: '10px',
	background:
		'linear-gradient(to top, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%)',
	backdropFilter: 'blur(4px)',
	WebkitBackdropFilter: 'blur(4px)',
	color: '#333',
	textShadow: '0 1px 2px rgba(0,0,0,0.1)'
});

export const BackToMapButton = styled('button', {
	marginTop: '24px',
	padding: '12px 36px',
	fontSize: '16px',
	background: '#4ade80',
	color: '#fff',
	borderRadius: '24px',
	cursor: 'pointer',
	fontFamily: 'inherit',
	transition: 'transform 0.15s, background 0.15s',
	'&:hover': {
		transform: 'translateY(-2px)',
		background: '#22c55e'
	}
});

// Celebration
export const CelebrationWrapper = styled('div', {
	position: 'absolute',
	inset: 0,
	zIndex: 20,
	background: '#111',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	opacity: 0,
	visibility: 'hidden',
	transition: 'opacity 1s ease, visibility 1s ease',

	variants: {
		visible: {
			true: { opacity: 1, visibility: 'visible' }
		}
	}
});

export const FilmStripTrack = styled('div', {
	display: 'flex',
	gap: '20px',
	padding: '0 30px',
	height: '100%',
	background: 'linear-gradient(135deg, #F5D28F 0%, #FFD54F 100%)',
	willChange: 'transform'
});

export const FilmFrame = styled('div', {
	aspectRatio: '4 / 3',
	height: '100%',
	borderRadius: '8px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	color: '#fff',
	fontFamily: 'inherit',
	fontSize: '14px',
	border: '3px solid rgba(255,255,255,0.2)',
	background: 'linear-gradient(135deg, #F5D28F 0%, #FFD54F 100%)',
	flexShrink: 0,
	position: 'relative',
	overflow: 'hidden',
	padding: '0 20px',

	'&::before, &::after': {
		content: '""',
		position: 'absolute',
		top: '8px',
		bottom: '8px',
		width: '12px',
		background: `repeating-linear-gradient(
			to bottom,
			#111 0px,
			#111 8px,
			transparent 8px,
			transparent 16px
		)`,
		zIndex: 2
	},

	'&::before': {
		left: '4px'
	},

	'&::after': {
		right: '4px'
	}
});

export const FilmFrameLabel = styled('span', {
	marginTop: '8px',
	fontSize: '13px',
	opacity: 0.8
});

export const FinalFrame = styled('div', {
	position: 'absolute',
	inset: 0,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	background: 'linear-gradient(135deg, #F5D28F 0%, #FFD54F 100%)',
	opacity: 0,
	transition: 'opacity 1s ease, transform 1s ease',
	transform: 'scale(0.8)',
	padding: '40px',
	zIndex: 25,

	variants: {
		visible: {
			true: { opacity: 1, transform: 'scale(1)' }
		}
	}
});

export const FinalMessage = styled('p', {
	fontSize: 'clamp(18px, 3vw, 28px)',
	color: 'black',
	textAlign: 'center',
	lineHeight: 1.6,
	maxWidth: '600px',
	fontStyle: 'italic'
});

export const FilmGrain = styled('div', {
	position: 'absolute',
	inset: 0,
	pointerEvents: 'none',
	animation: `${flicker} 2s infinite`,
	background: [
		'repeating-linear-gradient(0deg,',
		'transparent, transparent 2px,',
		'rgba(255,255,255,0.015) 2px,',
		'rgba(255,255,255,0.015) 4px)'
	].join(' '),
	zIndex: 21
});

export const ConfettiParticle = styled('div', {
	position: 'absolute',
	width: '8px',
	height: '8px',
	borderRadius: '50%',
	animation: `${confettiDrop} linear forwards`,
	zIndex: 30
});

export const QuizImageContainer = styled('div', {
	minWidth: '200px',
	maxWidth: '300px',
	position: 'relative',
	overflow: 'hidden',
	padding: '24px',
	borderRadius: '0 24px 24px 0',
	flexShrink: 0
});

export const QuizImage = styled('img', {
	position: 'absolute',
	inset: 0,
	width: '90%',
	height: '100%',
	objectFit: 'contain',
	transition: 'opacity 0.5s ease, transform 0.5s ease',

	variants: {
		visible: {
			true: { opacity: 1, transform: 'scale(1)' },
			false: { opacity: 0, transform: 'scale(0.95)' }
		}
	}
});

export const AdventureTitle = styled('div', {
	fontSize: 'clamp(24px, 4vw, 36px)',
	color: '#fff',
	textShadow: '0 2px 8px rgba(0,0,0,0.3)',
	marginBottom: 450,
	animation: `${float} 3s ease-in-out infinite`,
	fontWeight: 'semibold',
	fontStyle: 'italic'
});

// Flying Birds
export const BirdContainer = styled('div', {
	position: 'absolute',
	inset: 0,
	overflow: 'hidden',
	pointerEvents: 'none',
	zIndex: 2
});

export const BirdWrapper = styled('div', {
	position: 'absolute',
	animation: `${birdFly} linear infinite`,
	animationFillMode: 'backwards'
});

export const BirdWing = styled('path', {
	transformOrigin: '100% 100%',
	animation: `${birdWing} 0.6s ease-in-out infinite`
});
