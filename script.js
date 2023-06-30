countEl=document.getElementById("count");
let count =0;
let saved=""
let welcome=document.getElementById("welcome-el")

function increment(){
    count += 1;
    countEl.innerText = +count;
}

function decrement(){
    
    count -= 1;
    countEl.innerText = count;
}
function save(){
    document.getElementById("count").innerText=0
   
    saved=count
    // welcome.innerText+=saved+" ,"
       welcome.textContent+=saved+" ,"//to save spaces 
        count=0 
 console.log(count)
  }
  welcome.innerText="previos entires: "
