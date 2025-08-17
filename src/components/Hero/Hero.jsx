import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Fluke</h1>
        <p className={styles.description}>
        Hello, my name is Aphichat Rungruang, or you can call me Fluke. I used to be 
        a Unity developer. I love games and enjoy when people play my games. Now, 
        I'm a Full Stack Developer and I'm working on developing myself in DevOps.
        </p>
        <a href="mailto:Aphichatrungruang@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
     
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
