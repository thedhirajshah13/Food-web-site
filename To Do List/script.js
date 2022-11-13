


document.querySelector(".btn").addEventListener("click",()=>{
    routine();
})


function routine(){
    var inputvalue=document.querySelector(".input").value;
    var list=document.createElement("li");
    var text=document.createTextNode(inputvalue);



    list.appendChild(text);
     var button=document.createElement("button");
     button.innerHTML="Delete";
     button.className="blur";
     list.appendChild(button)
     


     if(inputvalue==""){
        alert("write something")
     }

     else{
        document.querySelector(".ul").appendChild(list );
       
     }
    
}
