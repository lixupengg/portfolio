import React, { useState } from 'react';
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
	BackToMapButton
} from './styles';

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

	const handleAnswer = (optionIndex: number) => {
		if (disabledOptions.has(optionIndex)) return;

		setSelectedOption(optionIndex);

		if (optionIndex === currentQ.correctIndex) {
			setAnswerState({ [optionIndex]: 'correct' });
			setFeedback(milestone.correctMessage);

			if (qIndex === 0) {
				// Auto-advance to Q2
				setTimeout(() => {
					setQIndex(1);
					setFeedback('');
					setAnswerState({});
					setDisabledOptions(new Set());
					setSelectedOption(null);
				}, 1500);
			} else {
				// Both done
				setTimeout(() => {
					setMilestoneComplete(true);
					setShowConfetti(true);
				}, 1000);
			}
		} else {
			setAnswerState((prev) => ({ ...prev, [optionIndex]: 'wrong' }));
			setDisabledOptions((prev) => new Set(prev).add(optionIndex));
			setFeedback(milestone.wrongMessage);
		}
	};

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
			{/* Placeholder photo area */}
			<div
				style={{
					width: '100%',
					height: '80px',
					borderRadius: '12px',
					background: `linear-gradient(90deg, ${milestone.gradient[0]}88, ${milestone.gradient[1]}88)`,
					marginBottom: '16px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: '28px'
				}}
			>
				📸
			</div>
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
						style={
							opt.image
								? { backgroundImage: `url(${opt.image})` }
								: undefined
						}
					>
						<AnswerLabel>{opt.label}</AnswerLabel>
					</AnswerButton>
				))}
			</AnswerGrid>
			<FeedbackText>{feedback}</FeedbackText>
		</QuizCard>
	);
};

export default QuizScreen;
