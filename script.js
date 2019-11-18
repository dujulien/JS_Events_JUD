// Fonctionnalité 1 :
// On commence par un petit échauffement : lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console.

// Cette fonctionnalité doit être codée avec un addEventListener("click", function(){ } car c'est une bonne habitude à prendre ! 😇

let footer = document.getElementsByTagName("footer")[0];
footer.addEventListener("click", cliqueInConsole);

function cliqueInConsole(){
	console.log("clique")
}

// Fonctionnalité 1-bis :
// Maintenant on va upgrader cette première fonctionnalité : lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.

footer.addEventListener("click", cliqueInConsole);
let i = 0;

function cliqueInConsole(){
	i += 1
	if (i % 10 == 0){
		console.log('ARRETE GRAND MALADE !')
	} else {
			console.log(`clic numéro ${i}`)
	}
}

// Fonctionnalité 2 :
// On va enfin faire fonctionner ce satané "Hamburger Menu" qui s'affiche depuis le début mais qui n'actionne rien quand on clique dessus. C'est quoi un "hamburger menu" ? C'est ça, ce bouton avec trois lignes horizontales en haut à droite de la navbar.

// Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader

let hambugerButton = document.querySelector("button.navbar-toggler")

hambugerButton.addEventListener("click", collapse)

function collapse(){
	let navbar = document.getElementById("navbarHeader");
	navbar.className = "bg-dark";
}

// Fonctionnalité 3 :
// À présent, on va faire cela : si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). À toi de jouer !

let firstEditBtn = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];

firstEditBtn.addEventListener("click", redded)

function redded(){
	let text = document.getElementsByClassName('card-text')[0];
	text.style.color = 'red';
}

// Fonctionnalité 4 :
// On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe : si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte. C'est plus compliqué que sur une classe.

let secondEditBtn = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];

secondEditBtn.addEventListener("click", toggle)
let isGreen = false

function toggle(){
	let text = document.getElementsByClassName('card-text')[1];
	if (isGreen == false){
		text.style.color = 'green';
		isGreen = true;
	} else if (isGreen == true){
			text.style.color ='black';
			isGreen = false;
	}
}

// Fonctionnalité 5 :
// Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire"🤯. Et comme elle est un peu dangereuse, on va la cacher… Voici comment elle doit marcher : si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).

let navbar = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0]

navbar.addEventListener("dblclick", nuclearBomb, true)
document.body.addEventListener("dblclick", recover, true)

let endOfWorld = false;
function nuclearBomb(){
	let bootstrap = document.getElementsByTagName("link")[0];
	if(endOfWorld == false) {
		bootstrap.remove();
		endOfWorld = true;
	}
}

function recover(){
	if(endOfWorld == true) {
		let link = document.createElement('link');
		link.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
		link.rel='stylesheet'
		console.log(link);
		document.head.appendChild(link);
		endOfWorld = false;
	}
}


// Fonctionnalité 6 :
// T'as déjà implémenté 5 fonctionnalités d'interaction ! C'est top ! On va commencer à corser les choses.

// La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !

let cardsViewBtn = document.getElementsByClassName("btn btn-sm btn-success")
let cardsImg = document.getElementsByClassName("card-img-top")
let cardsText = document.getElementsByClassName("card-text")
let reducedCards = [false, false, false, false, false, false]


for (let i = 0; i < cardsViewBtn.length; i++){
	cardsViewBtn[i].addEventListener("mouseover", function(){reduce(i)});
}


function reduce(i){
	if (reducedCards[i] == false){
		cardsImg[i].style.width = "20%";
		cardsText[i].classList.add("d-none");
		reducedCards[i] = true;
	} else if (reducedCards[i] == true){
			cardsImg[i].style.width = "100%";
			cardsText[i].classList.remove("d-none")
			reducedCards[i] = false;
	}
}

// Fonctionnalité 7 :
// Allez on va rajouter un peu de WTF dans la page : si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !

let leftBtn = document.getElementsByClassName("btn btn-secondary my-2")
let cards = document.getElementsByTagName
leftBtn.addEventListener('click', switchFwd);

function switchFwd(){
	const lastChildNode = 
}










