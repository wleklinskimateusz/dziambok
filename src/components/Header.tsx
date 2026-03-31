"use client";

import { useEffect, useId, useState } from "react";
import { site } from "../content/site";
import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <a href="#main" className={styles.skip}>
        Przejdź do treści
      </a>
      <div className={styles.bar}>
        <a href="#start" className={styles.brand}>
          {site.brand}
        </a>
        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Zamknij menu" : "Menu"}
        </button>
        <nav
          id={menuId}
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
          aria-label="Nawigacja główna"
        >
          <ul className={styles.list}>
            {site.nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={styles.link}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
