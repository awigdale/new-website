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
        <img
          src="/img/headshot2.png"
          style={{
            gridRow: '5/12',
            gridColumn: '1 / 4',
            objectFit: 'cover',
            height: '100%',
            width: '100%',
            background: '#d8f900',
          }}
        />
        <h2 style={{ gridColumn: '5 / 14', gridRow: '4/10' }}>
          I'm
          <h1>abby wigdale.</h1>
          <br />
          An illustrator, artist and developer based in Los Angeles.
        </h2>
        <img
          src="/img/dancing.png"
          style={{
            gridRow: '7/17',
            gridColumn: '8 / 17',
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            background: '#ece7e7',
          }}
        />
        <img
          src="/img/golddance.png"
          style={{
            gridRow: '8/16',
            gridColumn: '2 / 5',
            objectFit: 'cover',
            height: '100%',
            width: '100%',
            background: 'pink',
          }}
        />
        <img
          src="/img/bras2.jpg"
          style={{
            gridRow: '8/16',
            gridColumn: '6 / 9',
            objectFit: 'cover',
            height: '100%',
            width: '100%',
            background: '#d8f900',
          }}
        />
        <img
          src="/img/headshot1.png"
          style={{
            gridRow: '9/17',
            gridColumn: '14 / 17',
            objectFit: 'cover',
            height: '100%',
            width: '100%',
            background: '#d8f900',
          }}
        />

        {/* <h3 style={{ gridRow: '10 / 11', gridColumn: '5 / 10' }}>developer</h3> */}
        {/* <a href="mailto:abby.wigdale@gmail.com">
          <h2>let's chat</h2>
        </a>
        <a href="https://www.linkedin.com/in/abby-wigdale/">
          <h2>linkedin</h2>
        </a>
        <a href="https://github.com/awigdale">
          <h2>github</h2>
        </a> */}
      </div>
    );
  }
}

export default Home;
