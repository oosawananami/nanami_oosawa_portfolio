//上に戻るボタンstart
$(function() {
  // alert("描画完了");

  var showflag = false;
  var pagetop = $('#page_top');
  pagetop.css('bottom', '-100px');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {  //100pxスクロールしたら
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


  $('.slider').slick({
    autplay:false, //自動的に動かさない
    infinite:true, //スライドをループ
    slidesToShow:2, //スライドを画面に映す枚数
    slidesToScroll:1, //1回のスクロールで移動する枚数
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots:true,
  })


});
