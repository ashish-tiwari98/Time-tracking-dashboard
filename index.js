async function getdata(pos){
   await fetch('data.json')
  .then(res => res.json())
  .then(data => obj = data);
  return  obj[pos];
}

for(var i=0;i<6;i++){
let data = getdata(i);
data.then(function(res){
    document.querySelector(".task-heading").innerHTML=res.timeframes.daily.current;
});
}
