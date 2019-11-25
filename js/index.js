function card() {
    if (window.matchMedia("(max-width: 720px)").matches) {
        var card = document.getElementById('card');
        card.classList.remove("layer1hover");
        card.onclick = null;
        return;
    }
    var background = document.getElementById('card-background');

    var card = document.getElementById('card');
    var cardClassList = card.classList;
    cardClassList.add("shrink");
    cardClassList.remove("layer1hover");
    card.onclick = null;

    var frontClassList = card.getElementsByClassName('front')[0].classList;
    var backClassList = card.getElementsByClassName('back')[0].classList;
    frontClassList.add("shrink-img");

    setTimeout( function(){
        background.remove();
        frontClassList.add("fronthover");
        backClassList.add("backhover");}, 5000 );

    var slices = background.getElementsByClassName('slice');
    var i;
    for (i = 0; i < slices.length; i++) {
        slices[i].classList.add("fold");
    }
}
