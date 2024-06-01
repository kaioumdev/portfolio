/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";
import SkillItem from "../Resume/SkillItem";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description: "The most modern and high-quality design made at a professional level."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Mobile apps",
    description: "Professional development of applications for iOS and Android."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Photography",
    description: "I make high-quality photos of any category at a professional level."
  }
];


const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">








        <p>
          👋 Hello there! I'm Abdul Kaiyum Fahim, a passionate full-stack web developer with a knack for turning ideas into immersive digital experiences. I thrive on the art of crafting elegant, user-friendly, and high-performance websites and web applications that make a real impact.

        </p>
        <p>
          <h3> 🎨 Design & UX:</h3>
          I'm not just about code; I'm about creating seamless user experiences. My love for design principles ensures that my projects not only function flawlessly but also look stunning. From wireframes to pixel-perfect UI, I'm your one-stop solution.

        </p>
        <p>
          <h3>    🛠️ Problem Solver:</h3>
          I thrive on challenges. Whether it's optimizing performance bottlenecks, creating intuitive navigation, or architecting complex systems, I love to solve problems and deliver elegant solutions.

        </p>
        <p>
          <h3> 💡 Continuous Learner:</h3>
          In the ever-evolving tech landscape, I'm committed to staying ahead of the curve. You'll often find me diving into new frameworks, libraries, and best practices to keep my skills razor-sharp.
        </p>
        <p>
          <h3> 🌍 Impact-Driven:</h3>
          I believe in using technology for good. I've contributed my skills to projects that make a difference, from nonprofit websites to e-commerce platforms, and I'm always excited about new opportunities to create positive change.
        </p>
      </section>

      <section>
        <div className="skill">
          <h3 className="h3 skills-title">My skills</h3>
          <ul className="skills-list content-card">
            <SkillItem title="HTML" value={90} />
            <SkillItem title="CSS" value={80} />
            <SkillItem title="JavaScript" value={80} />
            <SkillItem title="React" value={90} />
            <SkillItem title="Next" value={70} />
            <SkillItem title="Node" value={80} />
            <SkillItem title="Express" value={90} />
            <SkillItem title="MongoDB" value={80} />
            <SkillItem title="Docker" value={50} />
            <SkillItem title="Automation" value={60} />
          </ul>
        </div>
      </section>


      {/* <!--
      - service
    --> */}

      <section className="service">

        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">

          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

        </ul>

      </section>


      {/* <!--
      - testimonials
    --> */}

      <section className="testimonials">

        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">

          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

        </ul>

      </section>


      {/* <!--
      - clients
    --> */}

      <section className="clients">

        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-1-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-2-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-3-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-4-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-5-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-6-color.png" alt="client logo" />
            </a>
          </li>

        </ul>

      </section>

    </article>
  )
}

export default About