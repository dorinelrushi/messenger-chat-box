var input  = document.getElementById("input");
var btn = document.getElementById("btn");
var user = document.getElementById("mess");
var res  = document.getElementById("answer");
btn.addEventListener("click",function(e){
    e.preventDefault()
    var usr = input.value;
    var response = document.createElement("p");
    response.id  = "answ";
    const demo = document.createElement("p");
    demo.id = "para";
    demo.textContent = input.value;
    user.appendChild(demo);

    var date = new Date();
  
    if(input.value == "hello!" 
    || input.value == "hello"){
        var show = document.createElement("p");
        show.id = "date";
        show.textContent = "send at " +  date.getHours() + " : " + date.getMinutes();
        show.style.textAlign = "center";
        show.style.color = "#909090";
        response.textContent = "Hello There ! My name is dorinel"
        user.appendChild(show);
        user.appendChild(demo);
        setTimeout(()=>{
            user.appendChild(response);
            var seen = document.createElement("p");
            seen.id = "seen";
            user.appendChild(seen);
        },1000)
    }
    else if(input.value == "how old are you?"
     || input.value == "how old are you"){
        var show = document.createElement("p");
        show.id = "date";
        show.textContent = "send at " +  date.getHours() + ": " + date.getMinutes();
        show.style.textAlign = "center";
        show.style.color = "#909090";
        response.textContent = " I am 20 years old";
        user.appendChild(show);
        user.appendChild(demo);
        setTimeout(()=>{
            user.appendChild(response);
        },1000)
    }
    else if(input.value == "where are you from?"
    || input.value == "where are you from"){
        var show = document.createElement("p");
        show.id = "date";
        show.textContent = "send at " +  date.getHours() + ": " + date.getMinutes();
        show.style.textAlign = "center";
        show.style.color = "#909090";
        user.appendChild(show);
        response.textContent = " I am from Albania"
        user.appendChild(demo);
        setTimeout(()=>{
            user.appendChild(response);
        },1000)
       
    }
    else { 
        var show = document.createElement("p");
        show.id = "date";
        show.textContent = "send at " +  date.getHours() + ": " + date.getMinutes();
        show.style.textAlign = "center";
        show.style.color = "#909090";
        user.appendChild(show);
        response.textContent = "the message is not sent";
        response.style.color = "red";
        response.style.background = "none";
        response.style.marginTop = '-10px';
        response.style.marginLeft = '0px';
        user.appendChild(demo);
        setTimeout(()=>{
            user.appendChild(response);
        },1000)
       
    }

})