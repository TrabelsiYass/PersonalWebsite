import PropTypes from "prop-types";
import styles from "./AboutMe.module.css";

const AboutMe = ({ className = "" }) => {
  return (
    <div className={[styles.aboutMe, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleWrapper}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-14@2x.png"
          />
        </div>
        <div className={styles.frameItem} />
        <img className={styles.frameInner} alt="" src="/ellipse-52@2x.png" />
        <div className={styles.asARecentContainer}>
          <p className={styles.asARecentComputerScienceG}>
            <span className={styles.asARecent}>{`As a recent `}</span>
            <span className={styles.computerScience}>Computer Science</span>
            <span>{` graduate specializing in `}</span>
            <span className={styles.computerScience}>{`Software `}</span>
          </p>
          <p className={styles.asARecentComputerScienceG}>
            <span className={styles.computerScience}>Engineering</span>
            <span className={styles.asARecent}>{` `}</span>
            <span className={styles.computerScience}>
              and Information Systems
            </span>
            <span>{`, I bring a solid blend of `}</span>
          </p>
          <p className={styles.asARecentComputerScienceG}>
            <span>{`theoretical knowledge and practical expertise to `}</span>
            <span className={styles.computerScience}>every project</span>
            <span> I undertake.</span>
          </p>
          <p
            className={styles.asARecentComputerScienceG}
          >{`My academic journey, marked by honors, has equipped me with a deep `}</p>
          <p className={styles.asARecentComputerScienceG}>
            <span>understanding of</span>
            <span className={styles.computerScience}>
              {" "}
              the latest technologies
            </span>
            <span>{`, which I consistently apply to deliver `}</span>
          </p>
          <p
            className={styles.asARecentComputerScienceG}
          >{`reliable and efficient solutions. My portfolio reflects a commitment to `}</p>
          <p className={styles.asARecentComputerScienceG}>
            <span className={styles.computerScience}>excellence</span>
            <span>{`, showcasing a range of services where `}</span>
            <span className={styles.computerScience}>
              innovation meets precision
            </span>
            <span className={styles.asARecent}>.</span>
          </p>
          <p className={styles.asARecentComputerScienceG}>
            <span
              className={styles.asARecent}
            >{`Whether developing robust `}</span>
            <span className={styles.computerScience}>software programs</span>
            <span> or crafting seamless user</span>
          </p>
          <p className={styles.asARecentComputerScienceG}>
            <span>{` experiences, I am dedicated to `}</span>
            <span className={styles.computerScience}>
              driving success through technology
            </span>
            <span className={styles.asARecent}>.</span>
          </p>
        </div>
      </div>
      <div className={styles.aboutMeInner}>
        <div className={styles.behindTheCodeParent}>
          <div className={styles.behindTheCode}>Behind The Code</div>
          <div className={styles.myStory}>My Story</div>
          <img className={styles.lineIcon} alt="" src="/line-12.svg" />
        </div>
      </div>
    </div>
  );
};

AboutMe.propTypes = {
  className: PropTypes.string,
};

export default AboutMe;
