import React, { useEffect } from "react";
import "./about.css";
import AboutCard from "./AboutCard";
import SectionHeader from "../body/SectionHeader";
import { ABOUTME_CARDS } from "../../constants/ABOUTME_CARDS.jsx";
import BookCarousel from "./BookCarousel";

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about">
      <SectionHeader title={"About me"} subtitle={"Get to know"} />

      <div className="container about__container">
        <div className="about__me " data-aos="fade-right">
          <img
            src="https://bowpie.github.io/portfolio/images/imageme.png"
            alt=""
          />
        </div>
        <div className="about__content" data-aos="fade-up">
          <div className="about__cards">
            {ABOUTME_CARDS.map((card, i) => (
              <AboutCard title={card.title} text={card.text} icon={card.icon} />
            ))}
          </div>
          <p>
            Hi, my name is Bogdan, I'm 17 years old and I study computer science
            at "Gheorghe Lazar" National College in Sibiu, Romania. If you could
            use my help for any of your projects, feel free to contact me.
          </p>
          <div className="about__contact">
            <a href="#contact" className="btn btn-primary">
              Contact me
            </a>
          </div>
        </div>
        <div className="about__books">
          <h2>My favourite books</h2>

          <BookCarousel />
        </div>
      </div>
    </section>
  );
};

export default About;
