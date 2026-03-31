import { site } from "../content/site";
import { Section } from "./Section";
import styles from "./Offers.module.css";

export function Offers() {
  const { offers } = site;
  return (
    <Section id="oferta" title={offers.title}>
      <p className={styles.intro}>{offers.intro}</p>
      <ul className={styles.list}>
        {offers.items.map((item) => (
          <li key={item.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDesc}>{item.description}</p>
            <p className={styles.price}>{item.priceHint}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
