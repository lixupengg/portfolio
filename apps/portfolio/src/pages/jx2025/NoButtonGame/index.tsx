import { useState } from 'react';
import Peach1 from '../../../assets/jx2025/Peach1.jpg';
import Peach2 from '../../../assets/jx2025/Peach2.jpg';
import Peach3 from '../../../assets/jx2025/Peach3.jpg';
import Peach4 from '../../../assets/jx2025/Peach4.jpg';
import Peach5 from '../../../assets/jx2025/Peach5.jpg';
import Peach6 from '../../../assets/jx2025/Peach6.jpg';
import Peach7 from '../../../assets/jx2025/Peach7.jpg';
import Peach8 from '../../../assets/jx2025/Peach8.jpg';
import Peach9 from '../../../assets/jx2025/Peach9.jpg';
import Peach10 from '../../../assets/jx2025/Peach10.jpg';
import { NoButton, StyledPictureGame, YesButton } from '../styles';

const NoButtonGame = (props: { onYes: () => void; onNo: () => void }) => {
	const correctPicture = 1;
	const [showNoButton, setShowNoButton] = useState(false);
	const [wrongClickCount, setWrongClickCount] = useState(0);
	const pictures = [
		Peach1,
		Peach2,
		Peach3,
		Peach4,
		Peach5,
		Peach6,
		Peach7,
		Peach8,
		Peach9
	];
	// render pictures in a 3x3 grid
	const WrongIndicator = (
		<div
			style={{
				position: 'absolute',
				top: '30px',
				left: '40%',
				transform: 'translate(-50%, -50%)',
				color: 'white',
				// red background iwht opacity 0.5
				background: 'rgba(255, 0, 0, 0.5)',
				fontSize: '12px',
				padding: '10px',
				borderRadius: '10px',
				fontWeight: 'bold'
			}}
		>
			wrong!!
		</div>
	);
	const CorrectIndicator = (
		<div
			style={{
				position: 'absolute',
				top: '30px',
				left: '40%',
				transform: 'translate(-50%, -50%)',
				color: 'white',
				// green background iwht opacity 0.5
				background: 'rgba(0, 255, 0, 0.5)',
				fontSize: '12px',
				padding: '10px',
				borderRadius: '10px',
				fontWeight: 'bold'
			}}
		>
			ding ding ding!!
		</div>
	);
	return (
		<>
			<p
				style={{
					zIndex: 101,
					color: 'white',
					fontWeight: 'bold',
					padding: '10px',
					background: 'black'
				}}
			>
				The nottiness has no limit!! OK i have hidden the no button you need to
				click the picture of us in Genting!
			</p>
			{wrongClickCount === 1 && !showNoButton && (
				<p
					style={{
						zIndex: 101,
						color: 'white',
						fontWeight: 'bold',
						padding: '10px',
						background: 'black'
					}}
				>
					hais no heart... like that also cannot recognise!!!!
				</p>
			)}
			{wrongClickCount === 2 && !showNoButton && (
				<p
					style={{
						zIndex: 101,
						color: 'white',
						fontWeight: 'bold',
						padding: '10px',
						background: 'black'
					}}
				>
					omg you click wrong twice!!! hais...
				</p>
			)}
			{wrongClickCount > 2 && !showNoButton && (
				<p
					style={{
						zIndex: 101,
						color: 'white',
						fontWeight: 'bold',
						padding: '10px',
						background: 'black'
					}}
				>
					so notti!!! how can no heart!!!
				</p>
			)}
			{showNoButton && (
				<p
					style={{
						zIndex: 101,
						color: 'white',
						fontWeight: 'bold',
						padding: '10px',
						background: 'green'
					}}
				>
					{' '}
					ding ding ding!!!
				</p>
			)}
			<StyledPictureGame>
				{pictures.map((pic, index) => {
					const [isClicked, setIsClicked] = useState(false);
					return (
						<div
							key={index}
							onClick={() => {
								setIsClicked(true);
								if (index === correctPicture) {
									setShowNoButton(true);
								} else {
									setWrongClickCount(wrongClickCount + 1);
								}
							}}
							style={{
								width: '33%',
								height: '33%',
								position: 'relative',
								overflow: 'hidden',
								cursor: 'pointer'
							}}
						>
							<img
								src={pic}
								alt=""
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
									transform: isClicked ? 'scale(1)' : 'scale(10)',
									transformOrigin: 'center',
									transition: 'transform 0.3s ease'
								}}
							/>
							{isClicked && index === correctPicture && CorrectIndicator}
							{isClicked && index !== correctPicture && WrongIndicator}
						</div>
					);
				})}
			</StyledPictureGame>
			<div style={{ display: 'flex' }}>
				<YesButton
					onClick={() => {
						props.onYes();
					}}
					className={``}
				>
					YES!!!!!!!!!!!!!!!
				</YesButton>

				{showNoButton && (
					<NoButton onClick={props.onNo} style={{ marginLeft: '10px' }}>
						NO
					</NoButton>
				)}
			</div>
		</>
	);
};

export default NoButtonGame;
