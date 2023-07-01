/* $('#nav>li>div').click(function(e){
    e.preventDefault();
    $('.sub').hide();
    $(this).next().show();
}); */

/* $('#nav>li>div').click(function(e){
    e.preventDefault();
    $('.sub').slideUp();
    if($(this).next().css("display")=='none'){
        $('.sub').slideUp();
    }
    $(this).next().slideDown();
});
 */

$('#nav>li>div').click(function(e){
    e.preventDefault();

    let th=$(this).next();
    $('.sub').slideUp();
    if(th.is(':visible')){
        th.slideUp()
    }else{
        th.slideDown()
    }
});

let a=true;

$('#nav>li>div').click(function(e){
    e.preventDefault();

    if(a==true){
        $(this).next().slideDown();
    }else{
        $(this).next().slideUp();
        a=true;
    }
});