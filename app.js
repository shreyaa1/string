function printValue(){
var value = document.getElementById('root').value;
 value= value.toLowerCase();
var tomorrow =value.match(/tomorrow/g);
var nine=value.match(/9/g);
var at =value.match(/at/g);
if(tomorrow && nine && at ){
  document.getElementById('result').innerHTML = tomorrow[0]+ " " + at[0] + " " + nine[0];
}else{
    document.getElementById('result').innerHTML = "not match";
}

};
