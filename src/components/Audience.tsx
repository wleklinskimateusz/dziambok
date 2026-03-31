import { site } from "../content/site";
import { Section } from "./Section";
import styles from "./Audience.module.css";

export function Audience() {
  const { audience } = site;
  return (
    <Section id="dla-kogo" title={audience.title}>
      <p className={styles.intro}>{audience.intro}</p>
      <ul className={styles.grid}>
        {audience.cards.map((card) => (
          <li key={card.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardText}>{card.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
