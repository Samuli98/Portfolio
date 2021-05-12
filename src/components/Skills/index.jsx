import "./style.css";

const About = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="content">
        <div>
          <strong>Languages:</strong>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>JavaScript</li>
        </div>
        <div>
          <strong>Libraries:</strong>
          <li>React.js</li>
          <li>Redux</li>
        </div>
        <div>
          <strong>Tools:</strong>
          <li>Eslint</li>
          <li>Chrome Dev</li>
          <li>Git & Github</li>
        </div>
        <div>
          <strong>Unit Testing:</strong>
          <li>Jest</li>
          <li>Enzyme</li>
          <li>React-test</li>
        </div>
      </div>
    </div>
  );
};

export default About;
