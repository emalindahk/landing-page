function openNav(){
    document.getElementById("mySidenav").style.transform= "translateX(0px)";
    document.getElementById("mySidenav").style.marginLeft= "250px";
}

function closeNav(){
    document.getElementById("mySidenav").style.transform= "translateX(-250px)";
    document.getElementById("mySidenav").style.marginLeft= "0px";
}

$(document).ready(function(){
    $('.case-studies').slick({
        appendArrows: $('#arrows'),
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        ]
      });
                  
});