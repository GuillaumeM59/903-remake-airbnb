jQuery(function($){
  $('#datetimepicker').datepicker({
    dateFormat : 'dd/mm/yy',
    minDate : 0,
    maxDate : 365,

  }
  );
});

jQuery(function($){
  $('#datetimepicker2').datepicker({
    dateFormat : 'dd/mm/yy',
    minDate : 1,
    maxDate : 365,

  }
  );
});

var elem = new Foundation.OffCanvas(element);

(document).foundation({
equalizer : {
// Specify if Equalizer should make elements equal height once they become stacked.
equalize_on_stack: true
}
});


// CROSSFADER

// function cycleImages(){
//       var $active = $('#imghost .active');
//       var $next = ($active.next().length > 0) ? $active.next() : $('#imghost img:first');
//       $next.css('z-index',2);//move the next image up the pile
//       $active.fadeOut(1500,function(){//fade out the top image
// 	  $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
//           $next.css('z-index',3).addClass('active');//make the next image the top one
//       });
//     }

$(document).ready(function(){
// run every 7s
setInterval('cycleImages()', 7000);
})
