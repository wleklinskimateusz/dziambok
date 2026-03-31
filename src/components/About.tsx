import { site } from "../content/site";
import { Section } from "./Section";
import styles from "./About.module.css";

export function About() {
  const { about } = site;
  return (
    <Section id="o-mnie" title={about.title}>
      <div className={styles.prose}>
        {about.paragraphs.map((p, i) => (
          <p key={i} className={styles.p}>
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}
