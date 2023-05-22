/*const slides = [
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
*/

const carousel = document.querySelectorAll('.carousel')
const dot = document.querySelectorAll('.dot')
const nbSlide = carousel.length
const next = document.querySelector('.arrow_right')
const previous = document.querySelector('.arrow_left')
let index = 0

function slideNext(){
	carousel[index].classList.remove('active')
	dot[index].classList.remove('dot_selected')
	if(index < nbSlide -1){
		index++
	} else {
		index = 0
	}
	carousel[index].classList.add('active')
	dot[index].classList.add('dot_selected')
	console.log(index)
}
next.addEventListener('click', slideNext)

function slidePrevious(){
	carousel[index].classList.remove('active')
	dot[index].classList.remove('dot_selected')
	if(index > 0){
		index--
	} else {
		index = nbSlide - 1
	}
	carousel[index].classList.add('active')
	dot[index].classList.add('dot_selected')
	console.log(index)
}
previous.addEventListener('click', slidePrevious)
