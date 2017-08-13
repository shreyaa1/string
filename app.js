function printValue(){
var value = document.getElementById('root').value;
var tommorow =value.match(/tommorow/g);
var nine=value.match(/9/g);
var at =value.match(/at/g);
if(tommorow && nine && at ){
  document.getElementById('result').innerHTML = tommorow[0]+" "+ at[0] + " " + nine[0];
}else{
    document.getElementById('result').innerHTML = "not match";
}

};
