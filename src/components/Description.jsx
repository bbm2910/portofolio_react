import './Description.css';
const Description = ({ reference }) => {
	return (
		<div ref={reference} className='description'>
			<div>
				<h2>&lt; Welcome/&gt;</h2>
			</div>
			<p>
			I'm Bobby, a versatile individual who has transitioned from a background in property services and TV production to pursue a career as a dedicated web developer. The challenges I faced in London's property market honed my problem-solving abilities, while my experience in TV production taught me how to thrive in high-pressure environments. Running my own business for three years further enhanced my creativity and entrepreneurial mindset.
			</p>
			<p>
			In my current role as a Web Developer, I am committed to combining my innovative skills with technology. My diverse professional journey has equipped me with a unique perspective that allows me to effectively tackle web development challenges. I am devoted to creating user-centered digital solutions that seamlessly blend creativity and functionality. Thank you for taking the time to visit my profile, and I am eager to connect with you in the near future.
			</p>
		</div>
	);
};

export default Description;
