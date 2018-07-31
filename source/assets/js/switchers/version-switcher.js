if (!docConfig) {
  var docConfig = {};
}

if (!docConfig.switcher) {
  docConfig.switcher = {
    "basepaths": {
      "linux": "linux",
      "windows": "windows",
      "10.6": "server/latest/",
      "10.5": "server/10.5/",
      "10.4": "server/10.4/",
      "10.3": "server/10.3/"
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
      "test": ['-', 'test-differentFilename'],
      "test2": ['x', '-'],
    },

    "switcherdisplay": true,
  };
}
var currentURL = document.location.href;
if (currentURL.match(/(\/enterprise\/.*\/install\/)/)) {
  docConfig.switcher.basepaths["10.5"] = "enterprise/10.5/install/";
  docConfig.switcher.basepaths["10.6"] = "enterprise/latest/install/";
  docConfig.switcher.caseTbl = {
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
    /*"arcgis-enterprise-builder": ['-','-','-','-','x','x','x','x'],
    "arcgis-enterprise-builder-system-req": ['-','-','-','-','x','x','x','x'],
    "check-for-software-patches-and-updates": ['-','-','-','-','x','x','x','x'],
    "common-problems-and-solutions": ['-','-','-','-','x','x','x','x'],
    "copyright-information": ['-','-','-','-','x','x','x','x'],*/
    "install-arcgis-enterprise-builder-on-one-machine": ['-', 'install-arcgis-enterprise-web-gis-on-one-machine', '-', 'install-arcgis-enterprise-web-gis-on-one-machine', 'x', 'x', 'x', 'x'],
    "install-arcgis-enterprise-web-gis-on-one-machine": ['install-arcgis-enterprise-builder-on-one-machine', '-', 'install-arcgis-enterprise-builder-on-one-machine', '-', 'x', 'x', 'x', 'x'],
    "installing-arcgis-enterprise-builder-silently": ['-', 'installing-arcgis-enterprise-web-gis-silently', '-', 'installing-arcgis-enterprise-web-gis-silently', 'x', 'x', 'x', 'x'],
    "installing-arcgis-enterprise-web-gis-silently": ['installing-arcgis-enterprise-builder-silently', '-', 'installing-arcgis-enterprise-builder-silently', '-', 'x', 'x', 'x', 'x'],
    /*"obtaining-an-authorization-file": ['-','-','-','-','x','x','x','x'],
    "plan-a-base-deployment": ['-','-','-','-','x','x','x','x'],
    "ports-used-by-arcgis-data-store": ['-','-','-','-','x','x','x','x'],
    "ports-used-by-arcgis-server": ['-','-','-','-','x','x','x','x'],
    "ports-used-by-portal-for-arcgis": ['-','-','-','-','x','x','x','x'],
    "reusable-questions-and-feedback": ['-','-','-','-','x','x','x','x'],
    "steps-to-get-up-and-running": ['-','-','-','-','x','x','x','x'],*/
    "uninstalling-arcgis-enterprise-builder": ['-', 'uninstalling-arcgis-enterprise-web-gis', '-', 'uninstalling-arcgis-enterprise-web-gis', 'x', 'x', 'x', 'x'],
    "uninstalling-arcgis-enterprise-web-gis": ['uninstalling-arcgis-enterprise-builder', '-', 'uninstalling-arcgis-enterprise-builder', '-', 'x', 'x', 'x', 'x'],
    //"use-the-configuration-wizard": ['-','-','-','-','x','x','x','x'],
    "welcome-to-the-arcgis-enterprise-builder-installation-guide": ['-', 'welcome-to-the-arcgis-enterprise-web-gis-install-guide', '-', 'welcome-to-the-arcgis-enterprise-web-gis-install-guide', 'x', 'x', 'x', 'x'],
    "welcome-to-the-arcgis-enterprise-web-gis-install-guide": ['welcome-to-the-arcgis-enterprise-builder-installation-guide', '-', 'welcome-to-the-arcgis-enterprise-builder-installation-guide', '-', 'x', 'x', 'x', 'x'],
  };
} else if (currentURL.match(/(\/documentation\/install\/more\/.*\/)/)) {
  docConfig.switcher = {
    "basepaths": {
      "linux": "linux",
      "windows": "windows",
      "all": "",
      "10.6": "documentation/install/more/latest",
      "10.5": "documentation/install/more/10.5",
      "10.4": "documentation/install/more/10.4",
      "10.3": "documentation/install/more/10.3"
    },

    "switchercases": {
      "10.6~": "10.6",
      "10.6~linux": "Linux",
      "10.6~windows": "Windows",
      "10.5~": "10.5",
      "10.5~linux": "Linux",
      "10.5~windows": "Windows",
      "10.4~": "10.4",
      "10.4~all": "All",
      "10.3~": "10.3",
      "10.3~all": "All",
    },

    "caseTbl": {
      "__order": {
        "10.6~linux": 1,
        "10.5~linux": 2,
        "10.5~windows": 3,
        "10.4~all": 4,
        "10.3~all": 5,
      },
    },

    "switcherdisplay": true,
  };
}else if(window.location.pathname.split("/").length > 1 && window.location.pathname.split("/")[2] == 'get-started'){
  docConfig.switcher = {
    "basepaths": {
      "linux": "linux",
      "windows": "windows",
      "10.6": "get-started/latest",
      "10.5": "get-started/10.5",
      "10.4": "get-started/10.4",
      "10.3": "get-started/10.3"
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
      "10.3~windows": "Windows",
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
        "10.3~windows": 8,
      },
    },

    "switcherdisplay": true,
  };
}
//if (currentURL.match(/(\/portal\/latest\/use\/|\/portal\/10.5\/use\/|\/portal\/10.3\/use\/|\/cloud\/main\/|\/cloud\/amazon\/|\/install\/database-server\/|\/install\/data-reviewer\/|\/install\/mapping-charting-solution\/|\/install\/roads-highways\/|\/install\/workflow-manager\/|\/install\/more\/|\/inspire\/)/)) {
if (currentURL.match(/(\/install\/more\/10\.\d\/|\/cloud\/main\/|\/cloud\/amazon\/|\/install\/database-server\/|\/install\/data-reviewer\/|\/install\/mapping-charting-solution\/|\/install\/roads-highways\/|\/install\/workflow-manager\/|\/inspire\/|\/install\/location-referencing\/)/)) {
  docConfig.switcher.switchercases = {
    "10.6": "10.6",
    "10.5": "10.5",
    "10.4": "10.4",
    "10.3": "10.3"
  };

  if (currentURL.match(/(\/install\/database-server\/)/)) {
    docConfig.switcher.basepaths["10.6"] = "documentation/install/database-server/latest";
    docConfig.switcher.basepaths["10.5"] = "documentation/install/database-server/10.5";
    docConfig.switcher.basepaths["10.4"] = "documentation/install/database-server/10.4";
    docConfig.switcher.basepaths["10.3"] = "documentation/install/database-server/10.3";
  } else if (currentURL.match(/(\/install\/data-reviewer\/)/)) {
    docConfig.switcher.basepaths["10.6"] = "documentation/install/data-reviewer/latest";
    docConfig.switcher.basepaths["10.5"] = "documentation/install/data-reviewer/10.5";
    docConfig.switcher.basepaths["10.4"] = "documentation/install/data-reviewer/10.4";
    docConfig.switcher.basepaths["10.3"] = "documentation/install/data-reviewer/10.3";
    docConfig.switcher.caseTbl = {
      "__order": {
        "10.6": 1,
        "10.5": 2,
        "10.4": 3,
        "10.3": 4,
      },
      "silentinstall": ['silent-install', 'silent-install', 'silent-install', '-'],
      "silent-install": ['-', '-', '-', 'silentinstall'],
      "reusable-questions-and-feedback": ['questions-and-feedback', 'questions-and-feedback', 'questions-and-feedback', '-'],
      "questions-and-feedback": ['-', '-', '-', 'reusable-questions-and-feedback'],
    }
  } else if (currentURL.match(/(\/install\/mapping-charting-solution\/)/)) {
    docConfig.switcher.basepaths["10.6"] = "documentation/install/mapping-charting-solution/latest";
    docConfig.switcher.basepaths["10.5"] = "documentation/install/mapping-charting-solution/10.5";
    docConfig.switcher.basepaths["10.4"] = "documentation/install/mapping-charting-solution/10.4";
    docConfig.switcher.basepaths["10.3"] = "documentation/install/mapping-charting-solution/10.3";
    docConfig.switcher.caseTbl = {
      "__order": {
        "10.6": 1,
        "10.5": 2,
        "10.4": 3,
        "10.3": 4,
      },
      "upgrading-10-3-1-mapping-and-charting-solutions-with-maritime-installed": ['x', 'x', 'x', '-'],
    }
  } else if (currentURL.match(/(\/install\/roads-highways\/|\/install\/location-referencing\/)/)) {
    docConfig.switcher.basepaths["10.6"] = "documentation/install/location-referencing/latest";
    docConfig.switcher.basepaths["10.5"] = "documentation/install/location-referencing/10.5";
    docConfig.switcher.basepaths["10.4"] = "documentation/install/roads-highways/10.4";
    docConfig.switcher.basepaths["10.3"] = "documentation/install/roads-highways/10.3";
    docConfig.switcher.caseTbl = {
      "__order": {
        "10.6": 1,
        "10.5": 2,
        "10.4": 3,
        "10.3": 4,
      },
      "authorizing-the-software": ['-', '-', '-', 'obtaining-authorization-file'],
      "obtaining-authorization-file": ['authorizing-the-software', 'authorizing-the-software', 'authorizing-the-software', '-'],
      "adding-or-removing-features": ['-', '-', 'adding-additional-features', 'adding-additional-features'],
      "adding-additional-features": ['adding-or-removing-features', 'adding-or-removing-features', '-', '-'],
      //"existing-esri-roads-and-highways-for-server-users": ['-', '-', '-', '-'],
      "installing-location-referencing": ['-', '-', 'installing-roads-and-highways-for-server', 'installing-roads-and-highways-for-server'],
      "installing-roads-and-highways-for-server": ['installing-location-referencing', 'installing-location-referencing', '-', '-'],
      "installing-location-referencing-silently": ['-', '-', 'installing-esri-roads-and-highways-for-server-silently', 'installing-esri-roads-and-highways-for-server-silently'],
      "installing-esri-roads-and-highways-for-server-silently": ['installing-location-referencing-silently', 'installing-location-referencing-silently', '-', '-'],
      "uninstalling-location-referencing-for-server": ['-', '-', 'uninstalling-esri-roads-and-highways-for-server', 'uninstalling-esri-roads-and-highways-for-server'],
      "uninstalling-esri-roads-and-highways-for-server": ['uninstalling-location-referencing-for-server','uninstalling-location-referencing-for-server', '-', '-'],
      "reusable-questions-and-feedback": ['-', '-', 'questions-feedback-and-information', 'questions-feedback-and-information'],
      "questions-feedback-and-information": ['reusable-questions-and-feedback', 'reusable-questions-and-feedback', '-', '-'],
      "arcgis-location-referencing-system-requirements": ['-', '-', 'esri-roads-and-highways-for-server-system-requirements', 'esri-roads-and-highways-for-server-system-requirements'],
      "esri-roads-and-highways-for-server-system-requirements": ['arcgis-location-referencing-system-requirements', 'arcgis-location-referencing-system-requirements', '-', '-'],
      "welcome-to-the-location-referencing-for-server-installation-guide": ['-', '-', 'welcome-to-the-esri-roads-and-highways-for-server-install-guide', 'welcome-to-the-esri-roads-and-highways-for-server-install-guide'],
      "welcome-to-the-esri-roads-and-highways-for-server-install-guide": ['welcome-to-the-location-referencing-for-server-installation-guide', 'welcome-to-the-location-referencing-for-server-installation-guide', '-', '-'],
      //"introduction-to-esri-roads-and-highways-server-install-guide": ['welcome-to-the-location-referencing-for-server-installation-guide', 'welcome-to-the-location-referencing-for-server-installation-guide', 'welcome-to-the-esri-roads-and-highways-for-server-install-guide', 'welcome-to-the-esri-roads-and-highways-for-server-install-guide'],
      //"uninstalling-esri-roads-and-highways-for-server-silently": ['x', 'x', '-', '-'],
    }
  } else if (currentURL.match(/(\/install\/workflow-manager\/)/)) {
    docConfig.switcher.basepaths["10.6"] = "documentation/install/workflow-manager/latest";
    docConfig.switcher.basepaths["10.5"] = "documentation/install/workflow-manager/10.5";
    docConfig.switcher.basepaths["10.4"] = "documentation/install/workflow-manager/10.4";
    docConfig.switcher.basepaths["10.3"] = "documentation/install/workflow-manager/10.3";
  } else if (currentURL.match(/(\/install\/more\/)/)) {
    docConfig.switcher.basepaths["10.6"] = "documentation/install/more/latest/windows";
    docConfig.switcher.basepaths["10.5"] = "documentation/install/more/10.5/windows";
    docConfig.switcher.basepaths["10.4"] = "documentation/install/more/10.4";
    docConfig.switcher.basepaths["10.3"] = "documentation/install/more/10.3";
  } else if (currentURL.match(/(\/inspire\/)/)) {
    docConfig.switcher.basepaths["10.6"] = "inspire/latest";
    docConfig.switcher.basepaths["10.5"] = "inspire/10.5";
    docConfig.switcher.basepaths["10.4"] = "inspire/10.4";
    docConfig.switcher.basepaths["10.3"] = "inspire/10.3";
    docConfig.switcher.caseTbl = {
      "__order": {
        "10.6": 1,
        "10.5": 2,
        "10.4": 3,
        "10.3": 4,
      },
      /*"release-notes-10-2-1-for-inspire": ['x', 'x', 'x', '-'],
      "release-notes-10-1-sp1-for-inspire": ['x', 'x', 'x', '-'],
      "release-notes-10-1-for-inspire": ['x', 'x', 'x', '-']*/
    }
  }
}else if (currentURL.match(/(\/workflow-manager\/)/)) {
  if (currentURL.match(/(\/help\/)/)) {
    docConfig.switcher.switchercases = {
      "10.6": "10.6",
      "10.5": "10.5",
    };
    docConfig.switcher.basepaths["10.6"] = "workflow-manager/latest";
    docConfig.switcher.basepaths["10.5"] = "workflow-manager/10.5";

    docConfig.switcher.caseTbl = {
      "__order": {
        "10.6": 1,
        "10.5": 2,
      },
    };
  }
}else if (currentURL.match(/(\/system-requirements\/)/)) {
  docConfig.switcher = {
    "basepaths": {
      "linux": "linux",
      "windows": "windows",
      "10.6": "system-requirements/latest",
      "10.5": "system-requirements/10.5",
      "10.4": "system-requirements/10.4",
      "10.3": "system-requirements/10.3"
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
      "10.3~windows": "Windows",
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
        "10.3~windows": 8,
      },
    },

    "switcherdisplay": true,
  };
}else if (currentURL.match(/(\/pipeline-referencing\/)/)) {
  if (currentURL.match(/(\/get-started\/|\/event-editor\/)/)) {
    docConfig.switcher.switchercases = {
      "10.6": "10.6",
      "10.5": "10.5",
    };
    docConfig.switcher.basepaths["10.6"] = "pipeline-referencing/latest";
    docConfig.switcher.basepaths["10.5"] = "pipeline-referencing/10.5";

    docConfig.switcher.caseTbl = {
      "__order": {
        "10.6": 1,
        "10.5": 2,
      },
    };
  }
}else if (currentURL.match(/(\/roads-highways\/)/)) {
  if (currentURL.match(/(\/get-started\/|\/event-editor\/|\/roadway-reporter\/)/)) {
    docConfig.switcher.switchercases = {
      "10.6": "10.6",
      "10.5": "10.5",
    };
    docConfig.switcher.basepaths["10.6"] = "roads-highways/latest";
    docConfig.switcher.basepaths["10.5"] = "roads-highways/10.5";

    docConfig.switcher.caseTbl = {
      "__order": {
        "10.6": 1,
        "10.5": 2,
      },
    };
  }
}else if (currentURL.match(/(\/geoevent\/)/)) {
  if (currentURL.match(/(\/get-started\/|\/process-event-data\/|\/administer\/)/)) {
    docConfig.switcher.switchercases = {
      "10.6": "10.6",
      "10.5": "10.5",
      "10.4": "10.4",
      "10.3": "10.3"
    };
    docConfig.switcher.basepaths["10.6"] = "geoevent/latest";
    docConfig.switcher.basepaths["10.5"] = "geoevent/10.5";
    docConfig.switcher.basepaths["10.4"] = "geoevent/10.4";
    docConfig.switcher.basepaths["10.3"] = "geoevent/10.3";

    docConfig.switcher.caseTbl = {
      "__order": {
        "10.6": 1,
        "10.5": 2,
        "10.4": 3,
        "10.3": 4,
      },
      /*"managing-big-data-stores": ['-', '-', '-', 'x'],
      "ports-used-by-geoevent": ['-', '-', 'x', 'x'],
      "geoevent-logger": ['-', '-','x','x'],
      "geoevent-simulator": ['-', '-', 'x', 'x'],
      "managing-global-settings": ['-', '-', 'x', 'x'],
      "simulating-and-logging-data-in-geoevent-server": ['-', '-', 'x', 'x'],*/
    };
  }
} else if (currentURL.match(/(\/data-reviewer\/)/)) {
  docConfig.switcher.basepaths["10.6"] = "data-reviewer/latest";
  docConfig.switcher.basepaths["10.5"] = "data-reviewer/10.5";
  docConfig.switcher.basepaths["10.4"] = "data-reviewer/10.4";
  docConfig.switcher.switchercases = {
    "10.6": "10.6",
    "10.5": "10.5",
    "10.4": "10.4",
  };

  docConfig.switcher.caseTbl = {
    "__order": {
      "10.6": 1,
      "10.5": 2,
      "10.4": 3,
    },
    //"upgrade-your-existing-scheduler-database": ['-', '-', 'x'],
    //"using-arcgis-data-reviewer-in-a-federated-arcgis-server-site": ['-', '-', 'x']
  };
} else if (currentURL.match(/(\/monitor\/)/)) {
  docConfig.switcher.basepaths["10.6"] = "monitor/latest";
  docConfig.switcher.switchercases = {
    "10.6": "10.6",
  };

  docConfig.switcher.caseTbl = {
    "__order": {
      "10.6": 1,
    },
  };
}

if (currentURL.match(/\/insights\/.*\/administer|\/insights\/.*\/use/)) {
  docConfig.switcher.basepaths = {
    "linux": "linux",
    "windows": "windows",
    "2.1": "insights/latest/",
    "1.2.1": "insights/1.2/",
  };
  if (currentURL.match(/(\/1\.2\/)/)) {
    var customVersionLabel = "1.2.1"
  } else {
    var customVersionLabel = "2.1"
  }
  var customVersionName = 'Insights'
  if (currentURL.match(/\/insights\/.*\/administer/)) {
    docConfig.switcher.switchercases = {
      "2.1~": "2.1",
      "2.1~linux": "Linux",
      "2.1~windows": "Windows",
      "1.2.1~": "1.2.1",
      "1.2.1~linux": "Linux",
      "1.2.1~windows": "Windows",

    };

    docConfig.switcher.caseTbl = {
      "__order": {
        "2.1~linux": 1,
        "2.1~windows": 2,
        "1.2.1~linux": 3,
        "1.2.1~windows": 4,
      },
      //"configure-insights": ['-', '-', 'x', 'x'],
      "install-insights-windows": ['install-insights-linux', '-', 'install-insights-linux', '-'],
      "install-insights-linux": ['-', 'install-insights-windows', '-', 'install-insights-windows'],

    };
  } else if (currentURL.match(/\/insights\/.*\/use/)) {
    docConfig.switcher.switchercases = {
      "2.1": "2.1",
      "1.2.1": "1.2.1",
    };

    docConfig.switcher.caseTbl = {
      "__order": {
        "2.1": 1,
        "1.2.1": 2,
      },
      /*"bar-chart": ['-', 'x'],
      "box-plot": ['-', 'x'],
      "bubble-chart": ['-', 'x'],
      "calculate-density": ['-', 'x'],
      "chord-diagram": ['-', 'x'],
      "column-chart": ['-', 'x'],
      "combo-chart": ['-', 'x'],
      "create-buffer-drive-times": ['-', 'x'],
      "database-data-caching": ['-', 'x'],
      "data-clock": ['-', 'x'],
      "donut-chart": ['-', 'x'],
      "enrich-data": ['-', 'x'],
      "faq": ['-', 'x'],
      "find-nearest": ['-', 'x'],
      "heat-chart": ['-', 'x'],
      "histogram": ['-', 'x'],
      "line-graph": ['-', 'x'],
      "scatter-plot": ['-', 'x'],
      "spatial-aggregation": ['-', 'x'],
      "spatial-filter": ['-', 'x'],
      "time-series": ['-', 'x'],
      "treemap": ['-', 'x'],
      "use-shared-workbooks": ['-', 'x'],
      "quick-exercise-share-analysis": ['-', 'x'],
      "get-started-with-workbooks": ['-', 'x'],
      "get-started": ['-', 'x'],
      "get-started-with-analysis": ['-', 'x'],
      "get-started-with-sharing": ['-', 'x'],
      "get-started-with-drag-and-drop": ['-', 'x'],
      "geoanalytics-server-support": ['-', 'x'],*/
    };
  }
}
if (currentURL.match(/(\/cloud\/azure\/|\/cloud\/amazon\/)/)) {
  docConfig.switcher.switchercases = {
    "10.6": "10.6",
    "10.5": "10.5",
    "10.4": "10.4",
    "10.3": "10.3.1"
  };
  docConfig.switcher.caseTbl = {
    "__order": {
      "10.6": 1,
      "10.5": 2,
      "10.4": 3,
      "10.3": 4,
    },
    /*"create-custom-images": ['x', 'x', 'x', '-'],

    "use-arcgis-server-on-aws-site": ['x', 'x', '-', '-'], "amazon-cloud-watch": ['x', 'x', '-', '-'],

    "acknowlegements": ['-', '-', '-', 'x'], "apply-updates-to-single-machine-web-gis": ['-', '-', '-', 'x'], "delete-azure-site": ['-', '-', '-', 'x'], "whats-new-arcgis-server-on-azure": ['-', '-', '-', 'x'], "arcgis-updates-and-microsoft-azure": ['-', '-', '-', 'x'], "aws-marketplace-accept-terms": ['-', '-', '-', 'x'], "whats-new-for-server-on-aws": ['-', '-', '-', 'x'], "work-with-ebs-volumes": ['-', '-', '-', 'x'], "troubleshoot-cloudformation": ['-', '-', '-', 'x'],

    "manage-azure-machines": ['-', '-', 'x', 'x'], "add-remove-arcgis-server-machine-azure": ['-', '-', 'x', 'x'], "set-cloud-builder-defaults": ['-', '-', 'x', 'x'], "apply-updates-to-multimachine-web-gis": ['-', '-', 'x', 'x'], "comingsoon": ['-', '-', 'x', 'x'], "configure-shared-configuration-store": ['-', '-', 'x', 'x'], "configure-web-gis-with-shared-content-dir": ['-', '-', 'x', 'x'], "add-server-role": ['-', '-', 'x', 'x'], "understand-arcgis-components": ['-', '-', 'x', 'x'], "add-spatiotemporal": ['-', '-', 'x', 'x'], "functionality-geodatabase-azure-sql-database": ['-', '-', 'x', 'x'], "database-requirements-azure-sql-database": ['-', '-', 'x', 'x'],*/
  };
  if (currentURL.match(/(\/10\.3\/)/)) {
    var customVersionLabel = "10.3.1"
  }

}
if (currentURL.match(/(\/nl\/|\/zh-hk\/|\/zh-tw\/|\/ar\/|\/it\/|\/ko\/|\/pl\/|\/pt-br\/|\/ro\/)/)) {
  var hidePortalVersions = true;
} else var hidePortalVersions = false;
//Remove 10.3, 10.4 switcher options for Portal in certain languages
if (hidePortalVersions) {
  var delSwitchers = ["10.3", "10.3~", "10.3~linux", "10.3~windows", "10.3~iis", "10.3~java-windows", "10.3~java-linux", "10.4", "10.4~", "10.4~linux", "10.4~windows", "10.4~iis", "10.4~java-windows", "10.4~java-linux"];
  for (i in delSwitchers) {
    if (delSwitchers[i] in docConfig.switcher.switchercases) {
      delete docConfig.switcher.switchercases[delSwitchers[i]];
    }
  }
}

/*if(currentURL.match(/(\/en\/)/)) {
    var english = true;
}else var english = false;
var english = true;
//Remove 10.6 switcher option for non-English server pages
if(!english){
    var delSwitchers = ["10.6", "10.6~", "10.6~linux", "10.6~windows", "10.6~iis", "10.6~java-windows", "10.6~java-linux"];
    for(i in delSwitchers){
        if(delSwitchers[i] in docConfig.switcher.switchercases){
            delete docConfig.switcher.switchercases[delSwitchers[i]];
        }
    }
    for(i in docConfig.switcher.basepaths){
        docConfig.switcher.basepaths[i] = docConfig.switcher.basepaths[i].replace("10.5", "latest");
    }
}*/

$.whenAll = function(firstParam) {
  var args = arguments,
    sliceDeferred = [].slice,
    i = 0,
    length = args.length,
    count = length,
    rejected,
    deferred = length <= 1 && firstParam && jQuery.isFunction(firstParam.promise) ?
    firstParam :
    jQuery.Deferred();

  function resolveFunc(i, reject) {
    return function(value) {
      rejected |= reject;
      args[i] = arguments.length > 1 ? sliceDeferred.call(arguments, 0) : value;
      if (!(--count)) {
        // Strange bug in FF4:
        // Values changed onto the arguments object sometimes end up as undefined values
        // outside the $.when method. Cloning the object into a fresh array solves the issue
        var fn = rejected ? deferred.rejectWith : deferred.resolveWith;
        fn.call(deferred, deferred, sliceDeferred.call(args, 0));
      }
    };
  }

  if (length > 1) {
    for (; i < length; i++) {
      if (args[i] && jQuery.isFunction(args[i].promise)) {
        args[i].promise().then(resolveFunc(i), resolveFunc(i, true));
      } else {
        --count;
      }
    }
    if (!count) {
      deferred.resolveWith(deferred, args);
    }
  } else if (deferred !== firstParam) {
    deferred.resolveWith(deferred, length ? [firstParam] : []);
  }
  return deferred.promise();
};

jQuery(document).ready(function($) {
  /*if(!docConfig || !docConfig.switcher){
		return false;
	}*/

  // Temporary condition. Once l10n content is ready for 10.4 we can remove this condition
  /*if(docConfig['localedir'] && docConfig['localedir'] != "en"){
		return;
	}*/

  //exclude version switcher for following pattern.
  if (currentURL.match(/(\/streetmap-premium\/|\/monitor\/)/)) {
    return;
  }

  if (!doc) {
    var doc = {};
  }

  function dbg(o) {
    if (true) console.info(o);
  }
  window.docConfig.switcher.switcherdisplay = true;
  doc.switcher = (function() {
    var switcherCfg = window.docConfig.switcher,
      pathname = window.location.pathname,
      pathparts = pathname.split("/"),
      fname = pathparts[pathparts.length - 1],
      //plat = $.cookie (switcherCfg.appproduct) || switcherCfg.defaultplatformvalue,
      plat = pathparts[pathparts.length - 2],
      isHome = pathparts.length <= 4, //???
      version = (pathname.match(/(\/latest\/)/)) ? "10.6" : (pathname.match(/(\/10\.5\/)/)) ? "10.5" : (pathname.match(/(\/10\.4\/)/)) ? "10.4" : "10.3",
      //version = (!english && pathname.match(/(\/latest\/)/)) ? "10.5" : (english && pathname.match(/(\/latest\/)/)) ? "10.6" : (pathname.match(/(\/10\.5\/)/)) ? "10.5" : (pathname.match(/(\/10\.4\/)/)) ? "10.4" : "10.3",
      switcherLinkClass = "current";
    if (pathname.match(/(\/insights\/)/) && customVersionLabel) {
      version = customVersionLabel;
    }
    return {

      addSwitcherLinks: function(switcherLocation) {
        if (!(isHome) && (switcherCfg.switcherdisplay)) {

          var platK = version + "~" + plat;
          var versionLabel = (customVersionLabel) ? customVersionLabel : version;
          var versionName = (typeof customVersionName !== 'undefined') ? customVersionName : 'ArcGIS';
          var currentPlatTxt = (switcherCfg.switchercases[platK]) ? versionName + ' ' + versionLabel + ' (' + switcherCfg.switchercases[platK] + ')' : versionName + ' ' + versionLabel;
          var links = '<div class="trailer-1" id="platforms">' + '<span class="product text-light-gray">' + currentPlatTxt + '</span>';
          links += '<span class="divider"> | </span><span class="dropdown js-dropdown dropdown-btn js-dropdown-toggle"><button class="btn btn-transparent" href="#" tabindex="0" aria-haspopup="true" aria-expanded="false"> ' + this.t('other-versions') + ' </button>';
          links += '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 -10 32 40" class="svg-icon"><path d="M28 9v5L16 26 4 14V9l12 12L28 9z"/></svg>'
          linkData = this.generateSwitcherLinks();
          links += linkData[0];
          links += '</span></div>';

          ajaxRequests = [];
          linksNum = linkData[1].length;
          for (i = 0; i <= 14; i++) {
            if (i >= linksNum || linkData[1][i][1] == 'javascript:void(0);') {
              ajaxRequests.push(null);

            } else {
              ajaxRequests.push($.ajax(linkData[1][i][1]));
            }
          }
          $.whenAll(ajaxRequests[0], ajaxRequests[1], ajaxRequests[2], ajaxRequests[3], ajaxRequests[4], ajaxRequests[5], ajaxRequests[6], ajaxRequests[7], ajaxRequests[8], ajaxRequests[9], ajaxRequests[10], ajaxRequests[11], ajaxRequests[12], ajaxRequests[13], ajaxRequests[14], $(switcherLocation).after(links)).always(function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
            responses = [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14];
            for (i = 0; i < linksNum; i++) {
              if (responses[i] != null) {
                if (responses[i][1] == 'error') {
                  removeClass = 'available';
                  addClass = 'disabled';
                  href = 'javascript:void(0)';

                } else {
                  removeClass = 'disabled';
                  addClass = 'available';
                  href = linkData[1][i][1];
                }
                linkElement = $('#' + linkData[1][i][0]);
                linkElement.attr('href', href);
                if (linkElement.hasClass(removeClass)) {
                  linkElement.removeClass(removeClass);
                }
                linkElement.addClass(addClass);
              }
            }
            $('#platforms').addClass('processed');
          });
        } else {
          return true;
        }
      },

      generateSwitcherLinks: function() {

        var switcherLinks = "",
          dropDownFlag = false;
        keyL = []

        $.each(switcherCfg.switchercases, function(k, v) {
          keyL.push(k);
        });

        switcherLinks = '<nav class="dropdown-menu">';
        var versionArray = [];
        $.each(keyL, function(idx, val) {

          var k = val,
            v = switcherCfg.switchercases[k]

          // dbg ("generateSwitcherLinks: " + k + " : " + v)
          var url = doc.switcher.getTargetURL(k),
            kArr = k.split(":"),
            switcherLinkStatus = (kArr.length >= 2) ? kArr[1] : ""



          k = kArr[0]
          linkId = k.replace(/[^a-z0-9\s]/gi, '');
          if (k.indexOf("~") >= 0) {

            var keyArr = k.split("~");

            if (!keyArr[1]) {
              /*if (dropDownFlag) {
                  switcherLinks += '</ul><hr>';
                  dropDownFlag = false;
              }*/
              // for example key is "desktop."
              switcherLinks += '<span class="dropdown-title">' + v + '</span>';
              //dropDownFlag = true;
            } else {
              versionArray.push([linkId, url]);
              switcherLinks += '<a id="' + linkId + '" data-plat="' + keyArr[1] + '" class="dropdown-link ' + switcherLinkClass + '" href="' + url + '">' + v + '</a>';
            }
          } else {
            versionArray.push([linkId, url]);
            switcherLinks += '<a id="' + linkId + '" data-plat="' + k + '" class="dropdown-link ' + switcherLinkClass + '" href="' + url + '">' + v + '</a>';
          }
        });
        //switcherLinks += '</nav>'

        //$.each(switcherCfg.keyorder || keyL, function (idx, val) {

        return [switcherLinks, versionArray];
      },

      getTargetURL: function(key) {
        var kArr = key.split("~"),
          newVersion = kArr[0],
          k = (kArr.length > 1) ? kArr[1] : key;

        var versionPath = switcherCfg.basepaths[newVersion],
          prefixBase = (versionPath) ? '/' + doc.switcher.getCurrentLang() + '/' + versionPath : "",
          prefixPlat = "/" + switcherCfg.basepaths[k],
          pathpfx = window.location.pathname.split("/").slice(0, -1).join("/"),
          url, fileName;

        if (pathpfx.indexOf(prefixPlat) >= 0 && pathpfx.indexOf(prefixBase) >= 0) {
          switcherLinkClass = "is-active";
          url = pathpfx + "/" + fname;
          //url = window.location.pathname;




        } else {
          var fnameVal = this.specialCasesLookup(key, fname);

          if (fnameVal == "x") {
            // disable click
            url = "javascript:void(0);";
            switcherLinkClass = "disabled";


          } else {

            //tmp hack to create relative url
            //works: /en/web-adaptor/beta/install/java-linux/welcome-arcgis-web-adaptor-install-guide.htm
            //NOT: /en/collector/windows/collect-data/collect-tutorial.htm
            //url = "../" + key + "/" + fnameVal;
            url = pathpfx.replace(switcherCfg.basepaths[version], switcherCfg.basepaths[newVersion]).replace(switcherCfg.basepaths[plat], switcherCfg.basepaths[k])
            url += "/" + fnameVal;

            switcherLinkClass = "available";
          }
        }
        url = url.replace('//', '/');
        return url
      },

      //getTargetURL
      specialCasesLookup: function(key, fileName) {
        var keyPosition = (switcherCfg.caseTbl && key in switcherCfg.caseTbl['__order']) ? switcherCfg.caseTbl['__order'][key] - 1 : -1,
          fnameParts = fileName.split("."),
          fnameKey = (fnameParts.length == 2) ? fnameParts[0] : "",
          fnameVal = "x";
        //dbg ("specialCasesLookup: " +keyPosition + " " + fnameKey);


        if (keyPosition >= 0) {
          if (fnameKey in switcherCfg.caseTbl) {
            fnameVal = switcherCfg.caseTbl[fnameKey][keyPosition];
            fnameVal = (fnameVal == "x") ? "x" : ((fnameVal == "-") ? fnameKey + ".htm" : fnameVal + ".htm");
          } else {
            fnameVal = fnameKey + ".htm";
          }
        } else {
          //not a valid platform choice
          //fnameVal = "x";
          fnameVal = fileName;
        }

        return fnameVal;
      },

      getCurrentLang: function() {
        var localedir = "en";
        if (window.docConfig !== undefined) {
          localedir = docConfig['localedir'].toLowerCase();
        }
        return localedir;
      },

      t: function(dataLang) {
        lg = this.getCurrentLang();

        var dict = (window.localeJsonObj || {});
        return dict[lg][dataLang] || dict['en'][dataLang] || dataLang;
      },

      setJsCookie: function(ckName, ckVal) {
        $.cookie(ckName, ckVal, {
          expires: new Date(2020, 1, 1),
          path: "/"
        });
      },

      updateTabLinks: function(linkUpdateSection) {

        //$('"'+linkUpdateSection + ' a"').each (function (i) {
        $(linkUpdateSection + ' a').each(function(i) {
          var $ele = $(this),
            href = $ele.attr("href"),
            hrefparts = href.split("/"),
            linkFileName = (hrefparts[hrefparts.length - 1].indexOf(".htm") > 0) ? hrefparts[hrefparts.length - 1] : "",
            linkPlat = hrefparts[hrefparts.length - 2],
            varsionPlatLabel = version + "~" + linkPlat;

          if ((linkPlat != plat) && (linkPlat in switcherCfg.basepaths && varsionPlatLabel in switcherCfg.switchercases)) {
            var newFname = (linkFileName != "") ? doc.switcher.specialCasesLookup(plat, linkFileName) : "x";

            if (newFname != "x") {
              //$ele.attr ("href", hrefpfx + "/" + plat + "/" + newFname);
              var pathpfx = hrefparts.slice(0, -1).join("/"),
                newURL = pathpfx.replace(switcherCfg.basepaths[linkPlat], switcherCfg.basepaths[plat]) + "/" + newFname;
              $ele.attr("href", newURL);
            } else {
              // dbg ("origHref: " + href);
              $ele.attr("href", href.replace(switcherCfg.basepaths[linkPlat], switcherCfg.basepaths[plat]));
            }
          }
        });

        // Update Search form parameter here.
      },



    }; //End of main return
  })();

  if (currentURL.match(/(\/en\/server\/.*\/cloud\/)/)) {
    $(".navigation-bar header h1 a").attr("href", '/' + doc.switcher.getCurrentLang() + '/cloud');
  }

  //Starting point
  var switcherLocation = ".column-13 h1, .column-17 h1, .column-18 h1",
    linkUpateSection = ".sub-nav-list";
  doc.switcher.addSwitcherLinks(switcherLocation);
  doc.switcher.updateTabLinks(linkUpateSection);


  $('#platforms .dropdown-menu a').on("click", function(evt) {
    window.location.href = $(this).attr("href");
  })

})
