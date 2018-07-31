//this file contains core library that is used by all/most pages
var doc = {};
function dbg (s) {
    //window.console && console.info (s);
}

//JKnight
// http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
if (!String.prototype.format) {
    String.prototype.format = function() {
    var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number){
                    return typeof args[number] != 'undefined' ? args[number] : match;
                });
    };
}


jQuery(document).ready(function ($) {
  var winloc = window.location;
  //var doc = {};

  doc.cookieJar = (function(){
      return {
          getItem: function (sKey) {
              if (!sKey || !this.hasItem(sKey)) { return null; }
              return decodeURIComponent(document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1"));
          },

          setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
              if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return; }
              var sExpires = "";
              if (vEnd) {
                  switch (vEnd.constructor) {
                      case Number:
                          sExpires = vEnd === Infinity ? "; expires=Tue, 19 Jan 2038 03:14:07 GMT" : "; max-age=" + vEnd;
                          break;
                      case String:
                          sExpires = "; expires=" + vEnd;
                          break;
                      case Date:
                          sExpires = "; expires=" + vEnd.toGMTString();
                          break;
                  }
              }
              document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
              return true;
          },

          removeItem: function (sKey, sPath, sDomain) {
              if (!sKey || !this.hasItem(sKey)) { return false; }
              document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( sDomain ? "; domain=" + sDomain : "") + ( sPath ? "; path=" + sPath : "");

               return true;
          },

          hasItem: function (sKey) {
              return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
          }
      };

  })();


  doc.l10n = (function () {

      /* THIS IS THE MAPPING BETWEEN BROWSER LOCALE AND OUR LANG*/
      var langList = {
          "en": "en",
          "en-us": "en",
          "ar": "ar", "ar-dz": "ar", "ar-bh": "ar", "ar-eg": "ar",  "ar-iq": "ar",  "ar-jo": "ar", "ar-kw": "ar", "ar-lb": "ar", "ar-ly": "ar", "ar-ma": "ar", "ar-om": "ar", "ar-qa": "ar", "ar-sa": "ar", "ar-sy": "ar", "ar-tn": "ar", "ar-ae": "ar",
          "cs": "cs",
          "da": "da",
          "de" : "de", "de-at" : "de", "de-de" : "de", "de-li" : "de", "de-lu" : "de", "de-ch" : "de",
          "es": "es", "es-us": "es", "es-us": "es", "es-ar": "es", "es-bo": "es", "es-cl": "es", "es-co": "es", "es-cr": "es", "es-do": "es", "es-ec": "es", "es-sv": "es", "es-gt": "es", "es-hn": "es", "es-mx": "es", "es-pr": "es", "es-es": "es", "es-uy": "es", "es-ve": "es",
          "et": "et",
          "fi": "fi",
          "fr": "fr", "fr-be": "fr", "fr-ca": "fr", "fr-fr": "fr", "fr-lu": "fr", "fr-ch": "fr", "fr-mc": "fr",
          "he": "he",
          "it": "it", "it-it": "it", "it-ch": "it",
          "ja" : "ja","ja-jp" : "ja",
          "ko": "ko", "ko-kp" : "ko", "ko-kr" : "ko",
          "lt": "lt",
          "lv": "lv",
          "nl" : "nl", "nl-be" : "nl",
          "no": "no","no-no": "no",
          "pl": "pl",
          "pt-br": "pt-br",
          "pt-pt": "pt-pt",
          "ro": "ro", "ro-mo": "ro",
          "ru": "ru", "ru-mo": "ru", "ru-ru": "ru", "ru-md": "ru",
          "sv": "sv", "sv-fi": "sv", "sv-se": "sv",
          "th": "th",
          "tr": "tr",
          "zh-cn": "zh-cn", "zh-hk": "zh-hk", "zh-mo": "zh-cn", "zh-sg": "zh-cn", "zh-tw": "zh-tw"
      },


      //RC fully supported langs
      lgPickFull = ['en', 'de', 'es', 'fr', 'ja', 'ru', 'zh-cn'],
      lgExtra = ['zh-hk', 'zh-tw', 'ar', 'it', 'ko', 'pl', 'pt-br'],
      lgExtraMod = ['zh-hk', 'zh-tw', 'ar', 'it', 'ko', 'pl', 'pt-br'],
      lgPartial = [],

      //all langs
      lgPickerLabels = GLangLabels,


      //historyCK = "state404",
      prefLangCK = "preflang";

      return {
          getExtraLangs: function() {
            return lgExtra;
          },

          getReferrerLang : function () {
              var ref = document.referrer,
                  lg = "en";
              if (ref) {
                  var hrefL = ref.split ("/");
                  if (hrefL.length>3) {
                      lg = hrefL[3];
                      if (!this.isSupportedLang (lg)) {
                          lg = "en";
                      }
                  }
              }
              return lg;
          },

          getUrlLang : function () {
              var loc = window.location,
                  path = loc.pathname,
                  lg = path.split ("/")[1].toLowerCase();

              if (this.isSupportedLang (lg)) {
                  return lg;
              } else {
                  //not exactly true, could be mistyped language
                  return "en";
              }
          },

          isEN : function (lg) {
              return lg === "en";
          },

          isSupportedLang : function (lg) {
              return lg in lgPickerLabels;
          },

          isPageAvailable : function (lg,langSelector) {
            if(langSelector === "all"){
              return true;
            }else if(langSelector === "generic" && lgPickFull.concat(lgPartial).indexOf(lg) >= 0){
              return true;
            }else if(langSelector === "mod"){
              return true;
            }else{
              return false;
            }
          },


/*
          is404Redirect : function () {
              return doc.cookieJar.getItem (historyCK);
          },

          set404Redirect : function () {
              doc.cookieJar.setItem (historyCK, "y", Infinity, "/", ".arcgis.com");
          },

          rm404Redirect : function () {
              doc.cookieJar.removeItem (historyCK, "/", ".arcgis.com");
          },
*/

          getAgolPref : function () {
              return null;
          },

          getSelectorPref : function () {
              return doc.cookieJar.getItem (prefLangCK);
          },

          setLangPref : function (lg) {
              doc.cookieJar.setItem (prefLangCK, lg, Infinity, "/", ".arcgis.com");
          },


          getBrowserPref : function() {
              var lg =  (typeof navigator) != "undefined" ?  (navigator.language || navigator.userLanguage || "").toLowerCase() : "en";

              return langList [lg] || "en";
          },

          calcPrefLang : function (selectorType, defaultv) {
              var prefAgol = this.getAgolPref (),
                  prefSelector = this.getSelectorPref(),
                  prefBrowser = this.getBrowserPref ();

              defaultv = (typeof defaultv === "undefined") ? "en" : defaultv;

              dbg ("calcPrefLang: "+prefAgol + "-" + prefSelector + "-" + prefBrowser + "-" + defaultv);

              return prefAgol || prefSelector || prefBrowser || defaultv || "en";
          },

          setPrefLang : function (lg) {
              doc.cookieJar.setItem(prefLangCK, lg, Infinity, "/", ".arcgis.com", false);
          },


          supportedLangs : function(selectorType) {

              var lgList = lgPickFull;
              switch (selectorType) {
                case "all":
                  lgList = lgPickFull.concat(lgPartial).concat(lgExtra);
                  break;
                case "mod":
                  lgList = lgPickFull.concat(lgPartial).concat(lgExtraMod);
                  break;
                case "generic":
                  lgList = lgPickFull.concat(lgPartial);
                  break;
              }
				  return lgList;
			 },
				  
			 showSelector : function(lg, selectorType) {

              if (selectorType === "agol") {
                  return;
              }

              var lgList = this.supportedLangs(selectorType);

 $('<div class="tablet-hide top-nav-link js-dropdown-toggle"><a data-lang="' + lg + '" class="lglink top-nav-dropdown dropdown-btn">' + lgPickerLabels[lg] + 
              '</a><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 -10 32 40" class="svg-icon"><path d="M28 9v5L16 26 4 14V9l12 12L28 9z"/></svg></div>').appendTo('.lang-block');
			   var lgPicker = $('<nav/>', { class: 'lgpicker dropdown-menu dropdown-right' });
			   lgPicker.appendTo('.lang-block');




			   $.each(lgList, function (index, langCode) {

                  var langTxt = $('<a/>', { 'class': 'lgchoice dropdown-link', 'data-lang': langCode, href: '#', text: lgPickerLabels[langCode] });
                  if (lg == langCode) {

                      langTxt.addClass('is-active');

                  }
                  langTxt.appendTo(lgPicker);


              });

              $(".lgchoice").on ("click", function (evt) {
                  evt.preventDefault();
                  var lgSetting = $(this).attr("data-lang");
                  dbg ("lgchoice: " + lgSetting);

                  doc.l10n.setPrefLang(lgSetting);

                  var url = doc.l10n.toNewUrl (lgSetting);
                  dbg ("lgchoice: goto: " + url);
                  window.location.replace (url);

              });
          },


          //TODO: neeed? toNewUrl
          toLocaleUrl : function (lg) {
              var loc = window.location,
                  path = loc.pathname,
                  lang = path.split ("/")[1].toLowerCase(),
                  url = "";


              if (this.isEN (lang)) {
                  url = loc.href.replace ("/en/", "/"+lg+"/");
              } else {
                  url = loc.host + "/" + lg + loc.pathname + loc.hash;
              }

              return url;

          },

          //TODO: neeed? toNewUrl
          toENUrl : function () {
              var loc = window.location,
                  path = loc.pathname,
                  lg = path.split ("/")[1].toLowerCase(),
                  url = "";

              if (this.isSupportedLang (lg)) {
                  url = loc.href.replace ("/"+lg+"/", "/en/");
              } else {
                  url = loc.host + "/en" + loc.pathname + loc.hash;
              }

              return url;
          },

          toNewUrl : function (newlg) {
              var loc = window.location,
                  path = loc.pathname,
                  oldlg = path.split ("/")[1].toLowerCase(),
                  url = "";


              if (this.isSupportedLang (oldlg)) {
                  url = loc.href.replace ("/"+oldlg+"/", "/"+newlg+"/");

              } else {
                  if (this.isEN (newlg)) {
                      url = loc.href;
                  } else {
                      url = loc.host + "/" + newlg + loc.pathname + loc.hash;
                  }
              }

              dbg ("toNewUrl: " + url);

              return url;
          },

          changeLabel : function (lg) {
              var dict = (window.localeJsonObj || {})[lg];

              if (dict) {
                  $("*[data-langlabel]").each (function(i) {
                      var o = $(this),
                          txt = dict[o.attr("data-langlabel")];

                      if (this.tagName === "INPUT" || this.tagName === "input") {
                          o.val (txt);
                      }
                      if (txt) {
                          o.html (txt);
                      }
                  });
              }
          },

          hasENPage : function (url) {
              //implement defer interface
              return true
          }
      };
  })();


  // -------------------------------

  var docCfg = (typeof docConfig != "undefined") ? docConfig : {"langSelector":"generic"};

  docCfg.langSelector = "generic";

  if(winloc.pathname.match( /(\/portal\/)/)){
    docCfg.langSelector = "all";
  }
  if(winloc.pathname.match( /(\/insights\/)/)){
    docCfg.langSelector = "mod";
  }
  dbg ("start: " + window.location.href);

  //If user clicked on English link from 404 page
  if (window.location.href.indexOf("lg=en") > 0){
    doc.l10n.setPrefLang("en");
  }

  if (docCfg["doctype"] === void(0) || docCfg["doctype"] === "doc") {

      dbg ("help topic");

      var urlLang = doc.l10n.getUrlLang(),
      prefLang = doc.l10n.calcPrefLang (docCfg["langSelector"]),
		supportedLangs = doc.l10n.supportedLangs(docCfg["langSelector"]);
		prefLang = (supportedLangs.indexOf(prefLang) >= 0)?prefLang:"en";

      dbg ("help: " + urlLang + "-" +prefLang);

      if (doc.l10n.isEN(urlLang)) {
          if (false && doc.l10n.is404Redirect()) {
              doc.l10n.rm404Redirect();
              if (doc.l10n.isSupportedLang(prefLang) && !doc.l10n.isEN(prefLang)) {
                  doc.l10n.changeLabel (prefLang);
              }

          } else {

              lgExtra = doc.l10n.getExtraLangs();
              if (doc.l10n.isSupportedLang(prefLang) && !doc.l10n.isEN(prefLang)){
                  if($.inArray(prefLang, lgExtra) != -1 && !window.location.pathname.match(/(\/[a-zA-Z-]{2,5}\/portal\/|\/[a-zA-Z-]{2,5}\/insights\/)/)){
                      doc.l10n.setPrefLang('en');
                      window.location = doc.l10n.toLocaleUrl ('en');
                      return false;
                  }else{
                      window.location = doc.l10n.toLocaleUrl (prefLang);
                      return false;
                  }
              }
          }
      }

      if (!doc.l10n.isSupportedLang(prefLang)) {
          // If language detected (cookie or browser) is not supported,
          // then let language selector default to the language
          // in the url (which could be en, or the last supported
          // language that was selected)
          prefLang = urlLang;
      }

      doc.l10n.showSelector (prefLang ? prefLang: urlLang, docCfg["langSelector"]);

  }

  // Code below addresses issue #399 on server repo. Keep content of all footer strings
  // in localized static pages (404, feedback, thank you) in sync with content of other pages
  // by making them rely exclusively on translated strings in the file l10nStrings.js
  curlang = doc.l10n.calcPrefLang(docCfg["langSelector"] || "generic", urlLang);
  if (doc.l10n.isSupportedLang(curlang) && !doc.l10n.isEN(curlang)) {
      doc.l10n.changeLabel(curlang);
  }

})
;
