document.body.addEventListener("click",(Event)=>{
    const clickedElement=Event.target,
    img=document.querySelectorAll(".img");

    if(!clickedElement.classList.contains("img")){
        img.forEach((img) => img.classList.remove("open"));
        return;
    }
    if(clickedElement.classList.contains("open")){
        clickedElement.classList.remove("open");
        
        return;
    }
    img.forEach((img)=>img.classList.remove("open"));
    clickedElement.classList.add("open");
});