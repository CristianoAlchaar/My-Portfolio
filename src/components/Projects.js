import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/DailyDietSmall.jpg";
import projImg2 from "../assets/img/ToDoListAppSmall.jpg";
import projImg3 from "../assets/img/IgniteTShirtSmall.jpg";
import projImg4 from "../assets/img/GitHubBlogSmall.jpg";
import projImg5 from "../assets/img/CoffeeDeliverySmall.jpg";
import projImg6 from "../assets/img/toDoSmall.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      description: "Daily Diet App",
      imgUrl: projImg1,
      link: 'https://github.com/CristianoAlchaar/ignite-react-native-2-daily-diet',
    },
    {
      description: "To Do List App",
      imgUrl: projImg2,
      link: 'https://github.com/CristianoAlchaar/ignite-react-native-1-to-do-list',
    },
    {
      description: "Ignite Shop",
      imgUrl: projImg3,
      link: 'https://github.com/CristianoAlchaar/ignite-reactjs-4-ignite-shop'
    },
    {
      description: "GitHub Blog",
      imgUrl: projImg4,
      link: 'https://github.com/CristianoAlchaar/ignite-reactjs-3-github-blog'
    },
    {
      description: "Coffee Delivery",
      imgUrl: projImg5,
      link: 'https://github.com/CristianoAlchaar/ignite-reactjs-2-coffee-delivery'
    },
    {
      description: "To Do List",
      imgUrl: projImg6,
      link: 'https://github.com/CristianoAlchaar/ignite-reactjs-1-To-do'
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I show you some projects I have done so far</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
