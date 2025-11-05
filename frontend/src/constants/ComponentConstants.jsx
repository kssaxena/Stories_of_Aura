import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IconHome } from "@tabler/icons-react";
import { GrWorkshop } from "react-icons/gr";
import { LiaBlogSolid } from "react-icons/lia";
import { RiFileList2Fill } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";
import { MdContacts } from "react-icons/md";
import { FaChartLine, FaCode, FaPalette, FaPenFancy } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaDiamond } from "react-icons/fa6";

export const socialLinks = [
  {
    name: "Instagram",
    icon: <AiFillInstagram />,
    path: "#",
    className: "",
  },
  {
    name: "LinkedIn",
    icon: <IoLogoLinkedin />,
    path: "#",
    className: "",
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    path: "#",
    className: "",
  },
  {
    name: "Twitter",
    icon: <FaSquareXTwitter />,
    path: "#",
    className: " ",
  },
  {
    name: "WhatsApp",
    icon: <IoLogoWhatsapp />,
    path: "#",
    className: " ",
  },
];

export const socialLinksFooter = [
  {
    name: "Instagram",
    icon: <AiFillInstagram />,
    path: "#",
    className: "text-[#DF3F33]",
  },
  {
    name: "LinkedIn",
    icon: <IoLogoLinkedin />,
    path: "#",
    className: "text-blue-500",
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    path: "#",
    className: "text-[#DF3F33]",
  },
  {
    name: "Twitter",
    icon: <FaSquareXTwitter />,
    path: "#",
    className: "text-white",
  },
];

export const NavLinks = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/",
  },
  {
    title: "Gallery",
    icon: (
      <GrWorkshop className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Aura Experience",
    icon: (
      <LiaBlogSolid className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Packages",
    icon: (
      <RiFileList2Fill className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "About Us",
    icon: (
      <IoMdContacts className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Contact",
    icon: (
      <MdContacts className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
];

export const TimeLineData = [
  // 1️⃣ Reputation Management
  {
    title: "Reputation Management",
    icon: <FaDiamond />,
    content: (
      <div>
        <h1 className="text-xl py-5">Building and Protecting Brand Trust</h1>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="mb-8 font-normal text-neutral-800 dark:text-neutral-400"
        >
          Reputation Management is the strategic process of shaping and
          maintaining a positive perception of a brand, business, or individual.
          It involves monitoring public sentiment, managing feedback, and
          addressing negative reviews or misinformation swiftly. Effective
          reputation management helps build trust, credibility, and long-term
          customer loyalty. In the digital age, where opinions spread rapidly
          across social media and review platforms, reputation management plays
          a crucial role in preserving brand integrity and ensuring consistent
          positive engagement with audiences.
        </motion.p>
      </div>
    ),
  },

  // 2️⃣ Performance Marketing
  {
    title: "Performance Marketing",
    icon: <FaChartLine />,
    content: (
      <div>
        <h1 className="text-xl py-5">Data Driven Marketing</h1>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="mb-8 font-normal text-neutral-800 dark:text-neutral-400"
        >
          Performance Marketing focuses on achieving measurable business
          outcomes through targeted campaigns and analytics-based strategies.
          From paid ads and lead generation to conversion tracking, every action
          is monitored and optimized to deliver maximum ROI. This approach
          ensures that marketing spend directly translates into performance
          metrics such as sales, engagement, or leads. By combining creativity
          with data, performance marketing empowers brands to make smarter,
          results-oriented decisions and achieve sustainable growth.
        </motion.p>
      </div>
    ),
  },

  // 3️⃣ Web Development & Coding
  {
    title: "Web Development & Coding",
    icon: <FaCode />,
    content: (
      <div>
        <h1 className="text-xl py-5">Building Seamless Digital Experiences</h1>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="mb-8 font-normal text-neutral-800 dark:text-neutral-400"
        >
          Web Development and Coding bring ideas to life through technology,
          enabling interactive, scalable, and high-performance web applications.
          From front-end design and responsive interfaces to robust back-end
          logic, every component contributes to an intuitive user experience.
          Skilled developers use frameworks, APIs, and optimized architectures
          to build digital platforms that perform seamlessly across devices —
          ensuring speed, security, and reliability in every line of code.
        </motion.p>
      </div>
    ),
  },

  // 4️⃣ Branding & Designing
  {
    title: "Branding & Designing",
    icon: <FaPalette />,
    content: (
      <div>
        <h1 className="text-xl py-5">Crafting Visual Identity</h1>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="mb-8 font-normal text-neutral-800 dark:text-neutral-400"
        >
          Branding & Designing combine art and strategy to create meaningful
          visual identities that connect emotionally with audiences. From logos
          and typography to color palettes and brand guidelines, design defines
          how a brand communicates its personality and values. Effective
          branding goes beyond aesthetics — it builds recognition, trust, and
          loyalty by ensuring every design element aligns with the brand’s
          message and long-term vision.
        </motion.p>
      </div>
    ),
  },

  // 5️⃣ Content Production
  {
    title: "Content Production",
    icon: <FaPenFancy />,
    content: (
      <div>
        <h1 className="text-xl py-5">Creating Impactful Stories That Engage</h1>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="mb-8 font-normal text-neutral-800 dark:text-neutral-400"
        >
          Content Production is the creative process of developing engaging and
          high-quality material across different media formats. Whether it’s
          video, writing, photography, or design, content production transforms
          ideas into stories that inform, inspire, and entertain. In today’s
          digital landscape, well-produced content not only drives engagement
          but also strengthens brand presence, helping businesses connect
          authentically with their target audience.
        </motion.p>
      </div>
    ),
  },
];
