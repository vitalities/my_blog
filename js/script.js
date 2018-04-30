$( document ).ready(function functionName() {

  // footer
  var footer = $('footer');
  var showFooter = function() {
    footer.animate({top : '8%'}, 500);
  };

  var hideFooter = function() {
    footer.animate({top : '92%'}, 500);
  };

  var
    toolBox = $('.toolbox');
    toolBoxHeader = $('.toolbox-header h1');
    ldot = $('.dot-left');
    rdot = $('.dot-right');

  var blackToolBox = function() {
    toolBox.animate({backgroundColor : '#2c2c2c'}, 500);
    toolBoxHeader.animate({color : '#c1c1c1'}, 500);
    footer.css({boxShadow: '0px 0px 0px'});
  };

  // footer.css({boxShadow: '0 0 3px rgba(0, 0, 0, 0.5)'});

  var WhiteToolBox = function() {
    toolBox.animate({backgroundColor : '#f8f8f8'}, 500);
    toolBoxHeader.animate({color : '#2c2c2c'}, 500);
    footer.css({boxShadow: '0 0 3px rgba(0, 0, 0, 0.5)'});
  };



  $('.footer__about h4').click(function() {
    if ($(this).hasClass('active tab')) {
      hideFooter();
      WhiteToolBox();
      $(this).removeClass('active tab');
      ldot.removeClass('active-dot');
      $(this).attr('title','');
      $(this).parent().siblings().children('.active').attr('title','');
      $(this).parent().siblings().children('.active').removeClass('active tab');
    } else {
      showFooter();
      blackToolBox();
      // showAbout();
      // hideContacts();
      $(this).addClass('active tab');
      ldot.addClass('active-dot');
      rdot.removeClass('active-dot');
      $(this).attr('title','Tap to close this')
      $(this).parent().siblings().children('.active').attr('title','');
      $(this).parent().siblings().children('.active').removeClass('active tab');
    }
  });

  $('.footer__contacts h4').click(function() {
    if ($(this).hasClass('active tab')) {
      hideFooter();
      WhiteToolBox();
      $(this).removeClass('active tab');
      rdot.removeClass('active-dot');
      $(this).attr('title','');
      $(this).parent().siblings().children('.active').attr('title','');
      $(this).parent().siblings().children('.active').removeClass('active tab');
    } else {
      showFooter();
      blackToolBox();
      // showContacts();
      // hideAbout();
      $(this).addClass('active tab');
      rdot.addClass('active-dot');
      ldot.removeClass('active-dot');
      $(this).attr('title','Tap to close this');
      $(this).parent().siblings().children('.active').attr('title','');
      $(this).parent().siblings().children('.active').removeClass('active tab');
    }
  });

})
