import "./Landing.scss";
import { HeaderLanding } from "./components/HeaderLanding/HeaderLanding";
import {
  AboutUs,
  Contact,
  Profesionals,
} from "../Landing/components/HeaderLanding/LinksTo/LinksTo";

export default function Landing() {
  return (
    <>
      <HeaderLanding />
      <h1>Landing</h1>
      <main>
        <div className="container">
          <AboutUs />
          <Contact />
          <Profesionals />
        </div>
      </main>
    </>
  );
}
