# Showcase – Design-Brief

Dieser Brief beschreibt, **was** gebaut wird: Inhalte, Aufbau, Verhalten.
**Wie** gebaut wird (Code-Stil, Struktur, Naming, SCSS-Regeln), steht in der `CLAUDE.md`. Bei Widersprüchen gilt immer die `CLAUDE.md`.

## Rangfolge der Quellen
1. `CLAUDE.md` – Konventionen, Struktur, Styles
2. Dieser Brief – Inhalte und Verhalten
3. `showcase-design/` – nur visuelle Vorlage

## Rolle von `showcase-design/`
Der HTML-Export dort ist **nur eine visuelle Vorlage, kein Code zum Übernehmen.**

- Nur nachschauen: Aussehen, Anordnung, Größenverhältnisse
- **Keinen Code kopieren**, auch keine einzelnen Blöcke oder Inline-Styles
- Der Export enthält Tags eines Design-Tools (`<x-dc>`, `<sc-if>`, `<sc-for>`, `<helmet>`), Platzhalter wie `{{time}}` und `class Component extends DCLogic`. Nichts davon gehört ins Projekt
- Der Export ist desktop-first und in `px`. Das Projekt ist mobile-first und in `rem` (siehe `CLAUDE.md`). Werte aus dem Export nie direkt übernehmen, sondern auf vorhandene Tokens in `_variables.scss` abbilden. Fehlt ein Token, im passenden Abschnitt von `_variables.scss` anlegen
- Schriften laut `CLAUDE.md`, nicht die Schriften aus dem Export
- Wiederkehrende Elemente werden Komponenten, Listen kommen aus Daten und werden mit `@for` gerendert

## Look in einem Satz
Editorial-Stil: große Serif-Headlines mit einzelnen kursiven Wörtern (`<em>`), dünne Linien statt Boxen, kleine Mono-Labels wie `(01)`. Farben nur Blau, Weiß und Schwarz. Bilder eckig, Buttons als Pills.

## Layout
- Inhaltsbreite über das Mixin `content-width`: breit, auf großen Laptops fast bis zum Rand, Seitenrand wächst mit der Bildschirmbreite
- Fließtext maximal ca. `65ch` breit
- Hero mindestens eine Bildschirmhöhe. About, Tools, Work, Contact ab Desktop über `full-screen`, Inhalt vertikal zentriert
- Mobil: alles untereinander, Sections so hoch wie der Inhalt (außer Contact)
- Router: `withInMemoryScrolling({ anchorScrolling: 'enabled' })`, Section-`id`s: `about`, `tools`, `work`, `contact`

## Startseite (Route `/`)

**Header** (`layout/header`)
- Logo „S.Straeter“, „Local time 16:56“ (Europe/Vienna, aktualisiert sich – Logik vorher besprechen)
- Navigation als Liste: About · Tools · Work · Contact
- Button „Download CV ↓“ ab Tablet, Link auf das CV-PDF
- Mobil: runder Menü-Button öffnet blaues Vollbild-Menü mit großen Serif-Links, CV-Button, E-Mail, GitHub, LinkedIn
- Später: Smart Header (beim Runterscrollen weg, beim Hochscrollen da, unterhalb des Heros weißer Hintergrund) – vorher besprechen

**Hero** (blau)
- `h1`: „Hi, I’m Stefan“ (zweizeilig)
- Darunter Linie, dann Lead „Frontend developer with a *designer’s eye.*“
- Text: „Angular and TypeScript. Currently open to junior positions.“
- Button „Explore my work“ (`anchor="work"`)
- Mono-Zeile mit Punkt: „Currently learning Python & Django“
- Porträtfoto: mobil unter der Überschrift im Hochformat, ab Desktop rechts über die volle Höhe

**(01) About** (weiß)
- `h2`: „From photographer *to developer.*“
- Text: „I spent [x] years behind the camera and in marketing – composing images, shaping campaigns and learning what makes people stop and look. In 2026 I completed the front-end certificate at Developer Akademie in Munich. Now I bring the same eye to code: clear structure, careful typography, nothing left to chance.“
- Infoliste mit Linien: Background – Photography, Marketing · Education – Developer Akademie, Munich · Front-end certificate 2026 · Based in – Tyrol, Austria · Currently – Learning Python & Django
- Button „Download CV (PDF) ↓“
- Fotostreifen: horizontal scrollbare Reihe eigener Fotos in gemischten Formaten, läuft rechts über den Rand. Label „(Off screen) Photographed by me“

**(02) Tools** (weiß, Linie oben)
- Zeilen: Kategorie (klein) und Liste (Serif)
  - Frontend: Angular, TypeScript, JavaScript (ES6+), SASS/SCSS, HTML5, REST APIs, Bootstrap
  - Backend: Firebase API, Supabase, Node.js
  - Design & Marketing: Figma, Adobe CC, *UI/UX design*
  - Tools: Git, GitHub, VS Code
- Mobil: Kategorie über der Liste, ab Desktop daneben

**(03) Selected work** (weiß, Linie oben)
- Projekte als Daten im Feature `projects` (Interface + Konstante unter `model/`)
  1. Chunky Pairs – Memory game for two players – [Tech]
  2. Opina – Create and evaluate polls – Angular, TypeScript, SCSS – hat Case Study
  3. Kanvera – [Short description] – [Tech]
  4. Neon City 2065 – [Short description] – [Tech]
- Pro Projekt: Nummer, Titel (Serif, groß), Kurzbeschreibung, Tech (Mono), Links „Live preview ↗“, „GitHub ↗“, optional „Case study →“ in Blau
- Mobil: Karte mit Screenshot oben
- Ab Desktop: Listenzeile ohne Bild. Beim Hovern rückt die Zeile leicht ein und ein Screenshot folgt dem Cursor (nur mit `hover-device`) – Logik vorher besprechen

**(04) Contact** (blau)
- `h2`: „Say *hello.*“
- E-Mail `mail@stefanstraeter.dev` als Button: Klick kopiert sie, Hinweis wechselt 2 Sekunden von „Click to copy“ zu „Copied to clipboard“ – Logik vorher besprechen
- Links: „Open mail app ↗“ (mailto), „Download CV (PDF) ↓“

**Footer** (`layout/footer`, blau, schließt an Contact an)
- „© 2026 Stefan Sträter“ · „Built with Angular · Lighthouse [score]“ · GitHub · LinkedIn · Links zu Impressum und Datenschutz
- Darunter riesiger Name „Stefan Sträter“ in Serif über die volle Breite, unten leicht angeschnitten, `aria-hidden="true"` (mobil zweizeilig)

## Weitere Seiten
- **Case Study** (Feature `projects`, z. B. Route `/work/opina`): blauer Kopf mit Titel, Einleitungssatz, Infozeile (Role, Stack, Timeline, Links), großer Screenshot, Abschnitte „The challenge“, „My approach“, zwei Detail-Screenshots, „What I *learned*“, unten blauer Block „Next project: Kanvera →“
- **404** (Route `**`): blau, riesiges „*Lost?*“, Text „This page doesn’t exist – or it moved somewhere else.“, Button „Back to the work →“
- **Impressum / Datenschutz**: wie in `CLAUDE.md` beschrieben, mit weißer Header-Variante

## Neue Komponenten (Ablage nach `CLAUDE.md`)
- `shared/components/`: `icon-button`, `text-link`, `section-header` (Nummer + Titel), `copy-email`
- `layout/`: `footer`, `mobile-menu`
- `features/home/components/`: `about`, `photo-strip`, `tools` (mit `tool-row`), `work` (mit `project-row`, `project-card`, `hover-preview`), `contact`

## Bewegung (dezent)
- Headlines gleiten beim Scrollen einmal von unten ein – Logik vorher besprechen
- Hover-Effekte kurz und weich, nur über `hover-device`
- Keine Intro-Animation, kein Custom-Cursor, keine Laufbänder

## Assets
- Porträt, eigene Fotos für den Streifen, Screenshots der Projekte, CV als PDF (`cv-stefan-straeter.pdf`)
- Alle Bilder mit sinnvollem `alt`, bedeutungsvolle Bilder in `figure`, Klickflächen mindestens 44px

## Offene Platzhalter
`[x] years` im About-Text · Kurzbeschreibungen und Tech von Kanvera und Neon City 2065 · Tech von Chunky Pairs · Case-Study-Texte · GitHub- und Live-Links · Lighthouse-Score erst nach Messung
