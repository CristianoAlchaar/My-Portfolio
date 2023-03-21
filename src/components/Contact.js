import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const contactForm = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...")    
    await emailjs.sendForm(process.env.REACT_APP_GMAIL_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, contactForm.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
    .then((result) => {
      console.log(result)
      contactForm.current.reset()

      if (result.status === 200) {
        setStatus({ succes: true, message: 'Message sent successfully!'});
      }else{
        setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
      }
    }, (error) => {
      console.log(error)
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
  })

    setButtonText("Send")
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit} ref={contactForm}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="firstName" placeholder="First Name" defaultValue={""} required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="lasttName" placeholder="Last Name" defaultValue={""}required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email" placeholder="Email Address" defaultValue={""} required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="phone" placeholder="Phone No.(optional)" defaultValue={""}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" placeholder="Message" defaultValue={""} required></textarea>
                    </Col>
                  </Row>
                    {
                        status.message &&
                        <Row>
                          <p className={status.success === false ? "danger" : "success"} style={{fontWeight: "bold", fontSize: '1rem'}}>{status.message}</p>
                        </Row>
                    }
                  <Row>
                    <button type="submit" style={{maxWidth: '200px'}}><span>{buttonText}</span></button>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
