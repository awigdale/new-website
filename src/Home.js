import React, { Component } from 'react';
import Art from './Art';
import Projects from './Projects';
import Smiley from './svg/smiley';
import Lines from './svg/lines';
import LimeLine from './svg/limeline';
import Resume from './Resume';

class Home extends Component {
  state = {
    isProject: false,
    isArt: false,
    isResume: false,
  };

  handleArtClick() {
    this.setState({
      isArt: !this.state.isArt,
      isProject: false,
      isResume: false,
    });
  }

  handleProjectClick() {
    this.setState({
      isArt: false,
      isProject: !this.state.isProject,
      isResume: false,
    });
  }

  handleResumeClick() {
    this.setState({
      isArt: false,
      isProject: false,
      isResume: !this.state.isResume,
    });
  }

  render() {
    return (
      <div>
        <div id="navbar">
          <h3 onClick={this.handleArtClick.bind(this)}>ART</h3>
          <h3 onClick={this.handleProjectClick.bind(this)}>PROJECTS</h3>
          <h3 onClick={this.handleResumeClick.bind(this)}>RESUME</h3>
        </div>
        <br />
        <br />
        <br />
        <br />
        <h1 id="firstname">hey all, my name is abby.</h1>
        <h1 id="firstname">i'm a passionate</h1>
        <h1 id="firstname">front-end developer,</h1>
        <h1 id="firstname">creative coder,</h1>
        <h1 id="firstname">designer,</h1>
        <h1 id="firstname">and artist</h1>
        <br />
        <br />
        <br />
        <a
          id="firstname"
          style={{
            fontSize: '20px',
            fontWeight: 500,
            textDecoration: 'underline wavy #a5ff00',
          }}
          href="mailto:abby.wigdale@gmail.com"
        >
          let's chat!
        </a>
        <Smiley />
        <Lines />
        <LimeLine />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <a href="https://github.com/awigdale">
          <img src="img/github.png" style={{ height: '5vh' }} />
        </a>
        <a href="https://www.linkedin.com/in/abby-wigdale/">
          <img src="img/linkedin.png" style={{ height: '5vh' }} />
        </a>
        {this.state.isArt && <Art />}
        {this.state.isProject && <Projects />}
        {this.state.isResume && <Resume />}
      </div>
    );
  }
}

export default Home;
