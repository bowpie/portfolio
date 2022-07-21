import React from "react";
import { SiDiscord } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/bowpie/" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/bogdann_u/" target="_blank">
        <BsInstagram />
      </a>
      <a href="https://discordapp.com/users/275278696368177154" target="_blank">
        <SiDiscord />
      </a>
    </div>
  );
};

export default HeaderSocials;
