import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutMeTextClick = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.logo}>
        <img className={styles.logoChild} alt="" src="/rectangle-34@2x.png" />
      </div>
      <div className={styles.frame}>
        <div className={styles.navbar}>
          <div className={styles.home} onClick={onHomeTextClick}>
            Home
          </div>
          <div className={styles.aboutMe} onClick={onAboutMeTextClick}>
            About Me
          </div>
          <div className={styles.projects}>Projects</div>
          <div
            className={styles.contact}
            onClick={onContactTextClick}
          >{`Contact `}</div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
