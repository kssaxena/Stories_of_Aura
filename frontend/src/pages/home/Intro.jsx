import { FaDiamond } from "react-icons/fa6";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { HeroParallax } from "../../components/ui/hero-parallax";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import { TextHoverEffect } from "../../components/ui/text-hover-effect";
import { products } from "../../constants/FileConstants";
import {
  FaChartLine,
  FaCode,
  FaExternalLinkSquareAlt,
  FaGithub,
  FaPalette,
  FaPenFancy,
} from "react-icons/fa";

const IntroSection = () => {
  const cards = [
    // 1️⃣ Reputation Management
    {
      title: "Reputation Management",
      tagline: "Building and Protecting Brand Trust",
      icon: <FaDiamond />,
      description:
        "Reputation Management is the strategic process of shaping and maintaining a positive perception of a brand, business, or individual. It involves monitoring public sentiment, managing feedback, and addressing negative reviews or misinformation swiftly. Effective reputation management helps build trust, credibility, and long-term customer loyalty. In the digital age, where opinions spread rapidly across social media and review platforms, reputation management plays a crucial role in preserving brand integrity and ensuring consistent positive engagement with audiences.",
      content: (
        <div className="flex justify-center items-center relative w-full h-full">
          <div className="shadow-2xl shadow-black/50 bg-transparent w-full h-full">
            <img
              src="https://ik.imagekit.io/krb6qpkbp/Home/ChatGPT%20Image%20Nov%202,%202025,%2012_42_59%20AM.png?updatedAt=1762025244496"
              className="object-center object-contain w-full h-full rounded-2xl"
            />
          </div>
        </div>
      ),
    },

    // 2️⃣ Performance Marketing
    {
      title: "Performance Marketing",
      tagline: "Data Driven Marketing",
      icon: <FaChartLine />,
      description:
        "Performance Marketing focuses on achieving measurable business outcomes through targeted campaigns and analytics-based strategies. From paid ads and lead generation to conversion tracking, every action is monitored and optimized to deliver maximum ROI. This approach ensures that marketing spend directly translates into performance metrics such as sales, engagement, or leads. By combining creativity with data, performance marketing empowers brands to make smarter, results-oriented decisions and achieve sustainable growth.",
      content: (
        <div className="flex justify-center items-center relative w-full h-full">
          <div className="shadow-2xl shadow-black/50 bg-transparent w-full h-full">
            <img
              src="https://ik.imagekit.io/krb6qpkbp/Home/ChatGPT%20Image%20Nov%202,%202025,%2012_50_58%20AM.png?updatedAt=1762025244562"
              className="object-center object-contain w-full h-full rounded-2xl"
            />
          </div>
        </div>
      ),
    },

    // 3️⃣ Web Development & Coding
    {
      title: "Web Development & Coding",
      tagline: "Building Seamless Digital Experiences",
      icon: <FaCode />,
      description:
        "Web Development and Coding bring ideas to life through technology, enabling interactive, scalable, and high-performance web applications. From front-end design and responsive interfaces to robust back-end logic, every component contributes to an intuitive user experience. Skilled developers use frameworks, APIs, and optimized architectures to build digital platforms that perform seamlessly across devices — ensuring speed, security, and reliability in every line of code.",
      content: (
        <div className="flex justify-center items-center relative w-full h-full">
          <div className="shadow-2xl shadow-black/50 bg-transparent w-full h-full">
            <img
              src="https://ik.imagekit.io/krb6qpkbp/Home/ChatGPT%20Image%20Nov%202,%202025,%2012_51_55%20AM.png?updatedAt=1762025244515"
              className="object-center object-contain w-full h-full rounded-2xl"
            />
          </div>
        </div>
      ),
    },

    // 4️⃣ Branding & Designing
    {
      title: "Branding & Designing",
      tagline: "Crafting Visual Identity",
      icon: <FaPalette />,
      description:
        "Branding & Designing combine art and strategy to create meaningful visual identities that connect emotionally with audiences. From logos and typography to color palettes and brand guidelines, design defines how a brand communicates its personality and values. Effective branding goes beyond aesthetics — it builds recognition, trust, and loyalty by ensuring every design element aligns with the brand’s message and long-term vision.",
      content: (
        <div className="flex justify-center items-center relative w-full h-full">
          <div className="shadow-2xl shadow-black/50 bg-transparent w-full h-full">
            <img
              src="https://ik.imagekit.io/krb6qpkbp/Home/ChatGPT%20Image%20Nov%202,%202025,%2012_57_50%20AM.png?updatedAt=1762025285836"
              className="object-center object-contain w-full h-full rounded-2xl"
            />
          </div>
        </div>
      ),
    },

    // 5️⃣ Content Production
    {
      title: "Content Production",
      tagline: "Creating Impactful Stories That Engage",
      icon: <FaPenFancy />,
      description:
        "Content Production is the creative process of developing engaging and high-quality material across different media formats. Whether it’s video, writing, photography, or design, content production transforms ideas into stories that inform, inspire, and entertain. In today’s across different media formats. Whether it’s video, writing, photography, or design, content production transforms ideas into stories that inform, inspire, and entertain. In today’s  digital landscape, well-produced content not only drives engagement but also strengthens brand presence, helping businesses connect authentically with their target audience.",
      content: (
        <div className="flex justify-center items-center relative w-full h-full">
          <div className="shadow-2xl shadow-black/50 bg-transparent w-full h-full">
            <img
              src="https://ik.imagekit.io/krb6qpkbp/Home/ChatGPT%20Image%20Nov%202,%202025,%2012_57_47%20AM.png?updatedAt=1762025285811"
              className="object-center object-contain w-full h-full rounded-2xl"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <HeroParallax products={products} />
      <div className="h-fit w-full rounded-md bg-neutral-800 relative flex flex-col items-center justify-center py-20">
        <div className="w-full z-10">
          <TextHoverEffect text="Stories of AURA" />
          <h1 className="flex justify-center items-center gap-2 text-4xl tracking-widest">
            <span>Driving Your Brand's Growth </span>
            <span> Through Digital Innovation</span>
          </h1>
        </div>
        <div className="z-10">
          <StickyScroll content={cards} />
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
};

export default IntroSection;
