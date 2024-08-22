import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Web.module.css";

const Web = ({
  className = "",
  propHeight,
  group,
  propRight,
  propLeft,
  completedWeb,
}) => {
  const rectangleDivStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const groupIconStyle = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  return (
    <div className={[styles.web, className].join(" ")}>
      <div className={styles.webChild} />
      <div className={styles.webItem} style={rectangleDivStyle} />
      <div className={styles.webInner} />
      <img
        className={styles.groupIcon}
        alt=""
        src={group}
        style={groupIconStyle}
      />
      <div className={styles.completedWebProjectsContainer}>
        <p className={styles.completedWeb}>{completedWeb}</p>
        <p className={styles.projects}> Projects</p>
      </div>
    </div>
  );
};

Web.propTypes = {
  className: PropTypes.string,
  group: PropTypes.string,
  completedWeb: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propRight: PropTypes.any,
  propLeft: PropTypes.any,
};

export default Web;
