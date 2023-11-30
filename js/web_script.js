$(document).ready(function(){
    
    var i = 0;
    $('.nav_wrap a:nth-child(2)').click(function(){
        
        if (i==0) {
            $('.box').css({
                height: 400,
            });
            i++;
        } else if(i==1) {
            $('.box').css({
                height: 0,
            });
            i=0;
        }

    }); 

    $('.product_wrap > li').each(function(index){
        $(this).attr('data-index', index);
    });


    $('.product_btn3 li').each(function(index){
        $(this).attr('data-index', index);
    }).click(function(){

        j = $(this).attr('data-index')

        $('.product_btn3 li').removeClass('click');
        $('.product_btn3 li').eq(j).addClass('click');
        
        // $('.product_wrap > li').eq(j).removeClass('off');
        // $('.product_wrap > li').eq(j).addClass('on');
        // $('.product_wrap > li').not(':eq(j)').addClass('off');
        
        // if($('.product_wrap>li').eq(j).css('display')=='none'){
        //     $('.product_wrap>li').eq(j).css('display', 'block')
        // }else if($('.prdocut_wrap>li').not(eq(j)).css('display')=='block'){
        //     $('.product_wrap>li').not(eq(j)).css('display', 'none')
        // }


        // -------------------------------------------------------
        var clicked = $(this).attr('data-index');
        // console.log(clicked);

        $('.product_wrap>li').css({
            display:'none',
        });
        $('.product_wrap>li').eq(clicked).css({
            display:'block',
        });


        // clicked(데이터 인덱스)가 똑같은 것만 display:block이 되어야 한다

        
    });






    
    
























}); //end