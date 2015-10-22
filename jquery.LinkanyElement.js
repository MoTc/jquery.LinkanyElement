/*
* Name: LinkanyElement
* author: Mo Tc
* version: 0.1.0
* License: MIT

*/


$.noConflict();
jQuery(function($){

  $.fn.LinkanyElement = function(options){
	 // default settings
	 var settings = $.extend({
		  href     :null,
		  target   :'_blank',
		  text     :null
		 
		 
	 },options);
	 
	  //Validation
	  if(settings.href == null){
		console.log("you need an href option for this plugin to work ");  
		return this;
		  
	  }
	  
	  return this.each(function(){
		var object = $(this);
         
          if(settings.text == null) {
			  settings.text = object.text();
			  
			  
		  }	 
		object.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);  
	  });
	  
	  
	  
  }

}); 
