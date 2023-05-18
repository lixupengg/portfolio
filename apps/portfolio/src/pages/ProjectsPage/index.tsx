// Basic Imports
import React from 'react';
import { RxCaretRight, RxCaretLeft } from 'react-icons/rx';
import { PortfolioItem, Particles } from '@lixupeng/components';
import car from '../../assets/carWithShadow.png';
import MusicIcon from '../../assets/music.png';
import Pin from '../../assets/pin.png';
import { PROJECTS } from './data';

import {
	StyledProjectsWrapper,
	StyledCar,
	StyledPortfolioItemsWrapper,
	StyledParticlesContainer,
	ActivePortfolioItem,
	PassiveHiddenPortfolioItem,
	PassiveShowedPortfolioItem,
	StyledCarWrapper,
	PinCss,
	StyledArrow
} from './styles';

const ProjectsPage = () => {
	const [activeProject, setActiveProject] = React.useState(0);
	const [isArrowHovered, setIsArrowHovered] = React.useState(false);
	const handleClickNextProject = () => {
		if (activeProject < PROJECTS.length - 1) {
			setActiveProject(activeProject + 1);
		}
	};

	const handleClickPrevProject = () => {
		if (activeProject > 0) {
			setActiveProject(activeProject - 1);
		}
	};

	return (
		<>
			<StyledProjectsWrapper id="projectsSection">
				<StyledCarWrapper>
					<StyledCar src={car} alt="bg" />
					<StyledParticlesContainer>
						<Particles icon={MusicIcon} />
					</StyledParticlesContainer>
				</StyledCarWrapper>
				<StyledArrow
					isRight={false}
					onClick={handleClickPrevProject}
					disabled={activeProject === 0}
				>
					<span>
						<RxCaretLeft />
						<RxCaretLeft />
						<RxCaretLeft />
					</span>
				</StyledArrow>
				<StyledPortfolioItemsWrapper>
					{PROJECTS.map((project, index) => {
						if (index <= activeProject) {
							return (
								<>
									<img src={Pin} alt="pin" className={PinCss()} />
									{/* <StyledRope/> */}
									<div
										className={
											index === activeProject
												? ActivePortfolioItem({ isBigSwing: false })
												: PassiveHiddenPortfolioItem()
										}
									>
										<PortfolioItem {...project} />
									</div>
								</>
							);
						} else {
							return (
								<div
									className={PassiveShowedPortfolioItem({ isBigSwing: false })}
									style={{
										marginLeft: `${Math.random() * 75 - 50}px`,
										marginBottom: `${Math.random() * 50 + 30}px`
									}}
								>
									<PortfolioItem {...project} />
								</div>
							);
						}
					})}
				</StyledPortfolioItemsWrapper>
				<StyledArrow
					isRight
					onMouseEnter={() => setIsArrowHovered(true)}
					onMouseLeave={() => setIsArrowHovered(false)}
					onClick={handleClickNextProject}
					disabled={activeProject === PROJECTS.length - 1}
				>
					<span>
						<RxCaretRight />
						<RxCaretRight />
						<RxCaretRight />
					</span>
				</StyledArrow>
			</StyledProjectsWrapper>
		</>
	);
};

export default ProjectsPage;
