document.querySelector(".contacts-mobile").addEventListener("click", ()=>{
    let display = document.querySelector(".user-chats").style.display;
    if(display == "none")
        document.querySelector(".user-chats").style.display = "flex";
    else{
        document.querySelector(".user-chats").style.display = "none";
    }
});