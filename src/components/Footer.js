import PropTypes from "prop-types";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ClassicButtonfalse from "./ClassicButtonfalse";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  const navigate = useNavigate();

  const onReadMoreTextClick = useCallback(() => {
    navigate("/About");
  }, [navigate]);

  return (
    <div className={[styles.footer, className].join(" ")}>
      <div className={styles.titles}>
        <div className={styles.freshIdeasFreshMomentsGivParent}>
          <div className={styles.freshIdeasFreshContainer}>
            <p
              className={styles.freshIdeasFresh}
            >{`Fresh Ideas, Fresh Moments `}</p>
            <p className={styles.givingWingsTo}>
              {" "}
              Giving Wings to your Stories.
            </p>
          </div>
          <button className={styles.vectorParent}>
            <img
              className={styles.groupChild}
              alt=""
              src="/rectangle-20@2x.png"
            />
            <div
              className={styles.startYourStories}
            >{`Start Your Stories `}</div>
          </button>
        </div>
        <img className={styles.titlesChild} alt="" src="/frame-33@2x.png" />
      </div>
      <footer className={styles.joinUs}>
        <div className={styles.frameParent}>
          <div className={styles.rectangleWrapper}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-342@2x.png"
            />
          </div>
          <div className={styles.entypoSocialinstagramWithCParent}>
            <img
              className={styles.entypoSocialinstagramWithCIcon}
              alt=""
              src="/entyposocialinstagramwithcircle1.svg"
            />
            <img
              className={styles.entypoSocialgithubIcon}
              alt=""
              src="/entyposocialgithub1.svg"
            />
            <img
              className={styles.entypoSocialgoogleIcon}
              alt=""
              src="/entyposocialgoogle1.svg"
            />
            <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
            <img
              className={styles.entypoSocialfacebookWithCiIcon}
              alt=""
              src="/entyposocialfacebookwithcircle1.svg"
            />
          </div>
        </div>
        <img className={styles.joinUsChild} alt="" src />
        <div className={styles.aboutUs}>{`About Us `}</div>
        <div className={styles.programmersAreTheContainer}>
          <p className={styles.freshIdeasFresh}>
            Programmers are the architects of the digital world, transforming
            complex problems into elegant solutions through code.
          </p>
          <p className={styles.freshIdeasFresh}>
            They possess a unique blend of creativity and logic, enabling them
            to see patterns and craft algorithms that power everything
          </p>
          <p
            className={styles.freshIdeasFresh}
          >{`from everyday apps to groundbreaking technologies. Driven by curiosity and a passion for innovation, programmers constantly `}</p>
          <p className={styles.freshIdeasFresh}>
            learn and adapt, pushing the boundaries of what's possible in the
            ever-evolving landscape of technology.
          </p>
        </div>
        <div className={styles.frame}>
          <div
            className={styles.readMore}
            onClick={onReadMoreTextClick}
          >{`Read More `}</div>
          <img
            className={styles.frameItem}
            alt=""
            src="/arrow-1.svg"
            onClick={onReadMoreTextClick}
          />
        </div>
        <div className={styles.freshIdeasFreshContainer}>Keep Updated</div>
        <div className={styles.innerFrameParent}>
          <button className={styles.innerFrame}>
            <input className={styles.email} placeholder="Email" type="text" />
          </button>
          <ClassicButtonfalse />
        </div>
      </footer>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
