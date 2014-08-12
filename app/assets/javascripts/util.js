function randomInt(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

function getExtremes(rappers, property=0){
  var min = Number.MAX_VALUE;
  var max = 0;

  for(var i in rappers){
    var year = rappers[i][property];
    min = min > year ? year : min;
	max = max < year ? year : max;
  }

  return [min, max];
}
