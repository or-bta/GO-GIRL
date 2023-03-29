window.onload = function() {
	var loaderWrapper = document.getElementById("loader-wrapper");
	var loadingScreen = document.getElementById("loading-screen");

	var loadingInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(loadingInterval);
			loaderWrapper.style.display = "none";
			loadingScreen.style.display = "flex";
		}
	}, 50);
}
