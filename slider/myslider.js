$(function(){

  //移動する→表示していた要素を末尾に追加する。表示していた要素を削除する
  $('.slider-outer .next').on('click',function(){
      //スライドを一つ分移動する
      $('.slider-outer .slider').stop().animate({ right: "100%" },500,function(){
      //一番手前にある要素を末尾にコピーする
      $('.slider-outer .slider').append($('.slider-outer .slider').find('> div:first-child').clone(true));
      //スライドの最初の要素を削除する。
      $('.slider-outer .slider').find('> div:first-child').remove();
      //スクロール量を元に戻す。これをしないと削除したときにずれる
      $('.slider-outer .slider').css("right","0");
    });
  });

  //戻るボタンの動作
  $('.slider-outer .prev').on('click',function(){
      //最後の要素を追加する
      $('.slider-outer .slider').prepend($('.slider-outer .slider').find('> div:last-child').clone(true));
      //まずスクロール位置を補正しておく。先頭に追加しているのでそれが表示されてしまうため
      $('.slider-outer .slider').css("right","100%");
      //先頭にアペンドされていて、さらにスクロール位置まで移動しているので、あとはスクロール位置を戻すだけ
      $('.slider-outer .slider').stop().animate({right:"0"},500,function(){
      //最初に最後の要素を追加しているので、最後の要素を削除しておく
      $('.slider-outer .slider').find('> div:last-child').remove();
    });
  });


});
