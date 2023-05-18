// Basic Imports
import React from 'react';
import { history } from '@lixupeng/utils';
import { StyledPortfolioItem, StyledPortfolioInfo, StyledDisplayImage } from './styles';


interface PortfolioItemProps {
	displayImg: string;
	addBackgroundToDisplayImg?: boolean;
	backgroundImg: string;
	title: string;
	description: string;
	stack: string[];
	milestones: string[];
}

const PortfolioItem = (props: PortfolioItemProps) => {
	const { displayImg, backgroundImg, title, description, stack, milestones, addBackgroundToDisplayImg } = props;
	return (
		<StyledPortfolioItem style={{background: backgroundImg}}>
			<StyledPortfolioInfo>
				<h1>{title} <span>\\</span> </h1>
				<p>{description}</p>
				<h6> MILESTONES ACHIEVED </h6>
				{
					milestones?.map((milestone, index) => (
						<p key={index}>{milestone}</p>
					))
				}
				{/* <h6> STACK USED </h6>
				<p>{stack?.join(', ')}</p> */}
			</StyledPortfolioInfo>
			<StyledDisplayImage 
				addBackground={addBackgroundToDisplayImg} 
				src={displayImg} 
				alt="display"
			/>
		</StyledPortfolioItem>
	);
};

export default PortfolioItem;
