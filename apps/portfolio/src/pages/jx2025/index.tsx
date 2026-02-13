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
import MyDestiny from '../../assets/jx2025/finale.mp3';
// @ts-ignore
import KwenchanaMusic from '../../assets/jx2025/kwenchana.mp3';
// @ts-ignore
import Maple from '../../assets/jx2025/qot.mp3';
// @ts-ignore
import KwenchanaVideo from '../../assets/jx2025/kwenchana_1.mp4';
// @ts-ignore
import KwenchanaVideo2 from '../../assets/jx2025/kwenchana_2.mp4';
import Peach1 from '../../assets/jx2025/Peach1.jpg';
import Peach2 from '../../assets/jx2025/Peach2.jpg';
import Peach3 from '../../assets/jx2025/Peach3.jpg';
import Peach4 from '../../assets/jx2025/Peach4.jpg';
import Peach5 from '../../assets/jx2025/Peach5.jpg';
import Peach6 from '../../assets/jx2025/Peach6.jpg';
import Peach7 from '../../assets/jx2025/Peach7.jpg';
import Peach8 from '../../assets/jx2025/Peach8.jpg';
import Peach9 from '../../assets/jx2025/Peach9.jpg';
import Peach10 from '../../assets/jx2025/Peach10.jpg';

import {
	EscapedButtonEasyClassName,
	EscapedButtonHardClassName,
	EscapedButtonMediumClassName,
	NoButton,
	StyledHomePageWrapper,
	StyledPhoto,
	StyledPhotoStrip,
	StyledPhotoStripRight,
	StyledPictureGame,
	StyledRow,
	YesButton,
	YesButtonEasyClassName,
	YesButtonHardClassName,
	YesButtonImpossibleClassName,
	YesButtonMediumClassName
} from './styles';
import NoButtonGame from './NoButtonGame';

type Config = {
	quesToStep: string;
	msg: string | React.ReactNode;
	nextSteps: number[];
	sticker: string;
	buttonType: 'yes' | 'no';
	buttonClass?: string;
	yesButtonClass?: string;
	customStep?: (props: {
		onYes: () => void;
		onNo: () => void;
	}) => React.ReactNode;
};

const cfg: Record<number, Config> = {
	1: {
		quesToStep: 'Restart!',
		msg: (
			<>
				<div
					style={{ textAlign: 'center', background: 'yellow', color: 'black' }}
				>
					Hello Jia Xuan Kuah!
				</div>
				<div> Will you be go out with me on Vday :-D Yes or No</div>
			</>
		),
		nextSteps: [2, 3],
		sticker: Cat1,
		buttonType: 'yes'
	},
	// Initial yes
	2: {
		quesToStep: 'yes',
		msg: (
			<>
				<div style={{ background: 'black' }}>YAY good job!!!!</div>
				<div style={{ background: 'black' }}>
					Lets meet at 6pm on Friday hehe
				</div>
				<div style={{ background: 'yellow', color: 'black', fontSize: '26px' }}>
					I love you bdd!
				</div>
			</>
		),
		nextSteps: [1],
		sticker: Cat2,
		buttonType: 'yes'
	},
	// Initial no
	3: {
		quesToStep: 'no i am notti',
		msg: `you are so notti i knew it!!!! dont make me hide the no button!!!`,
		nextSteps: [2, 4],
		sticker: Cat3,
		buttonType: 'no',
		yesButtonClass: YesButtonEasyClassName()
	},
	// No easy
	4: {
		quesToStep: 'but it is kwenchana! ding ding ding ding ding',
		customStep: (props) => <NoButtonGame {...props} />,
		msg: '',
		nextSteps: [2, 5],
		sticker: Nailong2,
		buttonType: 'no',
		buttonClass: EscapedButtonEasyClassName(),
		yesButtonClass: YesButtonMediumClassName()
	},
	// No medium
	5: {
		quesToStep: 'rolly polly olly',
		msg: 'hey how can!!!!! so mean!!!!! ok last one!',
		nextSteps: [2, 6],
		sticker: Cat4,
		buttonType: 'no',
		buttonClass: EscapedButtonMediumClassName(),
		yesButtonClass: YesButtonHardClassName()
	},
	// No hard
	6: {
		quesToStep: 'vroom vroom noooo',
		msg: (
			<>
				<div>I guess you never learn from last year... </div>
				<div>You are trapped! You cannot say no!!!</div>
			</>
		),
		nextSteps: [2],
		sticker: Nailong1,
		buttonType: 'no',
		buttonClass: EscapedButtonHardClassName(),
		yesButtonClass: YesButtonImpossibleClassName()
	}
};

const KwenchanaPlayer = () => {
	return (
		<div>
			{/* eslint-disable-next-line */}
			<audio
				controls
				autoPlay
				id="kwenchanaMusic"
				style={{ opacity: 0, width: 0, height: 0 }}
			>
				<source src={KwenchanaMusic} type="audio/mpeg" />
				Your browser does not support the audio element.
			</audio>
		</div>
	);
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
						transform: `translateY(${600 + Math.random() * 1000}px) 
							rotate(${Math.random() > 0.5 ? Math.random() * 360 : Math.random() * -360}deg)`,
						opacity: 0
					}
				});
				const Video = styled('img', {
					position: 'absolute',
					height: '100px',
					zIndex: 100,
					left: `${index * 110}px`,
					background: 'white',
					objectFit: 'contain',
					padding: '5px',
					paddingBottom: '18px',
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

const Kwenchana = ({ playKwenchanaVideo }: { playKwenchanaVideo: boolean }) => {
	const [showVideo1, setShowVideo1] = React.useState(false);
	const [showVideo2, setShowVideo2] = React.useState(false);

	React.useEffect(() => {
		if (playKwenchanaVideo) {
			const timer = setTimeout(() => {
				setShowVideo1(true);
			}, 700);

			const timer2 = setTimeout(() => {
				setShowVideo2(true);
			}, 4300);

			return () => {
				clearTimeout(timer);
				clearTimeout(timer2);
			};
		} else {
			return () => null;
		}
	}, [playKwenchanaVideo]);

	React.useEffect(() => {
		if (showVideo1) {
			const hideTimer = setTimeout(() => {
				setShowVideo1(false);
			}, 2800);

			return () => clearTimeout(hideTimer);
		} else if (showVideo2) {
			const hideTimer = setTimeout(() => {
				setShowVideo2(false);
			}, 2800);

			return () => clearTimeout(hideTimer);
		} else {
			return () => null;
		}
	}, [showVideo1, showVideo2]);

	if (!showVideo1 && !showVideo2) {
		return null;
	}

	if (showVideo1) {
		return (
			<div
				style={{
					position: 'fixed',
					top: '10%',
					left: '10%',
					width: '30%',
					height: '60%',
					zIndex: 1000
				}}
			>
				<video
					src={KwenchanaVideo}
					autoPlay
					playsInline
					style={{
						width: '100%',
						height: '100%',
						zIndex: 1000,
						transform: 'rotate(-10deg)'
					}}
					onLoadedMetadata={(e) => {
						const video = e.target as HTMLVideoElement;
						video.playbackRate = 2.0;
					}}
				>
					<track kind="captions" label="English" src="" default />
				</video>
			</div>
		);
	} else {
		return (
			<div
				style={{
					position: 'fixed',
					top: '20%',
					right: '10%',
					width: '30%',
					height: '60%',
					zIndex: 1000
				}}
			>
				<video
					src={KwenchanaVideo2}
					autoPlay
					playsInline
					style={{
						width: '100%',
						height: '100%',
						zIndex: 1000,
						transform: 'rotate(10deg)'
					}}
					onLoadedMetadata={(e) => {
						const video = e.target as HTMLVideoElement;
						video.playbackRate = 2.0;
					}}
				>
					<track kind="captions" label="English" src="" default />
				</video>
			</div>
		);
	}
};

const HomePage = () => {
	const [currStep, setCurrStep] = React.useState(1);
	const [spawnFallingVideos, setSpawnFallingVideos] = useState(false);
	const [isExploding, setIsExploding] = React.useState(false);
	const [isModalOpen, setIsModalOpen] = React.useState(true);
	const [isKwenchanaVideoPlaying, setIsKwenchanaVideoPlaying] = useState(false);
	const [isGameCorrectAnswer, setIsGameCorrectAnswer] = useState(false);

	const onExplode = () => {
		setIsExploding(true);
	};

	const playKwenchana = () => {
		const music = document.getElementById('kwenchanaMusic') as HTMLAudioElement;
		music.currentTime = 0;
		music.play();
		// set kwenchanaVideoPlaying to false after music ends
		const timer = setTimeout(() => {
			setIsKwenchanaVideoPlaying(false);
		}, music.duration * 1000);
		return () => clearTimeout(timer);
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
		const onYes = (yesStep: number) => {
			stopMapleMusic();
			setCurrStep(yesStep);
			onExplode();
			playMyDestiny();
			setSpawnFallingVideos(true);
		};

		const onNo = (noStep: number) => {
			setCurrStep(noStep);
			playKwenchana();
			setIsKwenchanaVideoPlaying(true);
		};

		// If config.msg is a react node, just return it
		if (config.customStep) {
			return config.customStep({
				onYes: () => onYes(config.nextSteps[0]),
				onNo: () => onNo(config.nextSteps[1])
			});
		}

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
						<p style={{ zIndex: 101, color: 'white', fontWeight: 'bold' }}>
							{config.msg}
						</p>{' '}
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
												onYes(step);
											}
										}}
										key={step}
										className={`${nextStepCfg?.buttonClass} ${config?.yesButtonClass}`}
										style={{
											pointerEvents: isKwenchanaVideoPlaying ? 'none' : 'auto',
											cursor: isKwenchanaVideoPlaying
												? 'not-allowed'
												: 'pointer',
											opacity: isKwenchanaVideoPlaying ? 0.5 : 1
										}}
									>
										{nextStepCfg?.quesToStep}
									</YesButton>
								) : (
									<NoButton
										onClick={() => {
											onNo(step);
										}}
										key={step}
										className={nextStepCfg?.buttonClass}
										style={{
											pointerEvents: isKwenchanaVideoPlaying ? 'none' : 'auto',
											cursor: isKwenchanaVideoPlaying
												? 'not-allowed'
												: 'pointer',
											opacity: isKwenchanaVideoPlaying ? 0.5 : 1
										}}
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
						<p style={{ zIndex: 101, color: 'white' }}>{config.msg}</p>{' '}
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
			<KwenchanaPlayer />
			<Kwenchana playKwenchanaVideo={isKwenchanaVideoPlaying} />
			{pics}
			<StyledPhotoStrip>
				<StyledPhoto src={Peach1} alt="dog" />
				<StyledPhoto src={Peach2} alt="dog" />
				<StyledPhoto src={Peach3} alt="dog" />
				<StyledPhoto src={Peach4} alt="dog" />
				<StyledPhoto src={Peach5} alt="dog" />
			</StyledPhotoStrip>
			<StyledPhotoStripRight>
				<StyledPhoto src={Peach6} alt="dog" />
				<StyledPhoto src={Peach7} alt="dog" />
				<StyledPhoto src={Peach8} alt="dog" />
				<StyledPhoto src={Peach9} alt="dog" />
				<StyledPhoto src={Peach10} alt="dog" />
			</StyledPhotoStripRight>
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
			{/* <NoButtonGame /> */}
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
