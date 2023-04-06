const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event)=>{
    /* console.log(event.pageX);
    console.log(event.pageY);
    //displays cursor position on axis */
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
});