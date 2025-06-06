import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar2.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate developer who enjoys solving problems and building scalable web applications.
              <br />
              <br />
              I am proficient in 
              <i>
                <b className="purple"> Python, JavaScript, C, and C++. </b>
              </i>
              <br />
              <br />
              My areas of interest include developing modern&nbsp;
              <i>
                <b className="purple">Web Applications and Backend APIs</b>
              </i>
              &nbsp;with a focus on performance and usability.
              <br />
              <br />
              I love working with frameworks like <b className="purple">Django</b> and <b className="purple">FastAPI</b>, along with frontend libraries like&nbsp;
              <i>
                <b className="purple">React.js</b>
              </i>
              . I'm also experienced in deploying and maintaining applications on cloud platforms such as <b className="purple">AWS</b> and <b className="purple">Azure</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{
                  borderRadius: "50%", 
                  objectFit: "cover", 
                  width: "100%", 
                  height: "auto",
                  marginTop:'-54px', 
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sumindas"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/sumindasvr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sumin-das-v-r-a09b6a158/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sumindas_v_r/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
