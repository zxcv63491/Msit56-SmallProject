var today = new Date();
var today1 = new Date();
var today2 = new Date();
var today3 = new Date();
var todays= new Date(today1.setMinutes(today1.getMinutes()+15));
var todayss= new Date(today2.setMinutes(today2.getMinutes()+30));
var todaysss= new Date(today3.setMinutes(today3.getMinutes()+45));
var todayx= todays.getMinutes().toString().padStart(2,"0") ;
var todayxx= todayss.getMinutes().toString().padStart(2,"0")  ;
var todayxxx= todaysss.getMinutes().toString().padStart(2,"0")  ;
var todayu=todays.getHours() ;
var todayuu=todayss.getHours() ;
var todayuuu=todaysss.getHours() ;
    // today.setDate(today.getDay() + 1);
    // today.setMonth(today.getMonth() + 1);
    // console.log(today);
    document.getElementById("today").innerText = 
    `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}` ;
    document.getElementById("tommorrow").innerText = 
    `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()+1}` ;
    document.getElementById("threeday").innerText = 
    `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()+2}` ;
    document.getElementById("fourday").innerText = 
    `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()+3}` ;
    document.getElementById("today1").innerText = 
    `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}` ;
    document.getElementById("tommorrow1").innerText = 
    `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()+1}` ;
    document.getElementById("threeday1").innerText = 
    `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()+2}` ;
    document.getElementById("fourday1").innerText = 
    `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()+3}` ;
    document.getElementById("hour1").innerText = 
    `${todayu}:${todayx}`;
    document.getElementById("hour2").innerText = 
    `${todayuu}:${todayxx}`;
    document.getElementById("hour3").innerText = 
    `${todayuuu}:${todayxxx}`;
    document.getElementById("hour4").innerText = 
    `${today.getHours()+1}:${today.getMinutes().toString().padStart(2,"0")}`;
    document.getElementById("hour11").innerText = 
    `${todayu}:${todayx}`;
    document.getElementById("hour21").innerText = 
    `${todayuu}:${todayxx}`;
    document.getElementById("hour31").innerText = 
    `${todayuuu}:${todayxxx}`;
    document.getElementById("hour41").innerText = 
    `${today.getHours()+1}:${today.getMinutes().toString().padStart(2,"0")}`;
    
    document.getElementById("today").value = 
    document.getElementById("today").innerText;
    document.getElementById("tommorrow").value = 
    document.getElementById("tommorrow").innerText;
    document.getElementById("threeday").value = 
    document.getElementById("threeday").innerText;
    document.getElementById("fourday").value = 
    document.getElementById("fourday").innerText;
    document.getElementById("today1").value = 
    document.getElementById("today1").innerText;
    document.getElementById("tommorrow1").value = 
    document.getElementById("tommorrow1").innerText ;
    document.getElementById("threeday1").value = 
    document.getElementById("threeday1").innerText ;
    document.getElementById("fourday1").value = 
    document.getElementById("fourday1").innerText ;
    document.getElementById("hour1").value = 
    document.getElementById("hour1").innerText;
    document.getElementById("hour2").value = 
    document.getElementById("hour2").innerText;
    document.getElementById("hour3").value = 
    document.getElementById("hour3").innerText;
    document.getElementById("hour4").value = 
    document.getElementById("hour4").innerText;
    document.getElementById("hour11").value = 
    document.getElementById("hour11").innerText;
    document.getElementById("hour21").value = 
    document.getElementById("hour21").innerText;
    document.getElementById("hour31").value = 
    document.getElementById("hour31").innerText;
    document.getElementById("hour41").value = 
    document.getElementById("hour41").innerText;