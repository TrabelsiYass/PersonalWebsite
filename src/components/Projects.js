import PropTypes from "prop-types";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Projects.module.css";

const Projects = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSeeMoreTextClick = useCallback(() => {
    navigate("/projects-page");
  }, [navigate]);

  return (
    <div className={[styles.projects, className].join(" ")}>
      <div className={styles.photos}>
        <div className={styles.photosInner}>
          <div className={styles.ourProjectsParent}>
            <div className={styles.ourProjects}>our Projects</div>
            <div className={styles.ourImpactfulCreations}>
              Our Impactful Creations
            </div>
            <img className={styles.frameChild} alt="" src="/line-11.svg" />
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <img className={styles.frameItem} alt="" src="/rectangle-9@2x.png" />
          <div className={styles.project1}>Project 1</div>
        </div>
        <div className={styles.rectangleGroup}>
          <img className={styles.frameItem} alt="" src="/rectangle-8@2x.png" />
          <div className={styles.project1}>Project 2</div>
        </div>
        <div className={styles.image1Parent}>
          <img className={styles.image1} alt="" src="/image-1@2x.png" />
          <div className={styles.project1}>Project 3</div>
        </div>
        <div className={styles.rectangleGroup}>
          <img className={styles.frameItem} alt="" src="/rectangle-10@2x.png" />
          <div className={styles.project1}>Project 4</div>
        </div>
      </div>
      <div className={styles.projectsChild} />
      <div className={styles.seeMore} onClick={onSeeMoreTextClick}>
        See More
      </div>
    </div>
  );
};

Projects.propTypes = {
  className: PropTypes.string,
};

export default Projects;
