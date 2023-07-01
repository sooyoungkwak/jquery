const menu=$('#nav>li');

menu.hover(function(){
    let tg=$(this);
    let onImg=tg.find('.text-image>.on');
    let offImg=tg.find('.text-image>.off');
    let menuImage=tg.find('.menu-image');
    let imageHeight=tg.find('.menu-image img').innerHeight();

    onImg.css('display','block');
    offImg.css('display','block');
    menuImage.stop().animate({height: imageHeight}, 500)

},function(){

    let tg=$(this);
    let onImg=tg.find('.text-image>.on');
    let offImg=tg.find('.text-image>.off');
    let menuImage=tg.find('.menu-image');
    let imageHeight=0;

    onImg.css('display','none');
    offImg.css('display','block');
    menuImage.stop().animate({height: 0}, 500)

})