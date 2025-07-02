import { sliderLists } from "../../constants";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Menu() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      "#title",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
      },
    );
    gsap.fromTo(
      ".juice img",
      {
        opacity: 0,
        xPercent: -100,
      },
      {
        opacity: 1,
        xPercent: 0,
        duration: 1,
        ease: "expo.out",
      },
    );
    gsap.fromTo(
      ".details h2",
      { opacity: 0, yPercent: 100 },
      {
        opacity: 1,
        yPercent: 0,
        ease: "power1.inOut",
      },
    );
    gsap.fromTo(
      ".details p",
      { opacity: 0, yPercent: 100 },
      {
        opacity: 1,
        yPercent: 0,
        ease: "power1.inOut",
      },
    );
  }, [currentIndex]);

  const totalJuices = sliderLists.length;

  function goToSlide(index: number) {
    const newIndex = (index + totalJuices) % totalJuices;
    setCurrentIndex(newIndex);
  }
  const getJuiceAt = (index: number) =>
    sliderLists[(currentIndex + index + totalJuices) % totalJuices];

  const currentJuice = getJuiceAt(0);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img
        src="/images/slider-right-leaf.png"
        alt="righ-leaf"
        id="m-right-leaf"
      />
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <h2 id="menu-heading" className="sr-only">
        Juices Menu
      </h2>
      <nav className="juice-tabs" aria-labelledby="Juice Navigation">
        {sliderLists.map((juice, index) => {
          const isActive = currentIndex === index;
          return (
            <button
              key={juice.id}
              className={`${isActive ? "text-black border-black" : "text-black/50 border-black/50"}`}
              onClick={() => goToSlide(index)}
            >
              {juice.name}
            </button>
          );
        })}
      </nav>
      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => {
              goToSlide(currentIndex - 1);
            }}
          >
            <span>{getJuiceAt(-1).name}</span>
            <img
              src="/images/right-arrow.png"
              className="invert-100"
              alt="arrow-right"
            />
          </button>
          <button
            className="text-left"
            onClick={() => {
              goToSlide(currentIndex + 1);
            }}
          >
            <span>{getJuiceAt(1).name}</span>
            <img
              src="/images/left-arrow.png"
              alt="arrow-left"
              className="invert-100"
            />
          </button>
        </div>
        <div className="juice">
          <img
            src={currentJuice.image}
            alt="juice"
            className="object-contain"
          />
        </div>
        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for</p>
            <p id="title">{currentJuice.name}</p>
          </div>
          <div className="details">
            <h2>{currentJuice.title}</h2>
            <p>{currentJuice.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
