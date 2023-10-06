
  const arr=[
    {
        title:"title1",
        description:"Description1",
        image:"./image/phone1.jpg",
    }, {
        title:"title2",
        description:"Description2",
        image:"./image/phone1.jpg"
    }, {
        title:"title3",
        description:"Description3",
        image:"./image/phone1.jpg"
    }, {
        title:"title4",
        description:"Description4",
        image:"./image/phone1.jpg"
    }, {
        title:"title5",
        description:"Description5",
        image:"./image/phone1.jpg"
    }, {
        title:"title6",
        description:"Description6",
        image:"./image/phone1.jpg"
    },
  ]
  const result = fetch("https://dummyjson.com/products") 
  .then(function (result) {
    return result.json();
  })
  .then(function (result) {
    displayData(result.products);
  }); 

function displayData(arr) {

for (let index = 0; index < 6; index++) {
  const cardsArea = document.querySelector(".cards-area");

  const div1 = document.createElement("div");


  div1.classList = "col-md-4 col-sm-12";


  const div2 = document.createElement("div");
  div2.classList = "card mb-3";


  const img = document.createElement("img");
  img.src = arr[index].images[0];
  img.classList = "card-img-top";


  const div3 = document.createElement("div");
  div3.classList = "card-body";

 
  const h5 = document.createElement("h5");
  h5.classList = "card-title";
  h5.innerText =arr[index].title;

  const h4=document.createElement('h4');
  h4.innerHTML=arr[index].price+"$";

  
  const p = document.createElement("p");
  p.classList = "card-text";
  p.innerText = arr[index].description;

  div3.append(h5);
  div3.append(p);
  div3.append(h4);

  
  div2.append(img);
  div2.append(div3);

  
  div1.append(div2);

  cardsArea.append(div1);

}
}



const input=document.querySelector(".input");
input.addEventListener("input",function(event){
  alert("Just For Testing")
})

const accept=document.querySelector("#accept");
const reject=document.querySelector("#REJECTED");

accept.addEventListener("click",function(event){
  prompt("if you like the website tell me aword of thanks")
})
reject.addEventListener("click",function(event){
  alert("Don't Say Any Thing")
})
const res=document.querySelector(".result")
const flag1=document.querySelector(".flags1");
const flag2=document.querySelector(".flags2");
const flag3=document.querySelector(".flags3");
const flag4=document.querySelector(".flags4");
const flag5=document.querySelector(".flags5");
const flag6=document.querySelector(".flags6");
const flag7=document.querySelector(".flags7");
const flag8=document.querySelector(".flags8");
const flag9=document.querySelector(".flags9");
const flag10=document.querySelector(".flags10");

flag1.addEventListener("click",function(event){
  res.innerHTML="SYR";
})
flag2.addEventListener("click",function(event){
  res.innerHTML="UAE";
})
flag3.addEventListener("click",function(event){
  res.innerHTML="TN";
})
flag4.addEventListener("click",function(event){
  res.innerHTML="UK";
})
flag5.addEventListener("click",function(event){
  res.innerHTML="LEB";
})
flag6.addEventListener("click",function(event){
  res.innerHTML="POL";
})
flag7.addEventListener("click",function(event){
  res.innerHTML="ESP";
})
flag8.addEventListener("click",function(event){
  res.innerHTML="BRA";
})
flag9.addEventListener("click",function(event){
  res.innerHTML="ARG";
})
flag10.addEventListener("click",function(event){
  res.innerHTML="RUS";
})



