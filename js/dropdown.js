var isMobile;
if (window.innerWidth < 768) {
    isMobile = true;
} else {
    isMobile = false;
}
var navbarDropdowns = document.getElementsByTagName("dropdown");
if (!isMobile) {
    for (var i = 0; i < navbarDropdowns.length; i++) {
        var navbarDropdown = navbarDropdowns[i];
        var dropdownName = navbarDropdown.getElementsByTagName("a")[0];
        dropdownName.innerHTML += "&nbsp;<i class='fa fa-caret-down'></i>";
        var dropdownItems = navbarDropdown.getElementsByTagName("dropdown-content")[0];
        dropdownName.addEventListener("click", function () {
            if (dropdownItems.style.display == "block") {
                dropdownItems.style.display = "none";
                var icon = this.getElementsByTagName("i")[0];
                icon.classList = "fa fa-caret-down";
            } else {
                dropdownItems.style.display = "block";
                var icon = this.getElementsByTagName("i")[0];
                icon.classList = "fa fa-caret-up";
            }
        });
    };
} else {
    var navbarItems = document.getElementsByTagName("items")[0];
    navbarItems.style.justifyContent = "space-between";
    navbarItems.innerHTML = navbarItems.innerHTML.replace("Home", "<i class='fa fa-home'></i>");
    navbarItems.innerHTML = navbarItems.innerHTML.replace("Members", "<i class='fa fa-users'></i>");
    navbarItems.innerHTML = navbarItems.innerHTML.replace("Discord", "<i class='fab fa-discord'></i>");
    var names = document.getElementsByClassName("name");
    for (var i = 0; i < names.length; i++) {
        var namei = names[i];
        namei.style.fontSize = "2em";
    }
    try{
        var logo = document.getElementsByClassName("logo")[0];
        logo.style.width = "50%";
    } catch (e) {
        console.log(e);
        var biglogo = document.getElementsByClassName("biglogo")[0];
        biglogo.style.width = "100%";
    }
    for (var i = 0; i < navbarDropdowns.length; i++) {
        var navbarDropdown = navbarDropdowns[i];
        var dropdownName = navbarDropdown.getElementsByTagName("a")[0];
        dropdownName.innerHTML += "&nbsp;<i class='fa fa-caret-down'></i>";
        var dropdownItems = navbarDropdown.getElementsByTagName("dropdown-content")[0];
        dropdownName.addEventListener("click", function () {
            if (dropdownItems.style.display == "block") {
                dropdownItems.style.display = "none";
                var icon = this.getElementsByTagName("i")[1];
                icon.classList = "fa fa-caret-down";
            } else {
                dropdownItems.style.display = "block";
                var icon = this.getElementsByTagName("i")[1];
                icon.classList = "fa fa-caret-up";
            }
        });
    };

}