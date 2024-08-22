import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProjectsPage2.module.css";

const ProjectsPage2 = () => {
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
    <div className={styles.projectsPage3}>
      <img
        className={styles.projectsPage3Child}
        alt=""
        src="/rectangle-223@2x.png"
      />
      <div className={styles.monkeyDDragon}>Monkey D Dragon</div>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-23@2x.png" />
        <img className={styles.frameItem} alt="" src="/rectangle-242@2x.png" />
        <img className={styles.frameChild} alt="" src="/rectangle-25@2x.png" />
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-26@2x.png"
        />
      </div>
      <div className={styles.loremIpsumDolorContainer}>
        <p className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p
          className={styles.loremIpsumDolor}
        >{`Sed do eiusmod tempor incididunt ut labore et dolore magna `}</p>
        <p
          className={styles.loremIpsumDolor}
        >{`aliqua. Ut enim ad minim veniam, quis nostrud exercitation `}</p>
        <p
          className={styles.loremIpsumDolor}
        >{`ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</p>
        <p
          className={styles.loremIpsumDolor}
        >{`Duis aute irure dolor in reprehenderit in voluptate velit esse `}</p>
        <p
          className={styles.loremIpsumDolor}
        >{`cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat `}</p>
        <p
          className={styles.loremIpsumDolor}
        >{`cupidatat non proident, sunt in culpa qui officia deserunt mollit `}</p>
        <p className={styles.loremIpsumDolor}>anim id est laborum.</p>
      </div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img
            className={styles.logoChild}
            alt=""
            src="/rectangle-341@2x.png"
          />
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
    </div>
  );
};

export default ProjectsPage2;
