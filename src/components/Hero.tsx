import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });
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

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "190% top" : "bottom top";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    if (videoRef.current) {
      videoRef.current.onloadedmetadata = () => {
        tl.fromTo(
          videoRef.current,
          {
            currentTime: 0,
            opacity: 0.3,
            scale: isMobile ? 1.1 : 1.3,
          },
          {
            currentTime: videoRef.current!.duration,
            opacity: 0.8,
            scale: 1,
          },
        );
      };
    }
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
      <div className="video absolute inset-0">
        <video
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
          ref={videoRef}
        />
      </div>
    </>
  );
}

export default Hero;
