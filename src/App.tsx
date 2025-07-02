import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { PixiPlugin } from "gsap/PixiPlugin";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Juices from "./components/Juices.tsx";
import About from "./components/About.tsx";
import Art from "./components/Art.tsx";

gsap.registerPlugin(ScrollTrigger, SplitText, PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Juices />
      <About />
      <Art />
    </main>
  );
}

export default App;
