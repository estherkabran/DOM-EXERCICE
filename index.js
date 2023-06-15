var panier = [
	{
		id: 1,
		nom: "Mixeur",
		prix: 3000,
		quantite: 2,
		image: "igname.jpg"
	},
	{
		id: 2,
		nom: "Ordinateur",
		prix: 2000,
		quantite: 1,
		image: "igname2.jpg"
	},
	{
		id: 3,
		nom: "Téléphone",
		prix: 1400,
		quantite: 3,
		image: "manioc.png"
	}
]

panier.forEach((produit) => {
	document.getElementById('produit-liste').innerHTML += "\
		<div data-id='"+produit.id+"' class=\"produit\">\
			<div class=\"image\"><img src=\""+produit.image+"\"></div>\
			<div class=\"nom\">\
				<div>\
					<h4>"+produit.nom+"</h4>\
					<h3><strong>"+produit.prix+"</strong> F</h3>\
					<div class=\"quantite-conteneur\">\
						<button class=\"quantite-button moins\">-</button>\
						<input type=\"text\" readonly value=\""+produit.quantite+"\" class=\"quantite-input\">\
						<button class=\"quantite-button plus\">+</button>\
					</div>\
				</div>\
			</div>\
			<div class=\"supprimer\">\
				<button class=\"button-Sup\">Supprimer</button>\
			</div>\
		</div>\
	"
})

var plusButtons = document.querySelectorAll(".panier .panier-gauche .produit .nom .quantite-conteneur .plus")

for (let i = 0; i < plusButtons.length; i++) {
	plusButtons[i].addEventListener('click', function(event) {
		let id = event.target.parentElement.parentElement.parentElement.parentElement.dataset.id

		event.target.previousElementSibling.value++

		let produit = panier.find(x => x.id == id)

		console.log("Quantité avant incrémentation: "+ produit.quantite)

		produit.quantite++

		console.log("Quantité après incrémentation: "+ produit.quantite)
	})
}


var moinsButtons = document.querySelectorAll(".panier .panier-gauche .produit .nom .quantite-conteneur .moins")

for (let i = 0; i < moinsButtons.length; i++) {
	
	moinsButtons[i].addEventListener('click', function(event) {
		let id = event.target.parentElement.parentElement.parentElement.parentElement.dataset.id

		let produit = panier.find(x => x.id == id)

		console.log("Quantité avant décrémentation: "+ produit.quantite)
		produit.quantite--
		
		if (produit.quantite<0) {
			produit.quantite=0
		}
		console.log("Quantité après décrémentation : "+ produit.quantite)
		event.target.nextElementSibling.value = produit.quantite;  });
}


var supprimerProd = document.querySelectorAll(".panier .panier-gauche .produit .supprimer .button-Sup");
var parent = document.querySelectorAll(".panier .panier-gauche .produit")
for (let i = 0; i < panier.length; i++) {
    supprimerProd[i].addEventListener('click', function(event) {
      let id = event.target.parentElement.parentElement.dataset.id;
      let indexASupprimer = panier.findIndex(x => x.id == id);
console.log(id, indexASupprimer);
      if (indexASupprimer !== -1) {
	 parent[i].remove(document.querySelectorAll(".panier .panier-gauche .produit"))
        panier.splice(indexASupprimer, 1);
        console.log("Produit supprimé du panier.", panier);
      } else {
        console.log("Le produitn'a pas été trouvé dans le panier.");
	
      }
    });
}

