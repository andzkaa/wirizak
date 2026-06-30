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

## Gdzie wrzucić logotypy i zdjęcia

Wszystkie grafiki trzymamy w katalogu **`assets/`**. Wgraj tam pliki, a strona
sama je pokaże (nazwy plików muszą się zgadzać).

### Logotypy

| Co | Plik w `assets/` | Gdzie się pojawia | Uwagi |
|----|------------------|-------------------|-------|
| Logo **WIR&ZAK** | `logo-wirizak.svg` | dane strukturalne (SEO); gotowe pod nagłówek/stopkę | Najlepiej **SVG** lub **PNG z przezroczystym tłem**. Jasna wersja — tło strony jest ciemne. |
| Logo **Ampio** | `logo-ampio.svg` | hero, sekcja „Ampio", stopka | Najlepiej **SVG/PNG**. Wyświetlane na białym tle (badge). |

> Obecnie loga to wersje **odtworzone w SVG**. Aby użyć oryginałów: wgraj swój
> plik do `assets/` pod **tą samą nazwą** (np. nadpisz `logo-ampio.svg`), albo
> wgraj pod nową nazwą i podmień `src` w `index.html` (np. `assets/logo-ampio.png`).

Logo w nagłówku/stopce jest teraz **tekstowe** (`WIR&ZAK`). Jeśli chcesz tam
grafikę, w `index.html` zamień `<span class="nav__mark">…</span>` na
`<img src="assets/logo-wirizak.svg" alt="WIR&ZAK" style="height:40px">`.

### Zdjęcia osób (sekcja „Zespół")

Wgraj pliki do `assets/` pod nazwami:

| Osoba | Plik w `assets/` |
|-------|------------------|
| Grzegorz Wiraszka | `zespol-wiraszka.jpg` |
| Arkadiusz Zakrocki | `zespol-zakrocki.jpg` |

- Format: **JPG/PNG/WebP**. Zalecane **pionowe (portret)**, min. **800 × 1000 px**.
- Na telefonie zdjęcia są przycinane do proporcji **5:4 (pionowo)** i automatycznie
  **wyśrodkowane (center middle)** — kadr trzyma się środka, więc twarz najlepiej
  umieścić centralnie.
- Dopóki pliku nie ma, w miejscu zdjęcia widać inicjały (placeholder). Po wgraniu
  pliku o właściwej nazwie zdjęcie pojawia się automatycznie.

### Inne zdjęcia (np. realizacje, minikoparka)

Dodaj własne zdjęcia do `assets/` i wstaw je w `index.html`. Aby zdjęcie było
responsywne i wyśrodkowane, użyj klasy `person-photo` wewnątrz kontenera
z proporcjami, np.:

```html
<div class="member__photo">
  <img src="assets/realizacja-1.jpg" alt="Realizacja" class="person-photo">
</div>
```

## Kontakt firmy
- ☎ 501 666 990 · 575 860 310
- ✉ wirizak@gmail.com
- 📍 ul. Brylantowa 4, 70-895 Szczecin
