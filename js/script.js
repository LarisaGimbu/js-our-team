/**Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team. (se non fate tempo a realizzare questa parte va bene ugualmente e pensateci in ogni caso solo una volta stampata correttamente tutta la pagina)*/

const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CFEO',
    photo: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    photo: 'angela-caroll-chief-editor.jpg'
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    photo: 'walter-gordon-office-manager.jpg'
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Menager',
    photo: 'angela-lopez-social-media-manager.jpg'
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    photo: 'scott-estrada-developer.jpg'
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    photo: 'barbara-ramos-graphic-designer.jpg'
  }
]

const teamContainer = document.querySelector('.team-container');
teamContainer.innerHTML = '';

for(let index in team){

  const teamCard = document.createElement('div');
  teamCard.className = 'team-card';
  teamContainer.append(teamCard);

  teamCard.innerHTML = 
  `
    <div class="card-image">
      <img src="img/${team[index].photo} " alt="${team[index].name} " />
    </div>
    <div class="card-text">
      <h3>${team[index].name}</h3>
      <p>${team[index].role}</p>
    </div>
  `;
}