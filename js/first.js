
function time(){
    var timenow= new Date();
    days.innerHTML = timenow.getDay() + " day";
    hours.innerHTML = timenow.getHours() + " hour";
    min.innerHTML = timenow.getMinutes() + " minutes";
    sec.innerHTML = timenow.getSeconds() + " seconds";


    if(hours < 10 && min < 10 && sec < 10 )
    {
        hours ="0" + hours ;
        min = "0" + min ;
        sec = "0" + sec;
    }
}

setInterval(time,500);

$("#pside i").click(function(){
    $(".side").toggle(1000);
})




let count=document.getElementById("count");
let text=document.getElementById("text");
let lengthh=text.getAttribute("maxlength");
text.oninput = function(){
    count.innerHTML= lengthh - this.value.length;
}

