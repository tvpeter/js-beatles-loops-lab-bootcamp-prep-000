// add solution here

function theBeatlesPlay(musicians, instruments)
{
  var arr = [];
  
  for(var i=0; i<musicians.length; i++)
  {
    var sett = musicians[i] + " plays "+ instruments[i];
    arr.push(sett);
  }
  
  return arr;
}

function johnLennonFacts (arr)
{
  var newArr = [];
  var i = 0;
  
  while( i < arr.length)
  {
    newArr.push(arr[i] + "!!!");
  
  }
  return newArr;
}