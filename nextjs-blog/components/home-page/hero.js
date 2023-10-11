import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.image}>
          <Image
            src="/images/site/coding-event.jpg"
            alt="An image Showing HeungMin Son"
            width={300}
            height={300}
          />
        </div>
        <h1> Hi, Im Son</h1>
        <p> I`m world class football player</p>
      </section>
    </>
  );
}

export default Hero;
