import React from "react";
import "./Intro.css"
import Typist from "react-typist"
import "react-typist/dist/Typist.css";
import GitHub from './assets/github-icon.svg'
import YouTube from './assets/youtube-icon.svg'
import Twitter from './assets/twitter-icon.svg'
import Discord from './assets/discord-icon.svg'
import FadeInSection from './FadeInSection'


class Intro extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded: true,
            activeKey: "1",
            visible: true
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
            <div id="intro">
                <Typist avgTypingDelay={120}>
                    <span className="intro-title">
                        {"hello there.."}
                    </span>
                </Typist>
                <FadeInSection>
                    <div class="links">
                        <a href="https://github.com/RestiveSole267">
                            <img src={GitHub} width="50" height="50" className="GitHub" alt="GitHub"></img>
                        </a>
                        <a href="https://www.youtube.com/c/RestiveToo">
                            <img src={YouTube} width="50" height="50" className="YouTube" alt="YouTube"></img>
                        </a>
                        <a href="https://twitter.com/RestiveSole267">
                            <img src={Twitter} width="50" height="50" className="Twitter" alt="Twitter"></img>
                        </a>
                        <a href="https://discord.gg/jYNxrW6U">
                            <img src={Discord} width="50" height="50" className="Discord" alt="Discord"></img>
                        </a>
                    </div>
                </FadeInSection>
            </div>
        );
    }
}

export default Intro;