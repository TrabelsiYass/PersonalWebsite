import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Frame6.module.css";

const Frame6 = ({
  className = "",
  propTop,
  propWidth,
  propWidth1,
  inTodaysFastPacedWorldDigita,
  aNecessityIFocusOnDigitalBec,
  growthEnhanceEfficiencyAnd,
  transformationIsNotJustAbout,
  doBusinessByEmbracingDigital,
  opportunitiesStreamlineOperation,
  moreMeaningfulWaysMyWorkIs,
  digitalExperiencesThatResonate,
}) => {
  const frameStyle = useMemo(() => {
    return {
      top: propTop,
      width: propWidth,
    };
  }, [propTop, propWidth]);

  const frame1Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={[styles.frame, className].join(" ")} style={frameStyle}>
      <div className={styles.frameEeeeeee}>
        <div className={styles.frame1}>
          <img className={styles.frameChild} alt="" src="/ellipse-6@2x.png" />
          <div className={styles.whyHireMe}>Why Hire Me?</div>
        </div>
        <div className={styles.frame2} style={frame1Style}>
          <img className={styles.frameChild} alt="" src="/ellipse-51@2x.png" />
          <div className={styles.whyHireMe}>
            <p className={styles.inTodaysFastPaced}>
              {inTodaysFastPacedWorldDigita}
            </p>
            <p className={styles.inTodaysFastPaced}>
              {aNecessityIFocusOnDigitalBec}
            </p>
            <p className={styles.inTodaysFastPaced}>
              {growthEnhanceEfficiencyAnd}
            </p>
            <p className={styles.inTodaysFastPaced}>
              {transformationIsNotJustAbout}
            </p>
            <p className={styles.inTodaysFastPaced}>
              {doBusinessByEmbracingDigital}
            </p>
            <p className={styles.inTodaysFastPaced}>
              {opportunitiesStreamlineOperation}
            </p>
            <p className={styles.inTodaysFastPaced}>
              {moreMeaningfulWaysMyWorkIs}
            </p>
            <p className={styles.inTodaysFastPaced}>
              {digitalExperiencesThatResonate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Frame6.propTypes = {
  className: PropTypes.string,
  inTodaysFastPacedWorldDigita: PropTypes.string,
  aNecessityIFocusOnDigitalBec: PropTypes.string,
  growthEnhanceEfficiencyAnd: PropTypes.string,
  transformationIsNotJustAbout: PropTypes.string,
  doBusinessByEmbracingDigital: PropTypes.string,
  opportunitiesStreamlineOperation: PropTypes.string,
  moreMeaningfulWaysMyWorkIs: PropTypes.string,
  digitalExperiencesThatResonate: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default Frame6;
