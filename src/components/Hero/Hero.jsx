import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Fluke</h1>
        <p className={styles.description}>
        Hello My name is Aphichat Rungruang or call me Fluke. i am a Unity Deverloper 
        I love games and Happy when everyone can play my game.I feel like haven't developed myself enough.
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
