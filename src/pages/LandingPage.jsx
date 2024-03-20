import { Link } from "wouter";
import Navbar from "../components/Navbar/Navbar";
import Diagram from "../assets/illustration.png";

function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <h1>Helping people locate the direction of sounds</h1>
        <p>
          Individuals with hearing loss often struggle to determine where a
          sound originated from, which can impact road safety and situational
          awareness. WHEREable is a wearable device that identifies sudden loud
          sounds (like a car horn or a siren), determines the origin of the
          sound, then alerts the user to its direction.
        </p>
        <Link className="link-button" href="/whereable/learn">
          Learn more about WHEREable
        </Link>
      </div>
      <div>
        <h1>How it Works</h1>
        <div className="diagram">
          <div className="illustration">
            <img src={Diagram} />
          </div>
          <div className="right">
            <div className="top">
              <div className="part">
                <h2 className="sr">1. Sound Reception</h2>
                <p>
                  Consists of 4 microphones that capture sound from around you
                  and converts it to data we can analyze
                </p>
              </div>
            </div>
            <div className="bottom">
              <div className="part">
                <h2 className="sp">2. Signals Processing</h2>
                <p>
                  We use the computing power of a Raspberry Pi 5 to determine
                  the direction of where the sound came from
                </p>
              </div>
              <div className="part">
                <h2 className="ui">3. User Interface</h2>
                <p>
                  We alert you of the direction by turning on one of the 4
                  haptic motors on your belt
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1>Features</h1>
        <div className="feature-content">
          <div className="feature">
            <h1>8</h1>
            <p className="small">hours of battery life</p>
          </div>
          <div className="feature">
            <h1>2.3</h1>
            <p className="small">seconds for user to react</p>
          </div>
          <div className="feature">
            <h1>$230</h1>
            <p className="big">
              to manufacture which is 3.5x cheaper than hearing aids
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
