// Basic Imports
import React, { useMemo, useState } from 'react';
import { Button } from '@lixupeng/components';
import { keyframes, styled } from '@stitches/react';
import { Modal } from 'rsuite';
import ConfettiExplosion from 'react-confetti-explosion';
// @ts-ignore
// @ts-ignore
import Cat1 from '../../assets/stickers/cat1.webm';
// @ts-ignore
import Cat2 from '../../assets/stickers/cat2.webm';
// @ts-ignore
import Cat3 from '../../assets/stickers/cat3.webm';
// @ts-ignore
import Cat4 from '../../assets/stickers/cat4.webm';
// @ts-ignore
import Nailong1 from '../../assets/stickers/nailong1.webm';
// @ts-ignore
import Nailong2 from '../../assets/stickers/nailong2.webm';
// @ts-ignore
import Dog from '../../assets/stickers/dog.webp';
// @ts-ignore
import MyDestiny from '../../assets/music/myDestiny.mp3';
// @ts-ignore
import Maple from '../../assets/music/maple.mp3';
import Peach1 from '../../assets/stickersImg/peachImg1.png';
import Peach2 from '../../assets/stickersImg/peachImg2.png';
import Peach3 from '../../assets/stickersImg/peachImg3.png';
import Peach4 from '../../assets/stickersImg/peachImg4.png';
import Peach5 from '../../assets/stickersImg/peachImg5.png';
import Peach6 from '../../assets/stickersImg/peachImg6.png';
import Peach7 from '../../assets/stickersImg/peachImg7.png';
import Peach8 from '../../assets/stickersImg/peachImg8.png';
import Peach9 from '../../assets/stickersImg/peachImg9.png';
import Peach10 from '../../assets/stickersImg/peachImg10.png';

import {
	EscapedButtonEasyClassName,
	EscapedButtonHardClassName,
	EscapedButtonMediumClassName,
	NoButton,
	StyledDogBot1,
	StyledDogBot2,
	StyledDogBot3,
	StyledDogBot4,
	StyledDogBot5,
	StyledHomePageWrapper,
	StyledRow,
	YesButton,
	YesButtonEasyClassName,
	YesButtonHardClassName,
	YesButtonImpossibleClassName,
	YesButtonMediumClassName
} from './styles';

type Config = {
	quesToStep: string;
	msg: string;
	nextSteps: number[];
	sticker: string;
	buttonType: 'yes' | 'no';
	buttonClass?: string;
	yesButtonClass?: string;
};

const cfg: Record<number, Config> = {
	1: {
		quesToStep: 'Restart!',
		msg: 'Hello Jia Xuan Kuah! Will you be go out with me on vday!!!! I dare you to say no!!',
		nextSteps: [2, 3],
		sticker: Cat1,
		buttonType: 'yes'
	},
	// Initial yes
	2: {
		quesToStep: 'YES!!!!!',
		msg: 'Yay!!! Oki lets meet at 630pm on Wed :---) See you then! Hehe I love you!',
		nextSteps: [1],
		sticker: Cat2,
		buttonType: 'yes'
	},
	// Initial no
	3: {
		quesToStep: 'NO!!!',
		msg: `ha ha ha I knew you would be easily baited and be taunted 
		to try to click no!!!`,
		nextSteps: [2, 4],
		sticker: Cat3,
		buttonType: 'no',
		yesButtonClass: YesButtonEasyClassName()
	},
	// No easy
	4: {
		quesToStep: 'but now the no button is escaping!',
		msg: 'I see you are very persistent! But now the no is rolling away!!!!! Rolling rolling rolling~',
		nextSteps: [2, 5],
		sticker: Nailong2,
		buttonType: 'no',
		buttonClass: EscapedButtonEasyClassName(),
		yesButtonClass: YesButtonMediumClassName()
	},
	// No medium
	5: {
		quesToStep: 'rolling rolling rolling away no!',
		msg: 'OK I promise that you can say no after you manage to click this now!!!!',
		nextSteps: [2, 6],
		sticker: Cat4,
		buttonType: 'no',
		buttonClass: EscapedButtonMediumClassName(),
		yesButtonClass: YesButtonHardClassName()
	},
	// No hard
	6: {
		quesToStep: 'I AM SPEED NO',
		msg: 'Hehehe sorry you got scammed! You cannot say no!',
		nextSteps: [2],
		sticker: Nailong1,
		buttonType: 'no',
		buttonClass: EscapedButtonHardClassName(),
		yesButtonClass: YesButtonImpossibleClassName()
	}
};

const AudioPlayer = () => {
	return (
		<div>
			{/* eslint-disable-next-line */}
			<audio
				controls
				autoPlay
				id="music"
				style={{ opacity: 0, width: 0, height: 0 }}
			>
				<source src={MyDestiny} type="audio/mpeg" />
				Your browser does not support the audio element.
			</audio>
		</div>
	);
};

const AudioPlayerMaple = () => {
	return (
		<div>
			{/* eslint-disable-next-line */}
			<audio
				controls
				autoPlay
				id="mapleMusic"
				style={{ opacity: 0, width: 0, height: 0 }}
			>
				<source src={Maple} type="audio/mpeg" />
				Your browser does not support the audio element.
			</audio>
		</div>
	);
};

const FallingVideos = (props: { spawn: boolean }) => {
	const { spawn } = props;
	const pictures = [
		Peach1,
		Peach2,
		Peach3,
		Peach4,
		Peach5,
		Peach6,
		Peach7,
		Peach8,
		Peach9,
		Peach10,
		Peach2,
		Peach4,
		Peach6,
		Peach8,
		Peach10
	];
	if (!spawn) {
		return null;
	}
	return (
		<>
			{pictures.map((pic, index) => {
				const fallingAnimation = keyframes({
					'0%': {
						transform: `translateY(${0 - Math.random() * 100}px)`,
						opacity: 1
					},
					'90%': { opacity: 1 },
					'100%': {
						transform: `translateY(${600 + Math.random() * 1000}px) rotate(${
							Math.random() > 0.5 ? Math.random() * 360 : Math.random() * -360
						}deg)`,
						opacity: 0
					}
				});
				const Video = styled('img', {
					position: 'absolute',
					width: '100px',
					height: '100px',
					zIndex: 100,
					left: `${index * 110}px`,
					animation: `${fallingAnimation} ${
						10 + Math.random() * 10
					}s linear infinite`
				});
				// eslint-disable-next-line
				return <Video src={pic} />;
			})}
		</>
	);
};

const HomePage = () => {
	const [currStep, setCurrStep] = React.useState(1);
	const [spawnFallingVideos, setSpawnFallingVideos] = useState(false);
	const [isExploding, setIsExploding] = React.useState(false);
	const [isModalOpen, setIsModalOpen] = React.useState(true);

	const onExplode = () => {
		setIsExploding(true);
	};

	const playMyDestiny = () => {
		const music = document.getElementById('music') as HTMLAudioElement;
		music.play();
	};

	const stopMyDestiny = () => {
		const music = document.getElementById('music') as HTMLAudioElement;
		music.pause();
		music.currentTime = 0;
	};

	const playMapleMusic = () => {
		const music = document.getElementById('mapleMusic') as HTMLAudioElement;
		music.play();
	};

	const stopMapleMusic = () => {
		const music = document.getElementById('mapleMusic') as HTMLAudioElement;
		music.pause();
		music.currentTime = 0;
	};

	const restart = () => {
		setCurrStep(1);
		playMapleMusic();
		setSpawnFallingVideos(false);
		stopMyDestiny();
	};

	const pics = useMemo(() => {
		return <FallingVideos spawn={spawnFallingVideos} />;
	}, [spawnFallingVideos]);

	const renderStep = (step: number) => {
		const config = cfg[step];
		return (
			<>
				{step !== 6 && (
					<>
						<video
							autoPlay
							loop
							muted
							playsInline
							style={{ width: '400px', height: '400px', zIndex: 101 }}
							key={step}
						>
							<source src={config.sticker} type="video/webm" />
							Your browser does not support the video tag.
						</video>
						<p style={{ zIndex: 101 }}>{config.msg}</p>{' '}
					</>
				)}
				<StyledRow>
					{config.nextSteps.map((step) => {
						const nextStepCfg = cfg[step];
						return (
							<>
								{nextStepCfg?.buttonType === 'yes' ? (
									<YesButton
										onClick={() => {
											if (nextStepCfg.quesToStep === 'Restart!') {
												restart();
											} else {
												stopMapleMusic();
												setCurrStep(step);
												onExplode();
												playMyDestiny();
												setSpawnFallingVideos(true);
											}
										}}
										key={step}
										className={`${nextStepCfg?.buttonClass} ${config?.yesButtonClass}`}
									>
										{nextStepCfg?.quesToStep}
									</YesButton>
								) : (
									<NoButton
										onClick={() => setCurrStep(step)}
										key={step}
										className={nextStepCfg?.buttonClass}
									>
										{nextStepCfg?.quesToStep}
									</NoButton>
								)}
							</>
						);
					})}
				</StyledRow>
				{step === 6 && (
					<>
						<video
							autoPlay
							loop
							muted
							playsInline
							style={{
								width: '300px',
								height: '300px',
								zIndex: 101,
								marginTop: '20px'
							}}
							key={step}
						>
							<source src={config.sticker} type="video/webm" />
							Your browser does not support the video tag.
						</video>
						<p style={{ zIndex: 101 }}>{config.msg}</p>{' '}
					</>
				)}
			</>
		);
	};

	const onModalClose = () => {
		setIsModalOpen(false);
		restart();
	};

	return (
		<StyledHomePageWrapper>
			<AudioPlayer />
			<AudioPlayerMaple />
			{pics}
			<StyledDogBot1 src={Dog} alt="dog" />
			<StyledDogBot2 src={Dog} alt="dog" />
			<StyledDogBot3 src={Dog} alt="dog" />
			<StyledDogBot4 src={Dog} alt="dog" />
			<StyledDogBot5 src={Dog} alt="dog" />
			{isExploding && (
				<>
					<ConfettiExplosion
						width={3000}
						height={'99vh'}
						onComplete={() => setIsExploding(false)}
					/>
					<ConfettiExplosion
						width={2000}
						height={'99vh'}
						onComplete={() => setIsExploding(false)}
					/>
				</>
			)}
			{renderStep(currStep)}
			<Modal open={isModalOpen} onClose={onModalClose} autoFocus>
				<Modal.Header>
					<Modal.Title>
						Moshi Moshi <br /> <br />
						Please turn on your sound for the optimal experience!
						<br />
						<br />
					</Modal.Title>
				</Modal.Header>
				<Modal.Footer>
					<Button onClick={onModalClose}>Ok</Button>
				</Modal.Footer>
			</Modal>
		</StyledHomePageWrapper>
	);
};

export default HomePage;
