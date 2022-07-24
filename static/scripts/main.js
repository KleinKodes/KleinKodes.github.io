function delay (URL, id) {
    console.log(id);
    lower_card_hand(id);
    setTimeout( function() { window.open(URL, "_blank");location.reload(); }, 3500 );
    console.log("here");
    
    
}

function lower_card_hand(id) {
    const lower = document.getElementsByClassName("card_hand");
    const maybe = document.getElementById("card_hand_1");
    const haha = document.getElementById(id);
    const overlay = document.getElementById("overlay");


    
    //maybe.hidden = true;
    overlay.style.visibility="visible";
    overlay.append(haha);

    maybe.style.transition ="1s";
    maybe.style.transform = "translateY(100rem)";
    maybe.style.overflowX="hidden";
    maybe.style.top="105%";



    

    //haha.style.top = "50%";
    //haha.style.left = "50%";
    //haha.style.position = "absolute";
    haha.style.animationName = "select_card";
    haha.style.animationDuration = "3s";
    haha.style.animationFillMode = "forwards";
    haha.style.animationTimingFunction = "ease";

    
    
}