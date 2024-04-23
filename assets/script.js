const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let globalIndex = 0;
let preIndex = slides.length - 1;
let postIndex = 1;

let baliseImage = document.querySelector(".banner-img");
let baliseText = document.querySelector("#banner > p")
console.log(baliseText)

let arrowRight = document.querySelector(".arrow_right");

arrowRight.addEventListener("click", () =>{
	event.preventDefault();

	globalIndex++
	if(globalIndex > slides.length-1){
		globalIndex =0
	}

	preIndex++
	if(preIndex > slides.length-1){
		preIndex = 0
	}

	postIndex++
	if(postIndex > slides.length-1){
		postIndex = 0
	}

	
	baliseImage.setAttribute("src", "./assets/images/slideshow/"+ slides[globalIndex].image);
	baliseText.textContent = slides[globalIndex].tagLine;

	let dotSelected = document.querySelector(`.dot${globalIndex}`)
	dotSelected.classList.add("dot_selected")

	let dotNotSelected = document.querySelector(`.dot${preIndex}`)
	dotNotSelected.classList.remove("dot_selected")

	console.log("Droite");
	console.log(globalIndex)
	console.log("pre" +preIndex)
	console.log("post"+postIndex)
});


let arrowLeft = document.querySelector(".arrow_left");

arrowLeft.addEventListener("click", () =>{
	event.preventDefault();

	globalIndex--
	if(globalIndex < 0){
		globalIndex = slides.length-1
	}

	preIndex--
	if(preIndex < 0){
		preIndex = slides.length - 1
	}

	postIndex--
	if(postIndex < 0){
		postIndex = slides.length - 1
	}

	let dotSelected = document.querySelector(`.dot${globalIndex}`)
	dotSelected.classList.add("dot_selected")

	let dotNotSelected = document.querySelector(`.dot${postIndex}`)
	dotNotSelected.classList.remove("dot_selected")
	
	baliseImage.setAttribute("src", "./assets/images/slideshow/"+ slides[globalIndex].image);
	console.log("Gauche")
	console.log(globalIndex)
	console.log("pre" +preIndex)
	console.log("post"+postIndex)
});

//Création des bullet points
for (let index in slides){
	let dot = document.createElement("i");
	dot.classList.add("dot")
	if(index == 0){
		dot.classList.add("dot_selected")
	}
	dot.classList.add(`dot${index}`)
	
	console.log(dot)

	let dotsCont = document.querySelector(".dots");
	dotsCont.appendChild(dot);

	console.log(dotsCont)
}

console.log(baliseImage)
console.log(globalIndex)
console.log(slides[globalIndex].image)

