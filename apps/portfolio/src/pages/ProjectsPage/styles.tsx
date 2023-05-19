import { styled, css, keyframes } from '@stitches/react';

// Animate image from left to right
const moveInLeft = keyframes({
	'0%': {
		backgroundPosition: '0%, 0%'
	},
	'100%': {
		backgroundPosition: '-2000%, 0%'
	}
});

const animateBounceUpDown = keyframes({
	'0%': {
		transform: 'translateY(0px)'
	},
	'50%': {
		transform: 'translateY(-5px)'
	},
	'100%': {
		transform: 'translateY(0px)'
	}
});

const swing = keyframes({
	'0%': {
		transform: 'rotate(2deg)'
	},
	'100%': {
		transform: 'rotate(-8deg)'
	}
});

const smallSwing = keyframes({
	'0%': {
		transform: 'rotate(2deg)'
	},
	'100%': {
		transform: 'rotate(-2deg)'
	}
});

const colorArrows = keyframes({
	'0%': {
		color: '$grey8'
	},
	'39%': {
		color: '$grey8'
	},
	'40%': {
		color: '$grey12'
	},
	'100%': {
		color: '$grey12'
	}
});

/* Wrappers --------------------------------------------------------------------------------- */
export const StyledProjectsWrapper = styled('div', {
	position: 'fixed',
	width: '100%',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start',
	background: `url(${`${window.location}/upscaledRoadBg.jpeg`})`,
	backgroundSize: 'cover',
	backgroundRepeat: 'repeat-x',
	animation: `${moveInLeft} 600s linear infinite`,
	backfaceVisibility: 'hidden',
	paddingBottom: '100px',

	'@media (max-width: 1024px)': {
		justifyContent: 'center'
	}
});

const moveIntoScreenFromTopAndBounceAtBottom = keyframes({
	'0%': {
		transform: 'translateY(-200%)'
	},

	'40%': {
		transform: 'translateY(-200%)'
	},
	'60%': {
		transform: 'translateY(0%)'
	},
	'100%': {
		transform: 'translateY(0%)'
	}
});

export const StyledPortfolioItemsWrapper = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	position: 'relative',
	maxWidth: '450px',
	animation: `${moveIntoScreenFromTopAndBounceAtBottom} 4.5s linear`,
	'@media (max-width: 1024px)': {
		animation: 'none',
		transform: 'scale(0.8)'
	},
	'@media (max-width: 700px)': {
		animation: 'none',
		transform: 'scale(0.6)'
	}
});

/* Portfolio Item --------------------------------------------------------------------------------- */
export const ActivePortfolioItem = css({
	transition: 'all 0.5s',
	zIndex: 1,
	transformOrigin: 'top left',
	animation: `${smallSwing} ease-in-out 2s infinite alternate`,

	'&:hover': {
		animation: 'none',
		transform: 'none'
	},
	variants: {
		isBigSwing: {
			true: {
				animationDuration: '0.4s'
			}
		}
	}
});

export const PassiveHiddenPortfolioItem = css({
	transition: 'all 0.5s',
	position: 'absolute',
	opacity: '0',
	marginTop: '20px',
	marginLeft: '2000px',
	transform: 'rotate(10deg)',
	pointerEvents: 'none'
});

export const PassiveShowedPortfolioItem = css({
	transformOrigin: 'top left',
	transition: 'all 2.5s',
	left: '0',
	top: '0',
	position: 'absolute',
	pointerEvents: 'none',
	animation: `${swing} ease-in-out infinite 2s alternate`,

	// For even childs
	'&:nth-child(even)': {
		animationDelay: `${Math.random() * 3}s`
	},

	variants: {
		isBigSwing: {
			true: {
				animationDuration: '0.3s'
			}
		}
	}
});

export const PinCss = css({
	position: 'absolute',
	zIndex: 2,
	top: '-20px',
	left: '0',
	color: '$systemRed',
	width: '60px',
	height: '60px',
	objectFit: 'contain'
});

/* Navigation Arrows --------------------------------------------------------------------------------- */
const fadeInArrows = keyframes({
	'0%': {
		opacity: '0'
	},
	'50%': {
		opacity: '0'
	},
	'100%': {
		opacity: '1'
	}
});
export const StyledArrow = styled('div', {
	animation: `${animateBounceUpDown} 1s linear infinite`,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: '50px',
	span: {
		animation: `${fadeInArrows} 4.5s linear`,
		transition: 'all 0.5s',
		pointerEvents: 'none',
		margin: '0',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100px',
		'> svg': {
			fontSize: '38px',
			color: '$grey12',
			'&:nth-child(2)': {
				marginLeft: '-20px'
			},
			'&:nth-child(3)': {
				marginLeft: '-20px'
			}
		}
	},

	'&:hover': {
		cursor: 'pointer',

		span: {
			background: 'rgba(255, 255, 255, 0.4)',
			border: 'none',
			height: '50px',
			'> svg': {
				border: 'none',
				animation: `${colorArrows} 1s linear infinite`
			}
		},

		'&:before': {
			height: '100%'
		}
	},

	'@media (max-width: 1024px)': {
		margin: '0 !important',
		position: 'absolute',
		animation: 'none',
		span: {
			animation: 'none'
		}
	},

	variants: {
		disabled: {
			true: {
				opacity: '0.3',
				pointerEvents: 'none'
			}
		},
		isRight: {
			true: {
				marginLeft: '$large',
				span: {
					height: '100px',
					borderLeft: '1px solid $grey12',
					'> svg': {
						'&:nth-child(1)': {
							animationDelay: '0s'
						},
						'&:nth-child(2)': {
							animationDelay: '0.33s'
						},
						'&:nth-child(3)': {
							animationDelay: '0.66s'
						}
					}
				},

				'@media (max-width: 1024px)': {
					right: '10%',
					bottom: '15%',
					background: '$white',
					border: '1px solid $black',

					span: {
						border: 'none'
					}
				}
			},

			false: {
				marginRight: '$large',
				marginLeft: '10%',
				span: {
					height: '100px',
					borderRight: '1px solid $grey12',
					'> svg': {
						'&:nth-child(1)': {
							animationDelay: '0.66s'
						},
						'&:nth-child(2)': {
							animationDelay: '0.33s'
						},
						'&:nth-child(3)': {
							animationDelay: '0s'
						}
					}
				},

				'@media (max-width: 1024px)': {
					left: '10%',
					bottom: '15%',
					background: '$white',
					border: '1px solid $black',

					span: {
						border: 'none'
					}
				}
			}
		}
	}
});

/* Car --------------------------------------------------------------------------------- */
const moveIntoScreenFromRight = keyframes({
	'0%': {
		right: '-70%'
	},
	'25%': {
		right: '-70%'
	},
	'100%': {
		right: '50px'
	}
});

export const StyledCarWrapper = styled('div', {
	position: 'absolute',
	bottom: '-50px',
	right: '50px',
	height: '50%',
	animation: `${moveIntoScreenFromRight} 2s linear`,

	'@media (max-width: 1024px)': {
		right: '-300px',
		animation: 'none'
	}
});

export const StyledCar = styled('img', {
	height: '100%',
	objectFit: 'contain',
	animation: `${animateBounceUpDown} 1s linear infinite`,
	backfaceVisibility: 'hidden'
});

export const StyledParticlesContainer = styled('div', {
	zIndex: -1,
	bottom: '55%',
	right: '45%',
	position: 'absolute',
	background: 'blue'
});
