import { site } from "../content/site";
import styles from "./Hero.module.css";

export function Hero() {
  const { hero } = site;
  return (
    <section id="start" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <p className={styles.kicker}>Korepetycje z angielskiego</p>
        <h1 id="hero-heading" className={styles.title}>
          {hero.title}
        </h1>
        <p className={styles.subtitle}>{hero.subtitle}</p>
        <div className={styles.actions}>
          <a className={styles.btnPrimary} href="#kontakt">
            {hero.ctaPrimary}
          </a>
          <a className={styles.btnSecondary} href="#oferta">
            {hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
