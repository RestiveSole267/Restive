import React from "react";
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { HashLink as Link } from "react-router-hash-link"
import "./navbar.css"

class NavBar extends React.Component {
    render() {
        return (
           <nav id="navbar">
                <div className="left-side">
                    <a className="restive" href="/restive">Restive</a>
                    <Link to="#intro" className="home">Home</Link>
                    <Link to="#about" className="about"> About </Link>
                    <Link to="#intro" className="experience"> Experience </Link>
                    <Link to="#projects" className="project"> Projects </Link>
                </div>
                <div className="right-side">
                    <a className="email" href="mailto:cameronwhite35288@gmail.com">
                        <EmailIcon style={{ fontSize: 20 }}></EmailIcon>
                    </a>
                    <a className="github" href="https://github.com/restivesole267" target="_blank">
                        <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
                    </a>
                    <a className="linkedin" href="https://www.linkedin.com/in/cameronjavonwhite" target="_blank">
                        <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
                    </a>
                    <a className="youtube" href="https://www.youtube.com/c/restivetoo" target="_blank">
                        <YouTubeIcon style={{ fontSize: 22 }}></YouTubeIcon>
                    </a>
                </div> 
           </nav> 
        );
    }
}

export default NavBar