import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { CiStar } from "react-icons/ci";


export default function HomeScreen() {
  return (
    <div className="container">
   
      <div className="header">
        <div className="logo"></div>
        <div className="menu">
          <span className="icon"><CiSearch /></span>
          <span className="icon"><CiMenuFries /></span>
        </div>
      </div>

    
      <span className="tag">#Top</span>

      <h1 className="title">
        A Responsibly As<br /> Teach Leading, <br /> Global Company
      </h1>
      <p className="subtitle">Creating Superior Products & Services</p>
      <div className="trust">
        <div className="trust-box"><CiStar /></div>
        <div className="">
            <span className="kk">Trust Pilot</span><br />
            <span className="rate">Rated Best <strong className="st">12.6K</strong> Reviews</span>
        </div>
       
      </div>

      <div className="play-section">
        <div className="play-box">
          <button className="play-button">Play</button>
        </div>
        <div className="percent-box">
          <div className="percent top">72%</div>
          <div className="percent bottom">28%</div>
        </div>
      </div><br />
      <button className="btn-outline">Signup to Get 50% OFF</button><br />
      <button className="btn-solid">Explore New Products</button>
    </div>
  );
}
