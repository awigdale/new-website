import React from 'react';

const NavBar = () => {
  return (
    <div id="navbar">
      <h1 style={{ float: 'right' }} className="categories">
        Work
      </h1>
      <h1 style={{ float: 'right' }} className="categories">
        Art
      </h1>
      {/* <div>
        <a href="https://github.com/awigdale" className="icon">
          <img src="img/github.png" style={{ height: '3vh' }} />
        </a>
        <a href="https://www.linkedin.com/in/abby-wigdale/" className="icon">
          <img src="img/linkedin.png" style={{ height: '3vh' }} />
        </a>
      </div> */}
    </div>
  );
};

export default NavBar;
