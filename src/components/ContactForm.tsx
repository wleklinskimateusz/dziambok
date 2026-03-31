"use client";

import { type FormEvent, useState } from "react";
import { site } from "../content/site";
import styles from "./Contact.module.css";

type ContactContent = (typeof site)["contact"];

export function ContactForm({ contact }: { contact: ContactContent }) {
  const [sentHint, setSentHint] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const subject = encodeURIComponent("Zapytanie o lekcje angielskiego");
    const body = encodeURIComponent(
      `Imię: ${name}\nE-mail zwrotny: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSentHint(true);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <p className={styles.formNote}>{contact.formNote}</p>
      <label className={styles.field}>
        <span className={styles.fieldLabel}>{contact.formName}</span>
        <input
          className={styles.input}
          name="name"
          type="text"
          autoComplete="name"
          required
        />
      </label>
      <label className={styles.field}>
        <span className={styles.fieldLabel}>{contact.formEmail}</span>
        <input
          className={styles.input}
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </label>
      <label className={styles.field}>
        <span className={styles.fieldLabel}>{contact.formMessage}</span>
        <textarea
          className={styles.textarea}
          name="message"
          rows={5}
          required
        />
      </label>
      <button type="submit" className={styles.submit}>
        {contact.formSubmit}
      </button>
      {sentHint ? (
        <p className={styles.hint} role="status">
          Jeśli poczta się nie otworzyła, użyj adresu e-mail obok.
        </p>
      ) : null}
    </form>
  );
}
