let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("pervious-entries");


function increment() {
  count += 1;
  countEl.innerHTML = count;
}
function reset() {
  count = 0;
  countEl.innerHTML = count;
}

function save() {
   
  let countstr = count + "- ";
  saveEl.innerHTML = saveEl.innerHTML + countstr;
  //if you want to restart the counting once you saved the previous entry, then
  //you can uncomment these two lines
  //count=0
  //countEl.innerHTML=count
}

function clearall() {
  let emptystr = " ";
  saveEl.innerHTML = emptystr;
  saveEl.innerHTML = "Previous Entries: ";
  
}
