var totalSeconds = 4;

function setTimer() {

	console.log('Running setTimer()...');

	var seconds = Math.abs(totalSeconds);

	var hours = zeroPad(Math.floor(seconds / 3600));
	seconds = seconds - (hours * 3600);

	var minutes = zeroPad(Math.floor(seconds / 60));
	seconds = seconds - (minutes * 60);

	seconds = zeroPad(seconds);

	var timer = document.querySelector('#timer h2');
	timer.innerHTML = ( (totalSeconds < 0) ? '-' : '' ) + hours + ':' + minutes + ':' + seconds;

	totalSeconds--;

	if (totalSeconds < 0) {
		timer.classList.remove('text-info');
		timer.classList.add('text-danger');
	}

}

function zeroPad(value) {
	if (value < 10) {
		return '0' + value;
	}
	return value;
}

setInterval(setTimer, 1000);

setTimer();