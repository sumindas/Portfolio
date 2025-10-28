import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I’m <span className="purple">Sumin Das V R</span> from <span className="purple">Kerala, India.</span>
            <br />
            I’m a passionate <b>Full Stack Developer</b> with 1.5 years of experience building and deploying scalable web applications.
            <br />
            I specialize in <b>Python (Django, FastAPI)</b>, <b>ReactJS</b>, and <b>SQL</b>, with strong expertise in crafting <b>RESTful APIs</b> and deploying solutions on <b>AWS</b> and <b>Azure</b>.
            {/* <br /> */}
            I enjoy solving complex backend challenges, optimizing system performance, and automating workflows through <b>CI/CD pipelines</b>.
            <br />
            I’ve also worked with globally distributed teams in <b>Agile environments</b> to deliver high-quality and impactful software products.
            <br />
            <br />
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep It Simple!"{" "}
          </p>
          <footer className="blockquote-footer">Sumin Das V R</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
