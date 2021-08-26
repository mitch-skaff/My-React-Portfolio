import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";


import disc from "../../Assets/images/disc.screenshot.png";
import weather from "../../Assets/images/Weather-Dashboard.png";
import budget from "../../Assets/images/screenshot.png";
import fitness from "../../Assets/images/tracker.png";
import notes from "../../Assets/images/notes.screenshot.png";
import sweat from "../../Assets/images/website.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container style={{ textAlign: "center" }}>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={disc}
              isBlog={false}
              title="Disc Jockey"
              description="One stop shop for all variety of Disc Golf fans built with HTML5, CSS, Bulma, Javascript, Node.js, Express, MySQL2, Sequelize, and a RESTful API"
              github="https://github.com/CaseyR1221/Disc-Jockey"
              link="https://glacial-badlands-02400.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Dashboard"
              description="Weather dashboard capable of displaying a 5 day forecast and savind your search history to local storage built with HTML5, CSS, Javascript, OpenWeather API, and Moment.js"
              github="https://github.com/mitch-skaff/Weather-Dashboard"
              link="https://mitch-skaff.github.io/Weather-Dashboard/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budget}
              isBlog={false}
              title="Budget Tracker"
              description="A progressive web application capable of tracking ones budget built with HTML5, CSS, Javascript, Node, Express, MongoDB, Cache, and deployed to Heroku"
              github="https://github.com/mitch-skaff/BudgetTracker-PWA"
              link="https://boiling-caverns-49681.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitness}
              isBlog={false}
              title="Fitness Tracker"
              description="Full stack application to log your workout history and display in graph format. Built with HTML5, CSS, Javascript, Node.js, Express, MongoDB, and Mongo Atlas"
              github="https://github.com/mitch-skaff/FitnessTracker"
              link="https://tranquil-waters-91007.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notes}
              isBlog={false}
              title="Notes App"
              description="Full stack application used to write, save, and delete notes built with HTML5, CSS, Javascript, Node.js, and Express"
              github="https://github.com/mitch-skaff/Notes-App"
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sweat}
              isBlog={false}
              title="Sweat Equity"
              description="Front end application for generating workouts! This was built utilizing Google Places API, Wger API, Moment.js, HTML5, UiKit Framework, and Javascript"
              github="https://github.com/jczarfeld/Brogrammers"
              link="https://jczarfeld.github.io/Brogrammers/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;