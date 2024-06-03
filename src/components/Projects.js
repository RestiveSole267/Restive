import React from 'react';
import FadeInSection from './FadeInSection';

import "./Projects.css"

class Projects extends React.Component {
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
            <div id="projects">
              <FadeInSection>
                <div className='section-header'>
                    <span className='section-title'>projects</span>
                </div>
                <table className='projects'>
                  <tbody>
                    <tr>
                      <th><a href='https://github.com/RestiveSole267/JazmynOS'>JazmynOS</a></th>
                      <td>A hobby x86 UNIX-like operating system. This project is still under development.</td>
                    </tr>
                    <tr>
                      <th><a href='https://github.com/RestiveSole267/anctimes'>anctimes</a></th>
                      <td>"Democracy At Stake"; The Anchorage Times is a news sources that covers news & elections from Anchorage (Rocky Shores), Ridgeway, and Harrison. Not affiliated with the New York Times.</td>
                    </tr>
                    <tr>
                      <th><a href='https://github.com/RestiveSole267/Electware'>electware</a></th>
                      <td>A election programmed discord client that establishes a election system for municipal, county, state and federal governments.</td>
                    </tr>
                    <tr>
                      <th><a href='https://github.com/RestiveSole267/PolperroCensus'>PolperroCensus</a></th>
                      <td>A census-taking discord client that takes census information fo a municipal, federal, or state government.</td>
                    </tr>
                  </tbody>
                </table>
              </FadeInSection>
            </div>
        );
    }
}

export default Projects;