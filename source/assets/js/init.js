!(function () {
	function insertJS (jsUrl) {
		var js = document.createElement('script');
		js.src = jsUrl;
		document.body.appendChild(js);
	}
	function insertCss (cssUrl) {
		var css = document.createElement('link');
		css.rel = "stylesheet";
		css.type = "text/css";
		css.href = cssUrl;
		document.getElementsByTagName('head')[0].appendChild(css);
	}
	try {
		insertJS("/assets/js/anchor-links.js");

		var hn = window.location.hostname;

		if (hn === "server.arcgis.com") {

		} else if (hn === "serverdev.arcgis.com") {

			insertCss ("/cdn/css/workflow.css");
			insertJS ("/cdn/js/workflow.js");

		} else if (hn === "serverstg.arcgis.com") {

			//insertCss ("/cdn/css/workflow.css");
			//insertJS ("/cdn/js/workflow.js");
		}
	} catch (e){}
})();
