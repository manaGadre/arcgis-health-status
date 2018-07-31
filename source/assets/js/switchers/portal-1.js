if(!docConfig){
		var docConfig = {};
}
if(!docConfig.switcher){
	docConfig.switcher = {
		"basepaths": {
			"linux": "linux",
			"windows": "windows",
			"10.6" : "portal/latest/",
			"10.5" : "portal/10.5/",
			"10.4" : "portal/10.4/",
			"10.3" : "portal/10.3/"
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
			"changing-the-portal-for-arcgis-account": ['x','-','x','-','x','-','x','-'],
			"checking-portal-diagnostics": ['-','x','-','x','-','x','-','x'],
			"data-store-account": ['x','-','x','-','x','-','x','x'],
			"deploy-portal-on-aws": ['x','-','x','-','x','-','x','-'],
			"setting-up-your-portal-and-federated-server-to-use-windows-accounts": ['x','-','x','-','x','-','x','-'],
			"specifying-the-locale-of-the-portal-for-arcgis-account": ['x','-','x','-','x','-','x','-'],
			"the-portal-for-arcgis-account": ['x','-','x','-','x','-','x','-'],
			"using-integrated-windows-authentication-with-your-portal": ['x','-','x','-','x','-','x','-'],
			"using-windows-active-directory-and-pki-to-secure-access-to-your-portal": ['x','-','x','-','x','-','x','-'],
			"use-integrated-windows-authentication-with-your-portal": ['x','-','x','-','x','-','x','-'],

			// 10.3
			"add-premium-helper-services": ['x','x','x','x','x','x','-','-'],
			"about-the-system-publisher-account": ['x','x','x','x','x','x','-','-'],

			//10.4 only
			"tutorial-creating-your-first-web-gis-configuration": ['-','-','-','-','-','-','x','x'],
			"configure-security": ['-','-','-','-','-','-','about-securing-your-portal','about-securing-your-portal'],
			"configure-languages-returned-in-search-results": ['-','-','-','-','-','-','x','x'], "scan-your-portal-for-security-best-practices": ['-','-','-','-','-','-','x','x'], "restrict-portal-for-arcgis-ssl-protocols-and-cipher-suites": ['-','-','-','-','-','-','x','x'], "configure-arcgis-online-utility-services": ['-','-','-','-','-','-','x','x'], "configuring-the-domain-controller-used-by-portal-for-arcgis": ['-','-','-','-','-','-','x','x'], "configure-navigator-for-arcgis-licenses": ['-','-','-','-','-','-','x','x'], "configure-the-portal-to-support-navigator-for-arcgis": ['-','-','-','-','-','-','x','x'], "ports-used-by-arcgis-data-store": ['-','-','-','-','-','-','x','x'], "create-a-single-machine-portal": ['-','-','-','-','-','-','x','x'], "configure-the-portal-to-perform-analysis": ['-','-','-','-','-','-','x','x'], "create-a-single-machine-portal": ['-','-','-','-','-','-','x','x'], "configuring-the-domain-controller-used-by-portal-for-arcgis": ['x','-','x','-','x','x'], "choose-data-loss-downtime-prevention-method": ['-','-','-','-','-','-','x','x'], "overview-backup-restore-web-gis": ['-','-','-','-','-','-','x','x'], "create-web-gis-backup": ['-','-','-','-','-','-','x','x'], "restore-web-gis": ['-','-','-','-','-','-','x','x'], "overview-disaster-recovery-replication": ['-','-','-','-','-','-','x','x'], "configure-disaster-recovery": ['-','-','-','-','-','-','x','x'], "overview-high-availability": ['x','x','x','x','-','-','x','x'], "configure-highly-available-system": ['-','-','-','-','-','-','x','x'],

			//10.5 only
			"about-arcgis-server-licensing-roles": ['-','-','-','-','x','x','x','x'],
			"about-distributed-collaboration": ['-','-','-','-','x','x','x','x'],
			"about-portal-to-portal-collaboration": ['-','-','-','-','x','x','x','x'],
			"about-sharing-content-to-a-collaboration": ['-','-','-','-','x','x','x','x'],
			"about-sharing-feature-layer-data-as-copies": ['-','-','-','-','x','x','x','x'],
			"additional-server-deployment": ['-','-','-','-','x','x','x','x'],
			"arcgis-data-store-terms": ['-','-','-','-','x','x','x','x'],
			"arcgis-enterprise-builder": ['-','-','-','-','x','x','x','x'],
			"automate-replicated-deployment": ['-','-','-','-','x','x','x','x'],
			"base-arcgis-enterprise-deployment": ['-','-','-','-','x','x','x','x'],
			"collaborate-with-earlier-releases-of-arcgis-enterprise": ['-','-','-','-','x','x','x','x'],
			"common-questions-for-distributed-collaboration": ['-','-','-','-','x','x','x','x'],
			"configure-analysis-layers": ['-','-','-','-','x','x','x','x'],
			"configure-appstudio-licenses": ['-','-','-','-','x','x','x','x'],
			"configure-boundary-layers": ['-','-','-','-','x','x','x','x'],
			"configure-business-analyst-licenses": ['-','-','-','-','x','x','x','x'],
			"configure-drone2map-licenses": ['-','-','-','-','x','x','x','x'],
			"configure-geoplanner-licenses": ['-','-','-','-','x','x','x','x'],
			"configure-insights-licensing": ['-','-','-','-','x','x','x','x'],
			"configure-living-atlas-content": ['-','-','-','-','x','x','x','x'],
			"configure-my-stories": ['-','-','-','-','x','x','x','x'],
			"configure-okta": ['-','-','-','-','x','x','x','x'],
			"configure-roadway-reporter-licenses": ['-','-','-','-','x','x','x','x'],
			"configure-sync-settings": ['-','-','-','-','x','x','x','x'],
			"configure-the-portal-to-perform-raster-analysis": ['-','-','-','-','x','x','x','x'],
			"configure-the-portal-to-support-geoplanner-for-arcgis": ['-','-','-','-','x','x','x','x'],
			"configure-the-portal-to-support-insights-for-arcgis": ['-','-','-','-','x','x','x','x'],
			"configure-the-portal-with-arcgis-geoanalytics-server": ['-','-','-','-','x','x','x','x'],
			"create-a-collaboration": ['-','-','-','-','x','x','x','x'],
			"export-data-store": ['-','-','-','-','x','x','x','x'],
			"feature-analysis-tool-differences": ['-','-','-','-','x','x','x','x'],
			"geoanalytics-settings": ['-','-','-','-','x','x','x','x'],
			"ha-scenarios-web-gis": ['-','-','-','-','x','x','x','x'],
			"hosted-feature-layers": ['-','-','-','-','x','x','x','x'],
			"install-a-base-deployment": ['-','-','-','-','x','x','x','x'],
			"key-concepts": ['-','-','-','-','x','x','x','x'],
			"license-premium-apps": ['-','-','-','-','x','x','x','x'],
			"manage-collaborations": ['-','-','-','-','x','x','x','x'],
			"manage-collaborations-as-guest": ['-','-','-','-','x','x','x','x'],
			"plan-a-base-deployment": ['-','-','-','-','x','x','x','x'],
			"quick-exercise-analysis": ['-','-','-','-','x','x','x','x'],
			"schedule-the-synchronization-of-feature-layer-edits": ['-','-','-','-','x','x','x','x'],
			"scripting-and-automation-for-your-portal": ['-','-','-','-','x','x','x','x'],
			"scripting-with-the-arcgis-python-api": ['-','-','-','-','x','x','x','x'],
			"set-up-an-arcgis-enterprise-and-arcgis-online-collaboration": ['-','-','-','-','x','x','x','x'],
			"set-up-an-arcgis-enterprise-to-arcgis-enterprise-collaboration": ['-','-','-','-','x','x','x','x'],
			"share-content-with-collaboration-participants": ['-','-','-','-','x','x','x','x'],
			"share-feature-layers-from-an-enterprise-geodatabase": ['-','-','-','-','x','x','x','x'],
			"standard-and-big-data-feature-analysis-comparison": ['-','-','-','-','x','x','x','x'],
			"travel-modes": ['-','-','-','-','x','x','x','x'],
			"understanding-analysis-in-portal-for-arcgis": ['-','-','-','-','x','x','x','x'],
			"understanding-the-big-data-file-share-manifest": ['-','-','-','-','x','x','x','x'],
			"update-ads-ssl-certificate": ['-','-','-','-','x','x','x','x'],
			"use": ['-','-','-','-','x','x','x','x'],
			"use-the-configuration-wizard": ['-','-','-','-','x','x','x','x'],
			"what-is-a-big-data-file-share": ['-','-','-','-','x','x','x','x'],
			"what-is-arcgis-enterprise-": ['-','-','-','-','x','x','x','x'],
			"what-requires-arcgis-data-store": ['-','-','-','-','x','x','x','x'],
			"what-s-new-in-arcgis-enterprise": ['-','-','-','-','x','x','x','x'],
			"use-your-portal-with-ldap-and-portal-tier-authentication": ['-','-','-','-','x','x','x','x'],

		},

		"switcherdisplay": true,
	};
}

if(document.location.href.match(/(\/portal\/10.5\/use\/|\/portal\/10.4\/use\/|\/portal\/10.3\/use\/|\/portal\/latest\/use\/)/)){
	docConfig.switcher.switchercases = {
		"10.6": "10.6",
		"10.5": "10.5",
		"10.4": "10.4",
		"10.3": "10.3",

	},
	docConfig.switcher.caseTbl = {
			"__order": {
				"10.6": 1,
				"10.5": 2,
				"10.4": 3,
				"10.3": 4,
			},
			"get-started-with-apps": ['-', '-', '-', 'make-your-first-app'],
			"make-your-first-app": ['get-started-with-apps', 'get-started-with-apps', 'get-started-with-apps', '-'],
			"get-started-with-maps": ['-', '-', '-', 'make-your-first-map'],
			"make-your-first-map": ['get-started-with-maps', 'get-started-with-maps', 'get-started-with-maps', '-'],
			"get-started-with-scenes": ['-', '-', '-', 'make-your-first-scene'],
			"make-your-first-scene": ['get-started-with-scenes', 'get-started-with-scenes', 'get-started-with-scenes', '-'],
			"deploy-app-portal-obsolete": ['deploy-app', 'deploy-app', 'deploy-app', '-'],
			"deploy-app": ['-', '-', '-', 'deploy-app-portal-obsolete'],
			"chrome-twitter": ['x','x','x','-'],
			"classic-viewer": ['x','x','x','-'],
			"legend": ['x','x','x','-'],

			"publish-to-federated-servers": ['-','-','-', 'x'], "crowdsource-manager": ['-','-','-', 'x'], "crowdsource-polling": ['-','-','-', 'x'], "crowdsource-reporter": ['-','-','-', 'x'], "minimalist": ['-','-','-', 'x'], "best-practices-layers": ['-','-','-', 'x'], "perform-analysis": ['-','-','-', 'x'], "use-analysis-tools": ['-','-','-', 'x'], "find-existing-locations": ['-','-','-', 'x'], "derive-new-locations": ['-','-','-', 'x'], "find-hot-spots": ['-','-','-', 'x'], "find-similar-locations": ['-','-','-', 'x'], "plan-routes": ['-','-','-', 'x'], "extract-data": ['-','-','-', 'x'], "widget-analysis": ['-','-','-', 'x'], "widget-batch-attribute-editor": ['-','-','-', 'x'], "widget-image-measurement": ['-','-','-', 'x'], "widget-geolookup": ['-','-','-', 'x'], "widget-incident-analysis": ['-','-','-', 'x'], "widget-reviewer-dashboard": ['-','-','-', 'x'], "widget-search": ['-','-','-', 'x'], "widget-stream": ['-','-','-', 'x'], "widget-summary": ['-','-','-', 'x'], "widget-zoom-slider": ['-','-','-', 'x'], "widget-situation-awareness": ['-','-','-', 'x'], "widget-report-feature": ['-','-','-', 'x'], "choose-global-local-scene": ['-','-','-', 'x'], "update-vector-tile-style": ['-','-','-', 'x'], "work-with-fields": ['-','-','-', 'x'], "metadata": ['-','-','-', 'x'], "vector-tile-layers": ['-','-','-', 'x'], "feature-collections": ['-','-','-', 'x'],

			"open-content": ['x','x','-', '-'],

			//10.5 only
			"about-distributed-collaboration": ['-','-','x','x'],
			"about-portal-to-portal-collaboration": ['-','-','x','x'],
			"about-sharing-content-to-a-collaboration": ['-','-','x','x'],
			"about-sharing-feature-layer-data-as-copies": ['-','-','x','x'],
			"add-custom-widgets": ['-','-','x','x'],
			"add-living-atlas-layers": ['-','-','x','x'],
			"aggregate-points": ['-','-','x','x'],
			"analysis": ['-','-','x','x'],
			"analyze-data": ['-','-','x','x'],
			"analyze-living-atlas-layers": ['-','-','x','x'],
			"browse-gallery-for-living-atlas-content": ['-','-','x','x'],
			"calculate-density": ['-','-','x','x'],
			"choose-best-facilities": ['-','-','x','x'],
			"classify-your-analysis": ['-','-','x','x'],
			"common-questions-for-distributed-collaboration": ['-','-','x','x'],
			"compare-scenes": ['-','-','x','x'],
			"connect-origins-to-destinations": ['-','-','x','x'],
			"create-a-mosaic-dataset": ['-','-','x','x'],
			"create-a-template-in-portal": ['-','-','x','x'],
			"create-buffers": ['-','-','x','x'],
			"create-drive-time-areas": ['-','-','x','x'],
			"create-features": ['-','-','x','x'],
			"create-open-edit-or-delete-a-geodesign-project": ['-','-','x','x'],
			"create-open-edit-or-delete-a-scenario": ['-','-','x','x'],
			"create-presentation-map": ['-','-','x','x'],
			"create-viewshed": ['-','-','x','x'],
			"create-watersheds": ['-','-','x','x'],
			"design-tools": ['-','-','x','x'],
			"discover-data": ['-','-','x','x'],
			"dissolve-boundaries": ['-','-','x','x'],
			"edit-big-data-file-share-manifests-in-manager": ['-','-','x','x'],
			"edit-features-geoplanner": ['-','-','x','x'],
			"enable-editing-of-a-feature-service": ['-','-','x','x'],
			"enrich-layer": ['-','-','x','x'],
			"evaluate-in-3d": ['-','-','x','x'],
			"feature-analysis-tool-differences": ['-','-','x','x'],
			"find-nearest": ['-','-','x','x'],
			"find-outliers": ['-','-','x','x'],
			"geoanalytics-buffer-expressions": ['-','-','x','x'],
			"geoanalytics-create-buffers": ['-','-','x','x'],
			"geoanalytics-join-features": ['-','-','x','x'],
			"geoanalytics-reconstruct-tracks": ['-','-','x','x'],
			"geoanalytics-summarize-attributes": ['-','-','x','x'],
			"geoanalytics-summarize-within": ['-','-','x','x'],
			"geoanalytics-troubleshooting": ['-','-','x','x'],
			"geoanalytics-use-the-analysis-tools": ['-','-','x','x'],
			"geoanalytics-tutorial-running-a-geoanalytics-tool": ['-','-','x','x'],
			"geoanalyticstool-aggregatepoints": ['-','-','x','x'],
			"geoanalyticstool-useenvironmentsettings": ['-','-','x','x'],
			"geocode-locations-from-table": ['-','-','x','x'],
			"get-started-with-groups": ['-','-','x','x'],
			"get-started-with-sharing": ['-','-','-','share-maps-apps'],
			"hosted-feature-layers": ['-','-','x','x'],
			"import-a-dashboard": ['-','-','x','x'],
			"import-features-into-a-scenario": ['-','-','x','x'],
			"interpolate-points": ['-','-','x','x'],
			"invite-or-delete-a-project-member": ['-','-','x','x'],
			"join-features": ['-','-','x','x'],
			"kpi-report": ['-','-','x','x'],
			"layers": ['-','-','x','x'],
			"living-atlas-content-life-cycles": ['-','-','x','x'],
			"make-your-first-group": ['-','-','x','x'],
			"manage-hosted-feature-layers": ['-','-','x','x'],
			"manage-hosted-tile-layers": ['-','-','x','x'],
			"merge-layers":  ['-','-','x','x'],
			"modeler-portal-": ['-','-','x','x'],
			"my-stories": ['-','-','x','x'],
			"open-the-project-folder-on-arcgis-online": ['-','-','x','x'],
			"overlay-layers": ['-','-','x','x'],
			"perform-batch-geocoding": ['-','-', 'x', 'x'],
			"perform-big-data-analysis": ['-','-','x','x'],
			"perform-raster-analysis": ['-','-','x','x'],
			"prepare-your-data": ['-','-','x','x'],
			"print-map": ['-','-','x','x'],
			"publish-imagery-layers": ['-','-','x','x'],
			"publish-vector-tiles": ['-','-','x','x'],
			"publish-wfs": ['-','-','x','x'],
			"publish-your-data-as-a-weighted-overlay-service-portal-": ['-','-','x','x'],
			"register-document": ['-','-','x','x'],
			"remove-data-from-project-map": ['-','-','x','x'],
			"review-addresses": ['-','-','-','x'],
			"scenario-consensus": ['-','-','x','x'],
			"scene-layers": ['-','-','x','x'],
			"schedule-the-synchronization-of-feature-layer-edits": ['-','-','x','x'],
			"scripting-and-automation-for-your-portal": ['-','-','x','x'],
			"scripting-portal-for-arcgis-administration": ['-','-','x','x'],
			"scripting-with-the-arcgis-python-api": ['-','-','x','x'],
			"search-locations": ['-','-','x','x'],
			"setting-chart-view-on-dashboard": ['-','-','x','x'],
			"setting-gauge-view-on-dashboard": ['-','-','x','x'],
			"share-a-dashboad": ['-','-','x','x'],
			"share-apps": ['-','-','x','x'],
			"share-content-with-collaboration-participants": ['-','-','x','x'],
			"share-feature-layers-from-an-enterprise-geodatabase": ['-','-','x','x'],
			"share-maps-apps": ['get-started-with-sharing', 'get-started-with-sharing', 'get-started-with-sharing', '-'],
			"share-operational-layers": ['-','-','x','x'],
			"share-scenes": ['-','-','x','x'],
			"sharing-and-collaboration": ['-','-','x','x'],
			"side-by-side-comparison-of-scenarios": ['-','-','x','x'],
			"sign-in-portal": ['-','-','x','x'],
			"simple-scene-viewer": ['-','-','x','x'],
			"standard-and-big-data-feature-analysis-comparison": ['-','-','x','x'],
			"summarize-nearby": ['-','-','x','x'],
			"summarize-within": ['-','-','x','x'],
			"swipe-a-layer": ['-','-','x','x'],
			"three-d-data-visualization": ['-','-','x','x'],
			"trace-downstream": ['-','-','x','x'],
			"tutorial-running-a-big-data-tool": ['-','-','x','x'],
			"understanding-analysis-in-portal-for-arcgis": ['-','-','x','x'],
			"understanding-the-big-data-file-share-manifest": ['-','-','x','x'],
			"understanding-the-hints-file": ['-','-','x','x'],
			"use-url-parameters": ['-','-','x','x'],
			"use-your-data-in-weighted-overlay-portal-": ['-','-','x','x'],
			"use-your-data-portal-": ['-','-','x','x'],
			"what-is-a-big-data-file-share": ['-','-','x','x'],
			"what-is-a-dashboard-new-": ['-','-','x','x'],
			"what-is-a-geodesign-project": ['-','-','x','x'],
			"what-is-evaluation": ['-','-','x','x'],
			"what-is-web-scene": ['-','-','x','x'],
			"widget-3dfx-3d": ['-','-','x','x'],
			"widget-about-3d": ['-','-','x','x'],
			"widget-add-data": ['-','-','x','x'],
			"widget-compass-3d": ['-','-','x','x'],
			"widget-coordinate-3d": ['-','-','x','x'],
			"widget-district-lookup": ['-','-','x','x'],
			"widget-environment-3d": ['-','-','x','x'],
			"widget-extent-navigate": ['-','-','x','x'],
			"widget-filter": ['-','-','x','x'],
			"widget-full-screen-3d": ['-','-','x','x'],
			"widget-group-filter": ['-','-','x','x'],
			"widget-home-3d": ['-','-','x','x'],
			"widget-info-summary": ['-','-','x','x'],
			"widget-layer-list-3d": ['-','-','x','x'],
			"widget-legend-3d": ['-','-','x','x'],
			"widget-my-location-3d": ['-','-','x','x'],
			"widget-navigate-3d": ['-','-','x','x'],
			"widget-near-me": ['-','-','x','x'],
			"widget-oblique-viewer": ['-','-','x','x'],
			"widget-related-table-charts": ['-','-','x','x'],
			"widget-search-3d": ['-','-','x','x'],
			"widget-select": ['-','-','x','x'],
			"widget-share": ['-','-','x','x'],
			"widget-slides-3d": ['-','-','x','x'],
			"widget-smart-editor": ['-','-','x','x'],
			"widget-splash-3d": ['-','-','x','x'],
			"widget-zoom-slider-3d": ['-','-','x','x'],
			"work-with-tables": ['-','-','x','x'],
			"zoom-to-project-extent": ['-','-','x','x'],

		} ;
}
