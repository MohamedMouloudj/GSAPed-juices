import { socials } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", {
      type: "words",
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    tl.from(titleSplit.words, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.2,
    })
      .to("#f-right-leaf", {
        y: -50,
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: -50,
          duration: 1,
          ease: "power1.inOut",
        },
        "<",
      );
  });
  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />
      <img src="/images/footer-drinks.png" alt="drink" className="drink-img" />
      <div className="content">
        <h2>Where To Find Me</h2>
        <div>
          <h3>Contact Me</h3>
          <p>mouloudj.mohamed.04@gmail.com</p>
        </div>
        <div className="flex-center gap-5">
          {socials.map((social) => (
            <a
              key={social.name}
              target={`_blank`}
              href={social.url}
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Contact;
