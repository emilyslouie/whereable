import { Link } from "wouter";
import Navbar from "../components/Navbar/Navbar";
import "./pages.css";
import Team from "../assets/team.png";

function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <h1>Thanks for stopping by!</h1>
        <p>
          {
            "We're a team of Systems Design Engineering students from the University of Waterloo striving to build products that improve people's daily lives."
          }
        </p>

        <p>
          {
            "WHEREable aims to do just that – help individuals, particularly those who experience deafness, quickly locate important audio alerts while going about their day."
          }
        </p>
        <Link className="link-button" href="/whereable/learn">
          Learn more about WHEREable
        </Link>
      </div>
      <h2>Meet the team</h2>
      <img src={Team} />
      <p className="caption">
        Gregory Schaper, Joy He, Jayant Mehta, Matthew Kee, and Emily Louie
      </p>
    </>
  );
}

export default AboutPage;
