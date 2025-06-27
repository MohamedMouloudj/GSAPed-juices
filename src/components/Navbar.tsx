import { navLinks } from "../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
        scrub: true,
        markers: true,
      },
    });
    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        ease: "power1.inOut",
        duration: 1,
      },
    );
  });
  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
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
