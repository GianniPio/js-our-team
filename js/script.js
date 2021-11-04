// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. (nel nostro file js)
// Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team


// 1. Creare l'array contente i membri del team

// 2. Stampare i membri in HTML

// variabile usata per salvare tutto in html
var container = document.querySelector('.team-container');

// array contenente oggetti/membri
const members = 

[
    { 
        "nome" : 'Weyne Barnett',
        "ruolo" : 'Founder & CEO',
        "foto" : 'img/wayne-barnett-founder-ceo.jpg'
    },

    { 
        "nome" : 'Angela Caroll',
        "ruolo" : 'Chief Editor',
        "foto" : 'img/angela-caroll-chief-editor.jpg'
    },

    { 
        "nome" : 'Walter Gordon',
        "ruolo" : 'Office Manager',
        "foto" : 'img/walter-gordon-office-manager.jpg'
    },

    { 
        "nome" : 'Angela Lopez',
        "ruolo" : 'Social Media Manager',
        "foto" : 'img/angela-lopez-social-media-manager.jpg'
    },

    { 
        "nome" : 'Scott Estrada',
        "ruolo" : 'Developer',
        "foto" : 'img/scott-estrada-developer.jpg'
    },

    { 
        "nome" : 'Barbara Ramos',
        "ruolo" : 'Graphic Designer',
        "foto" : 'img/barbara-ramos-graphic-designer.jpg'
    },
]


for (let i = 0; i < members.length; i++) {

    // crezioni variabili per salvare i membri
    let nameMembro = '';
    let ruoloMembro = '';
    let fotoMembro = '';

    // salvare nelle variabili il valore degli oggetti
    for (var key in members) {

        nameMembro = members[i].nome;
        ruoloMembro = members[i].ruolo;
        fotoMembro = members[i].foto;
    }

    // stampa gli elementi nell'HTML
    container.innerHTML +=
    `
    <div class="team-card">
            <div class="card-image">
              <img
                src="${fotoMembro}"
                alt="${nameMembro}"
              />
            </div>
            <div class="card-text">
              <h3>${nameMembro}</h3>
              <p>${ruoloMembro}</p>
            </div>
          </div>
    `
}


