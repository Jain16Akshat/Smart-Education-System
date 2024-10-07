
function showAbout(element){
    let parent = element.parentElement;
    let atClick = parent.querySelector(".atClickAbt");
    let imageSec = parent.querySelector(".img-section");
    let courseName = parent.querySelector(".course-name");
    let backspace = parent.querySelector("i");
    let about = parent.querySelector(".about")
    backspace.addEventListener("click",()=>{
        atClick.style.display = "none";
        imageSec.style.display = "block"
        courseName.style.display = "block";
        about.style.display = "block"
        })
    if(about.style.display === "none"){
        
    }
    else{
        atClick.style.display = "flex";
        imageSec.style.display = "none";
        courseName.style.display = "none";
        about.style.display = "none";
    }
}

// function hideAbout(element){
//     let parent = element.parentElement;
//     parent.style.display = "none";
//     // let hide = parent.querySelector("i");
// }
    
