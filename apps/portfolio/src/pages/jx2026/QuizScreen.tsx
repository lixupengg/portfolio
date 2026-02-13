import React, { useState, useMemo } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { Milestone } from './data';
import {
	QuizCard,
	QuizTitle,
	QuestionText,
	AnswerGrid,
	AnswerButton,
	AnswerLabel,
	FeedbackText,
	BackToMapButton,
	QuizImageContainer,
	QuizImage
} from './styles';

// Import sticker images
import peachImg1 from '../../assets/stickersImg/peachImg1.png';
import peachImg2 from '../../assets/stickersImg/peachImg2.png';
import peachImg3 from '../../assets/stickersImg/peachImg3.png';
import peachImg4 from '../../assets/stickersImg/peachImg4.png';
import peachImg5 from '../../assets/stickersImg/peachImg5.png';
import peachImg6 from '../../assets/stickersImg/peachImg6.png';
import peachImg7 from '../../assets/stickersImg/peachImg7.png';
import peachImg8 from '../../assets/stickersImg/peachImg8.png';
import peachImg9 from '../../assets/stickersImg/peachImg9.png';
import peachImg10 from '../../assets/stickersImg/peachImg10.png';

const stickerImages = [
	peachImg1, peachImg2, peachImg3, peachImg4, peachImg5,
	peachImg6, peachImg7, peachImg8, peachImg9, peachImg10
];

type Props = {
	milestone: Milestone;
	onComplete: () => void;
};

const QuizScreen: React.FC<Props> = ({ milestone, onComplete }) => {
	const [qIndex, setQIndex] = useState(0);
	const [feedback, setFeedback] = useState('');
	const [disabledOptions, setDisabledOptions] = useState<Set<number>>(new Set());
	const [answerState, setAnswerState] = useState<Record<number, 'correct' | 'wrong'>>({});
	const [selectedOption, setSelectedOption] = useState<number | null>(null);
	const [milestoneComplete, setMilestoneComplete] = useState(false);
	const [showConfetti, setShowConfetti] = useState(false);

	const currentQ = milestone.questions[qIndex];

	// Assign random stickers to each option (stable across re-renders, changes per question)
	const optionStickers = useMemo(() => {
		return currentQ.options.map(() =>
			stickerImages[Math.floor(Math.random() * stickerImages.length)]
		);
	}, [qIndex, milestone.id]);

	const handleAnswer = (optionIndex: number) => {
		if (disabledOptions.has(optionIndex)) return;

		setSelectedOption(optionIndex);

		if (optionIndex === currentQ.correctIndex) {
			setAnswerState({ [optionIndex]: 'correct' });
			setFeedback(milestone.correctMessage);
		} else {
			setAnswerState((prev) => ({ ...prev, [optionIndex]: 'wrong' }));
			setDisabledOptions((prev) => new Set(prev).add(optionIndex));
			setFeedback(milestone.wrongMessage);
		}
	};

	const handleNextQuestion = () => {
		if (qIndex === 0) {
			setQIndex(1);
			setFeedback('');
			setAnswerState({});
			setDisabledOptions(new Set());
			setSelectedOption(null);
		} else {
			setMilestoneComplete(true);
			setShowConfetti(true);
		}
	};

	const isCurrentQuestionCorrect = answerState[currentQ.correctIndex] === 'correct';

	const gradientBg = `linear-gradient(135deg, ${milestone.gradient[0]} 0%, ${milestone.gradient[1]} 100%)`;

	if (milestoneComplete) {
		return (
			<QuizCard style={{ background: gradientBg }}>
				{showConfetti && (
					<ConfettiExplosion
						width={800}
						height={'80vh' as any}
						onComplete={() => setShowConfetti(false)}
					/>
				)}
				<QuizTitle>Milestone Complete!</QuizTitle>
				<p style={{ fontSize: '48px', margin: '16px 0' }}>🎉</p>
				<p style={{ fontSize: '16px', marginBottom: '16px' }}>
					You conquered &ldquo;{milestone.title}&rdquo;!
				</p>
				<BackToMapButton onClick={onComplete}>
					Back to Map
				</BackToMapButton>
			</QuizCard>
		);
	}

	return (
		<QuizCard style={{ background: gradientBg }}>
			<QuizTitle>{milestone.title}</QuizTitle>
			{/* Quiz image area - shows qnsPic during question, ansPic after correct answer */}
			{((currentQ.qnsPic && !isCurrentQuestionCorrect) || (currentQ.ansPic && isCurrentQuestionCorrect)) && (
				<QuizImageContainer>
					{currentQ.qnsPic && currentQ.ansPic ? (
						<>
							<QuizImage src={currentQ.qnsPic} visible={!isCurrentQuestionCorrect} alt="Question" />
							<QuizImage src={currentQ.ansPic} visible={isCurrentQuestionCorrect} alt="Answer" />
						</>
					) : currentQ.qnsPic ? (
						<QuizImage src={currentQ.qnsPic} visible alt="Question" />
					) : (
						<QuizImage src={currentQ.ansPic} visible alt="Answer" />
					)}
				</QuizImageContainer>
			)}
			<QuestionText>
				Q{qIndex + 1}/2: {currentQ.question}
			</QuestionText>
			<AnswerGrid>
				{currentQ.options.map((opt, i) => (
					<AnswerButton
						key={`${qIndex}-${i}`}
						state={answerState[i]}
						selected={selectedOption === i}
						disabled={
							disabledOptions.has(i) ||
							!!answerState[currentQ.correctIndex]
						}
						onClick={() => handleAnswer(i)}
						style={{
							backgroundColor: '#FFD54F',
							backgroundImage: `url(${opt.image || optionStickers[i]})`,
							backgroundSize: 'contain',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center'
						}}
					>
						<AnswerLabel>{opt.label}</AnswerLabel>
					</AnswerButton>
				))}
			</AnswerGrid>
			<FeedbackText>{feedback}</FeedbackText>
			{isCurrentQuestionCorrect && (
				<BackToMapButton onClick={handleNextQuestion}>
					{qIndex === 0 ? 'Next Question' : 'Complete'}
				</BackToMapButton>
			)}
		</QuizCard>
	);
};

export default QuizScreen;
