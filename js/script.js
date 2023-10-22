// run /js/mode.js
var modePath = "/js/mode.js";
var modeScript = document.createElement("script");
modeScript.src = modePath;
try{
    document.body.appendChild(modeScript);
} catch (e) {
    console.log(e);
}

var isMobile;
if (window.innerWidth < 768) {
    isMobile = true;
} else {
    isMobile = false;
}
var r = document.querySelector(':root');
r.style.setProperty('--screen-width', window.innerWidth + 'px');
r.style.setProperty('--screen-height', window.innerHeight + 'px');

try{
var titleSection = document.getElementsByTagName('titlesection')[0];
titleSection.style.setProperty('width', (window.innerWidth*0.9) + 'px');
titleSection.style.setProperty('height', (window.innerHeight*0.3333) + 'px');
if (isMobile){
    titleSection.style.setProperty('font-size', '1em');
}
var memberBio = document.getElementsByTagName('memberbio')[0];
memberBio.style.setProperty('width', (window.innerWidth*0.8) + 'px');
memberBio.style.setProperty('height', (window.innerHeight*0.3333) + 'px');
if (isMobile){
    memberBio.style.setProperty('font-size', '1em');
}
} catch (e) {
    console.log(e);
}


