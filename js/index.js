// initialize animation object

let animation = document.getElementById("animatable").animate([
	{ transform: 'translateX(0px)' }, 
	{ transform: 'translateX(900px)' }
	], { 
	duration: 3000,
	iterations: Infinity
})
animation.pause() // animation runs automatically, so we need to pause it


// buttons handlers

document.getElementById('btn-start').addEventListener('click', () => {
	
	animation.play()

}, false)

document.getElementById('btn-stop').addEventListener('click', () => {
	
	animation.pause()

}, false)