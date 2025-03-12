import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner(){
  return (
    <div className={styles.banner}>
      <Image
        src={"/img/concert-banner.webp"}
        alt="event hero background"
        fill
        objectFit="cover"
        priority
        className={styles.bannerBackground}
      />
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>where every event
        finds its venue</h1>
        <h2 className={styles.subtitle}>■ Discover the perfect space for every occasion — simple, fast, and tailored to your needs.</h2>
      </div>
    </div>
  );
}
