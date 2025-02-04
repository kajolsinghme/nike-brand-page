import React from "react";

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>ELEVATE YOUR GAME WITH NIKE</h1>
        <p>
          Experience the perfect blend of innovation and performance with Nike
          shoes. Designed for athletes and trendsetters alike, our collection
          ensures maximum comfort, durability, and style.
        </p>
        <div className="hero-btn">
          <button className="primary-btn">Shop Now</button>
          <button className="secondary-btn">Explore Categories</button>
        </div>
        <div className="shopping">
          <p>Also Available on</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="Buy on Amazon" />
            <img src="/images/flipkart.png" alt="Buy on Flipkart" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="hero-img" />
      </div>
    </main>
  );
};

export default Hero;
