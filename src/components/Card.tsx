import Image from "next/image";
import styles from "./card.module.css";

export default function Card() {
  // lock card content (no props)
  return (
		<div className={styles.card}>
			<div className={styles.cardImage}>
			<Image
				src={"/img/cards/co-working-space.webp"}
				alt="event image"
				fill
				objectFit="cover"
			/>
			</div>
			<div className={styles.cardTitleHolder}>
			<h3 className={styles.cardTitle}>■ Co-Working Space</h3>
			<h4 className={styles.cardSubtitle}>Host unforgettable events with ease — flexible venues, expert support, and seamless planning, tailored to your vision.</h4>
			</div>
		</div>
  );
}
