function delay(URL, id, target = "_self") {
    if (target != "_self") target = "_blank";
    console.log(id);
    lower_card_hand(id);
    setTimeout(function () {
        var winref = window.open(URL, target); if (target != "_self" && screen.width > 480) location.reload();
        if (target != "_self" && screen.width <= 480) { location.reload(); winref.location = URL }
    }, 3500);
    console.log("here");


}

function lower_card_hand(id) {
    const lower = document.getElementsByClassName("card_hand");
    const maybe = document.getElementById("card_hand_1");
    const haha = document.getElementById(id);
    const overlay = document.getElementById("overlay");
    document.documentElement.style.overflow = "hidden";
    if (!overlay || !maybe || !lower || !haha) return;




    //maybe.hidden = true;
    overlay.style.visibility = "visible";
    overlay.append(haha);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    maybe.style.transition = "1s";
    maybe.style.transform = "translateY(100rem)";
    maybe.style.overflowX = "hidden";
    maybe.style.top = "105%";





    //haha.style.top = "50%";
    //haha.style.left = "50%";
    //haha.style.position = "absolute";
    haha.style.transformStyle = "preserve-3d"
    haha.style.animationName = "select_card";
    haha.style.animationDuration = "3s";
    haha.style.animationFillMode = "forwards";
    haha.style.animationTimingFunction = "ease";



}


//overriding back button
window.addEventListener("pageshow", function (event) {

    if (window.performance == "undefined") return;

    var perfEntries = performance.getEntriesByType("navigation");


    var historyTraversal = event.persisted ||
        (typeof window.performance != "undefined" &&
            perfEntries[0].type === "back_forward");
    if (historyTraversal) {
        // Handle page restore.
        window.location.reload();
    }
});