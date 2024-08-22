import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProjectsPage.module.css";

const ProjectsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [title, setTitle] = useState("Select a Project");
  const [description,setDescription] = useState("We Provide several types of projects including e-commerce website, 3d products, CRUD softwares etc ...");

  // Background sources
  const backgrounds = [
    "/Atlas.png",
    "/3d_cards.mp4",
    "/Aurora.png",
    "/netmoon.png"
  ];

  const titles = [
    "e-commerce Website  : Atlas",
    "3D Website - Dragons",
    "Android/IOS Mobile App - Aora",
    "Desktop Software - NetMoon"
  ];

  const descriptions = [
    "This eCommerce website project is a comprehensive online platform <br/> designed to deliver a seamless and intuitive shopping experience. <br />Developed using the latest web technologies, it integrates a robust back-end system <br /> with an attractive and responsive front-end interface. The website features advanced <br /> search and filtering options, secure payment gateways, and a user-friendly checkout process.<br /> Tailored to meet the needs of modern consumers, this project emphasizes speed, <br /> security, and accessibility, ensuring that users can easily find and purchase products with confidence. <br />With a focus on scalability, the platform is designed to grow alongside the business,<br /> accommodating an expanding inventory and a growing customer base.",
    "Our project centers on the creation of an innovative website designed to showcase and interact with 3D products. This cutting-edge platform provides a dynamic and immersive experience by integrating advanced 3D rendering technology into the online shopping process. Users can explore products with high-definition, interactive 3D models that offer detailed views from any angle, providing a richer and more engaging shopping experience. The website features a sleek, user-friendly interface that supports intuitive navigation and interaction with 3D models, allowing customers to zoom in, rotate, and visualize products in a virtual space. Key components of the project include real-time 3D rendering, responsive design for compatibility across all devices, and integration of interactive features such as virtual try-ons and customizations. By utilizing state-of-the-art technology, this project aims to enhance product visualization, boost customer confidence, and create a memorable and engaging online shopping experience.",
    "Aora is a cutting-edge social media application designed to revolutionize how users connect and share experiences in the digital age. Available exclusively on iOS and Android, Aura combines sleek, intuitive design with powerful social features, enabling users to create dynamic profiles, share multimedia content, and engage in meaningful interactions. With its advanced privacy controls, customizable feeds, and real-time updates, Aura offers a fresh perspective on social networking, fostering authentic connections and vibrant communities. The app’s innovative features, such as interactive stories and personalized recommendations, make it not just a platform for socializing, but a hub for discovering and celebrating diverse interests and passions.",    
    "NetMoon is an innovative software solution designed to streamline and enhance the workflow of digital agencies. The platform integrates project management, client communication, and task automation into a unified interface, allowing teams to collaborate seamlessly across various departments. NetMoon's key features include real-time progress tracking, intuitive dashboards, and automated reporting, all of which are designed to boost productivity and ensure timely project delivery. By leveraging the latest technologies, NetMoon aims to empower agencies to manage their projects more efficiently, reduce operational overhead, and deliver exceptional results to their clients."
 ];

  const textRef = useRef(null);
  const backgroundRef = useRef(null);
  const videoRef = useRef(null); // Reference for video element
  const imagesRef = useRef(null);
  const navigate = useNavigate();
  
    const onHomeTextClick = useCallback(() => {
      navigate("/");
    }, [navigate]);
  
    const onAboutTextClick = useCallback(() => {
      navigate("/about");
    }, [navigate]);
  
    const onContactTextClick = useCallback(() => {
      navigate("/contact");
    }, [navigate]);

  const handleClick = (index) => {
    setCurrentIndex(index);
    setTitle(titles[index]);
    setDescription(descriptions[index]);

    // Animate background and title changes
    if (index === 1) {
      // If the background is a video
      gsap.to(videoRef.current, {
        opacity: 1,
        duration: 1,
        onComplete: () => {
          gsap.fromTo(
            textRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1 }
          );
        }
      });
    } else {
      // For static images
      gsap.to(backgroundRef.current, {
        duration: 1,
        backgroundImage: `url(${backgrounds[index]})`,
        backgroundSize : 'fill',
        backgroundPosition: 'right center',  // Centers the image within the element
        backgroundRepeat: 'no-repeat',
        onComplete: () => {
          gsap.fromTo(
            textRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1 }
          );
        }
      });
      gsap.fromTo(
        imagesRef.current.children,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, stagger: 0.3 }
      );
    }
  };

  useEffect(() => {
  }, []);

  return (
    <>
      <header className={styles.header}>
          <div className={styles.logo}>
            <img className={styles.logoChild} alt="" src="/rectangle-34@2x.png" />
          </div>
          <div className={styles.frame}>
            <div className={styles.navbar}>
              <div className={styles.home} onClick={onHomeTextClick}>
                Home
              </div>
              <div className={styles.aboutMe} onClick={onAboutTextClick}>About Me</div>
              <div className={styles.projects}>
                Projects
              </div>
              <div
                className={styles.contact}
                onClick={onContactTextClick}
              >{`Contact `}</div>
            </div>
          </div>
      </header>
      <div className={styles.projectsPage} ref={backgroundRef}>
        {currentIndex === 1 && (
          <video
            ref={videoRef}
            className={styles.backgroundVideo}
            autoPlay
            muted
            loop
            src={backgrounds[currentIndex]}
            style={{ opacity: 0 }}
          />
        )}
        <div className={styles.monkeyDLufy} ref={textRef}>
          {title}
        </div>
        <div className={styles.rectangleParent} ref={imagesRef}>
          <img
            className={styles.frameItem}
            alt=""
            src="/Atlas_products.png"
            onClick={() => handleClick(0)} // Example index
          />
          <img
            className={styles.frameItem}
            alt=""
            src="/Dragons.png"
            onClick={() => handleClick(1)} // Example index
          />
          <img
            className={styles.frameItem1}
            alt=""
            src="/App.png"
            onClick={() => handleClick(2)} // Example index
          />
          <img
            className={styles.frameItem2}
            alt=""
            src="/software.png"
            onClick={() => handleClick(3)} // Example index
          />
        </div>
        <div className={styles.loremIpsumDolorContainer}>
          <p className={styles.loremIpsumDolor}>
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
