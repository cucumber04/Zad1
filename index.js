const btn = document.querySelector(".btn");
const allsquare = document.querySelector(".allsquare")
let count = 1  ;


const addElement = () => {
  
  
  const newDiv = document.createElement("div");
  if(count % 5 == 0){
    newDiv.classList.add("circle")
  newDiv.textContent = count;
  }else{
  newDiv.classList.add("square")
  newDiv.textContent = count;
  }
  allsquare.appendChild(newDiv)
  
  
  count++
 console.log(count)
};


btn.addEventListener("click", addElement);