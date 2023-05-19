// Basic Imports
import React, { useEffect } from 'react';
import { IoIosRocket } from 'react-icons/io';
import { Loader } from '@lixupeng/components';
import { history } from '@lixupeng/utils';

import Skateboard from '../../assets/beach.png';
import { EXPERIENCES } from './data';

import {
	StyledExperiencePageWrapper,
	StyledExperiencesInfo,
	StyledImageWrapper,
	StyledImage,
	StyledTag,
	StyledRole,
	StyledLocation,
	StyledNav,
	StyledNavLine,
	StyledExperience,
	StyledExperienceLocationImg
} from './styles';

const ExperiencesPage = () => {
	const [activeExperienceShowed, setActiveExperienceShowed] = React.useState(0);

	React.useEffect(() => {
		// Track which experience is being showed
		const handleScroll = () => {
			// Find which experience section is being showed by the experience-id
			const experienceSections = document.querySelectorAll(
				'[id^="experience-"]'
			);
			const experienceSectionsArray = Array.from(experienceSections);
			const windowHeight = window.innerHeight;
			const currentExperience = experienceSectionsArray
				.reverse()
				.find((experience: any) => {
					const rect = experience.getBoundingClientRect();
					return rect.top <= 0.5 * windowHeight;
				});
			const experienceNum = currentExperience?.id?.split('-')[1];
			if (experienceNum) {
				setActiveExperienceShowed(parseInt(experienceNum, 10));
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const jumpToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};

	return (
		<StyledExperiencePageWrapper>
			<StyledNav>
				{EXPERIENCES.map((_experience: any, index: number) => {
					return (
						<StyledNavLine
							active={activeExperienceShowed === index}
							key={index}
							onClick={() => jumpToSection(`experience-${index}`)}
						/>
					);
				})}
			</StyledNav>
			<StyledExperiencesInfo>
				{EXPERIENCES.map((experience: any, index: number) => (
					<StyledExperience key={index} id={`experience-${index}`}>
						<StyledExperienceLocationImg
							src={experience.locationImg}
							alt="bg"
						/>
						<h2>
							{experience.company} <StyledTag>&lt;&gt;&nbsp;</StyledTag>
						</h2>
						<StyledLocation>
							<p>
								{' '}
								{experience.location} {`//`} {experience.date}{' '}
							</p>
						</StyledLocation>
						<StyledRole>
							<p>{experience.title}</p>
						</StyledRole>
						{experience.description.map((description: string) => (
							<p>
								<StyledTag>&lt;li&gt;&nbsp;</StyledTag>
								{description}
								<StyledTag>&nbsp;&lt;/li&gt;&nbsp;</StyledTag>
							</p>
						))}
						<h2>
							<StyledTag>&nbsp;&lt;/&gt;</StyledTag>
						</h2>
					</StyledExperience>
				))}
			</StyledExperiencesInfo>
			<StyledImageWrapper>
				<StyledImage src={Skateboard} alt="skateboard-dude" />
			</StyledImageWrapper>
		</StyledExperiencePageWrapper>
	);
};

export default ExperiencesPage;
