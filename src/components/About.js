import React from "react";

import "./About.css";
import FadeInSection from "./FadeInSection";
import Restive from "./assets/restive3.jpg";

class About extends React.Component {
    constructor() {
      super();
      this.state = {
        expanded: true,
        activeKey: "1"
      };
      this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey) {
      this.setState({
        activeKey: eventKey
      });
    }
    render() {
        return (
            <div id="about">
                <FadeInSection>
                    <div className='section-header'>
                        <span className='section-title'>about me</span>
                    </div>
                    <div class="about-content">
                        <div class="about-desc">
                            <p>Hi, I'm Cameron. I'm currently a third year student at <a href='https://www.kennesaw.edu/about/index.php'>Kennesaw State University</a> majoring in Computer Science w/ Specialization in Data Science & minoring in Biology. I currently have experience in programming languages such as <b>Python</b>, <b>Java</b>, <b>CSS</b>, <b>HTML</b>, and <b>Javascript</b>.</p>
                            <p>My mama constantly told me that I was always intuitive thinker, someone who could quickly generate creative thoughts, and someone who was skilled with their hands. I grew up around computers for the most of my childhood, I started my first YouTube channel, <a href='https://www.youtube.com/channel/UCxwa8a5iSx22UUcnQmCp1Yg'>RestiveSole267</a>, in 2014. Later, I launched <a href='https://www.youtube.com/c/RestiveToo'>RestiveToo</a>, in 2016. When I reached the age of eleven, I first learned how to program in Python, then went on to learn Javascript.</p>
                            <p>Outside of studying or working, I typically spend my free time with friends, editing videos, playing video games, streaming, working out, or watching shows on Netflix, Hulu, or YouTube.</p>
                        </div>
                        <div class="about-image">
                            <img src={Restive} width="300" height="240" className="Restive" alt="Restive2.png"></img>    
                        </div>
                    </div>
                </FadeInSection>
            </div>
        );
    }
}

export default About;