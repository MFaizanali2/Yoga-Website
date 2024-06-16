let home = document.querySelector("#home");

document.addEventListener("mousemove", function(good){
    let cursor = document.querySelector(".cursor");
    cursor.style.left = good.x + "px";
    cursor.style.top = good.y + "px";
});