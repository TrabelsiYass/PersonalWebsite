import PropTypes from "prop-types";
import styles from "./Achievements.module.css";
import Web from "./Web";

const Achievements = ({ className = "" }) => {
  return (
    <div className={[styles.achievements, className].join(" ")}>
      <div className={styles.achievementsInner}>
        <div className={styles.ourAchievementsParent}>
          <div className={styles.ourAchievements}>our Achievements</div>
          <div className={styles.achievementsUnlocked}>
            Achievements Unlocked
          </div>
          <img className={styles.frameChild} alt="" src="/line-11.svg" />
        </div>
      </div>
      <div className={styles.webParent}>
        <Web group="/group.svg" completedWeb="25 Completed Web" />
        <div className={styles.mobile}>
          <div className={styles.mobileChild} />
          <div className={styles.mobileItem} />
          <div className={styles.mobileInner} />
          <div className={styles.ellipseDiv} />
          <img className={styles.groupIcon} alt="" src="/group1.svg" />
          <div className={styles.completedMobileProjectsContainer}>
            <p className={styles.completedMobile}>10 Completed Mobile</p>
            <p className={styles.projects}> Projects</p>
          </div>
        </div>
        <Web
          propHeight="273px"
          group="/group2.svg"
          propRight="42.54%"
          propLeft="40.3%"
          completedWeb="16 Completed Software "
        />
        <div className={styles.clients}>
          <div className={styles.clientsChild} />
          <div className={styles.clientsItem} />
          <img
            className={styles.lineMdaccountIcon}
            alt=""
            src="/linemdaccount.svg"
          />
          <div className={styles.delightedClients}>51 Delighted Clients</div>
        </div>
        <div className={styles.persClients}>
          <div className={styles.persClientsChild} />
          <div className={styles.persClientsInner} />
          <img
            className={styles.lineMdaccountAddIcon}
            alt=""
            src="/linemdaccountadd.svg"
          />
          <div className={styles.perspectiveClients}>
            27 Perspective Clients
          </div>
        </div>
      </div>
    </div>
  );
};

Achievements.propTypes = {
  className: PropTypes.string,
};

export default Achievements;
