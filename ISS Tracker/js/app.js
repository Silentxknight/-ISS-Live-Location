// !code by Silent_Coder AKA SilentxKnight
$(function () { 
let getBtn=$("#getBtn");
let issUrl="http://api.open-notify.org/iss-now.json?";
let outPut=$('#outPut');
let test=$('#tesT')

getBtn.click(loadLocation);
function loadLocation () {
  $.getJSON(issUrl).done(function(data) {
         console.log(data);
 
         $.each(data['iss_position'], function (indexInArray,value) { 
            console.log( indexInArray+" : "+value);
           var loadedData="<ul>"+"<li>"+indexInArray+" : "+value+"</li>"+"</ul>"           
            
            outPut.append(loadedData);
            // $("<h4/>").html(loadedData).appendTo(outPut);
          
            
         });
       
       })  }
});
// var xhr =new XMLHttpRequest();
// xhr.open("GET","http://api.open-notify.org/iss-now.json?");
// xhr.onload=function(){
//     if(xhr.readyState!=4 || xhr.status!=200) return;
//     var data=JSON.parse(xhr.responseText);
//    console.log(data);
//    console.log(data['iss_position']);
//    for(i=0;i<data['iss_position'];i++){
       
//    }
   
   
  
// }
// xhr.send();  