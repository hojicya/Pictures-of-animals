  'use strict'

{

  window.onload = function() {
    let countBtn = document.getElementById("countBtn");
    let count = document.getElementById("count");
    let count_value = 0;

    countBtn.onclick=function(){
      count_value += 1;
      count.innerHTML=count_value;
    }
  }
}
