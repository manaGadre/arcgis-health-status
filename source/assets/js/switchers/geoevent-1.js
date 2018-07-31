if(!docConfig){
		var docConfig = {};
}
if(!docConfig.switcher){
	docConfig.switcher = {
		"basepaths": {
			"linux": "linux",
			"windows": "windows",
			"10.6" : "geoevent/latest/",
			"10.5" : "geoevent/10.5/",
			"10.4" : "geoevent/10.4/",
			"10.3" : "geoevent/10.3/"
		},

		"switchercases": {
			"10.6~": "10.6",
			"10.6~linux": "Linux",
			"10.6~windows": "Windows",
			"10.5~": "10.5",
			"10.5~linux": "Linux",
			"10.5~windows": "Windows",
			"10.4~": "10.4",
			"10.4~linux": "Linux",
			"10.4~windows": "Windows",
			"10.3~": "10.3",
			"10.3~linux": "Linux",
			"10.3~windows": "Windows"

		},

		"caseTbl": {
			"__order": {
				"10.6~linux": 1,
				"10.6~windows": 2,
				"10.5~linux": 3,
				"10.5~windows": 4,
				"10.4~linux": 5,
				"10.4~windows": 6,
				"10.3~linux": 7,
				"10.3~windows": 8
			},
			"installing-arcgis-geoevent-extension-for-server-silently": ['x','-','x','-','x','-','x','-'],
			"uninstalling-arcgis-geoevent-extension-for-server-silently": ['x','-','x','-','x','-','x','-'],
			"installing-geoevent-silently": ['x','-','x','-','x','-','x','-'],
			"uninstalling-geoevent-silently": ['x','-','x','-','x','-','x','-'],
			"ports-used-by-geoevent-extension": ['ports-used-by-geoevent', 'ports-used-by-geoevent', 'ports-used-by-geoevent', 'ports-used-by-geoevent', '-', '-', '-', '-'],
		},

		"switcherdisplay": true,
	};
}
