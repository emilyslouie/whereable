import { Link } from "wouter";
import Navbar from "../components/Navbar/Navbar";

function LandingPage() {
  return (
    <>
      <Navbar />
      <h1>Testinggg</h1>
      <Link href="/whereable/about">{"To about page"}</Link>
    </>
  );
}

export default LandingPage;
