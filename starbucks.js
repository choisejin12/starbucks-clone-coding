//header 드롭다운 메뉴 
var btns = document.querySelectorAll(".nav-sub-inner li h2"),
    sub_contents = document.querySelectorAll(".nav-sub-content"),
    sub_inner = document.querySelector(".nav-sub-inner"),
    action = "action";

for( var btn of btns){
    btn.addEventListener("mouseover",function(){
        var brother = this.nextSibling.nextSibling;
        brother.classList.add(action);
    });

    btn.addEventListener("mouseout",function(){
        document.querySelector(".nav-sub-inner .action").classList.remove(action);
    });
}
// 모바일버전 메뉴 보이기
var bar = document.querySelector(".mb-header-inner .fa-bars"),
    dimm = document.querySelector(".mb-menu-dimm"),
    close = document.querySelector(".fa-times"),
    wrap = document.querySelector(".mb-menu-wrap");

bar.addEventListener("click",function(){
    dimm.style.display="block";
    wrap.style.right="0";
});

close.addEventListener("click",function(){
    dimm.style.display="none";
    wrap.style.right="-100%";
});



//모바일 버전 header 드롭다운 메뉴

var menus = document.querySelectorAll(".mb-menu-ti");

for (var menu of menus){
    menu.addEventListener("click",handleClick);
}

function handleClick(){
    var openmenus = this.parentElement.children;

    var children = this.childNodes;
    for(var i=0; i<children.length; i++){
        if(children[i].nodeType != 1) continue    //텍스트제거
        var node = children.item(i);             //객체 가져오기
    }
    node.classList.toggle("fa-chevron-up");

    for(var openmenu of openmenus){
        openmenu.classList.toggle("active");
        
    }
    
}

//TOP 메인 부분 notice 슬라이드

const slides = document.querySelectorAll(".news_result li"),
      slidewrapper = document.querySelector(".news_result"),
      slidecount = slides.length,
      cnt=0;

function notice_autoslide(){
    setInterval(function(){
        for(const slide of slides){
            slide.classList.toggle("animated");
            if(slide.classList.contains("animated")){
                slide.style.height = 0 +"px";
            }
            else{
                slide.style.height = 24 +"px";
            }
        }
    },2000);
}

notice_autoslide();

//TOP 메인 부분 notice prom_bnr block 처리 부분

const bgr = document.querySelector(".line-notice-bgr"),
      prom = document.querySelector(".main_prom_bnr"),
      updown = document.querySelector(".line-notice-bgr div span");

bgr.addEventListener("click",function(){
    prom.classList.toggle("action2");
    if(prom.classList.contains("action2"))
    {
        updown.innerHTML = '<img src="//image.istarbucks.co.kr/common/img/common/btn_prom_down.png" alt="">';
    }

    else
    {
        updown.innerHTML = '<img src="//image.istarbucks.co.kr/common/img/common/btn_prom_up.png" alt="">';
     }
});

//TOP 메인 부분 prom_bnr 슬라이드 부분

var slideContainer2 = document.querySelector('.slider_container'),
    slidewrapper2 = document.querySelector(".bx-wrapper"),
    slide2 = document.querySelectorAll('.slider_container li'),
    navPrev2 = document.querySelector('.main_prevBtn'),
    navNext2 = document.querySelector('.main_NextBtn'),
    slidecount2 = slide2.length,
    timer = undefined,
    pagerHTML = '',
    pager = document.querySelector('.main_slide_pagers'),
    clickcount = 0;

for(var k=0; k<slidecount2; k++){
    slide2[k].style.left = k * 100 + "%";
    pagerHTML += '<span data-idx="'+k+'">'+(k+1)+'</span>';
    pager.innerHTML = pagerHTML;
}

pagerBtn = document.querySelectorAll('.main_slide_pagers span');

function goToSlide(num){
    slideContainer2.classList.add('animated');
    slideContainer2.style.left = -100 * num +'%';
    clickcount = num;

    for(var h=0; h<pagerBtn.length; h++){
      pagerBtn[h].classList.remove('active2');
    }

    pagerBtn[num].classList.add('active2');

    for(var cnt=0; cnt<slide2.length; cnt++){
        slide2[cnt].classList.remove("filter");
        }

        slide2[clickcount].classList.add("filter");
  }

  goToSlide(0);

  navNext2.addEventListener('click',function(){
    if(clickcount == slidecount2 - 1){
      goToSlide(0);
    }
    else{
      goToSlide(clickcount + 1);
    }
  });

  navPrev2.addEventListener('click',function(){
    if(clickcount == 0){
      goToSlide(slidecount2-1);
    }
    else{
      goToSlide(clickcount-1);
    }
  
  });

  function autoslide(){
    timer = setInterval(function(){
      var nextIdx  = (clickcount + 1 ) % slidecount2;
      goToSlide(nextIdx);

      for(var cnt=0; cnt<slide2.length; cnt++){
        slide2[cnt].classList.remove("filter");
        }

        slide2[nextIdx].classList.add("filter");
        
    },2000);
  
  }
  
  autoslide();
  
  function stopautoslide(){
    clearInterval(timer);
  }
  
  slidewrapper2.addEventListener('mouseenter',function(){
    stopautoslide();
  });
  
  slidewrapper2.addEventListener('mouseleave',function(){
    autoslide();
  });
  
  for(var k=0; k<pagerBtn.length; k++){
    pagerBtn[k].addEventListener('click',function(ev){
      var pagerNum =  ev.target.getAttribute('data-idx');
      goToSlide(pagerNum);
    });
  }

  const play = document.querySelector(".main_slide_control_inner .play"),
        stop = document.querySelector(".main_slide_control_inner .stop"),
        psbtn = document.querySelector(".main_slide_control_inner");
    
        psbtn.addEventListener("click",function(){
            
            psbtn.classList.toggle("play")
            if(psbtn.classList.contains("play")){
                psbtn.innerHTML = '<img src="https://image.istarbucks.co.kr/common/img/main/main_prom_stop.png" class="bt_play"></img>';
                autoslide();
            }

            else{
                psbtn.innerHTML = '<img src="https://image.istarbucks.co.kr/common/img/main/main_prom_play.png" class="bt_stop">';
                stopautoslide();
            }
        });
  //TOP 메인 부분 prom_bnr 슬라이드 부분 END


  // MAIN-BEAN 부분 스크롤시 이미지 부분


  const imgbox = document.querySelector(".bean_img_box"),
        docEle = document.documentElement,
        textbox = document.querySelector(".bean_text_box");

        window.addEventListener("scroll",function(){

            var Scroll = docEle.scrollTop;
            
            if(Scroll == 0)
            {
                imgbox.style.left="-100%";
                textbox.style.right="-100%";

            }

            else if(Scroll > 0){

                imgbox.style.left="8%";
                textbox.style.right="18%";
            }
        });

        
// MAIN-BEAN 부분 스크롤시 이미지 부분 END

// MAIN-BEAN 부분 미디어쿼리 스크롤시 이미지 부분


const beaninner = document.querySelector(".bean-inner");

window.addEventListener("scroll",function(){

    var Scroll = docEle.scrollTop;
    
    if(Scroll == 0)
    {
        beaninner.classList.remove("moving");

    }

    else if(Scroll > 0){

        beaninner.classList.add("moving");
    }
});


// MAIN-BEAN 부분 미디어쿼리 스크롤시 이미지 부분 END

// RESERVE_VISUAL 부분 스크롤시 이미지 부분

const reserveimg = document.querySelector(".reserve_visual");

window.addEventListener("scroll",function(){

    var Scroll = docEle.scrollTop;

    if(Scroll == 0)
    {
        reserveimg.style.opacity ="0";

    }

    else if(Scroll > 0){

        reserveimg.style.opacity ="1";
    }
});

// RESERVE_VISUAL 부분 스크롤시 이미지 부분 END

// WINTER_fAV 부분 스크롤시 이미지 && 미디어쿼리 부분 

const favtext1 = document.querySelector(".fav_prod_txt01"),
      favtext2 = document.querySelector(".fav_prod_txt02"),
      favbtn = document.querySelector(".btn_fav_prod");

const detailbtn = document.querySelector(".look-detail_btn"),
      mbbottom = document.querySelector(".reserve3_mobile-bottom"),
      rightimg = document.querySelector(".reserve_right img");
     
const txt01 = document.querySelector(".store_txt01"),
      txt02 = document.querySelector(".store_txt02"),
      storebtn = document.querySelector(".store_btn"),
      sotreimg01 = document.querySelector(".store_exp_img01"),
      sotreimg02 = document.querySelector(".store_exp_img02"),
      sotreimg03 = document.querySelector(".store_exp_img03"),
      sotreimg04 = document.querySelector(".store_exp_img04");

      if (matchMedia("screen and (max-width: 480px)").matches) {

        window.addEventListener("scroll",function(){

        var Scrollev = docEle.scrollTop;
     

        if(Scrollev <=3315 && Scrollev >= 3200){ //사라지는거
            favtext1.style.top = "300px";
            favtext1.style.opacity ="0";
            favtext2.style.top = "390px";
            favtext2.style.opacity ="0";
            favbtn.style.opacity="0";

        }
        else if(Scrollev <= 3437 && Scrollev >= 3300){ //나타나는거
            favtext1.style.top = "410px";
            favtext1.style.opacity ="1";
            favtext2.style.top = "490px";
            favtext2.style.opacity ="1";
        }

        else if(Scrollev <= 3800  && Scrollev >= 8750){ //링크 나타나는거
            favbtn.style.opacity="1";
        }


        if(Scrollev <=3599 && Scrollev >= 3550){ //사라짐
            mbbottom.style.bottom = "-100px";
            mbbottom.style.opacity = "0";
        }
        else if(Scrollev <= 3721 && Scrollev >= 3700){ //나타남
            mbbottom.style.bottom = "0px";
            mbbottom.style.opacity = "1";
        }

    });



}



else{
    window.addEventListener("scroll",function(){

        var Scrollev = docEle.scrollTop;

        console.log(Scrollev);
        
        if(Scrollev <= 1192 && Scrollev >= 1067){ //사라짐
            favtext1.style.left = "-700px";
            favtext1.style.opacity ="0";
            favtext2.style.left = "-700px";
            favtext2.style.opacity ="0";
            favbtn.style.opacity ="0";
        }
    
        else if(Scrollev <= 1919 && Scrollev >= 1193) { //나타남
            favtext1.style.left = "200px";
            favtext1.style.opacity ="1";
            favtext2.style.left = "92px";
            favtext2.style.opacity ="1";
            favbtn.style.opacity ="1";
    
        }

        if(Scrollev <= 2025 && Scrollev >= 1193){ //사라짐
            detailbtn.style.left = "100%";
            detailbtn.style.opacity ="0";
            rightimg.style.left="160%";
            rightimg.style.opacity ="0";

            txt01.style.right = "-700px";
            txt01.style.opacity ="0";
            txt02.style.right = "-700px";
            txt02.style.opacity ="0";
            storebtn .style.right = "-700px";
            storebtn .style.opacity ="0";
            
            sotreimg01.style.opacity ="0";
            sotreimg02.style.opacity ="0";
            sotreimg03.style.opacity ="0";
            sotreimg04.style.opacity ="0";
        }
        else if(Scrollev <=2576 && Scrollev >= 2026){ //나타남
            detailbtn.style.left = "20px";
            detailbtn.style.opacity ="1";
            rightimg.style.left="60px";
            rightimg.style.opacity ="1";

            txt01.style.right = "149px";
            txt01.style.opacity ="1";
            txt02.style.right = "168px";
            txt02.style.opacity ="1";
            storebtn .style.right = "402px";
            storebtn .style.opacity ="1";
            
            sotreimg01.style.opacity ="1";
            sotreimg02.style.opacity ="1";
            sotreimg03.style.opacity ="1";
            sotreimg04.style.opacity ="1";
        }

    });

}

// STOREWRAP 부분 스크롤시 이미지 && 미디어쿼리 부분 END

//FOOTER 부분 아코디온 메뉴 부분

const menus2 = document.querySelectorAll(".footer_menus .footer_menu_ttl"),
      menusli = document.querySelectorAll(".footer_menus .footer_menu_ttl~li");


for (var menu of menus2){
    menu.addEventListener("click",function(){
        var openmenus2 = this.parentElement.children;

        var children2 = this.childNodes;
        for(var i=0; i<children2.length; i++){
            if(children2[i].nodeType != 1) continue    //텍스트제거
            var node2 = children2.item(i);             //객체 가져오기
        }
        node2.classList.toggle("footer_arrow_up");
        
        if(node2.classList.contains("footer_arrow_up")){
            for(var openmenu2 of openmenus2){
                openmenu2.style.display = "list-item";
            }
        }

        else{
            for(var openmenu2 of openmenus2){
                openmenu2.style.display = "none";
                this.style.display="block";
            }
        
        }
        
    });
}

