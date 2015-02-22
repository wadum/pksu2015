$(document).ready(function() {

        //$(".deleteItem").click(function(){
        $("body").on("click", ".deleteItem", function() {
          $(this).parent().remove();
        });

        $("body").on("mouseover", ".deleteItem", function() {
          $(this).css("font-weight","bold");
        });
        $("body").on("mouseout", ".deleteItem", function() {
          $(this).css("font-weight","normal");
        });

        $("#myFormSubmit").click(function(){
          var name = $("#myFormTextInput").val();
          var listItem = $("<li>" + name + " <a class=\"deleteItem\" href=\"#\">X</a></li>");
          $("#myList").append(listItem);
          $("#myFormTextInput").val("");
          $("#myFormTextInput").focus();
        });

      });