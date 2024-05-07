var circles = document.querySelectorAll('.circle');
var btn = document.querySelector('.btn');
var boxFlip = document.querySelector('.thanks-box-flip');
var rating = document.querySelector('#select-txt');

circles.forEach(function(circle){

let num = parseInt(circle.textContent);

    circle.addEventListener("click", function(){
        btn.classList.add("btn-newStyle");
    
        btn.addEventListener("click", function(){
            boxFlip.style.zIndex = "1";

            var txtRating = `You selected ${num} out of 5`;
            rating.textContent = txtRating;
        });
    });
});