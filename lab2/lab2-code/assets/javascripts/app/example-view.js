define(["jquery"], function($) {
  "use strict";

  var render = function(element) {
 	$(".item1").on("click", function(){
 		$(".content-section").html("ITEM 1 CONTENT");
 	});	
 	$(".item2").on("click", function(){
 		$(".content-section").html("ITEM 2 CONTENT");
 	});	
 	$(".item3").on("click", function(){
 		$(".content-section").html("ITEM 3 CONTENT");
 	});	
  };

  return render;
});