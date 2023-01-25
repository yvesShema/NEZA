// jquery-isotope-example.js





function doSomething() {
     location.reload();
};



if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  }else{
    var resizeTimer;
      $(window).resize(function() {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(doSomething, 100);
      }); 
  }


$(document).ready(init);

function init() {
  var ports = $('#ports');
  var filters = {};
  
  ports.isotope({
    itemSelector : '.port'
  });
  
  // when everything loads, make the "all" options selected
  $('.filter a[data-filter-value=""]').addClass('selected');

  // filter buttons
  $('.filter a').click(
    function(e){
      e.preventDefault();
      var clicked_filter = $(this);
    
      // if the clicked link is already selected, don't do anything
      if ( clicked_filter.hasClass('selected') ) {
        return;
      }
      var optionSet = clicked_filter.parents('.option-set');
    
      // get rid of the ".selected" class on any links in this group and put it on the clicked link
      optionSet.find('.selected').removeClass('selected');
      clicked_filter.addClass('selected');
      
      // store the filters in the filters object, indexed by the group they're in
      // i.e. filters.category = 'animal'
      var group = optionSet.attr('data-filter-group');
      filters[ group ] = clicked_filter.attr('data-filter-value');
    
      // convert the filters object into an array of strings which are CSS class selectors
      var filters_to_use = [];
      for ( var group in filters ) {
        filters_to_use.push( filters[ group ] )
      }
      
      // smash the array together to get a big selector which will filter all elements with the filter classes
      var selector = filters_to_use.join('');
      
      // run the filter on the isotope element
      ports.isotope({ filter: selector });
    }
  );
}