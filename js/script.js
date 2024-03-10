var isMobile;
if (window.innerWidth < 768 || window.innerHeight < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true;
} else {
    isMobile = false;
} 


try{
if (isMobile){
    document.getElementById('logo').src = 'img/dsmp.png';
    document.head.appendChild(document.createElement('style')).innerHTML = `nomob {display: none;}`;
}
} catch (e) {
    console.log(e);
}

var r = document.querySelector(':root');
r.style.setProperty('--screen-width', window.innerWidth + 'px');
r.style.setProperty('--screen-height', window.innerHeight + 'px'); 
