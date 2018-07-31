function getUrlLang() {
    var loc = window.location,
        path = loc.pathname,
        lg = path.split ("/")[1].toLowerCase();
    if (lg in GLangLabels) {
        return lg;
    } else {
        return "en";
    }
}

$(document).ready(function() {
  var curLang = getUrlLang();
  $('a.top-nav-link:contains("Data Store")').text('Data Stores');
  $('footer nav a[data-langlabel="nav_data-store"]:contains("Data Store")').text('Data Stores');
  //var li_links = '<li><a href="//server.arcgis.com/'+curLang+'/documentation/">'+localeJsonObj[curLang]['nav_documentation']+'</a></li>';

  //$('nav.site-nav ul').html(li_links);
  //$('nav.drawer-nav ul').html(li_links);
  //$('nav.drawer-nav li a').addClass('drawer-link');
  // $('footer nav:first ul li:first').after(li_links); remove via https://github.com/ArcGIS/arcgis-for-server-website/issues/1107
  $('footer nav a[data-langlabel=nav_pricing]').parent('li').remove();
});
