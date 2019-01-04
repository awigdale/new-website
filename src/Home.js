import React, { Component } from 'react';

let canvas;
let ctx;

class Home extends Component {
  state = {
    strokeStyle: 'rgba(19,36,45, 0.1)',
    lineWidth: 190,
  };

  componentDidMount() {
    canvas = this.refs.canvas;
    ctx = canvas.getContext('2d');
  }

  draw(event) {
    ctx.strokeStyle = this.state.strokeStyle;
    ctx.lineWidth = this.state.lineWidth;
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 100);
    ctx.lineTo(100, 500);
    ctx.lineTo(600, 400);
    ctx.lineTo(800, 500);
    ctx.lineTo(1000, 200);
    ctx.lineTo(1300, 800);
    ctx.lineTo(1400, 200);
    ctx.lineTo(1000, 10);
    ctx.lineTo(800, 100);
    ctx.lineTo(600, 900);
    ctx.closePath();
    ctx.stroke();
    ctx.lineWidth = 120;
    ctx.lineJoin = 'bevel';
    ctx.beginPath();
    ctx.moveTo(900, 9000);
    ctx.lineTo(100, 100);
    ctx.lineTo(400, 500);
    ctx.lineTo(600, 10);
    ctx.lineTo(1000, 200);
    ctx.lineTo(1400, 800);
    ctx.lineTo(700, 300);
    ctx.closePath();
    ctx.stroke();
  }

  render() {
    return (
      <div id="grid">
        <canvas
          ref="canvas"
          width={window.innerWidth}
          height={window.innerHeight}
          onMouseMove={this.draw.bind(this)}
        />

        <a
          href="https://www.linkedin.com/in/abby-wigdale/"
          style={{
            gridColumn: '2/3',
            gridRow: '5/6',
            zIndex: 300,
          }}
        >
          <h2 id="contact-link">linkedin</h2>
        </a>
        <a
          href="https://github.com/awigdale"
          style={{
            gridColumn: '3/4',
            gridRow: '4/5',
            transform: 'rotate(270deg)',
          }}
        >
          <h2 id="contact-link">github</h2>
        </a>
        <a
          href="mailto:abby.wigdale@gmail.com"
          style={{ gridColumn: '5/9', gridRow: '15/16' }}
        >
          <h2 id="contact-link">contact me</h2>
        </a>
        <a
          href="mailto:abby.wigdale@gmail.com"
          style={{
            gridColumn: '15/17',
            gridRow: '14/15',
            zIndex: 1000,
          }}
        >
          <h2 id="contact-link">say hello</h2>
        </a>
        <h1
          style={{
            gridColumn: '9 / 17',
            gridRow: '4/12',
            zIndex: 200,
            color: '#f2eae3',
          }}
        >
          abby wigdale.
        </h1>

        <h1
          style={{
            gridColumn: '10 / 16',
            gridRow: '3/12',
            transform: 'rotate(90deg)',
            zIndex: 300,
          }}
        >
          abby wigdale.
        </h1>
        <h2
          style={{
            gridColumn: '2/9',
            gridRow: '10/12',
            zIndex: 1000,
            textAlign: 'right',
          }}
        >
          Passionate developer, designer, and illustrator based in Los Angeles.
          Currently working as a freelance developer and designer.
        </h2>
      </div>
    );
  }
}

export default Home;
