var button =button.getElementById('counter');
var counter=0;
button.onclick=function(){
    
    
    
    
    counter=counter+1;
    var span= span.getElementById('count');
    span.innerHTML=counter.toString();
}