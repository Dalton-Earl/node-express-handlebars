// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eatTheBurger").on("click", function(event) {
      var id = $(this).data("id");
      var eatABurger = $(this).data("newsleep");
  
      var devouredState = {
        devoured: eatABurger
      };
  
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: devouredState
      }).then(
        function() {
          console.log("changed sleep to", eatABurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#addedBurger").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
      console.log(newBurger);
      debugger;
  
      // Send the POST request.
      $.ajax("/api/burger/", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".deleteburger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burger/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  