
function plus(ouo,xouo,price){
    event.preventDefault()
    document.getElementById(ouo).value =parseInt(document.getElementById(ouo).value)+1; 
    document.getElementById(xouo).value=parseInt(price)*parseInt(document.getElementById(ouo).value);
    
    as();
    

}

function minus(ouo,xouo,price){
    event.preventDefault()
    document.getElementById(ouo).value =parseInt(document.getElementById(ouo).value)-1; 
    document.getElementById(xouo).value=parseInt(price)*parseInt(document.getElementById(ouo).value);
    
    as();
    
}


function as(){
    var t,m
    let z 
    var  y = document.getElementsByClassName("sumoo");
    m=0
    for(t=0 ; t < y.length ; t++){
        
        z=parseInt(y[t].value);
        if (isNaN(z)) 
        z=0
        m+=z;
       
        // alert( z );
       
    }
    document.getElementById("countMoney").value=m;
     console.log(m);
     event.preventDefault()
  }

  var transhcan = document.getElementsByClassName("deletehh");
  var orderlist123=document.getElementsByClassName("orderListxdd")
  var sumow = document.getElementsByClassName("sumoo")

  for(let ry=0;ry<orderlist123.length;ry++){
  transhcan[ry].addEventListener("click", function (){
    orderlist123[ry].style.display = "none";
    sumow[ry].value="0"
    as();
  })}