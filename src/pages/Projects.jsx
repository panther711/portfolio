import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
// import pg from "../assets/projects/pg.png";
// import project from "../assets/projects/project.jpeg";
// import lift from "../assets/projects/lift.png";
// import krypto from "../assets/projects/krypto.png";
// import kickstart from "../assets/projects/kickstart.png";
import channelize from "../assets/projects/channelize.png";
import chat_ramxn from "../assets/projects/chat_ramxn.png";
import foodhub from "../assets/projects/foodhub.png";
import photoshot from "../assets/projects/photoshot.png";
import rabbitmar from "../assets/projects/rabbitmar.png";
import tasty from "../assets/projects/tasty.png";
import travel from "../assets/projects/travel.png";
import webChat from "../assets/projects/webChat.png";
import omnifood from "../assets/projects/omnif00d.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photoshot}
              isBlog={false}
              title="AI Avatar Generator"
              description="An open-source AI avatar generator web application. First you log in to the homepage. And choose the style of avatar you want to generate. Finally, you can create your studio. There's several styels and you can select anyone."
              ghLink="https://github.com/panther711/photoshot"
              demoLink="https://photoshot.app"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat_ramxn}
              isBlog={false}
              title="Free ChatGPT"
              description="This project features a WebUI utilizing the G4F API. Experience the power of ChatGPT with a user-friendly interface, enhanced jailbreaks, and ompletely free. You can join the discord server(https://discord.gg/chimeragpt) and get the key to use ChatGPT for free. Please feel free to join!"
              ghLink="https://github.com/panther711/freeGPT"
              demoLink="https://chat.ramxn.dev/chat/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webChat}
              isBlog={false}
              title="Web Chat"
              description="A simple Chat Application Clone made using React.js ⚡Currently, I have implemented the basic UI with Firebase commands. Deployed it using cloudflare here. Please leave a ⭐ as motivation if you liked the implementation 😄. Please feel free to use this!"
              ghLink="https://github.com/panther711/Chat_application"
              demoLink="https://web-chat-free.pages.dev/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodhub}
              isBlog={false}
              title="Foodhub"
              description="It is very important for the customer to pay attention to the adipiscing process. Let him avoid all the praises they provide for us, from which we can receive them. Or troubles, the very labors, born times, so that we lead the most deserving ones with pains, we blame the matter! Some work hard, some pain!"
              ghLink="https://github.com/panther711/foodhub_restaurant_website"
              demoLink="https://codewithsadee.github.io/foodhub-restaurant-website/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={omnifood}
              isBlog={false}
              title="OmniFoods"
              description="The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs. Single page website built as a final project for my old HTML/CSS course. Omnifood is a fictional company focused on providing AI-based meals through a subscription service. "
              ghLink="https://github.com/panther711/omnifood"
              demoLink="https://omnif00d.netlify.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tasty}
              isBlog={false}
              title="Tasty"
              description="Create Complete Responsive Restaurant Website Using HTML and CSS JavaScript. And It has been created Website Using HTML ,CSS & JavaScript. Restaurants cook the best food in the entire city, with excellent customer service, the best meals and at the best price."
              ghLink="https://github.com/panther711/tasty"
              demoLink="https://ferozmahmudzaki.github.io/Tasty/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={channelize}
              isBlog={false}
              title="AI Avatar Generator"
              description="Channelize.io’s Essential Components that successfully launch Live Shopping and Real-time Engagement feature for your buyers and users, without reinventing the wheel."
              ghLink="https://github.com/panther711/freeGPT"
              demoLink="https://channelize.io/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rabbitmar}
              isBlog={false}
              title="Free ChatGPT"
              description="Rabbit Mart is a new Egyptian startup that guarantees delivery within 20 minutes of specified locations. While Rabbit Mart is only available on mobile platforms, our job is to make the shopping experience available to web users as well."
              ghLink="https://github.com/panther711/freeGPT"
              demoLink="https://rabbitmart-cm.vercel.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="AI Avatar Generator"
              description="✔ MapsApp is a project where I make use of maps with Mapbox using React + Typescript and using APIS. In this I learned how to consume the mapbox.com API, how to use the addresses, show the lines (polylines), show how long the route is and how long is the approximate duration to reach the destination and other things."
              ghLink="https://github.com/panther711/maps"
              demoLink="https://mapsapp.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects