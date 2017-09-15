addListeners();

function addListeners(){
	var playSoundButtons = document.getElementsByClassName('playSound');

	for(var i=0; i<playSoundButtons.length; i++)
	{
		var btn = playSoundButtons[i];
		btn.addEventListener("click", playSound, false); 
	}
}

function playSound(){
	var soundId = this.dataset.sound;
	var audio = document.getElementById(soundId);
	return audio.play();
}