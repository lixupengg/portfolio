import React, { ReactNode } from 'react';

/* Styles */
import { StyledRocketEmojiBackground } from './styledComponents';

const RocketEmojiBackground = () => {
	return (
		<StyledRocketEmojiBackground>
			{/* Rocket emoji */}
			<span role="img" aria-label="rocket">
				🚀
			</span>
		</StyledRocketEmojiBackground>
	);
};

export default RocketEmojiBackground;
