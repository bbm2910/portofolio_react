import "./Description.css";
const Description = ({ reference }) => {
  return (
    <div ref={reference} className="description">
      <div>
        <h2>&lt; Welcome/&gt;</h2>
      </div>
      <p>
        I am an adaptable Full Stack Developer with a unique background that
        includes experience in television production and entrepreneurship.
        During my ten years in news production, I developed strong skills in
        working under pressure, and managing my own painting business in London
        helped me enhance my problem-solving abilities. My journey into
        technology began with self-guided learning in WordPress development,
        which grew into a broader understanding of full-stack development
        through coursework from The Odin Project. I have had the opportunity to
        volunteer with the Scottish Tech Army and work with Firebase
        authentication within a startup setting.
      </p>
      <p>
        More recently, I earned the ISC2 Cybersecurity certification and
        participated in specialized DevOps training at La Fosse Academy, gaining
        hands-on experience with Docker, Kubernetes, and cloud platforms. I like
        to take a practical, hands-on approach to solving development
        challenges, blending business insights with technical expertise to
        create effective digital solutions.
      </p>
    </div>
  );
};

export default Description;
