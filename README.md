
# Github Actions Demo

Ukázkový projekt pro demonstraci CI/CD pomocí Github Actions.

## Popis projektu

Tento projekt obsahuje jednoduchou webovou aplikaci, která zobrazuje aktuální den v týdnu (v češtině) na základě dat ze souboru `data.json`. Součástí projektu je konfigurace pro automatizované testování a build pomocí nástrojů Jest a Webpack.

## Struktura projektu

- `src/app.js` – hlavní logika aplikace
- `src/app.test.js` – testy pro aplikaci
- `src/data.json` – data s názvy dnů v týdnu
- `public/index.html` – vstupní HTML soubor
- `public/bundle.js` – vygenerovaný JavaScript bundle

## Jak spustit projekt

1. **Instalace závislostí**
   
	Doporučený správce balíčků: [pnpm](https://pnpm.io/)
   
	Otevřete terminál v kořenové složce projektu a spusťte:
   
	```powershell
	pnpm install
	```

2. **Spuštění vývojového serveru**
   
	Pro automatický build při změnách:
   
	```powershell
	pnpm run dev
	```

	Výsledný bundle najdete v `public/bundle.js`. Otevřete `public/index.html` v prohlížeči.

3. **Build pro produkci**
   
	```powershell
	pnpm run build
	```

4. **Spuštění testů**
   
	```powershell
	pnpm test
	```

## CI/CD

Projekt je připraven pro integraci s Github Actions pro automatizované testování a build při každém pushi.
