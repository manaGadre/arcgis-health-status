if(!docConfig){
		var docConfig = {};
}
if(!docConfig.switcher){
	docConfig.switcher = {
		"basepaths": {
			"iis": "iis",
			"java-windows": "java-windows",
			"java-linux": "java-linux",
			"10.6" : "web-adaptor/latest/",
			"10.5" : "web-adaptor/10.5/",
			"10.4" : "web-adaptor/10.4/",
			"10.3" : "web-adaptor/10.3/"
		},

		"switchercases": {
			"10.6~": "10.6",
			"10.6~iis": "IIS",
			"10.6~java-windows": "Java (Windows)",
			"10.6~java-linux": "Java (Linux)",
			"10.5~": "10.5",
			"10.5~iis": "IIS",
			"10.5~java-windows": "Java (Windows)",
			"10.5~java-linux": "Java (Linux)",
			"10.4~": "10.4",
			"10.4~iis": "IIS",
			"10.4~java-windows": "Java (Windows)",
			"10.4~java-linux": "Java (Linux)",
			"10.3~": "10.3",
			"10.3~iis": "IIS",
			"10.3~java-windows": "Java (Windows)",
			"10.3~java-linux": "Java (Linux)"

		},

		"caseTbl": {
			"__order": {
				"10.6~iis": 1,
				"10.6~java-windows": 2,
				"10.6~java-linux": 3,
				"10.5~iis": 4,
				"10.5~java-windows": 5,
				"10.5~java-linux": 6,
				"10.4~iis": 7,
				"10.4~java-windows": 8,
				"10.4~java-linux": 9,
				"10.3~iis": 10,
				"10.3~java-windows": 11,
				"10.3~java-linux": 12
			},
			/*"about-cross-domain-policy-files": ['x','x','x','x','x','x','-','x','x','-','x','x'],
			"configuring-the-display-language-for-arcgis-web-adaptor": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"configure-arcgis-web-adaptor-memory-cache-options": ['-','x','x','-','x','x','-','x','x'],
			"configuring-the-net-trust-level-in-iis-portal-": ['-','x','x','-','x','x','-','x','x'],
			"configuring-the-net-trust-level-in-iis-server-": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"enabling-iis-and-required-components-on-windows-8-8-1-portal-": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"enabling-iis-and-required-components-on-windows-server-2008-2008-r2-portal-": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"enabling-iis-and-required-components-on-windows-server-2012-2012-r2-portal-": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"enabling-iis-and-required-iis-components-on-windows-7-portal-": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"enabling-iis-and-required-iis-components-on-windows-7-server-": ['-','x','x','-','x','x','-','-','x','x','x','x'],
			"enabling-iis-and-required-iis-components-on-windows-8-8-1-server-": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"enabling-iis-and-required-iis-components-on-windows-server-2008-2008-r2-server-": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"enabling-iis-and-required-iis-components-on-windows-server-2012-2012-r2-server-": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"enabling-ssl-on-arcgis-server-when-accessed-through-the-web-adaptor": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"enabling-ssl-on-your-web-server-server-": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"installing-multiple-arcgis-web-adaptors-server-": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"securing-web-services-with-integrated-windows-authentication": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"using-integrated-windows-authentication-with-your-portal": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"install-multiple-arcgis-web-adaptors-iis": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"configure-iis-trust-level-server": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"configure-iis-trust-level-portal": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"disable-windows-active-directory-groups-lookup-in-arcgis-web-adaptor-iis-": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"enable-https-on-arcgis-server-when-accessed-through-arcgis-web-adaptor": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"enable-https-on-your-web-server-server-": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"use-integrated-windows-authentication-with-your-portal": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"configure-the-display-language-for-arcgis-web-adaptor": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"automatically-enable-iis-components": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"enable-iis-2012-components-server": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"enable-iis-2008-components-server": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"enable-iis-8-components-server": ['-','x','x','-','x','x','-','x','x','-','x','x'],
			"enable-iis-7-components-server": ['-','x','x','-','x','x','-','x','x','-','x','x'],

			//10.4 only
			"configure-multiple-arcgis-web-adaptors": ['-','-','-','-','-','-','-','-','-','x','x','x'],
			"using-a-reverse-proxy-server-with-portal-for-arcgis": ['-','-','-','-','-','-','-','-','-','x','x','x'],

			//10.5 only
			"unregister-arcgis-web-adaptor-server": ['-','-','-','-','-','-','x','x','x','x','x','x'],*/

			/*"installing-the-arcgis-web-adaptor-portal-": ['installing-the-arcgis-web-adaptor-portal-','installing-the-arcgis-web-adaptor-java-portal-','installing-the-arcgis-web-adaptor-java-linux-portal-'],
			"installing-the-arcgis-web-adaptor-java-portal-": ['installing-the-arcgis-web-adaptor-portal-','installing-the-arcgis-web-adaptor-java-portal-','installing-the-arcgis-web-adaptor-java-linux-portal-'],
			"installing-the-arcgis-web-adaptor-java-linux-portal-": ['installing-the-arcgis-web-adaptor-portal-','installing-the-arcgis-web-adaptor-java-portal-','installing-the-arcgis-web-adaptor-java-linux-portal-'],

			"installing-the-arcgis-web-adaptor-server-": ['installing-the-arcgis-web-adaptor-server-','installing-the-arcgis-web-adaptor-java-server-','installing-the-arcgis-web-adaptor-java-linux-server-'],
			"installing-the-arcgis-web-adaptor-java-server-": ['installing-the-arcgis-web-adaptor-server-','installing-the-arcgis-web-adaptor-java-server-','installing-the-arcgis-web-adaptor-java-linux-server-'],
			"installing-the-arcgis-web-adaptor-java-linux-server-": ['installing-the-arcgis-web-adaptor-server-','installing-the-arcgis-web-adaptor-java-server-','installing-the-arcgis-web-adaptor-java-linux-server-'],

			"silently-installing-the-arcgis-web-adaptor-portal-": ['silently-installing-the-arcgis-web-adaptor-portal-','silently-installing-the-arcgis-web-adaptor-java-portal-','silently-installing-the-arcgis-web-adaptor-java-linux-portal-'],
			"silently-installing-the-arcgis-web-adaptor-java-portal-": ['silently-installing-the-arcgis-web-adaptor-portal-','silently-installing-the-arcgis-web-adaptor-java-portal-','silently-installing-the-arcgis-web-adaptor-java-linux-portal-'],
			"silently-installing-the-arcgis-web-adaptor-java-linux-portal-": ['silently-installing-the-arcgis-web-adaptor-portal-','silently-installing-the-arcgis-web-adaptor-java-portal-','silently-installing-the-arcgis-web-adaptor-java-linux-portal-'],

			"silently-installing-the-arcgis-web-adaptor-server-": ['silently-installing-the-arcgis-web-adaptor-server-','silently-installing-the-arcgis-web-adaptor-java-server-','silently-installing-the-arcgis-web-adaptor-java-linux-server'],
			"silently-installing-the-arcgis-web-adaptor-java-server-": ['silently-installing-the-arcgis-web-adaptor-server-','silently-installing-the-arcgis-web-adaptor-java-server-','silently-installing-the-arcgis-web-adaptor-java-linux-server'],
			"silently-installing-the-arcgis-web-adaptor-java-linux-server": ['silently-installing-the-arcgis-web-adaptor-server-','silently-installing-the-arcgis-web-adaptor-java-server-','silently-installing-the-arcgis-web-adaptor-java-linux-server'],

			"uninstalling-the-arcgis-web-adaptor-portal-": ['uninstalling-the-arcgis-web-adaptor-portal-','uninstalling-the-arcgis-web-adaptor-java-portal-','uninstalling-the-arcgis-web-adaptor-java-linux-portal'],
			"uninstalling-the-arcgis-web-adaptor-java-portal-": ['uninstalling-the-arcgis-web-adaptor-portal-','uninstalling-the-arcgis-web-adaptor-java-portal-','uninstalling-the-arcgis-web-adaptor-java-linux-portal'],
			"uninstalling-the-arcgis-web-adaptor-java-linux-portal": ['uninstalling-the-arcgis-web-adaptor-portal-','uninstalling-the-arcgis-web-adaptor-java-portal-','uninstalling-the-arcgis-web-adaptor-java-linux-portal'],

			"uninstalling-the-arcgis-web-adaptor-server-": ['uninstalling-the-arcgis-web-adaptor-server-','uninstalling-the-arcgis-web-adaptor-java-server-','uninstalling-the-arcgis-web-adaptor-java-linux-server-'],
			"uninstalling-the-arcgis-web-adaptor-java-server-": ['uninstalling-the-arcgis-web-adaptor-server-','uninstalling-the-arcgis-web-adaptor-java-server-','uninstalling-the-arcgis-web-adaptor-java-linux-server-'],
			"uninstalling-the-arcgis-web-adaptor-java-linux-server-": ['uninstalling-the-arcgis-web-adaptor-server-','uninstalling-the-arcgis-web-adaptor-java-server-','uninstalling-the-arcgis-web-adaptor-java-linux-server-']*/
		},

		"switcherdisplay": true,
	};
}
