import React from "react";
import "./Climb.scss";
import Mount1 from "../../assets/Mountain2.png";

export default function Climb() {
  return (
    <div className="climb-wrapper">
      <div className="header">
        <div className="header-info">
          <div className="number">02.</div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium adipisci voluptas omnis rem illum modi minus tenetur
            exercitationem impedit libero culpa, consectetur at dicta sequi.
          </p>
        </div>
      </div>
      <div className="bar">
        <div className="text-contain">
          <div className="text v1">Mountain 1</div>
          <div className="text">Mountain 2</div>
        </div>
      </div>
      <div
        className="main"
        style={{
          backgroundImage: `url(${Mount1})`,
          width: "100%",
          height: "60vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="schedule">
          <span className="head">SCHEDULE</span>
          <div className="texts">
            <div className="text">
              <p>25 Nov 2016</p>
              <p>Vestibulum viverra</p>
            </div>
            <div className="text">
              <p>25 Nov 2016</p>
              <p>Vestibulum viverra</p>
            </div>
            <div className="text">
              <p>25 Nov 2016</p>
              <p>Vestibulum viverra</p>
            </div>
            <div className="text">
              <p>25 Nov 2016</p>
              <p>Vestibulum viverra</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
