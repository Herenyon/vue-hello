'use strict'

const { createApp } = Vue

createApp({
    data() {
        return {
            titoloBig: 'Questo è il messaggio',
            immagine: 'https://picsum.photos/200'
        }
    }
}).mount('#app');

    // const titoloBig = 'Messaggione Titolone';