//上に戻るボタンstart
$(function() {
  // alert("描画完了");
    $('header ul').addClass('fadeIn');
    $('.main_visual').addClass('fadeIn');


  var showflag = false;
  var pagetop = $('#page_top');
  pagetop.css('bottom', '-100px');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) { 
      //100pxスクロールしたら
      if (showflag == false) {
        showflag = true;
        pagetop.stop().animate({
          'bottom': '50px' //下から50pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (showflag) {
        showflag= false;
        pagetop.stop().animate({
          'bottom': '-50px' //下から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
  //上に戻るボタンend
  
  
  //フェードインstart
  $(window).scroll(function () {
    
    let profile = $('.plofile');
    let profile0 = profile.offset().top;
    let profile1 = profile0 + profile.height();
    
    let content = $('.content_wrap');
   // let content0 = content.offset().top;
    
    let windowH = $(window).height();
    let windowS = $(window).scrollTop();
  
    if (windowS > profile0 - windowH + (windowH/2)){
      profile.addClass('fadeIn');
    }
    
    if (windowS > profile1 ){
      content.addClass('fadeIn');
    }
  });
  //フェードインend
 2

  $('.slider').slick({
    autplay:false, //自動的に動かさない
    infinite:true, //スライドをループ
    slidesToShow:2, //スライドを画面に映す枚数
    slidesToScroll:1, //1回のスクロールで移動する枚数
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots:true,
    responsive: [
		{
			breakpoint: 576,//モニターの横幅が426px以下の見せ方
			settings: {
				slidesToShow: 1,//スライドを画面に1枚見せる
				slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
			}
		}
	]
  })


});
