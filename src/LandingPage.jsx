import React from 'react'

export default function LandingPage() {
  return (
    <>
      <div className="image" />
      <div className="wrapper">
        <div className="name-number">
          <h1 className="title">Northwest Detailing</h1>
          <h4 className="phone-number">(971) 712-9498</h4>
          <a href="/info">
            <button className="button">Learn more</button>
          </a>
        </div>
      </div>
    </>
  );
}

