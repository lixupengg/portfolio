// Basic Imports
import React, { useEffect } from 'react';
import { IoIosRocket } from 'react-icons/io';
import { Loader } from '@lixupeng/components';
import { history } from '@lixupeng/utils';

import Book from '../../assets/book4.svg';
import BookDesc from '../../assets/bookDesc1.svg';
import MangaPattern from '../../assets/mangaPattern.svg';
import TitlePattern from '../../assets/titlePattern.svg';

import { BOOKS } from './data';

import {
	StyledExperiencePageWrapper,
	StyledLeftPanel,
	StyledRow,
	StyledBookPanel,
	StyledBookTitle,
	StyledBookDescription,
	StyledRightPanel,
	StyledImage,
	StyledBookImg,
	StyledBookDescriptionImg,
	StyledBookDescriptionContent,
	StyledBookSectionTitle,
	StyledMangaPatternImg,
	StyledTitlePatternImg
} from './styles';

const ReadPage = () => {
	return (
		<StyledExperiencePageWrapper>
			<StyledBookSectionTitle>
				<StyledTitlePatternImg src={TitlePattern} alt="pattern" />
				<p> BOOK TAKEAWAYS FROM</p>
				<h2> 2022 to Present</h2>
			</StyledBookSectionTitle>
			{BOOKS.map((book, index) => (
				<StyledLeftPanel key={index}>
					<StyledRow>
						<StyledBookPanel>
							<StyledBookImg src={book.bookPhoto} alt="anytgin you want" />
						</StyledBookPanel>
						<StyledBookTitle>
							<h2>{book.bookTitle}</h2>
							<p>{book.bookAuthor}</p>
						</StyledBookTitle>
					</StyledRow>
					<StyledBookDescription>
						<StyledBookDescriptionImg src={BookDesc} alt="anytgin you want" />
						<StyledMangaPatternImg src={MangaPattern} alt="pattern" />
						<StyledBookDescriptionContent>
							{book.bookTakeaways.map((takeaway: string, index: number) => (
								<p key={index}>{takeaway}</p>
							))}
						</StyledBookDescriptionContent>
					</StyledBookDescription>
				</StyledLeftPanel>
			))}
			<StyledRightPanel>
				<StyledImage src={Book} alt="skateboard-dude" />
			</StyledRightPanel>
		</StyledExperiencePageWrapper>
	);
};

export default ReadPage;
