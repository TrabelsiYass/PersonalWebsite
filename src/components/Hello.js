import PropTypes from "prop-types";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Hello.module.css";

const Hello = ({ className = "" }) => {
  const navigate = useNavigate();

  const onAboutMeTextClick = useCallback(() => {
    navigate("/About");
  }, [navigate]);

  const onProjectsTextClick = useCallback(() => {
    navigate("/Projects");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/Contact");
  }, [navigate]);

  return (
    <section className={[styles.frame, className].join(" ")}>
      <div className={styles.home}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <img
              className={styles.logoChild}
              alt=""
              src="/rectangle-343@2x.png"
            />
          </div>
          <div className={styles.frame1}>
            <div className={styles.navbar}>
              <div className={styles.home1}>Home</div>
              <div className={styles.aboutMe} onClick={onAboutMeTextClick}>
                About Me
              </div>
              <div className={styles.projects} onClick={onProjectsTextClick}>
                Projects
              </div>
              <div
                className={styles.contact}
                onClick={onContactTextClick}
              >{`Contact `}</div>
            </div>
          </div>
        </header>
        <div className={styles.frame2}>
          <div className={styles.frameInner}>
            <div className={styles.forWebsiteAndSoftwareDevelParent}>
              <div className={styles.forWebsiteAnd}>
                For WEBSITE , IOS/ANDROID APP and SOFTWARE Development
              </div>
              <div className={styles.fullStuckDeveloperContainer}>
                <p className={styles.fullStuck}>FULL STUCK DEVELOPER</p>
                <p className={styles.fullStuck}> PORTFOLIO</p>
              </div>
              <div className={styles.scrollDown}>{`Scroll Down `}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.ourServicesParent}>
              <div className={styles.ourServices}>our Services</div>
              <div className={styles.whatWeDo}>WHAT WE DO ?</div>
              <img className={styles.frameChild} alt="" src="/line-1.svg" />
            </div>
            <div className={styles.drivenByCuriosityAndAPassWrapper}>
              <div className={styles.drivenByCuriosityContainer}>
                <p
                  className={styles.drivenByCuriosity}
                >{`"Driven by curiosity and a `}</p>
                <p className={styles.drivenByCuriosity}>
                At the core of our service offerings lies a profound commitment to problem-solving and a passion for innovation. We excel in developing tailored software solutions that are meticulously crafted to meet your unique business challenges and objectives. Our team combines extensive expertise in software engineering with a forward-thinking mindset, ensuring that each project not only addresses current needs but is also designed to adapt to future developments. From concept to deployment, we engage in a collaborative process with our clients, focusing on understanding their vision and translating it into robust, high-performance applications. Our solutions are built with an emphasis on scalability, user experience, and technical excellence, using the latest technologies and industry best practices. We pride ourselves on our ability to deliver comprehensive solutions that integrate seamlessly into your existing systems while enhancing overall functionality and efficiency. Our dedication to quality and attention to detail ensure that we provide not just a product, but a strategic asset that drives your business forward. Whether you’re looking to innovate with new technologies, streamline operations, or enhance your digital presence, we are committed to delivering results that exceed expectations. Partner with us to turn your ideas into reality and achieve sustainable growth through cutting-edge technology solutions.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.designBoxParent}>
            <div className={styles.designBox}>
              <div className={styles.frame3}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/rectangle-3@2x.png"
                />
                <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
              </div>
              <div className={styles.frame4}>
                <div className={styles.forWebsiteAnd}>
                  <p
                    className={styles.drivenByCuriosity}
                  >{`Design is at the heart 
of our web application 
and Software 
development.We focus on
creating visually stunning`}</p>
                  <p
                    className={styles.drivenByCuriosity}
                  >{`and highly responsive apps that `}</p>
                  <p
                    className={styles.drivenByCuriosity}
                  >{`offer a seamless user experience `}</p>
                  <p className={styles.drivenByCuriosity}>across all devices</p>
                </div>
              </div>
            </div>
            <div className={styles.devBox}>
              <img
                className={styles.devBoxChild}
                alt=""
                src="/rectangle-31@2x.png"
              />
              <div className={styles.weCraftTailoredContainer}>
                <p
                  className={styles.drivenByCuriosity}
                >{`We craft tailored software solutions `}</p>
                <p
                  className={styles.drivenByCuriosity}
                >{`that meet your unique business needs. `}</p>
                <p className={styles.drivenByCuriosity}>
                  From ideation to deployment, we 
                </p>
                <p className={styles.drivenByCuriosity}>
                  ensure every line of code serves a 
                </p>
                <p
                  className={styles.drivenByCuriosity}
                >{` delivering `}
                  functionality and scalability.
                </p>
              </div>
              <img className={styles.vectorIcon1} alt="" src="/vector11.svg" />
            </div>
            <div className={styles.devBox1}>
              <div className={styles.vectorWrapper}>
                <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
              </div>
              <div className={styles.navigateTheComplexities}>
                Navigate the complexities of technology with our expert
                guidance. We provide strategic advice and ongoing support to
                help you leverage technology for business success.
              </div>
            </div>
            <div className={styles.devBox2}>
              <img
                className={styles.devBoxChild}
                alt=""
                src="/rectangle-31@2x.png"
              />
              <div className={styles.weOfferComprehensive}>
                We offer comprehensive full-stack development services, handling
                both frontend and backend development to deliver complete,
                integrated solutions. By leveraging the latest technologies on
                both ends, we ensure that your applications are not only
                visually stunning but also technically sound and
                high-performing.
              </div>
              <img
                className={styles.carbondevelopmentIcon}
                alt=""
                src="/carbondevelopment.svg"
              />
            </div>
          </div>
    
        </div>
      </div>
    </section>
  );
};

Hello.propTypes = {
  className: PropTypes.string,
};

export default Hello;
