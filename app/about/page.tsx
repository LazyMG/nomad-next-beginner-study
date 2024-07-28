import React from "react";

import styles from "../../styles/about.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const About = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>About Us</h1>
      <div>
        Welcome to the official explorer for The New York Times Best Seller list
        explorer. We hope you enjoy your stay!
      </div>
    </main>
  );
};

export default About;
