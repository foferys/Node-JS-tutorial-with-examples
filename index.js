/* 
globali:

- __dirname: percorso della cartella corrente
- __filename: nome del file
- require: funzione per usare i moduli
- module: info sul modulo corrente
- process: info relative all'ambiente di esecuzione
*/

console.log("prova: ", __dirname); 

/* MODULI: codici incapsulati in altri file ------------*/
    /* sono altri file js e possono essere interni, built-in, esterni.
    -potremmo farci dei moduli interni perché quando abbiamo un codice lungo, dividiamo le cose in 2
    sottofile, uno per es per i nomi e uno per le funzioni (nomi.js - util.js), che poi esportiamo con module.export
    e poi nel file principale facciao una costante e con require() prendiamo il percorso del file in cui è inserita la funzione; 
    per esportare piu elementi li metto in un array(vedi nomi.js) */
    //es:
    
    /* const saluta = require('./utils')
    saluta("gianpiero")
    
    const nomi = require('./nomi')
    saluta(nomi.persona)
    saluta(nomi.persona1)
    saluta(nomi.persona2) */
    
    //console.log(nomi) 
    
/*--------*/

/* ---MODULI built-in------------- */

    /* importazione del modulo os - sistema operativo*/
    const os = require('os');

    //åconsole.log(os.userInfo())
    //console.log(os.uptime()) //minuti da cui è accesso
    //console.log(os.arch()) //architettura del sistema operativo

    /* const prv = {
        nome: os.type(),
        release: os.release(),
        memoria: os.totalmem(),
        memdisp: os.freemem()
    }
    console.log(prv) */
/* ---------------------------- */

/* --MODULO PATH------ */
    const path = require('path');

    //console.log(path.sep) //mostra il tipo di separatore che abbiamo su questo SO - 
    //console.log(path.sep) 

    //join -> CREARE un percorso da parti separate
    const percorsoFile = path.join('/cartella','sottocartella', 'prova.txt')
    //console.log(percorsoFile) 

    //basename -> nome del file e basta, se vogliamo trovare il nome di un file dal percorso    
    //console.log(path.basename(percorsoFile)) 

    //resolve -> percorso assoluto con __dirname (__dirname è la cartlla del progetto)
    const percorsoAssoluto = path.resolve(__dirname,'/cartella','sottocartella', 'prova.txt' )
    //console.log(path.basename(percorsoAssoluto)) 
/* ------------- */


/* ---MODULO FS (FILE SYSTEM)---modo sincrono e async------- */


    /* MODO SINCRONO ----- */
        //creamo due costanti che contengono quello che c'è dentro require('fs')
        /* const {readFileSync, writeFileSync} = require('fs')  */

        /* const saluto = readFileSync('./cartella/saluto.txt', 'utf-8')
        const ciao = readFileSync('./cartella/ciao.txt', 'utf-8') */

        //console.log(ciao) 

        // --|  Leggere i file, scrivere in file (override e append con {flag:a}), creare un file:
        /* writeFileSync('./cartella/saluto.txt', "bella") //-> scovrascrivere su un file */

        // - appendere su un file:
        /* writeFileSync('./cartella/saluto.txt', ' stocazzz', {flag:'a'}) //-> la 'a' sta per appendere */
        
        // - scrivere in un file che non esiste:
        /* writeFileSync('./cartella/filebella.txt', ' creazione del file con testo')  */
    /* ---------------- */

    /* MODO ASINCRONO ---> codice non bloccante che fa le cose senza aspettare che gli altri processi finiscano*/
        /* console.log("comincio")
        const {readFile, writeFile} = require('fs') 
        
        readFile('./cartella/saluto.txt', 'utf8', (error, result) => { //--> funzione di callback quando ha finito di leggere, se non lo trova da errore altrimenti da il risultato
            if(error) {
                console.log("Nessuna risposta, hai un errore.");
                return;
            }
            const provaRes = result;
            readFile('./cartella/ciao.txt', 'utf8', (error, result) => {
                if(error) {
                    console.log("Nessuna risposta, hai un errore.", error);
                    return;
                }
                const ciao = result;
                writeFile('./cartella/filebella.txt', "aggiunta asincrona", (error, result) => {
                    if(error) {
                        console.log("Nessuna risposta, hai un errore.", error);
                        return;
                    }
                    console.log("comincio")

                })
            })
        }) 
        console.log("passo al prossimo compito") */
        /* se guardiamo nel terminale avviando il file index vediamo che il console.log fuori dal blocco viene stampato prima della 
        fine, questo perché viene caricato subito e non aspetta gli atri task */

    /* -------------------- */
/* ------------ */


/* ----MODULO HTTP (introduzione) -----------*/

    /* quessto modulo serve per creare dei webServer, che può gestire delle richieste(es. server google) 
        e manda ciò che viene chiesto 
        - importare http
        - creare un server con risposta default
        - metter server in ascolto
        - gestire richiesta con routing e errore - navigazione tra pagine
    */

    /* 
    const http = require('http');
    const server = http.createServer((req, res) => {   //-> (reqEST - resPONSE)
        //res.write("Benvenuto sul nostro sito");
        //res.end();
        if(req.url === "/"){
            res.end(`<div>benvenuto sul sito <br> <a href="./gian">Gianpiero</a> </div>`);
        }
        else if(req.url === "/gian"){
            res.end(`<div>sei sulla pagina di Gian <br> torna alla <a href="/">Home</a></div>`);
        }else {
            res.end(`<h1>Errore: la pagina che stai cercando non esiste.</h1>
                        <p>torna alla
                            <a href="/">Home</a>
                        </p>
                    </h1>`) ;
        }
    })

    //per far si che funzioni bisogna creare un server in ascolto su una porta:
    server.listen(3000); //col server aperto per chiuderlo devo fare ctl+c nel terminale  */

/*----------------------------------*/


/* -- NPM (node package manager)----- */

    /* implementare pacchetti codice e frameworks di altri e  risparmiarci tempo  - ci sono 3mln di pacchetti
    quando installiamo un pacchetto, instaliamo una cartella nel nostro progetto 
    è importante evitare pacchetti inutili o dannosi -> verificare il numero di download per vedere
    se va bene o no; a meno che non sia un pacchetto molto specifico*/


    
    /*  comandi:
        nel terminale:
        - npm;
        - npm --version / npm -v;
        - npm i / npm install nome pacchetto (installazione solo in locale sulla cartella del progetto)
        - npm install -g nome_pacchetto (sudo al posto di npm su mac) - (installazione globale che automanticamente lo include su tutti i progetti)
        - npm uninstall
    */


/* ———————————————————————————————— */



/*———— FILE package.json ———————————*/ 

    /* contine tutte le informazioni utili, le dipendenze ecc; file che contiene tutte le info importanti
    - npm init;
    - npm init -y; per crearne uno di default e poi eventualmente modificarlo a mano

    --| Installazione di una dipendenza:
    es. -> npm i lodash |->  installa il pacchetto e inserisce le dipendenze anche nel file package json - installa node-modules con tutti i file di lodash
    */
    /* const _ = require('lodash'); */

/*     const oggetti = [1,[2, [3, [4]]]]; //-> array bidimensionale -> array con dentro altri array
    const oggetti2 = _.flatMapDeep(oggetti);
    console.log(oggetti2) //-> da array multidimensionale a un array flat con lodash. */

    //per installare bootstrap -> npm i bootstrap --- ecc.  
    /* per disinstallare posso fare npm uninstall nomePacchetto

    /***——quando si lavora con altri e si riceve il progetto, o lo si scarica da github, non si ha la cartella node_modules, però si ha
    il package.json che contiene i riferimenti e facendo nel terminale npm install automaticamente va a vedere le dipendenze e installa tutto 
    
    --| package-lock.json 
    definisce in modo specifico la versione installata nella nostra applicazione:
    facendo riferimento al pacchetto bootstrap, nel file package.json abbiamo come riferimento "bootstrap": "^5.3.3" -> dove ^ indica 
    che è dalla verisone 5.3.3 e superiore, ma se vogliamo saperlo in modo specifico dobbiamo vedere in package-lock.json
    - versioni : 5.3.3 -> primo numero major changes, poi minor changes e poi le patch |\ quando si fa un major change rispetto alla versione che abbiamo
    attualmento, a volte non conviene fare l'aggiornamento all'ultima perché poi il progetto potrebbe non funzionare correttamente
    */

/* –————————————————————————*/

/* ——— NODEMON - pacchetto */
    /* è un pacchetto che serve per risolvere il problema di dover fare ogni volta node index.js per vedere cosa mostrava il codice o
    per visualizzare un console.log ecc, è un pacchetto che resta sempre in ascolto, tipo liveserver, e ogni volta che salviamo aggiorna automaticamente 
    
    --| installazione:
    - 1 npm install nodemon -D || npm install nodemon --save-dev --> mettiamo -D o --save-dev per salvarlo come dash dependency
    - 2 in package.json inseriamo lo script che deve fatto per avviare il servizio -> "start": "nodemon index.js" -> questo farà si 
    che per avviarlo si dovrà fare npm start.

    ** le devDependencies, a differenza delle dependencies che sono importante per il funzionamento dell'app sono pacchetti che
    utilizziamo in fase di sviluppo ma non è necessario che gli altri lo utilizzino e che siano in produzione.*/

    //console.log("\"server\" avviato");

/* —————————————————————————*/


/* ——————| EVENT LOOP /single thread / async / non-bloking code |————————— */
    // event queue -> coda degli eventi
    // call stack -> posto in cui si tiene traccia di tutte le call back

    /* abbbiamo una serie infinita di eventi che vengo registrati nella coda (event loop) nel momento in cui viene registrata la callback
    il primo evento gestito  va nello stack e si gestisce gli altri eventi fa mettere nello stack - modo asincrono non bloccante */


/* —————————————————————————*/

/* ————EVENT EMITTERS—————*/
    /* Programmazione orientata agli eventi: 
    es. chat app (con socket.io)*/
    
    //importazione modulo events: 
    const EventEmitter = require('events');
    const customEmitter = new EventEmitter(); //creazione event emitter

    //metodi on ed emit
    /* customEmitter.on('messaggio', (nome, anno) => { //ci stiamo iscrivendo a questo evento (evento messaggio)-> ogni volta che parte l'evento messaggio
        //noi siamo in ascolto dell'evento messaggio e facciamo qualcosa 

        //registriamo l'evento
        console.log(`ciao sono ${nome} e sono nell'anno ${anno}`);

    }) 
    //2 - registra solo il nome
    customEmitter.on('messaggio', (nome) => {
        console.log(`ciao, io sono ${nome}`);
    }) 

    // emittiamo l'evento messaggio
    customEmitter.emit('messaggio', 'gianpiero', 2024); */

/* —————————————————————————*/


/* ———— STREAMS —————*/
    /* stream -> flusso costante di dati (come le live stream) che arriva finché la persona è in live
        possiamo usarli anche per leggere file ecc -> flusso di dati costante divisi in chanck (pezzi),
        si legge prima una parte, poi un'altra e così via...

        --| creaimao file pesante e richiediamolo
    */
   //--|passo 1
   /* const {writeFileSync} = require('fs');
   for(let i=0; i<10000; i++ ) {
       //creiamo il file e dentro mettiamo la frase con l'indice e lo appendiamo con flag
       writeFileSync('./filegrande.txt', `ciao riga numero ${i}\n`, {flag: 'a'});
    } */

    //--|passo 2
    /* leggiamo il file */
    /* const {readFileSync, writeFileSync} = require('fs');
    const filegrande = readFileSync('./filegrande.txt');
    
    console.log(filegrande); //-> mostra la dimensione del file in un buffer unico */
    
    //--|passo 3
    /* const {createReadStream, readFileSync, writeFileSync} = require('fs');
    const stream = createReadStream('./filegrande.txt');

    //utilizzo l'evento on -- data è un nome univoco, result che è il parametro degli eventi richiesti
    stream.on('data', (result) =>{
        console.log(result); // ->> 3 buffer diversi, il file viene diviso in chunck, che è che averne solo uno.
    }) */

    /* abbiamo usato createReadStream() per leggere il file (possiamo farlo anche per scrivere o entrambi insieme) 
    e abbiamo visto che usano gli eventi e i file vengono passati in diversi chunk
    */

/* —————————————————————————*/

/* —————RICHIESTE HTTP ———————*/

    /* COME funziona il web */

/* —————————————————————————*/