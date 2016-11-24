
function ArithGeo(arr) { 

var diff = arr[1] - arr[0];
var ratio = arr[1] / arr[0];

var arit = true;
var geo = true;

for(var i = 0; i < arr.length - 1; i++)
{
    if( arr[i + 1] - arr[i] !== diff )
      arit = false;
    if(arr[i + 1] / ratio !== arr[i])
      geo = false;
}

if(arit === true)
    return "arithmetic";
else if(geo === true)
    return" geometric";
else
    return -1;
}
