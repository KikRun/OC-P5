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

let arrowRight = document.querySelector(".arrow_right");

arrowRight.addEventListener("click", () =>{
	event.preventDefault();
	console.log("Droite");
});


let arrowLeft = document.querySelector(".arrow_left");

arrowLeft.addEventListener("click", () =>{
	event.preventDefault();
	console.log("Gauche")
});

let dots = "";

for(let i = 0; i < slides.length; i++){
	//let dotSelect =""
	//if(i = 0){
	//	dotSelect = "dot_selected"
	//}else{
	//	dotSelect =""
	//};
	//dots += `<i class="dot ${dotSelect}"></i>`
	dots += `<i class="dot"></i>`
};

console.log(dots)

let dotsCont = document.querySelector(".dots")
dotsCont.innerHTML = dots