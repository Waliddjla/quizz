const form = document.querySelector('.form-quizz');
const reponses = ['a', 'c', 'a', 'b'];
const emojis = ['✔️', '✨', '👀', '😭', '👎'];
const titreResultat = document.querySelector('.resultats h2');
const textResultat = document.querySelector('.note');
const aidResultat = document.querySelector('.aide');
const toutesQeustions = document.querySelectorAll('.question-blcok');
let verifTableau = [];
let tableauResultats = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //console.log(document.querySelector('input[name = "q1"]:checked').value);

    for (i = 1; i < 5; i++) {
        tableauResultats.push(document.querySelector(`input[name ="q${i}"]:checked`).value)
    }
    veriffunc(tableauResultats);
    tableauResultats = [];
})
function veriffunc(tabRes) {
    for (let a = 0; a < 4; a++) {
        if (tabRes[a] === reponses[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }
    }
    //console.log(verifTableau);
    afficherResultats(verifTableau);
    couleurfonction(verifTableau);
    verifTableau = [];
}
function afficherResultats(tabchek) {
    const nbDefauts = tabchek.filter(el => el !== true).length;
    //console.log(nbDefauts);
    switch (nbDefauts) {
        case 0:
            titreResultat.innerText = "✔️ bravo sans fautes.✔️";
            aidResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !';
            textResultat.innerText = '4/4';
            break;
        case 1:
            titreResultat.innerText = "✨ Vous y êtes presque ! ✨";
            aidResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !';
            textResultat.innerText = '3/4';
            break;
        case 2:
            titreResultat.innerText = "✨ Encore un effort ... 👀";
            aidResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !';
            textResultat.innerText = '2/4';
            break;
        case 3:
            titreResultat.innerText = "😭 Peux mieux faire ! 😭";
            aidResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !';
            textResultat.innerText = '1/4';
            break;
        case 4:
            titreResultat.innerText = "👎 zayer rohak rbk ! 👎";
            aidResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !';
            textResultat.innerText = '0/4';
            break;
        default:
            'woops cas khati ga3 !';

    }
}

function couleurfonction(tabvalBool) {
    for (let j = 0; j<tabvalBool.length; j++) {
        if (tabvalBool[j] === true){
            document.getElementById("toutesQeustions[j]").style.background = "lightgreen";
        }
        else {
            toutesQeustions[j].style.background = '#ffb8b8';
            toutesQeustions[j].classList.add('echec');

            setTimeout(() => {
                toutesQeustions[j].classList.remove('echec');
            }, 500)
        }

    }
}
toutesQeustions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "white";
    })
})

