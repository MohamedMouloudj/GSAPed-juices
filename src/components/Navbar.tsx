import { navLinks } from "../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
        scrub: 0.5,
      },
    });
    navTween.fromTo(
      "nav",
      {
        backgroundColor: "transparent",
        pixi: {
          blur: 0,
        },
        boxShadow: "none",
      },
      {
        backgroundColor: "rgba(255,255,255,0.8)",
        pixi: {
          blur: 20,
        },
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        duration: 1,
        ease: "power1.inOut",
      },
    );
  });
  return (
    <nav>
      <div>
        <a href="#hero" className="flex items-center gap-2">
          <img src="./images/logo.png" alt="Logo" className="w-8 h-8" />
          <p>Juicy Exhibition</p>
        </a>
        <ul className="flex gap-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.id} className="hover:underline">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
