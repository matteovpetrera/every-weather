# EveryWeather

EveryWeather è un'applicazione web che ti consente di visualizzare le previsioni meteo di una città specifica utilizzando le API fornite da OpenWeather.

## Caratteristiche

- **Visualizzazione Meteo:** Puoi cercare una città e visualizzare le previsioni meteo attuali e future per quella località.
- **Dettagli Meteo:** Oltre alla temperatura attuale, EveryWeather fornisce dettagli come la sensazione termica, l'umidità, la velocità del vento e altro ancora.
- **Ricerca per Località:** Basta inserire il nome della città desiderata e EveryWeather fornirà le previsioni meteo per quella località.
- **Dashboard Moderna:** L'applicazione è utilizza componenti forniti da ui.shadcn.com rendendo l'interfaccia grafica moderna e attuale.

## Tecnologie Utilizzate

- **Next.js 14:** Framework JavaScript per lo sviluppo di applicazioni web, basato su React. Offre rendering del lato server e supporto per React Hooks, tra le altre caratteristiche.
- **OpenWeather API:** Fornisce dati meteorologici in tempo reale e previsioni per città specifiche.
- **Tailwind CSS:** Un framework CSS utilizzato per la progettazione di interfacce utente moderne e reattive.
- **Shadcn UI:** Una libreria per componenti react utilizzata per migliorare l'aspetto visivo dell'applicazione.

## Installazione

1. Clona questo repository sul tuo computer.
2. Assicurati di avere Node.js installato.
3. Esegui `npm install` per installare le dipendenze.
4. Crea un file `.env.local` nella radice del progetto e aggiungi la tua chiave API OpenWeather come `NEXT_PUBLIC_OPENWEATHER_API_KEY=<chiave_api>`.

## Utilizzo

1. Avvia l'applicazione eseguendo `npm run dev` nella tua console.
2. Apri il tuo browser e vai a `http://localhost:3000`.
3. Nella barra di ricerca, inserisci il nome della città di cui desideri visualizzare il meteo e premi Invio.
4. Visualizza le previsioni meteo per la città selezionata.

## Contributi

Se vuoi contribuire a EveryWeather, segui questi passaggi:

1. Forka questo repository.
2. Crea un branch con la tua feature: `git checkout -b feature/NuovaFeature`.
3. Committa le tue modifiche: `git commit -m 'Aggiungi NuovaFeature'`.
4. Pusha il tuo branch: `git push origin feature/NuovaFeature`.
5. Apri una Pull Request.

## Crediti

EveryWeather è stato creato da Matteo Petrera. Questo progetto utilizza dati forniti da OpenWeather.
