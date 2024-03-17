function confirm1() {
    document.getElementById("takeMethodtt").innerText = "外帶";
    document.getElementById("locationShoptt").style.display = "none";
    document.getElementById("locationShoptt").style.display = "block";
    document.getElementById("locationShopttr").innerText = document.getElementById("locationShop").value;
    document.getElementById("namett").innerText = document.getElementById("yourName").value;
    document.getElementById("phonett").innerText = document.getElementById("phoneNumber").value;



    var selectopopop = document.getElementById("takeTime")
    if (selectopopop.value == document.getElementById("today").value) {
    document.getElementById("timett").innerText =
    document.getElementById("takeTime").value + '\xa0' +
    document.getElementById("takeTime1").value
    } else  {
        document.getElementById("timett").innerText =
        document.getElementById("takeTime").value + '\xa0' +
        document.getElementById("takeTime2").value
  
     };
     
     alert('資料輸入成功 請前往選餐')

   
}

function confirm2() {
    document.getElementById("takeMethodtt").innerText = "外送";
    document.getElementById("addresstt").style.display = "none";
    document.getElementById("addresstt").style.display = "block";
    document.getElementById("addressttr").innerText =
    document.getElementById("address").value + document.getElementById("address1").value;
    document.getElementById("namett").innerText = document.getElementById("yourName1").value;
    document.getElementById("phonett").innerText = document.getElementById("phoneNumber1").value;



    var selectopopop = document.getElementById("deliveryTime")
    if (selectopopop.value == document.getElementById("today1").value) {
    document.getElementById("timett").innerText =
    document.getElementById("deliveryTime").value + '\xa0' +
    document.getElementById("deliveryTime1").value
    } else  {
        document.getElementById("timett").innerText =
        document.getElementById("deliveryTime").value + '\xa0' +
        document.getElementById("deliveryTime2").value
  
     }
     alert('資料輸入成功 請前往選餐')
}

function inputcode(){
    if(document.getElementById("salecode1").value=="111"){
        document.getElementById("coupon1").style.display="block";
        alert("恭喜你獲得1號優惠券");
    }else if(document.getElementById("salecode1").value=="222"){
        document.getElementById("coupon2").style.display="block";
        alert("恭喜你獲得2號優惠券");
    }else if(document.getElementById("salecode1").value=="333"){
        document.getElementById("coupon3").style.display="block";
        alert("恭喜你獲得3號優惠券");
    }else if(document.getElementById("salecode1").value=="444"){
        document.getElementById("coupon4").style.display="block";
        alert("恭喜你獲得4號優惠券");
    }else if(document.getElementById("salecode1").value=="555"){
        document.getElementById("coupon5").style.display="block";
        alert("恭喜你獲得5號優惠券");
    }else  {
        alert("輸入資訊錯誤或不可為空");
        return false;
    }
    event.preventDefault();
}

function entercode(event){
    if (event.key === "Enter") {
        event.preventDefault();
      inputcode();

}
}