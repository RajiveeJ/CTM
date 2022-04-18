let element=document.querySelector("button");
element.addEventListener("click",function(){
    console.log("inseide event handler");
    const text=document.querySelector(".text");
console.log(text);
let newlist=document.createElement('li');
newlist.innerHTML=text.value;
let res=document.querySelector(".list");
res.appendChild(newlist);
text.value="";
});