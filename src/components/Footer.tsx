import { site } from "../content/site";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {year} {site.brand}. {site.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
