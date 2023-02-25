import React, { ReactNode } from 'react';
import { Loader as RsuiteLoader} from 'rsuite';

/* Styles */
import { StyledLoaderBackground } from './styles';

interface LoaderProps {
	type: 'background' | 'inline';
}

const Loader = (props: LoaderProps) => {
	const { type } = props;
	return (
		<>
			{type === 'background' ? (
				<StyledLoaderBackground>
					<RsuiteLoader backdrop content="" vertical size="md" />
				</StyledLoaderBackground>
			) : (
				<RsuiteLoader content="" vertical />
			)}
		</>
	);
};

export default Loader;
