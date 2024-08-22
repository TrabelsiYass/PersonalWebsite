import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.rectangleWrapper}>
        <img className={styles.frameChild} alt="" src="/rectangle-342@2x.png" />
      </div>
      <div className={styles.entypoSocialinstagramWithCParent}>
        <img
          className={styles.entypoSocialinstagramWithCIcon}
          alt=""
          src="/entyposocialinstagramwithcircle.svg"
        />
        <img
          className={styles.entypoSocialgithubIcon}
          alt=""
          src="/entyposocialgithub.svg"
        />
        <img
          className={styles.entypoSocialgoogleIcon}
          alt=""
          src="/entyposocialgoogle.svg"
        />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img
          className={styles.entypoSocialfacebookWithCiIcon}
          alt=""
          src="/entyposocialfacebookwithcircle.svg"
        />
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
