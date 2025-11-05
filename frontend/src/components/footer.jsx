import { Link } from "react-router";
import { useState } from "react";
import EnquiryForm from "./enquiry-form";
import { BiSolidNavigation } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { moreLinks, quickLinks } from "../constants/FileConstants";
import { socialLinksFooter } from "../constants/ComponentConstants";

const Footer = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="relative lg:h-[26rem]  overflow-hidden flex justify-center items-end">
      <div className="z-10 relative w-full">
        <section className="Upper-part pt-10 flex justify-evenly items-end px-5 z-40">
          <div className="flex justify-start items-end gap-20">
            <div className="flex w-full justify-evenly items-end">
              <h1 className="text-5xl uppercase">
                Your story <br /> our strategy <br />
                <span className="text-[#DF3F33] font-semibold"> together</span>
              </h1>
              <button>
                <GoArrowUpRight className="text-9xl text-[#DF3F33] hover:text-white hover:bg-[#DF3F33] duration-300 ease-in-out rounded-full px-10 py-10" />
              </button>
            </div>
            <div className="flex gap-5 p-2 justify-center items-center ">
              {socialLinksFooter.map((social) => (
                <Link
                  className={`hover:scale-110 transition text-3xl ${social.className}`}
                  title={social.name}
                  to={social.path}
                  target="blank"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="Logo-and-slogan h-fit w-96 flex flex-col justify-center items-end">
            <img
              src="https://ik.imagekit.io/krb6qpkbp/Logo/Aura%20LOGO%20white.png?updatedAt=1762107262073"
              className="w-48"
            />
            {/* <img src="https://ik.imagekit.io/krb6qpkbp/Logo/Aura%20LOGO.png?updatedAt=1762107262073" /> */}
            <div className="flex flex-col gap-1">
              <p className="flex justify-end items-center">
                <BiSolidNavigation />: Lorem ipsum, dolor sit amet
              </p>
              <p className="flex justify-end items-center">
                <IoCall />: 9123456789
              </p>
              <p className="flex justify-end items-center">
                <IoMdMail />: support@storiesofaura.com
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center gap-5 py-10">
          <div className="flex flex-col gap-5">
            <div className="morelinks">
              <ul className="flex">
                {moreLinks.map((links) => (
                  <li className="small-footer-text hover:underline w-fit decoration-[#DF3F33] border-r last:border-0 px-3">
                    <Link to={links.path}>{links.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <h1 className="text-sm flex flex-col justify-center items-center py-2 border-t pt-5 border-[#DF3F33]">
              Copyright and policies reserved by Stories of Aura © 2025
            </h1>
          </div>
        </section>
      </div>
      {isActive && (
        <div className="fixed top-0 left-0 w-full h-screen backdrop-blur-2xl z-50 justify-center items-center flex">
          <EnquiryForm onCancel={() => setIsActive(false)} />
        </div>
      )}
      <div className="absolute -top-1/2 left-0 grayscale-75 opacity-40 object-bottom">
        <img
          src={`https://ik.imagekit.io/krb6qpkbp/Footer/footer_bg.jpg?updatedAt=1762334189213`}
          className="object-bottom object-contain"
        />
      </div>
    </div>
  );
};

export default Footer;
