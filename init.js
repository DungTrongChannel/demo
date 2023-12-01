var BDS= {
  inits: function(){
    $('.li').click(function(){
      var id = $(this).attr('data');
      $('html, body').animate({
        scrollTop: $("#"+id).offset().top
      }, 500);
    });
    $('.h3-title').hide();
    $('#a-totop').click(function(){
      $('html, body').animate({
        scrollTop: 0
      })
    });
    window.onscroll = function (e) {
      if (window.scrollY >= $("#GROUP177").offset().top - 80) {
        $('.h3-title-about-us').show(function(){
          $("h3-title-about-us").animate({
            height: 'toggle'
          });
        });
      }
      if (window.scrollY >= $("#vitri").offset().top - 50) {
        $('.h3-title-position').show(function(){
          $("h3-title-position").animate({
            height: 'toggle'
          });
        });
      }

      if (window.scrollY >= $("#tienich").offset().top - 50) {
        $('.h3-title-utilities').show(function(){
          $("h3-title-utilities").animate({
            height: 'toggle'
          });
        });
      }
      if (window.scrollY >= $("#GROUP184").offset().top -70) {
        $('.h3-title-advantage').show(function(){
          $("h3-title-advantage").animate({
            height: 'toggle'
          });
        });
      }
      if (window.scrollY >= $("#GROUP167").offset().top - 50) {
        $('.h3-title-sale').show(function(){
          $("h3-title-sale").animate({
            height: 'toggle'
          });
        });
      }

      if (window.scrollY >= $("#Stu").offset().top - 50) {
        $('.h3-title-product').show(function(){
          $("h3-title-product").animate({
            height: 'toggle'
          });
        });
      }
    };
  }
}
$(document).ready(function(){
  BDS.inits();
})