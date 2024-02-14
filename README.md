## Introduzione
DQM_Bestiary è una web app sviluppata per fornire agli utenti un database completo e intuitivo dei mostri presenti nelprimo capitolo della serie di videogiochi Dragon Quest Monsters. L'applicazione offre agli utenti la possibilità di esplorare una vasta gamma di creature, visualizzarne dettagli e statistiche e possibili abbinamenti che offre la meccanica di Breeding.
Il progetto nasce sia come interesse personale verso il brand, ma anche come progetto facoltativo per il corso "Applicazioni Web: Progettazione e Sviluppo",UniMiB anno 2023/2024.

## Tecnologie Utilizzate
DQM_Bestiary è stata sviluppata utilizzando le seguenti tecnologie principali:

### Vite.js
Vite.js è stato scelto come bundler per la web app. Le sue caratteristiche di build veloce e reattiva hanno permesso uno sviluppo agile e un'esperienza di sviluppo efficiente. Vite.js ha semplificato il processo di sviluppo grazie alla sua configurazione minimale.

### React
React è stato utilizzato come framework di frontend per la realizzazione dell'interfaccia utente di DQM_Bestiary. Le sue prestazioni ottimizzate e la sua struttura modulare hanno reso più agevole la gestione dei componenti dell'applicazione. Inoltre, il modello di programmazione dichiarativo di React ha semplificato la gestione dello stato dell'applicazione, garantendo una maggiore manutenibilità del codice.

### Netlify
Netlify è stata la piattaforma scelta per l'hosting della web app DQM_Bestiary. Le sue funzionalità di deployment automatico, integrazione continua e gestione semplificata delle risorse hanno reso il processo di deployment rapido e privo di complicazioni. Inoltre, Netlify offre un'ampia gamma di strumenti per il monitoraggio delle prestazioni e la gestione del traffico.

### DQMonstersDB
L'API [DQMonstersDB](https://github.com/cmsato09/DQMonstersDB-API) fornisce un prezioso punto di accesso alle informazioni riguardanti il gioco Dragon Quest Monsters -- Terry's Wonderland (noto anche come Dragon Warrior Monsters negli Stati Uniti), un spin-off della celebre serie JRPG Dragon Quest. Unica API attualmente disponibile, è risultata completa e di facile utilizzo con la sua ottima documentazione. Per quanto l'api abbia già un'interfaccia in frontend, essa risulta minimale, soprattutto nell'utilizzo di immagini, che invece sono in questa web app hostate su github in HD dagli artbook ufficiali di Akira Toriyama.

## Vantaggi nel Progetto
L'uso di Vite.js, React e Netlify ha portato diversi vantaggi significativi nel progetto DQM_Bestiary:

1. **Velocità di Sviluppo**: Vite.js ha consentito un'esperienza di sviluppo rapida grazie alla sua build veloce e reattiva, consentendomi di concentrarsi sulle funzionalità dell'applicazione anziché sulla configurazione del bundler.

2. **Interfaccia Utente Reattiva**: React ha semplificato la gestione dell'interfaccia utente, consentendo la creazione di componenti modulari e riutilizzabili. Ciò ha reso più agevole la creazione di una UI dinamica e intuitiva per gli utenti.

3. **Deployment Semplificato**: Netlify ha reso il processo di deployment dell'applicazione rapido e privo di complicazioni grazie alle sue funzionalità di deployment automatico e integrazione continua. Questo mi ha permesso di concentrarmi sullo sviluppo dell'applicazione piuttosto che sulla gestione dell'infrastruttura di hosting.

4. **Prestazioni Ottimizzate**: L'utilizzo di Vite.js e React ha contribuito a garantire prestazioni ottimizzate dell'applicazione, garantendo una navigazione fluida e responsiva per gli utenti finali.

5. **Scalabilità e Manutenibilità**: La combinazione di React e Vite.js ha reso l'applicazione altamente scalabile e facilmente mantenibile, consentendo l'aggiunta di nuove funzionalità e la gestione dell'evoluzione del progetto nel tempo.
   
## Visita la Web App

Si può accedere alla web app DQM_Bestiary e esplorare il database dei mostri di Dragon Quest Monsters al seguente link: [Dragon Quest Monster Bestiary](https://dragonquestmonsterbestiary.netlify.app)

## Montaggio del Progetto in Locale

Per montare il progetto DQM_Bestiary sulla propria macchina locale, è necessario seguire i seguenti passaggi:

1. **Clonare il Repository da GitHub**: Utilizzando Git, eseguire il comando `git clone` seguito dall'URL del repository GitHub di DQM_Bestiary:

   ```bash
   git clone https://github.com/FuutsuFIX/DQM_Bestiary.git
   ```

2. **Installare le Dipendenze**: Una volta clonato il repository, spostarsi nella directory del progetto e eseguire il comando per installare le dipendenze del progetto utilizzando npm o yarn:

   ```bash
   cd DQM_Bestiary
   npm install
   # oppure
   yarn install
   ```

3. **Avviare il Server di Sviluppo**: Dopo aver installato le dipendenze, è possibile avviare il server di sviluppo locale utilizzando il comando specifico di Vite.js:

   ```bash
   npm run dev
   # oppure
   yarn dev
   ```

   Questo avvierà il server locale e compilerà automaticamente il codice quando vengono apportate modifiche.

4. **Visualizzare l'Applicazione nel Browser**: Una volta che il server locale è attivo, è possibile visualizzare l'applicazione nel browser aprendo l' URL che apparirà nel terminale. Esempio:

   ```
   http://localhost:3000
   ```

   L'applicazione DQM_Bestiary sarà quindi accessibile e interattiva sulla propria macchina locale.

