   
$(document).ready(function(){
            $(".owl-carousel").owlCarousel({
            items:3,
            loop:true,
            nav:false,
            center:true,
            dots:false,
            startPosition:1,
            responsive:{
            1440:{
                  items:3
            },
            1024:{
                  items:2,
                  center:false,
                  startPosition:1,
            },
            768:{
                  items:2,
                  center:false,
                  startPosition:1,
            },
            425:{
                  items:1,
            },
            376:{
                  items:1,
            }
            }
            });

            function startCounting(elementId, start = 1, end = 1000, interval = 1000) {
                  let current = start;
              
                  const counterElement = document.getElementById(elementId);
              
                  const intervalId = setInterval(() => {
                      counterElement.textContent = current + " +";
                      if (current >= end) {
                          clearInterval(intervalId);
                      } else {
                          current++;
                      }
                  }, interval);
              }
              
              // Call the function for the four counters
              startCounting('counter1', 1, 978, 5);
              startCounting('counter2', 1, 564, 5);
              startCounting('counter3', 1, 132, 5);
              
            
});