import data from './data.json' assert { type: "json" };
var present=document.querySelectorAll(".duration");
var previous=document.querySelectorAll(".previous");
$(".tabs").click(function(){
  $("a.selected").removeClass("selected");
  $(this).addClass("selected");
  var id=$(this).attr("id");
  for(var i=1;i<=6;i++){
    var data1=data[i];
    $(present[i-1]).text(data1.timeframes[id].current+"hrs");
    $(previous[i-1]).text("Last Week - "+data1.timeframes[id].previous+"hrs"); 
  }
});

