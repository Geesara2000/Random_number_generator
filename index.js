let randomNum;
const min = 1;
const max = 6;
const mybtn = document.getElementById("mybtn");
const mylbl = document.getElementById("mylbl");



mybtn.onclick = function(){
  randomNum = Math.floor(Math.random()*max)+min;
  mylbl.textContent = randomNum;
}