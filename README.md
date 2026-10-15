# Fjord – motiv pro EdgeEver

Chladný modrošedý motiv s indigovým akcentem pro světlý i tmavý režim (web i desktop).

Jde o plugin, který obsahuje jen styly. `main.js` nic nedělá; EdgeEver vloží `styles.css`, když je plugin zapnutý, a odebere ho, když se vypne. Kód EdgeEveru se nemění, takže motiv přežije aktualizace z upstreamu.

## Proč plugin a ne theme package

Deklarativní theme package (`"type": "theme"`) mění jen pár tokenů napojených na vybrané Tailwind třídy. Panely pracovní plochy (`--workspace-*`), zelená značky (`--brand-green-*`) ani tmavé povrchy jím přebarvit nejdou. `styles.css` pluginu přepisuje přímo barevné CSS proměnné z `apps/web/src/styles/globals.css`, takže pokryje celou aplikaci.

Riziko: názvy těchto proměnných nejsou veřejné API. Kdyby je upstream přejmenoval, část aplikace se vrátí k výchozím barvám (nic se nerozbije). Po aktualizaci stačí zkontrolovat `:root` a `:root.dark` v `globals.css`.

## Úprava barev

1. Uprav hex hodnoty v `palette.mjs`.
2. Spusť `bun build.mjs`, který přegeneruje `styles.css`.
3. Zvyš `version` v `manifest.json`.

## Instalace

- Lokálně (demo): zkopíruj `manifest.json`, `main.js` a `styles.css` do `edgeever/apps/web/public/extensions/fjord/` a v Obchodě s pluginy nainstaluj `http://127.0.0.1:5173/extensions/fjord/manifest.json`.
- Trvale: veřejný GitHub repozitář s Release, jehož tag odpovídá verzi (`1.0.0`), a assety `manifest.json`, `main.js` a `styles.css`. V Obchodě s pluginy pak stačí zadat URL repozitáře. Instalace se synchronizuje s pracovním prostorem na webu i v desktopu.

iOS a Android pluginy nespouští, takže tam motiv neplatí.
