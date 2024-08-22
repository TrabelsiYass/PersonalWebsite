import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./ClassicButtonfalse.module.css";

const ClassicButtonfalse = ({ className = "", buttonBackgroundColor }) => {
  const buttonStyle = useMemo(() => {
    return {
      backgroundColor: buttonBackgroundColor,
    };
  }, [buttonBackgroundColor]);

  return (
    <div className={[styles.classicButtonfalse, className].join(" ")}>
      <div className={styles.button} style={buttonStyle}>
        <img className={styles.gisarrowOIcon} alt="" src="/gisarrowo.svg" />
      </div>
    </div>
  );
};

ClassicButtonfalse.propTypes = {
  className: PropTypes.string,

  /** Style props */
  buttonBackgroundColor: PropTypes.any,
};

export default ClassicButtonfalse;
