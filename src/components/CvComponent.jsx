import "./CvComponent.css";
import ContructionIcon from "../assets/icons8-construction-manager-64.png";
import ReactIcon from "../assets/react.svg";
import HtmlIcon from "../assets/html.svg";
import CssIcon from "../assets/css.svg";
import JsIcon from "../assets/js.svg";
import NodeIcon from "../assets/nodejs.svg";
import ExpressIcon from "../assets/express.svg";
import MongoIcon from "../assets/mongo.svg";
import RulerIcon from "../assets/icons8-ruler-48.png";
import CameraIcon from "../assets/icons8-documentary-50.png";
import EducationIcon from "../assets/education.png";
import Docker from "../assets/docker.png";
import Kubernetes from "../assets/kubernetes.png";
import Terraform from "../assets/terraform.png";
import Ansible from "../assets/Ansible.png";

const CvComponent = ({ reference }) => {
  return (
    <div ref={reference} className="cv-component">
      <h2>&lt; Curriculum Vitae/&gt;</h2>
      <div className="cv-section">
        <p className="cv-date">2022 - Present</p>
        <div>
          <p className="cv-section-title">Software Development Studies</p>
          <img src={HtmlIcon} alt="html logo" className="html-logo"></img>
          <img src={CssIcon} alt="css logo" className="css-logo"></img>
          <img src={JsIcon} alt="java script logo" className="js-logo"></img>
          <img src={ReactIcon} alt="react logo" className="react-logo"></img>
          <img src={NodeIcon} alt="node logo" className="node-logo"></img>
          <img
            src={ExpressIcon}
            alt="express logo"
            className="express-logo"
          ></img>
          <img
            src={MongoIcon}
            alt="mongodb logo"
            className="mongodb-logo"
          ></img>
          <img src={Docker} alt="node logo" className="docker-logo"></img>
          <img src={Kubernetes} alt="node logo" className="docker-logo"></img>
          <img src={Terraform} alt="node logo" className="docker-logo"></img>
          <img src={Ansible} alt="node logo" className="docker-logo"></img>
          <ul>
            <li className="li">
              Completed{" "}
              <a href="https://www.theodinproject.com/" target="_blank">
                The Odin Project,
              </a>{" "}
              a comprehensive online course that strengthened my programming
              proficiency across multiple technologies including{" "}
              <span>HTML</span> <span>CSS</span> <span>JavaScript</span>{" "}
              <span>React</span> <span>Node.js</span> <span>Express.js</span>{" "}
              <span>MongoDB</span>. Applied this knowledge to develop engaging
              games and applications.
            </li>
            <li className="li">
              {/* Developed an engaging B2C website tailored for the construction
              industry, utilizing content management systems to enhance user
              experience. For a closer look, please visit the website{" "}
              <a href="https://sermanilles.es/" target="_blank">
                here.
              </a>{" "} */}
              Worked closely with experienced developers to develop and maintain
              a diverse portfolio of responsive websites.
            </li>
            <li className="li">
              After completing The Odin Project, I began volunteering for the
              <a href="https://www.scottishtecharmy.org/" target="_blank">
                Scottish Tech Army,
              </a>{" "}
              , a non-profit organization that helps charities solve their
              technology challenges, including website revamps and platform
              optimization.
            </li>
            <li className="li">
              Joined a startup through mentorship with an IT Architect, where I
              learned <span>Flutter</span> development and implemented
              authentication systems using <span>Firebase</span> with Realtime
              Database.
            </li>
            <li className="li">
              Developed a passion for cybersecurity through podcasts and
              hands-on learning via <span>TryHackMe</span> platform. Gained
              expertise in networks, Windows, Linux, virtual machines, and
              cybersecurity foundations, culminating in earning my{" "}
              <span>ISC2 Certified in Cybersecurity</span>
              certification.
            </li>
            <li className="li">
              Joined{" "}
              <a href="https://www.scottishtecharmy.org/" target="_blank">
                La Fosse Academy
              </a>{" "}
              , where I was selected for the DevOps deep-dive program after the
              initial 4 weeks. Gained proficiency in DevOps practices and tools
              including <span>Docker</span> <span>Kubernetes</span>{" "}
              <span>Terraform</span> <span>Azure DevOps</span> and{" "}
              <span>AWS DevOps</span>.
            </li>
            {/* <li className="li">
              Currently leading a team in developing a 4-microservice web
              application as our final Academy project, applying the full range
              of skills and technologies learned throughout the program.
            </li> */}
            <p className="li">
              Check out my projects and contributions on{" "}
              <a href="https://github.com/bbm2910" target="_blank">
                <span>Github</span>
              </a>
              . Feel free to explore and don't hesitate to reach out if you'd
              like to collaborate on something cool!
            </p>
          </ul>
        </div>
      </div>
      <div className="cv-section">
        <p className="cv-date">2019 - 2022</p>
        <div>
          <p className="cv-section-title">General Manager - D&B Decorators</p>
          <img
            src={ContructionIcon}
            alt="construction-icon"
            className="construction-icon"
          ></img>
          <ul>
            <li className="li li-act-as-paragraph">
              As a dedicated team leader, I've consistently showcased
              outstanding leadership abilities through my adeptness at providing
              crystal-clear guidance and nurturing a culture of collaboration
              within my team. I've also excelled in the art of teamwork,
              fostering strong partnerships with contractors, valuing their
              specialized insights, and seamlessly integrating their expertise
              into our project planning and execution.
            </li>
            <li className="li li-act-as-paragraph">
              My prowess in communication has been a linchpin in ensuring that
              everyone involved is in perfect harmony with our project goals,
              fostering a sense of unity and shared purpose. Moreover, my role
              has extended to reading and deciphering complex technical
              drawings, skillfully leveraging them to craft meticulous plans and
              execute projects with precision.
            </li>
            <li className="li li-act-as-paragraph">
              Beyond that, I've demonstrated a keen financial acumen, showcasing
              my decision-making prowess by singlehandedly managing both the
              commercial and financial budgets of our company, a testament to my
              exceptional financial stewardship.
            </li>
          </ul>
        </div>
      </div>
      <div className="cv-section">
        <p className="cv-date">2011 - 2019</p>
        <div>
          <p className="cv-section-title">Additional Experience</p>
          <img src={RulerIcon} alt="" className="ruler-camera-icon"></img>
          <img src={CameraIcon} alt="" className="ruler-camera-icon"></img>
          <ul>
            <li className="li">General Builder - Moses Property Services</li>
            <li className="li">
              Camera Assistant,{" "}
              <a href="https://www.digi24.ro/" target="_blank">
                Digi 24
              </a>
            </li>
            <li className="li">
              Camera Assistant,{" "}
              <a href="https://www.b1tv.ro/" target="_blank">
                B1 TV
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="cv-section">
        <p className="cv-date">2009-Present</p>
        <div>
          <p className="cv-section-title">Education & Credentials</p>
          <img src={EducationIcon} alt="" className="ruler-camera-icon"></img>
          <ul>
            <li className="li">
              Spiru Haret University, Bucharest - BSc Management Economics
            </li>
            <li className="li">
              Spiru Haret High School - A Level in Electrical Engineering
            </li>
            <li className="li">ISC2 - Certified in Cybersecurity</li>
            <li className="li">
              Completed AWS Practitioner Essential course - Certification in
              progress
            </li>
            <li className="li">
              <strong>
                {" "}
                <a href="https://www.lafosseacademy.com/" target="_blank">
                  La Fosse Academy
                </a>{" "}
                - Cloud and DevOps:
              </strong>{" "}
              Specialized training in containerisation, microservices
              architecture, and CI/CD pipelines. Hands-on experience with{" "}
              <span>Docker</span>, <span>Kubernetes</span>,{" "}
              <span>Terraform</span>,<span>Azure DevOps</span>,{" "}
              <span>Jenkins</span>, <span>Ansible</span>,<span>AWS</span>,{" "}
              <span>Azure</span>, and <span>Google Cloud Platform</span>.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CvComponent;
