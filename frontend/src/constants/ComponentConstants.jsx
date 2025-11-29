import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import { IconHome } from "@tabler/icons-react";
import { GrWorkshop } from "react-icons/gr";
import { LiaBlogSolid } from "react-icons/lia";
import { RiFileList2Fill } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";
import { MdContacts } from "react-icons/md";
import { FaChartLine, FaCode, FaPalette, FaPenFancy } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaDiamond } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";

export const socialLinks = [
  {
    name: "Instagram",
    icon: <AiFillInstagram />,
    path: "https://www.instagram.com/storiesofaura?igsh=eDk4djZycm1vYWNr",
    className: "",
  },
  {
    name: "LinkedIn",
    icon: <IoLogoLinkedin />,
    path: "https://www.linkedin.com/company/storiesofaura/",
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
    path: "https://wa.me/918602395761",
    className: " ",
  },
  // {
  //   name: "Gmail",
  //   icon: <IoMdMail />,
  //   path: "https://mail.google.com/mail/?view=cm&fs=1&to=support@storiesofaura.com",
  //   className: "",
  // },
];

export const socialLinksFooter = [
  {
    name: "Instagram",
    icon: <AiFillInstagram />,
    path: "https://www.instagram.com/storiesofaura?igsh=eDk4djZycm1vYWNr",
    className: "text-[#DF3F33]",
  },
  {
    name: "LinkedIn",
    icon: <IoLogoLinkedin />,
    path: "https://www.linkedin.com/company/storiesofaura/",
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
  {
    name: "WhatsApp",
    icon: <IoLogoWhatsapp />,
    path: "https://wa.me/918602395761",
    className: "text-green-500",
  },
  // {
  //   name: "Gmail",
  //   icon: <IoMdMail />,
  //   path: "https://mail.google.com/mail/?view=cm&fs=1&to=support@storiesofaura.com",
  //   className: "text-[#DF3F33]",
  // },
];

export const NavLinks = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    path: "/",
  },
  {
    title: "Gallery",
    icon: (
      <GrGallery className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    path: "/aura-gallery",
  },
  {
    title: "Aura Experience",
    icon: (
      <LiaBlogSolid className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    path: "/aura-experience",
  },
  {
    title: "Packages",
    icon: (
      <RiFileList2Fill className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    path: "/aura-packages",
  },
  {
    title: "About Us",
    icon: (
      <IoMdContacts className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    path: "/about-stories-of-aura",
  },
  {
    title: "Contact",
    icon: (
      <MdContacts className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    path: "/contact-stories-of-aura",
  },
];

export const TimeLineData = [
  // 1️⃣ Reputation Management
  {
    title: "Reputation Management",
    icon: <FaDiamond />,
    content: (
      <div>
        <h1 className="md:text-xl py-5">Building and Protecting Brand Trust</h1>
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
        <h1 className="md:text-xl py-5">Data Driven Marketing</h1>
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
        <h1 className="md:text-xl py-5">
          Building Seamless Digital Experiences
        </h1>
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
        <h1 className="md:text-xl py-5">Crafting Visual Identity</h1>
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
        <h1 className="md:text-xl py-5">
          Creating Impactful Stories That Engage
        </h1>
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

export const PackageData = [
  {
    name: "Starter",
    badge: "30% OFF",
    popular: false,
    price: "₹ 25,000",
    subtitle: "Best for small businesses",
    occasional: "+ basic brand setup",
    features: [
      { label: "Photography & Videography", value: true },
      { label: "SMM", value: true },
      { label: "Branding", value: "Basic (onBoarding)" },
      { label: "Creatives", value: "12 Creatives + 8 stories" },
      { label: "Reels", value: "8 (generic)" },
    ],
  },
  {
    name: "Intermediate",
    badge: "45% OFF",
    popular: true,
    price: "₹ 45,000",
    subtitle: "Best for growing brands",
    occasional: "+ premium brand setup",
    features: [
      { label: "Photography & Videography", value: true },
      { label: "SMM", value: true },
      { label: "Branding", value: "Add-on Overall" },
      { label: "Creatives", value: "18 Creatives + 15 stories" },
      { label: "Reels", value: "8 (generic) + 4 (exclusive)" },
    ],
  },
  {
    name: "Professional",
    badge: "60% OFF",
    popular: false,
    price: "₹ 85,000",
    subtitle: "Full-scale brand domination",
    occasional: "+ complete brand suite",
    features: [
      { label: "Photography & Videography", value: true },
      { label: "SMM", value: true },
      { label: "Branding", value: "Website & maintenance overall" },
      { label: "Creatives", value: "20 Creatives + Daily stories" },
      { label: "Reels", value: "4 (generic) + 8 (exclusive)" },
    ],
  },
];

export const customPlanOptions = {
  photography: [
    "Monthly Photoshoot (4 Hours)",
    "Monthly Photoshoot (8 Hours)",
    "Bi-Weekly Photoshoot (4 Hours)",
    "Quarterly Cinematic Shoot",
    "Drone Shoot Add-on",
    "Product Shoot (Studio Setup)",
  ],

  videography: [
    "4K Cinematic Video (1 min)",
    "4K Cinematic Video (3 mins)",
    "Property Walkthrough Video",
    "Interviews / Testimonials",
    "Cinematic Short Ads",
    "Event Videography Coverage",
  ],

  creatives: [
    "12 Creatives + 8 Stories",
    "18 Creatives + 15 Stories",
    "28 Creatives + 20 Stories",
    "Daily Stories (30 per month)",
    "Carousel Posts (4 per month)",
    "GIF/Animated Creatives (4 per month)",
  ],

  reels: [
    "8 Generic Reels",
    "8 Generic + 4 Exclusive Reels",
    "4 Generic + 8 Exclusive Reels",
    "Lifestyle Reels (4 per month)",
    "Cinematic Reels (2 per month)",
    "UGC Style Reels (4 per month)",
  ],

  smm: [
    "Instagram Management",
    "Facebook Page Management",
    "YouTube Shorts Management",
    "Hashtag Research",
    "Ad-Copy Writing",
    "Comment/DM Handling",
    "Monthly Analytics Report",
  ],

  branding: [
    "Basic Onboarding Branding Pack",
    "Brand Messaging & Tone Setup",
    "Brand Identity Revamp",
    "Complete Brand Book",
    "Website + Maintenance",
    "Print Collateral Pack",
  ],

  addOns: [
    "SEO Keyword Setup",
    "Google Business Profile Optimization",
    "Campaign Strategy + Execution",
    "Influencer Outreach",
    "Ad Running (Paid)",
    "Motion Graphic Elements",
  ],
};
