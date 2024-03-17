function takeff(values) {
    var j, takeTimes;
    takeTimes = document.getElementsByClassName("takeTimes");
    for (j= 0; j< takeTimes.length;j++) {
        takeTimes[j].style.display = "none";
    };
    var selectedOption=values.options[values.selectedIndex];  
	//alert(selectedOption.value);
	if(selectedOption.id=="today"){
       
       document.getElementById("takeTime1").style.display= "inline";
 	}else if(selectedOption.id=="tommorrow"){
     
     document.getElementById("takeTime2").style.display= "inline";
 	}else if(selectedOption.id=="threeday"){
     
     document.getElementById("takeTime2").style.display= "inline";
 	}
     else if(selectedOption.id=="fourday"){
       
        document.getElementById("takeTime2").style.display= "inline";
    }
    
  }

  function takehh(values) {
    var j, takeTimess;
    takeTimess = document.getElementsByClassName("takeTimess");
    for (j= 0; j< takeTimess.length;j++) {
        takeTimess[j].style.display = "none";
    };
    var selectedOption=values.options[values.selectedIndex];  
	//alert(selectedOption.value);
	if(selectedOption.id=="today1"){
       
       document.getElementById("deliveryTime1").style.display= "inline";
 	}else if(selectedOption.id=="tommorrow1"){
     
     document.getElementById("deliveryTime2").style.display= "inline";
 	}else if(selectedOption.id=="threeday1"){
     
     document.getElementById("deliveryTime2").style.display= "inline";
 	}
     else if(selectedOption.id=="fourday1"){
       
        document.getElementById("deliveryTime2").style.display= "inline";
    }
    
  }