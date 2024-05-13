import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Connecting World"
              description="Built a Social Media platform with Django and React, merging frontend and backend seamlessly. Enhanced user experience with Redux Toolkit, used PostgreSQL for data handling, and integrated real-time chat and advanced video features."
              ghLink="https://github.com/sumindas/Connecting_World.git"
              demoLink="https://connecting-world.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Crickstore"
              description="Developed a secure authentication system, including login/signup and a user-friendly homepage for an e-commerce platform selling cricket products. Utilized Django, PostgreSQL, and CRUD operations, gaining valuable web development experience"
              ghLink="https://github.com/sumindas/Ecommerce_Django"
              demoLink="https://www.cricks.shop/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title=" Mob-Shop"
              description="Led the development of a Mob shop  E-commerce website, combining React, Django, Django REST Framework, PostgreSQL, and JWT for secure authentication. Achieved a modern UI, structured data storage, and effective CRUD operations, gaining valuable web development experience"
              ghLink="https://github.com/sumindas/Mobile_Shop.git"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title=" User Management Using React-Django-Rest"
              description="Led the development of a User Management System, combining React, Django, Django REST Framework, PostgreSQL, and JWT for secure authentication. Achieved a modern UI, structured data storage, and effective CRUD operations."
              ghLink="https://github.com/sumindas/React_Crud"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Chat App Using Django Channels"
              description="Led the development of a Chat Application with Django Channels for real-time communication, featuring a modern UI and ensuring secure backend functionality for seamless interactions."
              ghLink="https://github.com/sumindas/Chat_App"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="OLX Clone"
              description="Built the front end with ReactJS, mirroring the OLX platform's interface. Integrated Firebase for user authentication, data storage, and product listings. Utilized Context API for efficient state management."
              ghLink="https://github.com/sumindas/React_Olx_firebase"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
