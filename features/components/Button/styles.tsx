import { styled } from '@stitches/react';

export const StyledButton = styled('button', {
	padding: '$veryTiny $tiny',
	borderRadius: '$tiny',
	fontSize: '$content14',
	fontWeight: '$semibold',
	minWidth: '$buttonMinWidth',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	
	variants: {
		type: {
			'primary': {
				background: '$primaryColor4',
				color: '$primaryColor11',
				border: '1px solid $primaryColor4',
				'&:hover': {
					background: '$primaryColor5',
					border: '1px solid $primaryColor5',
				},
				'&:active': {
					background: '$primaryColor6',
					border: '1px solid $primaryColor6',
				},
			},
			'secondary': {
				background: '$secondaryColor4',
				color: '$secondaryColor11',
				border: '1px solid $secondaryColor4',
				'&:hover': {
					background: '$secondaryColor5',
					border: '1px solid $secondaryColor5',
				},
				'&:active': {
					background: '$secondaryColor6',
					border: '1px solid $secondaryColor6',
				},
			},
			'secondaryStrong': {
				background: '$secondaryColor9',
				color: '$white',
				border: '1px solid $secondaryColor9',
				boxShadow: '$large',
				'&:hover': {
					background: '$secondaryColor10',
					border: '1px solid $secondaryColor10',
				},
				'&:active': {
					background: '$secondaryColor10',
					border: '1px solid $secondaryColor10',
				},
			},
			'primaryStrong': {
				background: '$primaryColor9',
				color: '$white',
				border: '1px solid $primaryColor9',
				boxShadow: '$medium',
				'&:hover': {
					background: '$primaryColor10',
					border: '1px solid $primaryColor10',
				},
				'&:active': {
					background: '$primaryColor10',
					border: '1px solid $primaryColor10',
				},
			},
			'outline': {
				background: '$white',
				color: '$primaryColor11',
				border: '1px solid $primaryColor7',
				'&:hover': {
					background: '$white',
					color: '$primaryColor12',
					border: '1px solid $primaryColor12',
				},
				'&:active': {
					background: '$white',
					color: '$primaryColor12',
					border: '1px solid $primaryColor12',
				},
			},
			'outlineSecondary': {
				background: '$white',
				color: '$secondaryColor11',
				border: '1px solid $secondaryColor7',
				'&:hover': {
					background: '$secondaryColor8',
					color: '$white',
				},
				'&:active': {
					background: '$secondaryColor8',
					color: '$white',
				},
			},
			'white': {
				background: '$white',
				color: '$grey11',
				fontWeight: '$bold',
				border: '1px solid $grey7',
				'&:hover': {
					background: '$white',
					border: '1px solid $grey8',
				},
				'&:active': {
					background: '$white',
					border: '1px solid $grey9',
				},
			},
			'black': {
				background: '$primaryColor12',
				color: '$primaryColor1',
				'&:hover': {
					background: '$primaryColor12',
					opacity: '0.9',
				},
				'&:active': {
					background: '$primaryColor12',
					opacity: '0.9',
				},
				'svg': {
					color: '$primaryColor1',
				}
			},
			'link': {
				background: 'transparent',
				color: '$primaryColor11',
				border: 'none',
				'&:hover': {
					background: 'transparent',
					color: '$primaryColor12',
				},
				'&:active': {
					background: 'transparent',
					color: '$primaryColor12',
				},
			},
			'icon': {
				background: 'transparent',
				color: '$primaryColor7',
				border: 'none',
				padding: 0,
				'&:hover': {
					background: 'transparent',
					color: '$primaryColor8',
				},
				'&:active': {
					background: 'transparent',
					color: '$primaryColor9',
				},
			},
		}
	}
});
