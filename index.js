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

        /* onst saluto = readFileSync('./cartella/saluto.txt', 'utf-8')
        const ciao = readFileSync('./cartella/ciao.txt', 'utf-8') */

        //console.log(ciao) 

        // - Leggere i file, scrivere in file (override e append con {flag:a}), creare un file:
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


    /* const http = require('http');
    const server = http.createServer((req, res) => {   //-> (reqEST - resPONSE)
        //res.write("Benvenuto sul nostro sito");
        //res.end();
        if(req.url === "/"){
            res.end("benvenuto sul sito");
        }
        else if(req.url === "/gian"){
            res.end("sei sulla pagina fi Gian");
        }else {
            res.end(`<h1>Errore: la pagina che stai cercando non esiste.</h1>
                        <p>torna alla
                            <a href="/">Home</a>
                        </p>
                    </h1>`) ;
        }
    }) 

    //per far si che funzioni bisogna creare un server in ascolto su una porta:
    server.listen(3000); //col server aperto per chiuderlo devo fare ctl+c nel terminale */

/*----------------------------------*/


/* -- NPM ----- */





/* ------------- */
