/** OWL CAROUSEL **/
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000
  });
});


/** EVENT CALENDAR **/
	$(document).ready(function() {

		$('#calendar').fullCalendar({
            events: [
        {
            title  : 'Hair Sample Show',
            start  : '2017-12-05'
        },
        {
            title  : 'Makeup Session',
            start  : '2017-12-01',
            end    : '2017-12-02'
        },
        {
            title  : 'Holiday Sale',
            start  : '2017-12-13T12:30:00',
            allDay : false // will make the time show
        },
        {
            title  : 'Last Minute Makeup Sessions',
            start  : '2017-12-25T13:30:00',
            allDay : false // will make the time show
        }
    ]
		});

});

/** CUSTOM JQUERY EFFECT **/
$("#banner2").click(function() {
  $("#banner3").fadeOut("slow", function() {
    // Animation complete
  });
});

/** CUSTOM JAVASCRIPT **/
var selectedElement = document.getElementById( 'eventintro' );

var intro = document.createElement('article');

intro.innerHTML = '<h4>Our Events</h4><p>Here is a calendar to view our upcoming events.</p>';

selectedElement.appendChild( intro );

intro.className = 'introduction';
