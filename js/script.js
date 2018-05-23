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
    contactsContent = $('.contacts-content');
    aboutContent = $('.about-content');
  var showAbout = function() {
    aboutContent.animate({right : '0%'}, 500);
  }
  var hideAbout = function() {
    aboutContent.animate({right : '100%'}, 500);
  }
  var showContacts = function() {
    contactsContent.animate({left : '0%'}, 500);
  }
  var hideContacts = function() {
    contactsContent.animate({left : '100%'}, 500);
  }


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
      aboutContent.fadeOut(500);
      WhiteToolBox();
      $(this).removeClass('active tab');
      ldot.removeClass('active-dot');
      ldot.fadeOut(500);
      rdot.fadeOut(500);
      $(this).attr('title','');
      $(this).parent().siblings().children('.active').attr('title','');
      $(this).parent().siblings().children('.active').removeClass('active tab');
    } else {
      showFooter();
      blackToolBox();
      hideContacts();
      aboutContent.fadeIn(100);
      showAbout();
      $(this).addClass('active tab');
      ldot.addClass('active-dot');
      ldot.fadeIn(500);
      rdot.fadeIn(500);
      rdot.removeClass('active-dot');
      $(this).attr('title','Tap to close this')
      $(this).parent().siblings().children('.active').attr('title','');
      $(this).parent().siblings().children('.active').removeClass('active tab');
    }
  });

  $('.footer__contacts h4').click(function() {
    if ($(this).hasClass('active tab')) {
      hideFooter();
      contactsContent.fadeOut(500);
      WhiteToolBox();
      $(this).removeClass('active tab');
      rdot.removeClass('active-dot');
      ldot.fadeOut(500);
      rdot.fadeOut(500);
      $(this).attr('title','');
      $(this).parent().siblings().children('.active').attr('title','');
      $(this).parent().siblings().children('.active').removeClass('active tab');
    } else {
      showFooter();
      blackToolBox();
      hideAbout();
      contactsContent.fadeIn(100);
      showContacts();
      $(this).addClass('active tab');
      rdot.addClass('active-dot');
      ldot.fadeIn(500);
      rdot.fadeIn(500);
      ldot.removeClass('active-dot');
      $(this).attr('title','Tap to close this');
      $(this).parent().siblings().children('.active').attr('title','');
      $(this).parent().siblings().children('.active').removeClass('active tab');
    }
  });

  var
    socialsBlock = $('.contacts__socials-block');
    socialsCurtain = $('.contacts__socials-curtain');

  socialsBlock.hover(function() {
    $(this).find(socialsCurtain).stop().animate({bottom : '25%'},300);
    $(this).css({cursor : 'pointer'});

  }, function() {
    $(this).find(socialsCurtain).stop().animate({bottom : '0%'},250);
  });

  var
  // Social links
    g = 'https://plus.google.com/discover';
    f = 'https://facebook.com';
    t = 'https://twitter.com';
    y = 'https://www.youtube.com/channel/UCEgdi0XIXXZ-qJOFPf4JSKw';
    // i = 'https://www.instagram.com';

  var socialsLink = function(link) {
    window.open(link);
  };

  $('.social-1').click(function() {
    socialsLink(g);
  })

  $('.social-2').click(function() {
    socialsLink(f);
  })

  $('.social-3').click(function() {
    socialsLink(t);
  })

  $('.social-4').click(function() {
    socialsLink(y);
  })



  var
    feedbackForm = $('.feedbackform-cover');
    feedbackButtonOpen = $('.contacts__feedback-button');
    feedbackButtonClose = $('.close_button');
    footerAndToolbox = $('.footer-content-block');
    feedbackIsShow = false;
    footerTrCover = $('.footer-tr-cover');

  var feedbackShow = function() {
    var duration = 500;
    feedbackForm.animate({top:'350%', opacity: '1'},500);
    fatBlurIn()
    footerTrCover.css({display: 'block'});
    setTimeout(function () {
      feedbackIsShow = true;
    }, 1);

  };

  var feedbackHide = function() {
    var duration = 100;
    feedbackForm.animate({top:'3000%', opacity: '0'},500);
    fatBlurOut()
    footerTrCover.css({display: 'none'});
    setTimeout(function () {
      feedbackIsShow = false;
    }, 1);
  };

  var fatBlurIn = function() {
    blurElement(footerAndToolbox, 10)
  }
  var fatBlurOut = function() {
    blurElementFast(footerAndToolbox, 0)
  }

  feedbackButtonOpen.click(feedbackShow);
  feedbackButtonClose.click(feedbackHide);


  // blurElement

  function blurElement(element, size){
  var filterVal = 'blur('+size+'px)';
  $(element).css({
        'filter':filterVal,
        'webkitFilter':filterVal,
        'mozFilter':filterVal,
        'oFilter':filterVal,
        'msFilter':filterVal,
        'transition':'all 0.25s ease-out',
        '-webkit-transition':'all 0.25s ease-out',
        '-moz-transition':'all 0.25s ease-out',
        '-o-transition':'all 0.25s ease-out'
    });
  }
  function blurElementFast(element, size){
  var filterVal = 'blur('+size+'px)';
  $(element).css({
        'filter':filterVal,
        'webkitFilter':filterVal,
        'mozFilter':filterVal,
        'oFilter':filterVal,
        'msFilter':filterVal,
        'transition':'all 0.1s ease-out',
        '-webkit-transition':'all 0.1s ease-out',
        '-moz-transition':'all 0.1s ease-out',
        '-o-transition':'all 0.1s ease-out'
    });
  }

  $('body').click(function(evt) {
    if (feedbackIsShow) {
      if (evt.target.id == 'footerTrCover') {
          feedbackHide();
      } else {
          return;
      }
  }})


})
