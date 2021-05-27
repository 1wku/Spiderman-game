var character = document.getElementById("character");
var block = document.getElementById("block");
var score = 0;
function jump () {
    if (character.classList !="animate") {
        character.classList.add("animate");
    }
     setTimeout(function(){
         character.classList.remove("animate");
     },500);
}
var score = 0;
var checkScore = setInterval(function() {
    score++;
},2000)
var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < -80 && blockLeft > -100 && characterTop > 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("game  over score : " + score);
    }
},10);