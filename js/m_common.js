$(function() {

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
    });
    
    $('.main-wrap .tab-box a').on('click', function(){
        $(this).addClass('on').siblings().removeClass('on');
        return false;
    });

    $('.detail-tab a').on('click', function(){
        $(this).addClass('on').siblings().removeClass('on');
        $('a.disabled').unbind('click');
        return false;
    });




    
});