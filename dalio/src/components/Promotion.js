import React from "react";

// eslint-disable-next-line react/display-name
export default () => (
  <div className="promo container mx-auto">
    <div className="promo-advert">
      <div className="rect container">
        <div>
          <img src="scribble.png" alt=""/>
          <p className="font-sans font-bold text-xl text-white text-left">World Class</p>
        </div>
      </div>
      <p className="font-sans font-bold text-8xl text-white">Digital</p>
      <p className="font-sans font-bold text-8xl text-white">Agency</p>
      <p className="font-sans text-white text-left md:text-center">Full-service design support that growing B2B <br/>
        companies need. World leading agency.</p>
    </div>
    <div className="columns-3xs promo-second">
      <div className="w-full">
        <img src="Rectangle6.png" alt=""/>
      </div>
      <div className="w-full">
        <button className="rounded-full out-p-button">Save Changes</button>
      </div>
      <div className="w-full">
        <img className="" src="Rectangle1.png" alt=""/>
      </div>
    </div>
  </div>
)
