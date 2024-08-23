import PropTypes from "prop-types";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Projects.module.css";

const Projects = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSeeMoreTextClick = useCallback(() => {
    navigate("/projects");
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
        <a href="slider_1/index.html" target="_blank" rel="noopener noreferrer">
          <img className={styles.frameItem} alt="" src="/Rotate.png" /></a>
          <div className={styles.project1}>Animated Rotation</div>
        </div>
        <div className={styles.rectangleGroup}>
        <a href="scroll_animation/index.html" target="_blank" rel="noopener noreferrer">
          <img className={styles.frameItem} alt="" src="/Scroll.png" />
        </a>
          <div className={styles.project1}>Animated Scroll</div>
        </div>
        <div className={styles.image1Parent}>
        <a href="canvas/index.html" target="_blank" rel="noopener noreferrer">
          <img className={styles.image1} alt="" src="/Spiderman.png" />
        </a>
          <div className={styles.project1}>Spiderman Website</div>
        </div>
        <div className={styles.rectangleGroup}>
        <a href="3d Rotate CSS Only/index.html" target="_blank" rel="noopener noreferrer">
          <img className={styles.frameItem} alt="" src="/3d.png" />
        </a>
          <div className={styles.project1}>3d Production</div>
        </div>
        <div className={styles.rectangleGroup}>
        <a href="product_has_many_price/index.html" target="_blank" rel="noopener noreferrer">
          <img className={styles.frameItem} alt="" src="/Product.png" />
          </a>
          <div className={styles.project1}>Product Detail</div>
        </div>
        <div className={styles.rectangleGroup}>
        <a href="slider_3d/index.html" target="_blank" rel="noopener noreferrer">
          <img className={styles.frameItem} alt="" src="/Dragons.png" />
        </a>
          <div className={styles.project1}>3d Rotated</div>
        </div>
        <div className={styles.rectangleGroup}>
          <img className={styles.frameItem} alt="" src="/App.png" />
          <div className={styles.project1}>Social IOS App</div>
        </div>
        <div className={styles.rectangleGroup}>
          <img className={styles.frameItem} alt="" src="/Atlas_products.png" />
          <div className={styles.project1}>e-commerce Website</div>
        </div>
        <div className={styles.rectangleGroup}>
          <img className={styles.frameItem} alt="" src="/soft (3).png" />
          <div className={styles.project1}>Network Monitoring Software</div>
        </div>
        <div className={styles.rectangleGroup}>
          <img className={styles.frameItem} alt="" src="/software.png" />
          <div className={styles.project1}>CRUD Software</div>
        </div>
        <div className={styles.rectangleGroup}>
          <img className={styles.frameItem} alt="" src="/static.png" />
          <div className={styles.project1}>Statistics Software</div>
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
