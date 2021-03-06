//handling the burger menu
function displayBurger() {
  let x = document.getElementById('myLinks');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

const burgerIcon = document.querySelector('.icon');
burgerIcon.addEventListener('click', displayBurger);

window.addEventListener('resize', function () {
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  let x = document.getElementById('myLinks');
  if (vw >= 570) {
    x.style.display = 'flex';
  } else if (vw < 570) {
    x.style.display = 'none';
  }
});

let toggleSpace = document.querySelector('.toggle-space');

function changeLang() {
  let whatLang = document.querySelector('.lang').lang;
  if (whatLang === 'en') {
    toggleSpace.style.justifyContent = 'flex-end';
    document.querySelector('.lang').lang = 'fr';
    document.querySelector('.button.play').innerHTML = 'JOUER';
    document.querySelector('.span-1').innerHTML = 'Accueil';
    document.querySelector('.span-2').innerHTML = 'Entre ton pseudo :';
    document.querySelector('.span-3').innerHTML = 'Règles du jeu';
    document.querySelector('.span-4').innerHTML =
      'Les cartes sont faces cachées. Le but est de trouver les paires dans le temps imparti.';
    document.querySelector('.span-5').innerHTML =
      'Clique sur une carte pour la retourner et trouve sa jumelle.';
    document.querySelector('.span-5-2').innerHTML =
      'Si tu trouves la paire, les cartes restent faces découvertes et tu peux continuer.';
    document.querySelector('.span-6').innerHTML =
      'Si tu te trompes, les deux dernières cartes retournées redeviennent cachées.';
    document.querySelector('.span-7').innerHTML =
      'Change la difficulté si tu veux augmenter le nombre de paires.';
    document.querySelector('.span-7-2').innerHTML =
      'Ton score sera calculé selon le niveau de difficulté et ton temps de jeu.';
    document.querySelector('.span-8').innerHTML = 'Choisis la difficulté :';
    document.querySelector('.span-9').innerHTML = 'facile';
    document.querySelector('.span-10').innerHTML = 'difficile';
    document.querySelector('.span-11').innerHTML = "C'est parti !";
    document.querySelector('.span-12').innerHTML =
      'Site web créé en octobre 2020';
  } else {
    toggleSpace.style.justifyContent = 'flex-start';
    document.querySelector('.lang').lang = 'en';
    document.querySelector('.span-1').innerHTML = 'Home';
    document.querySelector('.button.play').innerHTML = 'PLAY';
    document.querySelector('.span-2').innerHTML = 'Enter your pseudo:';
    document.querySelector('.span-3').innerHTML = 'Rules';
    document.querySelector('.span-4').innerHTML =
      'You have cards face down. The aim is to find the even cards within the time limit.';
    document.querySelector('.span-5').innerHTML =
      'Click on a card to flip it over and find its twin.';
    document.querySelector('.span-5-2').innerHTML =
      'If you find the pair, the cards remain face up and you can continue.';
    document.querySelector('.span-6').innerHTML =
      'If you make a mistake, the last 2 cards turned over become hidden again.';
    document.querySelector('.span-7').innerHTML =
      'Increase the difficulty if you want to add pairs of cards.';
    document.querySelector('.span-7-2').innerHTML =
      'Your score will be calculated according to the level of difficulty and the time taken.';
    document.querySelector('.span-8').innerHTML = 'Select a difficulty mode :';
    document.querySelector('.span-9').innerHTML = 'easy';
    document.querySelector('.span-10').innerHTML = 'hard';
    document.querySelector('.span-11').innerHTML = "Let's go!";
    document.querySelector('.span-12').innerHTML = 'Created in October 2020';
  }
}

toggleSpace.addEventListener('click', changeLang);

//getting the selected level and stocking in session storage

let radioButtons = document.getElementsByClassName('difficulty');
let playButton = document.querySelector('.start a');
console.log(playButton);
let alertElt = document.querySelector('.alert');

playButton.addEventListener('click', function (e) {
  let difficultyLevel = '';
  let isChecked = false;

  for (let i = 0; i < radioButtons.length; i += 1) {
    if (radioButtons[i].checked) {
      isChecked = true;
    }
  }

  if (isChecked) {
    for (let radioButton of radioButtons) {
      if (radioButton.checked) {
        difficultyLevel = radioButton.value;
        console.log(difficultyLevel);
      }
    }

    sessionStorage.setItem('difficultyLevel', difficultyLevel);
  } else {
    e.preventDefault();
    alertElt.style.display = 'block';
  }
});
