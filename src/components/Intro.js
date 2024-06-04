import React from "react";
import "./Intro.css"
import Typist from "react-typist"
import "react-typist/dist/Typist.css";
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
                <Typist avgTypingDelay={45}>
                    <span className="intro-title">
                        {"hi there, welcome to restive.me"}
                    </span>
                </Typist>
                <FadeInSection>
                    <div class="intro-desc">
                        <p>scroll down to learn more about me..</p>
                    </div>
                </FadeInSection>
            </div>
        );
    }
}

export default Intro;