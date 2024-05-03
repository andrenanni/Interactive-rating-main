var circles = document.querySelectorAll('.circle');
var btn = document.querySelector('.btn');
var boxFlip = document.querySelector('.thanks-box-flip');

circles.forEach(function(circle){
    circle.addEventListener("click", function(){
        btn.classList.add("btn-newStyle");
    
        btn.addEventListener("click", function(){
            boxFlip.style.zIndex = "1";
        });
    });
});