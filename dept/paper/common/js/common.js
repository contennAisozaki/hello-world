
//要素の高さを揃える

$(function(){
  if($('.matchHeight').length){
      $('.matchHeight').matchHeight();
    }
});

//PCSPをウィンドウサイズで分ける
//PC pcWin SP spWin
$(function(){
  var judgeDevice = function(){
  var windowWidth = $(window).innerWidth();

    if(windowWidth > 767) {
      $('body').removeClass('spWin');
      $('body').addClass('pcWin');
    } else {
      $('body').removeClass('pcWin');
      $('body').addClass('spWin');
    }
  }

  judgeDevice();

  $(window).on('load resize',function(){
    judgeDevice();
  });

});

//ハンバーガーメニュー
$(function(){

  var body = $('body');

  //sp
  var header = $('#header');
  var spNav = $('#nav');//出てくるメニュー
  var spBtn = $('.navOpen');//ハンバーガーボタン

//画面の高さ取得・ハンバーガーメニューの高さを指定する
  $(window).load(function() {
  //画面高さ取得
  h = $(window).height();
  spNav.css('height', h - 55 + 'px');
  });
  $(window).resize(function() {
  //画面リサイズ時の高さ取得
  h = $(window).height();
  spNav.css('height', h - 55 + 'px');
  });

  spNav.css('display','none');

  //オーバーレイ
  var bg = $('.layer');

  //スクロールの値
  var current_scrollY;

  spBtn.on('click',function(){

      if(!spBtn.hasClass('active')){
        nav_open(spBtn,spNav,bg);
      }else{
        nav_close(spBtn,spNav,bg);
      }
  });

  //オーバーレイを押したときの挙動
  bg.on('click',function(){
      if(!spBtn.hasClass('active')){
        return;
      }else{
        nav_close(spBtn,spNav,bg);
      }
  });

  function nav_open(spBtn_,spNav_,bg_){
    current_scrollY = $( window ).scrollTop();
    spBtn_.addClass('active');
    spNav_.stop(true,true).slideDown();
    bg_.stop(true,true).fadeIn();
    spBtn_.find('img').attr('src', spBtn_.find('img').attr('src').replace('_off', '_on')).css({
              visibility: 'visible'
            });
    $('#wrapper').css({ position: 'fixed', width: '100%',top: -1 * current_scrollY, left: 0, right: 0});
  }

  function nav_close(spBtn_,spNav_,bg_){
    spBtn_.removeClass('active');
    spNav_.stop(true,true).slideUp();
    bg_.stop(true,true).fadeOut();
    $('#wrapper').css({"position":"static",'width':' ','top':'0'}).prop( { scrollTop: current_scrollY } );
    $( 'body , html' ).attr( { style: '' } ).prop( { scrollTop: current_scrollY } );

    spBtn_.find('img').attr('src', spBtn_.find('img').attr('src').replace('_on', '_off')).css({
              visibility: 'visible'
            });
      }

});


$(function() {
  var topBtn = $('#pagetop');
  //スクロールしてトップ
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});

//ページ内リンク

$(function(){
// #で始まるアンカーをクリックした場合に処理
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

  // //アコーディオン
    $(function(){

    $('.acd dd .hide_area').hide();

    $('.acd .close_btn').on('click',function(){

      var dd = $(this).prev('.hide_area');
      if(dd.css('display') === 'none'){
        dd.slideDown(400);
        $(this).find('img').attr('src', $('.close_btn').find('img').attr('src').replace('_off', '_on')).css({
          visibility: 'visible'
        });
      } else {
        dd.slideUp(400);
        $(this).find('img').attr('src', $('.close_btn').find('img').attr('src').replace('_on', '_off')).css({
          visibility: 'visible'
        });
      }

    });

  });