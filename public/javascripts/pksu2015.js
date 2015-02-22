$(document).ready(function() {

        $("body").on("click", ".deleteItem", function() {
          var listItem = this
    	  $.get(jsRoutes.controllers.Application.deleteItem(listItem.id).url, {}, 
            function(data) {
    		  $(listItem).parent().remove();
            });
        });

        $("body").on("mouseover", ".deleteItem", function() {
          $(this).css("font-weight","bold");
        });
        $("body").on("mouseout", ".deleteItem", function() {
          $(this).css("font-weight","normal");
        });

        $("#myFormSubmit").click(function(){
          var name = $("#myFormTextInput").val();
          $.getJSON(jsRoutes.controllers.Application.createItem(name).url, {}, 
            function(data) {
        	  var listItem = $("<li>" + data.name + " <a class=\"deleteItem\" href=\"#\" id=\"" + data.id + "\">X</a></li>");
              $("#myList").append(listItem);
              $("#myFormTextInput").val("");
              $("#myFormTextInput").focus();
            });
        });

      });