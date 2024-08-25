import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';
import styles from './Desktop1.module.css';

function Desktop1() {

  const navigate = useNavigate;

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProjectsTextClick = useCallback(() => {
    navigate("/Projects");
  }, [navigate]);

  const onContactTextClick = useCallback( () => {
    navigate("/contact");
  },[navigate]);

  return (
    <div className='aboutme'>
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
        <div className='margin' />
      <AboutMe></AboutMe>
      <Hero/>
    </div>
  )
}

export default Desktop1
