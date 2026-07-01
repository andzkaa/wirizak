# WIR&ZAK Sp. z o.o. — Landing page

Nowoczesna, jednoplikowa strona typu *landing page* dla szczecińskiej firmy
elektrycznej **WIR&ZAK Sp. z o.o.**, zaimplementowana na podstawie makiety
wykonanej w Claude Design.

## Zakres
- **Instalacje elektryczne** (domy, obiekty komercyjne, hale przemysłowe)
- **Fotowoltaika**
- **Automatyka budynkowa / smart home** — autoryzowany instalator **Ampio**
- **Usługi minikoparką** (roboty ziemne)

## Stack
Czysty HTML + CSS (bez frameworków i bez kroku budowania).

| Plik | Opis |
|------|------|
| `index.html` | Struktura strony |
| `styles.css` | Style, ciemny motyw z akcentem elektryki/automatyki, pełen RWD |
| `assets/wirzak-logo-white.png` | Logo WIR&ZAK (biała wersja — nagłówek, stopka) |
| `assets/wirzak-logo-black.png` | Logo WIR&ZAK (czarna wersja — sekcja „O firmie") |
| `assets/ampio-logo.webp` | Logo partnera Ampio |
| `assets/minikoparka.jpg` | Zdjęcie do sekcji „Usługi minikoparką" |

## Uruchomienie
Otwórz `index.html` w przeglądarce lub uruchom prosty serwer:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Cechy
- W pełni responsywna (desktop / tablet / mobile), oparta o `clamp()` i siatki `auto-fit`
- Dane firmy (KRS, NIP, REGON, PKD, adres, status) w stopce
- Sekcja kontaktowa z klikalnymi numerami telefonów i adresem e-mail
- Zdjęcia zespołu na telefonie przełączają się na proporcje **5:4**, wyśrodkowane

## Zdjęcia zespołu (sekcja „O firmie")

Sekcja zespołu (Grzegorz Wiraszka, Arkadiusz Zakrocki) obecnie pokazuje
placeholdery — nie mieliśmy jeszcze właściwych zdjęć. Żeby je dodać:

1. Wgraj zdjęcia do `assets/` (np. `zespol-wiraszka.jpg`, `zespol-zakrocki.jpg`).
2. W `index.html` w sekcji `#firma` zamień blok `<div class="wz-team-photo-placeholder">…</div>`
   na `<img src="assets/zespol-wiraszka.jpg" alt="Grzegorz Wiraszka">` (analogicznie dla drugiej osoby).
3. Zalecane zdjęcia **pionowe (portret)**, min. 800×1000 px, twarz wykadrowana centralnie —
   `.wz-team-photo` przycina do 4:5 na desktopie i 5:4 na telefonie z `object-position: center`.

## Kontakt firmy
- ☎ 501 666 990 · 575 860 310
- ✉ wirizak@gmail.com
- 📍 ul. Brylantowa 4, 70-895 Szczecin
