if(!docConfig){
		var docConfig = {};
}
if(!docConfig.switcher){
	docConfig.switcher = {
		"basepaths": {
			"linux": "linux",
			"windows": "windows",
			"10.6": "server/latest/",
			"10.5": "server/10.5/",
			"10.4" : "server/10.4/",
			"10.3" : "server/10.3/"
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
			/*"authorize-arcgis-server": ['x','-', 'x','-','x','-','x','-'],
			"reusable-obtain-an-authorization-file": ['x','-', 'x','-','x','-','x','-'],
			"uninstalling-arcgis-for-server-silently": ['-','x','-','x','-','x','-','x'],
			"advanced-considerations-when-using-domain-accounts": ['x','-','x','-','x','-', 'x', '-'],
			"checking-server-diagnostics-using-the-diagnostics-tool": ['-','x','-','x','-','x','-','x'],
			"configuring-an-arcgis-data-license": ['-','x','-','x','-','x','-','x'],
			"configuring-the-domain-controller-used-by-arcgis-server": ['x','-','x','-','x','-'],
			"creating-a-search-service": ['x','-','x','-','x','-','x','-'],
			"data-interoperability-extension": ['x','-','x','-','x','-','x','-'],
			"data-reviewer-for-server": ['x','-','x','-','x','-','x','-'],
			"defense-mapping-for-server": ['x','-','x','-','x','-','x','-'],
			"migrating-a-10-0-net-server-object-extension-to-later-versions": ['x','-','x','-','x','-','x','-'],
			"production-mapping-for-server": ['x','-','x','-','x','-'],
			"publishing-a-workflow-manager-service": ['x','-','x','-','x','-','x','-'],
			"publishing-image-service-on-linux": ['x','-','-','x','-','x','-','x'],
			"registering-data-folders-with-a-search-service": ['x','-','x','-','x','-','x','-'],
			"register-sql-server-with-arcgis-server": ['x','-','x','-','x','-','x','-'],
			"register-workgroup-geodatabase-with-arcgis-server": ['x','-','x','-','x','-','x','-'],
			"roads-and-highways-for-server": ['x','-','x','-','x','-','x','-'],
			"search-services": ['x','-','x','-','x','-','x','-'],
			"securing-web-services-with-integrated-windows-authentication": ['x','-','x','-','x','-','x','-'],
			"setting-environment-variables-for-arcgis-server": ['-','x','-','x','-','x','-','x'],
			"setting-up-a-custom-identity-store-using-asp-net": ['x','-','x','-','x','-','x','-'],
			"starting-the-search-service-in-arcgis-for-desktop": ['x','-','x','-','x','-','x','-'],
			"starting-the-search-service-in-manager": ['x','-','x','-','x','-','x','-'],
			"using-a-10-0-net-sql-server-security-store-in-later-versions": ['x','x','x','x','x','-','x','-'],
			"using-nested-groups-in-a-windows-active-directory-identity-store": ['x','-','x','-','x','-','x','-'],
			"what-is-a-workflow-manager-service": ['x','-','x','-','x','-','x','-'],
			"scene-services": ['x','-','x','-','x','-','x','-'],
			"arcgis-for-maritime-server": ['x','-','x','-','x','-','x','-'],
			"workflow-manager-extension": ['x','-','x','-','x','-','x','-'],
			"what-is-a-maritime-chart-service": ['x','-','x','-','x','-','x','-'],
			"setting-maritime-chart-service-properties": ['x','-','x','-','x','-','x','-'],
			"customizing-configuration-files": ['x','-','x','-','x','-','x','-'],
			"managing-data-for-unencrypted-s-57-datasets": ['x','-','x','-','x','-','x','-'],
			"managing-data-for-s-63-encrypted-datasets": ['x','-','x','-','x','-','x','-'],
			"supporting-multiple-map-services": ['x','-','x','-','x','-','x','-'],
			"disable-windows-active-directory-groups-lookup-in-arcgis-web-adaptor-iis-": ['x','-','x', '-', 'x','-', 'x', '-'],

			//10.3 only
			//"what-s-new-in-arcgis-10-3-1-for-server": ['x','x','-','-'],
			//"what-s-new-in-arcgis-10-3-for-server": ['x','x','-','-'],

			//10.4
			"choosing-a-nas-device": ['-','-','-','-','-','-','x','x'], "core-server-log-codes": ['-','-','-','-','-','-','x','x'], "about-arcgis-server-site-mode": ['-','-','-','-','-','-','x','x'], "administrative-operations-and-arcgis-server-site-mode": ['-','-','-','-','x','x'], "change-the-arcgis-server-site-mode-in-manager": ['-','-','-','-','x','x'], "advanced-site-mode-configuration": ['-','-','-','-','x','x'], "recover-a-site": ['-','-','-','-','x','x'], "about-single-cluster-mode": ['-','-','-','-','x','x'], "change-geoprocessing-service-and-service-extension-publishing-privileges": ['-','-','-','-','x','x'], "scan-arcgis-server-for-security-best-practices": ['-','-','-','-','x','x'], "restrict-arcgis-server-ssl-protocols-and-cipher-suites": ['-','-','-','-','x','x'],"configure-ha-caches": ['-','-','-','-','x','x'],"register-dameng-with-arcgis-server": ['-','-','-','-','x','x'],"choosing-a-nas-device": ['-','-','-','-','x','x'],"what-s-new-for-maritime-chart-service": ['x','-','x','-','x','x'],
			"00227-cached-map-services-do-not-support-rotated-data-frames": ['-','-','-','-','-','-','x','x'],
			"24082-layer-s-symbol-will-be-downgraded": ['-','-','-','-','-','-','x','x'],
			"using-custom-geographic-transformation": ['-','-','-','-','-','-','x','x'],

			//10.5 only
			"00241-field-value-is-not-supported-as-a-display-field": ['-','-','-','-','x','x','x','x'],
			"about-arcgis-server-licensing-roles": ['-','-','-','-','x','x','x','x'],
			"about-big-data-file-share-information-in-server-manager": ['-','-','-','-','x','x','x','x'],
			"additional-server-deployment": ['-','-','-','-','x','x','x','x'],
			"arcgis-enterprise-builder": ['-','-','-','-','x','x','x','x'],
			*/
			"arcgis-for-server-system-requirements": ['arcgis-server-system-requirements','arcgis-server-system-requirements','arcgis-server-system-requirements','arcgis-server-system-requirements','-','-','-','-'],

			"arcgis-server-system-requirements": ['-','-','-','-','arcgis-for-server-system-requirements','arcgis-for-server-system-requirements','arcgis-for-server-system-requirements','arcgis-for-server-system-requirements'],
			/*"base-arcgis-enterprise-deployment": ['-','-','-','-','x','x','x','x'],
			"configure-feature-service-m-values": ['-','-','x','x','x','x'],
			"configure-ha-caches": ['-','-','-','-','x','x','x','x'],
			"configure-the-portal-to-perform-raster-analysis": ['-','-','-','-','x','x','x','x'],
			"configure-the-portal-with-arcgis-geoanalytics-server": ['-','-','-','-','x','x','x','x'],
			"converting-a-map-service-cache-to-an-image-service-cache": ['-','-','-','-','x','x','x','x'],
			"creating-an-image-service-cache": ['-','-','-','-','x','x','x','x'],
			"edit-big-data-file-share-manifests-in-manager": ['-','-','-','-','x','x','x','x'],
			"feature-analysis-tool-differences": ['-','-','-','-','x','x','x','x'],
			"geoanalytics-buffer-expressions": ['-','-','-','-','x','x','x','x'],
			"geoanalytics-create-buffers": ['-','-','-','-','x','x','x','x'],
			"geoanalytics-join-features": ['-','-','-','-','x','x','x','x'],
			"geoanalytics-reconstruct-tracks": ['-','-','-','-','x','x','x','x'],
			"geoanalytics-summarize-within": ['-','-','-','-','x','x','x','x'],
			"geoanalytics-summarize-attributes": ['-','-','-','-','x','x','x','x'],
			"geoanalyticstool-aggregatepoints": ['-','-','-','-','x','x','x','x'],
			"geoanalyticstool-useenvironmentsettings": ['-','-','-','-','x','x','x','x'],
			"geoanalytics-settings": ['-','-','-','-','x','x','x','x'],
			"geoanalytics-troubleshooting": ['-','-','-','-','x','x','x','x'],
			"geoanalytics-tutorial-running-a-geoanalytics-tool": ['-','-','-','-','x','x','x','x'],
			"geoanalytics-use-the-analysis-tools": ['-','-','-','-','x','x','x','x'],
			"how-applications-access-and-use-the-image-service-cache": ['-','-','-','-','x','x','x','x'],
			"image-service-parameters": ['-','-','-','-','x','x','x','x'],
			"image-service-sharing-imagery-tips": ['-','-','-','-','x','x','x','x'],
			"install-a-base-deployment": ['-','-','-','-','x','x','x','x'],
			"join-site-config-store": ['-','-','-','-','x','x','x','x'],
			"key-concepts-for-image-services": ['-','-','-','-','x','x','x','x'],
			"perform-big-data-analysis": ['-','-','-','-','x','x','x','x'],
			"perform-raster-analysis": ['-','-','-','-','x','x','x','x'],
			"plan-a-base-deployment": ['-','-','-','-','x','x','x','x'],
			"preparing-image-services": ['-','-','-','-','x','x','x','x'],
			"publish-elevation-service": ['-','-','-','-','x','x','x','x'],
			"publishing-image-services": ['-','-','-','-','x','x','x','x'],
			"server-side-raster-functions": ['-','-','-','-','x','x','x','x'],
			"share-gis-services": ['-','-','-','-','x','x','x','x'],
			"share-gis-services-as-web-maps": ['-','-','-','-','x','x','x','x'],
			"share-imagery-as-an-arcgis-online-tiled-map-service": ['-','-','-','-','x','x','x','x'],
			"silently-uninstalling-arcgis-server": ['-','-','-','x','-','x','-','x'],
			"standard-and-big-data-feature-analysis-comparison": ['-','-','-','-','x','x','x','x'],
			"tuning-your-arcgis-server-site": ['-','-','-','-','x','x','x','x'],
			"tutorial-creating-your-first-web-gis-configuration": ['-','-','-','-','x','x','x','x'],
			"tutorial-running-a-big-data-tool": ['-','-','-','-','x','x','x','x'],
			"understanding-the-big-data-file-share-manifest": ['-','-','-','-','x','x','x','x'],
			"understanding-the-hints-file": ['-','-','-','-','x','x','x','x'],
			"use-the-configuration-wizard": ['-','-','-','-','x','x','x','x'],
			"vector-tile-services": ['-','-','-','-','-','-','x','x'],
			"what-s-new-in-arcgis-enterprise": ['-','-','-','-','x','x','x','x'],
			"what-is-a-big-data-file-share": ['-','-','-','-','x','x','x','x'],
			"what-is-arcgis-enterprise-": ['-','-','-','-','x','x','x','x'],
			"what-is-arcgis-geoanalytics-server-": ['-','-','-','-','x','x','x','x'],
			"what-is-arcgis-geoevent-server": ['-','-','-','-','x','x','x','x'],
			"what-is-arcgis-gis-server-": ['-','-','-','-','x','x','x','x'],
			"what-is-arcgis-image-server-": ['-','-','-','-','x','x','x','x'],
			"what-is-image-service-caching-": ['-','-','-','-','x','x','x','x'],

			//10.5 mixed
			"using-windows-active-directory-and-pki-to-secure-access-to-arcgis-server": ['x','-','x','-','x','x','x','x'],
			"what-is-arcgis-business-analyst-server-": ['x','-','x','-','x','x','x','x'],
			"linux-python": ['-','x','-','x','x','x','x','x'],
			"creating-a-maritime-chart-service-tile-package": ['x','-','x','-','x','x','x','x'],*/
		},

		"switcherdisplay": true,
	};
	var currentURL = document.location.href;
	if (currentURL.match(/(\/linux\/)/)) {
		docConfig.switcher.caseTbl['authorize-arcgis-server'] = ['-','x','-','x','-','x','-','x'];
	}else if(currentURL.match(/(\/windows\/)/)) {
		docConfig.switcher.caseTbl['authorize-arcgis-server'] = ['x','-','x','-','x','-','x','-'];
	}
	if (currentURL.match(/(\/publish-services\/)/)) {
		/*docConfig.switcher.caseTbl['00055-globe-server-layers-cannot-be-republished'] = ['x','x','-','-','-','-'];
		docConfig.switcher.caseTbl['00103-video-layers-cannot-be-published-to-a-globe-service'] = ['x','x','x','x','-','-','-','-'];
		docConfig.switcher.caseTbl['10049-background-settings-for-the-document-will-not-be-saved'] = ['x','x','x','x','-','-','-','-'];
		docConfig.switcher.caseTbl['a-quick-tour-of-map-caching'] = ['x','x','x','x','x','x','-','-'];
		docConfig.switcher.caseTbl['accessing-globe-cache-properties'] = ['x','x','x','x','-','-','-','-'];
		docConfig.switcher.caseTbl['analyzing-your-globe'] = ['x','x','x','x','-','-','-','-'];
		docConfig.switcher.caseTbl['available-globe-cache-properties'] = ['x','x','x','x','-','-','-','-'];

		docConfig.switcher.caseTbl['converting-a-map-service-cache-to-an-image-service-cache'] = ['-','-','-','-','-','-','-','-'];
		docConfig.switcher.caseTbl['creating-an-image-service-cache'] = ['-','-','-','-','-','-','-','-'];
		docConfig.switcher.caseTbl['creating-globe-cache-tiles'] = ['x','x','x','x','-','-','-','-'];
		docConfig.switcher.caseTbl['globe-cache-updates'] = ['x','x','x','x','-','-','-','-'];
		docConfig.switcher.caseTbl['globe-cache-usage-by-clients'] = ['x','x','x','x','-','-','-','-'];
		docConfig.switcher.caseTbl['globe-service-usage'] = ['x','x','x','x','-','-','-','-'];
		docConfig.switcher.caseTbl['globe-caching-based-on-feature-boundaries'] = ['x','x','x','x','-','-','-','-'];
		docConfig.switcher.caseTbl['how-applications-access-and-use-the-image-service-cache'] = ['-','-','-','-','-','-','-','-'];
		docConfig.switcher.caseTbl['how-globe-caches-work'] = ['x','x','x','x','-','-','-','-'];
		docConfig.switcher.caseTbl['image-service-parameters'] = ['-','-','-','-','-','-','-','-'];
		docConfig.switcher.caseTbl['image-service-sharing-imagery-tips'] = ['-','-','-','-','-','-','-','-'];
		docConfig.switcher.caseTbl['key-concepts-for-image-services'] = ['-','-','-','-','-','-','-','-'];
		docConfig.switcher.caseTbl['mobile-data-services'] = ['x','x','x','x','-','-','-','-'];
		docConfig.switcher.caseTbl['preparing-image-services'] = ['-','-','-','-','-','-','-','-'];
		docConfig.switcher.caseTbl['publish-elevation-service'] = ['-','-','-','-','-','-','-','-'];
		docConfig.switcher.caseTbl['publishing-a-globe-service'] = ['x','x','x','x','-','-','-','-'];
		docConfig.switcher.caseTbl['publishing-image-services'] = ['-','-','-','-','-','-','-','-'];
		docConfig.switcher.caseTbl['server-side-raster-functions'] = ['-','-','-','-','-','-','-','-'];
		docConfig.switcher.caseTbl['setting-globe-service-properties'] = ['x','x','x','x','-','-','-','-'];
		docConfig.switcher.caseTbl['share-imagery-as-an-arcgis-online-tiled-map-service'] = ['-','-','-','-','-','-','-','-'];
		docConfig.switcher.caseTbl['tips-for-authoring-globe-services'] = ['x','x','x','x','-','-','-','-'];
		docConfig.switcher.caseTbl['tutorial-creating-a-cached-map-service'] = ['x','x','x','x','x','x','-','-'];
		docConfig.switcher.caseTbl['what-is-a-globe-service-'] = ['x','x','x','x','-','-','-','-'];
		docConfig.switcher.caseTbl['what-is-image-service-caching'] = ['-','-','-','-','-','-','-','-'];
		docConfig.switcher.caseTbl[''] = ['x','x','x','x','-','-','-','-'];*/
	}else if(currentURL.match(/(\/get-started\/)/)) {
		/*docConfig.switcher.caseTbl['arcgis-server-editions'] = ['x','x','x','x','-','-','-','-'];
		docConfig.switcher.caseTbl['publishing-image-service-on-linux'] = ['-','x','x','x','x','x'];
		docConfig.switcher.caseTbl['steps-to-get-arcgis-for-server-up-and-running'] = ['-','-','-','-','-','-','x','x'];*/
	}
}
