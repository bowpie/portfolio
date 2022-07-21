import { FaBook } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { AiFillProject } from "react-icons/ai";

const ABOUTME_CARDS = [
  {
    title: "Experience",
    text: "Student",
    icon: <FaBook className="about__icon" />,
  },
  {
    title: "Clients",
    text: "-",
    icon: <HiUserGroup className="about__icon" />,
  },
  {
    title: "Projects",
    text: "10+ projects",
    icon: <AiFillProject className="about__icon" />,
  },
];

export { ABOUTME_CARDS };
