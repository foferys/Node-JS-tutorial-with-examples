function saluta(nome) {
    console.log(`ciao, sono ${nome}`);
}


function prova() {
    console.log(`ciao, sono la prova`);
}
/* se una funzione viene chiamata direttamente qua, quando facciamo node utils.js nel terminale
avremo la stampa direttamente li e anche da index se facciamo require del file*/
prova()


module.exports = saluta