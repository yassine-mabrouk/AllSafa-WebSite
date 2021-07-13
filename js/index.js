//pour chager le temp de mouvement des images dans le carousel 
$(document).ready(function(){
    $('.carousel').carousel({
        interval:30000
    });
});
AOS.init({
    duration:2000
 });
 
$(document).ready(function() {
    $(".static .lead").counterUp({delay:10,time:2000});
   });
