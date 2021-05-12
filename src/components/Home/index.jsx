import { Link, useLocation } from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi, </p>
          <p>I am Samuli</p>
          <p>Front-end</p>
          <p>Developer</p>
        </h1>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
        <img src="images/samuliportfoliopic.jpeg" alt="person picture" />
      </div>
    </div>
  );
};

export default Home;
