/*
var host = "http://marketplacedevext.arcgis.com",
    searchHost = "http://searchdev.esri.com",
*/
var searchHost = "//searchdev.esri.com",
	_agolHost = "//devext.arcgis.com",
	trialUrl = "//learndev.arcgis.com",
	tierName = "dev";
if(window.location.hostname.match( /(enterprisestg.arcgis.com)/)) {
	searchHost = "//searchstg.esri.com";
	_agolHost = "//qaext.arcgis.com";
	trialUrl = "https://learnstg.arcgis.com",
	tierName = "stg";
} else if(window.location.hostname.match( /(enterprise.arcgis.com)/)) {
	searchHost = "//search.esri.com";
	_agolHost = "//www.arcgis.com";
	trialUrl = "https://learn.arcgis.com",
	tierName = "";
}

    //searchHost = "http://search.esri.com",
    sitecfg = {
	  	"debug" : false,

        "portalHostname" : _agolHost,
		"agolSignin" : 	_agolHost + "/home/signin.html",
		"agolProfile" :  "/home/user.html",
		"agolSignout" :  "/sharing/rest/oauth2/signout",
		"trialDownloadUrl": trialUrl + "/en/trial/",

		"searchUrl" : searchHost + "/v3/index.cfm",
		"searchIfc" : "arcgis_pro_ifce",
	  	"searchView" : "arcgis_server_vw"

	};
	$.getScript("/assets/js/site-changes.js");
	
window.onload = function () {
	// Initialize all calcite.js patterns
	calcite.init();
};
