if(!docConfig.switcher){
	docConfig.switcher = {
		"basepaths": {
			"linux": "linux",
			"windows": "windows",
			"10.6" : "data-store/latest/",
			"10.5" : "data-store/10.5/",
			"10.4" : "data-store/10.4/",
			"10.3" : "data-store/10.3/"
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
			"data-store-account": ['x','-','x','-','x','-','x','x'],
			"add-standby-machine": ['-', '-','-', '-','-', '-', 'x', 'x'],
			"overview-data-store-setup": ['-', '-','-', '-','-', '-', 'x', 'x'],
			"ports-used-by-arcgis-data-store": ['-', '-','-', '-', 'x', 'x', 'x', 'x'],
			"troubleshoot-cloudformation": ['-', '-','-', '-','-', '-', 'x', 'x'],
			"uninstall-arcgis-data-store": ['uninstall-data-store', '-', 'uninstall-data-store', '-', '-', '-', '-', '-'],
			"uninstall-data-store": ['-', 'uninstall-arcgis-data-store', '-', 'uninstall-arcgis-data-store', 'uninstall-arcgis-data-store', 'uninstall-arcgis-data-store', 'uninstall-arcgis-data-store', 'uninstall-arcgis-data-store'],
			"update-ads-ssl-certificate": ['-', '-','-', '-', 'x', 'x', 'x', 'x'],
		},

		"switcherdisplay": true,
	};
}
