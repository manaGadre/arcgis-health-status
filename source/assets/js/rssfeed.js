

;(function($) {
  'use strict';

  $.fn.rssFeed = function(options) {
      var opts = $.extend({}, $.fn.rssFeed.defaults, options);

      return this.each(function() {
          var url = (opts.url.indexOf("blogs.esri.com") >=0)?opts.url.replace("http://","https://") : opts.url,
              url = url.replace("geonet.esri.com", "community.esri.com"),
          node = this,
          feedType = (opts.feedType)?opts.feedType : "";

          $.ajax ({
            //cache: false,
            url : "/apps/proxy/sm-proxy.php?" + url,
            type: "GET",
            dataType: "json",
            crossDomain: true,
            context: this,
            success: function(feed) {
              if (feed) {
                $.fn.rssFeed.format (node, feed, opts.max, feedType)
              }
            },
            error: function(xhr, status, err) {
               if(xhr.responseText) {
                 $.fn.rssFeed.format (node, xhr.responseText, opts.max, feedType)
               }
            }
          });
      });
  };

  $.fn.rssFeed.defaults = {
    url:  "http://blogs.esri.com/esri/arcgis/feed/",
    max: 2
  };

  $.fn.rssFeed.format = function (node, feed, narticles, feedType) {

  function getNodeValue(post, tag) {
    var tag =  post.getElementsByTagName(tag);
    if (tag && tag.length) {
      var tagElement = tag[0]
      if (tagElement) {
        return tagElement.childNodes[0].nodeValue;
       }
     }
     return '';
  }

  function parseItems(xmlString) {
    if (typeof window.DOMParser != "undefined") {
      var parser = new window.DOMParser();
      var parsedXml = parser.parseFromString(xmlString, "text/xml");
      if (parsedXml) {
        return parsedXml.getElementsByTagName('item');
        }
    }
    return []
  }

 function formatTheDate(feedDate){
    function toMonth (m) {
      return {
        1: "January",2:  "February",3: "March",
        4: "April",5: "May",6: "June",
        7: "July",8: "August",9: "September",
        10: "October",11: "November",12: "December"
      }[m];
    }
    var entrydate=new Date(feedDate);
    var entrydatestr=' '+toMonth(entrydate.getMonth()+1)+" "+entrydate.getDate()+", "+entrydate.getFullYear();
    return entrydatestr;
  }

  function cleanText (s) {
    s = s.replace(/(<([^>]+)>)/ig,"");

    return s;
  }

   function truncateDescription (s, maxLength) {
    s = s.replace(/[\n]/g, ' ')
    s = s.substr(0, maxLength);

    // Re-trim in case we are in middle of a word
    s = s.substr(0, Math.min(s.length, s.lastIndexOf(" ")));

    return s
   }

    var max = narticles,
        data = parseItems(feed),
        buf = [];

    for(var i=0; i<data.length && i<max; i++){
      var item= data[i];

      if(feedType == "blogHome"){
      buf.push ("<div class='card block trailer-1'><div class='card-content panel panel-no-border panel-white'>"+
            "<span class='font-size--3'>"+ formatTheDate (getNodeValue(item, "pubDate")) +"</span>"+
            "<h5 class='leader-half'><a href='" + getNodeValue(item, "link") + "'>" + getNodeValue(item, "title") + "</a></h5>"+
            "<p>" + truncateDescription(cleanText (getNodeValue(item, "description")), 100)  + " ... <a href='" +getNodeValue(item, "link") + "'>Continue reading →</a>"  + "</p>" +
            "</div></div>");
    }else if (feedType == "geonetHome"){
      buf.push ("<div class='card block trailer-1'><div class='card-content panel panel-no-border'>"+
            "<span class='font-size--3'>"+ formatTheDate (getNodeValue(item, "pubDate")) +"</span>"+
            "<h5 class='leader-half'><a href='" + getNodeValue(item, "link") + "'>" + getNodeValue(item, "title") + "</a></h5>"+
            "<p>" + truncateDescription(cleanText (getNodeValue(item, "description")), 100)  + " ... <a href='" +getNodeValue(item, "link") + "'>Continue reading →</a>"  + "</p>" +
            "</div></div>");
    }else {
      buf.push ("<article>"+
            "<h4><a href='" + getNodeValue(item, "link") + "'>" + truncateDescription(getNodeValue(item, "title"), 50) + " ...</a></h4>"+
            "<span class='font-size--3'><time>"+ formatTheDate (getNodeValue(item, "pubDate")) +"</time></span>"+
            "<p>" + truncateDescription(cleanText (getNodeValue(item, "description")), 100)  + " ... <a href='" +getNodeValue(item, "link") + "'>Continue reading →</a>"  + "</p>" +
            "</article>");
    }
    }
    $(node).html(buf.join ("\n"));
  };

})(jQuery);

 $(window).load(function() {
   var geonetHpFeed = $(".panel .geonetFeed").attr("data-geonet-feed-url")
   var blogHpFeed = $(".panel .blogHpFeed").attr("data-blog-feed-url")

   if(geonetHpFeed){
     $('.geonetFeed').rssFeed({
        url: geonetHpFeed,
        max: 3,
        layout: 0,
      feedType: 'geonetHome'
      });
   }

   if(blogHpFeed){
     $('.blogHpFeed').rssFeed({
        url: blogHpFeed,
        max: 3,
        layout: 0,
      feedType: 'blogHome'
      });
   }

    });
