import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { featureLists } from "../../constants";
import { Check } from "lucide-react";

function About() {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", { type: "words" });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });
    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        yPercent: 100,
        stagger: 0.02,
      })
      .from(
        [".top-grid div", ".bottom-grid div"],
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5",
      );
  }, []);
  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Juices</p>
            <h2>
              Where every details matter <span className="text-black">-</span>{" "}
              from muddle to garnish
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.{" "}
            </p>

            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-black">More that +12k customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="grid-img-1" />
        </div>
        <div className="md:col-span-3">
          <div className="noisy" />
          <div className="space-y-6 flex flex-col justify-start h-full bg-neutral-800 p-4 text-neutral-300">
            <h3 className=" text-xl px-2">Crafted to Impress</h3>
            <div
              className="
                border border-gray-500 w-full
              "
            />
            <ul className="space-y-2">
              {featureLists.map((feature, i) => {
                return (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-6 h-6" />
                    <p>{feature}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="grid-img-1" />
        </div>
      </div>
      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="grid-img-1" />
        </div>
        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="grid-img-1" />
        </div>
      </div>
    </div>
  );
}

export default About;
