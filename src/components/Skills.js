
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";

import htmlLogo from "../assets/img/html-logo.png"
import cssLogo from "../assets/img/css-logo.png"
import jsLogo from "../assets/img/javascript-logo.png"
import reactJsLogo from "../assets/img/react-js-logo.png"
import reactNativeLogo from "../assets/img/react-native-logo.png"
import tsLogo from "../assets/img/typescript-logo.png"
import englishLogo from "../assets/img/english-logo.png"

import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About Skills</h2>
                        <p>I have learned different programming languages ​​so far and as far as my skills are concerned<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={htmlLogo} alt="HTML" />
                                <h5>HTML 5</h5>
                            </div>
                            <div className="item">
                                <img src={cssLogo} alt="CSS" />
                                <h5>CSS 3</h5>
                            </div>
                            <div className="item">
                                <img src={jsLogo} alt="Javascript" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={tsLogo} alt="Typescript" />
                                <h5>Typescript</h5>
                            </div>
                            <div className="item">
                                <img src={reactNativeLogo} alt="React Native" />
                                <h5>React JS/Native</h5>
                            </div>
                            <div className="item">
                                <img src={englishLogo} alt="English" style={{borderRadius: '1000px'}}/>
                                <h5>English</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
