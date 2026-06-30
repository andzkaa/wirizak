# WIR&ZAK Sp. z o.o. — Landing page

Nowoczesna, jednoplikowa strona typu *landing page* dla szczecińskiej firmy
elektrycznej **WIR&ZAK Sp. z o.o.**

## Zakres
- **Instalacje elektryczne** (domy, obiekty komercyjne, hale przemysłowe)
- **Fotowoltaika**
- **Automatyka budynkowa / smart home** — autoryzowany instalator **Ampio**
- **Usługi minikoparką** (roboty ziemne)

## Stack
Czysty HTML + CSS + JavaScript (bez frameworków i bez kroku budowania).

| Plik | Opis |
|------|------|
| `index.html` | Struktura strony + dane strukturalne (Schema.org / JSON-LD) |
| `styles.css` | Style, ciemny „techniczny" motyw, pełen RWD |
| `script.js` | Nawigacja mobilna, animacje reveal, animowane tło „obwodu", formularz |
| `assets/logo-wirizak.svg` | Logo WIR&ZAK (SVG) |
| `assets/logo-ampio.svg` | Logo partnera Ampio (SVG) |

## Uruchomienie
Otwórz `index.html` w przeglądarce lub uruchom prosty serwer:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Cechy
- W pełni responsywna (desktop / tablet / mobile)
- Dane firmy (KRS, NIP, REGON, adres) w sekcji „O firmie" oraz w stopce
- Sekcja kontaktowa z klikalnymi numerami telefonów i formularzem (mailto)
- Dane strukturalne dla SEO (typ `Electrician`)
- Obsługa `prefers-reduced-motion`

## Kontakt firmy
- ☎ 501 666 990 · 575 860 310
- ✉ wirizak@gmail.com
- 📍 ul. Brylantowa 4, 70-895 Szczecin
