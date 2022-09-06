const capitalize = (word)=>
{
  return word.replace(/[aeiouy]/g, function(l) {
  return l.toUpperCase();
  });
} 

