import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ClassicButtonfalse from "../components/ClassicButtonfalse";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./Desktop1.module.css";

const Desktop1 = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProjectsTextClick = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className={styles.desktop1}>
      <img className={styles.desktop1Child} alt="" src="/rectangle-27@2x.png" />
      <img className={styles.desktop1Item} alt="" src="/rectangle-27@2x.png" />
      <img className={styles.desktop1Inner} alt="" src="/rectangle-27@2x.png" />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-27@2x.png" />
      <img
        className={styles.desktop1Child1}
        alt=""
        src="/rectangle-27@2x.png"
      />
      <header className={styles.header}>
        <div className={styles.logo}>
          <img className={styles.logoChild} alt="" src="/rectangle-34@2x.png" />
        </div>
        <div className={styles.frame}>
          <div className={styles.navbar}>
            <div className={styles.home} onClick={onHomeTextClick}>
              Home
            </div>
            <div className={styles.aboutMe}>About Me</div>
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
      <FrameComponent1 />
      <div className={styles.keepUpdated}>Keep Updated</div>
      <div className={styles.innerFrameParent}>
        <button className={styles.innerFrame}>
          <input className={styles.email} placeholder="Email" type="text" />
        </button>
        <ClassicButtonfalse buttonBackgroundColor="#b9140e" />
      </div>
      <FrameComponent />
    </div>
  );
};

export default Desktop1;
