import Image from "next/image";
import React from "react";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={"/images/IMG.jpg"}
          alt={"profile photo of me"}
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I am Fehmi</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React
      </p>
    </section>
  );
};

export default Hero;
