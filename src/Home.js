import React, { Component } from 'react';
import Art from './Art';
import Projects from './Projects';
import Resume from './Resume';
import NavBar from './Navbar';

class Home extends Component {
  state = {
    isArt: false,
    isExperience: false,
    isSkills: false,
  };

  handleArtClick() {
    this.setState({
      isArt: !this.state.isArt,
    });
  }

  handleSkillsClick() {
    this.setState({
      isSkills: !this.state.isSkills,
    });
  }

  handleExperienceClick() {
    this.setState({
      isExperience: !this.state.isExperience,
    });
  }

  render() {
    return (
      <div id="grid">
        {/* <NavBar /> */}
        <div
          style={{
            background: 'transparent',
            gridRow: '1/12',
            gridColumn: '1 / 9',
            boxShadow: '3px 7px 7px 0px #7f9894',
          }}
        />
        <div id="green">
          <h3>HEY!</h3>
        </div>
        <div
          id="green"
          style={{ gridRow: '8 / 10', transform: 'rotate(180deg)' }}
        >
          <h3>HEY!</h3>
        </div>
        <div
          style={{ background: 'pink', gridRow: '1/15', gridColumn: '12 / 16' }}
        />
        <h1
          id="name"
          style={{
            gridRow: '13 / 17',
            color: '#121f26',
            opacity: '0.6',
          }}
        >
          abby
        </h1>
        <h1 id="name" style={{ gridRow: '13 / 17' }}>
          wigdale
        </h1>
        <h1 id="newName">
          abby <br /> wigdale
        </h1>
        <div
          id="whitebox"
          style={{ gridColumn: '10 / 12', gridRow: '2 / 5', padding: '5px' }}
          onClick={this.handleArtClick.bind(this)}
        >
          {!this.state.isArt ? (
            <div>
              <h2>art</h2>
              <h2>printmaking</h2>
              <h2>installation</h2>
              <h2>design</h2>
              {/* <h2 className="secret">hey there</h2> */}
            </div>
          ) : (
            <p>
              I work primarily in printmaking and installation. Throughout
              college I worked with respected artists- printed their work and
              helped broaden their printmaking skills. <br /> <br /> I enjoy
              experimenting with smells and textures to create confusing
              experiences for viewers. <br /> <br /> As I delve more into
              development I hope to create installations through virtual
              reality.
            </p>
          )}
        </div>
        <div
          id="whitebox"
          style={{ gridColumn: '10 / 14', gridRow: '6 / 9', padding: '9px' }}
          onClick={this.handleSkillsClick.bind(this)}
        >
          {!this.state.isSkills ? (
            <div>
              <h2>skills</h2>
              <h2>development</h2>
              <h2>design</h2>
              {/* <h2>numbers</h2> */}
              {/* <h2 className="secret">i love to learn</h2> */}
              <h2>creation</h2>
              <h2>animation</h2>
            </div>
          ) : (
            <p>
              Technical Skills:
              <br />
              JavaScript, React, Redux, WordPress, Node, Express, REST,
              Sequelize, PostgreSQL, HTML5, CSS3, Git, Semantic UI, Mocha ,
              Chai, jQuery, Waffle.io, Sass, Squarespace
              <br />
              Design Skills: Illustrator, InDesign
              <br />
              Most recently I've been working with SVG images and animations!
            </p>
          )}
        </div>
        <div
          id="whitebox"
          style={{ gridColumn: '13 / 16', gridRow: '11 / 17', padding: '10px' }}
          onClick={this.handleExperienceClick.bind(this)}
        >
          {!this.state.isExperience ? (
            <div>
              {/* <h2>experience</h2> */}
              <h2 className="experience">freelance web developer</h2>
              <h2 className="experience">layout editor</h2>
              {/* <h2 className="secret">lets work together</h2> */}
              <h2 className="experience">research assistant</h2>
            </div>
          ) : (
            <p>
              Recent Work: <br />
              <br />
              Freelance Web Developer: Magnetic Creative
              <br />
              Clients include: Genco Pura Oil, Grand Trunk
              <br />
              <br />
              Web Developer: Mot Mag
            </p>
          )}
        </div>
        <div
          id="whitebox"
          style={{ gridColumn: '2 / 4', gridRow: '13 / 15', padding: '10px' }}
        >
          <a href="mailto:abby.wigdale@gmail.com">
            <h2>let's chat</h2>
          </a>
          {/* <h2 className="secret">abby.wigdale@gmail.com</h2> */}
          <a href="https://www.linkedin.com/in/abby-wigdale/">
            <h2>linkedin</h2>
          </a>
          <a href="https://github.com/awigdale">
            <h2>github</h2>
          </a>
          {/* <h2 className="secret">lets talk soon</h2> */}
        </div>
      </div>
    );
  }
}

export default Home;
