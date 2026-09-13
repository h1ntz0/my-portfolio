"use client";

import { useLang } from "@/components/lang-provider";

interface Focus {
  label: string;
  labelId: string;
  note: string;
  noteId: string;
}

const focus: Focus[] = [
  {
    label: "Web applications",
    labelId: "Aplikasi web",
    note: "Whole flows, not only the happy path",
    noteId: "Alur lengkap, bukan hanya happy path",
  },
  {
    label: "API behaviour",
    labelId: "Perilaku API",
    note: "Status codes, payload shape, what a bad request returns",
    noteId: "Status code, bentuk payload, respons untuk request yang salah",
  },
  {
    label: "Authentication flows",
    labelId: "Alur autentikasi",
    note: "Expired sessions, role boundaries, redirect loops",
    noteId: "Sesi kedaluwarsa, batas peran, pengalihan yang berputar",
  },
  {
    label: "Forms and validation",
    labelId: "Form dan validasi",
    note: "Empty, too long, wrong type, pasted",
    noteId: "Kosong, terlalu panjang, tipe salah, hasil tempel",
  },
  {
    label: "Responsive layout",
    labelId: "Tata letak responsif",
    note: "375px up to 1440px, and the seams in between",
    noteId: "Dari 375px sampai 1440px, termasuk titik sambungnya",
  },
  {
    label: "Database behaviour",
    labelId: "Perilaku database",
    note: "Mutations that leave rows inconsistent",
    noteId: "Mutasi data yang meninggalkan baris tidak konsisten",
  },
  {
    label: "Regression",
    labelId: "Regresi",
    note: "The feature next to the one that changed",
    noteId: "Fitur di sebelah bagian yang baru diubah",
  },
];

/**
 * Index section. A ruled two column list instead of a cloud of pills: the note
 * on each row says what the area actually means, which a tag cannot.
 */
export function WhatITest() {
  const { t, lang } = useLang();
  const isId = lang === "id";

  return (
    <div>
      <h2 className="h2">{t("what_title")}</h2>
      <p className="lead mt-4 max-w-2xl text-muted-foreground">{t("what_desc")}</p>

      <dl className="mt-10 border-t border-border">
        {focus.map((item) => (
          <div
            key={item.label}
            className="grid gap-1 border-b border-border py-4 sm:grid-cols-[1fr_1.5fr] sm:items-baseline sm:gap-8"
          >
            <dt className="h3">{isId ? item.labelId : item.label}</dt>
            <dd className="body-text text-muted-foreground">
              {isId ? item.noteId : item.note}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
