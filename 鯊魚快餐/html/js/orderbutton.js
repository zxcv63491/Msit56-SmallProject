function openList(evt, orderName) {
    var q, listcontent, listlinks;
    listcontent = document.getElementsByClassName("listcontent");
    for (q = 0; q < listcontent.length; q++) {
        listcontent[q].style.display = "none";
    }
    listlinks = document.getElementsByClassName("listlinks");
    for (q = 0; q < listlinks.length; q++) {
        listlinks[q].className = listlinks[q].className.replace(" active", "");
    }
    document.getElementById(orderName).style.display = "block";
    evt.currentTarget.className += " active";
    event.preventDefault();
  }
  