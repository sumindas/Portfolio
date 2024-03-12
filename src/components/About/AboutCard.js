import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sumin Das V R </span>
            from <span className="purple"> Kerala, India.</span>
            <br />
            I am self taught python full stack developer.
            <br />
            I have completed Bacheloer of Technlogy  (B-Tech) in Computer Science And Engineering at APJ Abdul Kalam Technological University(KTU)
            Kerala. Also completed Diploma in Computer Hardware Engineering at State Board Of Technical Education (Sbte) Kerala.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
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
