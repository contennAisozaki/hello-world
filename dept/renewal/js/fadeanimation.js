// JavaScript Document

$(function(){

  var fadeWrapper = $("#fade_wrapper");
  var fadeText= $('.block-one');
  var bodyWrapper = $('#wrapper');

  $(window).on("load",function(){
    var anime = "no";
    if(!$.cookie("animation")){ //「animation」というクッキーが存在しないか確認
      anime = "yes";
    }else{
      if($.cookie("animation" !== "yes")){ //「animation」というクッキーに「yes」が入っていなかった場合・・・
        anime = "yes";
      }
    }

    //アニメーション表示
    if(anime == "yes"){
      $("#fade_wrapper").css('display','block');
      setTimeout(function() {
        $("#fade_wrapper").fadeOut(1200);
        $('#wrapper').fadeIn(1200);
      }, 3000);
      //var date = new Date();
      //date.setTime( date.getTime() + ( 30 * 1000 ));
      $.cookie("animation", "yes", { expires: 1 });
    }else{
      $('#wrapper').css('display','block'); //「animation」というクッキーが「no」の場合場合訪問済みとみなしてTOPページのみ表示
    }

  });

});
