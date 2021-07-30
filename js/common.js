$(function() {
    // $('#date').datepicker({
    //     dateFormat: 'yy년mm월dd일',
    //     showAnim: "slide",
    //     dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],	//한글 캘린더 요일 표시 부분
    //     dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],	//한글 요일 표시 부분
    //     dayNames: ['일', '월', '화', '수', '목', '금', '토'],	// 한글 요일 표시 부분
    //     monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],	//한글 캘린더중 월 표시를 위한 부분
    //     yearSuffix: '.',
    //     showMonthAfterYear: true,
    // });
    $('.datepicker').datepicker({
        dateFormat: 'yy년mm월dd일',
        showOn: 'both',
        buttonImage: "images/ico-cal.png",
        constrainInput: false,
        buttonImageOnly: true,
        dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],	//한글 캘린더 요일 표시 부분
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],	//한글 요일 표시 부분
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],	// 한글 요일 표시 부분
        monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],	//한글 캘린더중 월 표시를 위한 부분
        yearSuffix: '.',
        showMonthAfterYear: true,
    })
    dialog = $('#popup-certif').dialog({
        autoOpen: false,
        width: 665,
        modal: true,
        resizable : false,
        });
    $( "#popup-btn" ).button().on( "click", function() {
        dialog.dialog( "open" );
        return false;
    });
    $( ".popup-close" ).button().on( "click", function() {
        dialog.dialog( "close" );
        return false;
    });

    const mainSlide = new Swiper ('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    });

    var mobileSlide = new Swiper ('.mSlide.swiper-container', {
        loop: true,
        centeredSlides: true,
        slidesPerView : 1,
        slidesPerGroup : 1,
        autoplay : {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });


    $('.tit-sec .btn').on('click', function(){
        $(this).toggleClass('on');
        if($(this).hasClass('on')==true){
            $('.datepicker').css('display','block');
        }else {
            $('.datepicker').css('display','none');
        }    
        return false;
    })

    if($('#wrap').hasClass('sub_hd')==true){
        $('#header').addClass('sub');
    } else {
        $('#header').removeClass('sub');
    }



$('.filter .filter-btn').on('click', function(){
    $(this).toggleClass('on');
        if($(this).hasClass('on')==false){
            $('.search-wrap.hide').addClass('hidden')
        }else {
            $('.search-wrap.hide').removeClass('hidden')
        } 
        return false;
})


$('.filter .mfilter-btn').on('click', function(){
    $(this).toggleClass('on');
    if($(this).hasClass('on')==false){
        $(this).html('상세검색 닫기');
        $('.filter tr.hide').show();
    }else {
        $(this).html('상세검색 열기');
        $('.filter tr.hide').hide()
    }
    return false;
})



$(window).scroll(function(){
    var winTop = $(this).scrollTop();
    $('.popup-banner').stop().animate({top:winTop+150})
})






});