import type { ReactNode } from "react";
import styles from "./Section.module.css";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, children, className }: Props) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      className={`${styles.section} ${className ?? ""}`}
      aria-labelledby={headingId}
    >
      <div className={styles.inner}>
        <h2 id={headingId} className={styles.title}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
