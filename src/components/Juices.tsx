import { juiceLists, mockTailLists } from "../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Juices() {
  useGSAP((context) => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#juices",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });
    parallaxTimeline.from("#c-left-leaf", {
      x: -100,
      y: 100,
    });
    parallaxTimeline.from("#c-right-leaf", {
      x: 100,
      y: 100,
    });
    console.log(context.data.length);
  }, []);
  return (
    <section id="juices" className="noisy">
      <img src="images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
      <img
        src="images/cocktail-right-leaf.png"
        alt="r-leaf"
        id="c-right-leaf"
      />
      <div className="list">
        <div className="popular">
          <h2>Most Popular Juices</h2>
          <ul>
            {juiceLists.map((juice) => (
              <li key={juice.name}>
                <div className="me-28">
                  <h3>{juice.name}</h3>
                  <p>
                    {juice.country} | {juice.detail}
                  </p>
                </div>
                <span>- {juice.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>Most loved Juices</h2>
          <ul>
            {mockTailLists.map((juice) => (
              <li key={juice.name}>
                <div className="me-28">
                  <h3>{juice.name}</h3>
                  <p>
                    {juice.country} | {juice.detail}
                  </p>
                </div>
                <span>- {juice.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Juices;
