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

const items = document.querySelectorAll('.carousel')
const items2 = document.querySelectorAll('.dot')
const nbSlide = items.length
const next = document.querySelector('.arrow_right')
const previous = document.querySelector('.arrow_left')
let count = 0

function slideNext(){
	items[count].classList.remove('active')
	items2[count].classList.remove('dot_selected')
	if(count < nbSlide -1){
		count++
	} else {
		count = 0
	}
	items[count].classList.add('active')
	items2[count].classList.add('dot_selected')
	console.log(count)
}
next.addEventListener('click', slideNext)

function slidePrevious(){
	items[count].classList.remove('active')
	items2[count].classList.remove('dot_selected')
	if(count > 0){
		count--
	} else {
		count = nbSlide - 1
	}
	items[count].classList.add('active')
	items2[count].classList.add('dot_selected')
	console.log(count)
}
previous.addEventListener('click', slidePrevious)
