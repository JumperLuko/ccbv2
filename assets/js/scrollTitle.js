function scrollBanner() {
    var paralaxItem = document.querySelector(".titlePage");
    var scrollPosition = window.scrollY;
    var topNav = document.querySelector("nav").offsetHeight;

    if (scrollPosition < 300+topNav && scrollPosition > topNav){
        scrollPositionNav = scrollPosition-topNav;
        // paralaxItem.style.opacity = 1 - ((scrollPosition-topNav)/300);
        paralaxItem.style.paddingTop = scrollPositionNav+0 +"px";
        // paralaxItem.style.backgroundSize = (100+scrollPositionNav/10)+"% "+(100+scrollPositionNav/10)+"%";
        paralaxItem.style.backgroundPositionY = (scrollPositionNav/3)+"px";
    }else if(scrollPosition < topNav){
        paralaxItem.style.paddingTop= "0px";
        paralaxItem.style.height = "300px";
        paralaxItem.style.backgroundPositionY = "0px";
    }
}
window.addEventListener('scroll', scrollBanner);