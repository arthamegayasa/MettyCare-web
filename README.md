# MettyCare — Landing Page

Landing page statis **bilingual (English / Indonesia)** untuk layanan home care & IV therapy **MettyCare** di **Bali** — menyasar **expat & wisatawan**. Layanan: dokter, perawat, ahli gizi, caregiver, farmasi, fisioterapi, dan IV therapy.

HTML + CSS + JavaScript murni — **tanpa build step**. Buka `index.html` di browser, atau deploy ke hosting statis mana pun (Vercel, Netlify, GitHub Pages, cPanel, dll).

## Struktur

```
MettyCare-web/
├── index.html          # Markup + konten default (Bahasa Indonesia)
├── css/styles.css       # Desain & layout
├── js/main.js           # Interaksi + kamus terjemahan ID/EN (i18n)
└── assets/
    ├── favicon.svg      # Ikon situs (logo)
    ├── hero-care.png    # Foto hero
    └── care-bp.png      # Foto section "Keunggulan"
```

## Cara melihat

- **Cepat:** klik dua kali `index.html`.
- **Disarankan** (path & font lebih rapi): jalankan server lokal lalu buka `http://localhost:8000`
  ```bash
  python -m http.server 8000
  ```

## Bilingual (EN / ID)

- Toggle **ID / EN** ada di pojok kanan header. Pilihan pengunjung diingat (localStorage).
- Default tampilan: **English** (sesuai target pasar expat/bule). Untuk ganti default ke Indonesia, buka `js/main.js`, ubah `initialLang = 'en'` jadi `'id'`.
- **Semua teks (EN + ID) ada di `js/main.js`** pada objek `I18N` — ini **sumber utama** konten. Untuk mengubah kata-kata, edit nilai pada key yang sama di kedua bahasa (`en` dan `id`). Teks di `index.html` hanya fallback statis sebelum JS jalan dan bisa berbeda; yang tampil di situs selalu dari `main.js`.

## Data yang sudah diisi

| Item | Nilai sekarang |
|---|---|
| WhatsApp | `+62 858-5784-6808` (link `wa.me/6285857846808`) |
| Telepon | `+62 858-5784-6808` |
| Area layanan | Seluruh Bali (Canggu, Seminyak, Ubud, Sanur, Denpasar) |
| Email | — (tidak ditampilkan) |

Untuk mengganti nomor WhatsApp/telepon: di `js/main.js` ubah `WA_NUMBER`, dan di `index.html` ubah link `tel:` serta teks nomor di section CTA & footer.

## Yang masih placeholder (ganti bila perlu)

- **Angka stats** (`500+`, `50+`, `24/7`, `4.9`) — di `index.html`.
- **Testimoni** (persona expat: Emma R./Canggu, James W./Sanur, Sophie L./Seminyak) — teks di `I18N` (`test.*`) pada `js/main.js`.
- **Link sosial** Instagram/Facebook (`href="#"`) — di footer `index.html`.
- **Foto** `hero-care.png` & `care-bp.png` — AI-generated; ganti dengan foto asli (rasio hero 4:5, section 3:2).

## Catatan

- Warna brand & font diatur di `:root` pada `css/styles.css`.
- Responsif penuh (mobile/tablet/desktop) + floating tombol WhatsApp.
