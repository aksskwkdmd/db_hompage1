$(function () {

    const ani = $('.ani')
    const mobMenuList = $('header .allMenuWrap .allMenu>li>span')
    $(window).on('load scroll', function () {

        const header = $('header');
        const visuLength = $('.visual').length;
        const visuHeight = $('.visual ').outerHeight();
        const h_Height = header.outerHeight();
        const scrollTop = $(window).scrollTop();
        // const winHeight = $(window).height();
        // const visual = $('.visual')

        header.addClass('load');
        // visual.addClass('down');
        // console.log(visuLength);

        if (visuLength > 0) {

            if (scrollTop >= visuHeight - h_Height) { //현재의 높이값이 visual에서 header를 뺀것보다 크면
                header.addClass('down');
            } else {
                header.removeClass('down');

            }
        }

        
    })
    allMenu()
    
    main_Visu()

    function allMenu() {
        const allMenu = $('header .btn_all_menu');

        const header = $('header');
        const allBg = $('.allMenu_bg')
        // const header = $('#header');
        const visual = $('.visual')

        header.addClass('load');
        // visual.addClass('gogo');

        allMenu.click(function (e) {
            e.preventDefault();
            if (header.hasClass('active') == false) {
                header.addClass('active ');
                allBg.fadeIn();
            } else {

                header.removeClass('active');
                allBg.fadeOut();
            }

        })

       
        mobMenuList.click(function () {
            if ($(this).parent('li').hasClass('On')) {
                $(this)
                    .parent('li')
                    .removeClass('On');
                $(this)
                    .siblings('ul.depth2')
                    .slideUp(300);
            } else {
                $(this)
                    .parent('li')
                    .addClass('On')
                    .siblings()
                    .removeClass('On')
                    .find('ul.depth2')
                    .slideUp(300);
                $(this)
                    .siblings('ul.depth2')
                    .slideDown(300);
            }
        })
    }



    $(window).on('load resize', function(){
		if(window.innerWidth > 1100){
			$('header .allMenuWrap .allMenu>li>ul').removeAttr('style');
		}else{
			//$('#header .allMenuWrap .allMenu ul').hide();
		}
	});


    function main_Visu() {

        const SLIDER = $('.visual .slider li')
        const S_NAV = $('.visu_nav li');
        let s_Num = SLIDER.length;
        let idx = 0;
        let value;

        first()
        function first() {
            SLIDER
                .eq(idx)
                .addClass('On')
            S_NAV
                .eq(idx)
                .addClass('active')

        }

        setInterval(visual, 6000)
     

        function visual() {
            reset()

            idx++;

            if (idx == s_Num) {
                idx = 0;
            }

            SLIDER
                .eq(idx)
                .addClass('On')
            S_NAV
                .eq(idx)
                .addClass('active')

        }

        S_NAV.click(function (e) {
            e.preventDefault();
            let i = $(this).index();

            reset()
            SLIDER
                .eq(i)
                .addClass('On')
            S_NAV
                .eq(i)
                .addClass('active')

        })

        function reset() {
            SLIDER.removeClass('On')
            S_NAV.removeClass('active')

        }

    }


    $.fn.lizMoving = function() {//사용자 정의 메소드 
        let elementTop = $(this).offset().top;  //선택한 요소의 Y축 좌표값
        let elementBottom = elementTop + $(this).outerHeight();//Y축 좌표값+현재요소의 높이값  
  
        let viewportTop = $(window).scrollTop();//화면의 스크롤값
        // console.log(vh/5)
        let viewportBottom = viewportTop + $(window).height();//스크롤값+화면의 높이
  
        // 이값들을 사용자정의 함수에 돌려준다
        //현재요소의 하단 끝까지의 높이값 > 화면의 스크롤값 그리고  0.2 그리고 선택요소의 Y좌표값<스크롤값+화면높이

        // console.log('선택요소 Y축 좌표값 + 현재요소 높이값'+elementBottom);
        // console.log('화면의 스크롤값'+viewportTop);
        // console.log('선택요소의 Y축 좌표값'+ elementTop)
        // console.log('스크롤값+화면의 높이'+ viewportBottom)
        //영역으로 들어온 상태  + 영역을 벗어난상태
        return ( viewportTop < elementBottom)  && (elementTop < viewportBottom ) ;
      };

      $(window).on('load resize scroll',function(){
          
  
        
        
        ani.each(function(){//각각의 ani를 찾는다 
            if($(this).lizMoving()){
                $(this).addClass('moving');
            }
            else{
                $(this).removeClass('moving');

            }
        });

   
    });


})