import React from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import { useNavigate } from 'react-router-dom';
import classes from './Contact.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About: React.FC = () => {
  const navigate = useNavigate();

  //dummy submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className={classes.contact}>
      <div>
        Pellentesque rhoncus velit nec ante iaculis, vel imperdiet urna dapibus.
        Phasellus quis aliquet odio. In molestie mauris quam, id ornare dolor
        dictum nec. Ut ornare ante vitae dolor mattis, quis bibendum odio
        laoreet. Fusce sem neque, molestie in ex nec, lacinia sagittis purus.
        Nunc aliquam, mauris et tempus tristique, sapien enim blandit diam, sit
        amet gravida leo lacus quis lectus. Donec neque mauris, mattis dapibus
        enim et, feugiat molestie tellus. Integer tempor ex nec nisl tempus, ut
        auctor ante auctor. Praesent mattis at tellus at consequat.
      </div>
      <div>
        <Card>
          <form className={classes["contact-form"]} onSubmit={handleSubmit}>
            <h1 className={classes["contact-form-title-text"]}>Contact us</h1>
            <p>Your Name</p>
            <input type="text" placeholder="Tony Stark" required></input>
            <p>Your email</p>
            <input
              type="email"
              placeholder="example@email.com"
              required
            ></input>
            <p>Subject</p>
            <textarea placeholder="Your message..." required></textarea>
            <Button type="submit">Submit</Button>
          </form>
        </Card>
        <div className={classes["contact-form-links"]}>
          <a href="https://github.com/karolszczesniakk">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/karol-szcze%C5%9Bniak-52607b234/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;