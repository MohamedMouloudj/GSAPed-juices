import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

function Hero() {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.5,
      ease: "expo.out",
      stagger: 0.05,
    });
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.5,
      ease: "expo.out",
      stagger: 0.05,
      delay: 1,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(
        ".right-leaf",
        {
          y: 200,
        },
        0,
      )
      .to(
        ".left-leaf",
        {
          y: -200,
        },
        0,
      );
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">Mojito</h1>
        <img
          src="./images/hero-left-leaf.png"
          alt="Leaf Left"
          className="left-leaf"
        />
        <img
          src="./images/hero-right-leaf.png"
          alt="Leaf right"
          className="right-leaf"
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p className="text-lg font-semibold">
                Cool. Refreshing. Classic.
              </p>
              <p className="subtitle">
                Sip The Essence
                <br />
                Of Summer
              </p>
            </div>
            <div className="view-juices">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#juices">View Juices</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
