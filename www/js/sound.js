addListeners();

function addListeners(){
	console.log("add listeners")
	document.addEventListener("deviceready", onDeviceReady, false);
	var playSoundButtons = document.getElementsByClassName('playSound');

	for(var i=0; i<playSoundButtons.length; i++)
	{
		var btn = playSoundButtons[i];
		btn.addEventListener("click", playSound, false); 
	}
	console.log("finished add")
}

function playSound(){
	var soundId = this.dataset.sound;
	var audio = document.getElementById(soundId);
	return audio.play();
}

function onDeviceReady() {

}