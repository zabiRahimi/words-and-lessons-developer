
// اسکرول را به اول صفحه می برد
const scrollToTop=()=>{
    // window.scrollTo(0, 0);
    $('html,body').animate({ scrollTop: 0 }, 'slow');
}
// جهت نمایش دادن یا ندادن دکمه بالا برنده
// این تابع در تگ بادی فراخوانده می شود 
const showScrollToTop=()=>{
    let windowH=$(window).height() - 150;
        (windowH <= window.scrollY )?$('#scrollToTop').css('display','flex') :$('#scrollToTop').css('display','none');
}