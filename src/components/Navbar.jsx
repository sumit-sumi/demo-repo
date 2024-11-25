import logo from "../assets/kevinRushLogo.png";

import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-5 w-10" src={logo} alt="logo" />
      </div>

      <div className="m-8 flex items-center justify-center gap-6 text-2xl">
        <a
          href="https://www.linkedin.com/in/sumit-miyan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sumit-sumi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/sumit_sumi9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/sumi_notebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
