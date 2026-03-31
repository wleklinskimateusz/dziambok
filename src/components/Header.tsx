"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { site } from "../content/site";
import styles from "./Header.module.css";

function NavLinks({
  listClassName,
  linkClassName,
  onNavigate,
}: {
  listClassName?: string;
  linkClassName?: string;
  onNavigate?: () => void;
}) {
  return (
    <ul className={listClassName}>
      {site.nav.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className={linkClassName}
            onClick={onNavigate}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const mobileOverlay =
    mounted &&
    open &&
    createPortal(
      <nav
        id={menuId}
        className={styles.mobilePanel}
        role="dialog"
        aria-modal="true"
        aria-label="Nawigacja główna"
      >
        <NavLinks
          listClassName={styles.mobileList}
          linkClassName={styles.mobileLink}
          onNavigate={() => setOpen(false)}
        />
      </nav>,
      document.body,
    );

  return (
    <>
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
            aria-controls={open ? menuId : undefined}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Zamknij menu" : "Menu"}
          </button>
          <nav className={styles.navDesktop} aria-label="Nawigacja główna">
            <NavLinks listClassName={styles.list} linkClassName={styles.link} />
          </nav>
        </div>
      </header>
      {mobileOverlay}
    </>
  );
}
