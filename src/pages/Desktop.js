import axios from 'axios';
import gsap from 'gsap';
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop.module.css"; // Ensure this path is correct
const Contact = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProjectsTextClick = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      console.log(response.data);
      // Optionally, handle the response (e.g., show a success message)
    } catch (error) {
      console.error('Error submitting form:', error);
      // Optionally, handle the error (e.g., show an error message)
    }
  };

  const backgroundRef = useRef(null);

  useEffect(() => {
    gsap.to(backgroundRef.current, {
      duration: 1,
      backgroundImage: `url('/rectangle-33@2x.png')`, // New background image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    });
  }, []);

  return (
    <div className={styles.container} ref={backgroundRef}>
      <header className={styles.header}>
          <div className={styles.logo} onClick={onHomeTextClick}>
            <img className={styles.logoChild} alt="" src="/rectangle-34@2x.png" />
          </div>
          <div className={styles.frame}>
            <div className={styles.navbar}>
              <div className={styles.home} onClick={onHomeTextClick}>
                Home
              </div>
              <div className={styles.aboutMe} onClick={onAboutTextClick}>About Me</div>
              <div className={styles.projects} onClick={onProjectsTextClick}>
                Projects
              </div>
              <div
                className={styles.contact}
              >{`Contact `}</div>
            </div>
          </div>
      </header>

      <section id="contact" className={styles.contactSection}>
        <h1 className={styles.sectionHeader}>Feel Free</h1>
        <div className={styles.contactWrapper}>
          <form id="contact-form" className={styles.formHorizontal} role="form" onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                className={styles.formControl}
                id="name"
                placeholder="What Should I Call U ?"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                className={styles.formControl}
                id="email"
                placeholder="Your Email So I Can Get U"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              className={styles.formControl}
              rows="10"
              placeholder="Just Say What's in Your Mind ! "
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button className={styles.sendButton} id="submit" type="submit" value="SEND">
              <div className={styles.altSendButton}>
                <i className="fa fa-paper-plane"></i>
                <span className={styles.sendText}>Go</span>
              </div>
            </button>
          </form>

          <div className={styles.directContactContainer}>
            <ul className={styles.contactList}>
              <li className={styles.listItem}>
                <i className="fa fa-map-marker fa-2x"></i>
                <span className={styles.contactText}>North Africa : Tunisia</span>
              </li>
              <li className={styles.listItem}>
                <i className="fa fa-phone fa-2x"></i>
                <span className={styles.contactText}>
                  <a href="tel:1-212-555-5555" title="Give me a call">(216) 20435121</a>
                </span>
              </li>
              <li className={styles.listItem}>
                <i className="fa fa-envelope fa-2x"></i>
                <span className={styles.contactText}>
                  <a href="mailto:#" title="Send me an email">trabelsiyassin32@gmail.com</a>
                </span>
              </li>
            </ul>

            <hr />

            <ul className={styles.socialMediaList}>
            <li>
              <a href="https://www.linkedin.com/in/trabelsi-yassin-a5781a29a/" target="_blank" className={styles.contactIcon}>
                <img src="/linkedin.svg" alt="Linkedin" className={styles.socialMediaIcon} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/trabelsiiyassinn/" target="_blank" className={styles.contactIcon}>
                <img src="/facebook.svg" alt="Facebook" className={styles.socialMediaIcon} />
              </a>
            </li>
            <li>
              <a href="https://github.com/TrabelsiYass/" target="_blank" className={styles.contactIcon}>
                <img src="/github.svg" alt="Github" className={styles.socialMediaIcon} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/__trabelsiii/" target="_blank" className={styles.contactIcon}>
                <img src="/instagram.svg" alt="Instagram" className={styles.socialMediaIcon} />
              </a>
            </li>
  </ul>

            <hr />

            <div className={styles.copyright}>&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
