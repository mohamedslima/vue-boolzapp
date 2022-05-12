//  Milestone 1
//  ● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
// dall’interlocutore (bianco) assegnando due classi CSS diverse
// ● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
// nome e immagine di ogni contatto

// Milestone 2
// :freccia_destra: Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione.
// :freccia_destra: Click sul contatto mostra la conversazione del contatto cliccato.

Vue.config.devtools = true;

 const app = new Vue (
     {
         el: '#root',
         data: {
             contacts: [
                 {
                     name: 'Michele',
                     avatar: '_1',
                     visible: true,
                     messages: [
                         {
                             date: '10/01/2020 15:30:55',
                             message: 'Hai portato a spasso il cane?',
                             status: 'sent'
                         },
                         {
                             date: '10/01/2020 15:50:00',
                             message: 'Ricordati di stendere i panni',
                             status: 'sent'
                         },
                         {
                             date: '10/01/2020 16:15:22',
                             message: 'Tutto fatto!',
                             status: 'received'
                         }
                     ],
                 },
                 {
                     name: 'Fabio',
                     avatar: '_2',
                     visible: true,
                     messages: [
                         {
                             date: '20/03/2020 16:30:00',
                             message: 'Ciao come stai?',
                             status: 'sent'
                         },
                         {
                             date: '20/03/2020 16:30:55',
                             message: 'Bene grazie! Stasera ci vediamo?',
                             status: 'received'
                         },
                         {
                             date: '20/03/2020 16:35:00',
                             message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                             status: 'sent'
                         }
                     ],
                 },
                 {
                     name: 'Samuele',
                     avatar: '_3',
                     visible: true,
                     messages: [
                         {
                             date: '28/03/2020 10:10:40',
                             message: 'La Marianna va in campagna',
                             status: 'received'
                         },
                         {
                             date: '28/03/2020 10:20:10',
                             message: 'Sicuro di non aver sbagliato chat?',
                             status: 'sent'
                         },
                         {
                             date: '28/03/2020 16:15:22',
                             message: 'Ah scusa!',
                             status: 'received'
                         }
                     ],
                 },
                 {
                     name: 'Alessandro B.',
                     avatar: '_4',
                     visible: true,
                     messages: [
                         {
                             date: '10/01/2020 15:30:55',
                             message: 'Lo sai che ha aperto una nuova pizzeria?',
                             status: 'sent'
                         },
                         {
                             date: '10/01/2020 15:50:00',
                             message: 'Si, ma preferirei andare al cinema',
                             status: 'received'
                         }
                     ],
                 },
                 {
                     name: 'Luca',
                     avatar: '_5',
                     visible: true,
                     messages: [
                         {
                             date: '10/01/2020 15:30:55',
                             message: 'Ricordati di chiamare la nonna',
                             status: 'sent'
                         },
                         {
                             date: '10/01/2020 15:50:00',
                             message: 'Va bene, stasera la sento',
                             status: 'received'
                         }
                     ],
                }
             ],
             currentChat: 0,
             newMessage: '',
             guestMessage: 'okay',
             now: dayjs().format('HH:mm')
         },
         methods: {
            //  prende chat index dal ciclo v-for e lo mostra
            getActiveChat(index) {
                this.currentChat = index;
            },
            

            UserNewMessage() {
                const newMessage = {
                    date: this.currentTime,
                    message: this.newMessage.trim(),
                    status: 'sent'
                }
                // push solo se c'è 
                if (this.newMessage.trim().length > 0) {
                    this.contacts[this.currentChat].messages.push(newMessage);

                    // ripulisco 
                    this.newMessage ='';

                    // genero risposta
                    setTimeout(() => {
                        const guestMessage = {
                        date: this.now,
                        message: this.guestMessage,
                        status: 'received'
                    }
                        // pusho nell'array
                        this.contacts[this.currentChat].messages.push(guestMessage);
                    },1000);
                }
            },
         }
     }
 )
