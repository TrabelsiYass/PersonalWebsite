import PropTypes from "prop-types";
import AboutMe from "./AboutMe";
import Achievements from "./Achievements";
import Footer from "./Footer";
import Hello from "./Hello";
import styles from "./MainWindow.module.css";
import Projects from "./Projects";

const MainWindow = ({ className = "" }) => {
  return (
    <button className={[styles.mainWindow, className].join(" ")}>
      
      <div className={styles.frame}>
        <Hello />
        <Projects />
        <Achievements />
        <AboutMe />
        <Footer />
      </div>
    </button>
  );
};

MainWindow.propTypes = {
  className: PropTypes.string,
};

export default MainWindow;
