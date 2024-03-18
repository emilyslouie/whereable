import { Link } from "wouter";
import Navbar from "../components/Navbar/Navbar";
import "./pages.css";

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
        <Link className="link-button" href="/whereable/learn/">
          Learn more about WHEREable
        </Link>
      </div>
      <h2>Where did the idea come from?</h2>
      <p>a long blurb here</p>

      <h2>Meet the team</h2>
      <p>Joy He</p>
      <p>Matthew Kee</p>
      <p>Emily Louie</p>
      <p>Jayant Mehta</p>
      <p>Gregory Schaper</p>
    </>
  );
}

export default AboutPage;
