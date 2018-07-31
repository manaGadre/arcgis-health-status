; (function () {
    'use strict';

    $.fn.miniGallery = function (options) {
        var opts = $.extend({}, $.fn.miniGallery.defaults, options);

        return this.each(function () {
            var url = opts.url,
				node = this;

            $.ajax({
                url: url,
                crossDomain: true,
                cache: false,
                dataType: "jsonp"
            })

				.done(function (data) {

				    if (data && !$.isEmptyObject(data.results)) {
				        $.fn.miniGallery.format(opts, node, data)
				    } else {
				        gallery_error();
				    }
				})
				.fail(function (jqxhr, status, error) {
				    gallery_error(status + ", " + error);
				})

            function gallery_error(message) {
                if (!message) { var message = 'The gallery could not be loaded at this time' }
                $('#mini-gallery').append('<h1>' + message + '</h1>')
            }

        });
    };

    $.fn.miniGallery.defaults = {
        url: "",
        max: 9
    };

    $.fn.miniGallery.format = function (opts, node, data) {
        var oL = data.results,
			o = null,
			i = 0,
			len = Math.min(opts.max, oL.length),
			obj = document.getElementById("mini-gallery");

        for (i = 0; i < len; i++) {

            var o = oL[i],            
                article = document.createElement("article"),
                a = document.createElement("a"),
                img = document.createElement("img");

            //a.setAttribute("href", "http://www.arcgis.com/home/item.html?id=" + o.id);
            a.setAttribute("href", o.url);
            a.setAttribute("target", "_blank");
            a.setAttribute("title", o.title);
            img.setAttribute("src", "http://www.arcgis.com/sharing/rest/content/items/" + o.id + "/info/" + o.thumbnail);
            img.setAttribute("alt", o.title);

            a.appendChild(img);
            var title = add_ellipsis(escapeHtml(o.title), 100); // Add ellipsis because too many characters in title cause spacing problems

            $("<h6>" + title + "</h6>").insertAfter(img);
            article.appendChild(a);
            obj.appendChild(article);
        }
    };

    function escapeHtml(unsafe) {
        /* Function is adapted from stackoverflow (http://stackoverflow.com/questions/6234773/can-i-escape-html-special-chars-in-javascript) */

        return unsafe
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#39;"); //changed from "&#039;" as was in stackoverflow to "&#39;"
    }

    function add_ellipsis(sentence, n) {
        /* An ellipsis is a dot dot dot string ("...")
           n = maximum number of characters the sentence should have. (n > 0)  */
        var i = 0,
            chars = sentence.split(''),
            len = chars.length,
            title = "";

        if (n < len) { n = round_down(chars, n) }

        for (i; i < len ; i++) {
            title += chars[i];
            if (i >= n - 1 || (i >= n - 1 && n - 1 >= len)) {
                if (chars[n - 1] != " ") { title += " ..." } // Make sure there is a space before an ellipsis is added
                else { title += "..."; }
                break;
            }
        }

        function round_down(chars, n, count) {
            /* Recursive function that suplements the add_ellipsis function
               It makes sure the nth position (position where to add ...) is at the end of a word.
               If not, it rounds it down to the end of the nearest word */

            var delimeter = [" ", "_", "-"]; // Strings that mark places where it is ok to add ellipsis
            if (typeof (count) == "undefined") {
                var count = 0;
            }
            count += 1
            if (jQuery.inArray(chars[n - 1], delimeter) == -1) {
                n = n - 1;
                if (n == 0) { return count }
                n = round_down(chars, n, count);
            }
            return n;
        }
        return title;
    }

})(jQuery);