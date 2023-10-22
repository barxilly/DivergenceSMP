var social = document.getElementsByTagName("social");
            console.log(social);
            for (var i = 0; i < social.length; i++) {
                var socialf = social[i];
                var socialID = socialf.getAttribute("id");
                var socialType = socialf.getAttribute("class");
                console.log(socialID + " " + socialType);
                if (socialType == "kick") {
                    socialf.innerHTML = '<a href="https://kick.com/' + socialID + '" target="_blank"><i class="fab fa-kick">K</i> ' + socialID + '</a>';
                    var icon = socialf.getElementsByTagName("i")[0];
                    icon.style.color = "#00FF00";
                    icon.style.fontFamily = "times new roman";
                    icon.style.fontWeight = "bold";
                } else if (socialType == "twitch") {
                    socialf.innerHTML = '<a href="https://twitch.tv/' + socialID + '" target="_blank"><i class="fab fa-twitch"></i> ' + socialID + '</a>';
                    var icon = socialf.getElementsByTagName("i")[0];
                    icon.style.color = "#6441a5";
                } else if (socialType == "youtube") {
                    socialf.innerHTML = '<a href="https://youtube.com/' + socialID + '" target="_blank"><i class="fab fa-youtube"></i> ' + socialID + '</a>';
                    var icon = socialf.getElementsByTagName("i")[0];
                    icon.style.color = "#FF0000";
                } else if (socialType == "twitter") {
                    socialf.innerHTML = '<a href="https://x.com/' + socialID + '" target="_blank"><i class="fab fa-twitter"></i> ' + socialID + '</a>';
                    var icon = socialf.getElementsByTagName("i")[0];
                    icon.style.color = "#1da1f2";
                } else if (socialType == "instagram") {
                    socialf.innerHTML = '<a href="https://instagram.com/' + socialID + '" target="_blank"><i class="fab fa-instagram"></i> ' + socialID + '</a>';
                    var icon = socialf.getElementsByTagName("i")[0];
                    icon.style.color = "#E1306C";
                } else if (socialType == "reddit") {
                    socialf.innerHTML = '<a href="https://reddit.com/u/' + socialID + '" target="_blank"><i class="fab fa-reddit"></i> ' + socialID + '</a>';
                    var icon = socialf.getElementsByTagName("i")[0];
                    icon.style.color = "#ff4500";
                } else if (socialType == "facebook") {
                    socialf.innerHTML = '<a href="https://facebook.com/' + socialID + '" target="_blank"><i class="fab fa-facebook"></i> ' + socialID + '</a>';
                    var icon = socialf.getElementsByTagName("i")[0];
                    icon.style.color = "#3b5998";
                } else if (socialType == "tiktok") {
                    socialf.innerHTML = '<a href="https://tiktok.com/' + socialID + '" target="_blank"><i class="fab fa-tiktok"></i> ' + socialID + '</a>';
                    var icon = socialf.getElementsByTagName("i")[0];
                    icon.style.color = "#000";
                }
            }

var socials = document.getElementsByTagName("memberSocials");
// Set to random pastel colour
var mode = document.cookie.split(";");
const re = /mode=(\d+)/;
var mode = document.cookie.match(re)[1];
console.log("Mode" + mode);
if (mode == "0") {
    var pastelColours = ["#FFB3BA", "#FFDFBA", "#FFFFBA", "#B9FFBA", "#BAC4FF", "#FBB9FF"];
} else if (mode == "1") {
    var pastelColours = ["#052b72", "#0f3d09", "#3d0f0f", "#3d0f2f", "#3d2f0f", "#2f3d0f"];
} else if (mode == "2") {
    var pastelColours = ["#72490c", "#72490c"];
}
for (var i = 0; i < socials.length; i++) {
    var randomColour = pastelColours[Math.floor(Math.random() * pastelColours.length)];
    socials[i].style.background = randomColour;
}