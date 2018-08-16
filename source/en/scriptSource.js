/* JavaScript code to check the status of a website*/
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script>

   $(function() {
      var url = "some_url";
      $.ajax(url,
      {
         statusCode: {
         404: function() {
            alert('page not found');
         }
      }
   });   
});

/* Code to retrieve the source of an image */
<img id="statusImage".style="width:100%, height:100%">
<button onclick="document.getElementById('statusImage').src='/assets/images/normal.png'"></button>
<button onclick="document.getElementById('statusImage').src='/assets/images/down.png'"></button>
<button onclick="document.getElementById('statusImage').src='/assets/images/warning.png'"></button>
<button onclick="document.getElementById('statusImage').src='/assets/images/message.png'"></button>
</script>