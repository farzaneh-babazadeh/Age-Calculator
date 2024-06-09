
document.getElementById("calc").addEventListener("click",function(){
  
  var myDate = new Date(document.getElementById("date").value),
      enterDate = myDate.getTime(),
      month = myDate.getMonth(),
      day =myDate.getDay(),
      currentYear =new Date().getTime();
      year=  Math.floor((currentYear-enterDate) / 1000 / 60 / 60 / 24 / 30 / 12);

  const result= document.getElementById("result").innerHTML =`
  
  years :  ${ year } , month :  ${ month }, day :  ${ day }
  
  `
 });
