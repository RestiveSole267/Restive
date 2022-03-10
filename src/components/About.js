import React from "react";

import "./About.css";
import FadeInSection from "./FadeInSection";
import Restive from "./assets/restive.jpeg";

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
                            <p>Hi, I'm Cameron. I'm currently a senior in high school with an passion in <b>Computer Science</b>, <b>Psychology</b>, and <b>Political Science</b>.</p>
                            <p>Most of my childhood I took things apart items to figure out how they worked. My mama always told me that I've always been someone who was very good with their hands, an intuitive thinker, and that I've always had creative ideas.</p>
                            <p>Around 2014, I started a YouTube channel called <a href='https://www.youtube.com/channel/UCxwa8a5iSx22UUcnQmCp1Yg'>RestiveSole267</a>, and later I started another one called <a href='https://www.youtube.com/c/RestiveToo'>RestiveToo</a>. At the age of 11, I learned my first programming language, Python, and began creating Discord clients.</p>
                            <p>My freshman year of high school, I spent my mornings with Mrs. Stone, my AP US Government and Politics teacher. We always talk about Politics as we always listen to a radio show every morning that was based in Tallahassee. We also talked about mental disorder, and in particular, we tended to talk about ADHD which is a mental disorder I was diagnose with, and I grew a love for Psychology and Political Science.</p>
                            <p>When I'm not studying or working on projects, I'm usually hanging out with my online or local friends, editing videos, or watching YouTube videos.</p>
                        </div>
                        <div class="about-image">
                            <img src={Restive} width="220" height="240" className="Restive" alt="Restive.jpeg"></img>    
                        </div>
                    </div>
                </FadeInSection>
            </div>
        );
    }
}

export default About;