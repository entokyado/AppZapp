function checkLightMode(light) {

    if (light === "true") {
        document.querySelectorAll(".dark").forEach((dark) => {dark.classList.toggle("light", true);});
        document.querySelectorAll(".dark2").forEach((dark) => {dark.classList.toggle("light2", true);});
        document.querySelectorAll(".darkText").forEach((dark) => {dark.classList.toggle("lightText", true);});
    } else {
        document.querySelectorAll(".dark").forEach((dark) => {dark.classList.toggle("light", false);});
        document.querySelectorAll(".dark2").forEach((dark) => {dark.classList.toggle("light2", false);});
        document.querySelectorAll(".darkText").forEach((dark) => {dark.classList.toggle("lightText", false);});
    }
}

function transparent() {
    console.log(document.querySelectorAll(".optionButton"));
    document.querySelectorAll(".optionsButton").forEach((btn) => {btn.classList.toggle("transparent", true);});
}

function showNewPostCard() {
    document.querySelector(".newPostCard").classList.toggle("hidden");
}

function showOptionsCard(id) {
    document.querySelectorAll(".optionsAll").forEach((all) => {
        if(all.id !== (`oa${id}`)) {
            all.querySelector(".optionsCard").classList.toggle("hidden", true);
            all.querySelector(".optionsButton").classList.toggle("transparent", true);
        }
    });
    document.getElementById(`oc${id}`).classList.toggle("hidden");
    document.getElementById(`ob${id}`).classList.toggle("transparent");
}

document.addEventListener("scroll", function() {
    document.querySelectorAll(".optionsAll").forEach((all) => {
        all.querySelector(".optionsCard").classList.toggle("hidden", true);
        all.querySelector(".optionsButton").classList.toggle("transparent", true);
    });
});

