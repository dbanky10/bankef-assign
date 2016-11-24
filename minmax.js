function MinMax(array) {
  for (var i = 1; i < array.length; i++){
   var min = Math.min.apply(Math,array)
   var max = Math.max.apply(Math,array)
  return [min, max];