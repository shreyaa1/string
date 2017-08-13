function printValue(){
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
var arr1 =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
for(var j =0; j<arr1.length; j++){
  var indexValue = value.match(arr1[j]);
  if(indexValue) {
    time.push(indexValue);
  }
}

var at =value.match(/at/g);
if(day && time && at ){
  document.getElementById('result').innerHTML = day[0]+ " " + at[0] + " " + time[0];
}else{
    document.getElementById('result').innerHTML = "not match";
}

};
