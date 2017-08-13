function printValue() {
var value = document.getElementById('root').value;
 value= value.toLowerCase();
 var day = [];
 var arr =["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "tomorrow", "today", "yesterday"];
 for(var i =0; i<arr.length; i++){
   if(value.match(arr[i])){
     day.push(value.match(arr[i]));
   }
}
var time=[];
var matchTime = /\d+/g;
var timeList = value.match(matchTime);
if(timeList) {
  if (timeList[0] && (0 < Number(timeList[0])) && (Number(timeList[0]) < 24)){
   time.push(timeList[0]);
}
}

var at =value.match(/at/g);

if(day && day.length && time && time.length && at && at.length ){
  document.getElementById('result').innerHTML = day[0]+ " " + at[0] + " " + time[0];
}else{
    document.getElementById('result').innerHTML = "not match";
}

};
