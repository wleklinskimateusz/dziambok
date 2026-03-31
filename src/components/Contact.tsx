import { site } from "../content/site";
import { Section } from "./Section";
import { ContactForm } from "./ContactForm";
import styles from "./Contact.module.css";

export function Contact() {
  const { contact } = site;
  const telHref = contact.phone.replace(/\s/g, "");

  return (
    <Section id="kontakt" title={contact.title}>
      <p className={styles.intro}>{contact.intro}</p>

      <div className={styles.columns}>
        <div className={styles.details}>
          <p className={styles.detailRow}>
            <span className={styles.label}>{contact.emailLabel}</span>
            <a className={styles.value} href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </p>
          <p className={styles.detailRow}>
            <span className={styles.label}>{contact.phoneLabel}</span>
            <a className={styles.value} href={`tel:${telHref}`}>
              {contact.phone}
            </a>
          </p>
          <p className={styles.detailRow}>
            <span className={styles.label}>{contact.areaLabel}</span>
            <span className={styles.valuePlain}>{contact.area}</span>
          </p>
        </div>

        <ContactForm contact={contact} />
      </div>
    </Section>
  );
}
