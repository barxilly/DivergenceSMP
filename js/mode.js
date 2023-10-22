function setCookie(name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();
    document.cookie = name + "=" + value + expires + "; path=/";
}

if (document.cookie == "") {
    setCookie("mode", "0", 365);
}

var mode = document.cookie.split(";")[0].split("=")[1];
try{
var modeIcon = document.getElementById("mode").getElementsByTagName("i")[0];
if (mode == "0") {
    modeIcon.classList = "fa fa-sun";
} else if (mode == "1") {
    modeIcon.classList = "fa fa-moon";
} else if (mode == "2") {
    modeIcon.classList = "fa fa-skull";
}

modeIcon.addEventListener("click", function () {
    if (mode == "0") {
        modeIcon.classList = "fa fa-moon";
        setCookie("mode", "1", 365);
        mode = "1";
    } else if (mode == "1") {
        modeIcon.classList = "fa fa-skull";
        setCookie("mode", "2", 365);
        mode = "2";
    } else if (mode == "2") {
        modeIcon.classList = "fa fa-sun";
        setCookie("mode", "0", 365);
        mode = "0";
    }
    document.location.reload(true);
});
} catch (e) {
    console.log(e);
}

console.log(mode);
if (mode == "0") {
    // Get the root element
    var r = document.querySelector(':root');
    r.style.setProperty("--bg-colour", "rgb(216, 248, 248)");
    r.style.setProperty("--alt-bg-colour", "rgb(169, 185, 185)");
    r.style.setProperty("--nav-colour", "#4f78c4");
    r.style.setProperty("--nav-text-colour", "#ffffff");
    r.style.setProperty("--nav-item-colour", "#4299c2");
    r.style.setProperty("--nav-text-hover-colour", "#e6e6e6");
    r.style.setProperty("--text-colour", "#000000");
    r.style.setProperty("--text-hover-colour", "#343942");
} else if (mode == "1") {
    // Get the root element
    var r = document.querySelector(':root');
    r.style.setProperty("--bg-colour", "#18243b");
    r.style.setProperty("--alt-bg-colour", "#21314e");
    r.style.setProperty("--nav-colour", "#081938");
    r.style.setProperty("--nav-text-colour", "#ffffff");
    r.style.setProperty("--nav-item-colour", "#000000");
    r.style.setProperty("--nav-text-hover-colour", "#ffffff");
    r.style.setProperty("--text-colour", "#ffffff");
    r.style.setProperty("--text-hover-colour", "#ffffff");
} else if (mode == "2") {
    // Get the root element
    var r = document.querySelector(':root');
    r.style.setProperty("--bg-colour", "#7c2700");
    r.style.setProperty("--alt-bg-colour", "#72490c");
    r.style.setProperty("--nav-colour", "#2b0401");
    r.style.setProperty("--nav-text-colour", "#ffffff");
    r.style.setProperty("--nav-item-colour", "#000000");
    r.style.setProperty("--nav-text-hover-colour", "#ffffff");
    r.style.setProperty("--text-colour", "#ffffff");
    r.style.setProperty("--text-hover-colour", "#ffffff");
    try{
    var titleSection = document.getElementsByTagName('titlesection')[0];
    titleSection.style.setProperty('background', 'url("/img/nether3.png") repeat-x');
    titleSection.style.setProperty('background-size', '200% 200%');
    titleSection.style.setProperty('animation', 'slide 10000s linear infinite');
    } catch (e) {
    }
    // Show particles
    // Create a canvas element
    var canvas = document.createElement("canvas");
    canvas.id = "canvas";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";
    document.body.appendChild(canvas);
    // Create the particle object
    var particle = {};
    // Create an array to store our particles
    var particles = [];
    // The amount of particles to render
    var particleCount = 1000;
    // The maximum velocity in each direction
    particle.maxVelocity = 2;
    // The target frames per second (how often do we want to update / redraw the scene)
    particle.targetFPS = 33;
    // Particle colours
    particle.colours = ["#642305"];
    // Set the canvas element and its drawing context
    particle.canvas = document.getElementById("canvas");
    particle.context = particle.canvas.getContext("2d");
    // Initialise the scene 
    particle.initialise = function () {
        // Create the particles and set their initial positions and velocities
        for (var i = 0; i < particleCount; ++i) {
            var tempParticle = new Particle();
            tempParticle.initialise(0, particle.canvas.width, 0, particle.canvas.height);
            particles.push(tempParticle);
        }
        // Start the timer
        setInterval(particle.draw, 1000 / particle.targetFPS);
    };
    // Draw the scene
    particle.draw = function () {
        particle.context.clearRect(0, 0, particle.canvas.width, particle.canvas.height);
        particle.context.fillStyle = "#7c2700";
        particle.context.fillRect(0, 0, particle.canvas.width, particle.canvas.height);
        // Draw the particles
        for (var i = 0; i < particles.length; ++i) {
            var tempParticle = particles[i];
            tempParticle.draw();
        }
    };
    // The particle class
    var Particle = function () {
        this.initialise = function (xMin, xMax, yMin, yMax) {
            // Set the initial x and y positions within the bounds
            this.x = Math.random() * (xMax - xMin) + xMin;
            this.y = Math.random() * (yMax - yMin) + yMin;
            // Set the initial velocity
            this.xVelocity = (Math.random() * particle.maxVelocity * 2) - particle.maxVelocity;
            this.yVelocity = (Math.random() * particle.maxVelocity * 2) - particle.maxVelocity;
            // Set the radius
            this.radius = 2;
            // Set the colours
            this.colour = particle.colours[Math.floor(Math.random() * particle.colours.length)];
        };
        // Draws the particle on the canvas
        this.draw = function () {
            // Draw the square on the canvas
            particle.context.fillStyle = this.colour;
            particle.context.beginPath();
            particle.context.arc(this.x, this.y, this.radius, 0, 5, false);
            particle.context.fill();
        };
    };
    // Initialise the scene
    particle.initialise();
    // Move the particles
    setInterval(function () {
        for (var i = 0; i < particles.length; ++i) {
            var tempParticle = particles[i];
            // Update the position of the particle
            tempParticle.x += tempParticle.xVelocity;
            tempParticle.y += tempParticle.yVelocity;
            // Check if the particle has crossed the right edge
            if (tempParticle.x >= particle.canvas.width) {
                tempParticle.xVelocity = -tempParticle.xVelocity;
                tempParticle.x = particle.canvas.width;
            }
            // Check if the particle has crossed the left edge
            else if (tempParticle.x <= 0) {
                tempParticle.xVelocity = -tempParticle.xVelocity;
                tempParticle.x = 0;
            }
            // Check if the particle has crossed the bottom edge
            if (tempParticle.y >= particle.canvas.height) {
                tempParticle.yVelocity = -tempParticle.yVelocity;
                tempParticle.y = particle.canvas.height;
            }
            // Check if the particle has crossed the top edge
            else if (tempParticle.y <= 0) {
                tempParticle.yVelocity = -tempParticle.yVelocity;
                tempParticle.y = 0;
            }
        }
    }, 1000 / 60);
}

