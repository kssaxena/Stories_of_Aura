import { ExpandableCard } from "../../components/ui/expandable-card";
import { HeroParallax } from "../../components/ui/hero-parallax";
import { TextHoverEffect } from "../../components/ui/text-hover-effect";
import { products } from "../../constants/FileConstants";
import { cn } from "../../lib/utils";

const IntroSection = () => {
  return (
    <div>
      <HeroParallax products={products} />
      <section className="">
        <div className="relative flex w-full items-center justify-center bg-white dark:bg-black/90 ">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_2px,transparent_2px)]"
            )}
          />
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black "></div>
          <div className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl sm:text-7xl w-full">
            <div className="w-full ">
              <h1 className="flex justify-center items-center gap-2 text-4xl tracking-widest">
                <span>Driving Your Brand's Growth </span>
                <span> Through Digital Innovation</span>
              </h1>
              <TextHoverEffect text="Stories of AURA" />
              <ExpandableCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntroSection;
