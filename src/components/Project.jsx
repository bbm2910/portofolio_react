import './Project.css';
import WeatherImg from '../assets/weather-app.png';
import ShopImg from '../assets/shop.png';
import RockPaperScissors from '../assets/rock-paper-scissors.png';
import MemoryGameImg from '../assets/memory-game.png';
import CalculatorImg from '../assets/calculator.png';
import TitactoeImg from '../assets/tic-tac-toe.png';
import ProjectImg from '../assets/projects.svg';

const Project = ({ reference }) => {
	return (
		<div ref={reference} className='all-projects'>
			<div>
				<h2>&lt; Projects/&gt;</h2>
				<img src={ProjectImg} alt='' className='project-img' />
			</div>
			<div className='project card'>
				<div className='card2'>
					<a
						href='https://bbm2910.github.io/buy_box/'
						target='_blank'
					>
						<img src={ShopImg} alt='shopping cart website-img' />
					</a>
					<div>
						{/* <span><img src="img/folder.png" alt=""></span> */}
						<p>
							<a
								href='https://bbm2910.github.io/buy_box/'
								target='_blank'
							>
								<span>//Buy_box</span>
							</a>{' '}
							a straightforward React-based web application designed for a simulated shopping cart experience. It utilizes React Router for seamless navigation and retrieves item data from a server through the useFetch custom hook.
							<span className='technologies'>HTML / CSS / React / API</span>
						</p>
						<a
							href='https://github.com/bbm2910/buy_box'
							target='_blank'
							className='projects-link'
						>
							More...
						</a>
					</div>
				</div>
			</div>

			<div className='project card'>
				<div className='card2'>
					<a
						href='https://github.com/bbm2910/memory-game'
						target='_blank'
					>
						<img src={MemoryGameImg} alt='memory-game' />
					</a>
					<div>
						{/* <span><img src="img/folder.png" alt=""></span> */}
						<p>
							<a
								href='https://github.com/bbm2910/memory-game'
								target='_blank'
							>
								<span>//Memory_Game</span>
							</a>{' '}
							web-based card-clicking game.Players score points by clicking on different cards each turn. Clicking the same card resets the score to zero. The game is won when the player successfully clicks on all the cards without repeating any.
							<span>HTML / CSS / React</span>
						</p>
						<a
							href='https://github.com/bbm2910/memory-game'
							target='_blank'
							className='projects-link'
						>
							More...
						</a>
					</div>
				</div>
			</div>

			<div className='project card'>
				<div className='card2'>
					<a
						href='https://bbm2910.github.io/weather-check/'
						target='_blank'
					>
						<img src={WeatherImg} alt='weather website-img' />
					</a>
					<div>
						{/* <span><img src="img/folder.png" alt=""></span> */}
						<p>
							<a
								href='https://bbm2910.github.io/weather-check/'
								target='_blank'
							>
								<span>//Weather_check</span>
							</a>{' '}
							the application enables users to search for the weather conditions of a particular city. It retrieves current weather data from the OpenWeatherMap API and presents a range of weather details, including a 7-day forecast.
							<span>HTML / CSS / JavaScript / API</span>
						</p>
						<a
							href='https://github.com/bbm2910/weather-check'
							target='_blank'
							className='projects-link'
						>
							More...
						</a>
					</div>
				</div>
			</div>

			<div className='project card'>
				<div className='card2'>
					<a
						href='https://bbm2910.github.io/rock_paper_scissors-game/'
						target='_blank'
					>
						<img
							src={RockPaperScissors}
							alt='rock-paper-scissors-img'
						/>
					</a>
					<div>
						{/* <span><img src="img/folder.png" alt=""></span> */}
						<p>
							<a
								href='https://bbm2910.github.io/rock_paper_scissors-game/'
								target='_blank'
							>
								<span>//Rock_Paper_Scissors</span>
							</a>{' '}
							a web-based adaptation of the traditional game "Rock, Paper, Scissors," facilitating competition between two players to determine the victor based on their selections.
							<span>HTML / CSS / JavaScript</span>
						</p>
						<a
							href='https://github.com/bbm2910/rock_paper_scissors-game'
							target='_blank'
							className='projects-link'
						>
							More...
						</a>
					</div>
				</div>
			</div>

			<div className='project card'>
				<div className='card2'>
					<a
						href='https://bbm2910.github.io/MathMate/'
						target='_blank'
					>
						<img src={CalculatorImg} alt='calculator-img' />
					</a>
					<div>
						{/* <span><img src="img/folder.png" alt=""></span> */}
						<p>
							<a
								href='https://bbm2910.github.io/MathMate/'
								target='_blank'
							>
								<span>//Math_Mate</span>
							</a>{' '}
							this application is a user-friendly web-based calculator that utilizes HTML, CSS, and JavaScript to enable users to conduct fundamental arithmetic operations including addition, subtraction, multiplication, and division.
							<span>HTML / CSS / JavaScript</span>
						</p>
						<a
							href='https://github.com/bbm2910/MathMate'
							target='_blank'
							className='projects-link'
						>
							More...
						</a>
					</div>
				</div>
			</div>

			<div className='project card'>
				<div className='card2'>
					<a
						href='https://bbm2910.github.io/X_and_O-game/'
						target='_blank'
					>
						<img src={TitactoeImg} alt='calculator-img' />
					</a>
					<div>
						{/* <span><img src="img/folder.png" alt=""></span> */}
						<p>
							<a
								href='https://bbm2910.github.io/X_and_O-game/'
								target='_blank'
							>
								<span>//Tic_Tac_Toe</span>
							</a>{' '}
							 a web-based version of the Tic-Tac-Toe game developed using HTML, CSS, and JavaScript. Players alternate between marking X and O in vacant squares with the goal of achieving three of their marks in a row either horizontally, vertically, or diagonally
							<span>HTML / CSS / JavaScript</span>
						</p>
						<a
							href='https://github.com/bbm2910/X_and_O-game'
							target='_blank'
							className='projects-link'
						>
							More...
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
