import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sumin Das V R</span> from <span className="purple">Kerala, India.</span>
            <br />
            I am a Full Stack Developer with 1 year of hands-on experience building and deploying scalable web applications.
            <br />
            I am proficient in Python, Django, FastAPI, ReactJS, and SQL. I have experience developing RESTful APIs, optimizing system performance, and deploying applications on cloud platforms like AWS and Azure.
            <br />
            Skilled in using SQLAlchemy Core for raw SQL operations and managing CI/CD pipelines. I work effectively in Agile environments and collaborate with globally distributed teams to deliver high-quality software solutions.
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
