/*

k: url query parameter
l: url query parameter label
v: url query possible values

v.k=parameter value
v.q=query
v.q.r = requiredfields
v.q.p = partialfields

*/

var filterCfgDefaults = {
  "default": {
    "collection": "all",
  }
};

var filterCfg = {
  "default": [{
      "k": "collection",
      "l": "collection",
      "v": [{
          k: "all",
          q: {
            r: "search-collection:help|search-collection:forums",
            p: ""
          }
        },
        {
          k: "help",
          q: {
            r: "search-collection:help",
            p: ""
          }
        }
      ]
    },

    {
      "k": "product",
      "l": "product",
      "v": [{
          k: "any",
          q: {
            r: "",
            p: "product:arcgis-enterprise-windows|product:arcgis-enterprise-linux|product:arcgis-server-amazon|product:arcgis-server-linux|product:arcgis-server-windows|product:arcgis - portal - linux|product:arcgis-portal-windows|product:arcgis-server-azure|product:ext-server-geoevent|product:ext-server-reviewer|product:ext-server-workflow|product:ext-server-pipeline|product:ext-server-roads|product:inspire|product:monitor|product:streetmap-premium"
          }
        },
        {
          t: "optgroup",
          k: "arcgis-for-server",
        },
        {
          k: "arcgis-enterprise-linux",
          q: {
            r: "",
            p: "(product:arcgis-enterprise-linux)"
          }
        },
        {
          k: "arcgis-enterprise-windows",
          q: {
            r: "",
            p: "(product:arcgis-enterprise-windows)"
          }
        },
        {
          k: "arcgis-server-amazon",
          q: {
            r: "",
            p: "(product:arcgis-server-amazon)"
          }
        },
        {
          k: "arcgis-server-azure",
          q: {
            r: "",
            p: "(product:arcgis-server-azure)"
          }
        },
        {
          k: "arcgis-portal-linux",
          q: {
            r: "",
            p: "(product:arcgis-portal-linux)"
          }
        },
        {
          k: "arcgis-portal-windows",
          q: {
            r: "",
            p: "(product:arcgis-portal-windows)"
          }
        },
        {
          k: "arcgis-server-linux",
          q: {
            r: "",
            p: "(product:arcgis-server-linux)"
          }
        },
        {
          k: "arcgis-server-windows",
          q: {
            r: "",
            p: "(product:arcgis-server-windows)"
          }
        },
        {
          t: "optgroup",
          k: "optional-capabilities"
        },
        {
          k: "ext-server-reviewer",
          q: {
            r: "",
            p: "(product:ext-server-reviewer)"
          }
        },
        {
          k: "ext-server-geoevent",
          q: {
            r: "",
            p: "(product:ext-server-geoevent)"
          }
        },
        {
          k: "monitor",
          q: {
            r: "",
            p: "(product:monitor)"
          }
        },
        {
          k: "ext-server-pipeline",
          q: {
            r: "",
            p: "(product:ext-server-pipeline)"
          }
        },
        {
          k: "ext-server-roads",
          q: {
            r: "",
            p: "(product:ext-server-roads)"
          }
        },
        {
          k: "ext-server-workflow",
          q: {
            r: "",
            p: "(product:ext-server-workflow)"
          }
        },
        {
          t: "optgroup",
          k: "related-products"
        },
        {
          k: "inspire",
          q: {
            r: "",
            p: "(product:inspire)"
          }
        },
        {
          k: "streetmap-premium",
          q: {
            r: "",
            p: "(product:streetmap-premium)"
          }
        }
      ]
    },

    {
      "k": "version",
      "l": "version",
      "v": [{
          k: "any-version",
          q: {
            r: "version:"
          }
        },
        {
          k: "10.6",
          q: {
            r: "version:10.6"
          }
        },
        {
          k: "10.5",
          q: {
            r: "version:10.5"
          }
        },
        {
          k: "10.4",
          q: {
            r: "version:10.4"
          }
        },
        {
          k: "10.3",
          q: {
            r: "version:10.3"
          }
        }
      ]
    }
  ]
}
