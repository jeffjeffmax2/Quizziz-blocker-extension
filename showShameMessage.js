insertShame();

function insertShame() {
	var page = document.querySelector('body');
	page.insertAdjacentHTML('afterbegin', '<div id="shame-message"><h1></h1><h2></h2></div></div>');
}

var closeTab = document.getElementById('quit');
closeTab.addEventListener('click', function() {
    chrome.runtime.sendMessage({closeThis: true});
});

var watch = document.getElementById('continue');
watch.addEventListener('click', function() {
	var shame = document.getElementById('shame-message');
	document.querySelector('body').removeChild(shame);
	document.getElementById('appMountPoint').style.display = "block";
});
