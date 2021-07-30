const bulb = document.querySelector("#bulb");
const btn = document.querySelector("#btn");

btn.addEventListener("click",() =>{

    if(bulb.src.match("bulboff")){
        bulb.src = "./images/pic_bulbon.gif";
        btn.innerHTML = "Turn Off";
    } else{
        bulb.src = "./images/pic_bulboff.gif";
        btn.innerHTML = "Turn On";
    }
    
});