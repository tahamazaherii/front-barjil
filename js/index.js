let mosbat=document.querySelector(".-mosbat");
let manfi=document.querySelector(".-manfi");
let manfi2=document.querySelector(".-manfi2");
let adad=document.querySelector(".-add");
count=1;
tedad=1;
$(".-mosbat").click(function(){
    count +=1;
    tedad +=1;
    adad.textContent=tedad; 
   
})

$(".-manfi").click(function (){
    tedad -=1;
    count -=1;
    adad.textContent=tedad; 
    if(count <=1){
       
        manfi.style.cssText = "display:none;";
      
    } else if( count >1){
        manfi.style.cssText = "display:block;";
    }
   
    
})