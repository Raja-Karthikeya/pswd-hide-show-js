let pswd=document.getElementById("pswd")
let icon=document.querySelector("i")

icon.onclick=function(){
    if(pswd.type==="password"){
        pswd.type="text"
        icon.className="fa-solid fa-eye"
    }else{
        pswd.type="password"
        icon.className="fa-solid fa-eye-slash"
    }
}