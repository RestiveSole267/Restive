import React from "react";

import "./Credits.css"
import FadeInSection from "./FadeInSection";

class Credits extends React.Component {
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
          <FadeInSection>
            <div id="credits">
                <div className='end-credits'>
                    <div>Built and Designed by Cameron White</div>
                    <div>Powered by Cloudbit Studios. All rights reserved. ©</div>
                </div>
            </div>
          </FadeInSection>
        );
    }
}

export default Credits;