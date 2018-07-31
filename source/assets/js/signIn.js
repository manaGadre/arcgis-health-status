$(document).ready(function() {

  function getCookie(ckname) {

	var cookieJar = {
			//https://developer.mozilla.org/en-US/docs/DOM/document.cookie
        	getItem: function (sKey) {
                   	if (!sKey || !this.hasItem(sKey)) { return null; }
                    return unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1"));
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
                    document.cookie = escape(sKey) + "=" + escape(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
                },

        	removeItem: function (sKey, sPath, sDomain) {
                    if (!sKey || !this.hasItem(sKey)) { return; }
                    document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? ";domain="+sDomain : "") + (sPath ? "; path=" + sPath : "");
                	},

            hasItem: function (sKey) {
                return (new RegExp("(?:^|;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
               	}

        },
  		ckval = $.parseJSON (cookieJar.getItem (ckname) || "{}");

  	return ("email" in ckval) ? {jar:cookieJar, val: ckval}: null;
  };


  function getUserDisplayName(user) {
      var fullName = user && user.fullName || "",
  	      firstName = fullName;

      // Format the name that shows in user profile dropdown
      // If '_', assume the name is before the '_',
      // If ',', assume the name is after the first ','
      // else use the name before the first space
      // issue: https://devtopia.esri.com/WebGIS/arcgis-portal-app/issues/705

      if (fullName.indexOf("_") > -1) {
        firstName = fullName.split("_")[0];
      } else if (fullName.indexOf(",") > -1) {
        firstName = fullName.split(",").slice(1).join(" ");
      } else if (fullName.indexOf(" ") > -1) {
        //firstName = fullName.split(" ").slice(0, -1).join(" ");
        firstName = fullName.split(" ")[0];
      }
      return firstName.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, "").replace(/\s+/g, " ");
    };


  function  getOrgHostname (data) {
    if (data) {
      return data.urlKey ? data.urlKey + "." + data.customBaseUrl : data.portalHostname;
    } else {
      return "www.arcgis.com";
    }
  }


  function  showSignInLink () {
    $(".logged-in-navigation").addClass ("hide-if-logged-out");
    $(".logged-out-navigation").removeClass ("hide-if-logged-in");

    $("#login-link").attr ("href", sitecfg["agolSignin"]+"?returnUrl="+encodeURIComponent(window.location.href));
	 $("#login-link > a").attr ("linkType", "fix");

    if ($.cookie && $.cookie ("esri_auth_extn")) {
      $.removeCookie ("esri_auth_extn", {domain: '.arcgis.com', path:"/"});
    }
  }

  /* login */
  var ckKey = "esri_auth",
      cookie = getCookie(ckKey);

  $(".myconsole").css ("display", "none");

/*
agolProfile - http://www.arcgis.com/home/user.html
agolHelp - http://www.arcgis.com/home/support.html
agolLogout
*/

  if (cookie) {

        var avatarurl = "/assets/img/no-user-thumb.jpg",
            avatar = "<img width='16px' height='16px' alt='' src='" + avatarurl +"' />";

		  var token = cookie.val && cookie.val.token,
			params = {f:"json"},
			portalHostname = sitecfg["portalHostname"],
      		firstName,
	  		text;

    	if (token){
      		params.token = token;
    	}


	    var proxyURL = (navigator.userAgent.match(/msie/i)) ? "/apps/proxy/proxy.php?" : "";

		 $.ajaxSetup({async:false});
		 $.getJSON(proxyURL + "https:"+portalHostname + "/sharing/rest/portals/self?Duration=0", params, function (data) {
      		var firstName = getUserDisplayName(data && data.user),
              orgHostname = getOrgHostname (data),
  	       		text = firstName;
					if(data.error){
						showSignInLink();
						return;
					}
					sitecfg["isValidToken"] = true;
					$(".logged-out-navigation").addClass ("hide-if-logged-in");
					$(".logged-in-navigation").removeClass ("hide-if-logged-out");


      		//$(".result").html(text);
	        $(".logged-in-navigation .user-nav-image").attr ("src",avatarurl);
          $(".logged-in-navigation .user-nav-name").html ("<span>"+ text +"</span>");

          $("#agolProfile").attr ("href", "//" + orgHostname + sitecfg["agolProfile"]);
          $("#agolHelp").attr ("href", sitecfg["agolHelp"]);
		      $(".js-log-out").each(function(){$(this).attr("href", "https://" + orgHostname + sitecfg["agolSignout"]+"?redirect_uri=https:"+sitecfg["portalHostname"] + sitecfg["agolSignout"]+"?redirect_uri="+encodeURIComponent(window.location.href))});

          $(".myconsole").css ("display", "block");

			if(data.subscriptionInfo && (data.subscriptionInfo.type.toLowerCase() === "trial" && data.subscriptionInfo.state.toLowerCase() === "active")){
				var trialDownloadString = (window.localeJsonObj['docConfig'] && window.localeJsonObj[docConfig['locale']]['trial-downloads'])?window.localeJsonObj[docConfig['locale']]['trial-downloads'] : "Trial Downloads";
				$(".myconsole li:last").before('<li><a href="' + sitecfg["trialDownloadUrl"] + '">' + trialDownloadString +'</a></li>');
		  }
    	}).fail(function() {
			showSignInLink();
		});
		$.ajaxSetup({async:true});

  } else {
  	showSignInLink();
  }


});
