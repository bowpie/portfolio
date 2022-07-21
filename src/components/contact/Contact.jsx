import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import SectionHeader from "../body/SectionHeader.jsx";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ed3we3u",
        "template_wvma3pk",
        form.current,
        "UclI_NtmDukTcyZOA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <SectionHeader title={"Contact me"} subtitle={"Let's get in touch"} />

      <div className="container contact__container">
        <div className="contact__options" data-aos="fade-right">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>developer.bogdanu@gmail.com</h5>
            <a
              href="mailto:developer.bogdanu@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <SiDiscord className="contact__option-icon" />
            <h4>Discord</h4>
            <h5>Bowpie#8349</h5>
            <a
              href="https://discordapp.com/users/275278696368177154"
              target="_blank"
              rel="noreferrer"
            >
              Add me on Discord
            </a>
          </article>
        </div>
        <form onSubmit={sendEmail} data-aos="fade-left" ref={form}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
